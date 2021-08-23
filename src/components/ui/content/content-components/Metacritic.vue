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

@media screen and (max-width: 450px) {
  .game-ratings {
    span {
      font-size: 26px;
    }
  }
}

@media screen and (max-width: 360px) {
  .game-ratings {
    span {
      font-size: 18px;
    }
  }
}

@media screen and (max-width: 768px) and (max-height: 1024px) {
  .game-ratings {
    span {
      font-size: 28px;
    }
  }
}

@media screen and (max-width: 540px) and (max-height: 720px) {
  .game-ratings {
    span {
      font-size: 22px;
    }
  }
}
</style>