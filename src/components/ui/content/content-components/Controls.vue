<template>
  <div class="controls">
    <button class="reaction-btn dislike" @click="dislikeGame" v-if="isLiked">
      <i class="fas fa-heart-broken"></i>
    </button>
    <button class="reaction-btn like" @click="likeGame" v-if="isDisliked">
      <i class="fas fa-heart"></i>
    </button>
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
  display: flex;
  justify-content: center;
  width: 100%;

  .reaction-btn {
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 42px;
    width: 120px;
    height: 75px;
    background: #202020;
    border-bottom: 5px solid #202020;
    transition: all 200ms ease-in;
    cursor: pointer;

    &:hover {
      border-bottom: 5px solid #ffffff66;
    }
  }

  .like {
    border-radius: 15px 15px 0 0;
    color: #526ffd;
    border-left: 1px solid #151515;
  }

  .dislike {
    border-radius: 15px 15px 0 0;
    color: #c85849;
    border-right: 1px solid #151515;
  }
}

@media screen and (max-width: 450px) {
  .controls {
    .reaction-btn {
      font-size: 30px;
      width: 80px;
      height: 60px;
    }
  }
}
</style>