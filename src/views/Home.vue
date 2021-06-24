<template>
  <Navbar />
  <Hero />
  <MainText />
  <ImagesGroup />
  <VideoBlock />
  <ProductBlock />
  <Reviews />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import MainText from "../components/MainText.vue";
import ImagesGroup from "../components/ImagesGroup.vue";
import VideoBlock from "../components/VideoBlock.vue";
import ProductBlock from "../components/ProductBlock.vue";
import Reviews from "../components/Reviews.vue";

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
  },
};
</script>
