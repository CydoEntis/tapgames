<template>
  <div class="side-bar">
    <the-title />
    <liked-games />
  </div>
</template>

<script>
import TheTitle from "../../TheTitle.vue";
import LikedGames from "./LikedGames.vue";
export default {
  components: { TheTitle, LikedGames },
};
</script>

<style lang="scss" scoped>
.side-bar {
  width: 25vw;
  height: 100vh;
  background: #202020;
}
</style>