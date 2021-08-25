<template>
  <div class="game-esrb">
    <span :class="esrbColor">{{ getGameList[getIndex].rating }}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getGameList", "getIndex"]),
    esrbColor() {
      if (
        this.getGameList[this.getIndex].rating === "Mature" ||
        this.getGameList[this.getIndex].rating === "Adults Only"
      )
        return "red-rating";
      else if (this.getGameList[this.getIndex].rating === "Teen")
        return "yellow-rating";
      else if (
        this.getGameList[this.getIndex].rating === "Everyone 10+" ||
        this.getGameList[this.getIndex].rating === "Everyone"
      )
        return "green-rating";
      else if (this.getGameList[this.getIndex].rating === "N/A") {
        return "no-rating";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.game-esrb {
  span {
    border-radius: 15px;
    padding: 0.1em 0.4em;
  }
}

@media screen and (width: 1024px) and (height: 1366px) {
  .game-esrb {
    span {
      font-size: 32px;
      border-radius: 25px;
    }
  }
}

@media screen and (width: 768px) and (height: 1024px) {
  .game-esrb {
    span {
      font-size: 24px;
      border-radius: 25px;
    }
  }
}
</style>