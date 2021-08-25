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
  margin: 10px 0;
  span {
    font-size: 18px;
  }
}

@media screen and (min-width: 1024px) and (min-height: 1366px) {
  .game-playtime {
    margin: 10px 0;
    span {
      font-size: 32px;
    }
  }
}

@media screen and (width: 768px) and (height: 1024px) {
  .game-playtime {
    margin: 10px 0;
    span {
      font-size: 22px;
    }
  }
}
</style>