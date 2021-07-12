<template>
  <div class="imagesgroup">
    <transition appear @enter="enter">
      <div class="imagesgroup-1">
        <div class="imagesgroup-1-1"></div>
        <div class="imagesgroup-1-2"></div>
      </div>
    </transition>

    <div class="imagesgroup-2">
      <div class="imagesgroup-2-1"></div>
      <div class="imagesgroup-2-2"></div>
    </div>
  </div>
</template>

<script>
import { clipPathImg } from "../animations/animations";
export default {
  methods: {
    enter() {
      clipPathImg();
    },
  },
};
</script>

<style lang="scss">
.imagesgroup {
  .imagesgroup-1 {
    height: 50vh;
    display: flex;

    div {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

    div:nth-child(1) {
      background-image: url("../assets/images/BOX_01.webp");
      width: 40%;
    }
    div:nth-child(2) {
      background-image: url("../assets/images/CARDS_01.webp");

      width: 60%;
    }
  }

  .imagesgroup-2 {
    div {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
    height: 50vh;
    display: flex;
    div:nth-child(1) {
      background-image: url("../assets/images/CARDS_02.webp");

      width: 60%;
    }
    div:nth-child(2) {
      background-image: url("../assets/images/BOX_02.webp");

      width: 40%;
    }
  }
}
</style>