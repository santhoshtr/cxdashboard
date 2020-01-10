<template>
  <Card>
    <div class="col-xs-12">
      <h3>{{ title }}</h3>
      <ul class="help-links">
        <li :key="helpLink.link" v-for="helpLink in helpLinks">
          <mw-ui-internal-link :href="helpLink.link" :icon="helpLink.icon">{{
            helpLink.text
          }}</mw-ui-internal-link>
        </li>
      </ul>
    </div>
  </Card>
</template>

<script>
import Card from "./mediawiki.ui/Card";
import {
  mwIconChart,
  mwIconInfo,
  mwIconSpeechBubble
} from "./mediawiki.ui/icons";

import MwUiInternalLink from "./mediawiki.ui/InternalLink";

export default {
  name: "Help",
  components: {
    Card,
    MwUiInternalLink
  },
  data: () => ({
    title: "Need help translating?",
    helpLinks: [
      {
        link:
          "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
        icon: mwIconInfo,
        text: "More about this tool"
      },
      {
        link: "https://en.wikipedia.org/wiki/Special:ContentTranslationStats",
        icon: mwIconChart,
        text: "Statistics"
      },
      {
        link: "https://www.mediawiki.org/wiki/Talk:Content_translation",
        icon: mwIconSpeechBubble,
        text: "Give us feedback"
      }
    ]
  })
};
</script>
<style>
.help-links li {
  list-style: none;
  line-height: 1.5;
}
</style>
