export default {
  appendPet: (state, { specie, pet }) => {
    console.log("specie and pet are", specie, pet);
    console.log("cats or dogs ???????????????", state[specie]);
    state[specie].push(pet);
  },
};
