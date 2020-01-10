import Vue from "vue";
import Vuex from "vuex";
import translator from "./modules/translator";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: { translator }
});
