<template>
  <DataTable
    :value="tableData"
    :filters.sync="filters"
    :loading="loading"
    :scrollable="true"
    :globalFilterFields="['col+0']"
    responsiveLayout="scroll"
    :rowStyle="{ height: '25px' }"
    :headerStyle="{ height: '25px' }"
    :autoLayout="true"
    :footerStyle="customFooterStyle"
  >
    <Column
      v-if="headerData[0]"
      field="col+0"
      :header="headerData[0].header"
      :footer="headerData[0].total"
      :filterField="headerData[0].field"
      :filterMenuStyle="{ ...colCommonStyles, width: '200px' }"
      :styles="{
        ...colCommonStyles,
        minWidth:
          headerData[0].style && headerData[0].style.minWidth
            ? headerData[0].style.minWidth
            : '',
        padding: '0rem 1rem',
      }"
      :showFilterOperator="false"
      :showFilterMatchModes="false"
    >
      <template #body="{ data }">
        {{ data['col+0'] }}
      </template>
      <template #filter="{ filterModel }">
        <Dropdown
          v-model="filterModel.value"
          :options="labelData"
          placeholder="Any"
          class="p-column-filter"
          :showClear="true"
        >
          <template #option="slotProps">
            {{ slotProps.option }}
          </template>
        </Dropdown>
      </template>
    </Column>
    <Column
      v-for="(col, index) in headerData.slice(1)"
      :key="index"
      :field="col.field"
      :header="col.header"
      :footer="col.total"
      :bodyStyle="{ justifyContent: 'flex-end', border: 'none' }"
      :footerStyle="{ justifyContent: 'flex-end', border: 'none' }"
    />
  </DataTable>
</template>
<script>
import Vue from 'vue';
import PrimeVue from 'primevue/config';

import { FilterMatchMode, FilterOperator } from 'primevue/api';

Vue.use(PrimeVue);
export default {
  name: 'IncidentTableCard',
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    tableHeader: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      loading: false,
      filters: {
        'col+0': {
          operator: FilterOperator.OR,
          constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
        },
      },
      colCommonStyles: {
        fontSize: '12px',
        border: 'none',
        display: 'flex',
        justifyContent: 'flex-start',
      },
    };
  },
  computed: {
    headerData() {
      return this.tableHeader
        .map((header) => {
          if (header.field !== 'col+0') {
            return {
              ...header,
              total: this.tableData.reduce(
                (total, item) => parseInt(total) + (item[header.field] || 0),
                0
              ),
            };
          } else {
            return { ...header, total: 'Total' };
          }
        })
        .map((header) => ({
          ...header,
          total: header.total === 0 ? '' : header.total,
        }));
    },
    customFooterStyle() {
      return {
        fontWeight: 'bold',
        height: '25px',
      };
    },
    labelData() {
      return this.tableData.map((item) => {
        return item['col+0'];
      });
    },
  },
};
</script>
<style lang="scss">
.safety-tables {
  .p-datatable-table {
    th,
    td {
      &:first-child {
        justify-content: flex-start !important;
        white-space: nowrap;
      }

      &:not(:first-child) {
        justify-content: center !important;
      }
      border: none;
      padding: 0px 5px !important;
      &th {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>
