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
  margin: 10px 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  a {
    font-size: 16px;
    text-decoration: none;
    color: #797974;
    border-radius: 15px;
    border: 1px solid #797974;
    padding: 0.1em 0.2em;
    margin-right: 0.3rem;
    margin-bottom: 0.3rem;
    transition: all 300ms ease-in;
    cursor: pointer;

    &:hover {
      color: #fff;
      border: 1px solid #fff;
    }
  }
}

@media screen and (min-width: 1024px) and (min-height: 1366px) {
  .game-stores {
    a {
      font-size: 36px;
      border-radius: 25px;
    }
  }
}

@media screen and (width: 768px) and (height: 1024px) {
  .game-stores {
    a {
      font-size: 26px;
      border-radius: 25px;
    }
  }
}
</style>