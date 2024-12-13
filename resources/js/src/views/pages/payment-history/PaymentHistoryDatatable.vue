<template>
  <vx-card title="Payment History">
    <div class="vx-col w-full">
      <DataTable :value="items.data"
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
                 :rowsPerPageOptions="rowsPerPageOptions">

        <template #empty>
          No records found
        </template>

        <Column field="business_name" header="Company Name" :sortable="true">
          <template #body="slotProps">
            {{ slotProps.data.admin_company_details.business_name }}
          </template>

          <template #filter>
            <InputText type="text"
                       v-model="filters['business_name']"
                       @input="onInputFilter"
                       class="p-column-filter"/>
          </template>
        </Column>

        <Column field="load_counter" header="No. of Loads" :sortable="true">
          <template #body="slotProps">
            {{ slotProps.data.load_counter }}
          </template>

          <template #filter>
            <InputText type="number"
                       v-model="filters['load_counter']"
                       @input="onInputFilter"
                       class="p-column-filter"/>
          </template>
        </Column>

        <Column field="from_date" header="From Date" :sortable="true">
          <template #body="slotProps">
            {{ slotProps.data.from_date }}
          </template>

          <template #filter>
            <InputText type="text"
                       v-model="filters['from_date']"
                       @input="onInputFilter"
                       class="p-column-filter"/>
          </template>
        </Column>

        <Column field="to_date" header="To Date" :sortable="true">
          <template #body="slotProps">
            {{ slotProps.data.to_date }}
          </template>

          <template #filter>
            <InputText type="text"
                       v-model="filters['to_date']"
                       @input="onInputFilter"
                       class="p-column-filter"/>
          </template>
        </Column>

        <Column field="amount" header="Amount" :sortable="true">
          <template #body="slotProps">
            <span>&dollar;</span>
            {{ slotProps.data.amount }}
          </template>

          <template #filter>
            <InputText type="number"
                       v-model="filters['amount']"
                       @input="onInputFilter"
                       class="p-column-filter"/>
          </template>
        </Column>

        <Column field="status" header="Status" :sortable="true">
          <template #body="{data}">
            <vs-chip transparent :color="getTransactionStatusColor(data.status)">
              {{ getTransactionStatus(data.status) }}
            </vs-chip>
          </template>
        </Column>

        <Column header="Action">
          <template #body="{data}">
            <template v-if="data.status == 1">
              <div class="flex items-center">
                <vx-tooltip text="Download Invoice">
                  <vs-button type="border"
                             icon-pack="feather"
                             icon="icon-download"
                             color="primary"
                             size="small"
                             radius
                             @click.stop="downloadFile(data.invoice_file_url)"/>
                </vx-tooltip>
              </div>
            </template>
          </template>
        </Column>

        <template #footer>
          In total there are {{ totalRecords }} items.
        </template>
      </DataTable>
    </div>
  </vx-card>
</template>

<script>
import DatatableMixin from '@/mixins/datatableMixin'
import { redirectToNewTab } from '@/helpers/helper'
import { mapState } from 'vuex'

export default {
  name: 'PaymentHistoryDatatable',

  mixins: [DatatableMixin],

  data () {
    return {
      filters: {
        business_name: '',
        load_counter: '',
        from_date: '',
        to_date: '',
        amount: ''
      }
    }
  },

  created () {
    this.commonApiCall()
  },

  computed: {
    ...mapState('payment-history', {items: 'paymentHistories'})
  },

  methods: {
    async commonApiCall (filter = {}) {
      this.loading = true

      await this.$store.dispatch('payment-history/getPaymentHistoryDatatable', {
        eventForServer: this.eventForServer,
        filter
      })
        .catch(error => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message
          })
        })
        .finally(() => (this.loading = false))
    },

    /**
     * Download File
     */
    downloadFile (url) {
      redirectToNewTab(url)
    },

    /*
     * Formatted Transaction Status
     */
    getTransactionStatus (status = 0) {
      return {
        0: 'failed',
        1: 'success'
      }[status]
    },

    getTransactionStatusColor (status = 0) {
      return {
        0: 'danger',
        1: 'success'
      }[status]
    }
  }
}
</script>

<style scoped>

</style>
