<template>
  <router-view v-slot="{ Component }">
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <component :is="Component" />
    </transition>
  </router-view>
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
  background: #202020;

  border-radius: 15px;

  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
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
