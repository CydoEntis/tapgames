<template>
  <div class="side-bar">
    <the-title />
    <liked-games />
  </div>
</template>

<script>
import TheTitle from "../../TheTitle.vue";
import LikedGames from "./LikedGames.vue";

import { loadLikedGamesFromStorage } from "../../../helpers/storage";
import { mapGetters } from "vuex";

export default {
  components: { TheTitle, LikedGames },
  data() {
    return {};
  },
  methods: {
    async loadLikedGames() {
      const likedGames = loadLikedGamesFromStorage();
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
}
</style>