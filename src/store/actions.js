// method add pet -> dispatch action -> mutate -> state changes
export default {
  appendPet: ({ commit }, payload) => {
    console.log("payload iss", payload);
    commit("appendPet", payload);
  },
};
