<template>
  <div class="home">
    <side-bar />
    <main-content />
  </div>
</template>

<script>
import MainContent from "../components/ui/content/MainContent.vue";
import SideBar from "../components/ui/sidebar/SideBar.vue";
export default {
  components: {
    MainContent,
    SideBar,
  },
  name: "Home",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
}
</style>
