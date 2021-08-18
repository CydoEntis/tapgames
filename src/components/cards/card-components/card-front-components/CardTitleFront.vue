<template>
  <h2>{{ getGameList[getIndex].name }}</h2>
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
h2 {
  font-size: 28px;
}

@media screen and (max-width: 450px) {
  h2 {
    font-size: 36px;
  }
}
</style>