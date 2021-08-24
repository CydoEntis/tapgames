<template>
  <div class="controls">
    <button class="reaction-btn dislike" @click="dislikeGame">
      <i class="fas fa-heart-broken"></i>
    </button>
    <button class="reaction-btn info" @click="flipCard">
      <i class="fas fa-info-circle"></i>
    </button>
    <button class="reaction-btn like" @click="likeGame">
      <i class="fas fa-heart"></i>
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { saveToLocalStorage } from "../../../helpers/storage";

export default {
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
    checkIfButtonsAreEnabled() {
      if (!this.getDisableLikeBtn || !this.getDisableDislikeBtn) return true;
    },
    checkIfButtonsAreDisabled() {
      if (this.getDisableLikeBtn || this.getDisableDislikeBtn) return true;
    },
    setLikeAndDislikeButtons(likeBtn, dislikeBtn) {
      this.$store.commit("setDisableLikeBtn", likeBtn);
      this.$store.commit("setDisableDislikeBtn", dislikeBtn);
    },
    resetButtons() {
      setTimeout(() => {
        const dislikeBtn = document.querySelector(".dislike");
        const likeBtn = document.querySelector(".like");

        dislikeBtn.disabled = false;
        likeBtn.disabled = false;
        this.$store.commit("setDisableLikeBtn", false);
        this.$store.commit("setDisableDislikeBtn", false);
      }, 500);
    },
    async likeGame() {
      // If the buttons are enabled then we want to disable them.
      if (this.checkIfButtonsAreEnabled()) {
        // Set buttons gobal state to disabled
        this.setLikeAndDislikeButtons(true, true);

        // Disable the UI buttons
        this.toggleBtns(true, true);

        // Fetch the current games info.
        await this.fetchGameInfo();

        // Get liked games from storage if the exist
        const likedGames = this.checkStorageForGames(this.getLikedGames);

        let gameInfo = {
          entryTime: Date.now(),
          index: this.getIndex,
          currentPage: this.getGameList.currentPage,
          ...this.getGameList[this.getIndex],
          description: this.getCurrentGame.description,
          publishers: this.getCurrentGame.publishers,
          type: "liked",
        };

        // Check to see if the game we pulled is already within our storage.
        let gameExists = this.checkIfGameIsInLocalStorage(likedGames, gameInfo);

        // If the game exists within storage ignore it and grab next game
        if (gameExists) this.getNextGame();
        else {
          // Otherwise add the game to the game list and save the list to storage then fetch our next game.
          likedGames.push(gameInfo);

          this.$store.commit("setLikedGames", likedGames);

          saveToLocalStorage("likedGames", likedGames);

          this.$store.commit("setLastEntry", "like");

          await this.getNextGame();
        }

        // If the buttons are disabled then reset them.
        if (this.checkIfButtonsAreDisabled()) {
          this.resetButtons();
        }
      }
    },
    async dislikeGame() {
      // If the buttons are enabled then we want to disable them.
      if (this.checkIfButtonsAreEnabled()) {
        // Set buttons gobal state to disabled
        this.setLikeAndDislikeButtons(true, true);

        // Disable the UI buttons
        this.toggleBtns(true, true);

        // Fetch the current games info.
        await this.fetchGameInfo();

        // Get disliked games from storage if the exist
        const dislikedGames = this.checkStorageForGames(this.getDislikedGames);

        // Pull the game info we wish to save
        let gameInfo = {
          entryTime: Date.now(),
          index: this.getIndex,
          currentPage: this.getGameList.currentPage,
          ...this.getGameList[this.getIndex],
          description: this.getCurrentGame.description,
          publishers: this.getCurrentGame.publishers,
          type: "disliked",
        };

        // Check to see if the game we pulled is already within our storage.
        let gameExists = this.checkIfGameIsInLocalStorage(
          dislikedGames,
          gameInfo
        );

        // If the game exists within storage ignore it and grab next game
        if (gameExists) this.getNextGame();
        else {
          // Otherwise add the game to the game list and save the list to storage then fetch our next game.
          dislikedGames.push(gameInfo);

          this.$store.commit("setDislikedGames", dislikedGames);

          saveToLocalStorage("dislikedGames", dislikedGames);

          this.$store.commit("setLastEntry", "dislike");

          this.getNextGame();
        }

        // If the buttons are disabled then reset them.
        if (this.checkIfButtonsAreDisabled()) {
          this.resetButtons();
        }
      }
    },
    toggleImage(show) {
      this.$store.commit("setShowImage", show);
    },
    toggleBtns(disableLikeBtn, disableDislikeBtn) {
      const dislikeBtn = document.querySelector(".dislike");
      dislikeBtn.disabled = disableLikeBtn;

      const likeBtn = document.querySelector(".like");
      likeBtn.disabled = disableDislikeBtn;
    },
    toggleFlipStatus(isFlipped) {
      this.$store.commit("setIsFlipDisabled", isFlipped);
    },
    async getNextGame() {
      // this.$store.commit("setShowImage", false);
      this.toggleImage(false);

      this.toggleBtns(true, true);

      // Reset the flipping animation so you can flip the card on a new card.
      this.toggleFlipStatus(false);

      this.$store.dispatch("incrementIndex");

      // Reset the index to 0 if we exceed the game list's length then load the next page.
      if (this.getIndex >= this.getGameList.length) {
        this.$store.commit("setIndex", 0);

        const nextPageUrl = this.getNextPage;
        await this.fetchGames(nextPageUrl);
      }

      // Control the duration of the flip animation
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
      // Flip the card as long as the animation is reset.
      if (!this.getIsFlipDisabled) {
        this.$store.commit("setIsFlipDisabled", true);

        const dislikeBtn = document.querySelector(".dislike");
        const likeBtn = document.querySelector(".like");
        dislikeBtn.disabled = true;
        likeBtn.disabled = true;

        const card = document.querySelector(".card");
        card.classList.toggle("is-flipped");

        await this.fetchGameInfo();

        // Make sure the description is always scrolled to the top when flipped
        const gameDescription = document.querySelector(".game-description");
        gameDescription.scrollTop = 0;

        const infoBtn = document.querySelector(".info");

        // If the card animation is being played disable the button then wait a second before resetting.
        if (this.getIsFlipDisabled) {
          infoBtn.disabled = true;
          setTimeout(() => {
            infoBtn.disabled = false;

            dislikeBtn.disabled = false;
            likeBtn.disabled = false;
            this.$store.commit("setIsFlipDisabled", false);
          }, 500);
        }
      }
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
      "getIsFlipDisabled",
      "getDisableLikeBtn",
      "getDisableDislikeBtn",
    ]),
  },
};
</script>

