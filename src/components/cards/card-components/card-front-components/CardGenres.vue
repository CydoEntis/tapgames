<template>
  <div class="game-genres">
    <span
      :class="genreColor"
      v-for="genre in getGameList[getIndex].genres"
      :key="genre"
    >
      {{ genre.name }}
    </span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getGameList", "getIndex"]),
    genreColor() {
      if (this.getGameList[this.getIndex].genres.name === "Action")
        return "action";
      else if (this.getGameList[this.getIndex].genres.name === "Strategy")
        return "strategy";
      else if (this.getGameList[this.getIndex].genres.name === "RPG")
        return "rpg";
      else if (this.getGameList[this.getIndex].genres.name === "Shooter")
        return "shooter";
      else if (this.getGameList[this.getIndex].genres.name === "Adventure")
        return "adventure";
      else if (this.getGameList[this.getIndex].genres.name === "Puzzle")
        return "puzzle";
      else if (this.getGameList[this.getIndex].genres.name === "Racing")
        return "racing";
      else if (this.getGameList[this.getIndex].genres.name === "Sport")
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

@media screen and (max-height: 700px) {
  .game-genres {
    span {
      font-size: 12px;
    }
  }
}

@media screen and (width: 1024px) and (height: 1366px) {
  .game-genres {
    span {
      font-size: 22px;
    }
  }
}
</style>