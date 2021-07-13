<template>
  <nav class="nav_mobile">
    <div class="flex center">
      <router-link @click="scrollToTopFunction" class="grandslang h3" to="/"
        >(oltre)</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav_mobile {
  display: none;
}

@media (max-width: 900px) {
  .nav_mobile {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;
    border-bottom: 1px solid black;
    z-index: 10;
  }
}
</style>