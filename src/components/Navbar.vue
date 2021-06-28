<template>
  <nav>
    <div class="nav_1">
      <router-link to="/" class="upcase">home</router-link>
      <router-link to="/" class="upcase">shop</router-link>
    </div>
    <div>
      <router-link to="/">(oltre)</router-link>
    </div>
    <div class="upcase flex center">codice sconto</div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #ccb3ff;

  div {
    padding-left: 60px;
    padding-right: 60px;
  }

  div:nth-child(3) {
    background-color: #fff273;
    height: 100%;
  }

  .nav_1 {
    a:nth-child(2) {
      padding-left: 80px;
    }
  }
}

@media (max-width: 900px) {
  nav {
    display: none;
  }
}
</style>

