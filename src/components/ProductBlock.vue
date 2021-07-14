<template>
  <div class="productblock flex center">
    <div class="img flex center"></div>

    <div class="container flex column">
      <p class="title grandslang h1">(oltre) - Il gioco</p>
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

      <Button name="Acquista ora" link="shop" />
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

<style lang="scss" scoped>
.productblock {
  height: 100vh;

  .img {
    background-image: url("../assets/images/GAME.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 50%;
    height: 50%;
    margin-left: 100px;
  }

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
      padding-bottom: 125px;
      p:nth-child(2) {
        padding-left: 25px;
        color: #eb6b45;
        text-decoration: line-through;
      }
    }
  }
}
@media (max-width: 900px) {
  .productblock {
    padding-top: 50px;
    padding-bottom: 50px;
    height: auto;
    flex-direction: column;

    .img {
      margin-left: 0px;
    }

    .title {
      padding-bottom: 10px;
    }

    .container {
      padding: 35px;
    }
    div {
      width: 100%;
    }
  }
}
</style>