<template>
  <div class="hero flex center column">
    <p class="grandslang h1">Intimità condivisa</p>
    <p class="lato light h4">
      Un gioco pensato per le donne, da giocare in compagnia delle amiche <br />
      dove l’unica vera regola è non aver paura di raccontarsi.
    </p>
    <Button name="acquista ora" link="shop" />

    <div class="black_div"></div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.hero {
  height: 100vh;
  background-image: url("../assets/images/BG_01-07.webp");
  background-position: center;
  background-size: cover;

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
    background: black;
  }
}
</style>