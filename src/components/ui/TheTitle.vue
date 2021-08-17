<template>
  <router-link to="/">{{ title }}</router-link>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lange="scss" scoped>
a {
  display: block;
  padding: 15px;
  text-decoration: none;
  color: #fff;
  font-size: 28px;
}
</style>