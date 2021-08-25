<template>
  <div class="controls">
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__faster animate__fadeIn"
      leave-active-class="animate__animated animate__faster animate__fadeOut"
    >
      <button class="dislike" @click="dislikeGame" v-if="isLiked">
        <i class="fas fa-heart-broken"></i>
      </button>
      <button class="like" @click="likeGame" v-else>
        <i class="fas fa-heart"></i>
      </button>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  saveToLocalStorage,
  loadGamesFromStorage,
} from "../../../../helpers/storage";

export default {
  data() {
    return {
      isLiked: true,
      isDisliked: true,
    };
  },
  methods: {
    loadGames() {
      const likedGames = loadGamesFromStorage("likedGames");
      const dislikedGames = loadGamesFromStorage("dislikedGames");

      this.$store.commit("setLikedGames", likedGames);
      this.$store.commit("setDislikedGames", dislikedGames);
    },
    checkIfGameIsLikedOrDisliked() {
      this.loadGames();

      const likedGames = this.getLikedGames;
      const dislikedGames = this.getDislikedGames;
      let id = parseInt(this.$route.params.gameId);

      console.log("Disliked Games: ", dislikedGames);

      for (const game of likedGames) {
        if (game.id === id) {
          this.isLiked = true;
          this.isDisliked = false;
        }
      }

      for (const game of dislikedGames) {
        if (game.id === id) {
          this.isDisliked = true;
          this.isLiked = false;
        }
      }
    },
    likeGame() {
      const dislikedGames = this.getDislikedGames;
      let id = parseInt(this.$route.params.gameId);

      for (const game of dislikedGames) {
        if (game.id === id) {
          this.isDisliked = false;
          this.isLiked = true;

          const index = dislikedGames.findIndex((game) => game.id === id);

          this.getLikedGames.push(dislikedGames[index]);

          dislikedGames.splice(index, 1);

          saveToLocalStorage("likedGames", this.getLikedGames);
          saveToLocalStorage("dislikedGames", this.getDislikedGames);
        }
      }
    },
    dislikeGame() {
      const likedGames = this.getLikedGames;
      let id = parseInt(this.$route.params.gameId);

      for (const game of likedGames) {
        if (game.id === id) {
          this.isDisliked = true;
          this.isLiked = false;

          const index = likedGames.findIndex((game) => game.id === id);

          this.getDislikedGames.push(likedGames[index]);

          likedGames.splice(index, 1);

          saveToLocalStorage("likedGames", this.getLikedGames);
          saveToLocalStorage("dislikedGames", this.getDislikedGames);
        }
      }
    },
  },
  created() {
    this.checkIfGameIsLikedOrDisliked();
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
  right: 0;
  z-index: 1000;
  display: flex;

  button {
    border-radius: 15px 0 0 0;
    outline: none;
    border: none;
    background: #202020;
    height: 60px;
    width: 60px;
    font-size: 32px;
    transition: all 300ms ease-in;
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }
  }

  .like {
    color: #526ffd;
  }

  .dislike {
    color: #c85849;
  }
}

@media screen and (width: 768px) and (height: 1024px) {
  .controls {
    button {
      height: 80px;
      width: 80px;
      font-size: 38px;
    }
  }
}

@media screen and (min-width: 1024px) and (min-height: 1366px) {
  .controls {
    button {
      height: 100px;
      width: 100px;
      font-size: 48px;
    }
  }
}
</style>