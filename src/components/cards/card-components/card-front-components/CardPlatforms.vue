<template>
  <div class="game-platforms">
    <span v-show="getGameList[index].platforms.playstation">
      <i class="fab fa-playstation"></i>
    </span>
    <span v-show="getGameList[index].platforms.xbox">
      <i class="fab fa-xbox"></i>
    </span>
    <span v-show="getGameList[index].platforms.nintendo">
      <i class="fas fa-gamepad"></i>
    </span>
    <span v-show="getGameList[index].platforms.pc">
      <i class="fab fa-windows"></i>
    </span>
    <span v-show="getGameList[index].platforms.android">
      <i class="fab fa-android"></i>
    </span>
    <span v-show="getGameList[index].platforms.apple">
      <i class="fab fa-apple"></i>
    </span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["index"],
  computed: {
    ...mapGetters(["getGameList"]),
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
</style>