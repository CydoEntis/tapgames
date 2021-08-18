<template>
  <section class="main">
    <div class="navigation">
      <mobile-nav @click="navIsOpen = !navIsOpen" />
    </div>
    <div class="main-content">
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__faster animate__fadeIn"
        leave-active-class="animate__animated animate__faster animate__fadeOut"
      >
        <div class="mobile-menu" v-if="navIsOpen">
          <mobile-menu />
        </div>
        <game-card v-else />
      </transition>
    </div>
  </section>
</template>

<script>
import GameCard from "../../cards/GameCard.vue";
import MobileMenu from "../mobile/MobileMenu.vue";
import MobileNav from "../mobile/MobileNav.vue";
export default {
  components: { GameCard, MobileNav, MobileMenu },
  data() {
    return {
      navIsOpen: false,
    };
  },
  methods: {
    toggleNav() {},
  },
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .navigation {
    display: none;
    width: 50px;
    height: 50px;
  }

  .mobile-menu {
    width: 100%;
    height: 100vh;
  }

  .main-content {
    width: 75%;
    min-width: 440px;
    height: 100vh;
    background: #151515;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (max-width: 800px) {
  .main {
    position: relative;

    .navigation {
      display: inline-block;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 99;
    }

    .main-content {
      width: 100%;
    }
  }
}

@media screen and (max-width: 450px) {
  .main {
    .main-content {
      width: 100vw;
      min-width: 100%;
      height: 100vh;
      display: block;
    }
  }
}
</style>