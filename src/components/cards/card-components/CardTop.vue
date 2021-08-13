<template>
  <div class="image-wrapper">
    <img :src="imageUrl" alt="" />
  </div>
</template>

<script>
export default {
  props: ["imageUrl"],
};
</script>

<style scoped lang="scss">
</style>