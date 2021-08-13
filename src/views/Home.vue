<template>
  <div class="home">
    <p v-if="isLoading">Loading...</p>
    <game-card v-else :games="getGameList" @getNextGame="getNextGame" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import GameCard from "../components/cards/GameCard.vue";

export default {
  components: { GameCard },
  name: "Home",
  data() {
    return {
      isLoading: false,
      error: "",
      index: 0,
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
    async getNextGame() {
      const nextPageUrl = this.getNextPage;
      await this.fetchGames(nextPageUrl);
    },
  },
  async created() {
    const apiUrl = "https://api.rawg.io/api/games?key=";
    const apiKey = "4ddf56496a3f4f1fb9d1338eebb64df7";

    this.fetchGames(apiUrl + apiKey);
    // this.$store.dispatch("fetchGameInfo");
  },
  computed: {
    ...mapGetters(["getGameList", "getNextPage"]),
  },
};
</script>

<style lang="scss" scoped>
.image-wrapper {
  width: 350px;
  min-height: 200px;
  max-height: 200px;
  margin: 0 auto;

  img {
    width: 100%;
  }
}
</style>
