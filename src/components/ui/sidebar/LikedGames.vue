<template>
  <!-- <the-title title="Liked Games" /> -->
  <div class="liked-games">
    <game-display
      v-for="game in getLikedGames"
      :key="game.id"
      :url="game.image"
      :title="game.name"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GameDisplay from "../../GameDisplay.vue";
import TheTitle from "../../TheTitle.vue";

export default {
  components: { GameDisplay, TheTitle },
  computed: {
    ...mapGetters(["getLikedGames"]),
  },
};
</script>

<style lang="scss" scoped>
.liked-games {
  width: 100%;
  margin: 15px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>