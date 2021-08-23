<template>
  <p class="game-description">
    {{ description }}
  </p>
</template>

<script>
export default {
  props: ["description"],
};
</script>

<style lang="scss" scoped>
.game-description {
  margin-top: 10px;
  padding: 10px;
  font-size: 18px;
  max-height: 320px;
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
    background-color: #202020;
    outline: 1px solid #202020;
  }
}

@media screen and (max-width: 1260px) {
  .game-description {
    font-size: 18px;
    max-height: 200px;
  }
}

@media screen and (max-width: 960px) {
  .game-description {
    font-size: 16px;
    max-height: 200px;
  }
}

@media screen and (max-width: 480px) {
  .game-description {
    font-size: 16px;
    overflow: none;
    max-height: 100%;

    scrollbar-width: 1em;
    scrollbar-color: #151515 #202020;

    &::-webkit-scrollbar-track {
      box-shadow: none;
    }
  }
}

@media screen and (max-width: 360px) {
  .game-description {
    font-size: 14px;
  }
}

@media screen and (max-width: 768px) and (max-height: 1024px) {
  .game-description {
    margin-top: 10px;
    padding: 10px;
    font-size: 20px;
    max-height: 360px;
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
      background-color: #202020;
      outline: 1px solid #202020;
    }
  }
}
</style>