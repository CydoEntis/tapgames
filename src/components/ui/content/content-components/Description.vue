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
  height: 100%;
  margin-top: 10px;
  padding: 10px;
  font-size: 14px;

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
/* 
@media screen and (min-width: 1100px) {
  .game-description {
    font-size: 16px;
    max-height: 100%;
  }
}

@media screen and (min-height: 640px) {
  .game-description {
    font-size: 16px;
    height: 400px;
  }
} */

/* @media screen and (min-height: 823px) {
  .game-description {
    font-size: 18px;
    height: 550px;
  }
} */

@media screen and (width: 768px) and (height: 1024px) {
  .game-description {
    font-size: 22px;
    height: 600px;
  }
}

@media screen and (min-width: 1024px) and (min-height: 1366px) {
  .game-description {
    font-size: 28px;
    height: 800px;
  }
}
</style>