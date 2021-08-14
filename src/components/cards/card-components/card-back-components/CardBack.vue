<template>
  <div class="card__face card__face-back">
    <div class="align">
      <card-back-controls @flip-card="flipCard" />
      <card-title-back />
    </div>
    <card-description />
  </div>
</template>

<script>
import CardTitleBack from "./CardTitleBack.vue";
import CardBackControls from "./CardBackControls.vue";
import CardDescription from "./CardDescription.vue";

export default {
  components: { CardBackControls, CardDescription, CardTitleBack },
  methods: {
    async flipCard() {
      const card = document.querySelector(".card");
      card.classList.toggle("is-flipped");

      const gameDescription = document.querySelector(".game-description");
      gameDescription.scrollTop = 0;
    },
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
</style>