<template>
  <report-layout>
    <vx-card title="Revenue by Customer Report" class="w-full">
      <div class="vx-row">
        <div class="vx-col w-full">
          <DataTable
            :value="items.data"
            :lazy="true"
            :paginator="true"
            :rows="rows"
            :rowHover="true"
            :totalRecords="totalRecords"
            :filters="filters"
            :loading="loading"
            :scrollable="true"
            @sort="onSort($event)"
            @page="onPage($event)"
            ref="datatable"
            :rowsPerPageOptions="rowsPerPageOptions"
          >
            <template #header>
              <div class="w-full flex items-center justify-between">
                <div class="w-1/2 flex items-end space-x-2">
                  <div class="w-1/3">
                    <label class="text-sm opacity-75">Choose Period</label>
                    <flat-pickr
                      v-model="selected_date_range"
                      :config="flat_pikr_config"
                      class="w-full"
                    />
                  </div>

                  <div>
                    <vs-button color="primary" @click="commonApiCall"
                      >Generate Report</vs-button
                    >
                  </div>
                </div>

                <div class="w-1/2 flex items-center justify-end">
                  <vs-button
                    color="primary"
                    type="border"
                    icon-pack="feather"
                    icon="icon-external-link"
                    id="button-export-loading"
                    class="vs-con-loading__container"
                    @click.stop="exportCSV"
                    >Export
                  </vs-button>
                </div>
              </div>
            </template>

            <template #empty>
              No records found
            </template>

            <Column
              field="customer.company_name"
              header="Customer Name"
              :sortable="true"
            >
              <template #body="slotProps">
                {{ slotProps.data.customer.company_name }}
              </template>
            </Column>

            <Column
              field="total_revenue"
              header="Total Revenue"
              :sortable="true"
            >
              <template #body="slotProps">
                <span>&dollar;</span> {{ slotProps.data.total_revenue }}
              </template>
            </Column>

            <Column
              field="percentage_of_revenue"
              header="% of Revenue"
              :sortable="true"
            >
              <template #body="slotProps">
                {{ slotProps.data.percentage_of_revenue }} <span>&percnt;</span>
              </template>
            </Column>

            <Column
              field="number_of_loads"
              header="No. of Loads"
              :sortable="true"
            >
              <template #body="slotProps">
                {{ slotProps.data.number_of_loads }}
              </template>
            </Column>

            <Column
              field="load_total_miles"
              header="Total Miles"
              :sortable="true"
            >
              <template #body="slotProps">
                {{ slotProps.data.load_total_miles }}
              </template>
            </Column>

            <Column
              field="revenue_per_mile"
              header="Revenue/Mile"
              :sortable="true"
            >
              <template #body="slotProps">
                <span>&dollar;</span> {{ slotProps.data.revenue_per_mile }}
              </template>
            </Column>

            <template #footer>
              In total there are {{ totalRecords }} items.
            </template>
          </DataTable>
        </div>
      </div>
    </vx-card>
  </report-layout>
</template>

<script>
import ReportLayout from "./components/ReportLayout";
import DatatableMixin from "@/mixins/datatableMixin";

export default {
  name: "RevenueByCustomerReport",

  mixins: [DatatableMixin],

  components: {
    
    
    ReportLayout,
    
  },

  data() {
    return {
      selected_date_range: "",
      items: {
        data: [],
        links: {},
        meta: {}
      },

      // Flate Pikr Config
      flat_pikr_config: {
        mode: "range"
      }
    };
  },

  methods: {
    async commonApiCall(filter = {}) {
      const selectedDates = this.selected_date_range.split(" to ");
      if (selectedDates.length < 2) {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: "Please select report period."
        });
        return 0;
      }

      filter = {
        ...filter,
        startDate: selectedDates[0],
        endDate: selectedDates[1]
      };

      if (filter.hasOwnProperty("toDownload")) {
        this.$vs.loading({
          container: "#button-export-loading",
          scale: 0.45
        });
      } else {
        this.loading = true;
      }

      try {
        const payload = {
          eventForServer: this.eventForServer,
          filter
        };

        const data = await this.$store.dispatch(
          "report/getRevenueByCustomerReportDatatable",
          payload
        );

        if (filter.hasOwnProperty("toDownload")) {
          window.location = data.download_url;
          return 0;
        }

        this.items = data;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message
        });
      } finally {
        if (filter.hasOwnProperty("toDownload")) {
          this.$vs.loading.close("#button-export-loading > .con-vs-loading");
        } else {
          this.loading = false;
        }
      }
    },

    exportCSV() {
      this.commonApiCall({ toDownload: 1 });
    }
  }
};
</script>

<style scoped></style>
