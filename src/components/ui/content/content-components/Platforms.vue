<template>
  <div class="game-platforms">
    <span v-show="platforms.playstation">
      <i class="fab fa-playstation"></i>
    </span>
    <span v-show="platforms.xbox">
      <i class="fab fa-xbox"></i>
    </span>
    <span v-show="platforms.nintendo">
      <i class="fas fa-gamepad"></i>
    </span>
    <span v-show="platforms.pc">
      <i class="fab fa-windows"></i>
    </span>
    <span v-show="platforms.android">
      <i class="fab fa-android"></i>
    </span>
    <span v-show="platforms.apple">
      <i class="fab fa-apple"></i>
    </span>
  </div>
</template>

<script>
export default {
  props: ["platforms"],
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

@media screen and (max-width: 450px) {
  .game-platforms {
    height: 60px;

    span {
      font-size: 22px;
      margin-right: 15px;
    }
  }
}

@media screen and (max-width: 360px) {
  .game-platforms {
    height: 40px;

    span {
      font-size: 18px;
    }
  }
}
</style>