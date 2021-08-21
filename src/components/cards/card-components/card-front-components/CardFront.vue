<template>
  <div class="card__face card__face--front">
    <card-image />
    <div class="card-info">
      <div class="align">
        <card-platforms />
        <card-rating />
      </div>
      <div class="align">
        <card-title-front />
      </div>
      <div class="align">
        <card-genres />
        <card-esrb />
      </div>
      <div class="align">
        <card-play-time />
      </div>
      <div class="align">
        <card-stores />
      </div>
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
    return {};
  },
};
</script>

<style lang="scss" scoped>
.card-info {
  width: 100%;
  min-height: 330px;
  padding: 8px;
}

.align {
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.card__face--front {
  display: flex;
  flex-direction: column;
  justify-self: space-between;
  align-items: space-between;
  border-radius: 15px;
  height: 600px;
}

@media screen and (max-width: 450px) {
  .card-info {
    width: 100%;
    padding: 8px;
  }

  .card__face--front {
    height: 100vh;
    border-radius: none;
  }
}

@media screen and (max-width: 360px) {
  .card-info {
    width: 100%;
    padding: 8px;
  }

  .card__face--front {
    height: 100vh;
    border-radius: none;
  }
}
</style>