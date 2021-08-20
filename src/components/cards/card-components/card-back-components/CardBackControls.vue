<template>
  <div class="controls">
    <button class="reaction-btn dislike" @click="dislikeGame">
      <i class="fas fa-heart-broken"></i>
    </button>
    <button class="reaction-btn info" @click="flipCard">
      <i class="fas fa-info-circle"></i>
    </button>
    <button class="reaction-btn like" @click="likeGame">
      <i class="fas fa-heart"></i>
    </button>
  </div>
</template>

<script>
export default {
  emits: ["likeGame", "dislikeGame", "flipCard"],
  methods: {
    likeGame() {
      this.$emit("likeGame");
    },
    dislikeGame() {
      this.$emit("dislikeGame");
    },
    flipCard() {
      this.$emit("flipCard");
    },
  },
};
</script>

<style lang="scss" scoped>
.controls {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;

  .reaction-btn {
    outline: none;
    border: none;
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

@media screen and (max-width: 450px) {
  .controls {
    position: absolute;
    bottom: 0;

    .reaction-btn {
      width: 85px;
      height: 75px;
      font-size: 42px;
    }
    .info {
      width: 175px;
    }
    .like {
      border-radius: 15px 0 0 0;
    }

    .dislike {
      border-radius: 0 15px 0 0;
    }
  }
}

@media screen and (max-width: 360px) {
  .controls {
    position: absolute;
    bottom: 0;

    .reaction-btn {
      width: 65px;
      height: 55px;
      font-size: 32px;
    }
    .info {
      width: 125px;
    }
    .like {
      border-radius: 15px 0 0 0;
    }

    .dislike {
      border-radius: 0 15px 0 0;
    }
  }
}
</style>