<template>
  <header>
    <div class="image-wrapper">
      <h1>{{ title }}</h1>
      <img :src="image" alt="" />
      <controls />
    </div>
    <div id="overlay"></div>
  </header>
</template>

<script>
import Controls from "./Controls.vue";
export default {
  props: ["title", "image"],
  components: { Controls },
};
</script>

<style scoped lang="scss">
.game-content {
  width: 100%;
  height: 100vh;
  background: #151515;

  header {
    position: relative;
    width: 100%;
    height: 35vh;

    h1 {
      width: 100%;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 90;
      font-size: 48px;
    }

    .image-wrapper {
      position: relative;
      width: 100%;
      height: 35vh;

      img {
        min-width: 100%;
        min-height: 100%;
        max-width: 100%;
        max-height: 100%;
      }
    }

    #overlay {
      position: absolute;
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.5); /* Black see-through */
      width: 100%;
      height: 100%;
    }
  }
}
</style>