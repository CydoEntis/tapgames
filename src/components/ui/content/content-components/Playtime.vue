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
  font-size: 20px;
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