<template>
  <vx-card class="hover:shadow" no-shadow card-border @click="onCardClick">
    <!-- cursor-move -->
    <template>
      <div class="flex justify-between items-center">
        <span class="flex">
          <h6
            class="break-all"
            style="font-size: 12px"
            v-if="isCardHeaderVisible"
          >
            {{ getCardHeader(load) }}
          </h6>
        </span>
        <div class="dropdown">
          <a
            class="inline-block w-5 h-5 flex items-center"
            href.prevent
            @click.stop="
              {
              }
            "
          >
            <feather-icon
              icon="EditIcon"
              svgClasses="w-full h-full text-grey stroke-current cursor-pointer"
            />
          </a>
          <ul class="dropdown-menu">
            <li v-if="canAccess(this.roleModify)" @click.stop="editLoad">
              <div class="flex items-center">
                <feather-icon
                  icon="EditIcon"
                  svgClasses="w-4 h-4 stroke-current cursor-pointer"
                  class="mr-2"
                />
                Edit
              </div>
            </li>
            <li v-else @click.stop="viewLoad">
              <div class="flex items-center">
                <feather-icon
                  icon="EditIcon"
                  svgClasses="w-4 h-4 stroke-current cursor-pointer"
                  class="mr-2"
                />
                View
              </div>
            </li>
            <template
              v-if="
                loadPaymentStatus.includes(load.status) &&
                canAccess(this.roleModify)
              "
            >
              <!--                        <vs-dropdown-group>-->
              <template
                v-if="
                  (!load.invoice_file_name ||
                    !load.invoice_file_name.startsWith('mass-invoice')) &&
                  load.status == loadStatuses.delivered
                "
              >
                <li @click.stop="onConfirmGenerateInvoice(load)">
                  <div class="flex items-center">
                    <feather-icon
                      icon="FileTextIcon"
                      svgClasses="w-4 h-4 stroke-current cursor-pointer"
                      class="mr-2"
                    />
                    Generate Invoice
                  </div>
                </li>
                <!-- <vs-dropdown-item
                  divider

                >
                  <div class="flex items-center">
                    <feather-icon
                      icon="FileTextIcon"
                      svgClasses="w-4 h-4 stroke-current cursor-pointer"
                      class="mr-2"
                    />
                    Generate Invoice
                  </div>
                </vs-dropdown-item> -->
              </template>

              <template
                v-else-if="
                  !load.invoice_file_name.startsWith('mass-invoice') &&
                  (load.status == loadStatuses.invoice_created ||
                    load.status == loadStatuses.invoice_sent)
                "
              >
                <vs-dropdown-item
                  divider
                  @click.stop="onConfirmRequestForPayment(load)"
                >
                  <div class="flex items-center">
                    <feather-icon
                      icon="CreditCardIcon"
                      svgClasses="w-4 h-4 stroke-current cursor-pointer"
                      class="mr-2"
                    />
                    Request for Payment
                  </div>
                </vs-dropdown-item>

                <vs-prompt
                  accept-text="Yes"
                  @cancel="activePrompt = false"
                  @accept="requestForPayment(load)"
                  @close="activePrompt = false"
                  :color="promptColor"
                  title="Payment Requested"
                  :active.sync="activePrompt"
                  class="custom-prompt"
                >
                  <p class="mb-3">{{ promptMessage }}</p>
                  <div class="flex items-center">
                    <p class="mb-0 mr-3">Email Subject :</p>
                    <vs-input
                      placeholder="Email"
                      v-model="emailSubject"
                      class="w-4/5"
                    />
                  </div>
                </vs-prompt>
              </template>

              <template v-if="load.status == loadStatuses.invoice_sent">
                <vs-dropdown-item
                  divider
                  @click.stop="onConfirmPaymentReceived(load)"
                >
                  <div class="flex items-center">
                    <feather-icon
                      icon="CheckCircleIcon"
                      svgClasses="w-4 h-4 stroke-current cursor-pointer"
                      class="mr-2"
                    />
                    Payment Received
                  </div>
                </vs-dropdown-item>
              </template>
              <!--            </vs-dropdown-group>-->
            </template>

            <!--<template
              v-if="
                load.status == loadStatuses.invoice_created &&
                  canAccess(this.roleModify)
              "
            >
              <li @click.stop="onConfirmRequestForPayment(load)">
                <div class="flex items-center">
                  <feather-icon
                    icon="CreditCardIcon"
                    svgClasses="w-4 h-4 stroke-current cursor-pointer"
                    class="mr-2"
                  />
                  Request for Payment
                </div>
              </li>
            </template>
            <template
              v-if="
                load.status == loadStatuses.invoice_sent &&
                  canAccess(this.roleModify)
              "
            >
              <li @click.stop="onConfirmPaymentReceived(load)">
                <div class="flex items-center">
                  <feather-icon
                    icon="CheckCircleIcon"
                    svgClasses="w-4 h-4 stroke-current cursor-pointer"
                    class="mr-2"
                  />
                  Payment Received
                </div>
              </li>
            </template>-->
          </ul>
        </div>
      </div>
    </template>

    <template>
      <div class="w-full py-2 space-y-1">
        <ul>
          <li
            class="flex space-x-2"
            style="font-size: 12px"
            v-for="address in shipperReceiverOrderedList"
            :key="address.uuid"
          >
            <p
              v-if="
                (address.type === 'shipper' &&
                  isShipperNameCityStateDateTimeVisible) ||
                (address.type === 'receiver' &&
                  isReceiverNameCityStateDateTimeVisible)
              "
            >
              {{ address.indexLabel }}:
            </p>
            <div class="flex">
              <template v-if="address.type === 'shipper'">
                {{ getShipperNameAddressFreightDetails(address) }}
              </template>
              <template v-else-if="address.type === 'receiver'">
                {{ getReceiverNameAddress(address) }}
              </template>
              <template
                v-if="address.type === 'shipper' && labels.shipperDateTime"
              >
                {{ address.shipping_date.slice(5) | formatDate }}
                {{ address.shipping_time }}
              </template>
              <template
                v-else-if="
                  address.type === 'receiver' && labels.receiverDateTime
                "
              >
                {{ address.delivery_date.slice(5) | formatDate }}
                {{ address.delivery_time }}
              </template>
              <!-- <div class="whitespace-nowrap">
             
              </div> -->
            </div>
          </li>
        </ul>
      </div>
      <template v-if="labels.equipmentType && load.equipmentType">
        <span style="font-size: 12px">
          {{ getEquipmentTypeName(load.equipmentType) }}
        </span>
      </template>
      <div
        v-if="isDriverTruckTrailerVisible && isDriverTruckTrailerAvailable"
        class="items-center flex flex-wrap"
      >
        <template v-if="labels.driver">
          <vs-chip
            color="primary"
            transparent
            v-for="driverName in this.driverNames"
            :key="driverName.uuid"
          >
            {{ driverName.name }}
          </vs-chip>
        </template>
        <template v-if="labels.truck">
          <vs-chip
            color="primary"
            transparent
            v-for="truckNumber in this.truckNumbers"
            :key="truckNumber.uuid"
          >
            {{ truckNumber.number }}
          </vs-chip>
        </template>
        <template v-if="labels.trailer">
          <vs-chip
            color="primary"
            transparent
            v-for="trailerNumber in this.trailerNumbers"
            :key="trailerNumber.uuid"
          >
            {{ trailerNumber.number }}
          </vs-chip>
        </template>
      </div>

      <!-- Miles, Total Amount -->
      <div class="flex mt-2" v-if="labels.miles || labels.totalAmount">
        <label
          v-if="labels.miles && load.miles"
          style="font-size: 12px"
          class="font-semibold"
        >
          {{ load.miles ? Math.round(load.miles) : '' }}mi
        </label>
        <label
          v-if="labels.totalAmount && load.total_amount"
          style="font-size: 12px"
          class="font-semibold ml-auto"
        >
          {{ load.total_amount ? formatAmountValue(load.total_amount) : '' }}
        </label>
      </div>
    </template>

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
  </vx-card>
