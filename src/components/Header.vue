<template>
  <div class="row items-center justify-start justify-between  ">
    <div class="col-6 justify-start">
      <h2 class="title">
        <mw-ui-icon size="36">{{ mwIconWikipediaLogo }}</mw-ui-icon
        >Translations
      </h2>
    </div>
    <div class="col-6 col-sm-hidden justify-end">
      <mw-ui-icon>{{ mwIconBell }}</mw-ui-icon>
      <mw-ui-icon>{{ mwIconUserAvatar }}</mw-ui-icon
      >Santhosh
    </div>
  </div>
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
