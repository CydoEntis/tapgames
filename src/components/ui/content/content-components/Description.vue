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

  &::-webkit-scrollbar-thumb {
    background-color: #202020;
    outline: 1px solid #202020;
  }
}

@media screen and (max-width: 1300px) {
  .game-description {
    max-height: 100%;
    overflow-y: none;

    &::-webkit-scrollbar {
      width: 0;
    }
  }
}
@media screen and (max-height: 700px) {
  .game-description {
    font-size: 14px;
  }
}

@media screen and (width: 768px) and (height: 1024px) {
  .game-description {
    font-size: 18px;
  }
}

@media screen and (width: 1024px) and (height: 1366px) {
  .game-description {
    font-size: 22px;
  }
}
</style>