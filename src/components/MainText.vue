<template>
  <div class="maintext flex">
    <div class="flex column">
      <h1>Supera la tua comfort zone</h1>
      <p class="lato light italic h5">Un gioco che fa divertire e non solo.</p>
      <p class="lato light h5">
        (oltre) ti da la possibilità di vincere l’imbarazzo, scoprirti e
        scoprire come le tue amiche vivono la propria sessualità. Il fine del
        gioco è far capire a donne di tutte le età che non c’è nulla di
        sbagliato nel parlare di ciò che ci da piacere, anzi, è fondamentale per
        conoscerci più a fondo e sentirci libere senza paure e pregiudizi.
        Attraverso delle carte e delle azioni ad esse associate, passa una
        serata in cui la vera pratagonista sei tu e la tua intimità.
      </p>
    </div>
    <div class="flex center">Image</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.maintext {
  height: 100vh;
  background-image: url("../assets/images/BG_02-08.webp");
  background-position: center;
  background-size: cover;

  div {
    width: 50%;
    padding: 120px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    h1 {
      padding-bottom: 50px;
    }

    p {
      padding-top: 50px;
    }
  }
}

@media (max-width: 900px) {
  .maintext {
    flex-direction: column;

    div {
      width: 100%;
    }
  }
}
</style>