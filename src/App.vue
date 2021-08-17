<template>
  <router-view />
</template>

<script>
export default {};
</script>

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

.v-enter-active {
  animation: fade-in 0.3s ease-out;
}

.v-leave-active {
  animation: fade-out 0.3s ease-out;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  25% {
    opacity: 0.25;
  }

  50% {
    opacity: 0.5;
  }

  75% {
    opacity: 0.75;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fade-out {
  100% {
    opacity: 0;
  }

  75% {
    opacity: 0.25;
  }

  50% {
    opacity: 0.5;
  }

  25% {
    opacity: 0.75;
  }

  0% {
    opacity: 1;
  }
}
</style>
