<template>
  <div class="reviews flex center column">
    <div class="reviews_title grandslang h1">
      <img src="../assets/svg/reviews.svg" alt="" />
    </div>
    <div class="reviews_container flex spaceEvenly">
      <div class="reviews_single flex center column">
        <svg
          width="92"
          height="92"
          viewBox="0 0 92 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="46" cy="46" r="46" fill="#EB6B45" />
          <path
            d="M23.336 30.736V30.784C24.152 31.408 25.016 32.272 25.976 33.424C26.888 34.576 27.368 35.488 27.368 36.208V64H28.136V36.4L44.936 54.592L61.016 32.08V64H65.576V30.736H60.92L47 50.368L29.528 30.736H23.336Z"
            fill="white"
          />
        </svg>
        <p class="medium">Martina</p>
        <p>Età 23</p>
        <p>
          Grazie a questo prodotto sono riuscita ad aprirmi con le mie amiche.
          Abbiamo passato una serata alternativa, ci siamo diveritite scoprendo
          nuovi aspetti di noi stesse. Consiglio ad ogni ragazza di provarlo.
          Non esiste nulla di simile in commercio!
        </p>
      </div>
      <div class="reviews_single flex center column">
        <svg
          width="92"
          height="92"
          viewBox="0 0 92 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="46" cy="46" r="46" fill="#2263E5" />
          <path
            d="M37.648 29.736V63H55.888L61.936 51.096C60.4 52.968 59.056 54.504 57.808 55.752C56.56 57 55.12 58.152 53.488 59.304C51.856 60.456 50.08 61.272 48.16 61.8C46.24 62.328 44.176 62.52 41.968 62.424V29.736H37.648Z"
            fill="white"
          />
        </svg>
        <p class="medium">Laura</p>
        <p>Età 27</p>
        <p>
          Finalmente un gioco utile al benessere personale e soprattutto
          sessuale. Dopo un po’ di imbarazzo iniziale, poi ci siamo sciolte ed è
          stato molto divertente ascoltare le esperienze delle mie amiche. Il
          sex toy in dotazione è ottimo, e per tutte le altre partecipanti ci
          sono dei codici sconto per comprare lo stesso sex toy.
        </p>
      </div>
      <div class="reviews_single flex center column">
        <svg
          width="92"
          height="92"
          viewBox="0 0 92 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="46" cy="46" r="46" fill="#F3B7C1" />
          <path
            d="M59.832 40.968L56.808 29.736H36.12V63H40.392V46.776H53.832V46.056H40.392V30.408H47.208C48.888 30.408 50.472 30.744 51.912 31.416C53.352 32.088 54.6 32.952 55.608 34.056C56.568 35.16 57.384 36.264 58.056 37.416C58.728 38.568 59.256 39.768 59.64 41.016L59.832 40.968Z"
            fill="white"
          />
        </svg>
        <p class="medium">Francesca</p>
        <p>Età 25</p>
        <p>
          Lo adoro. Un gioco davvero utile per tutte le donne. Mi ha permesso di
          conoscermi meglio e di confrontarmi con le mie amiche. Il sex toy
          compreso con il gioco è fantastico, e tutte le mie amiche hanno un
          codice sconto per poterne comprare uno.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.reviews {
  height: auto;
  margin-bottom: 300px;

  svg {
    margin-bottom: 25px;
  }

  &_title {
    padding-bottom: 120px;
    padding-right: 20%;
  }

  &_single {
    padding-left: 60px;
    padding-right: 60px;

    p {
      padding-bottom: 25px;
    }
  }
}

@media (max-width: 900px) {
  .reviews {
    height: auto;

    &_title {
      padding-right: 25px;
      padding-left: 25px;
      padding-bottom: 50px;
    }

    &_container {
      flex-direction: column;
    }

    &_single {
      padding-bottom: 50px;
      padding-left: 30px;
      padding-right: 30px;
    }
  }
}
</style>