<template>
  <div class="maintext">
    <div class="maintext_bg"></div>
    <div class="maintext_text flex" @mouseover="getMouseCords">
      <transition appear @enter="enter">
        <div class="text flex column">
          <img src="../assets/svg/mainText.svg" alt="" />
          <p class="title lato light italic h5">
            Un gioco che fa divertire e non solo.
          </p>
          <p class="desc lato light h5">
            (oltre) ti da la possibilità di vincere l’imbarazzo, scoprirti e
            scoprire come le tue amiche vivono la propria sessualità. Il fine
            del gioco è far capire a donne di tutte le età che non c’è nulla di
            sbagliato nel parlare di ciò che ci da piacere, anzi, è fondamentale
            per conoscerci più a fondo e sentirci libere senza paure e
            pregiudizi.
          </p>
          <p class="desc lato light h5">
            Attraverso delle carte e delle azioni ad esse associate, passa una
            serata in cui la vera pratagonista sei tu e la tua intimità.
          </p>
        </div>
      </transition>

      <div class="svg_container flex center">
        <img src="../assets/svg/mainText2.svg" alt="" />
        <img class="image" src="../assets/images/mainTextImg.webp" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { animateSvg, animateMainText } from "../animations/animations";
export default {
  methods: {
    getMouseCords(event) {
      animateSvg(event.clientX, event.clientY);
    },
    enter() {
      animateMainText();
    },
  },
};
</script>

<style lang="scss" scoped>
.maintext {
  height: 100vh;
  position: relative;

  &_bg {
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-image: url("../assets/images/TESTO.gif");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: blur(3.5px);
  }

  &_text {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    div {
      width: 50%;
      padding: 120px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      z-index: 0;

      .image {
        position: absolute;
        right: 30%;
        bottom: 20%;
      }

      h1 {
        padding-bottom: 50px;
      }

      p {
        padding-top: 50px;
      }
    }
  }
}

@media (max-width: 900px) {
  .maintext {
    height: auto;
    flex-direction: column;

    &_text {
      height: auto;
      div {
        .image {
          position: absolute;
          left: 5%;
          bottom: 10%;
          height: 15%;
        }
      }
    }
    div {
      width: 100%;
      padding: 30px;
      flex-direction: column;
      height: 150vh;
    }
  }
}
</style>