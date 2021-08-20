<template>
  <div class="game-stores">
    <a
      v-for="store in getGameList[getIndex].stores"
      :key="store.id"
      :href="'https://' + store.store.domain"
      target="_blank"
    >
      {{ store.store.name }}
    </a>
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

@media screen and (max-width: 450px) {
  .game-stores {
    a {
      font-size: 18px;
      padding: 5px 10px;
      margin-right: 6px;
      margin-bottom: 6px;
    }
  }
}

@media screen and (max-width: 360px) {
  .game-stores {
    a {
      font-size: 14px;
      padding: 3px 6px;
      margin-right: 5px;
      margin-bottom: 5px;
    }
  }
}
</style>