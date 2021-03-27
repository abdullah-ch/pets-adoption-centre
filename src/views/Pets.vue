<template>
  <div>
    <h1>{{ animal.name }} ({{ $route.params.specie }})</h1>
    <p>Age: {{ animal.age }} years old</p>
    <p>Breed: {{ animal.breed }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      animal: null,
    };
  },
  computed: {
    ...mapState(["cats", "dogs"]),
  },

  mounted: function () {
    console.log("hello", [this.$route.params.specie], [this.$route.params.id]);
    this.animal = this[this.$route.params.specie][this.$route.params.id];
    //this.animal = animal;
  },
};
</script>
