<template>
  <div class="game-playtime">
    <span
      ><i class="far fa-clock"></i> {{ getGameList[index].playtime }}hrs</span
    >
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

<style lang="scss" scoped>
.game-playtime {
  padding: 5px 0;
}
</style>