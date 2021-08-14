<template>
  <div class="img-wrapper">
    <img :src="getGameList[index].image" alt="" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["index"],
  computed: {
    ...mapGetters(["getGameList"]),
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