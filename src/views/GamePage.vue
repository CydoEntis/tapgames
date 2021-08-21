<template>
  <div class="games">
    <side-bar />
    <game-content
      title="Albion Online"
      imgUrl="https://i.imgur.com/JCcKrBJ.jpg"
    />
  </div>
</template>

<script>
import SideBar from "../components/ui/sidebar/SideBar.vue";
import GameContent from "../components/ui/content/GameContent.vue";

export default {
  components: { SideBar, GameContent },
};
</script>

<style scoped lang="scss">
.games {
  display: flex;
}
</style>