<template>
  <div class="games">
    <side-bar />
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__faster animate__fadeIn"
      leave-active-class="animate__animated animate__faster animate__fadeOut"
    >
      <game-content
        :title="getCurrentGame.name"
        :image="getCurrentGame.image"
        :platforms="getCurrentGame.platforms"
        :stores="getCurrentGame.stores"
        :rating="getCurrentGame.metacritic"
        :esrb="getCurrentGame.esrb"
      />
    </transition>
  </div>
</template>

<script>
import SideBar from "../components/ui/sidebar/SideBar.vue";
import GameContent from "../components/ui/content/GameContent.vue";
import { mapGetters } from "vuex";

export default {
  components: { SideBar, GameContent },
  computed: {
    ...mapGetters(["getCurrentGame"]),
  },
};
</script>

<style scoped lang="scss">
.games {
  display: flex;
}
</style>