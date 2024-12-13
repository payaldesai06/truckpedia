<template>
  <section>
    <div class="vx-row">
      <div class="vx-col xl:w-1/2 w-full mt-4">
        <vx-card>
          <IncidentComparisonTableCard
            :tableHeader="dataByYear.tableHeader"
            :tableData="dataByYear.tableData"
          ></IncidentComparisonTableCard>
        </vx-card>
      </div>
      <div class="vx-col xl:w-1/2 w-full mt-4">
        <vx-card>
          <IncidentComparisonTableCard
            :tableHeader="dataByQuarter.tableHeader"
            :tableData="dataByQuarter.tableData"
          ></IncidentComparisonTableCard>
        </vx-card>
      </div>
      <div class="vx-col xl:w-1/2 w-full mt-4">
        <vx-card>
          <IncidentComparisonTableCard
            :tableHeader="dataByMonth.tableHeader"
            :tableData="dataByMonth.tableData"
            :footerData="dataByMonth.footerData"
            :isHeaderGroup="true"
          ></IncidentComparisonTableCard>
        </vx-card>
      </div>
      <div class="vx-col xl:w-1/2 w-full mt-4">
        <vx-card>
          <IncidentComparisonTableCard
            :tableHeader="dataByIncidentType.tableHeader"
            :tableData="dataByIncidentType.tableData"
            :footerData="dataByIncidentType.footerData"
          ></IncidentComparisonTableCard>
        </vx-card>
      </div>
    </div>
  </section>
</template>

<script>
import IncidentComparisonTableCard from './IncidentComparisonTableCard.vue';
export default {
  name: 'IncidentComparisonTables',
  props: {
    tablesValue: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    IncidentComparisonTableCard,
  },
  computed: {
    dataByYear() {
      return {
        tableHeader: this.tablesValue.incidentsComparisonByYear.tableHeader,
        tableData: this.tablesValue.incidentsComparisonByYear.tableData,
      };
    },
    dataByMonth() {
      return {
        tableHeader: this.tablesValue.incidentsComparisonByMonth.tableHeader,
        tableData: this.tablesValue.incidentsComparisonByMonth.tableData,
        footerData: this.tablesValue.incidentsComparisonByMonth.footerData,
      };
    },
    dataByQuarter() {
      return {
        tableHeader: this.tablesValue.incidentsComparisonByQuarter.tableHeader,
        tableData: this.tablesValue.incidentsComparisonByQuarter.tableData,
      };
    },
    dataByIncidentType() {
      return {
        tableHeader: this.tablesValue.incidentsComparisonByIncidentType.tableHeader,
        tableData: this.tablesValue.incidentsComparisonByIncidentType.tableData,
        footerData: this.tablesValue.incidentsComparisonByIncidentType.footerData,
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
