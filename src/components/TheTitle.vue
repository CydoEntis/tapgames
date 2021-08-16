<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lange="scss" scoped>
h1 {
  width: 100%; /* Remove */
  border-bottom: 3px solid #333; /* Remove */
  padding: 5px 15px;
}
</style>