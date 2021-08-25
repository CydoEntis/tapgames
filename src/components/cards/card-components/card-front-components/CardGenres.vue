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
    border: 1px solid #fff;
    border-radius: 15px;
    padding: 0.1em 0.4em;
  }
}

@media screen and (min-width: 1024px) and (min-height: 1366px) {
  .game-genres {
    span {
      font-size: 28px;
      border-radius: 25px;
    }
  }
}

@media screen and (width: 768px) and (height: 1024px) {
  .game-genres {
    span {
      font-size: 22px;
      border-radius: 25px;
    }
  }
}
</style>