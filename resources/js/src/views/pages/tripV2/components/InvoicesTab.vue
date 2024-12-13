<template>
  <div>
    <vx-card v-show="!toggleAddNewInvoicePopup">
      <div class="vx-row justify-between">
        <div class="vx-col flex items-center">
          <h3 v-text="'Customers Invoices'" />
          <Dropdown
            class="min-width-125 ml-4"
            v-model="filter.type"
            :options="status"
            dataKey="uniqueId"
            optionLabel="label"
            optionValue="value"
            placeholder="Select Status"
            @change="changeFilterType($event)"
          />
          <vs-button
            v-if="isManualInvoiceMode"
            color="primary"
            type="filled"
            class="ml-2"
            @click="addNewInvoice"
            >Add new invoice</vs-button
          >
          <vs-button
            v-if="isManualInvoiceMode"
            color="primary"
            type="border"
            icon-pack="feather"
            icon="icon-external-link"
            class="vs-con-loading__container ml-3"
            id="button-export-loading"
            @click.stop="exportExcel"
          >
            Export
          </vs-button>
        </div>
      </div>
      <div class="vx-row mt-5">
        <div class="vx-col w-full">
          <DataTable
            filterDisplay="row"
            :filters="filter"
            :value="items"
            :lazy="true"
            :paginator="true"
            :rows="rows"
            :rowHover="true"
            :totalRecords="totalRecords"
            :loading="loading"
            responsiveLayout="scroll"
            @page="onPage($event)"
            @sort="onSort($event)"
            :rowsPerPageOptions="[10, 25, 50]"
            columnResizeMode="expand"
            :selection.sync="selectedManualInvoices"
          >
            <Column
              field="invoiceNumber"
              header="Invoice #"
              :sortable="true"
              :showFilterMenu="false"
            >
              <template #body="slotProps">
                <span
                  @click="openLoadDetails(slotProps.data)"
                  :style="{ cursor: !isManual ? 'pointer' : 'default' }"
                >
                  {{ slotProps.data.invoiceNumber }}
                </span>
              </template>
              <template #filter="">
                <InputText
                  type="text"
                  v-model="filter['invoiceNumber']"
                  @input="onInputFilter"
                  class="p-column-filter w-full"
                />
              </template>
            </Column>

            <Column
              field="loadReference"
              header="Reference"
              :sortable="false"
              :showFilterMenu="false"
              :hidden="filter.type === 'manual'"
            >
              <template #body="slotProps">
                {{ slotProps.data.loadReference }}
              </template>
              <template #filter="">
                <InputText
                  type="text"
                  v-model="filter['loadReference']"
                  @input="onInputFilter"
                  style="width: 60px"
                  class="p-column-filter w-full"
                />
              </template>
            </Column>

            <Column
              field="customerName"
              header="Customers"
              :sortable="true"
              :showFilterMenu="false"
            >
              <template #body="slotProps">
                {{ slotProps.data.customerName }}
              </template>
              <template #filter="">
                <InputText
                  type="text"
                  v-model="filter['customerName']"
                  @input="onInputFilter"
                  style="width: 60px"
                  class="p-column-filter w-full"
                />
              </template>
            </Column>
            <Column
              field="salesRep"
              header="Sales Rep."
              :sortable="false"
              :showFilterMenu="false"
              :hidden="filter.type === 'singleLoad'"
            >
              <template #body="slotProps">
                {{ slotProps.data.salesRep }}
              </template>
              <template #filter="">
                <InputText
                  type="text"
                  v-model="filter['salesRep']"
                  @input="onInputFilter"
                  style="width: 60px"
                  class="p-column-filter w-full"
                />
              </template>
            </Column>
            <Column
              field="amount"
              header="Amount"
              :sortable="true"
              :showFilterMenu="false"
            >
              <template #body="slotProps">
                {{
                  `${formatAmountValue(
                    Number(slotProps.data.amount).toFixed(2)
                  )}`
                }}
              </template>
              <template #filter="">
                <InputText
                  type="text"
                  v-model="filter['amount']"
                  @input="onInputFilter"
                  style="width: 60px"
                  class="p-column-filter w-full"
                />
              </template>
            </Column>
            <Column
              field="paymentReceived"
              header="Paid Amount"
              :showFilterMenu="false"
              :hidden="filter.type === 'manual'"
            >
              <template #body="slotProps">
                {{
                  slotProps.data.paidAmount != null
                    ? `${formatAmountValue(
                        Number(slotProps.data.paidAmount).toFixed(2)
                      )}`
                    : ''
                }}
              </template>
            </Column>

            <Column
              field="firstShipDate"
              header="Ship Date"
              :sortable="false"
              :showFilterMenu="false"
              :hidden="filter.type === 'manual'"
            >
              <template #body="slotProps">
                {{ slotProps.data.firstShipDate }}
              </template>
              <template #filter="">
                <div class="clearable-date-picker p-column-filter w-full">
                  <flat-pickr
                    :value="filter['firstShipDateRange']"
                    class="date-picker"
                    :config="flat_pikr_config"
                    @on-change="
                      (dateArray) =>
                        onDateChange(dateArray, 'firstShipDateRange')
                    "
                  />
                  <vs-icon
                    v-if="filter.firstShipDateRange"
                    class="close-icon"
                    icon="close"
                    size="small"
                    @click="onDateClear('firstShipDateRange')"
                  />
                </div>
              </template>
            </Column>

            <Column
              field="lastDelDate"
              header="Del. Date"
              :sortable="false"
              :showFilterMenu="false"
              :hidden="filter.type === 'manual'"
            >
              <template #body="slotProps">
                {{ slotProps.data.lastDelDate }}
              </template>
              <template #filter="">
                <div class="clearable-date-picker p-column-filter w-full">
                  <flat-pickr
                    :value="filter['lastDelDateRange']"
                    class="date-picker"
                    :config="flat_pikr_config"
                    @on-change="
                      (dateArray) => onDateChange(dateArray, 'lastDelDateRange')
                    "
                  />
                  <vs-icon
                    v-if="filter.lastDelDateRange"
                    class="close-icon"
                    icon="close"
                    size="small"
                    @click="onDateClear('lastDelDateRange')"
                  />
                </div>
              </template>
            </Column>

            <Column
              field="issueDate"
              header="Issue Date"
              :sortable="true"
              :showFilterMenu="false"
            >
              <template #body="slotProps">
                {{ slotProps.data.issueDate }}
              </template>
              <template #filter="">
                <div class="clearable-date-picker p-column-filter w-full">
                  <flat-pickr
                    :value="filter['issueDateRange']"
                    class="date-picker"
                    :config="flat_pikr_config"
                    @on-change="
                      (dateArray) => onDateChange(dateArray, 'issueDateRange')
                    "
                  />
                  <vs-icon
                    v-if="filter.issueDateRange"
                    class="close-icon"
                    icon="close"
                    size="small"
                    @click="onDateClear('issueDateRange')"
                  />
                </div>
              </template>
            </Column>
            <Column
              field="dueDate"
              header="Due Date"
              :sortable="isManual"
              :showFilterMenu="false"
            >
              <template #body="slotProps">
                {{ slotProps.data.dueDate }}
              </template>
              <template #filter="" v-if="isManual">
                <div class="clearable-date-picker p-column-filter w-full">
                  <flat-pickr
                    v-model="filter['dueDate']"
                    class="date-picker"
                    @on-change="onInputFilter"
                  />
                  <vs-icon
                    v-if="filter.dueDate"
                    class="close-icon"
                    icon="close"
                    size="small"
                    @click="filter.dueDate = ''"
                  />
                </div>
              </template>
            </Column>
            <Column
              field="status"
              header="Status"
              :sortable="true"
              :showFilterMenu="false"
            >
              <template #body="slotProps">
                {{ getStatusLabel(slotProps.data.status) }}
              </template>
              <template #filter="{}">
                <v-select
                  :options="isManual ? manualStatus : loadStatusLabel"
                  placeholder="Any"
                  solo
                  :multiple="!isManual"
                  v-model="filterStatusesValue"
                  @input="onInputFilterStatus"
                  class="w-48"
                ></v-select>
              </template>
            </Column>
            <Column header="Action">
              <template #body="slotProps">
                <div
                  class="flex items-center space-x-2"
                  v-if="slotProps.data.type === 'manual'"
                >
                  <!-- <vs-button
                  type="filled"
                  color="#00cfe8"
                  @click="onEdit(slotProps.data)"
                  >Edit</vs-button
                > -->
                  <div class="flex items-center gap-1">
                    <vx-tooltip
                      class="mt-2"
                      text="Download PDF"
                      v-if="slotProps.data.url != ''"
                    >
                      <vs-icon
                        size="small"
                        icon="attachment"
                        style="cursor: pointer"
                        class="papper-clip-vertical"
                        @click.stop="downloadFile(slotProps.data.url)"
                      ></vs-icon>
                    </vx-tooltip>
                    <vx-tooltip text="Edit">
                      <vs-button
                        color="primary"
                        type="filled"
                        icon-pack="feather"
                        icon="icon-edit"
                        size="small"
                        radius
                        @click.stop="editInvoice(slotProps.data)"
                      ></vs-button>
                    </vx-tooltip>
                    <vx-tooltip text="Request for Payment">
                      <vs-button
                        color="warning"
                        type="filled"
                        icon="payment"
                        size="small"
                        radius
                        v-if="slotProps.data.status === 'requested'"
                        @click.stop="onConfirmRequestForPayment(slotProps.data)"
                      ></vs-button>
                    </vx-tooltip>
                    <vx-tooltip text="Mark as Paid">
                      <vs-button
                        color="success"
                        type="filled"
                        icon="done"
                        size="small"
                        radius
                        v-if="slotProps.data.status === 'requested'"
                        @click.stop="markAsPaid(slotProps.data)"
                      ></vs-button>
                    </vx-tooltip>
                    <vx-tooltip text="Delete Invoice">
                      <vs-button
                        color="danger"
                        type="filled"
                        icon="delete"
                        size="small"
                        radius
                        @click.stop="openDeleteConfirmation(slotProps.data)"
                      ></vs-button>
                    </vx-tooltip>
                  </div>
                </div>
                <div
                  class="flex items-center space-x-2"
                  v-else-if="
                    slotProps.data.type === 'singleLoad' &&
                    slotProps.data.status !== 'deleted'
                  "
                >
                  <template
                    v-if="loadPaymentStatus.includes(slotProps.data.status)"
                  >
                    <div class="flex items-center gap-1">
                      <vx-tooltip
                        text="Generate Invoice"
                        v-if="
                          slotProps.data.status === loadStatuses.delivered ||
                          slotProps.data.status === loadStatuses.invoice_created
                        "
                      >
                        <vs-button
                          color="#7474be"
                          type="filled"
                          icon="receipt"
                          size="small"
                          radius
                          @click.stop="showInvoicePrompt(slotProps.data)"
                        ></vs-button>
                      </vx-tooltip>
                      <vx-tooltip
                        text="Request for Payment"
                        v-if="
                          slotProps.data.status ===
                            loadStatuses.invoice_created ||
                          slotProps.data.status === loadStatuses.invoice_sent
                        "
                      >
                        <vs-button
                          color="warning"
                          type="filled"
                          icon="payment"
                          size="small"
                          radius
                          @click.stop="onConfirmRequestPayment(slotProps.data)"
                        ></vs-button>
                      </vx-tooltip>
                      <vx-tooltip
                        text="Mark as Paid"
                        v-if="
                          slotProps.data.status === loadStatuses.invoice_sent
                        "
                      >
                        <vs-button
                          color="success"
                          type="filled"
                          icon="done"
                          size="small"
                          radius
                          @click.stop="onConfirmPaymentReceived(slotProps.data)"
                        ></vs-button>
                      </vx-tooltip>
                    </div>
                  </template>
                </div>
              </template>
            </Column>
            <template #empty><b>No records found</b></template>
            <template #footer v-if="footerText">
              {{ footerText }}
            </template>
          </DataTable>
        </div>
      </div>
      <!-- Load Sidebar -->
      <load-sidebar
        v-show="isSidebarActive"
        :isSidebarActive="isSidebarActive"
        @closeSidebar="closeLoadSidebar"
        :data="sidebarData"
        @refreshCallingUi="refreshPageContent"
      />

      <!-- Payment Request Prompt -->
      <vs-prompt
        @cancel="resetPaymentRequestPrompt"
        @accept="requestForPayment"
        @close="resetPaymentRequestPrompt"
        :color="promptColor"
        accept-text="Yes"
        title="Payment Requested"
        :active.sync="paymentRequestPrompt.isActive"
        class="custom-prompt"
      >
        <p class="mb-3">{{ promptMessage }}</p>
        <div class="flex items-center">
          <p class="mb-0 mr-3">Email Subject :</p>
          <vs-input placeholder="Email" v-model="emailSubject" class="w-4/5" />
        </div>
      </vs-prompt>

      <vs-prompt
        accept-text="Yes"
        @cancel="resetInvoicePrompt"
        @accept="() => generateInvoice(invoicePrompt.selectedLoad)"
        @close="resetInvoicePrompt"
        title="Generate Invoice"
        :active.sync="invoicePrompt.isActive"
        class="invoice-generated-popup"
      >
        <div class="flex column items-center">
          <p class="mb-0 mr-3">Are you sure you want to generate invoice?</p>
        </div>
        <div
          class="w-full mt-3"
          v-if="
            !invoicePrompt.noFactoring &&
            this.allFactoringCompanies &&
            this.allFactoringCompanies.length > 0
          "
        >
          <div class="flex flex-row items-center justify-between">
            <div class="w-full relative">
              <vs-checkbox
                v-model="invoicePrompt.skipFactoring"
                class="factoring-checkbox"
              >
                Skip Factoring
              </vs-checkbox>
            </div>
          </div>
        </div>
      </vs-prompt>
    </vx-card>
    <transition name="slide-fade">
      <div v-if="toggleAddNewInvoicePopup" class="invoice-custom-sidebar">
        <vs-button
          class="mt-16"
          color="primary"
          size="small"
          @click="closeAddNewInvoicePopup"
          type="border"
        >
          Back
        </vs-button>
        <add-new-invoice
          ref="addNewInvoice"
          @getInvoicesList="fetchInvoices"
          @closeInvoicePopup="closeInvoicePopup"
          :toggleAddNewInvoicePopup="toggleAddNewInvoicePopup"
          :getInvoiceId="getInvoiceId"
          :isEditType="isEdit"
        ></add-new-invoice>
      </div>
    </transition>
    <vs-prompt
      accept-text="Yes"
      @cancel="resetPaymentReceivedPrompt"
      @accept="paymentReceived"
      @close="resetPaymentReceivedPrompt"
      color="primary"
      title="Payment Received"
      :active.sync="paymentReceivedPrompt.isActive"
      class="payment-received-prompt"
    >
      <p class="mb-3">
        Are you sure you want to mark as paid with the following amount?
      </p>
      <vx-input-group>
        <template slot="prepend">
          <div class="prepend-text bg-primary">
            <span>$</span>
          </div>
        </template>
        <vs-input type="number" placeholder="Amount" v-model="receivedAmount" />
      </vx-input-group>
    </vs-prompt>
  </div>
