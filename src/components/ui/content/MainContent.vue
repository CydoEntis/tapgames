<template>
  <section class="main">
    <div class="navigation">
      <mobile-nav @click="toggleMobileNav" />
    </div>
    <div class="main-content">
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__faster animate__fadeIn"
        leave-active-class="animate__animated animate__faster animate__fadeOut"
      >
        <div class="mobile-menu" v-if="getIsMobileNavOpen">
          <mobile-menu />
        </div>
        <game-card v-else />
      </transition>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
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
    toggleMobileNav() {
      this.$store.commit("setIsMobileNavOpen", !this.getIsMobileNavOpen);
    },
  },
  computed: {
    ...mapGetters(["getIsMobileNavOpen"]),
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;

  .navigation {
    display: none;
  }

  .main-content {
    width: 100%;
    height: 100vh;
    background: #151515;
  }
}

@media screen and (min-width: 1025px) {
  .main {
    width: 100%;
    .main-content {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .navigation {
      display: none;
    }
  }
}

@media screen and (max-width: 1024px) {
  .main {
    position: relative;
    height: 100vh;
    display: block;
    .navigation {
      display: inline-block;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 99;
    }

    .main-content {
      width: 100%;
      width: 100vw;
      min-width: 100%;
      height: 100vh;
      display: block;
    }
  }
}
</style>