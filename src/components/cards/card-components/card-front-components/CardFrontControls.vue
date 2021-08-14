<template>
  <div class="controls">
    <div class="reaction-btn dislike" @click="getNextGame">
      <i class="fas fa-heart-broken"></i>
    </div>
    <div class="reaction-btn info" @click="flipCard">
      <i class="fas fa-info-circle"></i>
    </div>
    <div class="reaction-btn like" @click="getNextGame">
      <i class="fas fa-heart"></i>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["getNextGame", "flipCard"],
  methods: {
    getNextGame() {
      this.$emit("getNextGame");
    },
    flipCard() {
      this.$emit("flipCard");
    },
  },
};
</script>

<style lang="scss" scoped>
.controls {
  display: flex;
  justify-content: space-between;
  width: 100%;

  .reaction-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 32px;
    width: 75px;
    height: 65px;
    background: #151515;
    border-bottom: 5px solid #151515;
    transition: all 200ms ease-in;
    cursor: pointer;

    &:hover {
      border-bottom: 5px solid #ffffff66;
    }
  }

  .info {
    width: 125px;
    border-radius: 15px 15px 0 0;
    color: #ffffff66;
  }

  .like {
    border-radius: 15px 0 15px 0;
    color: #526ffd;
  }

  .dislike {
    border-radius: 0 15px 0 15px;
    color: #c85849;
  }
}
</style>