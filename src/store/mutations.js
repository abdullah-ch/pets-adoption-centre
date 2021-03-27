export default {
  appendPet: (state, { specie, pet }) => {
    console.log("specie and pet are", specie, pet);
    state[specie].append(pet);
  },
};
