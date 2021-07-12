<template>
  <div class="video flex center">
    <div class="button flex center">
      <svg
        width="27"
        height="36"
        viewBox="0 0 27 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.333374 35.6667V0L27 18L0.333374 35.6667Z" fill="black" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.video {
  height: 100vh;
  background-image: url("../assets/images/VIDEO.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .button {
    height: 100px;
    width: 100px;
    border: 1px solid black;
    border-radius: 100%;
    cursor: pointer;

    &:hover {
      svg {
        path {
          fill: white;
        }
      }
      background-color: black;
    }
  }
}
</style>