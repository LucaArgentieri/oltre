<template>
  <nav>
    <div class="nav_1">
      <router-link @click="scrollToTopFunction" to="/" class="upcase lato light"
        >home</router-link
      >
      <router-link
        @click="scrollToTopFunction"
        to="/shop"
        class="upcase lato light"
        >shop</router-link
      >
    </div>
    <div>
      <router-link @click="scrollToTopFunction" class="grandslang h2" to="/"
        >(oltre)</router-link
      >
    </div>
    <div class="upcase flex center">
      <Button name="Codice Sconto" link="coupon" />
    </div>
  </nav>
</template>

<script>
import Button from "../components/Button.vue";
import { animateNavbar, scrollToTop } from "../animations/animations";
export default {
  components: {
    Button,
  },
  mounted: function () {
    animateNavbar();
  },
  methods: {
    scrollToTopFunction() {
      scrollToTop();
    },
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
  z-index: 10;

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

