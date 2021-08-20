<template>
  <div class="card__face card__face-back">
    <div class="align">
      <card-back-controls
        @dislike-game="dislikeGame"
        @flip-card="flipCard"
        @like-game="likeGame"
      />
      <card-title-back />
    </div>
    <card-description />
  </div>
</template>

<script>
import CardTitleBack from "./CardTitleBack.vue";
import CardBackControls from "./CardBackControls.vue";
import CardDescription from "./CardDescription.vue";

import { mapGetters } from "vuex";
import { saveToLocalStorage } from "../../../../helpers/storage";

export default {
  components: { CardBackControls, CardDescription, CardTitleBack },
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
.card__face-back {
  transform: rotateY(180deg);

  .align {
    display: flex;
    justify-content: space-between;
  }

  .back {
    border-radius: 15px 0 15px 0;
    color: #ffffff66;
  }
}

@media screen and (max-width: 450px) {
  .card-info {
    width: 100%;
    min-height: 450px;
    padding: 8px;
  }

  .card__face--back {
    height: 100vh;
    border-radius: none;
  }
}
</style>