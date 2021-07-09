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
          <li>Home</li>
          <li>Shop</li>
          <li>Codice Sconto</li>
        </ul>
      </div>
    </div>
    <div class="flex center column">
      <div>
        <p class="c-white grandslang h4">Acquista (oltre) - il gioco</p>
      </div>
      <div>
        <Button name="acquista ora" />
      </div>
    </div>
    <div class="flex center column">
      <div>
        <p class="c-white">Privacy</p>
      </div>
    </div>
  </footer>
</template>

<script>
import Button from "../components/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>

<style lang="scss">
footer {
  height: 500px;
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
    p {
      margin-bottom: 35px;
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

    div {
      padding-bottom: 50px;
      padding-right: 0px;
    }
  }
}
</style>