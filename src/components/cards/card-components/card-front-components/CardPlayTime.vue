<template>
  <div class="game-playtime">
    <span
      ><i class="far fa-clock"></i>
      {{ getGameList[getIndex].playtime }}hrs</span
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getGameList", "getIndex"]),
  },
};
</script>

<style lang="scss" scoped>
.game-playtime {
  padding: 5px 0;
}

@media screen and (width: 1024px) and (height: 1366px) {
  .game-playtime {
    font-size: 26px;
    padding: 5px 0;
  }
}
</style>