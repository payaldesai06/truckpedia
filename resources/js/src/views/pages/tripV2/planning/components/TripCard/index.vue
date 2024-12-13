<template>
  <div class="planning-trip-card">
    <planning-header
      :columns="columns"
      :count="driverData.count"
      :name="driverData.name"
    >
    </planning-header>
    <planning-columns
      v-model="selectedLoads"
      :nodes="driverData.children"
      :columns="columns"
      :calculateDeadheadOption="calculateDeadheadOption"
      :uniqueId="uniqueId"
      @changeOrder="onChangeOrder"
      @updateEndTripBtnVisibility="updateEndTripBtnVisibility"
    >
    </planning-columns>
    <planning-footer
      v-model="selectedLoads"
      :isEndTripBtnDisabled="isEndTripBtnDisabled"
      :columns="columns"
      :driverData="driverData"
      @endTrip="endTrip"
    ></planning-footer>
  </div>
</template>

<script>
import PlanningHeader from './PlanningHeader.vue';
import PlanningColumns from './PlanningColumns.vue';
import PlanningFooter from './PlanningFooter.vue';
export default {
  props: {
    driverData: {
      type: Object,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    calculateDeadheadOption: {
      type: Boolean,
      default: () => false,
    },
  },
  components: {
    PlanningHeader,
    PlanningColumns,
    PlanningFooter,
  },
  data() {
    return {
      selectedLoads: [],
      isEndTripBtnDisabled: false,
    };
  },

  computed: {
    uniqueId() {
      // driverData is driver/truck/tag id, created by formatForDriverGroupBy() in tripV2/planning/PlanningTab/index.vue.
      return this.driverData.id;
    },
  },

  methods: {
    endTrip(data) {
      this.$emit('endTrip', data);
    },
    onChangeOrder(reOrderedLoads) {
      this.driverData.children = reOrderedLoads;
    },
    updateEndTripBtnVisibility(isDisabled) {
      this.isEndTripBtnDisabled = isDisabled;
    },
  },
  watch: {
    driverData() {
      this.selectedLoads = [];
    }
  }
};
</script>
