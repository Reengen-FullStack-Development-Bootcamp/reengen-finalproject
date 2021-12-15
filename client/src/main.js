import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import VueCookies from "vue-cookies";

Vue.use(VueCookies);

Vue.config.productionTip = false;
(async function() {
  let storeInstance = await store();

  new Vue({
    store: storeInstance,
    vuetify,
    router,
    i18n,
    render: (h) => h(App),
  }).$mount("#app");
})();
