/*global mw */

import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import i18n from "vue-banana-i18n";

Vue.config.productionTip = false;
const locale =
  (window.mw && mw.config.get("wgUserLanguage")) ||
  navigator.language.split("-")[0] ||
  "en";
const finalFallback = "en";
const messages = (window.mw && mw.messages.values) || {};
Vue.use(i18n, {
  locale,
  finalFallback,
  messages
});

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
