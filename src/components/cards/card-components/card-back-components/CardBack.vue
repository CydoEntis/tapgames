<template>
  <div class="card__face card__face-back" :class="{ safari: isSafari }">
    <div class="align">
      <card-controls />
      <card-title-back />
    </div>
    <card-description />
  </div>
</template>

<script>
import CardTitleBack from "./CardTitleBack.vue";
import CardControls from "../CardControls.vue";
import CardDescription from "./CardDescription.vue";

export default {
  components: { CardControls, CardDescription, CardTitleBack },
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
.card__face-back {
  transform: rotateY(180deg);

  .align {
    display: flex;
    justify-content: space-between;
  }

  .back {
    border-radius: 15px 0 15px 0;
    color: #ffffff66;
  }
}

.safari {
  background: transparent;
}

@media screen and (max-width: 450px) {
  .card-info {
    width: 100%;
    min-height: 450px;
    padding: 8px;
  }

  .card__face--back {
    height: 100vh;
    border-radius: none;
  }
}
</style>