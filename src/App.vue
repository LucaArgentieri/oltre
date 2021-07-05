<template>
  <router-view />
</template>

<style lang="scss">
//Reset
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
.upcase,
.uppercase {
  text-transform: uppercase;
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

p {
  font-family: "Lato", sans-serif;
  font-weight: lighter;
}

.italic {
  font-style: italic;
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
</style>
