<template>
  <div class="card__face card__face--front" :class="{ safari: isSafari }">
    <card-image />
    <div class="card-info">
      <div class="flex-wrapper">
        <card-platforms />
        <card-rating />
      </div>
      <card-title-front />
      <div class="flex-wrapper">
        <card-genres />
        <card-esrb />
      </div>
      <card-play-time />
      <card-stores />
    </div>
    <card-controls />
  </div>
</template>

<script>
import CardImage from "./CardImage.vue";
import CardControls from "../CardControls.vue";
import CardPlatforms from "./CardPlatforms.vue";
import CardRating from "./CardRating.vue";
import CardTitleFront from "./CardTitleFront.vue";
import CardGenres from "./CardGenres.vue";
import CardEsrb from "./CardEsrb.vue";
import CardStores from "./CardStores.vue";
import CardPlayTime from "./CardPlayTime.vue";

export default {
  components: {
    CardImage,
    CardControls,
    CardPlatforms,
    CardRating,
    CardTitleFront,
    CardGenres,
    CardEsrb,
    CardStores,
    CardPlayTime,
  },
  data() {
    return {
      isSafari: null,
    };
  },
  methods: {
    detectSafari() {
      if (navigator.userAgent.indexOf("Safari") != -1) {
        this.isSafari = false;
      } else {
        this.isSafari = true;
      }
    },
  },
  created() {
    this.detectSafari();
  },
};
</script>

<style lang="scss" scoped>
.card-info {
  width: 100%;
  max-height: 310px;
  padding: 8px;

  overflow-y: scroll;
  scrollbar-width: 1em;
  scrollbar-color: #151515 #202020;

  &::-webkit-scrollbar {
    width: 1em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #151515;
    outline: 1px solid #151515;
  }
}

.card__face--front {
  display: flex;
  flex-direction: column;
  justify-self: space-between;
  align-items: space-between;
  border-radius: 15px;
}

.flex-wrapper {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

@media screen and (min-width: 1024px) and (min-height: 1366px) {
  .card-info {
    max-height: 500px;
  }
}

@media screen and (width: 768px) and (height: 1024px) {
  .card-info {
    max-height: 500px;
  }
}
</style>