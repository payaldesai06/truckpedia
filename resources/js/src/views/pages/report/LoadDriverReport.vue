<template>
  <report-layout>
    <vx-card title="Driver Report" class="w-full">
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
            responsiveLayout="scroll"
            @sort="onSort($event)"
            @page="onPage($event)"
            ref="datatable"
            :rowsPerPageOptions="rowsPerPageOptions"
          >
            <template #header>
              <div class="w-full flex items-center justify-between">
                <div class="w-1/2 flex items-end space-x-2">
                  <div class="w-1/3">
                    <label class="text-sm opacity-75">Select Driver</label>
                    <v-select
                      :options="driver_options"
                      label="full_name"
                      :reduce="(option) => option.user_id"
                      v-model="selected_driver_option"
                      class="w-full"
                    />
                  </div>

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

            <template #empty> No records found </template>

            <Column field="driver_name" header="Driver Name" :sortable="false">
              <template #body="slotProps">
                {{ slotProps.data.driver_name }}
              </template>
            </Column>

            <Column field="load_number" header="Load Number" :sortable="false">
              <template #body="slotProps">
                {{ slotProps.data.load_number }}
              </template>
            </Column>

            <Column field="reference_id" header="Reference #" :sortable="false">
              <template #body="slotProps">
                {{ slotProps.data.reference_id }}
              </template>
            </Column>

            <Column field="customer_name" header="Customer" :sortable="false">
              <template #body="slotProps">
                {{ slotProps.data.customer_name }}
              </template>
            </Column>

            <Column field="ship_date" header="Ship Date" :sortable="true">
              <template #body="slotProps">
                {{ slotProps.data.ship_date }}
              </template>
            </Column>

            <Column
              field="delivery_date"
              header="Delivery Date"
              :sortable="true"
            >
              <template #body="slotProps">
                {{ slotProps.data.delivery_date }}
              </template>
            </Column>

            <Column field="freight_weight" header="Weight" :sortable="false">
              <template #body="slotProps">
                {{ intOrDecimalFormatter(slotProps.data.freight_weight) }}
              </template>
            </Column>

            <Column field="freight_qty" header="Quantity" :sortable="false">
              <template #body="slotProps">
                {{ intOrDecimalFormatter(slotProps.data.freight_qty) }}
              </template>
            </Column>

            <Column field="total_amount" header="Amount" :sortable="false">
              <template #body="slotProps">
                {{ slotProps.data.total_amount.toFixed(2) }}
              </template>
            </Column>

            <Column field="driver_pay" header="Driver Pay" :sortable="false">
              <template #body="slotProps">
                {{ slotProps.data.driver_pay.toFixed(2) }}
              </template>
            </Column>

            <ColumnGroup type="footer">
              <Row>
                <Column
                  footer="Totals:"
                  :colspan="6"
                  footerStyle="text-align:right"
                />
                <Column :footer="totalWeight" />
                <Column :footer="totalQty" />
                <Column :footer="totalAmount" />
                <Column :footer="totalDriverPay" />
              </Row>
            </ColumnGroup>

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
import DatatableMixin from "@/mixins/datatableMixin";
import ReportLayout from "./components/ReportLayout";
import Row from "primevue/row/Row";
import ColumnGroup from "primevue/columngroup/ColumnGroup";

export default {
  name: "LoadDriverReport",

  mixins: [DatatableMixin],

  components: {
    
    
    ReportLayout,
    Row,
    ColumnGroup,
    
  },

  data() {
    return {
      items: {
        data: [],
        links: {},
        meta: {},
      },

      driver_options: [],
      selected_driver_option: "",
      selected_date_range: "",

      // Flate Pikr Config
      flat_pikr_config: {
        mode: "range",
      },
    };
  },

  async created() {
    await this.getAllDrivers();
  },

  computed: {
    totalWeight() {
      let total = 0;
      for (let item of this.items.data) {
        total += item.freight_weight;
      }
      return this.intOrDecimalFormatter(total);
    },

    totalQty() {
      let total = 0;
      for (let item of this.items.data) {
        total += item.freight_qty;
      }
      return this.intOrDecimalFormatter(total);
    },

    totalAmount() {
      let total = 0;
      for (let item of this.items.data) {
        total += item.total_amount;
      }
      return "$" + this.intOrDecimalFormatter(total);
    },

    totalDriverPay() {
      let total = 0;
      for (let item of this.items.data) {
        total += item.driver_pay;
      }
      return "$" + this.intOrDecimalFormatter(total);
    },
  },

  methods: {
    intOrDecimalFormatter(number) {
      return Number.isSafeInteger(number)
        ? number.toString()
        : number.toFixed(4);
    },

    async commonApiCall(filter = {}) {
      const selectedDates = this.selected_date_range.split(" to ");
      if (selectedDates.length < 2) {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: "Please select report period.",
        });
        return 0;
      }

      filter = {
        ...filter,
        startDate: selectedDates[0],
        endDate: selectedDates[1],
      };
      if (this.selected_driver_option) {
        filter.driverId = this.selected_driver_option;
      }

      this.loading = true;

      try {
        const payload = {
          eventForServer: this.eventForServer,
          filter,
        };

        const data = await this.$store.dispatch(
          "report/getLoadDriverReportDatatable",
          payload
        );

        if (filter.hasOwnProperty("toDownload")) {
          window.location = data.download_url;
          this.loading = false;
          return 0;
        }

        this.items = data;
      } catch (error) {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message,
        });
      } finally {
        if (filter.hasOwnProperty("toDownload")) {
          this.$vs.loading.close("#button-export-loading > .con-vs-loading");
        } else {
          this.loading = false;
        }
      }
    },

    async getAllDrivers() {
      this.$vs.loading();

      try {
        const { payload } = await this.$store.dispatch("driver/getAllDrivers");

        this.driver_options = payload.data.map((driver) => ({
          ...driver,
          full_name: driver.driver_details.name,
        }));
        this.driver_options.unshift({ full_name: "All", user_id: null });
      } catch (error) {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message,
        });
      } finally {
        this.$vs.loading.close();
      }
    },

    exportCSV() {
      this.commonApiCall({
        toDownload: 1,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
