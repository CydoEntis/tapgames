<template>
  <div class="game-genres">
    <span
      :class="genreColor"
      v-for="genre in getGameList[index].genres"
      :key="genre"
    >
      {{ genre.name }}
    </span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["index"],
  computed: {
    ...mapGetters(["getGameList"]),
    genreColor() {
      if (this.getGameList[this.index].genres.name === "Action")
        return "action";
      else if (this.getGameList[this.index].genres.name === "Strategy")
        return "strategy";
      else if (this.getGameList[this.index].genres.name === "RPG") return "rpg";
      else if (this.getGameList[this.index].genres.name === "Shooter")
        return "shooter";
      else if (this.getGameList[this.index].genres.name === "Adventure")
        return "adventure";
      else if (this.getGameList[this.index].genres.name === "Puzzle")
        return "puzzle";
      else if (this.getGameList[this.index].genres.name === "Racing")
        return "racing";
      else if (this.getGameList[this.index].genres.name === "Sport")
        return "sport";
    },
  },
};
</script>

<style lang="scss" scoped>
.game-genres {
  span {
    display: inline-block;
    font-size: 14px;
    border: 1px solid #ffffff66;
    border-radius: 15px;
    padding: 3px 6px;
    margin-right: 5px;
    margin-bottom: 5px;
  }
}
</style>