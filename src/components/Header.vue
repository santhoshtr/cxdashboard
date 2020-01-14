<template>
  <header class="row items-center justify-start justify-between ">
    <div class="col-6 justify-start ps-4">
      <span class="title">
        <mw-ui-icon size="32">{{ mwIconWikipediaLogo }}</mw-ui-icon
        >Translations
      </span>
    </div>
    <div class="col-6 col-sm-hidden justify-end pe-4">
      <mw-ui-icon>{{ mwIconBell }}</mw-ui-icon>
      <mw-ui-icon>{{ mwIconUserAvatar }}</mw-ui-icon
      >Santhosh
    </div>
  </header>
</template>

<script>
import MwUiIcon from "./mediawiki.ui/Icon";

import {
  mwIconWikipediaLogo,
  mwIconBell,
  mwIconUserAvatar
} from "./mediawiki.ui/icons";

export default {
  name: "Header",
  components: {
    MwUiIcon
  },
  data: () => ({
    mwIconWikipediaLogo,
    mwIconBell,
    mwIconUserAvatar
  })
};
</script>

<style scoped>
.title {
  line-height: 1;
  font-size: 1.2em;
}
</style>
