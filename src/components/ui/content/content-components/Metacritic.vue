<template>
  <div class="game-ratings" :class="metacriticColor" v-if="metacritic">
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
.game-ratings {
  width: 50px;
  height: 50px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 28px;
  }
}

@media screen and (max-height: 700px) {
  .game-ratings {
    width: 40px;
    height: 40px;
    span {
      font-size: 22px;
    }
  }
}

@media screen and (width: 1024px) and (height: 1366px) {
  .game-ratings {
    width: 60px;
    height: 60px;
    span {
      font-size: 28px;
    }
  }
}
</style>