</template>
<!-- eslint-disable multiline-ternary -->
<script>
import { v4 as uuidv4 } from 'uuid';
import config from '@/config/constants';
import { mapGetters } from 'vuex';
import { formatAmount } from '@/helpers/helper';

export default {
  name: 'DraggableCard',

  props: {
    data: {
      type: Object,
      required: true,
    },
    showLabels: {
      type: Object,
      default: () => ({}),
    },
  },
  filters: {
    formatDate(value) {
      if (!value) return '';
      return value.replace(/-/g, '/');
    },
  },
  data() {
    return {
      loadStatuses: config.status.load,
      loadPaymentStatus: [
        config.status.load.delivered,
        config.status.load.invoice_created,
        config.status.load.invoice_sent,
      ],
      roleModify: [config.roles.admin, config.roles.dispatcher],
      load: this.data,
      loadDrivers: [],
      driverNames: [],
      truckNumbers: [],
      trailerNumbers: [],
      labels: {
        customerName: true,
        loadNumber: true,
        loadReference: false,
        billToCode: false,
        miles: false,
        totalAmount: false,
        shipperName: true,
        shipperCityState: true,
        shipperDateTime: true,
        receiverName: true,
        receiverCityState: true,
        receiverDateTime: true,
        equipmentType: false,
        driver: false,
        truck: false,
        trailer: false,
        shipperFreightDescription: false,
        shipperFreightEquipmentNumber: false,
      },
      equipmentTypeOptions: config.equipmentTypeOptions,
      activePrompt: false,
      promptMessage: '',
      promptColor: '',
      selectedPromptLoad: null,
      emailSubject: '',
      paymentReceivedPrompt: {
        isActive: false,
        selectedLoad: null,
      },
      receivedAmount: '',
    };
  },

  computed: {
    ...mapGetters('customization', ['customization']),
    ...mapGetters('factoring-company', ['allFactoringCompanies']),
    shipperReceiverOrderedList() {
      /** Data variable seems to be directly passes from a vuex variable
       * This Copy and parsing logic is need to avoid vuex cross mutation */
      const dataCopy = { ...(this.data || {}) };
      const { shippers, receivers } = JSON.parse(JSON.stringify(dataCopy));

      /** While the commented out code would have been enough
       * to create a ordered list of shipper and receiver
       * in order to get the proper oder of render labels like P1 and D1
       * separate calculation we needed
       * Just use the commented out code if the "indexLabel" variable is not needed */
      // const combinedList = [
      //   ...shippers.map((shipper) => ({ ...shipper, type: "shipper", uuid: uuidv4() })),
      //   ...receivers.map((receiver) => ({ ...receiver, type: "receiver", uuid: uuidv4() })),
      // ];
      // return combinedList.sort((a, b) => {
      //   return a.order - b.order;
      // });
      const combinedList = [];

      shippers
        .sort((a, b) => {
          return a.order - b.order;
        })
        .forEach((shipper, index) => {
          combinedList.push({
            ...shipper,
            type: 'shipper',
            uuid: uuidv4(),
            indexLabel: `P${index + 1}`,
          });
        });

      receivers
        .sort((a, b) => {
          return a.order - b.order;
        })
        .forEach((receiver, index) => {
          combinedList.push({
            ...receiver,
            type: 'receiver',
            uuid: uuidv4(),
            indexLabel: `D${index + 1}`,
          });
        });

      return combinedList.sort((a, b) => {
        return a.order - b.order;
      });
    },
    isShipperNameCityStateDateTimeVisible() {
      return (
        this.labels.shipperName ||
        this.labels.shipperCityState ||
        this.labels.shipperDateTime
      );
    },
    isReceiverNameCityStateDateTimeVisible() {
      return (
        this.labels.receiverName ||
        this.labels.receiverCityState ||
        this.labels.receiverDateTime
      );
    },
    isDriverTruckTrailerVisible() {
      return this.labels.driver || this.labels.truck || this.labels.trailer;
    },
    isDriverTruckTrailerAvailable() {
      return (
        this.driverNames.length ||
        this.truckNumbers.length ||
        this.trailerNumbers.length
      );
    },
    isCardHeaderVisible() {
      return (
        this.labels.loadNumber ||
        this.labels.loadReference ||
        this.labels.customerName ||
        this.labels.billToCode
      );
    },
  },

  created() {
    this.loadDrivers = this.data.drivers.map((driver) => ({
      ...driver,
      uuid: uuidv4(),
    }));
    this.loadDrivers.forEach((loadDriver) => {
      if (loadDriver.driver_details && loadDriver.driver_details.length) {
        loadDriver.driver_details.forEach((driver) => {
          this.driverNames.push({
            name: driver.name,
            uuid: uuidv4(),
          });
        });
      }
      if (loadDriver.truck && loadDriver.truck.truck_number) {
        this.truckNumbers.push({
          number: loadDriver.truck.truck_number,
          uuid: uuidv4(),
        });
      }
      if (loadDriver.trailer && loadDriver.trailer.trailer_number) {
        this.trailerNumbers.push({
          number: loadDriver.trailer.trailer_number,
          uuid: uuidv4(),
        });
      }
    });
  },

  methods: {
    editLoad() {
      this.$emit('editLoadSidebar', { loadId: this.load.load_id });
    },

    viewLoad() {
      this.$emit('viewLoadSidebar', { loadId: this.load.load_id });
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

    // Generate Invoice
    onConfirmGenerateInvoice(load) {
      const options = {
        title: 'Generate Invoice',
        text: 'Are you sure you want to generate invoice?',
        accept: () => this.generateInvoice(load),
      };

      this.onConfirm(options);
    },

    async generateInvoice(load) {
      this.$vs.loading();

      const payload = {
        id: load.load_id,
      };

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
          text: error.response.data.message,
        });
      } finally {
        this.$vs.loading.close();

        // Start Loading For Load Datatable/Pipeline
        await this.$store.dispatch('load/startLoading');
      }
    },

    // Request for Payment
    onConfirmRequestForPayment(load) {
      this.selectedPromptLoad = load;
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
      this.activePrompt = true;
    },

    async requestForPayment(load) {
      this.$vs.loading();

      const payload = {
        id: load.load_id,
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

        // Start Loading For Load Datatable/Pipeline
        await this.$store.dispatch('load/startLoading');
      }
    },

    // Payment Received
    onConfirmPaymentReceived(load) {
      this.paymentReceivedPrompt = {
        isActive: true,
        selectedLoad: load,
      };
      this.receivedAmount = load.total_amount.toString(); // convering number into string because input type number accepts string and if value is 0 then it doesn't accept 0 as a default value;
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

        // Start Loading For Load Datatable/Pipeline
        await this.$store.dispatch('load/startLoading');
      }
    },
    onCardClick() {
      this.canAccess(this.roleModify) ? this.editLoad() : this.viewLoad();
    },
    formatAmountValue(amount) {
      return formatAmount(amount);
    },
    initLabels(showLabels) {
      if (showLabels) {
        for (const [key] of Object.entries(this.labels)) {
          if (key === 'driver' || key === 'truck') {
            this.labels[key] = this.customization.show_driver_truck_on_pipeline;
          }

          if (showLabels[key] !== undefined) {
            this.labels[key] = showLabels[key] !== false;
          }
        }
      }
    },
    getEquipmentTypeName(equipmentType) {
      if (!equipmentType) return '';

      const type = this.equipmentTypeOptions.find(
        (type) => type.value === equipmentType
      );
      return type ? type.title : '';
    },
    getShipperNameAddressFreightDetails(load) {
      if (!load) return '';

      const {
        shipperName,
        city,
        state,
        shipperFreightDescription,
        shipperFreightEquipmentNumber,
      } = load;
      const labelKeyValue = {
        shipperName: shipperName || '',
        shipperFreightEquipmentNumber: shipperFreightEquipmentNumber || '',
        shipperFreightDescription: shipperFreightDescription || '',
        shipperCityState: `${city || ''}, ${state || ''}`,
      };

      return Object.keys(labelKeyValue)
        .filter((key) => this.labels[key] && labelKeyValue[key])
        .map((key) => labelKeyValue[key])
        .join(', ');
    },
    getReceiverNameAddress(load) {
      if (!load) return '';

      const { receiverName, receiverCityState } = this.labels;

      return `${receiverName ? load.receiverName : ''}${
        receiverName && load.receiverName && receiverCityState ? ', ' : ''
      } ${receiverCityState ? `${load.city}, ${load.state}` : ''}`;
    },
    getCardHeader(load) {
      if (!load) return '';
      let ret = '';
      const { loadNumber, loadReference, customerName, billToCode } =
        this.labels;

      if (loadNumber && load.load_unique_id) {
        ret += load.load_unique_id.toString();
      }

      if (loadReference && load.refrence_id) {
        if (ret) {
          ret += ' - ';
        }
        ret += load.refrence_id;
      }

      if (customerName && load.customer.company_name) {
        if (ret) {
          ret += ' - ';
        }
        ret += load.customer.company_name;
      }

      if (billToCode && load.billToCode) {
        if (ret) {
          ret += ' - ';
        }
        ret += load.billToCode;
      }

      return ret;
    },
    resetPaymentReceivedPrompt() {
      this.paymentReceivedPrompt = {
        isActive: false,
        selectedLoad: null,
      };
      this.receivedAmount = '';
    },
  },
  watch: {
    showLabels: {
      handler(val) {
        this.initLabels(val);
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
.vx-card .vx-card__header {
  flex-wrap: nowrap;
  align-items: start;
}
.vx-card .vx-card__collapsible-content .vx-card__body {
  padding: 0.8rem;
}

.dropdown {
  position: relative;
}

.dropdown .dropdown-menu {
  display: none;
  position: absolute;
  background: #fff;
  min-width: 100px;
  right: 0;
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 14%);
  border-radius: 4px;
  z-index: 2;
  li {
    padding: 0.5rem 12px;
    cursor: pointer;
    font-size: 12px;
    width: 150px;
    border-bottom: 1px solid lightgray;
  }
}
.dropdown:hover .dropdown-menu {
  display: block !important;
}

// Utility Classes
.whitespace-nowrap {
  white-space: nowrap;
}

.text-ellipsis {
  text-overflow: ellipsis;
}
.custom-prompt .vs-dialog {
  max-width: 700px;
}
</style>
