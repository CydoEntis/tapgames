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

@media screen and (max-height: 700px) {
  .game-stores {
    margin: 10px 5px;
    a {
      font-size: 14px;
    }
  }
}

@media screen and (width: 1024px) and (height: 1366px) {
  .game-stores {
    a {
      font-size: 26px;
    }
  }
}
</style>