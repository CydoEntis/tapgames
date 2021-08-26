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
      <section
        class="game-content"
        v-if="getGameContentVisibility && !getIsMobileNavOpen"
      >
        <banner :title="gameInfo.name" :image="gameInfo.image" />
        <section class="game-content-body">
          <div class="flex-wrapper">
            <platforms :platforms="gameInfo.platforms" />
            <metacritic :metacritic="gameInfo.metacritic" />
          </div>
          <div class="flex-wrapper">
            <genres :genres="gameInfo.genres" />
            <esrb :esrb="gameInfo.rating" />
          </div>
          <playtime :playtime="gameInfo.playtime" />
          <stores :stores="gameInfo.stores" />
          <description :description="gameInfo.description" />
        </section>
      </section>
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
import Controls from "./content-components/Controls.vue";

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
    Controls,
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
  /* height: 100%; */

  .navigation {
    display: none;
  }

  .mobile-menu {
    width: 100%;
    height: 100vh;
  }

  .flex-wrapper {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }

  .game-content {
    .game-content-body {
      /* height: 100vh; */
      padding: 8px;
    }
  }

  .game__details {
    display: flex;
    justify-content: space-between;
    padding: 10px 5px 0px 5px;

    &-content {
      display: flex;
      flex-direction: column;
    }

    .right {
      align-items: flex-end;
    }
  }
}

@media screen and (max-width: 1024px) {
  main {
    .navigation {
      display: inline-block;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 999;
    }
  }
}
</style>