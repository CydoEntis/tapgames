<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: "Inter", sans-serif;
  color: #fff;
  background: #151515;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.card__face {
  position: absolute;
  width: 100%;

  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

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

.no-rating {
  border: 1px solid #ffffff66;
  color: #ffffff66;
}
</style>
