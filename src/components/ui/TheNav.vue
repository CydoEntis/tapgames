<template>
  <div id="nav">
    <router-link to="/liked">Liked Games</router-link>
    <router-link to="/disliked">Disliked Games</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
#nav {
  /* padding: 0 10px; */
  margin: 10px 0;

  a {
    text-decoration: none;
    color: #ffffff66;
    border: 1px solid #ffffff66;
    border-radius: 15px;
    padding: 3px 5px;
    margin-right: 10px;
    cursor: pointer;
    transition: all 200ms ease-in;

    &.router-link-exact-active {
      color: #fff;
      border: 1px solid #fff;
    }

    &:hover {
      opacity: 0.6;
    }
  }
}
</style>