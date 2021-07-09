<template>
  <div class="imagesgroup">
    <div class="imagesgroup-1">
      <div></div>
      <div></div>
    </div>
    <div class="imagesgroup-2">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.imagesgroup {
  .imagesgroup-1 {
    height: 50vh;
    display: flex;

    div {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

    div:nth-child(1) {
      background-image: url("../assets/images/BOX_01.png");
      width: 40%;
    }
    div:nth-child(2) {
      background-image: url("../assets/images/CARDS_01.png");

      width: 60%;
    }
  }

  .imagesgroup-2 {
    div {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
    height: 50vh;
    display: flex;
    div:nth-child(1) {
      background-image: url("../assets/images/CARDS_02.png");

      width: 60%;
    }
    div:nth-child(2) {
      background-image: url("../assets/images/BOX_02.png");

      width: 40%;
    }
  }
}
</style>