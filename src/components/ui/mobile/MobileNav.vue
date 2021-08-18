<template>
  <div class="mobile-nav">
    <i class="fas fa-bars"></i>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.mobile-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 0 0 0 15px;
  padding: 15px;
  background: #202020;

  i {
    color: #fff;
    cursor: pointer;
    font-size: 32px;
    transition: all 0.3s ease-in;

    &:hover {
      color: #ffffff66;
    }
  }
}

@media screen and (max-width: 360px) {
  .mobile-nav {
    width: 50px;
    height: 50px;
    border-radius: 0 0 0 15px;
    padding: 10px;

    i {
      color: #fff;
      cursor: pointer;
      font-size: 22px;
      transition: all 0.3s ease-in;

      &:hover {
        color: #ffffff66;
      }
    }
  }
}
</style>