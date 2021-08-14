<template>
  <div class="game-stores">
    <a
      v-for="store in getGameList[index].stores"
      :key="store.id"
      :href="'https://' + store.store.domain"
    >
      {{ store.store.name }}
    </a>
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
.game-stores {
  a {
    display: inline-block;
    border: 1px solid #ffffff66;
    border-radius: 15px;
    text-transform: capitalize;
    text-decoration: none;
    padding: 3px 6px;
    margin-right: 5px;
    margin-bottom: 5px;
    color: #ffffff66;
    cursor: pointer;
    transition: all 300ms ease-in;

    &:hover {
      color: #fff;
      border: 1px solid #fff;
    }
  }
}
</style>