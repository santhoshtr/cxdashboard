<template>
  <button
    class="mw-ui-button"
    :id="id"
    :class="customClass"
    :name="name"
    :disabled="disabled"
    :large="large"
    :type="type"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "mw-ui-button",
  props: {
    id: {
      type: String,
      default: null
    },
    customClass: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "default"
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

/* stylelint-disable selector-class-pattern */

// All buttons start with `.mw-ui-button` class, modified by other classes.
// It can be any element.  Due to a lack of a CSS reset, the exact styling of
// the button depends on what type of element is used.
// There are two kinds of buttons, the default is a "Call to Action" with an obvious border
// and there is a quiet kind without a border.
//
// Styleguide 2.

// Neutral button styling
//
// These are the main actions on the page/workflow. The page should have only one of progressive and destructive buttons, the rest being quiet.
//
// Markup:
// <div>
//   <button class="mw-ui-button">.mw-ui-button</button>
// </div>
// <div>
//   <button class="mw-ui-button" disabled>.mw-ui-button</button>
// </div>
//
// Styleguide 2.1.
.mw-ui-button {
  background-color: @colorGray15;
  color: @colorButtonText;
  .mw-ui-button();
  .mw-ui-button-states();

  // Progressive buttons
  //
  // Use progressive buttons for actions which lead to a next step in the process.
  //
  // Markup:
  // <div>
  //   <button class="mw-ui-button mw-ui-progressive">.mw-ui-progressive</button>
  // </div>
  // <div>
  //   <button class="mw-ui-button mw-ui-progressive" disabled>.mw-ui-progressive</button>
  // </div>
  //
  // Styleguide 2.1.2.
  &[type="progressive"] {
    .mw-ui-button-colors-primary(
      @colorProgressive,
      @colorProgressiveHighlight,
      @colorProgressiveActive
    );

    &.mw-ui-quiet {
      color: @colorProgressive;

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
  }

  // Destructive buttons
  //
  // Use destructive buttons for actions that remove or limit, such as deleting a page or blocking a user.
  // This should not be used for cancel buttons.
  //
  // Markup:
  // <div>
  //   <button class="mw-ui-button mw-ui-destructive">.mw-ui-destructive</button>
  // </div>
  // <div>
  //   <button class="mw-ui-button mw-ui-destructive" disabled>.mw-ui-destructive</button>
  // </div>
  //
  // Styleguide 2.1.3.
  &[type="destructive"] {
    .mw-ui-button-colors-primary(
      @colorDestructive,
      @colorDestructiveHighlight,
      @colorDestructiveActive
    );

    &.mw-ui-quiet {
      color: @colorDestructive;

      &:hover {
        background-color: transparent;
        color: @colorDestructiveHighlight;
      }

      &:active {
        color: @colorDestructiveActive;
      }

      &:focus {
        background-color: transparent;
        color: @colorDestructive;
      }
    }
  }

  // Big buttons
  //
  // Not all buttons are equal. You can emphasise certain actions over others
  // using the mw-ui-big class.
  //
  // Markup:
  // <div>
  //   <button class="mw-ui-button mw-ui-big">.mw-ui-button</button>
  // </div>
  // <div>
  //   <button class="mw-ui-button mw-ui-progressive mw-ui-big">.mw-ui-progressive</button>
  // </div>
  // <div>
  //   <button class="mw-ui-button mw-ui-destructive mw-ui-big">.mw-ui-destructive</button>
  // </div>
  //
  // Styleguide 2.1.4.
  &[large="true"] {
    font-size: 1.3em;
  }

  // Block buttons
  //
  // Some buttons might need to be stacked.
  //
  // Markup:
  // <div>
  //   <button class="mw-ui-button mw-ui-block">.mw-ui-button</button>
  // </div>
  // <div>
  //   <button class="mw-ui-button mw-ui-progressive mw-ui-block">.mw-ui-progressive</button>
  // </div>
  // <div>
  //   <button class="mw-ui-button mw-ui-destructive mw-ui-block">.mw-ui-destructive</button>
  // </div>
  //
  // Styleguide 2.1.5.
  &[block="true"] {
    display: block;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
}

// .w-btn {
//   cursor: pointer;
//   border: none;
//   background: 0 0;
//   border-radius: 3.5px;
//   font-family: "Avenir", Helvetica, Arial, sans-serif;
//   font-size: 1rem;
//   padding: 6px 24px;
//   text-decoration: none;
//   outline: 0;
//   &:disabled {
//     cursor: not-allowed;
//     color: @disabled-color !important;
//     box-shadow: 0 0 0 1px @disabled-color inset !important;
//   }
//   &[large="true"] {
//     font-size: 1.4rem;
//   }
//   &[color="default"] {
//     .button-color(@default-color, @default-hover-color);
//   }
//   &[color="primary"] {
//     .button-color(@primary-color, @primary-hover-color);
//   }
//   &[color="success"] {
//     .button-color(@success-color, @success-hover-color);
//   }
//   &[color="warning"] {
//     .button-color(@warning-color, @warning-hover-color);
//   }
//   &[color="error"] {
//     .button-color(@error-color, @error-hover-color);
//   }
// }
</style>
