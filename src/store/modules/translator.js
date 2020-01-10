import cxTranslatorApi from "../../wiki/cx.translator";

const state = {
  username: "Santhosh.thottingal",
  translationStats: {
    total: 0,
    monthTotal: 0
  },
  publishedTranslations: [
    {
      id: 1
    }
  ],
  draftTranslations: [],
  savedForLaterTranslations: []
};

// The only way to actually change state in a Vuex store
// is by committing a mutation.
const mutations = {
  setTranslationStats(state, translatorStats) {
    state.translationStats = translatorStats;
  },
  setPublishedTranslations(state, publishedTranslations) {
    state.publishedTranslations = publishedTranslations;
  },
  setDraftTranslations(state, draftTranslations) {
    state.draftTranslations = draftTranslations;
  }
};

// Computed properties for stores.
const getters = {};

const actions = {
  init({ dispatch }) {
    dispatch("stats");
    dispatch("publishedTranslations");
    dispatch("draftTranslations");
  },
  stats({ commit, state }) {
    cxTranslatorApi
      .fetchTranslatorStats(state.username)
      .then(translatorStats => {
        commit("setTranslationStats", translatorStats);
      });
  },
  publishedTranslations({ commit }) {
    cxTranslatorApi.fetchPublishedTranslations().then(publishedTranslations => {
      commit("setPublishedTranslations", publishedTranslations);
    });
  },
  draftTranslations({ commit }) {
    cxTranslatorApi.fetchDraftTranslations().then(draftTranslations => {
      commit("setDraftTranslations", draftTranslations);
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
