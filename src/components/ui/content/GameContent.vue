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
        <div class="scrollable">
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

          <div class="game__details-footer">
            <description :description="gameInfo.description" />
            <stores :stores="gameInfo.stores" />
          </div>
        </div>

        <footer>
          <controls />
        </footer>
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
  .scrollable {
    font-size: 18px;
    height: 400px;
    overflow-y: scroll;

    scrollbar-width: 1em;
    scrollbar-color: #151515 #202020;

    &::-webkit-scrollbar {
      width: 1em;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb {
      background-color: #202020;
      outline: 1px solid #202020;
    }
  }
}

@media screen and (max-width: 375px) {
  .game-description {
    font-size: 16px;
  }

  .scrollable {
    font-size: 18px;
    height: 330px;
    overflow-y: scroll;
  }
}

@media screen and (max-width: 375px) and (max-height: 812px) {
  .game-description {
    font-size: 16px;
  }

  .scrollable {
    font-size: 18px;
    height: 430px;
    overflow-y: scroll;
  }
}

@media screen and (max-width: 375px) and (max-height: 670px) {
  .game-description {
    font-size: 16px;
  }

  .scrollable {
    font-size: 18px;
    height: 350px;
    overflow-y: scroll;
  }
}

@media screen and (max-width: 320px) {
  .scrollable {
    font-size: 18px;
    height: 300px;
    overflow-y: scroll;
  }
}

@media screen and (max-width: 415px) and (max-height: 830px) {
  .game-description {
    font-size: 16px;
  }

  .scrollable {
    font-size: 18px;
    height: 450px;
    overflow-y: scroll;
  }
}

@media screen and (max-width: 411px) and (max-height: 735px) {
  .game-description {
    font-size: 16px;
  }

  .scrollable {
    font-size: 18px;
    height: 400px;
    overflow-y: scroll;
  }
}

@media screen and (max-width: 360px) and (max-height: 640px) {
  .game-description {
    font-size: 16px;
  }

  .scrollable {
    font-size: 18px;
    height: 340px;
    overflow-y: scroll;
  }
}

@media screen and (max-width: 360px) and (max-height: 568px) {
  .game-description {
    font-size: 14px;
  }

  .scrollable {
    font-size: 18px;
    height: 300px;
    overflow-y: scroll;
  }
}

@media screen and (max-width: 375px) and (max-height: 667px) {
  .game-description {
    font-size: 16px;
  }

  .scrollable {
    font-size: 18px;
    height: 360px;
    overflow-y: scroll;
  }
}

@media screen and (max-width: 375px) and (max-height: 667px) {
  .game-description {
    font-size: 16px;
  }

  .scrollable {
    font-size: 18px;
    height: 360px;
    overflow-y: scroll;
  }
}

@media screen and (max-width: 414px) and (max-height: 736px) {
  .game-description {
    font-size: 16px;
  }

  .scrollable {
    font-size: 18px;
    height: 400px;
    overflow-y: scroll;
  }
}

@media screen and (max-width: 540px) and (max-height: 720px) {
  .game-description {
    font-size: 16px;
  }

  .scrollable {
    font-size: 18px;
    height: 380px;
    overflow-y: scroll;
  }
}
</style>