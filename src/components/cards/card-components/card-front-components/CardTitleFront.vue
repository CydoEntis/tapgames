<template>
  <h2>{{ getGameList[index].name }}</h2>
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
h2 {
  font-size: 28px;
}
</style>