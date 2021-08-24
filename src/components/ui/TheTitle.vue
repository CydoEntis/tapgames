<template>
  <router-link to="/">{{ title }}</router-link>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="scss" scoped>
a {
  display: block;
  padding: 15px;
  text-decoration: none;
  color: #fff;
  font-size: 28px;
  transition: all 200ms ease-in;

  &:hover {
    opacity: 0.6;
  }
}
</style>