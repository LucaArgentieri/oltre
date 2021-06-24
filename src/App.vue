<template>
  <router-view />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.upcase,
.uppercase {
  text-transform: uppercase;
}

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
</style>
