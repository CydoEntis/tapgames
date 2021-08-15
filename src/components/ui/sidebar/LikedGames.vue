<template>
  <div class="liked-games">
    <game-display
      v-for="game in getLikedGames"
      :key="game.id"
      :url="game.image"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GameDisplay from "../../GameDisplay.vue";
export default {
  components: { GameDisplay },
  computed: {
    ...mapGetters(["getLikedGames"]),
  },
};
</script>

<style lang="scss" scoped>
.liked-games {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>