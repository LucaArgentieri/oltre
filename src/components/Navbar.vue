<template>
  <nav>
    <div class="nav_1">
      <router-link to="/" class="upcase lato light">home</router-link>
      <router-link to="/shop" class="upcase lato light">shop</router-link>
    </div>
    <div>
      <router-link to="/">(oltre)</router-link>
    </div>
    <div class="upcase flex center">
      <Button name="Codice Sconto" link="codicesconto" />
    </div>
  </nav>
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
nav {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  border-bottom: 1px solid black;

  div {
    padding-left: 60px;
    padding-right: 60px;
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

