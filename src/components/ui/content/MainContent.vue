<template>
  <div class="main-content">
    <game-card />
  </div>
</template>

<script>
import GameCard from "../../cards/GameCard.vue";
export default {
  components: { GameCard },
};
</script>

<style lang="scss" scoped>
.main-content {
  width: 75vw;
  height: 100vh;
  background: #151515;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>