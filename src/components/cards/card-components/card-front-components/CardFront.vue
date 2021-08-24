<template>
  <div class="card__face card__face--front" :class="{ safari: isSafari }">
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

.safari {
  background: transparent;
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

////////////////////////////////
@media screen and (max-height: 850px) {
  .card-info {
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
  .card-info {
    max-height: 400px;
  }
}

@media screen and (max-height: 700px) {
  .card-info {
    max-height: 350px;
  }
}

@media screen and (max-height: 600px) {
  .card-info {
    max-height: 300px;
  }
}

/* @media screen and (max-width: 320px) {
  .card-info {
    max-height: 150px;
    overflow-y: scroll;
    border: 2px solid red;

    &::-webkit-scrollbar {
      width: 1em;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #202020;
      outline: 1px solid #202020;
    }
  }
} */

/* Tablets */
@media screen and (width: 540px) and (height: 720px) {
  .card-info {
    max-height: 380px;
  }
}

@media screen and (width: 768px) and (height: 1024px) {
  .card-info {
    max-height: 100%;
  }
}

/* @media screen and (width: 1024px) and (height: 1366px) {
  .card-info {
    max-height: 100%;
  }
} */
</style>