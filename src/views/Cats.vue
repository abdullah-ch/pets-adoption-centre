<template>
  <div>
    <h1>Cats for Adoption</h1>
    <b-table striped hover :items="cats"></b-table>
  </div>
</template>

<script>
import cats from "../data/cats.js";

export default {
  data() {
    return {
      cats,
    };
  },
};
</script>
