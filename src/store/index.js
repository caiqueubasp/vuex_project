import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      name: "Sem nome por enquanto",
      second_name: "Sem sobrenome por enquanto",
      old: 0,
      email: "sememail@sememail.com",
    },
  },
  mutations: {
    changeName(state, payload) {
      state.user.name = payload;
    },
    changeSecondName(state, payload) {
      state.user.second_name = payload;
    },
    changeOld(state, payload) {
      state.user.old = payload;
    },
    changeEmail(state, payload) {
      state.user.email = payload;
    },
  },
  actions: {},
  modules: {},
});
