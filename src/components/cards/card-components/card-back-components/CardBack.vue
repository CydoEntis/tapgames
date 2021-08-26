<template>
  <div class="card__face card__face-back" :class="{ safari: isSafari }">
    <card-title-back />
    <card-description />
    <card-controls />
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
  overflow: hidden;
  transform: rotateY(180deg);

  .back {
    color: #ffffff66;
  }

  .safari {
    background: transparent !important;
    backface-visibility: initial !important;
  }
}
</style>