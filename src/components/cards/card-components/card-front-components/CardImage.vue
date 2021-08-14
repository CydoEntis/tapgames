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
</style>