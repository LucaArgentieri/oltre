<template>
  <div class="productblock flex">
    <div class="flex center">Image</div>

    <div class="flex column">
      <h1>H1 Titolo</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
        temporibus? Aliquid porro consequuntur deleniti cum ad ducimus. Beatae,
        consequatur obcaecati.
      </p>
      <p>0.0€</p>
      <button>Bottone</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.productblock {
  height: 100vh;

  div {
    width: 50%;
    padding: 120px;

    h1 {
      padding-bottom: 100px;
    }

    button {
      margin-top: 50px;
    }
  }
}
</style>