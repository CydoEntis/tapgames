<template>
  <h2>{{ getCurrentGame.name }}</h2>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["index"],
  computed: {
    ...mapGetters(["getCurrentGame"]),
  },
};
</script>

<style scoped lang="scss">
h2 {
  width: 100%;
  padding: 10px;
  font-size: 28px;
}
</style>