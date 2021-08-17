<template>
  <div class="disliked-games">
    <game-display
      v-for="game in getDislikedGames"
      :key="game.id"
      :url="game.image"
      :title="game.name"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { loadGamesFromStorage } from "../../../helpers/storage";
import GameDisplay from "../GameDisplay.vue";
import TheTitle from "../TheTitle.vue";

export default {
  components: { GameDisplay, TheTitle },
  created() {
    const dislikedGames = loadGamesFromStorage("dislikedGames");

    this.$store.commit("setDislikedGames", dislikedGames);
  },
  computed: {
    ...mapGetters(["getDislikedGames"]),
  },
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
  font-size: 18px;
  font-weight: 400;
}

.disliked-games {
  width: 100%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  overflow-x: hidden;

  margin-top: 10px;
  padding: 10px;
  font-size: 14px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 1em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #151515;
    outline: 1px solid #151515;
  }
}
</style>