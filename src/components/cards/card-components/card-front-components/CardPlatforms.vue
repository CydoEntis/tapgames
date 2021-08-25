<template>
  <div class="game-platforms">
    <span v-show="getGameList[getIndex].platforms.playstation">
      <i class="fab fa-playstation"></i>
    </span>
    <span v-show="getGameList[getIndex].platforms.xbox">
      <i class="fab fa-xbox"></i>
    </span>
    <span v-show="getGameList[getIndex].platforms.nintendo">
      <i class="fas fa-gamepad"></i>
    </span>
    <span v-show="getGameList[getIndex].platforms.pc">
      <i class="fab fa-windows"></i>
    </span>
    <span v-show="getGameList[getIndex].platforms.android">
      <i class="fab fa-android"></i>
    </span>
    <span v-show="getGameList[getIndex].platforms.apple">
      <i class="fab fa-apple"></i>
    </span>
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

<style scoped lang="scss">
.game-platforms {
  span {
    font-size: 20px;
    margin-right: 8px;
  }
}

@media screen and (min-width: 1024px) and (min-height: 1366px) {
  .game-platforms {
    span {
      font-size: 32px;
      margin-right: 20px;
    }
  }
}

@media screen and (width: 768px) and (height: 1024px) {
  .game-platforms {
    span {
      font-size: 26px;
      margin-right: 12px;
    }
  }
}
</style>