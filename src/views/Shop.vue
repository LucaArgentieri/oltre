<template>
  <Navbar />
  <div class="shop">
    <div class="main">Ciao</div>
    <div class="desc">
      <div>
        <p>(oltre) - Intimità condivisa</p>
        <p class="lato light h5 c-black">
          Oltre è un gioco innovativo che ha il fine di permettere alle donne di
          essere loro stesse e condividere i loro pensieri ed esperienze
          inerenti alla sessualità. <br />
          <br />
          Ha il fine di abbattere i tabù e normalizzare ciò che già di per se è
          la cosa più naturale al mondo.
        </p>

        <span class="flex price">
          <p class="medium h4">39.90€</p>
          <p class="h6">47.90€</p>
        </span>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Foooter.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.shop {
  padding: 140px;
  display: grid;
  grid-template-columns: 9fr 3fr;
  .main {
    height: 200vh;
  }
  .desc {
    position: relative;

    div {
      position: fixed;
    }
  }
}
</style>