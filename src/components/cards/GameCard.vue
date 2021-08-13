<template>
  <div class="scene">
    <div class="card">
      <div class="card__face card__face--front">
        <div class="media-wrapper">
          <div class="img-wrapper" v-if="!showGameTrailer">
            <img :src="games[index].image" alt="" @click="fetchGameTrailer" />
          </div>
          <div class="video-player" v-else>
            <div class="close-icon" @click="closeVideo">
              <i class="fas fa-times-circle"></i>
            </div>
          </div>
        </div>

        <div class="game-info">
          <div class="info-bar">
            <div class="game-platforms">
              <span v-show="games[index].platforms.playstation">
                <i class="fab fa-playstation"></i>
              </span>
              <span v-show="games[index].platforms.xbox">
                <i class="fab fa-xbox"></i>
              </span>
              <span v-show="games[index].platforms.nintendo">
                <i class="fas fa-gamepad"></i>
              </span>
              <span v-show="games[index].platforms.pc">
                <i class="fab fa-windows"></i>
              </span>
              <span v-show="games[index].platforms.android">
                <i class="fab fa-android"></i>
              </span>
              <span v-show="games[index].platforms.apple">
                <i class="fab fa-apple"></i>
              </span>
            </div>

            <div
              class="game-ratings"
              :class="ratingColor"
              v-if="games[index].metacritic"
            >
              <span>{{ games[index].metacritic }}</span>
            </div>
          </div>

          <div class="game-details">
            <h1>{{ games[index].name }}</h1>
            <div class="game-tags">
              <div class="game-genres">
                <span v-for="genre in games[index].genres" :key="genre">
                  {{ genre.name }}
                </span>
              </div>
              <div class="game-esrb">
                <span :class="esrbColor">{{ games[index].rating.name }}</span>
              </div>
            </div>
            <div class="game-playtime">
              <span
                ><i class="far fa-clock"></i>
                {{ games[index].playtime }}hrs</span
              >
            </div>
            <div class="game-stores">
              <a
                v-for="store in games[index].stores"
                :key="store.id"
                :href="'https://' + store.store.domain"
              >
                {{ store.store.name }}
              </a>
            </div>
          </div>
        </div>
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
      </div>
      <div class="card__face card__face-back">
        <div class="controls">
          <div class="reaction-btn back" @click="flipCard">
            <i class="fas fa-arrow-circle-left"></i>
          </div>
        </div>
        <p class="game-description">
          {{ getCurrentGame.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["games"],
  emits: ["getNextGame"],
  data() {
    return {
      showGameTrailer: false,
      isFetchingTrailer: false,
      index: 0,
    };
  },
  methods: {
    async getNextGame() {
      this.showTrailer = false;

      try {
        // await this.fetchGameTrailer();
      } catch (e) {
        this.error = e.message || "Unable to fetch games";
      }

      this.index++;
      if (this.index >= this.games.length - 1) {
        this.index = 0;
        this.$emit("getNextGame");
      }
    },
    async fetchGameInfo() {
      let id = this.games[this.index].id;

      try {
        await this.$store.dispatch("fetchGameInfo", id);
      } catch (e) {
        this.error = e.message || "Unable to fetch games";
      }
    },

    async flipCard() {
      await this.fetchGameInfo();

      const card = document.querySelector(".card");
      card.classList.toggle("is-flipped");

      const gameDescription = document.querySelector(".game-description");
      gameDescription.scrollTop = 0;
    },
    closeVideo() {
      const player = document.querySelector(".video-player");
      player.currentTime = 0;

      this.showGameTrailer = false;
    },
  },
  computed: {
    ...mapGetters(["getCurrentGame", "getGameTrailer"]),
    ratingColor() {
      if (this.games[this.index].metacritic >= 75) {
        return "green-rating";
      } else if (this.games[this.index].metacritic >= 50) {
        return "yellow-rating";
      } else {
        return "red-rating";
      }
    },
    genreColor() {
      if (this.games[this.index].genres.name === "Action") return "action";
      else if (this.games[this.index].genres.name === "Strategy")
        return "strategy";
      else if (this.games[this.index].genres.name === "RPG") return "rpg";
      else if (this.games[this.index].genres.name === "Shooter")
        return "shooter";
      else if (this.games[this.index].genres.name === "Adventure")
        return "adventure";
      else if (this.games[this.index].genres.name === "Puzzle") return "puzzle";
      else if (this.games[this.index].genres.name === "Racing") return "racing";
      else if (this.games[this.index].genres.name === "Sport") return "sport";
    },
    esrbColor() {
      if (this.games[this.index].rating.name === "Mature") return "red-rating";
      else if (this.games[this.index].rating.name >= "Teen")
        return "yellow-rating";
      else return "green-rating";
    },
  },
};
</script>

<style lang="scss" scoped>
.scene {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 375px;
  height: 600px;

  perspective: 1000px;

  .card__face {
    position: absolute;
    width: 100%;

    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .card__face--front {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .media-wrapper {
      width: 375px;

      .img-wrapper {
        max-width: 375px;

        img {
          border-radius: 15px;
          width: 100%;
          min-height: 200px;
          max-height: 200px;
        }
      }
    }

    .game-info {
      width: 100%;
      height: 310px;
      text-align: left;
      padding: 10px 5px;

      .green-rating {
        border: 1px solid #6bc849;
        color: #6bc849;
      }

      .yellow-rating {
        border: 1px solid #fdcb52;
        color: #fdcb52;
      }

      .red-rating {
        border: 1px solid #c85849;
        color: #c85849;
      }

      .game-platforms {
        height: 40px;

        span {
          font-size: 18px;
          margin: 5px;
        }
      }

      .info-bar {
        height: 40px;
        display: flex;
        justify-content: space-between;
        padding: 2.5px 5px;

        .game-ratings {
          padding: 5px;
          font-size: 18px;
          font-weight: bold;
        }

        .green-rating {
          border: 1px solid #6bc849;
          color: #6bc849;
        }

        .yellow-rating {
          border: 1px solid #fdcb52;
          color: #fdcb52;
        }

        .red-rating {
          border: 1px solid #c85849;
          color: #c85849;
        }
      }

      .game-details {
        height: 200px;
        margin: 5px;

        h1 {
          font-size: 24px;
          padding-bottom: 4px;
        }

        p {
          font-size: 15px;
        }

        .game-tags {
          width: 100%;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          padding: 2.5px 0;

          .game-genres {
            span {
              display: inline-block;
              font-size: 14px;
              border: 1px solid #ffffff66;
              border-radius: 15px;
              padding: 1px 5px;
              margin: 2.5px;
            }
          }

          .game-esrb {
            margin: 5px;
            span {
              padding: 1px 5px;
              border-radius: 15px;
            }
          }
        }

        .game-playtime {
          padding: 5px 0;
        }

        .game-stores {
          height: 150px;
          a {
            display: inline-block;
            border: 1px solid #ffffff66;
            border-radius: 15px;
            text-transform: capitalize;
            text-decoration: none;
            padding: 3px 6px;
            margin: 3px 2.5px;
            color: #ffffff66;
            cursor: pointer;
            transition: all 300ms ease-in;

            &:hover {
              opacity: 0.75;
            }
          }
        }
      }
    }

    .controls {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .reaction-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        background: none;
        color: white;
        font-size: 32px;
        width: 75px;
        height: 65px;
        background: #151515;
        transition: all 200ms ease-in;
        border-bottom: 5px solid #151515;
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
        border-radius: 15px 0 0 0;
        color: #526ffd;
      }

      .dislike {
        border-radius: 0 15px 0 0;
        color: #c85849;
      }
    }
  }

  .card__face-back {
    transform: rotateY(180deg);

    .controls {
      width: 100%;

      .reaction-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        background: none;
        color: white;
        font-size: 32px;
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

      .back {
        border-radius: 15px 0 15px 0;
        color: #ffffff66;
      }
    }

    .game-description {
      margin-top: 10px;
      padding: 10px;
      font-size: 14px;
      height: 300px;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        width: 1em;
      }

      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }

      &::-webkit-scrollbar-thumb {
        background-color: #151515;
        outline: 1px solid #151515;
      }
    }
  }
}

.card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;

  background: #202020;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 15px;

  &.is-flipped {
    transform: rotateY(180deg);
  }
}
</style>