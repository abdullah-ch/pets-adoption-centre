<template>
  <div>
    <h1>Dogs for Adoption</h1>
    <b-table striped hover :items="dogs"></b-table>
  </div>
</template>

<script>
import dogs from "../data/dogs.js";

export default {
  data() {
    return {
      dogs,
    };
  },
};
</script>
