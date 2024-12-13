<template>
  <vx-card title="Invoice" class="h-full w-full">
    <DataTable :value="items.data"
               :lazy="true"
               :paginator="true"
               :rows="rows"
               :rowHover="true"
               :totalRecords="totalRecords"
               :filters="filters"
               :loading="loading"
               :scrollable="false"
               responsiveLayout="scroll"    
               @sort="onSort($event)"
               @page="onPage($event)"
               :rowsPerPageOptions="rowsPerPageOptions"
               >

      <template #header>
        <div class="w-full flex items-center justify-end">
          <div style="min-width: 14rem;">
            <flat-pickr v-model="selectedDateRange"
                        :config="flat_pikr_config"
                        class="w-full"/>
          </div>
        </div>
      </template>

      <template #empty>
        No records found
      </template>

      <Column field="load_unique_id" header="Load #" :sortable="true">
        <template #body="slotProps">
          {{ slotProps.data.load_unique_id }}
        </template>

        <template #filter>
          <InputText type="text"
                     v-model="filters['load_unique_id']"
                     @input="onInputFilter"
                     class="p-column-filter w-full"/>
        </template>
      </Column>

      <Column field="status" header="Status" :sortable="true">
        <template #body="{data}">
          <div class="flex items-center justify-center">
            <vx-tooltip :text="formattedLoadStatus[data.status]">
              <template v-if="data.status == 'invoice_created'">
                <vs-chip transparent color="warning">
                  <feather-icon icon="FileTextIcon" svgClasses="h-4 w-4"/>
                </vs-chip>
              </template>

              <template v-if="data.status == 'payment_requested'">
                <vs-chip transparent color="primary">
                  <feather-icon icon="CreditCardIcon" svgClasses="h-4 w-4"/>
                </vs-chip>
              </template>

              <template v-if="data.status == 'invoice_paid'">
                <vs-chip transparent color="success">
                  <feather-icon icon="CheckCircleIcon" svgClasses="h-4 w-4"/>
                </vs-chip>
              </template>
            </vx-tooltip>
          </div>
        </template>

        <!--              <template #filter>-->
        <!--                <InputText type="text"-->
        <!--                           v-model="filters['status']"-->
        <!--                           @input="onInputFilter"-->
        <!--                           class="p-column-filter w-full"/>-->
        <!--              </template>-->
      </Column>

      <Column field="customer_company_name" header="Customer" :sortable="true">
        <template #body="slotProps">
          {{ slotProps.data.customer.company_name }}
        </template>

        <template #filter>
          <InputText type="text"
                     v-model="filters['customer_company_name']"
                     @input="onInputFilter"
                     class="p-column-filter w-full"/>
        </template>
      </Column>

      <Column field="customer_billing_email" header="Email" :sortable="true">
        <template #body="slotProps">
          {{ slotProps.data.customer.billing_email }}
        </template>

        <template #filter>
          <InputText type="text"
                     v-model="filters['customer_billing_email']"
                     @input="onInputFilter"
                     class="p-column-filter w-full"/>
        </template>
      </Column>

      <Column field="total_amount" header="Amount" :sortable="true">
        <template #body="slotProps">
          {{ slotProps.data.total_amount }}
        </template>

        <template #filter>
          <InputText type="text"
                     v-model="filters['total_amount']"
                     @input="onInputFilter"
                     class="p-column-filter w-full"/>
        </template>
      </Column>

      <Column field="invoice_generated_at" header="Issue Date" :sortable="true">
        <template #body="slotProps">
          {{ slotProps.data.invoice_generated_at }}
        </template>

        <template #filter>
          <InputText type="text"
                     v-model="filters['invoice_generated_at']"
                     @input="onInputFilter"
                     class="p-column-filter w-full"/>
        </template>
      </Column>

      <Column field="invoice_due_date_at" header="Due Date" :sortable="true">
        <template #body="slotProps">
          {{ slotProps.data.invoice_due_date_at }}
        </template>

        <template #filter>
          <InputText type="text"
                     v-model="filters['invoice_due_date_at']"
                     @input="onInputFilter"
                     class="p-column-filter w-full"/>
        </template>
      </Column>

      <Column header="Action">
        <template #body="slotProps">
          <div class="flex items-center space-x-2">
            <vx-tooltip text="Download Invoice">
              <vs-button color="primary"
                         type="filled"
                         icon-pack="feather"
                         icon="icon-download"
                         size="small"
                         radius
                         @click.stop="downloadFile(slotProps.data.invoice_file_url)"></vs-button>
            </vx-tooltip>

            <template v-if="loadPaymentStatus.includes(slotProps.data.status)">
              <template v-if="slotProps.data.status == loadStatuses.invoice_created">
                <vx-tooltip text="Request for Payment">
                  <vs-button color="warning"
                             type="filled"
                             icon-pack="feather"
                             icon="icon-credit-card"
                             size="small"
                             radius
                             @click.stop="onConfirmRequestForPayment(slotProps.data)"></vs-button>
                </vx-tooltip>
              </template>

              <template v-if="slotProps.data.status == loadStatuses.invoice_sent">
                <vx-tooltip text="Payment Received">
                  <vs-button color="success"
                             type="filled"
                             icon-pack="feather"
                             icon="icon-check-circle"
                             size="small"
                             radius
                             @click.stop="onConfirmPaymentReceived(slotProps.data)"></vs-button>
                </vx-tooltip>
              </template>
            </template>
          </div>
        </template>
      </Column>

      <template #footer>
        In total there are {{ totalRecords }} items.
      </template>
    </DataTable>
  </vx-card>
