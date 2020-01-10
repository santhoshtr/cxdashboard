<template>
  <div class="mw-ui-card row start-xs middle-xs between-xs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card"
};
</script>
<style lang="less">
@import "../mediawiki.ui/variables.less";
@import "../mediawiki.ui/mixins/common.less";
.mw-ui-card {
  background-color: @background-color-base;
  box-sizing: border-box;
  margin-bottom: 1em;
  border-radius: @borderRadius;
  padding: 8px;
  .box-shadow(0 1px 1px rgba(0, 0, 0, 0.15));
}
</style>
