<template>
  <div class="scene">
    <loading-spinner v-if="isLoading" />
    <div v-else class="card">
      <card-front />
      <card-back />
    </div>
  </div>
</template>

<script>
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

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
</style>