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

@media screen and (max-width: 450px) {
  .game-playtime {
    font-size: 18px;
  }
}

@media screen and (max-width: 360px) {
  .game-playtime {
    font-size: 16px;
  }
}
</style>