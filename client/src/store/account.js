import axios from "axios";
import Vue from "vue";

const mutations = {
  SET_USER: "setUser",
};

const actions = {
  LOGIN: "login",
  LOGOUT: "logout",
  REGISTER: "register",
  FETCH_USER: "fetchUser",
  INIT: "init",
};

const account = {
  namespaced: true,
  state: () => ({
    user: null,
  }),
  mutations: {
    [mutations.SET_USER](state, user) {
      state.user = user;
    },
  },
  actions: {
    async [actions.INIT]({ dispatch }) {
      await dispatch(actions.FETCH_USER);
    },

    async [actions.REGISTER_USER](store, user) {
      return axios.post("/account/register", { user });
    },
    async [actions.LOGIN]({ commit }, credentials) {
      const user = (await axios.post("/users/login", credentials)).data;
      Vue.$cookies.set("authorization", user.tokens.access_token, "86400000");

      commit(mutations.SET_USER, user);
    },
    async [actions.REGISTER]({ commit }, credentials) {
      const user = (await axios.post("/users", credentials)).data;
      commit(mutations.SET_USER, null);
      return user;
      //Vue.$cookies.set("authorization", user.tokens.access_token, "86400000");

      //  commit(mutations.SET_USER, user);
    },
    async [actions.LOGOUT]({ commit }) {
      await axios.delete("/account/session");

      commit(mutations.SET_USER, null);
    },
    async [actions.FETCH_USER]({ commit }) {
      try {
        const user = await axios.get("http://localhost:3000/users/me", {
          withCredentials: true,
        });

        commit(mutations.SET_USER, user.data);
      } catch (error) {
        commit(mutations.SET_USER, null);
      }
    },
    async [actions.UPDATE_DIRECTOR](store, director) {
      await axios.patch("/account", { director });
    },
    async [actions.UPDATE_PROFILE](store, profile) {
      await axios.patch("/account/me", profile);
    },
    async [actions.RESEND_VERIFICATION_EMAIL](store, email) {
      await axios.post("/account/outgoing-verification-emails", { email });
    },
  },
};

export default account;
