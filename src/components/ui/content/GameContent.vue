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
          <div class="game__details">
            <div class="game__details-content">
              <platforms :platforms="gameInfo.platforms" />
              <genres :genres="gameInfo.genres" />
              <playtime :playtime="gameInfo.playtime" />
            </div>
            <div class="game__details-content right">
              <esrb :esrb="gameInfo.rating" />
              <metacritic :metacritic="gameInfo.metacritic" />
            </div>
          </div>

          <description :description="gameInfo.description" />
          <stores :stores="gameInfo.stores" />
        </section>

        <footer>
          <controls />
        </footer>
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

@media screen and (max-width: 1300px) {
  .game-content-body {
    max-height: 420px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 1em;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #202020;
      outline: 1px solid #202020;
    }
  }
}

@media screen and (max-height: 850px) {
  .game-content-body {
    max-height: 450px;
  }
}

@media screen and (max-width: 800px) {
  main {
    .navigation {
      position: absolute;
      right: 0;
      display: inline-block;
      z-index: 9999;
    }
  }
}

@media screen and (max-height: 750px) {
  .game-content-body {
    max-height: 400px;
  }
}

@media screen and (max-height: 700px) {
  .game-content-body {
    max-height: 350px;
  }
}

@media screen and (max-height: 600px) {
  .game-content-body {
    max-height: 300px;
  }
}

@media screen and (width: 360px) and (height: 760px) {
  .game-content-body {
    max-height: 420px;
  }
}

/* Tablets */
@media screen and (width: 540px) and (height: 720px) {
  .game-content-body {
    max-height: 380px;
  }
}

@media screen and (width: 768px) and (height: 1024px) {
  .game-content-body {
    max-height: 100%;
  }
}

@media screen and (width: 1024px) and (height: 1366px) {
  .game-content-body {
    max-height: 100%;
  }
}
</style>