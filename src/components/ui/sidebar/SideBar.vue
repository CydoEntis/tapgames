<template>
  <div class="side-bar">
    <div class="title-bar">
      <the-title title="Dredge" />
    </div>
    <div class="side-bar-content">
      <the-nav />
      <router-view v-slot="slotProps" name="sidebar">
        <transition mode="out-in">
          <component :is="slotProps.Component" />
        </transition>
      </router-view>
      <!-- <router-view /> -->
    </div>
  </div>
</template>

<script>
import TheTitle from "../TheTitle.vue";
import LikedGames from "./LikedGames.vue";

import { loadGamesFromStorage } from "../../../helpers/storage";
import { mapGetters } from "vuex";
import TheNav from "../TheNav.vue";

export default {
  components: { TheTitle, LikedGames, TheNav },
  data() {
    return {};
  },
  methods: {
    async loadLikedGames() {
      const likedGames = loadGamesFromStorage("likedGames");
      await this.$store.commit("setLikedGames", likedGames);
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
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.side-bar-content {
  padding: 5px 10px;
}
</style>