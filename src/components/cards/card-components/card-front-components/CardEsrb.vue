// ! FIX cannot read property of null

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
      if (this.getGameList[this.getIndex].rating === "Mature")
        return "red-rating";
      else if (this.getGameList[this.getIndex].rating === "Teen")
        return "yellow-rating";
      else if (this.getGameList[this.getIndex].rating === "Everyone 10+")
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

@media screen and (max-width: 450px) {
  .game-esrb {
    span {
      font-size: 18px;
    }
  }
}

@media screen and (max-width: 360px) {
  .game-esrb {
    span {
      font-size: 14px;
    }
  }
}
</style>