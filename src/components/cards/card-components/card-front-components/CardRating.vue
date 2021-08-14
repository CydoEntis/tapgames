<template>
  <div
    class="game-ratings"
    :class="ratingColor"
    v-if="getGameList[index].metacritic"
  >
    <span>{{ getGameList[index].metacritic }}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["index"],
  computed: {
    ...mapGetters(["getGameList"]),
    ratingColor() {
      if (this.getGameList[this.index].metacritic >= 75) {
        return "green-rating";
      } else if (this.getGameList[this.index].metacritic >= 50) {
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