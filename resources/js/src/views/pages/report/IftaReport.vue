<template>
  <report-layout>
    <vx-card title="IFTA Report" class="w-full">
      <div class="vx-row">
        <div class="vx-col w-full">
          <DataTable
            :value="items.data"
            :lazy="true"
            :paginator="false"
            :rows="rows"
            :rowHover="true"
            :loading="loading"
            :scrollable="true"
            ref="datatable"
          >
            <template #header>
              <div class="w-full flex items-center justify-between">
                <div class="w-1/2 flex items-end space-x-2">
                  <div class="w-1/3">
                    <label class="text-sm opacity-75">Year</label>
                    <flat-pickr
                      v-model="reportYear"
                      :config="flatPikrConfig"
                      class="w-full"
                    />
                  </div>
                  <div class="w-1/3">
                    <label class="text-sm opacity-75">Quarter</label>
                    <v-select
                      :options="[1, 2, 3, 4]"
                      label="full_name"
                      v-model="selectedQuarterOption"
                      class="w-full"
                    />
                  </div>

                  <div>
                    <vs-button color="primary" @click="getReport">
                      Generate Report
                    </vs-button>
                  </div>
                </div>
              </div>
            </template>

            <template #empty> No records found </template>

            <Column field="state" header="State">
              <template #body="slotProps">
                {{ slotProps.data.state }}
              </template>
            </Column>

            <Column field="taxableMiles" header="Taxable Miles">
              <template #body="slotProps">
                {{ truncateToTwoDecimalPlaces(slotProps.data.taxableMiles) }}
              </template>
            </Column>

            <Column field="gallonsPaid" header="Gallons Paid">
              <template #body="slotProps">
                {{ truncateToTwoDecimalPlaces(slotProps.data.gallonsPaid) }}
              </template>
            </Column>

            <Column field="gallonsConsumed" header="Gallons Consumed">
              <template #body="slotProps">
                {{ truncateToTwoDecimalPlaces(slotProps.data.gallonsConsumed) }}
              </template>
            </Column>

            <Column field="gallonsNetTaxable" header="Gallons Net Taxable">
              <template #body="slotProps">
                {{
                  truncateToTwoDecimalPlaces(slotProps.data.gallonsNetTaxable)
                }}
              </template>
            </Column>

            <Column field="stateTaxRate" header="State Tax Rate">
              <template #body="slotProps">
                {{ slotProps.data.stateTaxRate.toFixed(4) }}
              </template>
            </Column>

            <Column field="stateTaxPaid" header="State Tax Paid">
              <template #body="slotProps">
                {{ truncateToTwoDecimalPlaces(slotProps.data.stateTaxPaid) }}
              </template>
            </Column>

            <Column field="stateTaxConsumed" header="State Tax Consumed">
              <template #body="slotProps">
                {{
                  truncateToTwoDecimalPlaces(slotProps.data.stateTaxConsumed)
                }}
              </template>
            </Column>

            <Column field="stateTaxDue" header="State Tax Due">
              <template #body="slotProps">
                {{ truncateToTwoDecimalPlaces(slotProps.data.stateTaxDue) }}
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
  name: "IFTAReport",
  mixins: [DatatableMixin],
  components: {
    ReportLayout,
  },
  data() {
    return {
      items: {
        data: [],
        links: {},
        meta: {},
      },
      reportYear: "2023",
      selectedQuarterOption: 2,
      flatPikrConfig: {
        dateFormat: "Y",
        mode: "single",
      },
    };
  },
  created() {
  },
  methods: {
    async getReport() {
      this.$vs.loading();
      try {
        const payload = {
          year: Number(this.reportYear),
          quarter: this.selectedQuarterOption,
        };
        const data = await this.$store.dispatch(
          "report/getReportIfta",
          payload
        );
        this.items.data = data.jurisdictions;
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
    truncateToTwoDecimalPlaces(number) {
      return number.toFixed(2);
    },
  },
};
</script>
