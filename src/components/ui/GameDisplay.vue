<template>
  <div class="img-wrapper">
    <h3>{{ title }}</h3>
    <img :src="url" alt="" />
    <div id="overlay"></div>
  </div>
</template>

<script>
export default {
  props: ["url", "title"],
};
</script>

<style lang="scss" scoped>
.img-wrapper {
  position: relative;
  width: 100%;
  height: 45px;
  border-radius: 15px;
  overflow: hidden;
  margin: 5px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  h3 {
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 16px;
    top: 50%;
    z-index: 99;
    transform: translateY(-50%);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 15px;
    /* height: 75px; */
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
</style>