<template>
  <Navbar />
  <div class="flex center column">
    <p class="h1 grandslang">Grazie per l'acquisto</p>
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
div {
  height: 100vh;

  p {
    padding-bottom: 25px;
  }
}
</style>