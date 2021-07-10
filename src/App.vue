<template>
  <router-view />
</template>

<script>
export default {};
</script>

<style lang="scss">
//Reset
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
}

img {
  max-width: 100%;
  height: auto;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
}

a {
  text-decoration: none;
  color: inherit;
}

li {
  list-style: none;
}

// Positioning
.flex {
  display: flex;

  &.center {
    justify-content: center;
    align-items: center;
  }

  &.column {
    flex-direction: column;
  }

  &.spaceEvenly {
    justify-content: space-evenly;
    align-items: center;
  }
}

//Colors
$colors: (
  black: black,
  white: #f4f4f4,
);

@each $key in map-keys($colors) {
  .c-#{$key} {
    color: map-get($colors, $key);
  }

  .b-#{$key} {
    border-color: map-get($colors, $key) !important;
  }

  .bg-#{$key} {
    background-color: map-get($colors, $key);
  }

  .container.bg-#{$key} input:checked ~ .checkmark {
    background-color: map-get($colors, $key);
  }
}

//Fonts

@font-face {
  font-family: "Grandslang";
  src: url("./assets/fonts/GRANDSLANG-ROMAN.woff2") format("woff2");
  font-display: swap;
}

@font-face {
  font-family: "Grandslang-Italic";
  src: url("./assets/fonts/GRANDSLANG-ITALIC.woff2") format("woff2");
  font-display: swap;
}

.upcase,
.uppercase {
  text-transform: uppercase;
}

.text-center {
  text-align: center;
}

.grandslang {
  font-family: "Grandslang";
}

.grandslang-italic {
  font-family: "Grandslang-Italic";
}

.lato {
  font-family: "Lato", sans-serif;
}

.light {
  font-weight: lighter;
}

.medium {
  font-weight: 400;
}

.italic {
  font-style: italic;
}

p {
  font-family: "Lato", sans-serif;
  font-weight: lighter;
  font-size: 22px;
}

h1,
h1,
h3,
h4,
h5,
h6 {
  font-size: 85px;
  font-weight: lighter;
  font-family: "Grandslang";
}

.h1 {
  font-size: 3.052rem;
}

.h2 {
  font-size: 2.441rem;
}

.h3 {
  font-size: 1.953rem;
}

.h4 {
  font-size: 1.563rem;
}

.h5 {
  font-size: 1.25rem;
}
.h6 {
  font-size: 1rem;
}
.h7 {
  font-size: 0.8rem;
}
.h8 {
  font-size: 0.64rem;
}
.h9 {
  font-size: 0.512rem;
}

@media (max-width: 900px) {
  p {
    font-size: 20px;
  }
}

//Scrollbar
::-webkit-scrollbar {
  width: 0px;
}
</style>
