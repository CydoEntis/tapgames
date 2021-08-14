<template>
  <div class="liked-games">
    <game-display
      url="https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
    />
    <game-display
      url="https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
    />
    <game-display
      url="https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
    />
    <game-display
      url="https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
    />
    <game-display
      url="https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
    />
    <game-display
      url="https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
    />
    <game-display
      url="https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
    />
    <game-display
      url="https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
    />
    <game-display
      url="https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
    />
    <game-display
      url="https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
    />
    <game-display
      url="https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
    />
  </div>
</template>

<script>
import GameDisplay from "../../GameDisplay.vue";
export default {
  components: { GameDisplay },
};
</script>

<style lang="scss" scoped>
.liked-games {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>