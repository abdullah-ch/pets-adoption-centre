export default {
  totalPets: (state) => {
    return state.cats.length + state.dogs.length;
  },
};
