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
  span {
    font-size: 28px;
    margin-right: 25px;
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
      font-size: 36px;
      margin-right: 20px;
    }
  }
}
</style>