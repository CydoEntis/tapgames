<template>
  <router-link :to="gameLink" @click="fetchGameInfo">
    <div class="img-wrapper">
      <h3>{{ title }}</h3>
      <img :src="url" alt="" />
      <div id="overlay"></div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["url", "title", "id"],
  computed: {
    gameLink() {
      return "/games/" + this.id;
    },
  },
  methods: {
    async fetchGameInfo() {
      this.$store.commit("setGameContentVisibility", false);
      this.$store.commit("setIsMobileNavOpen", false);
      try {
        await this.$store.dispatch("fetchGameInfo", this.id);

        setTimeout(() => {
          this.$store.commit("setGameContentVisibility", true);
        }, 500);
      } catch (e) {
        this.error = e.message || "Unable to fetch games";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #fff;
}

.img-wrapper {
  position: relative;
  width: 100%;
  height: 45px;
  overflow: hidden;
  margin: 5px 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  h3 {
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 16px;
    top: 50%;
    z-index: 99;
    transform: translateY(-50%);
  }

  img {
    width: 100%;
    height: auto;
    /* height: 75px; */
  }

  #overlay {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5); /* Black see-through */
    width: 100%;
    height: 100%;
  }
}

@media screen and (min-width: 1024px) and (min-height: 1366px) {
  .img-wrapper {
    height: 100px;

    h3 {
      font-size: 36px;
    }
  }
}

@media screen and (width: 768px) and (height: 1024px) {
  .img-wrapper {
    height: 75px;

    h3 {
      font-size: 28px;
    }
  }
}
</style>