<template>
  <DataTable
    :key="calcTableHeader && calcTableHeader.length"
    :value="tableData"
    :loading="loading"
    :scrollable="true"
    responsiveLayout="scroll"
    :autoLayout="true"
    :footerStyle="customFooterStyle"
    :showGridlines="true"
  >
    <ColumnGroup v-if="isHeaderGroup" type="header">
      <Row v-if="tableHeader">
        <Column
          v-for="(col, index) in tableHeader[0]"
          :key="index"
          :header="col.header"
          :headerStyle="{ 'justify-content': 'center' }"
          :rowspan="col.rowspan + 1"
          :colspan="col.colspan"
        >
        </Column>
        <Column :headerStyle="{ display: 'none' }" />
      </Row>
      <Row v-if="calcTableHeader">
        <Column
          v-for="(col, index) in calcTableHeader.slice(1)"
          :headerStyle="{ 'justify-content': 'center' }"
          :key="index"
          :field="col.field"
          :header="col.header"
        >
        </Column>
      </Row>
    </ColumnGroup>
    <Column
      v-for="(col, index) in calcTableHeader"
      :key="index"
      :field="col.field"
      :header="col.header"
      :headerStyle="{ 'justify-content': 'center' }"
      :footer="calcFooterValue(col)"
      :bodyStyle="
        col.textRight
          ? { 'justify-content': 'flex-end', 'min-width': '50px' }
          : { 'min-width': '50px' }
      "
      :footerStyle="{ 'justify-content': 'flex-end', 'min-width': '50px' }"
    >
      <template v-slot:body="slotProps">
        <div
          :style="
            col.formatColor && slotProps.data[col.field]
              ? slotProps.data[col.field] > 0
                ? { color: 'red' }
                : { color: 'green' }
              : {}
          "
        >
          {{
            col.formatColor && slotProps.data[col.field] !== ''
              ? `${slotProps.data[col.field]}%`
              : slotProps.data[col.field]
          }}
        </div>
      </template>
    </Column>
  </DataTable>
</template>
<script>
import Vue from 'vue';
import PrimeVue from 'primevue/config';

Vue.use(PrimeVue);
export default {
  name: 'IncidentComparisonTableCard',
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    tableHeader: {
      type: Array,
      default: () => [],
    },
    footerData: {
      type: Object,
      default: () => {},
    },
    isHeaderGroup: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    customFooterStyle() {
      return {
        fontWeight: 'bold',
      };
    },
    calcTableHeader() {
      if (this.isHeaderGroup) {
        return this.tableHeader[1];
      }
      return this.tableHeader;
    },
  },
  methods: {
    calcFooterValue(col) {
      if (this.footerData && this.footerData[col.field]) {
        return col.formatColor
          ? `${this.footerData[col.field]}%`
          : this.footerData[col.field];
      }
      return '';
    },
  },
};
</script>
<style></style>
