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
  margin-top: 60px;
  text-align: center;
  width: 100%;
  padding: 10px;
  font-size: 28px;
}

@media screen and (min-width: 1024px) and (min-height: 1366px) {
  h2 {
    font-size: 48px;
  }
}

@media screen and (width: 768px) and (height: 1024px) {
  h2 {
    font-size: 32px;
  }
}

@media screen and (max-width: 360px) {
  h2 {
    font-size: 22px;
  }
}
</style>