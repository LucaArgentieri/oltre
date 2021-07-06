<template>
  <Navbar />
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
      </div>
    </div>
    <div class="desc">
      <div class="info">
        <p class="title grandslang h1">(oltre) - Intimità condivisa</p>
        <p class="lato light h5 c-black">
          Oltre è un gioco innovativo che ha il fine di permettere alle donne di
          essere loro stesse e condividere i loro pensieri ed esperienze
          inerenti alla sessualità. <br />
          <br />
          Ha il fine di abbattere i tabù e normalizzare ciò che già di per se è
          la cosa più naturale al mondo.
        </p>
        <br />
        <span class="flex price">
          <p class="medium h4">39.90€</p>
          <p class="h6">47.90€</p>
        </span>

        <div class="dots flex center spaceEvenly lato light">
          <div>Spedizione gratuita</div>
          <div>Sei giocatori</div>
          <div>Sorprese all'interno</div>
        </div>

        <Button name="acquista ora" link="purchase" />

        <div class="accordion">
          <p class="details lato h5 light" @click="changeShow">
            Dettagli
            <svg
              class="details-svg"
              width="16"
              height="9"
              viewBox="0 0 16 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L8 8L15 1" stroke="black" stroke-width="0.7" />
            </svg>
          </p>

          <div class="accordion_content">
            <p class="lato h5 light">
              Oltre è un gioco innovativo che ha il fine di permettere alle
              donne di essere loro stesse e condividere i loro pensieri ed
              esperienze inerenti alla sessualità. Ha il fine di abbattere i
              tabù e normalizzare ciò che già di per se e la cosa più naturale
              al mondo.
            </p>
            <br />
            <ul class="lato h5 light">
              All’interno del gioco troverai:
              <li>il tabellone</li>
              <li>le pedine</li>
              <li>le carte divise per le categorie da giocare</li>
              <li>un sex toys in omaggio</li>
              <li>5 buoni sconto da poter utilizzare sul nostro sito</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Button from "../components/Button.vue";
import Footer from "../components/Foooter.vue";
import {
  setAccordionContent,
  animateAccordion,
  reverseAccordion,
  scrollTo,
} from "../animations/animations";
export default {
  components: {
    Navbar,
    Button,
    Footer,
  },
  data() {
    return {
      show: false,
      images: [
        {
          img: "https://images.unsplash.com/photo-1594729851651-46b17161f773?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          img: "https://images.unsplash.com/photo-1594729851651-46b17161f773?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          img: "https://images.unsplash.com/photo-1594729851651-46b17161f773?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          img: "https://images.unsplash.com/photo-1594729851651-46b17161f773?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          img: "https://images.unsplash.com/photo-1594729851651-46b17161f773?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
      ],
      reviews: [
        {
          img: "",
          name: "Martina",
          eta: "23",
          desc: "Grazie a questo prodotto sono riuscita ad aprirmi con le mie amiche. Abbiamo passato una serata alternativa, ci siamo diveritite scoprendo nuovi aspetti di noi stesse. Consiglio ad ogni ragazza di provarlo",
        },
        {
          img: "",
          name: "Laura",
          eta: "27",
          desc: "Finalmente un gioco utile al benessere personale e soprattutto sessuale. Dopo un po’ di imbarazzo iniziale, poi ci siamo sciolte ed è stato molto divertente ascoltare le esperienze delle mie amiche. ",
        },
        {
          img: "",
          name: "Claudia",
          eta: "20",
          desc: "Il gioco è stato pensato molto bene. Ho scoperto molte cose che non sapevo e son riuscita a superare l’imbarazzo. Il fatto che nel gioco ci sia pure un sex toy mi piace molto, perchè non ne ho mai provato uno dato che costano molto",
        },
        {
          img: "",
          name: "Francesca",
          eta: "25",
          desc: "Lo adoro. Un gioco davvero utile per tutte le donne. Mi ha permesso di conoscermi meglio e di confrontarmi con le mie amiche. Il sex toy compreso con il gioco è fantastico, e tutte le mie amiche hanno un codice sconto per poterne comprare uno.",
        },
      ],
    };
  },
  mounted: function () {
    setAccordionContent();
  },
  methods: {
    changeShow() {
      this.show = !this.show;
      if (this.show) {
        animateAccordion();
      } else {
        reverseAccordion();
      }
    },
    scrollTo(index) {
      scrollTo(index);
    },
  },
};
</script>

<style lang="scss" scoped>
.shop {
  padding: 140px 70px;
  display: grid;
  grid-template-columns: 8fr 4fr;
  .main {
    height: auto;
    display: flex;
    .mini-img {
      display: flex;
      flex-direction: column;
      margin-right: 25px;
      cursor: pointer;
      width: 10%;
      img {
        margin-bottom: 25px;
        height: auto;
      }
    }
    .full-img {
      display: flex;
      flex-direction: column;

      img {
        margin-bottom: 25px;
      }

      .reviews {
        margin-bottom: 100px;
        .title {
          padding-top: 25px;
          margin-top: 100px;
          padding-bottom: 80px;
          border-top: 1px solid black;
        }

        .single {
          padding-top: 50px;
          padding-bottom: 50px;
          border-bottom: 1px solid black;

          .desc {
            padding-top: 25px;
          }
        }

        .more {
          padding-top: 25px;
        }
      }
    }
  }
  .desc {
    margin-left: 25px;

    .info {
      // position: fixed;
      display: flex;
      flex-direction: column;
      margin-right: 50px;
      .title {
        padding-bottom: 25px;
      }

      .dots {
        padding-top: 50px;
        padding-bottom: 50px;
      }

      a {
        width: 100%;
        margin-top: 50px;
      }
    }
  }

  .price {
    align-items: center;
    padding-top: 25px;
    padding-bottom: 25px;
    p:nth-child(2) {
      padding-left: 25px;
      color: red;
      text-decoration: line-through;
    }
  }

  .accordion {
    .details {
      padding-top: 100px;
      padding-bottom: 25px;
      border-bottom: 1px solid black;
      cursor: pointer;
    }

    .accordion_content {
      p {
        padding-top: 25px;
      }

      ul {
        li::before {
          content: "• ";
          color: black;
        }
      }
    }
  }
}
</style>