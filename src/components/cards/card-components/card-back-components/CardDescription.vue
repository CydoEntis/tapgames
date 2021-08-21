<template>
  <p class="game-description">
    {{ getCurrentGame.description }}
  </p>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCurrentGame"]),
  },
};
</script>

<style lang="scss" scoped>
.game-description {
  margin-top: 10px;
  padding: 10px;
  font-size: 14px;
  height: 300px;
  overflow-y: scroll;

  scrollbar-width: 1em;
  scrollbar-color: #151515 #202020;

  &::-webkit-scrollbar {
    width: 1em;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #151515;
    outline: 1px solid #151515;
  }
}
</style>