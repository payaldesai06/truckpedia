<template>
  <div>
    <vx-card>
      <DataTable
        :value="items"
        :expandedRows.sync="expandedRows"
        :lazy="true"
        :loading="loading"
        responsiveLayout="scroll"
      >
        <Column :expander="true" :headerStyle="{ width: '3rem' }" />
        <Column header="Customer">
          <template #body="{ data }">
            {{ data.customer.name }}
          </template>
        </Column>
        <Column header="Current">
          <template #body="{ data }">
            {{ formatAmountValue(data.current.totalAmount) }}
          </template>
        </Column>
        <Column header="1-30">
          <template #body="{ data }">
            {{ formatAmountValue(data.oneMonth.totalAmount) }}
          </template>
        </Column>
        <Column header="31-60">
          <template #body="{ data }">
            {{ formatAmountValue(data.twoMonths.totalAmount) }}
          </template>
        </Column>
        <Column header="61-90">
          <template #body="{ data }">
            {{ formatAmountValue(data.threeMonths.totalAmount) }}
          </template>
        </Column>
        <Column header="91+">
          <template #body="{ data }">
            {{ formatAmountValue(data.remaining.totalAmount) }}
          </template>
        </Column>
        <template #expansion="slotProps">
          <div>
            <DataTable class="mt-4" :value="slotProps.data.loads">
              <Column field="number" header="Load #"> </Column>
              <Column field="reference" header="Reference"> </Column>
              <Column field="amount" header="Amount"
                ><template #body="{ data }">
                  {{ formatAmountValue(data.amount) }}
                </template>
              </Column>
              <Column field="overdueDays" header="Over Due Days"></Column>
            </DataTable>
          </div>
        </template>
      </DataTable>
    </vx-card>
  </div>
</template>
<script>
import { getApiErrorMsg, formatAmount } from '@/helpers/helper';

export default {
  name: 'AgingReportTab',
  data() {
    return {
      expandedRows: [],
      loading: false,
      items: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      try {
        const { result, payload } = await this.$store.dispatch(
          'load/getAgingReport',
          {}
        );
        if (result) {
          this.items =
            payload && payload.loadsByCustomer ? payload.loadsByCustomer : [];
        }
      } catch (error) {
        this.items = [];
        this.totalRecords = 0;
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
      }
    },
    formatAmountValue(amount) {
      return formatAmount(amount);
    },
  },
};
</script>
