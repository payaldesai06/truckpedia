<template>
  <tfoot v-if="columns.length" class="planning-footer">
    <tr>
      <!-- <td :colspan="columns.length - 1"></td> -->
      <td
        v-for="column in columns"
        :key="column.field"
        :class="{
          'selected-color': column.field === 'loadRate',
          'first-column': column.field === 'loadNumber',
        }"
      >
        <div style="max-width: 110px">
          <template v-if="column.field === 'loadNumber'">
            <vs-checkbox
              @click.native.stop
              v-model="selectAll"
              vs-name="selectAll"
              class="h-full inline-flex"
            >
              <span class="pl-2"> Select All </span>
            </vs-checkbox>
          </template>
          <template v-if="column.field === 'loadRate'">
            <vx-input-group>
              <template slot="prepend">
                <div class="dollar-text">
                  <span>$</span>
                </div>
              </template>
              <vs-input
                readonly
                v-model="customRateInput"
                class="selected-color"
                type="number"
              >
              </vs-input>
            </vx-input-group>
          </template>
          <template v-if="column.field === 'totalLoadedDistance'">
            <vs-input
              readonly
              v-model="customDistanceInput"
              class="selected-color"
              type="number"
              style="max-width: 110px"
            >
            </vs-input>
            <!-- {{
            calculateDistance
              ? calculateDistance || ""
              : driverData.totalLoadedDistance || ""
          }} -->
          </template>
          <template v-if="column.field === 'emptyDistance'">
            <vs-input
              readonly
              v-model="customEmptyDistanceInput"
              class="selected-color"
              type="number"
              style="max-width: 110px"
            >
            </vs-input>
          </template>
        </div>
      </td>
      <td>
        <div>
          <vs-button
            color="#52B587"
            type="filled"
            @click="endTrip"
            :disabled="isEndTripDisabled"
          >
            End trip
          </vs-button>
        </div>
      </td>
    </tr>
  </tfoot>
</template>

