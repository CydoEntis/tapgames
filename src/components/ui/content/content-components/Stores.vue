<template>
  <div class="game-stores">
    <a
      v-for="storeData in stores"
      :key="storeData.id"
      :href="'https://' + storeData.store.domain"
      target="_blank"
    >
      {{ storeData.store.name }}
    </a>
  </div>
</template>

<script>
export default {
  props: ["stores"],
};
</script>

<style scoped lang="scss">
.game-stores {
  margin: 20px 10px;
  a {
    display: inline-block;
    border: 1px solid #ffffff66;
    text-transform: capitalize;
    text-decoration: none;
    color: #ffffff66;
    font-size: 18px;
    border: 1px solid #ffffff66;
    border-radius: 25px;
    padding: 5px 10px;
    margin: 4px 4px 4px 0;
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