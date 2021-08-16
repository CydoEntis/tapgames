<template>
  <div class="img-wrapper">
    <img :src="url" alt="" />
  </div>
</template>

<script>
export default {
  props: ["url"],
};
</script>

<style lang="scss" scoped>
.img-wrapper {
  width: 100%;
  max-width: 300px;
  height: 45px;
  border-radius: 15px;
  overflow: hidden;
  margin: 5px;

  img {
    width: 100%;
    height: auto;
    /* height: 75px; */
  }
}
</style>