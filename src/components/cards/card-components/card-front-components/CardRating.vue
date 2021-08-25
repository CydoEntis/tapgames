<template>
  <div
    class="game-metacritic"
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