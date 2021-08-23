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

@media screen and (max-width: 450px) {
  .game-esrb {
    span {
      font-size: 18px;
    }
  }
}

@media screen and (max-width: 360px) {
  .game-esrb {
    span {
      font-size: 14px;
    }
  }
}

@media screen and (max-width: 768px) and (max-height: 1024px) {
  .game-genres {
    span {
      font-size: 22px;
    }
  }
}

@media screen and (max-width: 540px) and (max-height: 720px) {
  .game-esrb {
    span {
      font-size: 16px;
    }
  }
}
</style>