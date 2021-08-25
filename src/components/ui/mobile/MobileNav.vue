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
  width: 60px;
  height: 60px;
  border-radius: 0 0 0 15px;
  background: #202020;

  i {
    color: #fff;
    cursor: pointer;
    font-size: 28px;
    transition: all 0.3s ease-in;

    &:hover {
      color: #ffffff66;
    }
  }
}

@media screen and (min-width: 1024px) and (min-height: 1366px) {
  .mobile-nav {
    width: 100px;
    height: 100px;

    i {
      font-size: 42px;
    }
  }
}

@media screen and (width: 768px) and (height: 1024px) {
  .mobile-nav {
    width: 80px;
    height: 80px;

    i {
      font-size: 32px;
    }
  }
}

@media screen and (max-width: 360px) {
  .mobile-nav {
    width: 60px;
    height: 60px;

    i {
      font-size: 28px;
    }
  }
}
</style>