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

@media screen and (max-width: 450px) {
  .game-stores {
    a {
      font-size: 16px;
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

@media screen and (max-width: 768px) and (max-height: 1024px) {
  .game-stores {
    a {
      font-size: 22px;
      padding: 3px 6px;
      margin-right: 5px;
      margin-bottom: 5px;
    }
  }
}

@media screen and (max-width: 540px) and (max-height: 720px) {
  .game-stores {
    a {
      font-size: 18px;
      padding: 3px 6px;
      margin-right: 5px;
      margin-bottom: 5px;
    }
  }
}
</style>