<template>
  <div id="app" class="row container">
    <Header />
    <div class="row dashboard-container">
      <div class="col-xs-12 col-md-8">
        <div class="row">
          <mw-ui-button type="progressive" class="col-4"
            ><mw-ui-icon>{{ mwIconAdd }}</mw-ui-icon
            >{{ $i18n("cx-create-new-translation") }}</mw-ui-button
          >
          <mw-ui-button class="col-2 col-offset-2">Suggestions</mw-ui-button>
          <mw-ui-button class="col-2">Draft</mw-ui-button>
          <mw-ui-button class="col-2">Published</mw-ui-button>
        </div>

        <Card>
          <div class="col-12">
            <div
              class="row"
              :key="index"
              v-for="(item, index) in publishedTranslations"
            >
              <div class="col-12">
                {{ item.translation && item.translation.sourceTitle }}
                ->
                {{ item.translation && item.translation.targetTitle }}
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div class="col-xs-12 col-md-4">
        <LeaderBoard />
        <Help />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import LeaderBoard from "./components/LeaderBoard.vue";
import Help from "./components/Help.vue";
import Card from "./components/mediawiki.ui/Card";
import MwUiButton from "./components/mediawiki.ui/Button";
import MwUiIcon from "./components/mediawiki.ui/Icon";
import { mwIconAdd } from "./components/mediawiki.ui/icons";
import "./components/mediawiki.ui/grid.less";
import { mapState } from "vuex";

export default {
  name: "app",
  components: {
    Header,
    Card,
    MwUiButton,
    MwUiIcon,
    LeaderBoard,
    Help
  },
  data: () => ({
    mwIconAdd
  }),
  computed: {
    ...mapState({
      draftTranslations: state => state.translator.draftTranslations,
      publishedTranslations: state => state.translator.publishedTranslations
    })
  }
};
</script>

<style lang="less">
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #54595d;
  background-color: #eaecf0;
  margin: 0;
  padding: 0;
}
</style>
