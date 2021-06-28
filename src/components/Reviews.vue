<template>
  <div class="reviews flex center column">
    <h1>Recensioni</h1>
    <div class="flex spaceEvenly">
      <div class="reviews_single flex center column">
        <p>Image</p>
        <p>Nome e cognome</p>
        <p>Età</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
          veniam sequi alias illum optio maiores velit asperiores sunt quae
          nobis?
        </p>
      </div>
      <div class="reviews_single flex center column">
        <p>Image</p>
        <p>Nome e cognome</p>
        <p>Età</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
          veniam sequi alias illum optio maiores velit asperiores sunt quae
          nobis?
        </p>
      </div>
      <div class="reviews_single flex center column">
        <p>Image</p>
        <p>Nome e cognome</p>
        <p>Età</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
          veniam sequi alias illum optio maiores velit asperiores sunt quae
          nobis?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.reviews {
  height: 100vh;

  h1 {
    padding-bottom: 120px;
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
    &_single {
      display: none;
    }
  }
}
</style>