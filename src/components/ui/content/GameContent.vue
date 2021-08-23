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
        <banner :title="gameInfo.name" :image="gameInfo.image" />
        <section class="game__details">
          <div class="game__details-content">
            <platforms :platforms="gameInfo.platforms" />
            <genres :genres="gameInfo.genres" />
            <playtime :playtime="gameInfo.playtime" />
          </div>
          <div class="game__details-content right">
            <esrb :esrb="gameInfo.rating" />
            <metacritic :metacritic="gameInfo.metacritic" />
          </div>
        </section>

        <description :description="gameInfo.description" />
        <stores :stores="gameInfo.stores" />
      </div>
    </transition>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

import MobileNav from "../mobile/MobileNav.vue";
import MobileMenu from "../mobile/MobileMenu.vue";
import Banner from "./content-components/Banner.vue";
import Platforms from "./content-components/Platforms.vue";
import Metacritic from "./content-components/Metacritic.vue";
import Esrb from "./content-components/Esrb.vue";
import Genres from "./content-components/Genres.vue";
import Description from "./content-components/Description.vue";
import Stores from "./content-components/Stores.vue";
import Playtime from "./content-components/Playtime.vue";

export default {
  components: {
    MobileNav,
    MobileMenu,
    Banner,
    Platforms,
    Metacritic,
    Esrb,
    Genres,
    Description,
    Stores,
    Playtime,
  },
  props: ["gameInfo"],
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

  .game__details {
    display: flex;
    justify-content: space-between;
    padding: 10px 15px 0px 15px;

    &-content {
      display: flex;
      flex-direction: column;
    }

    .right {
      align-items: flex-end;
    }
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