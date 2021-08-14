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
  overflow: hidden;
  margin: 5px;

  img {
    width: 120px;
    height: 65px;
  }
}
</style>