<template>
  <div class="vx-row">
    <div class="vx-col w-full md:w-1/2">
      <vx-card>
        <h4 class="card-heading">MARKET WISE LOADS</h4>
        <vs-divider />
        <div class="w-full">
          <DataTable
            :value="marketWiseLoads"
            :loading="loading"
            responsiveLayout="scroll"
            :lazy="true"
            :paginator="false"
            :rows="defaultPageSize"
            :rowHover="true"
            :totalRecords="totalRecords"
            :rowsPerPageOptions="[10, 25, 50]"
            :currentPageReportTemplate="`Displaying {first} to {last} of {totalRecords} records`"
            sortField="revenue"
            :sortOrder="-1"
            removableSort
            @sort="onSort($event, 'marketWiseLoads')"
            :globalFilterFields="['marketCity']"
          >
            <Column
              field="marketCity"
              header="Market City"
              :showFilterMenu="false"
              :sortable="true"
            >
              <template #body="{ data: { marketCity } }">
                <div>
                  <span v-text="marketCity" />
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
              field="marketState"
              header="Market State"
              :showFilterMenu="false"
              :sortable="true"
            >
              <template #body="{ data: { marketState } }">
                <div>
                  <span v-text="marketState" />
                </div>
              </template>
            </Column>
            <Column
              field="revenue"
              header="Revenue"
              :showFilterMenu="false"
              :sortable="true"
            >
              <template #body="{ data: { revenue } }">
                <div>
                  <span>${{ revenue | formatNumberWithCommas }}</span>
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
              field="numberOfLoads"
              header="No of Loads"
              :showFilterMenu="false"
              :sortable="true"
            >
              <template #body="{ data: { numberOfLoads } }">
                <div>
                  <span>{{ numberOfLoads | formatNumberWithCommas }}</span>
                </div>
              </template>
            </Column>
            <template #empty><b>No records found</b></template>
          </DataTable>
        </div>
      </vx-card>
    </div>
    <div class="vx-col w-full mt-8 md:w-1/2 md:mt-0">
      <vx-card>
        <h4 class="card-heading">MOST RUN LANES</h4>
        <vs-divider />
        <div class="w-full">
          <DataTable
            :value="mostRunLanes"
            :loading="loading"
            responsiveLayout="scroll"
            :lazy="true"
            :paginator="false"
            :rows="defaultPageSize"
            :rowHover="true"
            :totalRecords="totalRecords"
            :rowsPerPageOptions="[10, 25, 50]"
            :currentPageReportTemplate="`Displaying {first} to {last} of {totalRecords} records`"
            sortField="revenue"
            :sortOrder="-1"
            removableSort
            @sort="onSort($event, 'mostRunLanes')"
          >
            <Column
              field="originCity"
              header="Origin City"
              :showFilterMenu="false"
              :sortable="true"
            >
              <template #body="{ data: { originCity } }">
                <div>
                  <span v-text="originCity" />
                </div>
              </template>
              <template #filter="{}">
                <InputText
                  class="p-column-filter"
                  v-model="filter.originName"
                  style="width: 100px"
                  type="text"
                />
              </template>
            </Column>
            <Column
              field="originState"
              header="Origin State"
              :showFilterMenu="false"
              :sortable="true"
            >
              <template #body="{ data: { originState } }">
                <div>
                  <span v-text="originState" />
                </div>
              </template>
            </Column>
            <Column
              field="destinationCity"
              header="Destination City"
              :showFilterMenu="false"
              :sortable="true"
            >
              <template #body="{ data: { destinationCity } }">
                <div>
                  <span v-text="destinationCity" />
                </div>
              </template>
            </Column>
            <Column
              field="destinationState"
              header="Destination State"
              :showFilterMenu="false"
              :sortable="true"
            >
              <template #body="{ data: { destinationState } }">
                <div>
                  <span v-text="destinationState" />
                </div>
              </template>
            </Column>
            <Column
              field="revenue"
              header="Revenue"
              :showFilterMenu="false"
              :sortable="true"
            >
              <template #body="{ data: { revenue } }">
                <div>
                  <span>${{ revenue | formatNumberWithCommas }}</span>
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
              field="numberOfLoads"
              header="No of Loads"
              :showFilterMenu="false"
              :sortable="true"
            >
              <template #body="{ data: { numberOfLoads } }">
                <div>
                  <span>{{ numberOfLoads | formatNumberWithCommas }}</span>
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
  name: 'MarketOverviewTab',
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
      marketWiseLoads: [],
      mostRunLanes: [],
      loading: false,
      defaultPageSize: 25,
      totalRecords: 0,
    };
  },
  created() {
    this.initTab();
  },
  methods: {
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
          'homeTab/getMarketOverview',
          payload
        );
        if (data.payload) {
          this.rawResponse = { ...data.payload };
          this.$emit('update:totalValues', data.payload.totalValues);
          this.marketWiseLoads = cloneDeep(data.payload.marketWiseLoads);
          this.mostRunLanes = cloneDeep(data.payload.mostRunLanes);
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
      this.onSort({ sortField: 'revenue', sortOrder: -1 }, 'marketWiseLoads');
      this.onSort({ sortField: 'revenue', sortOrder: -1 }, 'mostRunLanes');
    },
  },
};
</script>

<style lang="scss" scoped>
.card-heading {
  color: #828282;
}
</style>
