<template>
  <div
    class="game-ratings"
    :class="ratingColor"
    v-if="getGameList[getIndex].metacritic"
  >
    <span>{{ getGameList[getIndex].metacritic }}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getGameList", "getIndex"]),
    ratingColor() {
      if (this.getGameList[this.getIndex].metacritic >= 75) {
        return "green-rating";
      } else if (this.getGameList[this.getIndex].metacritic >= 50) {
        return "yellow-rating";
      } else {
        return "red-rating";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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
    width: 50px;
    height: 50px;
    span {
      font-size: 28px;
    }
  }
}
</style>