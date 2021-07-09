<template>
  <div class="hero flex center column">
    <div class="text">
      <h1 class="grandslang">Intimità condivisa</h1>
      <p class="lato light h4">
        Un gioco pensato per le donne, da giocare in compagnia delle amiche
        <br />
        dove l’unica vera regola è non aver paura di raccontarsi.
      </p>
    </div>
    <Button name="acquista ora" link="shop" />

    <div class="black_div"></div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import { animateText } from "../animations/animations";
export default {
  components: {
    Button,
  },
  mounted: function () {
    animateText();
  },
};
</script>

<style lang="scss" scoped>
.hero {
  height: 100vh;
  background-image: url("../assets/images/BANNER.gif");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .button {
    opacity: 0;
  }

  h1 {
    padding-bottom: 25px;
  }

  p {
    text-align: center;
    padding-bottom: 50px;
  }

  .black_div {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background: #f4f4f4;
  }
}

@media (max-width: 900px) {
  .hero {
    .text {
      h1 {
        font-size: 42px;
        text-align: center;
      }

      p {
        padding-left: 25px;
        padding-right: 25px;
      }
    }
  }
}
</style>