<template>
  <div class="vx-row">
    <div class="vx-col w-full">
      <vx-card>
        <h4 class="card-heading py-2">CUSTOMER</h4>
        <vs-divider />
        <div class="w-full">
          <DataTable
            :value="customerValues"
            filterDisplay="row"
            :filters="filter"
            :loading="loading"
            responsiveLayout="scroll"
            :lazy="true"
            :paginator="false"
            :rows="defaultPageSize"
            :rowHover="true"
            :totalRecords="totalRecords"
            :rowsPerPageOptions="[10, 25, 50]"
            :currentPageReportTemplate="`Displaying {first} to {last} of {totalRecords} records`"
            removableSort
            sortField="revenue"
            :sortOrder="-1"
            @sort="onSort($event, 'customerValues')"
            :globalFilterFields="['customerName']"
          >
            <Column
              field="customerName"
              header="Customer Name"
              :showFilterMenu="false"
              :sortable="true"
            >
              <template #body="{ data: { customerName } }">
                <div>
                  <span v-text="customerName" />
                </div>
              </template>
              <template #filter="{}">
                <InputText
                  class="p-column-filter"
                  v-model="filter.name"
                  style="width: 100px"
                  type="text"
                />
              </template>
            </Column>
            <Column
              field="revenue"
              header="Revenue"
              :showFilterMenu="true"
              :sortable="true"
            >
              <template #body="{ data: { revenue } }">
                <div>
                  <span>${{ revenue | formatNumberWithCommas }}</span>
                </div>
              </template>
            </Column>
            <Column
              field="revenuePercentage"
              header="Revenue Percentage"
              :showFilterMenu="false"
              :sortable="true"
            >
              <template #body="{ data: { revenuePercentage } }">
                <div>
                  <span> {{ revenuePercentage | formatNumber }}% </span>
                </div>
              </template>
            </Column>
            <Column
              field="numberOfLoads"
              header="No of Loads"
              :showFilterMenu="false"
              :sortable="true"
            >
              <template #body="{ data: { numberOfLoads } }">
                <div>
                  <span v-text="numberOfLoads" />
                </div>
              </template>
            </Column>
            <Column
              field="ratePerMile"
              header="Rate Per Mile"
              :showFilterMenu="false"
              :sortable="true"
            >
              <template #body="{ data: { ratePerMile } }">
                <div>
                  <span>${{ ratePerMile | formatNumberWithCommas }}</span>
                </div>
              </template>
            </Column>
            <Column
              field="miles"
              header="Miles"
              :showFilterMenu="false"
              :sortable="true"
            >
              <template #body="{ data: { miles } }">
                <div>
                  <span> {{ miles | formatNumberWithCommas }} </span>
                </div>
              </template>
            </Column>
            <template #empty><b>No records found</b></template>
          </DataTable>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash';
import commonFunctions from '../mixins/commonFunctions';

export default {
  name: 'CustomerOverviewTab',
  mixins: [commonFunctions],
  props: {
    selectedDateRange: {
      type: String,
      default: null,
    },
    selectedTag: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      rawResponse: {},
      customerValues: [],
      loading: false,
      defaultPageSize: 25,
      totalRecords: 0,
      filter: {
        name: '',
      },
    };
  },
  created() {
    this.initTab();
  },
  watch: {
    filter: {
      handler(val) {
        this.filterCustomerValues(val.name.toLowerCase());
        this.defaultSort();
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    filterCustomerValues(filterText) {
      const clone = cloneDeep(this.rawResponse.customerValues);
      if (filterText) {
        this.customerValues = clone.filter((item) =>
          item.customerName.toLowerCase().includes(filterText)
        );
      } else {
        this.customerValues = clone;
      }
    },
    async initTab() {
      try {
        this.loading = true;
        const selectedDates = this.selectedDateRange.split(' to ');
        const payload = {
          startDate: selectedDates[0],
          endDate: selectedDates[1],
        };

        if (this.selectedTag.tag_id != 'parent') {
          payload.tagId = this.selectedTag.tag_id;
        } else {
          payload.parentCompanyOnly = true;
        }
        if (!payload.startDate) return;
        const data = await this.$store.dispatch(
          'homeTab/getCustomerOverview',
          payload
        );
        if (data.payload) {
          this.rawResponse = { ...data.payload };
          this.$emit('update:totalValues', data.payload.totalValues);
          this.customerValues = cloneDeep(data.payload.customerValues);
          this.defaultSort();
        }
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      } finally {
        this.loading = false;
      }
    },
    defaultSort() {
      this.onSort({ sortField: 'revenue', sortOrder: -1 }, 'customerValues');
    },
  },
};
</script>

<style lang="scss" scoped>
.card-heading {
  color: #828282;
}
</style>
