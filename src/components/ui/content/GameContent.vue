<template>
  <main>
    <div class="game-content">
      <header>
        <div class="image-wrapper">
          <div class="navigation">
            <mobile-nav />
          </div>
          <h1>{{ title }}</h1>
          <img :src="imgUrl" alt="" />
        </div>
        <div id="overlay"></div>
      </header>
    </div>
  </main>
</template>

<script>
import MobileNav from "../mobile/MobileNav.vue";
export default {
  components: { MobileNav },
  props: ["title", "imgUrl"],
};
</script>

<style scoped lang="scss">
main {
  position: relative;
  width: 100%;
  height: 100%;

  .navigation {
    display: none;
  }

  .mobile-menu {
    width: 100%;
    height: 100vh;
  }

  .game-content {
    width: 100%;
    height: 100vh;
    background: #151515;

    header {
      position: relative;
      width: 100%;
      height: 35vh;

      h1 {
        width: 100%;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 99;
        font-size: 48px;
      }

      .image-wrapper {
        width: 100%;
        height: 35vh;

        img {
          min-width: 100%;
          min-height: 100%;
          max-width: 100%;
          max-height: 100%;
        }
      }

      #overlay {
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5); /* Black see-through */
        width: 100%;
        height: 100%;
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .main {
    position: relative;

    .navigation {
      display: inline-block;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 99;
    }

    .main-content {
      width: 100%;
    }
  }
}

@media screen and (max-width: 450px) {
  .main {
    .main-content {
      width: 100vw;
      min-width: 100%;
      height: 100vh;
      display: block;
    }
  }
}
</style>