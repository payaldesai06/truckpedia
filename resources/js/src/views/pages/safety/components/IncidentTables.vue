<template>
  <section class="safety-tables">
    <div class="vx-row">
      <div class="vx-col xl:w-1/2 w-full mt-4">
        <vx-card>
          <IncidentTableCard
            :tableHeader="dataByTagMonth.tableHeader"
            :tableData="dataByTagMonth.tableData"
          ></IncidentTableCard>
        </vx-card>
      </div>
      <div class="vx-col xl:w-1/2 w-full mt-4">
        <vx-card>
          <IncidentTableCard
            :tableHeader="dataByIncidentTypeLocation.tableHeader"
            :tableData="dataByIncidentTypeLocation.tableData"
          ></IncidentTableCard>
        </vx-card>
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col xl:w-1/2 w-full mt-4">
        <vx-card>
          <IncidentTableCard
            :tableHeader="dataByIncidentTypeMonth.tableHeader"
            :tableData="dataByIncidentTypeMonth.tableData"
          ></IncidentTableCard>
        </vx-card>
      </div>
      <div class="vx-col xl:w-1/4 w-1/2 mt-4">
        <vx-card>
          <IncidentTableCard
            :tableHeader="dataByPreventable.tableHeader"
            :tableData="dataByPreventable.tableData"
          ></IncidentTableCard>
        </vx-card>
      </div>
      <div class="vx-col xl:w-1/4 w-1/2 mt-4">
        <vx-card>
          <IncidentTableCard
            :tableHeader="dataByAtFault.tableHeader"
            :tableData="dataByAtFault.tableData"
          ></IncidentTableCard>
        </vx-card>
      </div>
    </div>
  </section>
</template>

<script>
import IncidentTableCard from './IncidentTableCard.vue';
export default {
  name: 'IncidentTables',
  props: {
    tablesValue: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    IncidentTableCard,
  },
  computed: {
    dataByTagMonth() {
      return {
        tableHeader: this.tablesValue.incidentsByTagMonth.tableHeader,
        tableData: this.tablesValue.incidentsByTagMonth.tableData,
      };
    },
    dataByIncidentTypeMonth() {
      return {
        tableHeader: this.tablesValue.incidentsByTypeMonth.tableHeader,
        tableData: this.tablesValue.incidentsByTypeMonth.tableData,
      };
    },
    dataByIncidentTypeLocation() {
      return {
        tableHeader: this.tablesValue.incidentsByTypeLocation.tableHeader,
        tableData: this.tablesValue.incidentsByTypeLocation.tableData,
      };
    },
    dataByPreventable() {
      return {
        tableHeader: this.tablesValue.incidentsByPreventable.tableHeader,
        tableData: this.tablesValue.incidentsByPreventable.tableData,
      };
    },
    dataByAtFault() {
      return {
        tableHeader: this.tablesValue.incidentsByAtFault.tableHeader,
        tableData: this.tablesValue.incidentsByAtFault.tableData,
      };
    },
  },
  method: {
    calculateTotal(field) {
      console.log(field);
      // return this.tablesValue.incidentsByTagMonth.tableData.reduce((total, item) => total + item[field], 0);
    },
  },
};
</script>

<style lang="scss" scoped></style>
