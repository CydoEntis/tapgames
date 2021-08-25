<template>
  <div class="mobile">
    <div class="mobile-header">
      <the-title title="TapGames" />
    </div>

    <div class="mobile-controls">
      <div class="main-controls">
        <router-link to="/home" @click="toggleMobileNav">Home</router-link>
      </div>
      <div class="category-controls">
        <a @click="showLikes" :class="{ active: likesAreActive }">Likes</a>
        <a @click="showDislikes" :class="{ active: dislikesAreActive }"
          >Dislikes</a
        >
      </div>
    </div>
    <div class="mobile-content">
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__faster animate__fadeIn"
        leave-active-class="animate__animated animate__faster animate__fadeOut"
      >
        <div class="games-container" v-if="!hideLikes">
          <transition-group tag="game-display">
            <game-display
              v-for="game in getLikedGames"
              :key="game.id"
              :url="game.image"
              :title="game.name"
              :id="game.id"
            />
          </transition-group>
        </div>

        <div class="games-container" v-else>
          <transition-group tag="game-display">
            <game-display
              v-for="game in getDislikedGames"
              :key="game.id"
              :url="game.image"
              :title="game.name"
              :id="game.id"
            />
          </transition-group>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import TheTitle from "../TheTitle.vue";
import GameDisplay from "../GameDisplay.vue";

import { loadGamesFromStorage } from "../../../helpers/storage";
import { mapGetters } from "vuex";

export default {
  components: {
    TheTitle,
    GameDisplay,
  },
  data() {
    return {
      likesAreVisible: true,
      hideLikes: false,
      likesAreActive: true,
      dislikesAreActive: false,
    };
  },
  methods: {
    async loadLikedGames() {
      const likedGames = loadGamesFromStorage("likedGames");
      await this.$store.commit("setLikedGames", likedGames);
    },
    async loadDisLikedGames() {
      const dislikedGames = loadGamesFromStorage("dislikedGames");
      await this.$store.commit("setDislikedGames", dislikedGames);
    },
    async loadGames() {
      await this.loadLikedGames();
      await this.loadDisLikedGames();
    },
    showLikes() {
      this.likesAreVisible = !this.likesAreVisible;
      this.hideLikes = !this.hideLikes;
      this.likesAreActive = true;
      this.dislikesAreActive = false;
    },
    showDislikes() {
      this.likesAreVisible = !this.likesAreVisible;
      this.hideLikes = !this.hideLikes;
      this.dislikesAreActive = true;
      this.likesAreActive = false;
    },
    toggleMobileNav() {
      this.$store.commit("setIsMobileNavOpen", !this.getIsMobileNavOpen);
    },
  },
  computed: {
    ...mapGetters(["getLikedGames", "getDislikedGames", "getIsMobileNavOpen"]),
  },
  created() {
    this.loadGames();
  },
};
</script>

<style lang="scss" scoped>
.mobile {
  width: 100%;
  height: 100vh;
  background: #151515;

  .mobile-header {
    width: 100%;
  }

  .mobile-controls {
    display: flex;
    transition: active 800ms ease-in;
    margin: 10px;

    a {
      text-decoration: none;
      color: #ffffff66;
      border: 1px solid #ffffff66;
      border-radius: 15px;
      padding: 3px 5px;
      margin-right: 10px;
      cursor: pointer;
      transition: all 200ms ease-in;

      &:hover {
        opacity: 0.6;
      }
    }
    .main-controls {
      width: 50%;
    }
    .category-controls {
      width: 50%;
      text-align: right;
    }

    .active {
      color: #fff;
      border: 1px solid #fff;
    }
  }
}

.mobile-content {
  padding: 5px 10px;
  overflow: hidden;

  .games-container {
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    font-size: 14px;
    overflow-y: scroll;
    max-height: 75vh;

    &::-webkit-scrollbar {
      width: 1em;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #151515;
      outline: 1px solid #151515;
    }
  }
}

@media screen and (min-width: 1024px) and (min-height: 1366px) {
  .mobile {
    .mobile-controls {
      margin-top: 75px;
      font-size: 32px;
      a {
        border-radius: 35px;
        padding: 5px 10px;
        margin-right: 10px;
      }
    }
  }
}

@media screen and (width: 768px) and (height: 1024px) {
  .mobile {
    .mobile-controls {
      margin-top: 65px;
      font-size: 22px;
      a {
        border-radius: 35px;
        padding: 5px 10px;
        margin-right: 10px;
      }
    }
  }
}
</style>