<script>
export default {
  props: {
    columns: {
      default: [],
    },
    driverData: {
      type: Object,
    },
    value: {
      type: Array,
      default: [],
    },
    isEndTripBtnDisabled: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.setCustomRateInput();
    this.setCustomDistanceInput();
    this.setCustomEmptyDistanceInput();
    /*
    this.customRateInput = this.toFixed(
      this.selectedLoadsCalculatedRate || this.driverData.loadRateTotal,
      2
    );
    this.customDistanceInput = this.toFixed(
      this.selectedLoadsCalculatedDistance ||
        this.driverDataTotalLoadedDistance,
      4
    );
    this.customEmptyDistanceInput = this.toFixed(
      this.selectedLoadsTotalEmptyDistance ||
        this.totalEmptyDistance,
      4
    );
    */
  },
  computed: {
    selectedLoadsData() {
      return this.driverData.children.filter((child) => {
        return this.selectedLoads.includes(child.loadId);
      });
    },
    selectedLoadsCalculatedRate() {
      return this.selectedLoadsData.reduce((acc, load) => {
        return acc + Number((load || {}).loadRate || 0);
      }, 0);
    },
    selectedLoadsCalculatedDistance() {
      return this.selectedLoadsData.reduce((acc, load) => {
        return acc + Number((load || {}).totalLoadedDistance || 0);
      }, 0);
    },
    driverDataTotalLoadedDistance() {
      return this.driverData.children.reduce((acc, load) => {
        return acc + Number((load || {}).totalLoadedDistance || 0);
      }, 0);
    },
    selectedLoadsTotalEmptyDistance() {
      return this.selectedLoadsData.reduce((acc, load) => {
        return acc + Number((load || {}).emptyDistance || 0);
      }, 0);
    },
    totalEmptyDistance() {
      return this.driverData.children.reduce((acc, load) => {
        return acc + Number((load || {}).emptyDistance || 0);
      }, 0);
    },
    isEndTripDisabled() {
      return this.selectedLoads.length === 0 || this.isEndTripBtnDisabled;
    },
  },
  data() {
    return {
      selectAll: false,
      selectedLoads: [],
      customRateInput: null,
      customDistanceInput: null,
      customEmptyDistanceInput: null,
    };
  },
  watch: {
    value: {
      handler(value) {
        this.selectedLoads = value;
      },
      immediate: true,
    },
    selectedLoads: {
      handler(val) {
        this.$emit('input', val);
        this.selectAll = val.length === this.driverData.children.length;
        this.$forceUpdate();
      },
      immediate: true,
    },
    'driverData.loadRateTotal': {
      handler() {
        this.setCustomRateInput();
      },
      deep: true,
    },
    driverDataTotalLoadedDistance: {
      handler() {
        this.setCustomDistanceInput();
      },
      deep: true,
    },
    selectedLoadsCalculatedRate: {
      handler() {
        this.setCustomRateInput();
      },
      deep: true,
    },
    selectedLoadsCalculatedDistance: {
      handler() {
        this.setCustomDistanceInput();
      },
      deep: true,
    },
    totalEmptyDistance: {
      handler() {
        this.setCustomEmptyDistanceInput();
      },
      deep: true,
    },
    selectedLoadsTotalEmptyDistance: {
      handler() {
        this.setCustomEmptyDistanceInput();
      },
      deep: true,
    },
    selectAll() {
      this.selectAllLoads();
    },
  },
  methods: {
    toFixed(x, d) {
      if (!d) return x.toFixed(d); // don't go wrong if no decimal
      return x.toFixed(d).replace(/\.?0+$/, '');
    },
    endTrip() {
      this.$emit('endTrip', {
        ...this.driverData,
        children: this.selectedLoadsData,
        totalLoadedDistance: this.customDistanceInput,
        totalEmptyDistance: this.customEmptyDistanceInput,
      });
    },
    selectAllLoads() {
      if (this.selectAll) {
        this.selectedLoads = this.driverData.children.map(
          (child) => child.loadId
        );
      } else if (
        !this.selectAll &&
        this.driverData.children.length === this.selectedLoads.length
      ) {
        this.selectedLoads = [];
      }
    },
    setCustomRateInput() {
      this.customRateInput =
        this.selectedLoadsData.length > 0
          ? this.toFixed(this.selectedLoadsCalculatedRate, 2)
          : this.toFixed(this.driverData.loadRateTotal, 2);
    },
    setCustomDistanceInput() {
      this.customDistanceInput =
        this.selectedLoadsData.length > 0
          ? this.toFixed(this.selectedLoadsCalculatedDistance, 4)
          : this.toFixed(this.driverDataTotalLoadedDistance, 4);
    },
    setCustomEmptyDistanceInput() {
      this.customEmptyDistanceInput =
        this.selectedLoadsData.length > 0
          ? this.toFixed(this.selectedLoadsTotalEmptyDistance, 4)
          : this.toFixed(this.totalEmptyDistance, 4);
    },
  },
};
</script>

<style lang="scss" scoped>
tfoot {
  background: #ecf0f3;
  tr {
    height: 38px;
    td {
      padding: 0px 12px;
    }
    .first-column {
      padding: 0 12px 0 6px;
      & > div {
        display: flex;
      }
    }
  }
  .selected-color {
    background: #dce6ec;
    border-radius: 10px;
    padding: 0 !important;
  }
  .rate-input {
    border: 1px inset #ccc;
  }
  ::v-deep .vs-input {
    input {
      width: 100%;
      height: 100%;
      border: none !important;
      background: #dce6ec;
      box-shadow: none;
      padding: 1.4rem 0.5em !important;
    }
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    /*!* Firefox *!*/
    input[type='number'] {
      -moz-appearance: textfield;
    }
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      opacity: 1;
    }
  }
  ::v-deep .dollar-text {
    color: inherit !important;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
}
</style>
