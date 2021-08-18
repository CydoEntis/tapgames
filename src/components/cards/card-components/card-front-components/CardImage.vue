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
  max-width: 375px;

  img {
    border-radius: 15px;
    width: 100%;
    min-height: 200px;
    max-height: 200px;
  }
}

@media screen and (max-width: 450px) {
  .img-wrapper {
    max-width: 100%;

    img {
      border-radius: 0 0 15px 15px;
      width: 100%;
      min-height: 250px;
      max-height: 250px;
    }
  }
}

@media screen and (max-width: 360px) {
  .img-wrapper {
    max-width: 100%;

    img {
      border-radius: 0 0 15px 15px;
      width: 100%;
      min-height: 175px;
      max-height: 175px;
    }
  }
}
</style>