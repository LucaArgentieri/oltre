<template>
  <div>
    <nav class="nav_mobile">
      <div class="nav_menu" @click="animateMobileMenuFunction">
        <p class="grandslang h3">({{ open ? "0" : "I" }})</p>
      </div>
      <div class="flex center">
        <router-link @click="scrollToTopFunction" class="grandslang h3" to="/"
          >(oltre)</router-link
        >
      </div>
      <div class="nav_menu_open flex column">
        <router-link
          @click="scrollToTopFunction"
          to="/"
          class="upcase lato light"
          >home</router-link
        >
        <router-link
          @click="scrollToTopFunction"
          to="/shop"
          class="upcase lato light"
          >shop</router-link
        >
        <Button
          @click="scrollToTopFunction"
          text="Codice sconto"
          link="coupon"
        />
      </div>
    </nav>
  </div>
</template>

<script>
import Button from "./Button.vue";
import { animateMobileMenu, scrollToTop } from "../animations/animations";
export default {
  components: {
    Button,
  },
  data() {
    return {
      open: false,
    };
  },

  methods: {
    animateMobileMenuFunction() {
      this.open = !this.open;
      animateMobileMenu(this.open);
    },
    scrollToTopFunction() {
      scrollToTop();
      animateMobileMenu(false);
      this.open = false;
    },
  },
};
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
    z-index: 999;

    .nav_menu {
      position: absolute;
      top: 15%;
      left: 5%;
      z-index: 9;
    }
  }

  .nav_menu_open {
    opacity: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: #f4f4f4;
    z-index: 8;
    pointer-events: none;

    a {
      margin-bottom: 25px;
    }
  }
}
</style>