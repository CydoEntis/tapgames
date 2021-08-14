<template>
  <div class="card__face card__face--front">
    <card-image :index="index" />
    <div class="card-info">
      <div class="align">
        <card-platforms :index="index" />
        <card-rating :index="index" />
      </div>
      <div class="align">
        <card-title-front :index="index" />
      </div>
      <div class="align">
        <card-genres :index="index" />
        <card-esrb :index="index" />
      </div>
      <div class="align">
        <card-play-time :index="index" />
      </div>
      <div class="align">
        <card-stores :index="index" />
      </div>
    </div>
    <card-front-controls
      @dislike-game="getNextGame"
      @flip-card="flipCard"
      @like-game="likeGame"
    />
  </div>
</template>

<script>
import CardImage from "./CardImage.vue";
import CardFrontControls from "./CardFrontControls.vue";
import CardPlatforms from "./CardPlatforms.vue";
import CardRating from "./CardRating.vue";
import CardTitleFront from "./CardTitleFront.vue";
import CardGenres from "./CardGenres.vue";
import CardEsrb from "./CardEsrb.vue";
import CardStores from "./CardStores.vue";
import CardPlayTime from "./CardPlayTime.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    CardImage,
    CardFrontControls,
    CardPlatforms,
    CardRating,
    CardTitleFront,
    CardGenres,
    CardEsrb,
    CardStores,
    CardPlayTime,
  },
  data() {
    return {
      index: 0,
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
    async likeGame() {
      await this.fetchGameInfo();

      let gameInfo = {
        ...this.getGameList[this.getIndex],
        description: this.getCurrentGame.description,
        publishers: this.getCurrentGame.publishers,
      };

      this.getNextGame();

      console.log(gameInfo);
    },
    async getNextGame() {
      this.$store.commit("setShowImage", false);

      this.$store.dispatch("incrementIndex");

      if (this.getIndex >= this.getGameList.length) {
        this.$store.commit("setIndex", 0);
        console.log("Reset Index: ", this.getIndex);

        const nextPageUrl = this.getNextPage;
        await this.fetchGames(nextPageUrl);
      }

      setTimeout(() => {
        this.$store.commit("setShowImage", true);
      }, 1000);
    },
    async fetchGameInfo() {
      let id = this.getGameList[this.getIndex].id;

      try {
        await this.$store.dispatch("fetchGameInfo", id);
      } catch (e) {
        this.error = e.message || "Unable to fetch games";
      }
    },

    async flipCard() {
      await this.fetchGameInfo();

      const card = document.querySelector(".card");
      card.classList.toggle("is-flipped");

      const gameDescription = document.querySelector(".game-description");
      gameDescription.scrollTop = 0;
    },
  },
  computed: {
    ...mapGetters(["getGameList", "getNextPage", "getIndex", "getCurrentGame"]),
  },
};
</script>

<style lang="scss" scoped>
.card-info {
  width: 100%;
  min-height: 330px;
  padding: 8px;
}

.align {
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.card__face--front {
  display: flex;
  flex-direction: column;
  justify-self: space-between;
  align-items: space-between;
  border-radius: 15px;
  height: 600px;
}
</style>