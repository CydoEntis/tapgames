<template>
  <main>
    <div class="navigation">
      <mobile-nav @click="toggleMobileNav" />
    </div>
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__faster animate__fadeIn"
      leave-active-class="animate__animated animate__faster animate__fadeOut"
    >
      <div class="mobile-menu" v-if="getIsMobileNavOpen">
        <mobile-menu />
      </div>
    </transition>
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__faster animate__fadeIn"
      leave-active-class="animate__animated animate__faster animate__fadeOut"
    >
      <div
        class="game-content"
        v-if="getGameContentVisibility && !getIsMobileNavOpen"
      >
        <section class="game-details"></section>
      </div>
    </transition>
  </main>
</template>

<script>
import MobileNav from "../mobile/MobileNav.vue";
import MobileMenu from "../mobile/MobileMenu.vue";
import { mapGetters } from "vuex";

export default {
  components: { MobileNav, MobileMenu },
  props: ["title", "image", "platforms", "stores", "esrb", "rating"],
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
    ...mapGetters(["getGameContentVisibility", "getIsMobileNavOpen"]),
  },
  async created() {
    this.$store.commit("setGameContentVisibility", false);
    this.$store.commit("setIsMobileNavOpen", false);
    let id = this.$route.params.gameId;
    try {
      await this.$store.dispatch("fetchGameInfo", id);

      setTimeout(() => {
        this.$store.commit("setGameContentVisibility", true);
      }, 500);
    } catch (e) {
      this.error = e.message || "Unable to fetch games";
    }
  },
};
</script>

<style scoped lang="scss">
main {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .navigation {
    display: none;
  }

  .mobile-menu {
    width: 100%;
    height: 100vh;
  }
}

@media screen and (max-width: 800px) {
  main {
    position: relative;

    .navigation {
      display: inline-block;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1000;
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