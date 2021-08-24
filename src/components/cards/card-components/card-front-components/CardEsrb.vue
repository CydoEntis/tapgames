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
  margin: 5px 0;

  span {
    padding: 3px 6px;
    border-radius: 15px;
  }
}
@media screen and (max-height: 700px) {
  .game-esrb {
    span {
      font-size: 14px;
    }
  }
}

@media screen and (width: 1024px) and (height: 1366px) {
  .game-esrb {
    span {
      font-size: 22px;
    }
  }
}
</style>