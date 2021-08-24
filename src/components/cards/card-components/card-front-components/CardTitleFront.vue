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

@media screen and (max-height: 700px) {
  h2 {
    font-size: 32px;
  }
}

@media screen and (width: 768px) and (height: 1024px) {
  h2 {
    font-size: 48px;
  }
}

@media screen and (width: 1024px) and (height: 1366px) {
  h2 {
    font-size: 54px;
  }
}
</style>