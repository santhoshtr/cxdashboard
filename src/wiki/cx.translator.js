import axios from "axios";

function fetchTranslatorStats(translatorName) {
  const params = {
    action: "query",
    format: "json",
    formatversion: 2,
    list: "cxtranslatorstats",
    translator: translatorName,
    origin: "*"
  };
  const language = "en"; // Any domain will do.
  const api = `//${language}.wikipedia.org/w/api.php`;
  return axios.get(api, { params }).then(response => {
    const stats = response.data.cxtranslatorstats;
    const publishTrend = stats.publishTrend;

    const thisMonthKey = new Date().toISOString().slice(0, 7) + "-01";
    const total = publishTrend[thisMonthKey].count || 0;
    const monthTotal = publishTrend[thisMonthKey].delta || 0;
    return {
      total,
      monthTotal,
      publishTrend
    };
  });
}

function fetchTranslations(status) {
  const params = {
    action: "query",
    format: "json",
    assert: "user",
    formatversion: 2,
    list: "contenttranslation",
    type: status
  };
  const api = `/w/api.php`;
  return axios({
    method: "get",
    url: api,
    api,
    params,
    withCredentials: true
  }).then(response => {
    return response.data.query.contenttranslation.translations;
  });
}

function fetchPublishedTranslations() {
  return fetchTranslations("published");
}

function fetchDraftTranslations() {
  return fetchTranslations("draft");
}

export default {
  fetchTranslatorStats,
  fetchDraftTranslations,
  fetchPublishedTranslations
};
