<template>
  <div class="game-metacritic" :class="metacriticColor" v-if="metacritic">
    <span>{{ metacritic }}</span>
  </div>
</template>

<script>
export default {
  props: ["metacritic"],
  computed: {
    metacriticColor() {
      if (this.metacritic >= 75) {
        return "green-rating";
      } else if (this.metacritic >= 50) {
        return "yellow-rating";
      } else {
        return "red-rating";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.game-metacritic {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  width: 40px;
  height: 40px;
}

@media screen and (min-width: 1024px) and (min-height: 1366px) {
  .game-metacritic {
    font-size: 48px;
    width: 80px;
    height: 80px;
  }
}

@media screen and (width: 768px) and (height: 1024px) {
  .game-metacritic {
    font-size: 26px;
    width: 50px;
    height: 50px;
  }
}
</style>