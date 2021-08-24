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

@media screen and (max-height: 850px) {
  .game-description {
    font-size: 18px;
    height: 500px;
  }
}

@media screen and (max-height: 750px) {
  .game-description {
    font-size: 18px;
    height: 500px;
  }
}

@media screen and (max-height: 700px) {
  .game-description {
    font-size: 14px;
    height: 480px;
  }
}

@media screen and (max-height: 600px) {
  .game-description {
    font-size: 16px;
    height: 400px;
  }
}

@media screen and (width: 360px) and (height: 760px) {
  .game-description {
    font-size: 18px;
    height: 500px;
  }
}

/* Tablets */
@media screen and (width: 540px) and (height: 720px) {
  .game-description {
    font-size: 18px;
    height: 500px;
  }
}

@media screen and (width: 768px) and (height: 1024px) {
  .game-description {
    font-size: 20px;
    height: 500px;
  }
}

@media screen and (width: 1024px) and (height: 1366px) {
  .game-description {
    font-size: 24px;
    height: 600px;
  }
}
</style>