<template>
  <router-link :to="'/' + link" class="button upcase lato light">{{
    name
  }}</router-link>
</template>

<script>
export default {
  props: ["name", "link"],
};
</script>

<style lang="scss" scoped>
.button {
  background-color: transparent;
  border: 1px solid black;
  padding: 15px 30px;
  border-radius: 22px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: #f4f4f4;
  }
}
</style>