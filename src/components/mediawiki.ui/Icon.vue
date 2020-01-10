<template>
  <span class="mw-ui-icon notranslate">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
    >
      <path :d="iconPath" />
    </svg>
  </span>
</template>

<script>
export default {
  name: "mw-ui-icon",
  props: {
    size: {
      type: Number,
      default: 20
    }
  },
  computed: {
    iconPath: function() {
      if (this.$slots.default) {
        return this.$slots.default[0].text.trim();
      }
      return null;
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style lang="less">
@import "../mediawiki.ui/variables.less";

.mw-ui-icon {
  align-items: center;
  display: inline-flex;
  font-feature-settings: "liga";
  font-size: @iconSize;
  justify-content: center;
  letter-spacing: normal;
  line-height: 1;
  text-indent: 0;
  -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
  vertical-align: middle;
  user-select: none;
  svg {
    fill: currentColor;
  }
}
</style>
