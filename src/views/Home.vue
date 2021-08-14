<template>
  <div class="home">
    <p v-if="isLoading">Loading...</p>
    <game-card v-else />
    <!-- <game-card v-else :games="getGameList" @getNextGame="getNextGame" /> -->
  </div>
</template>

<script>
import GameCard from "../components/cards/GameCard.vue";

export default {
  components: { GameCard },
  name: "Home",
  data() {
    return {
      isLoading: false,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
