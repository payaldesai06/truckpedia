<template>
  <div class="vx-col w-full pt-8">
    <DataTable
      :value="items.data"
      :selection.sync="selectedLoadsList"
      :lazy="true"
      :paginator="true"
      :rows="rows"
      :rowHover="true"
      :totalRecords="totalRecords"
      filterDisplay="row"
      :loading="loading"
      responsiveLayout="scroll"
      columnResizeMode="expand"
      class="p-datatable-sm"
      :resizableColumns="true"
      @sort="onSort(handleSortParam($event))"
      @page="onPage($event)"
      :rowsPerPageOptions="rowsPerPageOptions"
    >
      <template #empty> No records found </template>
      <Column
        :hidden="!canAccess(roleModify) || items.data.length ? false : true"
        selectionMode="multiple"
        :headerStyle="{ width: '3em' }"
      ></Column>

      <Column
        :hidden="!selectedColumnData.includes('Load')"
        :showFilterMenu="false"
        field="load_unique_id"
        header="Load"
        :sortable="true"
      >
        <template #body="slotProps">
          {{ slotProps.data.load_unique_id }}
        </template>
        <template #filter="">
          <InputText
            type="text"
            v-model="filters['load_unique_id']"
            @input="debouncedOnInputFilter"
            style="width: 60px"
            class="p-column-filter"
          />
        </template>
      </Column>

      <Column
        :hidden="checkColumnVisibility('Load Reference')"
        :showFilterMenu="false"
        field="refrence_id"
        header="Load Reference"
        :sortable="true"
      >
        <template #body="slotProps">
          <div class="dispatch-list-limit-column-width">
            {{ slotProps.data.refrence_id }}
          </div>
        </template>
        <template #filter>
          <InputText
            type="text"
            v-model="filters['refrence_id']"
            @input="debouncedOnInputFilter"
            class="p-column-filter"
          />
        </template>
      </Column>

      <Column
        :hidden="
          !showCompanyInternalReferenceForCompanies ||
          checkColumnVisibility('Internal Reference')
        "
        :showFilterMenu="false"
        field="companyInternalReference"
        header="Internal Reference"
        :sortable="true"
      >
        <template #body="slotProps">
          <div class="dispatch-list-limit-column-width">
            {{ slotProps.data.companyInternalReference }}
          </div>
        </template>
        <template #filter>
          <InputText
            type="text"
            v-model="filters['companyInternalReference']"
            @input="debouncedOnInputFilter"
            class="p-column-filter"
          />
        </template>
      </Column>

      <Column
        :hidden="checkColumnVisibility('Ship Date')"
        :showFilterMenu="false"
        field="shipping_date"
        header="Ship Date"
        :sortable="true"
      >
        <template #body="slotProps">
          {{ slotProps.data.ship_date }} <br />
          {{
            formatShipDeliveryTime(
              slotProps.data.ship_time,
              slotProps.data.ship_end_time
            )
          }}
        </template>
        <template #filter>
          <div class="clearable-date-picker p-column-filter w-full">
            <flat-pickr
              v-model="filters['shipping_date']"
              class="date-picker input-filter"
              @on-change="debouncedOnInputFilter($event, 'datePicker')"
              :config="flat_pikr_config"
            />
            <vs-icon
              v-if="filters['shipping_date']"
              class="close-icon"
              icon="close"
              size="small"
              @click="filters['shipping_date'] = ''"
            />
          </div>
        </template>
      </Column>

      <Column
        :hidden="checkColumnVisibility('Del. Date')"
        :showFilterMenu="false"
        field="delivery_date"
        header="Del. Date"
        :sortable="true"
      >
        <template #body="slotProps">
          {{ slotProps.data.delivery_date }} <br />
          {{
            formatShipDeliveryTime(
              slotProps.data.delivery_time,
              slotProps.data.delivery_end_time
            )
          }}
        </template>
        <template #filter>
          <div class="clearable-date-picker p-column-filter w-full">
            <flat-pickr
              v-model="filters['delivery_date']"
              class="date-picker input-filter"
              @on-change="debouncedOnInputFilter($event, 'datePicker')"
              :config="flat_pikr_config"
            />
            <vs-icon
              v-if="filters['delivery_date']"
              class="close-icon"
              icon="close"
              size="small"
              @click="filters['delivery_date'] = ''"
            />
          </div>
        </template>
      </Column>

      <Column
        :hidden="checkColumnVisibility('Customer')"
        :showFilterMenu="false"
        field="customer"
        header="Customer"
        :sortable="true"
      >
        <template #body="slotProps">
          <div class="dispatch-list-limit-column-width">
            {{ slotProps.data.customer.company_name }}
          </div>
        </template>
        <template #filter>
          <InputText
            type="text"
            v-model="filters['customer']"
            @input="debouncedOnInputFilter"
            class="p-column-filter"
          />
        </template>
      </Column>

      <Column
        :hidden="checkColumnVisibility('Pick up')"
        :showFilterMenu="false"
        field="pick_up"
        header="Pick up"
        :sortable="true"
      >
        <template #body="slotProps">
          {{ slotProps.data.pick_up }}
        </template>
        <template #filter>
          <InputText
            type="text"
            v-model="filters['pick_up']"
            @input="debouncedOnInputFilter"
            class="p-column-filter"
          />
        </template>
      </Column>

      <Column
        :hidden="checkColumnVisibility('Delivery')"
        :showFilterMenu="false"
        field="delivery"
        header="Delivery"
        :sortable="true"
      >
        <template #body="slotProps">
          {{ slotProps.data.delivery }}
        </template>
        <template #filter>
          <InputText
            type="text"
            v-model="filters['delivery']"
            @input="debouncedOnInputFilter"
            class="p-column-filter"
          />
        </template>
      </Column>

      <!-- Pickup Number field -->
      <Column
        :hidden="checkColumnVisibility('Pickup No.')"
        :showFilterMenu="false"
        field="pickupNumber"
        header="Pickup No."
        :sortable="false"
      >
        <template #body="slotProps">
          {{ slotProps.data.pickupNumber }}
        </template>
        <template #filter>
          <InputText
            type="text"
            v-model="filters['pickupNumber']"
            @input="debouncedOnInputFilter"
            class="p-column-filter"
          />
        </template>
      </Column>

      <!-- Delivery Number Field -->
      <Column
        :hidden="checkColumnVisibility('Delivery No.')"
        :showFilterMenu="false"
        field="deliveryNumber"
        header="Delivery No."
        :sortable="false"
      >
        <template #body="slotProps">
          {{ slotProps.data.deliveryNumber }}
        </template>
        <template #filter>
          <InputText
            type="text"
            v-model="filters['deliveryNumber']"
            @input="debouncedOnInputFilter"
            class="p-column-filter"
          />
        </template>
      </Column>

      <!-- Only for warehouse_operator -->
      <Column
        :hidden="userRole != 'warehouse_operator'"
        :showFilterMenu="false"
        field="shipping_date"
        header="Pick up & Appt"
        :sortable="true"
      >
        <template #body="slotProps">
          {{ slotProps.data.pick_up }} <br />
          {{ formatShipDeliveryDate(slotProps.data.ship_date) }}

          {{ slotProps.data.ship_time ? '@' : '' }}
          {{
            formatShipDeliveryTime(
              slotProps.data.ship_time,
              slotProps.data.ship_end_time
            )
          }}
        </template>
        <template #filter>
          <div class="clearable-date-picker p-column-filter w-full">
            <flat-pickr
              v-model="filters['shipping_date']"
              class="date-picker input-filter"
              @on-change="debouncedOnInputFilter($event, 'datePicker')"
              :config="flat_pikr_config"
            />
            <vs-icon
              v-if="filters['shipping_date']"
              class="close-icon"
              icon="close"
              size="small"
              @click="filters['shipping_date'] = ''"
            />
          </div>
        </template>
      </Column>

      <Column
        :hidden="userRole != 'warehouse_operator'"
        :showFilterMenu="false"
        field="delivery_date"
        header="Delivery & Appt"
        :sortable="true"
      >
        <template #body="slotProps">
          {{ slotProps.data.delivery }} <br />
          {{ formatShipDeliveryDate(slotProps.data.delivery_date) }}
          {{ slotProps.data.delivery_time ? '@' : '' }}
          {{
            formatShipDeliveryTime(
              slotProps.data.delivery_time,
              slotProps.data.delivery_end_time
            )
          }}
        </template>
        <template #filter>
          <div class="clearable-date-picker p-column-filter w-full">
            <flat-pickr
              v-model="filters['delivery_date']"
              class="date-picker input-filter"
              @on-change="debouncedOnInputFilter($event, 'datePicker')"
              :config="flat_pikr_config"
            />
            <vs-icon
              v-if="filters['delivery_date']"
              class="close-icon"
              icon="close"
              size="small"
              @click="filters['delivery_date'] = ''"
            />
          </div>
        </template>
      </Column>
      <!-- Only for warehouse_operator -->

      <Column
        :hidden="!selectedColumnData.includes('Drivers')"
        :showFilterMenu="false"
        field="driver_name"
        header="Drivers"
        :sortable="false"
      >
        <template #body="slotProps">
          <div class="dispatch-list-limit-column-width">
            {{ formatDriverNames(slotProps.data.drivers) }}
          </div>
        </template>

        <template #filter>
          <InputText
            type="text"
            v-model="filters['driver_name']"
            @input="debouncedOnInputFilter"
            class="p-column-filter"
          />
        </template>
      </Column>
      <!-- Truck Number Field -->
      <Column
        :hidden="checkColumnVisibility('Trucks')"
        :showFilterMenu="false"
        field="truck_number"
        header="Trucks"
        :sortable="false"
      >
        <template #body="slotProps">
          {{ formatTrucksNumbers(slotProps.data.drivers) }}
        </template>
        <!-- <template #filter>
          <InputText
            type="text"
            v-model="filters['truck_number']"
            @input="debouncedOnInputFilter"
            class="p-column-filter"
          />
        </template> -->
      </Column>
      <!-- Trailer Number Field -->
      <Column
        :hidden="checkColumnVisibility('Trailers')"
        :showFilterMenu="false"
        field="trailer_number"
        header="Trailer"
        :sortable="false"
      >
        <template #body="slotProps">
          {{ formatTrailerNumbers(slotProps.data.drivers) }}
        </template>
        <!-- <template #filter>
          <InputText
            type="text"
            v-model="filters['trailer_number']"
            @input="debouncedOnInputFilter"
            class="p-column-filter"
          />
        </template> -->
      </Column>

      <Column
        :hidden="checkColumnVisibility('Notes')"
        :showFilterMenu="false"
        field="dispatcher_notes"
        header="Notes"
        :sortable="false"
      >
        <template #body="slotProps">
          <textarea
            style="width: 120px"
            :value="slotProps.data.dispatcher_notes"
            @input="onChangeNote($event.target.value, slotProps.data)"
            :disabled="!canAccess(roleModify)"
            class="p-column-filter dispatch-list-cs-textarea"
          />
        </template>
      </Column>

      <Column
        :hidden="checkColumnVisibility('Load Status')"
        :showFilterMenu="false"
        field="status"
        header="Load Status"
        :sortable="true"
      >
        <template #body="slotProps">
          <div class="dispatch-list-limit-column-width">
            {{ getStatusLabel(slotProps.data) }}
          </div>
        </template>
        <template #filter>
          <Dropdown
            v-model="filters['status']"
            @change="debouncedOnInputFilter($event, 'dropdown')"
            :options="loadStatusesDropdownValues"
            optionLabel="label"
            optionValue="value"
            class="p-column-filter filter-dropdown"
            :showClear="true"
            appendTo="body"
          />
        </template>
      </Column>

      <Column
        v-if="
          canAccess(roleModify) &&
          customization.show_qbd_invoice_sync_status_on_list
        "
        :showFilterMenu="false"
        field="qbdSyncStatus"
        header="QBD Sync Status"
        :sortable="false"
      >
        <template #body="slotProps">
          <div class="dispatch-list-limit-column-width">
            {{
              computeQbdSyncStatus(
                slotProps.data.qbdSingleInvoices,
                slotProps.data.qbdMassInvoices
              )
            }}
          </div>
        </template>
      </Column>

      <Column header="Action" :hidden="!selectedColumnData.includes('Action')">
        <template #body="slotProps" v-if="canAccess(roleModify)">
          <div class="flex items-center space-x-2">
            <template v-if="slotProps.data.loadPods">
              <vx-tooltip
                :text="`View POD`"
                v-for="(loadImage, ix) in slotProps.data.loadPods"
                :key="ix"
                style="display: flex; align-items: end"
                class="mt-1"
              >
                <vs-icon
                  size="small"
                  icon="attachment"
                  class="papper-clip-vertical"
                  @click="openLoadPOD(loadImage)"
                >
                </vs-icon>
              </vx-tooltip>
            </template>
            <vx-tooltip
              v-else-if="slotProps.data.podAvailable"
              class="mt-2"
              text="POD available"
            >
              <vs-icon
                size="small"
                icon="attachment"
                class="papper-clip-vertical"
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
                @click.stop="editData(slotProps.data)"
              ></vs-button>
            </vx-tooltip>

            <!--- FOR TEST ONLY!!! --->
            <template v-if="loadStatus.value != 'deleted'">
              <vx-tooltip text="Sync to QuickBooks Online" v-if="showQboButton">
                <vs-button
                  v-if="
                    !slotProps.data.invoice_file_name ||
                    !slotProps.data.invoice_file_name.startsWith('mass-invoice')
                  "
                  color="success"
                  type="filled"
                  icon="cloud"
                  size="small"
                  radius
                  @click.stop="onSyncToQuickbooks(slotProps.data)"
                ></vs-button>
              </vx-tooltip>

              <vx-tooltip
                text="Sync to QuickBooks Desktop"
                v-if="showQbdButton"
              >
                <vs-button
                  v-if="
                    !slotProps.data.invoice_file_name ||
                    !slotProps.data.invoice_file_name.startsWith('mass-invoice')
                  "
                  color="success"
                  type="filled"
                  icon="desktop_windows"
                  size="small"
                  radius
                  @click.stop="onSyncToQbd(slotProps.data)"
                ></vs-button>
              </vx-tooltip>

              <template
                v-if="loadPaymentStatus.includes(slotProps.data.status)"
              >
                <template
                  v-if="
                    (!slotProps.data.invoice_file_name ||
                      !slotProps.data.invoice_file_name.startsWith(
                        'mass-invoice'
                      )) &&
                    (slotProps.data.status == loadStatuses.delivered ||
                      slotProps.data.status == loadStatuses.invoice_created)
                  "
                >
                  <vx-tooltip text="Generate Invoice">
                    <vs-button
                      color="#7474be"
                      type="filled"
                      icon="receipt"
                      size="small"
                      radius
                      @click.stop="showInvoicePrompt(slotProps.data)"
                    ></vs-button>
                  </vx-tooltip>
                </template>

                <template
                  v-if="
                    (!slotProps.data.invoice_file_name ||
                      !slotProps.data.invoice_file_name.startsWith(
                        'mass-invoice'
                      )) &&
                    (slotProps.data.status == loadStatuses.invoice_created ||
                      slotProps.data.status == loadStatuses.invoice_sent)
                  "
                >
                  <vx-tooltip text="Request for Payment">
                    <vs-button
                      color="warning"
                      type="filled"
                      icon="payment"
                      size="small"
                      radius
                      @click.stop="onConfirmRequestForPayment(slotProps.data)"
                    ></vs-button>
                  </vx-tooltip>
                </template>

                <template
                  v-if="slotProps.data.status == loadStatuses.invoice_sent"
                >
                  <vx-tooltip text="Payment Received">
                    <vs-button
                      color="success"
                      type="filled"
                      icon-pack="feather"
                      icon="icon-check-circle"
                      size="small"
                      radius
                      @click.stop="showPaymentReceivedPrompt(slotProps.data)"
                    ></vs-button>
                  </vx-tooltip>
                </template>
              </template>
            </template>
          </div>
        </template>
        <template #body="slotProps" v-else-if="!canAccess(roleModify)">
          <div class="flex items-center space-x-2">
            <vx-tooltip text="View">
              <vs-button
                color="success"
                type="filled"
                icon-pack="feather"
                icon="icon-eye"
                size="small"
                radius
                @click.stop="viewData(slotProps.data)"
              ></vs-button>
            </vx-tooltip>
          </div>
        </template>
      </Column>
      <template #footer>
        In total there are {{ totalRecords }} items.
      </template>
    </DataTable>
    <vs-prompt
      accept-text="Yes"
      @cancel="resetPaymentRequestPrompt"
      @accept="requestForPayment"
      @close="resetPaymentRequestPrompt"
      :color="promptColor"
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
import DatatableMixin from '@/mixins/datatableMixin';
import config from '@/config/constants';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'List',

  mixins: [DatatableMixin],

  props: [
    'loadStatus',
    'selectedDateRange',
    'selectedColumn',
    'direction',
    'selectedTag',
  ],

  data() {
    return {
      showQboButton: true,
      showQbdButton: true,
      selectedLoadsList: [],
      noteValue: null,
      debounceTimeout: null,
      debounceMap: new Map(),
      loadStatuses: config.status.load,
      loadStatusesDropdownValues: config.status.loadWithLabels,
      selectedColumnData: this.selectedColumn,
      rowsPerPageOptions: [10, 25, 50],
      loadPaymentStatus: [
        config.status.load.delivered,
        config.status.load.invoice_created,
        config.status.load.invoice_sent,
      ],
      formattedLoadStatus: {
        [config.status.load.open]: 'Open',
        [config.status.load.assign]: 'Assigned',
        [config.status.load.in_transit]: 'In Transit',
        [config.status.load.delivered]: 'Delivered',
        [config.status.load.invoice_created]: 'Invoice Generated',
        [config.status.load.invoice_sent]: 'Payment Requested',
        [config.status.load.invoice_paid]: 'Paid',
        [config.status.load.deleted]: 'Deleted',
        [config.status.load.canceled]: 'Canceled',
      },
      roleModify: [config.roles.admin, config.roles.dispatcher],
      filters: {
        load_unique_id: '',
        refrence_id: '',
        companyInternalReference: '',
        shipping_date: '',
        delivery_date: '',
        customer: '',
        pick_up: '',
        delivery: '',
        status: null,
        loadStatusWith: '',
        startDate: '',
        endDate: '',
        driver_name: '',
        direction: '',
        pickupNumber: '',
        deliveryNumber: '',
        // truck_number: '',
        // trailer_number: '',
      },
      promptMessage: '',
      promptColor: '',
      emailSubject: '',
      receivedAmount: '',
      paymentRequestPrompt: {
        isActive: false,
        selectedLoad: null,
      },
      invoicePrompt: {
        isActive: false,
        selectedLoad: null,
        skipFactoring: false,
      },
      paymentReceivedPrompt: {
        isActive: false,
        selectedLoad: null,
      },
      flat_pikr_config: {
        altFormat: 'm/d/y',
        dateFormat: 'Y-m-d',
        altInput: true,
      },
    };
  },

  watch: {
    selectedTag(newSelectedTag) {
      if (newSelectedTag.tag_id !== undefined) {
        this.filters.tag_id = newSelectedTag.tag_id;
      } else {
        delete this.filters.tag_id;
      }
      this.commonApiCall(this.filters);
    },

    direction(newSelectedDirection) {
      const newValue = newSelectedDirection.value
        ? newSelectedDirection.value == config.all
          ? ''
          : newSelectedDirection.value
        : '';
      if (this.filters.direction != newValue) {
        this.filters.direction = newValue;
        this.commonApiCall(this.filters);
      }
    },

    loadStatus(newSelectedLoadStatus) {
      const newValue = newSelectedLoadStatus.value
        ? newSelectedLoadStatus.value == config.all
          ? ''
          : newSelectedLoadStatus.value
        : '';
      if (this.filters.loadStatusWith != newValue) {
        this.filters.loadStatusWith = newValue;
        this.commonApiCall(this.filters);
      }
    },

    selectedColumn(selectedColumn) {
      this.selectedColumnData = selectedColumn;
    },

    selectedDateRange: {
      immediate: true,
      handler(newSelectedDateRange) {
        const dates = newSelectedDateRange.split(' to ');
        if (dates.length <= 1) return;
        this.filters.startDate = dates[0];
        this.filters.endDate = dates[1]; // ? dates[1] : dates[0];
        // Default entry to load table when open this page.
        // Be careful, the above watchers could cause the commonApiCall()
        // to be called multiple times!
        this.commonApiCall(this.filters);
      },
    },

    isLoading(newIsLoading) {
      // console.log(`Watching: ${newIsLoading}`)
      if (newIsLoading) {
        this.commonApiCall(this.filters);
      }
    },

    selectedLoadsList() {
      this.$emit('updateSelectedLoadsList', this.selectedLoadsList);
    },
  },

  computed: {
    ...mapState('load', { items: 'loads', isLoading: 'loading' }),
    ...mapGetters('auth', ['userRole']),
    ...mapGetters('quickbooks', ['qboConnectionStatusAll']),
    ...mapGetters('qbd', ['qbdConnectionStatusAll']),
    ...mapGetters('customization', ['customization']),
    ...mapGetters('factoring-company', ['allFactoringCompanies']),

    showCompanyInternalReferenceForCompanies() {
      return config.showCompanyInternalReferenceForCompanies.includes(
        this.user.admin_company_detail_id
      );
    },
  },

  created() {
    if (!this.qboConnectionStatusAll) {
      this.getQboConnectionStatusAll();
    } else {
      this.showQboButton = this.computeShowQbButton(
        this.qboConnectionStatusAll
      );
    }

    if (!this.qbdConnectionStatusAll) {
      this.getQbdConnectionStatusAll();
    } else {
      this.showQbdButton = this.computeShowQbButton(
        this.qbdConnectionStatusAll
      );
    }
  },

  methods: {
    computeQbdSyncStatus(qbdSingleInvoices, qbdMassInvoices) {
      let resultArray = [];
      if (qbdSingleInvoices && qbdSingleInvoices.length > 0) {
        qbdSingleInvoices.forEach((oneInvoice) => {
          if (oneInvoice.quickbooks_txnid) {
            resultArray.push('Invoice synced');
          } else {
            resultArray.push('Waiting for QBD to receive invoice');
          }
        });
      }
      if (qbdMassInvoices && qbdMassInvoices.length > 0) {
        qbdMassInvoices.forEach((oneMassInvoice) => {
          if (oneMassInvoice.qbd_invoice) {
            if (oneMassInvoice.qbd_invoice.quickbooks_txnid) {
              resultArray.push(
                'Synced as mass invoice ' +
                  oneMassInvoice.qbd_invoice.mass_invoice_number
              );
            } else {
              resultArray.push(
                'Waiting for QBD to receive mass invoice ' +
                  oneMassInvoice.qbd_invoice.mass_invoice_number
              );
            }
          }
        });
      }

      if (resultArray.length == 0) {
        return '';
      } else if (resultArray.length == 1) {
        return resultArray[0];
      } else {
        let result = 'Synced ' + resultArray.length + ' times:';
        for (let i = 0; i < resultArray.length; ++i) {
          result += ' ' + (i + 1) + ') ' + resultArray[i];
        }
        return result;
      }
    },
    debounce(func, delay) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(func, delay);
    },
    debouncedOnInputFilter(event, inputType = 'text') {
      if (inputType === 'text') {
        this.debounce(() => {
          this.onInputFilter(event);
        }, 1500);
      } else {
        this.onInputFilter(event);
      }
    },

    getQboConnectionStatusAll() {
      this.$store
        .dispatch('quickbooks/getConnectionStatusAll')
        .then(() => {
          this.showQboButton = this.computeShowQbButton(
            this.qboConnectionStatusAll
          );
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        });
    },

    getQbdConnectionStatusAll() {
      this.$store
        .dispatch('qbd/getConnectionStatusAll')
        .then(() => {
          this.showQbdButton = this.computeShowQbButton(
            this.qbdConnectionStatusAll
          );
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        });
    },

    computeShowQbButton(connectionStatusAll) {
      if (connectionStatusAll) {
        if (connectionStatusAll.parentStatus != 'Not connected') {
          return true;
        }
        for (let i = 0; i < connectionStatusAll.tags.length; ++i) {
          if (connectionStatusAll.tags[i].status != 'Not connected') {
            return true;
          }
        }
        return false;
      }
      return true;
    },

    refreshLoadList() {
      this.commonApiCall(this.filters);
    },

    handleSortParam(event) {
      if (event.sortField.length) {
        const sortFields = event.sortField.split(',');
        event.sortField = sortFields[0].replace(' ', '');
        return event;
      }
    },

    checkColumnVisibility(value) {
      if (
        !this.selectedColumnData.includes(value) ||
        this.userRole == 'warehouse_operator'
      ) {
        return true;
      }
      return false;
    },

    formatShipDeliveryDate(date) {
      return date.slice(5);
    },

    formatShipDeliveryTime(startTime, endTime) {
      if (endTime) {
        return startTime + '-' + endTime;
      } else {
        return startTime;
      }
    },

    formatDriverNames(drivers) {
      let nameArray = [];
      drivers
        .filter((oneRow) => oneRow.driver_details.length > 0)
        .map((oneRow) => {
          nameArray.push(
            ...oneRow.driver_details.map((oneDriver) => oneDriver.name)
          );
        });
      return nameArray.join(', ');
    },
    formatTrucksNumbers(drivers) {
      return drivers
        .map(({ truck }) => truck.truck_number)
        .filter(Boolean)
        .join(', ');
    },
    formatTrailerNumbers(drivers) {
      return drivers
        .map(({ trailer }) => trailer.trailer_number)
        .filter(Boolean)
        .join(', ');
    },
    onChangeNote(event, data) {
      try {
        if (this.debounceMap.has(data.load_id)) {
          clearTimeout(this.debounceMap.get(data.load_id));
        }
        this.debounceMap.set(
          data.load_id,
          setTimeout(() => {
            const payload = {
              dispatcher_notes: event,
            };
            const loadPayload = {
              id: data.load_id,
              payload,
            };
            this.$vs.loading();

            this.$store
              .dispatch('load/updateLoadDispatcherNotes', loadPayload)
              .then(() => {
                this.$vs.loading.close();
                this.$vs.notify({
                  color: 'primary',
                  title: 'Load notes updated',
                  text: 'Load notes updated successfully.',
                });
              })
              .catch((error) => {
                this.$vs.loading.close();
                this.$vs.notify({
                  title: 'Error',
                  text: error.response.data.message,
                  color: 'danger',
                });
              });
          }, 2000)
        );
      } catch (error) {
        console.log(error);
      }
    },

    async commonApiCall(filter = {}) {
      // 2022-06-23: I found the API is called 3 times!
      this.loading = true;

      try {
        await this.$store.dispatch('load/getLoadDatatable', {
          eventForServer: this.eventForServer,
          filter,
        });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      } finally {
        // Stop Loading For Load Datatable
        await this.$store.dispatch('load/stopLoading');
        this.selectedLoadsList = [];
        this.loading = false;
        this.debounceMap.clear();
      }
    },

    editData(load) {
      this.$emit('editLoadSidebar', { loadId: load.load_id });
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

    resetInvoicePrompt() {
      this.invoicePrompt = {
        isActive: false,
        selectedLoad: null,
        noFactoring: null,
        skipFactoring: false,
      };
    },

    // Sync to QuickBooks Online
    onSyncToQuickbooks(load) {
      const options = {
        title: 'Sync to QuickBooks Online',
        text: 'Invoice is automatically synced to QuickBooks Online when generated. Are you sure you want to manually sync this load to QuickBooks Online?',
        accept: () => this.syncToQuickbooks(load),
      };

      this.onConfirm(options);
    },

    async syncToQuickbooks(load) {
      this.$vs.loading();

      const payload = {
        id: load.load_id,
      };
      try {
        await this.$store.dispatch('load/syncToQuickbooks', payload);

        this.$vs.notify({
          color: 'primary',
          title: 'Invoice Synced',
          text: 'Invoice synced successfully.',
        });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          time: 10000,
          text: error.response.data.message,
        });
      } finally {
        this.$vs.loading.close();

        await this.commonApiCall(this.filters);
      }
    },

    // Sync to QuickBooks Desktop
    onSyncToQbd(load) {
      const options = {
        title: 'Sync to QuickBooks Desktop',
        text: 'Invoice is automatically synced to QuickBooks Desktop when generated. Are you sure you want to manually sync this load to QuickBooks Desktop?',
        accept: () => this.syncToQbd(load),
      };

      this.onConfirm(options);
    },

    async syncToQbd(load) {
      if (load.refrence_id.length > 25) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Ref # (PO #) cannot exceed 25 characters for QuickBooks Desktop',
          time: 10000,
        });
        return;
      }

      this.$vs.loading();

      const payload = {
        id: load.load_id,
      };
      try {
        await this.$store.dispatch('load/syncToQbd', payload);

        this.$vs.notify({
          color: 'primary',
          title: 'Added to queue',
          text: 'Invoice sync request added to queue.',
        });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
          time: 10000,
        });
      } finally {
        this.$vs.loading.close();

        await this.commonApiCall(this.filters);
      }
    },

    async generateInvoice(load) {
      this.$vs.loading();

      const payload = {
        id: load.load_id,
      };

      if (this.invoicePrompt.skipFactoring) {
        payload.skipFactoring = this.invoicePrompt.skipFactoring;
      } else {
        payload.skipFactoring = false;
      }

      try {
        await this.$store.dispatch('load/generateInvoice', payload);

        this.$vs.notify({
          color: 'primary',
          title: 'Invoice Generated',
          text: 'Invoice Generated successfully.',
        });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          time: 10000,
          text: error.response.data.message,
        });
      } finally {
        this.$vs.loading.close();

        await this.commonApiCall(this.filters);
      }
    },

    // Request for Payment
    onConfirmRequestForPayment(load) {
      let text = `Are you sure you want to send request for payment with amount ${load.total_amount} USD`;
      this.promptColor = 'warning';
      const noFactoring = load && load.customer && load.customer.noFactoring;
      if (
        !noFactoring &&
        load.paymentOption != 'skipFactoring' &&
        this.allFactoringCompanies &&
        this.allFactoringCompanies.length > 0
      ) {
        this.promptMessage =
          text + ` to ${this.allFactoringCompanies[0].billing_email}?`;
      } else {
        if (load && load.customer && load.customer.billing_email) {
          this.promptMessage = text + ` to ${load.customer.billing_email}?`;
        } else {
          this.promptMessage = text + `? (Missing customer billing email)`;
          this.promptColor = 'danger';
        }
      }
      this.emailSubject = `Invoice for Load ${
        load.refrence_id ? load.refrence_id : ''
      }`;
      this.showPaymentRequestPrompt(load);
    },

    async requestForPayment() {
      this.$vs.loading();

      const payload = {
        id: this.paymentRequestPrompt.selectedLoad.load_id,
        subject: this.emailSubject,
      };

      try {
        await this.$store.dispatch('load/requestForPayment', payload);

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

        await this.commonApiCall(this.filters);
      }
    },

    async paymentReceived() {
      this.$vs.loading();

      const payload = {
        id: this.paymentReceivedPrompt.selectedLoad.load_id,
        paidAmount: this.receivedAmount ? Number(this.receivedAmount) : null,
      };

      try {
        await this.$store.dispatch('load/paymentReceived', payload);

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

        await this.commonApiCall(this.filters);
      }
    },

    viewData(load) {
      this.$emit('viewLoadSidebar', { loadId: load.load_id });
    },

    getStatusLabel({ status, invoice_file_name }) {
      if (this.loadStatus.value === 'deleted') return 'Deleted';

      return (
        (status == this.loadStatuses.invoice_created &&
        invoice_file_name &&
        invoice_file_name.startsWith('mass-invoice')
          ? 'Mass '
          : '') + this.formattedLoadStatus[status]
      );
    },

    /** Open POD attachment */
    openLoadPOD(loadImage) {
      /** loadImage = { loadId, loadImageId } */
      this.$vs.loading();
      this.$store
        .dispatch('spreadsheet/getPodUrl', loadImage)
        .then(({ data }) => {
          window.open(data.payload.url, '_blank');
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        })
        .finally(() => {
          this.$vs.loading.close();
        });
    },
    showPaymentRequestPrompt(load = null) {
      this.paymentRequestPrompt = {
        isActive: true,
        selectedLoad: load,
      };
    },
    showInvoicePrompt(load) {
      this.invoicePrompt = {
        isActive: true,
        selectedLoad: load,
        noFactoring: load && load.customer && load.noFactoring,
      };
    },
    resetPaymentRequestPrompt() {
      this.paymentRequestPrompt = {
        isActive: false,
        selectedLoad: null,
      };
    },
    showPaymentReceivedPrompt(load = null) {
      this.paymentReceivedPrompt = {
        isActive: true,
        selectedLoad: load,
      };
      this.receivedAmount = load.total_amount.toString(); // convering number into string because input type number accepts string and if value is 0 then it doesn't accept 0 as a default value
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
.vs-dropdown--item-link {
  @apply flex items-center text-sm;
}

.dispatch-list-limit-column-width {
  white-space: normal;
}

.dispatch-list-cs-textarea {
  border: 1px solid rgba(0, 0, 0, 0.2);
  line-height: 1;
  font-size: 1rem;
  color: inherit;
  padding: 4px;
  border-radius: 6px;
  background: transparent;
}

.papper-clip-vertical {
  margin-right: -5px;
  color: rgb(132, 132, 132);
  transform: rotate(270deg);
  cursor: pointer;
}

.custom-prompt .vs-dialog {
  max-width: 700px;
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
.payment-received-prompt .vs-dialog {
  max-width: 400px;
}

.clearable-date-picker {
  position: relative;
  .close-icon {
    position: absolute;
    top: 25%;
    right: 0%;
    cursor: pointer;
  }
}

::v-deep .clearable-date-picker .date-picker {
  width: 100px;
}
</style>
