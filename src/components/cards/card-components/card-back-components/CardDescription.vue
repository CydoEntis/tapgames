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

  &::-webkit-scrollbar-thumb {
    background-color: #151515;
    outline: 1px solid #151515;
  }
}

@media screen and (min-height: 640px) {
  .game-description {
    font-size: 16px;
    height: 400px;
  }
}

@media screen and (min-height: 823px) {
  .game-description {
    font-size: 18px;
    height: 550px;
  }
}

@media screen and (width: 768px) and (height: 1024px) {
  .game-description {
    font-size: 26px;
    height: 600px;
  }
}

@media screen and (min-width: 1024px) and (min-height: 1366px) {
  .game-description {
    font-size: 32px;
    height: 800px;
  }
}

@media screen and (min-width: 1024px) {
  .game-description {
    height: 380px;
    overflow-y: scroll;
  }
}
</style>