<template>
  <div class="shop">
    <div class="main">
      <div class="mini-img">
        <img
          v-for="(item, index) in images"
          :key="item.id"
          :src="item.img"
          @click="scrollTo(index)"
          alt="Loading..."
        />
      </div>
      <div class="full-img">
        <img
          v-for="(item, index) in images"
          :key="item.id"
          :src="item.img"
          :class="`${'img' + index}`"
          alt="Loading..."
        />
        <div class="reviews">
          <p class="title h1 c-black grandslang">Recensioni</p>

          <div class="single" v-for="item in reviews" :key="item.id">
            <div class="flex">
              <div>
                <img :src="item.img" alt="Loading..." />
              </div>
              <div>
                <p>{{ item.name }}</p>
                <p>Età {{ item.eta }}</p>
              </div>
            </div>

            <p class="desc">
              {{ item.desc }}
            </p>
          </div>

          <p class="more text-center">Altre recensioni</p>
        </div>
        <label class="lato light" for="">Lascia un commento</label>
        <input class="lato light h6" type="text" />
      </div>
    </div>
    <div class="desc">
      <div class="info">
        <p class="title grandslang h1">Microscopic Mini G Vibrator Pink</p>
        <p class="text lato light h5 c-black">
          Un modello chic e impermeabile per alleviare ogni tipo di stress.
          Totalmente discreto, il Microscopic Mini G Vibrator offre la qualità
          inconfondibile che rispecchia tutta la collezione, con un nuovo design
          appositamente studiato per la stimolazione CUV (clito-uretro-vaginale)
          e gli orgasmi femminili.
        </p>
        <br />
        <span class="flex price">
          <p class="medium h4">23.90€</p>
        </span>
      </div>

      <div class="input">
        <label class="lato light italic" for="">Lascia un commento</label>
        <input class="lato light h6" type="text" />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import {
  scrollTo,
  imageStagger,
  animateShopText,
} from "../animations/animations";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      show: false,
      images: [
        {
          img: require("../assets/images/coupon.webp"),
        },
        {
          img: require("../assets/images/coupon2.webp"),
        },
        {
          img: require("../assets/images/coupon3.webp"),
        },
      ],
      reviews: [
        {
          img: require("../assets/svg/reviews1.svg"),
          name: "Martina",
          eta: "23",
          desc: "Grazie a questo prodotto sono riuscita ad aprirmi con le mie amiche. Abbiamo passato una serata alternativa, ci siamo diveritite scoprendo nuovi aspetti di noi stesse. Consiglio ad ogni ragazza di provarlo",
        },
        {
          img: require("../assets/svg/reviews2.svg"),
          name: "Laura",
          eta: "27",
          desc: "Finalmente un gioco utile al benessere personale e soprattutto sessuale. Dopo un po’ di imbarazzo iniziale, poi ci siamo sciolte ed è stato molto divertente ascoltare le esperienze delle mie amiche. ",
        },
        {
          img: require("../assets/svg/reviews3.svg"),
          name: "Claudia",
          eta: "20",
          desc: "Il gioco è stato pensato molto bene. Ho scoperto molte cose che non sapevo e son riuscita a superare l’imbarazzo. Il fatto che nel gioco ci sia pure un sex toy mi piace molto, perchè non ne ho mai provato uno dato che costano molto",
        },
        {
          img: require("../assets/svg/reviews4.svg"),
          name: "Francesca",
          eta: "25",
          desc: "Lo adoro. Un gioco davvero utile per tutte le donne. Mi ha permesso di conoscermi meglio e di confrontarmi con le mie amiche. Il sex toy compreso con il gioco è fantastico, e tutte le mie amiche hanno un codice sconto per poterne comprare uno.",
        },
      ],
    };
  },

  methods: {
    scrollTo(index) {
      scrollTo(index);
    },
  },

  mounted() {
    if (window.innerWidth > 900) {
      imageStagger();
      animateShopText();
    } else {
      animateShopText();
      imageStagger();
    }
  },
};
</script>

<style lang="scss" >
</style>