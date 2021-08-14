// ! FIX cannot read property of null

<template>
  <div class="game-esrb">
    <span :class="esrbColor">{{ getGameList[index].rating.name }}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["index"],
  computed: {
    ...mapGetters(["getGameList"]),
    esrbColor() {
      if (this.getGameList[this.index].rating.name === null) return;
      else if (this.getGameList[this.index].rating.name === "Mature")
        return "red-rating";
      else if (this.getGameList[this.index].rating.name === "Teen")
        return "yellow-rating";
      else return "green-rating";
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
</style>