</template>

<script>
import {
  redirectToNewTab,
  formatAmount,
  sentenceCase,
  getApiErrorMsg,
} from '@/helpers/helper';
import config from '@/config/constants';
import dayjs from 'dayjs';
import { mapGetters } from 'vuex';
export default {
  name: 'InvoicesTab',
  components: {
    AddNewInvoice: () => import('./Invoice/AddNewInvoice.vue'),
    LoadSidebar: () => import('@/views/pages/dispatch/load/LoadSidebar.vue'),
  },
  computed: {
    ...mapGetters('factoring-company', ['allFactoringCompanies']),
    ...mapGetters('auth', ['isUserBrokerOrShipper', 'user']),
    getStatusLabel() {
      return (status) => {
        const statusLabels = this.isManualInvoiceMode
          ? config.status.manualInvoiceLabels
          : config.status.loadWithLabels;
        const matchingStatus = statusLabels.find(
          (item) => item.value === status
        );
        return matchingStatus ? matchingStatus.label : '';
      };
    },
    footerText() {
      const { from, to, total } = this.metaData || {};

      if (from && to && total) {
        return `Displaying ${from} to ${to} of ${total} records`;
      }

      return null;
    },
    isManualInvoiceMode() {
      return this.filter.type == 'manual';
    },
  },
  data() {
    return {
      isManual: false,
      manualStatus: ['requested', 'draft', 'paid'],
      //loadStatus:["requested","paid"],
      loadStatusLabel: [
        'Delivered',
        'Invoice Generated',
        'Payment Request',
        'Paid',
      ],
      loadStatusValue: {
        Delivered: 'delivered',
        'Invoice Generated': 'invoice_created',
        'Payment Request': 'payment_requested',
        Paid: 'invoice_paid',
      },
      items: [],
      totalRecords: 0,
      loading: false,
      rows: 25,
      metaData: null,
      toggleAddNewInvoicePopup: false,
      eventForServer: {
        page: 1,
        perPage: 25,
      },
      getInvoiceId: null,
      isEdit: false,

      filter: {
        type: 'singleLoad',
        status: '',
        statuses: [],
        invoiceNumber: '',
        customerName: '',
        amount: '',
        loadReference: '',
        issueDateRange: '',
        dueDate: '',
        firstShipDateRange: '',
        lastDelDateRange: '',
        salesRep: '',
      },
      filterStatusesValue: [],
      sortBy: null,
      status: [
        { id: 2, label: 'Load Invoices', value: 'singleLoad' },
        { id: 1, label: 'Invoices', value: 'manual' },
      ],
      loadPaymentStatus: [
        config.status.load.delivered,
        config.status.load.invoice_created,
        config.status.load.invoice_sent,
      ],
      loadStatuses: config.status.load,
      isSidebarActive: false,
      sidebarData: {},
      flat_pikr_config: {
        mode: 'range',
        dateFormat: 'Y-m-d',
      },
      promptMessage: '',
      promptColor: '',
      emailSubject: '',
      paymentRequestPrompt: {
        isActive: false,
        selectedLoad: null,
      },
      selectedManualInvoices: [],
      invoicePrompt: {
        isActive: false,
        selectedLoad: null,
        skipFactoring: false,
      },
      paymentReceivedPrompt: {
        isActive: false,
        selectedLoad: null,
      },
      receivedAmount: '',
    };
  },
  watch: {
    'filter.status': function (val) {
      this.filter.status = val ? val : '';
    },
  },
  mounted() {
    if (this.isUserBrokerOrShipper) {
      this.filter.type = 'singleLoad';
      this.status = [{ id: 2, label: 'Load Invoices', value: 'singleLoad' }];
    }
    if (
      this.user.admin_company_details.admin_company_detail_id ===
      config.hidefunctionalitiesForSpecificCompanyIds
    ) {
      this.filter.type = 'manual';
      this.isManual = true;
      this.status = [{ id: 1, label: 'Invoices', value: 'manual' }];
    }
    this.init();
  },
  methods: {
    changeFilterType(event) {
      if (event.value === 'manual') {
        this.isManual = true;
      } else {
        this.isManual = false;
      }
      this.filter.type = event.value;
      this.fetchInvoices();
    },
    onInputFilterStatus() {
      if (!this.isManual) {
        this.filter.statuses = this.filterStatusesValue.map(
          (status) => this.loadStatusValue[status]
        );
        this.filter.status = '';
      } else {
        this.filter.status = this.filterStatusesValue;
        this.filter.statuses = [];
      }
      this.fetchInvoices();
    },
    onSort(event) {
      var order;
      if (event.sortOrder === -1) {
        order = 'desc';
      } else {
        order = 'asc';
      }
      this.sortBy = { field: event.sortField, order: order };
      this.fetchInvoices();
    },
    onInputFilter() {
      this.fetchInvoices();
    },
    async openDeleteConfirmation(data) {
      await this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Delete Invoice',
        text: 'Are you sure you want to delete this invoice?',
        accept: () => this.deleteInvoice(data),
      });
    },
    resetInvoicePrompt() {
      this.invoicePrompt = {
        isActive: false,
        selectedLoad: null,
        noFactoring: null,
        skipFactoring: false,
      };
    },
    deleteInvoice(data) {
      this.$vs.loading();
      const payload = {
        invoiceId: data.id,
      };
      this.$store
        .dispatch('invoiceV2/deleteInvoice', payload)
        .then(() => {
          this.$vs.notify({
            color: 'success',
            title: 'Delete Invoice',
            text: 'Invoice deleted successfully',
          });
          this.init();
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.message,
          });
        })
        .finally(() => {
          this.$vs.loading.close();
        });
    },
    closeAddNewInvoicePopup() {
      this.toggleAddNewInvoicePopup = false;
    },
    closeInvoicePopup() {
      this.toggleAddNewInvoicePopup = false;
    },
    editInvoice(data) {
      this.getInvoiceId = data.id;
      this.isEdit = true;
      this.toggleAddNewInvoicePopup = true;
    },
    addNewInvoice() {
      this.isEdit = false;
      this.toggleAddNewInvoicePopup = true;
    },
    onConfirmRequestForPayment(data) {
      this.$vs.loading();
      this.$store
        .dispatch('invoiceV2/confirmRequestPayment', data.id)
        .then(() => {
          this.$vs.notify({
            color: 'success',
            title: 'Confirm Request Payment',
            text: 'Confirm request payment successfully',
          });
          this.init();
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.message,
          });
        })
        .finally(() => {
          this.$vs.loading.close();
        });
    },
    downloadFile(url) {
      if (url) {
        redirectToNewTab(url);
      }
    },
    markAsPaid(data) {
      this.$vs.loading();
      this.$store
        .dispatch('invoiceV2/markAsPaid', data.id)
        .then(() => {
          this.$vs.notify({
            color: 'success',
            title: 'Mark As Paid',
            text: 'Mark As Paid successfully',
          });
          this.init();
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.message,
          });
        })
        .finally(() => {
          this.$vs.loading.close();
        });
    },
    async fetchInvoices() {
      const { page, perPage } = this.eventForServer || {};
      try {
        const filter = { ...this.filter };
        if (filter.type === 'manual') {
          delete filter.firstShipDateRange;
          delete filter.lastDelDateRange;
        }

        if (filter.type != 'manual') {
          delete filter.salesRep;
        }

        if (filter.statuses && filter.statuses.length == 0) {
          delete filter.statuses;
        }

        if (filter.firstShipDateRange) {
          const selectedDates = filter.firstShipDateRange.split(' to ');
          filter.firstShipDateRange = {
            startDate: selectedDates[0],
            endDate: selectedDates[1],
          };
        }
        if (filter.lastDelDateRange) {
          const selectedDates = filter.lastDelDateRange.split(' to ');
          filter.lastDelDateRange = {
            startDate: selectedDates[0],
            endDate: selectedDates[1],
          };
        }
        if (filter.issueDateRange) {
          const selectedDates = filter.issueDateRange.split(' to ');
          filter.issueDateRange = {
            startDate: selectedDates[0],
            endDate: selectedDates[1],
          };
        }

        const {
          status,
          data: { result, payload },
        } = await this.$store.dispatch('invoiceV2/fetchInvoices', {
          filter,
          sortBy: this.sortBy,
          page,
          perPage,
        });

        if (status === 200 && result) {
          this.items = payload && payload.invoices ? payload.invoices : [];
          this.totalRecords = payload && payload.meta ? payload.meta.total : 0;
          this.metaData = payload && payload.meta ? payload.meta : null;
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
    async init() {
      this.loading = true;
      try {
        await this.fetchInvoices();
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'message',
        });
      } finally {
        this.loading = false;
      }
    },
    onPage(event) {
      const { page, rows } = event || {};
      this.eventForServer = {
        page: page ? page + 1 : 1,
        perPage: rows ? rows : 25,
      };
      this.fetchInvoices();
    },
    sentenceCase(str) {
      return sentenceCase(str);
    },
    formatAmountValue(amount) {
      return formatAmount(amount);
    },
    // Confirm Dialog
    onConfirm(options) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'primary',
        acceptText: 'Yes',
        ...options,
      });
    },
    onConfirmGenerateInvoice(load) {
      const options = {
        title: 'Generate Invoice',
        text: 'Are you sure you want to generate invoice?',
        accept: () => this.generateInvoice(load),
      };

      this.onConfirm(options);
    },
    showInvoicePrompt(load) {
      this.invoicePrompt = {
        isActive: true,
        selectedLoad: load,
        noFactoring: load && load.customer && load.noFactoring,
      };
    },
    async generateInvoice(load) {
      this.$vs.loading();

      const payload = {
        id: load.id,
      };

      if (this.invoicePrompt.skipFactoring) {
        payload.skipFactoring = this.invoicePrompt.skipFactoring;
      } else {
        payload.skipFactoring = false;
      }

      try {
        await this.$store.dispatch('load/generateInvoice', payload);
        await this.init();

        this.$vs.notify({
          color: 'primary',
          title: 'Invoice Generated',
          text: 'Invoice Generated successfully.',
        });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          time: 8000,
          text: error.response.data.message,
        });
      } finally {
        this.$vs.loading.close();
      }
    },
    onConfirmRequestPayment(load) {
      const amount = this.formatAmountValue(Number(load.amount).toFixed(2));
      let text = `Are you sure you want to send request for payment with amount ${amount} USD`;
      this.promptColor = 'warning';
      const noFactoring = load && load.customerNoFactoring;
      if (
        !noFactoring &&
        load.paymentOption != 'skipFactoring' &&
        this.allFactoringCompanies &&
        this.allFactoringCompanies.length > 0
      ) {
        this.promptMessage =
          text + ` to ${this.allFactoringCompanies[0].billing_email}?`;
      } else {
        if (load && load.customerEmail) {
          this.promptMessage = text + ` to ${load.customerEmail}?`;
        } else {
          this.promptMessage = text + `? (Missing customer billing email)`;
          this.promptColor = 'danger';
        }
      }
      this.emailSubject = `Invoice for Load ${
        load.loadReference ? load.loadReference : ''
      }`;
      this.showPaymentRequestPrompt(load);
    },

    async requestForPayment() {
      this.$vs.loading();

      const payload = {
        id: this.paymentRequestPrompt.selectedLoad.id,
        subject: this.emailSubject,
      };

      try {
        await this.$store.dispatch('load/requestForPayment', payload);
        await this.init();

        this.$vs.notify({
          color: 'primary',
          title: 'Payment Request',
          text: 'Request for Payment sent successfully.',
        });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
          time: 8000,
        });
      } finally {
        this.$vs.loading.close();
      }
    },

    // Payment Received
    onConfirmPaymentReceived(load) {
      this.paymentReceivedPrompt = {
        isActive: true,
        selectedLoad: load,
      };
      this.receivedAmount = load.amount.toString(); // convering number into string because input type number accepts string and if value is 0 then it doesn't accept 0 as a default value;
    },

    async paymentReceived() {
      this.$vs.loading();

      const payload = {
        id: this.paymentReceivedPrompt.selectedLoad.id,
        paidAmount: this.receivedAmount ? Number(this.receivedAmount) : null,
      };

      try {
        await this.$store.dispatch('load/paymentReceived', payload);
        await this.init();

        this.$vs.notify({
          color: 'primary',
          title: 'Payment Received',
          text: 'Payment received successfully.',
        });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      } finally {
        this.$vs.loading.close();
      }
    },
    openLoadDetails(loadData) {
      if (!this.isManual) {
        const { id } = loadData || {};
        if (id) {
          this.openLoadSidebar(id);
        }
      }
    },
    openLoadSidebar(loadId) {
      this.sidebarData = { loadId };
      this.isSidebarActive = true;
    },
    closeLoadSidebar() {
      this.isSidebarActive = false;
      this.sidebarData = {};
      this.refreshPageContent();
    },
    refreshPageContent() {
      this.fetchInvoices();
    },
    onDateChange(dateArray, type) {
      if (dateArray.length > 1 && type) {
        const dateString = `${dayjs(dateArray[0]).format(
          'YYYY-MM-DD'
        )} to ${dayjs(dateArray[1]).format('YYYY-MM-DD')}`;
        if (this.filter[type] === dateString) return;

        this.filter[type] = dateString;
        this.fetchInvoices();
      }
    },
    onDateClear(type) {
      if (type && this.filter[type] !== '') {
        this.filter[type] = '';
        this.fetchInvoices();
      }
    },
    showPaymentRequestPrompt(load = null) {
      this.paymentRequestPrompt = {
        isActive: true,
        selectedLoad: load,
      };
    },
    resetPaymentRequestPrompt() {
      this.paymentRequestPrompt = {
        isActive: false,
        selectedLoad: null,
      };
    },
    async exportExcel() {
      try {
        const payload = {
          filter: {
            type: 'manual',
            toDownload: true,
          },
        };
        this.$vs.loading({
          container: '#button-export-loading',
          scale: 0.45,
        });
        const { data } = await this.$store.dispatch(
          'invoiceV2/fetchInvoices',
          payload
        );
        window.location = data.payload.downloadUrl;
        return;
      } catch (error) {
        console.log(error);
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
        this.$vs.loading.close('#button-export-loading > .con-vs-loading');
      }
    },
    resetPaymentReceivedPrompt() {
      this.paymentReceivedPrompt = {
        isActive: false,
        selectedLoad: null,
      };
      this.receivedAmount = '';
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .p-sortable-column,
  .p-datatable-tbody > tr > td {
    @apply truncate;
  }
  .p-datatable-responsive-scroll > .p-datatable-wrapper {
    overflow-x: auto;
  }
}
.invoice-custom-sidebar {
  height: 100%;
  position: absolute;
  width: 100%;
  overflow-y: auto;
  top: 0;
  z-index: 100;
  background: #fff;
  padding: 20px;
  min-height: 100vh;
}

.min-width-125 {
  min-width: 125px;
}

.date-picker {
  max-width: 120px;
  text-overflow: ellipsis !important;
}

.clearable-date-picker {
  position: relative;
  .close-icon {
    position: absolute;
    right: -20px;
    top: 25%;
    cursor: pointer;
  }
}
.invoice-generated-popup .vs-dialog {
  transition: all 0.2s;
  z-index: 100;
  width: calc(100% - 20px);
  margin: 10px;
  max-width: 400px;
  border-radius: 6px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  animation: rebound 0.3s;
}
</style>

<style lang="scss">
.custom-prompt .vs-dialog {
  max-width: 700px;
}
</style>
