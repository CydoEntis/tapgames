<template>
  <transition
    mode="out-in"
    enter-active-class="animate__animated animate__faster animate__fadeIn"
    leave-active-class="animate__animated animate__faster animate__fadeOut"
  >
    <div class="scene" v-if="getShowImage">
      <loading-spinner v-if="isLoading" />
      <div v-else class="card">
        <card-front />
        <card-back />
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import LoadingSpinner from "../spinners/LoadingSpinner.vue";
import CardBack from "./card-components/card-back-components/CardBack.vue";
import CardFront from "./card-components/card-front-components/CardFront.vue";

import { loadGamesFromStorage } from "../../helpers/storage";

export default {
  props: ["games"],
  emit: ["getNextGame"],
  components: {
    CardFront,
    CardBack,
    LoadingSpinner,
  },
  data() {
    return {
      showImage: true,
      isLoading: false,
    };
  },
  methods: {
    async fetchGames(api) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("fetchGames", api);
      } catch (e) {
        this.error = e.message || "Unable to fetch games";
      }
      this.isLoading = false;
    },
    increment() {
      this.$store.dispatch("incrementIndex");
    },
    checkForLastGame(likedGames, dislikedGames) {
      let lastLikedGame;
      if (likedGames !== undefined && likedGames.length > 0) {
        lastLikedGame = likedGames.length - 1;
      }

      let lastDislikedGame;
      if (dislikedGames !== undefined && dislikedGames.length > 0) {
        lastDislikedGame = dislikedGames.length - 1;
      }

      return { lastLikedGame, lastDislikedGame };
    },
    async checkWhichGameToFetch(likedGames, dislikedGames, fullUrl, lastGame) {
      if (likedGames === undefined && dislikedGames === undefined) {
        await this.fetchGames(fullUrl);
      } else if (likedGames !== undefined && dislikedGames === undefined) {
        await this.fetchGames(likedGames[lastGame.lastLikedGame].currentPage);
        this.$store.commit(
          "setIndex",
          likedGames[lastGame.lastLikedGame].index + 1
        );
      } else if (dislikedGames !== undefined && likedGames === undefined) {
        await this.fetchGames(
          dislikedGames[lastGame.lastDislikedGame].currentPage
        );
        this.$store.commit(
          "setIndex",
          dislikedGames[lastGame.lastDislikedGame].index + 1
        );
      } else if (
        dislikedGames &&
        likedGames &&
        likedGames[lastGame.lastLikedGame].entryTime >
          dislikedGames[lastGame.lastDislikedGame].entryTime
      ) {
        await this.fetchGames(likedGames[lastGame.lastLikedGame].currentPage);
        this.$store.commit(
          "setIndex",
          likedGames[lastGame.lastLikedGame].index + 1
        );
      } else if (
        dislikedGames &&
        likedGames &&
        dislikedGames[lastGame.lastDislikedGame].entryTime >
          likedGames[lastGame.lastLikedGame].entryTime
      ) {
        await this.fetchGames(
          dislikedGames[lastGame.lastDislikedGame].currentPage
        );
        this.$store.commit(
          "setIndex",
          dislikedGames[lastGame.lastDislikedGame].index + 1
        );
      }
    },
  },
  computed: {
    ...mapGetters(["getIndex", "getShowImage"]),
  },
  async created() {
    const likedGames = loadGamesFromStorage("likedGames");
    const dislikedGames = loadGamesFromStorage("dislikedGames");

    const apiUrl = "https://api.rawg.io/api/games?key=";
    const apiKey = "4ddf56496a3f4f1fb9d1338eebb64df7";
    const pageNumber = `&page=1`;
    const fullUrl = apiUrl + apiKey + pageNumber;

    const lastGame = this.checkForLastGame(likedGames, dislikedGames);

    await this.checkWhichGameToFetch(
      likedGames,
      dislikedGames,
      fullUrl,
      lastGame
    );
  },
};
</script>

<style lang="scss" scoped>
.scene {
  width: 375px;
  height: 600px;

  perspective: 1000px;
}

.card {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;

  background: #202020;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 15px;

  &.is-flipped {
    transform: rotateY(180deg);
  }
}

@media screen and (width: 768px) and (height: 1024px) {
  .scene {
    width: 460px;
    height: 700px;

    perspective: 1000px;
  }

  .card {
    width: 100%;
    height: 100%;
  }
}

@media screen and (width: 1024px) and (height: 1366px) {
  .scene {
    width: 560px;
    height: 800px;
  }

  .card {
    display: block;
    height: 100%;
    box-shadow: none;
  }
}

@media screen and (max-width: 450px) {
  .scene {
    width: 100vw;
    height: 100vh;

    perspective: 1000px;
  }

  .card {
    display: block;
    width: 100vw;
    height: 100%;
    box-shadow: none;
    border-radius: 0;
  }
}
</style>