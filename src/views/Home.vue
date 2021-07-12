<template>
  <div>
    <Navbar />
    <Hero />
    <MainText />
    <ImagesGroup />
    <VideoBlock />
    <ProductBlock />
    <Reviews />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import MainText from "../components/MainText.vue";
import ImagesGroup from "../components/ImagesGroup.vue";
import VideoBlock from "../components/VideoBlock.vue";
import ProductBlock from "../components/ProductBlock.vue";
import Reviews from "../components/Reviews.vue";
import Footer from "../components/Footer.vue";
import { animateHeroText } from "../animations/animations";
export default {
  name: "Home",

  components: {
    Navbar,
    Hero,
    MainText,
    ImagesGroup,
    VideoBlock,
    ProductBlock,
    Reviews,
    Footer,
  },
  mounted() {
    animateHeroText();
  },
};
</script>
