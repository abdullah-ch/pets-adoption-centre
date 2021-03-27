<template>
  <div class="home">
    <h1>Adopt a New Best Friend</h1>
    <h2>Total Pets : {{ totalPets }}</h2>
    <button @click="formShow" class="btn btn-primary">Add New Pet</button>

    <b-form @submit.prevent="handleSubmit" v-if="showForm === true">
      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          type="text"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Specie:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.specie"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-group id="input-group-2" label="Pet's Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.age"
          type="number"
          placeholder="Enter Age"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ formData }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",

  data() {
    return {
      showForm: false,
      formData: {
        age: null,
        specie: null,
        name: "",
      },
    };
  },
  computed: {
    ...mapGetters(["totalPets"]),
  },
  methods: {
    ...mapActions(["appendPet"]),
    formShow() {
      this.showForm = !this.showForm;
    },

    handleSubmit() {
      console.log("appendPet gnnn.................", this.appendPet);
      const { specie, age, name } = this.formData;

      const payload = { specie, pet: { name, age } };
      this.appendPet(payload);

      this.formData = { age: null, specie: null, name: "" };
    },
  },
};
</script>