</template>

<script>
import DatatableMixin from '@/mixins/datatableMixin'
import config from '@/config/constants'
import { redirectToNewTab, formatDate } from '@/helpers/helper'
import { mapState } from 'vuex'

export default {
  name: 'LoadDatatable',

  mixins: [DatatableMixin],

  data () {
    return {
      loadStatuses: config.status.load,
      loadPaymentStatus: [
        config.status.load.delivered,
        config.status.load.invoice_created,
        config.status.load.invoice_sent
      ],
      formattedLoadStatus: {
        [config.status.load.open]: 'Open',
        [config.status.load.assign]: 'Assigned',
        [config.status.load.in_transit]: 'In Transit',
        [config.status.load.delivered]: 'Delivered',
        [config.status.load.invoice_created]: 'Invoice Generated',
        [config.status.load.invoice_sent]: 'Payment Requested',
        [config.status.load.invoice_paid]: 'Paid'
      },
      filters: {
        load_unique_id: '',
        status: '',
        customer_company_name: '',
        customer_billing_email: '',
        total_amount: '',
        invoice_generated_at: '',
        invoice_due_date_at: '',
        startDate: '',
        endDate: ''
      },
      selectedDateRange: '',

      // Flate Pikr Config
      flat_pikr_config: {
        mode: 'range',
        defaultDate: [
          new Date(),
          (new Date()).fp_incr(14)
        ]
      }
    }
  },

  async created () {
    // select default date range
    this.selectedDateRange = `${formatDate(new Date())} to ${formatDate((new Date()).fp_incr(14))}`
  },

  computed: {
    ...mapState('dashboard', {items: 'loads'})
  },

  watch: {
    selectedDateRange: {
      immediate: true,
      handler (newSelectedDateRange) {
        const dates = newSelectedDateRange.split(' to ')

        if (dates.length <= 1) return

        this.filters.startDate = dates[0]
        this.filters.endDate = dates[1]

        // Get Load Datatable
        this.commonApiCall(this.filters)
      }
    }
  },

  methods: {
    async commonApiCall (filter = {}) {
      this.loading = true

      try {
        await this.$store.dispatch('dashboard/getLoadDatatable', {
          eventForServer: this.eventForServer,
          filter
        })
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        })
      } finally {
        this.loading = false
      }
    },

    /**
     * Download
     */
    downloadFile (url) {
      redirectToNewTab(url)
    },

    // Confirm Dialog
    onConfirm (options) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'primary',
        acceptText: 'Yes',
        ...options
      })
    },

    // Request for Payment
    onConfirmRequestForPayment (load) {
      const options = {
        title: 'Payment Request',
        text: 'Are you sure. You want to sent request for payment.',
        accept: () => this.requestForPayment(load)
      }

      this.onConfirm(options)
    },

    async requestForPayment (load) {
      this.$vs.loading()

      const payload = {
        id: load.load_id
      }

      try {
        await this.$store.dispatch('load/requestForPayment', payload)

        this.$vs.notify({
          color: 'primary',
          title: 'Payment Request',
          text: 'Request for Payment sent successfully.'
        })
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        })
      } finally {
        this.$vs.loading.close()

        await this.commonApiCall(this.filters)
      }
    },

    // Payment Received
    onConfirmPaymentReceived (load) {
      const options = {
        title: 'Payment Received',
        text: 'Are you sure. You want to mark as payment received.',
        accept: () => this.paymentReceived(load)
      }

      this.onConfirm(options)
    },

    async paymentReceived (load) {
      this.$vs.loading()

      const payload = {
        id: load.load_id
      }

      try {
        await this.$store.dispatch('load/paymentReceived', payload)

        this.$vs.notify({
          color: 'primary',
          title: 'Payment Received',
          text: 'Payment received successfully.'
        })
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        })
      } finally {
        this.$vs.loading.close()

        await this.commonApiCall(this.filters)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .p-datatable-tbody > tr > td {
    @apply truncate
  }
}
</style>
