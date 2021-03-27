// method add pet -> dispatch action -> mutate -> state changes
export default {
  addPet: ({ commit }, payload) => {
    console.log("payload iss", payload);
    commit("appendPet", payload);
  },
};
