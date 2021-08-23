<template>
  <div class="game-genres">
    <span :class="genreColor" v-for="genre in genres" :key="genre">
      {{ genre.name }}
    </span>
  </div>
</template>

<script>
export default {
  props: ["genres"],
  computed: {
    genreColor() {
      if (this.genres.name === "Action") return "action";
      else if (this.genres.name === "Strategy") return "strategy";
      else if (this.genres.name === "RPG") return "rpg";
      else if (this.genres.name === "Shooter") return "shooter";
      else if (this.genres.name === "Adventure") return "adventure";
      else if (this.genres.name === "Puzzle") return "puzzle";
      else if (this.genres.name === "Racing") return "racing";
      else if (this.genres.name === "Sport") return "sport";
    },
  },
};
</script>

<style lang="scss" scoped>
.game-genres {
  span {
    display: inline-block;
    font-size: 18px;
    border: 1px solid #ffffff66;
    border-radius: 25px;
    padding: 5px 10px;
    margin: 4px 4px 4px 0;
  }
}

@media screen and (max-width: 450px) {
  .game-genres {
    span {
      font-size: 18px;
    }
  }
}

@media screen and (max-width: 360px) {
  .game-genres {
    span {
      font-size: 14px;
    }
  }
}
</style>