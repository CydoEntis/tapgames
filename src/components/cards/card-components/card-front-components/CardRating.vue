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
</style>