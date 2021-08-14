<template>
  <transition>
    <div class="scene" v-if="getShowImage">
      <loading-spinner v-if="isLoading" />
      <div v-else class="card">
        <card-front />
        <card-back />
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import LoadingSpinner from "../spinners/LoadingSpinner.vue";
import CardBack from "./card-components/card-back-components/CardBack.vue";
import CardFront from "./card-components/card-front-components/CardFront.vue";

export default {
  props: ["games"],
  emit: ["getNextGame"],
  components: {
    CardFront,
    CardBack,
    LoadingSpinner,
  },
  data() {
    return {
      showImage: true,
      isLoading: false,
    };
  },
  methods: {
    async fetchGames(api) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("fetchGames", api);
      } catch (e) {
        this.error = e.message || "Unable to fetch games";
      }
      this.isLoading = false;
    },
    increment() {
      this.$store.dispatch("incrementIndex");
    },
  },
  computed: {
    ...mapGetters(["getIndex", "getShowImage"]),
  },
  async created() {
    const apiUrl = "https://api.rawg.io/api/games?key=";
    const apiKey = "4ddf56496a3f4f1fb9d1338eebb64df7";

    this.fetchGames(apiUrl + apiKey);
  },
};
</script>

<style lang="scss" scoped>
.scene {
  /* position: relative;
  display: flex;
  justify-content: center;
  align-items: center; */

  width: 375px;
  height: 600px;

  perspective: 1000px;
}

.card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;

  background: #202020;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 15px;

  &.is-flipped {
    transform: rotateY(180deg);
  }
}

.v-enter-active {
  animation: fade-in 0.3s ease-out;
}

.v-leave-active {
  animation: fade-out 0.3s ease-out;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  25% {
    opacity: 0.25;
  }

  50% {
    opacity: 0.5;
  }

  75% {
    opacity: 0.75;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fade-out {
  100% {
    opacity: 0;
  }

  75% {
    opacity: 0.25;
  }

  50% {
    opacity: 0.5;
  }

  25% {
    opacity: 0.75;
  }

  0% {
    opacity: 1;
  }
}
</style>