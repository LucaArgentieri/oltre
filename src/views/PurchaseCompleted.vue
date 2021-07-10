<template>
  <Navbar />
  <div class="flex center column">
    <h1 class="grandslang">Grazie per l'acquisto</h1>
    <p class="lato h5 text-center">
      il tuo pacco sarà presto spedito! <br />
      Controlla la tua casella postale per tracciare il tuo ordine.
    </p>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
nav {
  background-color: white;
}
div {
  height: 100vh;
  background-image: url("../assets/images/TESTO.gif");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  h1 {
    padding-bottom: 35px;
  }
}

@media (max-width: 900px) {
  h1 {
    font-size: 42px;
    text-align: center;
  }

  p {
    padding-left: 25px;
    padding-right: 25px;
  }
}
</style>