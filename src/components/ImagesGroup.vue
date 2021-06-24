<template>
  <div class="imagesgroup">
    <div class="imagesgroup-1">
      <div>img1</div>
      <div>img2</div>
    </div>
    <div class="imagesgroup-2">
      <div>img1</div>
      <div>img2</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.imagesgroup {
  .imagesgroup-1 {
    height: 450px;
    display: flex;
    div:nth-child(1) {
      background-color: #ccb3ff;
      width: 40%;
    }
    div:nth-child(2) {
      width: 60%;
    }
  }

  .imagesgroup-2 {
    height: 550px;
    display: flex;
    div:nth-child(1) {
      width: 60%;
    }
    div:nth-child(2) {
      background-color: #ccb3ff;
      width: 40%;
    }
  }
}
</style>