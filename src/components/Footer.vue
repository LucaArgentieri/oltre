<template>
  <footer>
    <div class="flex column">
      <p class="title grandslang h1 c-white">(oltre)</p>
      <div class="info">
        <p class="c-white grandslang h3">About</p>
        <p class="light h5 c-white">
          La nostra missione è quella di creare una realtà all’interno del gioco
          in cui la donna abbia la libertà di parlare del proprio rapporto con
          la sessualità, di scoprirsi, con la speranza che un giorno ciò venga
          consideratata la normalità. Infatti ancora oggi non esiste un ambiente
          confortevole in cui si possano trattare questi argomenti senza essere
          sottoposti a giudizio. Quindi abbiamo deciso di crearlo noi.
        </p>
      </div>
    </div>
    <div class="flex center column">
      <div>
        <p class="c-white grandslang h3">Link rapidi</p>
        <ul class="c-white lato light">
          <li>
            <router-link @click="scrollToTopFunction" to="/">Home</router-link>
          </li>
          <li>
            <router-link @click="scrollToTopFunction" to="/shop"
              >Shop</router-link
            >
          </li>
          <li>
            <router-link @click="scrollToTopFunction" to="/coupon"
              >Codice Sconto</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="flex center column">
      <div>
        <p class="c-white grandslang h4">
          Acquista <br />
          (oltre) - il gioco
        </p>
      </div>
      <div>
        <Button name="acquista ora" link="shop" />
      </div>
    </div>
    <div class="flex center column">
      <div class="social">
        <span class="social_btn"
          ><img src="../assets/svg/facebook.svg" alt=""
        /></span>
        <span class="social_btn"
          ><img src="../assets/svg/youtube.svg" alt=""
        /></span>
        <span class="social_btn"
          ><img src="../assets/svg/instagram.svg" alt=""
        /></span>
        <span class="social_btn"
          ><img src="../assets/svg/twitter.svg" alt=""
        /></span>
      </div>

      <div class="pay_container">
        <div class="pay_container_group">
          <span class="pay_logo"
            ><img src="../assets/svg/visa.svg" alt=""
          /></span>
          <span class="pay_logo"
            ><img src="../assets/svg/maestro.svg" alt=""
          /></span>
          <span class="pay_logo"
            ><img src="../assets/svg/paypal.svg" alt=""
          /></span>
          <span class="pay_logo"
            ><img src="../assets/svg/postepay.svg" alt=""
          /></span>
          <span class="pay_logo"
            ><img src="../assets/svg/americanexpress.svg" alt=""
          /></span>
          <span class="pay_logo"
            ><img src="../assets/svg/applepay.svg" alt=""
          /></span>
        </div>
      </div>
      <div class="privacy">
        <p class="c-white h6">Privacy</p>
        <p class="c-white h6">Copyright</p>
      </div>
    </div>
  </footer>
</template>

<script>
import Button from "./Button.vue";
import { scrollToTop } from "../animations/animations";
export default {
  components: {
    Button,
  },
  methods: {
    scrollToTopFunction() {
      scrollToTop();
    },
  },
};
</script>

<style lang="scss">
footer {
  height: auto;
  background-color: black;
  display: grid;
  grid-template-columns: 4fr 2.5fr 2.5fr 3fr;
  padding: 100px;

  div {
    padding-right: 25px;
  }

  div:nth-child(1) {
    justify-content: center;
    .title {
      padding-bottom: 35px;
    }

    .info {
      p:nth-child(1) {
        padding-bottom: 30px;
      }
    }
  }

  div:nth-child(2) {
    ul {
      li {
        padding-top: 25px;
      }
    }
  }

  div:nth-child(3) {
    padding-bottom: 40px;
    p {
      padding-bottom: 50px;
    }
    .button {
      border: 1px solid white;
      color: white;

      &:hover {
        background-color: #3d76e8;
        border: 1px solid #3d76e8;
      }
    }
  }

  div:nth-child(4) {
    margin-right: 100px;
    .social {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 100%;
      &_btn {
        cursor: pointer;
        height: 30px;
        width: 30px;
        background-color: #f4f4f4;
        border-radius: 100%;
        margin-right: 25px;
      }
    }

    .pay_container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50%;
      margin-left: 100%;
      &_group {
        display: grid;
        grid-template-columns: 4fr 4fr 4fr;
        gap: 25px;
      }
    }

    .privacy {
      p {
        padding-bottom: 5px;
      }
    }
  }
}

@media (max-width: 1400px) {
  footer {
    display: flex;
    flex-wrap: wrap;

    div:nth-child(2),
    div:nth-child(3),
    div:nth-child(4) {
      padding-top: 50px;
    }
  }
}

@media (max-width: 900px) {
  footer {
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 25px;

    .info {
      padding-right: 0px;
    }

    div:nth-child(2),
    div:nth-child(3),
    div:nth-child(4) {
      padding-top: 0px;
    }

    div {
      padding-bottom: 50px;
      padding-right: 0px;
    }

    div:nth-child(4) {
      .social,
      .pay_container {
        margin-left: 50%;
      }
    }
  }
}
</style>