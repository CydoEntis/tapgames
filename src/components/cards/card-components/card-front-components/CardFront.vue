<template>
  <div class="card__face card__face--front">
    <card-image />
    <div class="card-info">
      <div class="align">
        <card-platforms />
        <card-rating />
      </div>
      <div class="align">
        <card-title-front />
      </div>
      <div class="align">
        <card-genres />
        <card-esrb />
      </div>
      <div class="align">
        <card-play-time />
      </div>
      <div class="align">
        <card-stores />
      </div>
    </div>
    <card-front-controls
      @dislike-game="dislikeGame"
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

import { saveToLocalStorage } from "../../../../helpers/storage";

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
    return {};
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
    checkStorageForGames(gameList) {
      // Checks to see if there are any games in local storage if not gives an empty array.
      let games;

      if (gameList === undefined) games = [];
      else games = gameList;

      return games;
    },
    checkIfGameIsInLocalStorage(games, gameInfo) {
      for (let game of games) {
        if (game.id === gameInfo.id) {
          return true;
        }

        return false;
      }
    },

    async likeGame() {
      const likeBtn = document.querySelector(".like");
      likeBtn.disabled = true;

      await this.fetchGameInfo();

      const likedGames = this.checkStorageForGames(this.getLikedGames);

      let gameInfo = {
        entryTime: Date.now(),
        index: this.getIndex,
        currentPage: this.getGameList.currentPage,
        ...this.getGameList[this.getIndex],
        description: this.getCurrentGame.description,
        publishers: this.getCurrentGame.publishers,
      };

      let gameExists = this.checkIfGameIsInLocalStorage(likedGames, gameInfo);

      if (gameExists) this.getNextGame();
      else {
        likedGames.push(gameInfo);

        this.$store.commit("setLikedGames", likedGames);

        saveToLocalStorage("likedGames", likedGames);

        this.$store.commit("setLastEntry", "like");

        await this.getNextGame();
      }
    },
    async dislikeGame() {
      const dislikeBtn = document.querySelector(".dislike");
      dislikeBtn.disabled = true;

      await this.fetchGameInfo();

      const dislikedGames = this.checkStorageForGames(this.getDislikedGames);

      let gameInfo = {
        entryTime: Date.now(),
        index: this.getIndex,
        currentPage: this.getGameList.currentPage,
        ...this.getGameList[this.getIndex],
        description: this.getCurrentGame.description,
        publishers: this.getCurrentGame.publishers,
      };

      let gameExists = this.checkIfGameIsInLocalStorage(
        dislikedGames,
        gameInfo
      );

      if (gameExists) this.getNextGame();
      else {
        dislikedGames.push(gameInfo);

        this.$store.commit("setDislikedGames", dislikedGames);

        saveToLocalStorage("dislikedGames", dislikedGames);

        this.$store.commit("setLastEntry", "dislike");

        this.getNextGame();
      }
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
      }, 500);
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

      const dislikeBtn = document.querySelector(".dislike");
      const likeBtn = document.querySelector(".like");

      dislikeBtn.disabled = true;
      likeBtn.disabled = true;

      const gameDescription = document.querySelector(".game-description");
      gameDescription.scrollTop = 0;
    },
  },
  computed: {
    ...mapGetters([
      "getGameList",
      "getNextPage",
      "getIndex",
      "getCurrentGame",
      "getLikedGames",
      "getDislikedGames",
    ]),
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

@media screen and (max-width: 450px) {
  .card-info {
    width: 100%;
    padding: 8px;
  }

  .card__face--front {
    height: 100vh;
    border-radius: none;
  }
}

@media screen and (max-width: 360px) {
  .card-info {
    width: 100%;
    padding: 8px;
  }

  .card__face--front {
    height: 100vh;
    border-radius: none;
  }
}
</style>