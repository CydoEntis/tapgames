<template>
  <div class="img-wrapper">
    <img :src="getGameList[getIndex].image" alt="" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getGameList", "getIndex"]),
  },
};
</script>

<style scoped lang="scss">
.img-wrapper {
  width: 100%;

  img {
    width: 100%;
    max-height: 300px;
  }
}

@media screen and (min-width: 1024px) and (min-height: 1366px) {
  .img-wrapper {
    img {
      width: 100%;
      max-height: 500px;
    }
  }
}

@media screen and (width: 768px) and (height: 1024px) {
  .img-wrapper {
    img {
      width: 100%;
      max-height: 400px;
    }
  }
}
</style>