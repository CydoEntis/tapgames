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
</style>