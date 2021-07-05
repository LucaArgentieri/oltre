<template>
  <div class="productblock flex center">
    <div class="flex center">Image</div>

    <div class="flex column">
      <h1>(oltre) - Il gioco</h1>
      <p class="desc lato light italic h5 c-black">
        (oltre) - Intimità Condivisa <br />
        Gioco da tavolo + Sex Toy
      </p>
      <p class="lato light h5 c-black">
        Oltre è un gioco innovativo che ha il fine di permettere alle donne di
        essere loro stesse e condividere i loro pensieri ed esperienze inerenti
        alla sessualità. <br />
        <br />
        Ha il fine di abbattere i tabù e normalizzare ciò che già di per se è la
        cosa più naturale al mondo.
      </p>

      <span class="flex price">
        <p class="medium h4">39.90€</p>
        <p class="h6">47.90€</p>
      </span>

      <Button name="Acquista ora" />
    </div>
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

<style lang="scss">
.productblock {
  height: 100vh;

  div {
    width: 50%;
    padding: 120px;

    button {
      margin-top: 50px;
    }

    .desc {
      padding-bottom: 50px;
    }

    .price {
      align-items: center;
      padding-top: 25px;
      padding-bottom: 25px;
      p:nth-child(2) {
        padding-left: 25px;
        color: red;
        text-decoration: line-through;
      }
    }
  }
}
@media (max-width: 900px) {
  .productblock {
    flex-direction: column;
    div {
      width: 100%;
    }
  }
}
</style>