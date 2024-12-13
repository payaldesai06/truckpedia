<template>
  <div class="ez-color-picker">
    <!-- Trigger block  -->
    <div class="trigger" @click="toggleDropDown">
      <vs-icon icon="palette" v-if="!$slots.trigger"></vs-icon>
      <slot v-else name="trigger" />
    </div>
    <div
      v-if="showDropDown"
      v-click-outside="closeDropDown"
      class="ez-color-picker-drop-down"
    >
      <!-- Item one : Color picker  -->
      <div class="ez-color-picker-pallet">
        <v-swatches
          :value="value"
          :swatches="colorPallet"
          :max-height="150"
          :spacing-size="4"
          :row-length="10"
          swatch-size="20"
          shapes="circles"
          show-border
          show-checkbox
          popover-x="right"
          :popover-y="'bottom'"
          @input="emitInput"
          :inline="true"
        >
        </v-swatches>
      </div>
      <!-- Item two : Reset Button  -->
      <div class="ez-color-picker-reset">
        <vs-button @click="emitReset" color="danger" type="border">
          Reset
        </vs-button>
      </div>
    </div>
  </div>
</template>

<script>
import VSwatches from 'vue-swatches';
import 'vue-swatches/dist/vue-swatches.css';
import config from '@/config/constants';

export default {
  name: 'EZColorPicker',
  components: {
    VSwatches,
  },
  props: {
    value: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      showDropDown: false,
    };
  },
  computed: {
    colorPalletSrc() {
      return (config || {}).spreadSheetColorPickerPallet || [];
    },
    colorPallet() {
      const createColorPallet2D = (arr, rowSize) => {
        const resArr = [];
        while (arr.length) {
          resArr.push(arr.splice(0, rowSize));
        }
        return resArr;
      };
      return createColorPallet2D([...this.colorPalletSrc], 10);
    },
  },
  methods: {
    emitInput(payload) {
      const payloadIndex = this.colorPalletSrc.indexOf(payload);
      if (payloadIndex >= 0 && payloadIndex < this.colorPalletSrc.length) {
        this.$emit('input', payloadIndex + 1);
      }
    },
    emitReset() {
      this.$emit('reset');
    },
    toggleDropDown() {
      this.showDropDown = !this.showDropDown;
    },
    closeDropDown() {
      this.showDropDown = false;
    },
  },
};
</script>

<style lang="scss">
.ez-color-picker {
  .ez-color-picker-drop-down {
    z-index: 1002;
    padding: 7px;
    margin-top: 7px;
    position: absolute;
    min-width: max-content;
    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    .ez-color-picker-reset {
      margin: auto;
      button {
        width: 100%;
      }
    }
    &:before,
    &:after {
      content: '';
      position: absolute;
      bottom: 100%;
      left: 0px;
      border: 7px solid transparent;
      border-bottom-color: #dddddd;
    }

    &:after {
      left: 1px;
      border: 8px solid transparent;
      border-bottom-color: #fff;
    }
  }
}
</style>
