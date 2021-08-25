<template>
  <div class="game-playtime">
    <span><i class="far fa-clock"></i> {{ playtime }}hrs</span>
  </div>
</template>

<script>
export default {
  props: ["playtime"],
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