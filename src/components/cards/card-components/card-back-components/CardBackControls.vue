<template>
  <div class="controls">
    <div class="reaction-btn" @click="flipCard">
      <i class="fas fa-arrow-circle-left"></i>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["flipCard"],
  methods: {
    flipCard() {
      this.$emit("flipCard");
    },
  },
};
</script>

<style lang="scss" scoped>
.controls {
  .reaction-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    color: white;
    font-size: 32px;
    border-radius: 15px 0 15px 0;
    width: 65px;
    height: 55px;
    background: #151515;
    transition: all 200ms ease-in;
    border-bottom: 5px solid #151515;
    cursor: pointer;

    &:hover {
      border-bottom: 5px solid #ffffff66;
    }
  }
}

@media screen and (max-width: 450px) {
  .reaction-btn {
    width: 75px;
    height: 65px;
  }
}
</style>