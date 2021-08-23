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

@media screen and (max-width: 768px) and (max-height: 1024px) {
  .game-playtime {
    font-size: 24px;
  }
}

@media screen and (max-width: 540px) and (max-height: 720px) {
  .game-playtime {
    font-size: 18px;
  }
}
</style>