<template>
  <div class="vx-row">
    <div class="vx-col flex items-center justify-between w-full mb-4">
      <h2 class="text-2xl opacity-75">Payments</h2>
    </div>

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
        :rowsPerPageOptions="rowsPerPageOptions"
      >
        <template #empty>
          No records found
        </template>

        <Column field="load_counter" header="Receipt #" :sortable="false">
          <template #body="slotProps">
            {{ slotProps.data.receipt_number }}
          </template>
        </Column>

        <Column field="from_date" header="From Date" :sortable="true">
          <template #body="slotProps">
            {{ slotProps.data.from_date }}
          </template>
        </Column>

        <Column field="to_date" header="To Date" :sortable="true">
          <template #body="slotProps">
            {{ slotProps.data.to_date }}
          </template>
        </Column>

        <Column field="amount" header="Amount" :sortable="true">
          <template #body="slotProps">
            {{ slotProps.data.amount }}
          </template>
        </Column>

        <Column field="status" header="Status" :sortable="true">
          <template #body="{data}">
            <vs-chip
              transparent
              :color="getTransactionStatusColor(data.status)"
            >
              {{ getTransactionStatus(data.status) }}
            </vs-chip>
          </template>
        </Column>

        <Column header="Action">
          <template #body="{data}">
            <div class="flex items-center">
              <template v-if="data.status == 0">
                <vx-tooltip text="Retry">
                  <vs-button
                    type="filled"
                    icon-pack="feather"
                    icon="icon-refresh-cw"
                    color="primary"
                    size="small"
                    @click="onConfirmPaymentRequest(data)"
                  >
                  </vs-button>
                </vx-tooltip>
              </template>
            </div>
          </template>
        </Column>

        <template #footer>
          In total there are {{ totalRecords }} items.
        </template>
      </DataTable>
    </div>
  </div>
</template>

<script>
import DatatableMixin from "@/mixins/datatableMixin";
import { redirectToNewTab } from "@/helpers/helper";
import { mapState } from "vuex";

export default {
  name: "TransactionDatatable",

  mixins: [DatatableMixin],

  created() {
    this.commonApiCall();
  },

  computed: {
    ...mapState("transaction", { items: "transactions" })
  },

  methods: {
    async commonApiCall(filter = {}) {
      this.loading = true;

      await this.$store
        .dispatch("transaction/getTransactionDatatable", {
          eventForServer: this.eventForServer,
          filter
        })
        .catch(error => {
          this.$vs.notify({
            color: "danger",
            title: "Error",
            text: error.response.data.message
          });
        })
        .finally(() => (this.loading = false));
    },

    onConfirmPaymentRequest(transaction) {
      this.$vs.dialog({
        type: "confirm",
        color: "primary",
        title: "Confirm",
        text: "Are you sure. You want to make payment?",
        acceptText: "Yes",
        accept: () => this.makePaymentRequest(transaction)
      });
    },

    async makePaymentRequest(transaction) {
      const payload = {
        subscriptionId: transaction.transcation_id
      };

      this.$vs.loading();

      try {
        await this.$store.dispatch("stripe/makeManualPaymentRequest", payload);

        this.$vs.notify({
          color: "primary",
          title: "Payment",
          text: "Subscription plan update successfully."
        });
      } catch (error) {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message
        });
      } finally {
        this.$vs.loading.close();

        // refresh datatable
        await this.commonApiCall();
      }
    },

    /*
     * Formatted Transaction Status
     */
    getTransactionStatus(status = 0) {
      return {
        0: "failed",
        1: "success"
      }[status];
    },

    getTransactionStatusColor(status = 0) {
      return {
        0: "danger",
        1: "success"
      }[status];
    }
  }
};
</script>

<style scoped></style>
