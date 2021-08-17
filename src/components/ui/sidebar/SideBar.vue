<template>
  <div class="side-bar">
    <div class="title-bar">
      <the-title title="TapGames" />
    </div>
    <div class="sidebar-controls">
      <a @click="showLikedGames" v-show="dislikedGamesVisible">Likes</a>
      <a @click="showDislikedGames" v-show="likedGamesVisible">Dislikes</a>
    </div>
    <div class="sidebar-content">
      <liked-games v-if="likedGamesVisible" />

      <disliked-games v-if="dislikedGamesVisible" />
    </div>
  </div>
</template>

<script>
import TheTitle from "../TheTitle.vue";
import LikedGames from "./LikedGames.vue";

import { loadGamesFromStorage } from "../../../helpers/storage";
import { mapGetters } from "vuex";
import TheNav from "../TheNav.vue";
import DislikedGames from "./DislikedGames.vue";

export default {
  components: { TheTitle, LikedGames, DislikedGames, TheNav },
  data() {
    return {
      likedGamesVisible: true,
      dislikedGamesVisible: false,
    };
  },
  methods: {
    async loadLikedGames() {
      const likedGames = loadGamesFromStorage("likedGames");
      await this.$store.commit("setLikedGames", likedGames);
    },
    showLikedGames() {
      this.likedGamesVisible = true;
      this.dislikedGamesVisible = false;
    },
    showDislikedGames() {
      this.likedGamesVisible = false;
      this.dislikedGamesVisible = true;
    },
  },
  computed: {
    ...mapGetters(["getLikedGames"]),
  },
  created() {
    this.loadLikedGames();
  },
};
</script>

<style lang="scss" scoped>
.side-bar {
  width: 25vw;
  height: 100vh;
  background: #202020;

  .title-bar {
    width: 100%;
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
  }

  .sidebar-controls {
    text-align: right;
    margin: 10px;

    a {
      text-decoration: none;
      color: #ffffff66;
      border: 1px solid #ffffff66;
      border-radius: 15px;
      padding: 3px 5px;
      margin-right: 10px;
      cursor: pointer;
      transition: all 200ms ease-in;

      &.router-link-exact-active {
        color: #fff;
        border: 1px solid #fff;
      }

      &:hover {
        opacity: 0.6;
      }
    }
  }
}

.side-bar-content {
  padding: 5px 10px;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>