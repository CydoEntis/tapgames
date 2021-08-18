<template>
  <section class="landing">
    <div id="overlay"></div>
    <div class="landing-content">
      <h1>TapGames</h1>
      <h3>New Games Are Just A Tap Away</h3>
      <router-link to="/home">Start Tapping</router-link>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#overlay {
  position: fixed;

  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 2;
  cursor: pointer;
}

.landing {
  width: 100%;
  height: 100vh;
  background: url("https://www.wallpapertip.com/wmimgs/80-806806_popular-video-games-collage.jpg");

  &-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    color: white;
    text-align: center;

    h1 {
      font-size: 68px;
      margin-bottom: 10px;
    }

    h3 {
      font-size: 26px;
      font-weight: 400;
    }

    a {
      display: inline-block;
      border: 2px solid #fff;
      border-radius: 15px;
      margin: 25px 0;
      padding: 6px 12px;
      text-decoration: none;
      font-size: 22px;
      color: #fff;
      transition: all 200ms ease-in;

      &:hover {
        background: #fff;
        color: #333;
      }
    }
  }
}

@media screen and (max-width: 375px) {
  .landing {
    width: 100%;
    height: 100vh;
    background: url("https://www.wallpapertip.com/wmimgs/80-806806_popular-video-games-collage.jpg");
    background-size: cover;

    &-content {
      h1 {
        font-size: 52px;
        margin-bottom: 10px;
      }

      h3 {
        font-size: 20px;
        font-weight: 400;
      }

      a {
        margin: 25px 0;
        padding: 6px 12px;
        font-size: 18px;
      }
    }
  }
}
</style>