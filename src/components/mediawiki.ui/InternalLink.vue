<template>
  <a
    class="mw-ui-wikilink"
    role="button"
    tabindex="0"
    aria-disabled="false"
    :target="target"
    rel="nofollow"
    :href="href"
    :class="customClass"
    :title="title"
    :icon="icon"
    @click="handleClick"
  >
    <mw-ui-icon :v-show="icon">{{ icon }}</mw-ui-icon>
    <slot></slot>
  </a>
</template>

<script>
import MwUiIcon from "./Icon";

export default {
  name: "mw-ui-wikilink",
  components: {
    MwUiIcon
  },
  props: {
    customClass: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: "_blank"
    },
    href: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
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
@import "./mixins/buttons.less";
@import "./mixins/common.less";
@import "./variables.less";
.mw-ui-wikilink {
  color: @colorProgressive;
  .transition(background-color 100ms);
  .transition(color 100ms);
  .transition(border-color 100ms);
  .transition(box-shadow 100ms);
  line-height: 1;
  text-decoration: none;
  &:hover {
    background-color: transparent;
    color: @colorProgressiveHighlight;
  }

  &:active {
    color: @colorProgressiveActive;
  }

  &:focus {
    background-color: transparent;
    color: @colorProgressive;
  }
}
</style>