<style lang="scss" scoped>
.controls {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;

  .reaction-btn {
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 32px;
    width: 75px;
    height: 65px;
    background: #151515;
    border-bottom: 5px solid #151515;
    transition: all 200ms ease-in;
    cursor: pointer;

    &:hover {
      border-bottom: 5px solid #ffffff66;
    }
  }

  .info {
    width: 125px;
    border-radius: 15px 15px 0 0;
    color: #ffffff66;
  }

  .like {
    border-radius: 15px 0 15px 0;
    color: #526ffd;
  }

  .dislike {
    border-radius: 0 15px 0 15px;
    color: #c85849;
  }
}

@media screen and (max-width: 450px) {
  .controls {
    position: absolute;
    bottom: 0;

    .reaction-btn {
      width: 85px;
      height: 75px;
      font-size: 42px;
    }
    .info {
      width: 175px;
    }
    .like {
      border-radius: 15px 0 0 0;
    }

    .dislike {
      border-radius: 0 15px 0 0;
    }
  }
}

@media screen and (max-width: 360px) {
  .controls {
    position: absolute;
    bottom: 0;

    .reaction-btn {
      width: 65px;
      height: 55px;
      font-size: 32px;
    }
    .info {
      width: 125px;
    }
    .like {
      border-radius: 15px 0 0 0;
    }

    .dislike {
      border-radius: 0 15px 0 0;
    }
  }
}

@media screen and (width: 768px) and (height: 1024px) {
  .controls {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}

@media screen and (width: 1024px) and (height: 1366px) {
  .controls {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}
</style>