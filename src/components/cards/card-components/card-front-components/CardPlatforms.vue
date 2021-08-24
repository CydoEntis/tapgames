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
  height: 40px;

  span {
    font-size: 18px;
    margin-right: 10px;
  }
}

@media screen and (max-height: 700px) {
  .game-platforms {
    span {
      font-size: 22px;
      margin-right: 15px;
    }
  }
}

@media screen and (width: 1024px) and (height: 1366px) {
  .game-platforms {
    span {
      font-size: 28px;
      margin-right: 15px;
    }
  }
}
</style>