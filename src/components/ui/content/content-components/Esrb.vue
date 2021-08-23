<template>
  <div class="game-esrb">
    <span :class="esrbColor">{{ esrb }}</span>
  </div>
</template>

<script>
export default {
  props: ["esrb"],
  computed: {
    esrbColor() {
      if (this.esrb === "Mature" || this.esrb === "Adults Only")
        return "red-rating";
      else if (this.esrb === "Teen") return "yellow-rating";
      else if (this.esrb === "Everyone 10+" || this.esrb === "Everyone")
        return "green-rating";
      else if (this.esrb === "N/A") {
        return "no-rating";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.game-esrb {
  margin: 5px 0;

  span {
    font-size: 18px;
    border-radius: 25px;
    padding: 5px 10px;
    margin: 4px 4px 4px 0;
  }
}

@media screen and (max-height: 700px) {
  .game-esrb {
    span {
      font-size: 14px;
    }
  }
}

@media screen and (width: 1024px) and (height: 1366px) {
  .game-esrb {
    span {
      font-size: 22px;
    }
  }
}
</style>