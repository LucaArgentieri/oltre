<template>
  <div class="hero">
    <div class="hero_bg flex center column"></div>
    <span class="hero_text flex center column">
      <div class="text">
        <h1 class="title grandslang">Intimità condivisa</h1>

        <p class="lato light h4">
          Un gioco pensato per le donne, da giocare in compagnia delle amiche
          <br />
          dove l’unica vera regola è non aver paura di raccontarsi.
        </p>
      </div>

      <Button name="acquista ora" link="shop" />
    </span>
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
  position: relative;

  &_bg {
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-image: url("../assets/images/BANNER.gif");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: blur(3.5px);
  }

  &_text {
    height: 100vh;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    .text {
      z-index: 998;
    }
  }

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