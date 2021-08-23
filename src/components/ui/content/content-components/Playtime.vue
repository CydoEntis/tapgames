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

@media screen and (width: 1024px) and (height: 1366px) {
  .game-playtime {
    font-size: 26px;
    padding: 5px 0;
  }
}
</style>