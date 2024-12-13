<template>
  <div>
    <div class="w-full">
      <div class="vx-row">
        <div class="vx-col w-full mt-4">
          <h4 class="text-xl text-black">Carrier Details</h4>
        </div>
        <div class="vx-col w-1/4 mt-5">
          <label class="text-sm opacity-75">Carrier Name</label>
          <v-select
            :disabled="disabled"
            :options="carriersList"
            label="company_name"
            :reduce="(option) => option.customer_id"
            :clearable="true"
            v-model="thirdPartyCarrier.carrierAsCustomerId"
            class="w-full"
            @input="handleCarrierChange"
          />
        </div>
        <div class="vx-col w-1/4 mt-5">
          <vs-button
            class="mt-5"
            color="primary"
            type="border"
            icon-pack="feather"
            icon="icon-plus"
            @click.stop="$emit('toggleAddNewCustomerDialog')"
          >
            Add Carrier
          </vs-button>
        </div>
      </div>
      <template>
        <div
          v-for="(item, index) in thirdPartyCarrier.driverAssetAssignments"
          :key="index"
        >
          <div class="vx-row mt-0">
            <div class="vx-col w-1/4 mt-5">
              <label class="text-sm opacity-75">Truck Number</label>
              <vs-input class="w-full" v-model="item.truckNumber" />
            </div>
            <div class="vx-col w-1/4 mt-5">
              <label class="text-sm opacity-75">Trailer Number</label>
              <vs-input class="w-full" v-model="item.trailerNumber" />
            </div>
          </div>
          <div class="vx-row mt-0">
            <div class="vx-col w-1/4 mt-5">
              <label class="text-sm opacity-75">Driver Name</label>
              <vs-input class="w-full" v-model="item.driverName" />
            </div>
            <div class="vx-col w-1/4 mt-5">
              <label class="text-sm opacity-75">Driver Phone Number</label>
              <vs-input class="w-full" v-model="item.driverPhoneNumber" />
            </div>
          </div>
        </div>
        <div class="vx-row mt-0">
          <div class="vx-col w-1/2 mt-5">
            <label class="text-sm opacity-75">Instructions</label>
            <vs-input class="w-full" v-model="thirdPartyCarrier.instructions" />
          </div>
          <div class="vx-col w-1/2 mt-5">
            <label class="text-sm opacity-75">CC Emails</label>
            <vs-input
              class="w-full"
              v-model="ccEmails"
              @keypress.space.prevent
            ></vs-input>
            <p class="small text-xs">Separate multiple emails with commas</p>
          </div>
        </div>
      </template>
    </div>
    <div class="w-full mt-8">
      <div class="vx-col w-full">
        <div>
          <h4 class="text-xl text-black">Charges</h4>
          <vs-divider />
        </div>

        <div class="px-6">
          <div class="flex">
            <h5 class="w-6/12 text-base font-semibold">Fee Method</h5>
            <h5 class="w-3/12 text-base font-semibold">Rate</h5>
            <h5 class="w-3/12 text-right text-base font-semibold">Amount</h5>
          </div>

          <vs-divider />

          <div class="space-y-4">
            <div class="flex gap-4">
              <div class="w-6/12">
                <div class="flex justify-end items-center">
                  <label class="mr-2 text-sm">
                    Hauling Fees:
                    <field-required-sign />
                  </label>
                  <v-select
                    :disabled="disabled"
                    :options="filteredHaulingFeeOptions"
                    label="label"
                    :reduce="(option) => option.value"
                    :clearable="false"
                    v-model="thirdPartyCarrier.charges.hauling_fee_type"
                    class="w-64"
                  />
                </div>
              </div>

              <div class="w-3/12 text-lg">
                <vx-input-group>
                  <template slot="prepend">
                    <div class="prepend-text bg-primary">
                      <span>$</span>
                    </div>
                  </template>

                  <vs-input
                    name="hauling_fee_rate"
                    type="number"
                    step="any"
                    :disabled="disabled"
                    v-model.number="thirdPartyCarrier.charges.hauling_fee_rate"
                  />
                </vx-input-group>
              </div>

              <div class="w-3/12 text-lg text-right">
                <p>
                  {{ haulingFeeAmount | currencyFormat }}
                </p>
              </div>
            </div>

            <!-- I don't think we really need truck hour for 3rd party carrier.
              <div
              class="flex gap-4"
              v-if="thirdPartyCarrier.charges.hauling_fee_type === 'truck_hour'"
            >
              <div class="w-6/12">
                <div class="flex items-center justify-end ml-4">
                  <label class="mr-6 text-sm"
                    >Hauling Fees
                    <p>
                      Quantity:
                      <field-required-sign />
                    </p>
                  </label>
                  <vs-input
                    type="number"
                    step="any"
                    placeholder="Houling Fee Quantity"
                    class="w-64 mt-5 mr-4"
                    v-model.number="thirdPartyCarrier.charges.haulingFeeQty"
                  />
                </div>
              </div>
            </div> -->

            <div class="flex gap-4">
              <div class="w-6/12">
                <div class="flex justify-end items-center">
                  <label class="mr-2 text-sm">Fuel Surcharge:</label>
                  <div class="flex flex-col">
                    <v-select
                      :options="filteredFuelSurchargeOptions"
                      :disabled="disabled"
                      label="label"
                      :clearable="false"
                      :reduce="(option) => option.value"
                      v-model="thirdPartyCarrier.charges.fuel_surcharge_type"
                      class="w-64"
                    />
                    <!-- <label
                      class="text-danger"
                      v-if="validation.fuelSurchargeHasError"
                      v-text="'Please select fee type'"
                    /> -->
                  </div>
                </div>
              </div>

              <div class="w-3/12 text-lg">
                <vx-input-group>
                  <template slot="prepend">
                    <div class="prepend-text bg-primary">
                      <span
                        v-if="
                          thirdPartyCarrier.charges.fuel_surcharge_type ==
                          'percentage'
                        "
                        class="font-semibold"
                        >%</span
                      >
                      <span v-else>$</span>
                    </div>
                  </template>

                  <vs-input
                    name="fuel_surcharge_rate"
                    :disabled="disabled"
                    type="number"
                    step="any"
                    v-model.number="
                      thirdPartyCarrier.charges.fuel_surcharge_rate
                    "
                  />
                </vx-input-group>
              </div>

              <div class="w-3/12 text-lg text-right">
                <p>
                  {{ fuelSurchargeAmount | currencyFormat }}
                </p>
              </div>
            </div>

            <!-- accessorial_fees -->
            <div
              class="flex gap-4"
              v-for="(accessorial_fee, afIdx) in thirdPartyCarrier.charges
                .accessorial_fee"
              :key="`${afIdx}_accessorial_fee`"
            >
              <div class="w-6/12">
                <div class="flex items-center justify-between">
                  <div class="flex justify-start">
                    <vs-button
                      color="danger"
                      type="border"
                      size="small"
                      icon-pack="feather"
                      icon="icon-trash"
                      radius
                      :disabled="disabled"
                      :class="afIdx <= 0 && 'hidden'"
                      @click="removeAccessorialFeeThirdPartyCarrier(afIdx)"
                    />
                  </div>
                  <div class="flex justify-end items-center">
                    <label
                      :class="['mr-2 text-sm w-full', { 'pl-1': afIdx > 0 }]"
                    >
                      Accessorial Fee:
                    </label>
                    <div class="flex flex-col">
                      <v-select
                        :options="accessorialFeeOptions"
                        label="name"
                        :clearable="true"
                        :disabled="disabled"
                        :reduce="(option) => option.id"
                        v-model="accessorial_fee.id"
                        class="w-64 accessorial-selector"
                        @input="
                          $emit('toggleAccessorialFeePrompt', $event, null)
                        "
                      >
                        <template v-slot:option="option">
                          <div class="flex justify-between">
                            <span>
                              {{ option.name }}
                            </span>
                            <span v-if="option.name !== 'Add New'">
                              <vs-icon
                                class="cursor-pointer m-0"
                                color="#1877F2"
                                size="small"
                                icon="edit"
                                @click.stop="
                                  $emit(
                                    'toggleAccessorialFeePrompt',
                                    null,
                                    option
                                  )
                                "
                              />
                            </span>
                          </div>
                        </template>
                      </v-select>
                      <label
                        class="text-danger"
                        v-if="accessorial_fee.hasError"
                        v-text="'Please select fee type'"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-3/12 text-lg">
                <vx-input-group>
                  <template slot="prepend">
                    <div class="prepend-text bg-primary">
                      <span>$</span>
                    </div>
                  </template>

                  <vs-input
                    type="number"
                    step="any"
                    :disabled="disabled"
                    v-model.number="accessorial_fee.rate"
                  />
                </vx-input-group>
              </div>

              <div class="w-3/12 text-lg text-right">
                <p>
                  {{ accessorial_fee.rate | currencyFormat }}
                </p>
              </div>
            </div>

            <!-- Add accessorial_fee button-->
            <div class="pt-2 pb-4 flex gap-4 justify-between">
              <div class="w-6/12">
                <vs-button
                  color="primary"
                  type="border"
                  @click="addNewAccessorialFeeForThirdPartyCarrier"
                >
                  Add Accessorial Fee
                </vs-button>
              </div>

              <div class="w-3/12">
                <vs-divider />
              </div>
            </div>

            <!-- accessorial_deduction -->
            <div
              class="flex gap-4"
              v-for="(accessorial_deduction, adIdx) in thirdPartyCarrier.charges
                .accessorial_deduction"
              :key="`${adIdx}_accessorial_deduction`"
            >
              <div class="w-6/12">
                <div class="flex items-center justify-between">
                  <div class="flex justify-start">
                    <vs-button
                      color="danger"
                      type="border"
                      size="small"
                      icon-pack="feather"
                      icon="icon-trash"
                      radius
                      :class="adIdx <= 0 && 'hidden'"
                      @click="
                        removeAccessorialdeductionFeeThirdPartyCarrier(adIdx)
                      "
                    />
                  </div>
                  <div class="flex justify-end items-center">
                    <label
                      :class="['mr-2 text-sm w-full', { 'pl-1': adIdx > 0 }]"
                    >
                      Accessorial Deduction:
                    </label>
                    <div class="flex flex-col">
                      <v-select
                        :options="accessorialDeductionOptions"
                        label="name"
                        :clearable="true"
                        :reduce="(option) => option.id"
                        :disabled="disabled"
                        v-model="accessorial_deduction.id"
                        class="w-64 accessorial-selector"
                        @input="
                          $emit(
                            'toggleAccessorialDeductionPrompt',
                            $event,
                            null
                          )
                        "
                      >
                        <template v-slot:option="option">
                          <div class="flex justify-between">
                            <span>
                              {{ option.name }}
                            </span>
                            <span v-if="option.name !== 'Add New'">
                              <vs-icon
                                class="cursor-pointer m-0"
                                color="#1877F2"
                                size="small"
                                icon="edit"
                                @click.stop="
                                  $emit(
                                    'toggleAccessorialDeductionPrompt',
                                    null,
                                    option
                                  )
                                "
                              />
                            </span>
                          </div>
                        </template>
                      </v-select>
                      <label
                        class="text-danger"
                        v-if="accessorial_deduction.hasError"
                        v-text="'Please select fee type'"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-3/12 text-lg">
                <vx-input-group>
                  <template slot="prepend">
                    <div class="prepend-text bg-primary">
                      <span>$</span>
                    </div>
                  </template>

                  <vs-input
                    type="number"
                    step="any"
                    :disabled="disabled"
                    v-model.number="accessorial_deduction.rate"
                  />
                </vx-input-group>
              </div>

              <div class="w-3/12 text-lg text-right">
                <p>
                  {{ accessorial_deduction.rate | currencyFormat }}
                </p>
              </div>
            </div>

            <!-- Add accessorial_deduction button-->
            <div class="pt-2 flex gap-4 justify-between">
              <div class="w-6/12">
                <vs-button
                  color="primary"
                  type="border"
                  @click="addNewAccessorialdeductionFeeThirdPartyCarrier"
                >
                  Add Accessorial Deduction
                </vs-button>
              </div>

              <div class="w-3/12">
                <vs-divider />
              </div>
            </div>

            <div class="flex">
              <!-- Left Section -->
              <div class="flex flex-col">
                <div class="flex gap-2 items-end mt-5">
                  <vs-radio
                    v-model="mailingMode"
                    :disabled="disabled"
                    :vs-value="'rateConfirmation'"
                  >
                    <strong class="text-lg">Tender Load to Carrier</strong>
                  </vs-radio>
                  <vs-radio
                    class="mx-3"
                    v-model="mailingMode"
                    :disabled="disabled"
                    :vs-value="'rateConfirmationNBol'"
                  >
                    <strong class="text-lg"
                      >Tender Load & BOL to Carrier</strong
                    >
                  </vs-radio>
                  <label
                    class="cursor-pointer text-xs text-danger"
                    v-if="mailingMode"
                    @click.stop="clearLoadSelection"
                  >
                    Clear
                  </label>
                </div>
                <div class="flex gap-2 mt-5">
                  <vs-button
                    color="primary"
                    type="filled"
                    @click.stop="openRateConfirmationDialog('rateConfirmation')"
                  >
                    View Rate Confirmation
                  </vs-button>
                  <vs-button
                    color="primary"
                    type="filled"
                    @click.stop="openRateConfirmationDialog('bol')"
                  >
                    View BOL
                  </vs-button>
                </div>
              </div>

              <!-- Right Section -->
              <div class="flex flex-col justify-end w-3/12 ml-auto">
                <!-- subtotal -->
                <div class="pt-2 flex gap-4 items-center">
                  <div class="w-full">
                    <div class="flex items-center justify-between">
                      <h5 class="text-base font-semibold">Sub Total:</h5>
                      <p>
                        {{ subTotal | currencyFormat }}
                      </p>
                    </div>
                  </div>
                </div>

                <!-- discount -->
                <div class="pt-2 flex gap-4 items-center">
                  <div class="w-full">
                    <div class="flex items-center justify-between">
                      <h5 class="text-base font-semibold">
                        Discount:
                        <field-required-sign class="text-xs" />
                      </h5>
                      <div>
                        <vs-input
                          type="number"
                          step="any"
                          :disabled="disabled"
                          v-model.number="thirdPartyCarrier.discount"
                          class="w-32"
                        />
                      </div>
                    </div>

                    <vs-divider />
                  </div>
                </div>

                <!-- total amount -->
                <div class="pt-2 flex gap-4 items-center">
                  <div class="w-full">
                    <div class="flex items-center justify-between">
                      <h5 class="text-base font-semibold">Total Amount:</h5>
                      <p>
                        {{ totalAmount | currencyFormat }}
                      </p>
                    </div>

                    <vs-divider />
                  </div>
                </div>

                <!-- dispatcher fee  -->
                <!-- <div
                  class="pt-2 flex gap-4 items-center"
                  v-if="taskAutomation.show_dispatcher_fee_on_invoice"
                >
                  <div class="w-full">
                    <div class="flex items-center justify-between">
                      <div class="text-base font-semibold">Dispatcher Fee:</div>
                      <p>
                        {{ dispatcherFee | currencyFormat }}
                      </p>
                    </div>
                  </div>
                </div> -->
                <!-- dispatcher fee end here  -->

                <!-- factoring fee  -->
                <!-- <div
                  class="pt-2 flex gap-4 items-center"
                  v-if="taskAutomation.show_factoring_fee_on_invoice"
                >
                  <div class="w-full">
                    <div class="flex items-center justify-between">
                      <div class="text-base font-semibold">Factoring Fee:</div>
                      <p>
                        {{ factoringFee | currencyFormat }}
                      </p>
                    </div>
                  </div>
                </div> -->
              </div>
              <!-- factoring fee end here  -->

              <!-- Rate Confirmation Dialog -->
              <rate-confirmation-dialog
                v-if="isRateConfirmationDialogActive"
                :dialogMode="dialogMode"
                :isDialogActive="isRateConfirmationDialogActive"
                :shipperReceiverLegList="shipperReceiverLegList"
                :temperature="temperature"
                :orderType="orderType"
                :serviceType="serviceType"
                :loadNumber="loadNumber"
                :referenceNumber="referenceNumber"
                :carrierInfo="carrierInfo"
                :companyInfo="companyInfo"
                :driverInfo="driverInfo"
                :rateConType="rateConType"
                :thirdPartyCarrier="thirdPartyCarrier"
                :accessorialFeeOptions="accessorialFeeOptions"
                :accessorialDeductionOptions="accessorialDeductionOptions"
                :fuelSurchargeAmount="fuelSurchargeAmount"
                :haulingFeeAmount="haulingFeeAmount"
                :interModalBodyContent="interModalBodyContent"
                @close="closeRateConfirmationDialog()"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable multiline-ternary -->
<script>
export default {
  props: {
    carriersList: {
      type: Array,
      default: [],
    },
    haulingFeeOptions: {
      type: Array,
      default: [],
    },
    fuelSurchargeOptions: {
      type: Array,
      default: [],
    },
    accessorialFeeOptions: {
      type: Array,
      default: [],
    },
    accessorialDeductionOptions: {
      type: Array,
      default: [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    calculatedMiles: {
      type: [Number, String],
      default: null,
    },
    shipperReceiverLegList: {
      type: Array,
      default: [],
    },
    mileType: {
      type: String,
      default: [],
    },
    value: {
      type: Object,
      default: () => ({}),
    },
    temperature: {
      type: String,
      default: null,
    },
    orderType: {
      type: String,
      default: null,
    },
    loadNumber: {
      type: [String, Number],
      default: null,
    },
    referenceNumber: {
      type: [String, Number],
      default: null,
    },
    serviceType: {
      type: String,
      default: null,
    },
    companyInfo: {
      type: Object,
      default: () => ({}),
    },
    interModalBodyContent: {
      type: Object,
      default: () => ({}),
    },
    /*assignDriverAndEquipments: {
      type: Array,
      default: [],
    },
    allDriverTruckTrailerForLoadDriver: {
      type: Object,
      default: {},
    },*/
  },
  components: {
    RateConfirmationDialog: () => import('./RateConfirmationDialog.vue'),
  },
  filters: {
    currencyFormat(value) {
      if (!value) return '$ 0.00';
      let retSting = '';
      if (value < 0) {
        retSting += '- ';
        value = value * -1;
      }
      retSting += `$${(+value).toFixed(2)}`;
      return retSting;
    },
  },
  data() {
    return {
      filteredHaulingFeeOptions: [
        { label: 'Flat fee', value: 'flat_fee' },
        { label: 'Weight', value: 'weight' },
        { label: 'Quantity', value: 'qty' },
      ],
      isRateConfirmationDialogActive: false,
      dialogMode: 'rateConfirmation', // 'rateConfirmation' || 'bol
      thirdPartyCarrier: {
        carrierAsCustomerId: null,
        instructions: '',
        ccEmails: [],
        charges: {
          accessorial_deduction: [],
          accessorial_fee: [],
          fuel_surcharge: 0,
          fuel_surcharge_rate: 0,
          fuel_surcharge_type: 'flat_fee',
          hauling_fee: 0,
          hauling_fee_rate: 0,
          hauling_fee_type: 'flat_fee',
          // haulingFeeQty: 0,
        },
        discount: 0,
        driverAssetAssignments: [
          {
            truckNumber: null,
            trailerNumber: null,
            driverName: null,
            driverPhoneNumber: null,
          },
        ],
        subTotal: 0,
        totalAmount: 0,
        sendRateConToCarrier: null,
        sendRateConAndBolToCarrier: null,
        rateConType: 'otr',
      },
      mailingMode: null, // 'rateConfirmation' || 'rateConfirmationNBol'
      ccEmails: '',
    };
  },
  created() {
    this.init();
  },
  watch: {
    thirdPartyCarrier: {
      handler(val) {
        if (JSON.stringify(val) === JSON.stringify(this.value)) return;

        this.thirdPartyCarrier.charges.fuel_surcharge = parseFloat(
          this.fuelSurchargeAmount
        );
        this.thirdPartyCarrier.charges.hauling_fee = parseFloat(
          val.charges.hauling_fee_rate
        );
        this.thirdPartyCarrier.discount = val.discount
          ? parseFloat(val.discount)
          : 0;
        const value = {
          ...val,
          sendRateConToCarrier: this.mailingMode === 'rateConfirmation',
          sendRateConAndBolToCarrier:
            this.mailingMode === 'rateConfirmationNBol',
        };
        this.$emit('input', value);
      },
      deep: true,
    },
    value: {
      handler(val) {
        this.thirdPartyCarrier = val;
        this.thirdPartyCarrier.charges.fuel_surcharge = parseFloat(
          val.charges.fuel_surcharge
        );
        this.thirdPartyCarrier.charges.fuel_surcharge_rate = parseFloat(
          val.charges.fuel_surcharge_rate
        );
        this.thirdPartyCarrier.charges.hauling_fee_rate = parseFloat(
          val.charges.hauling_fee_rate
        );
        this.thirdPartyCarrier.discount = val.discount
          ? parseFloat(val.discount)
          : 0;
        if (!this.thirdPartyCarrier.rateConType) {
          this.thirdPartyCarrier.rateConType = 'otr';
        }
        if (!this.thirdPartyCarrier.charges.hauling_fee_type) {
          this.thirdPartyCarrier.charges.hauling_fee_type = 'flat_fee';
        }
        if (!this.thirdPartyCarrier.charges.fuel_surcharge_type) {
          this.thirdPartyCarrier.charges.fuel_surcharge_type = 'flat_fee';
        }

        if (
          this.thirdPartyCarrier &&
          this.thirdPartyCarrier.ccEmails &&
          this.thirdPartyCarrier.ccEmails.length > 0
        ) {
          this.ccEmails = val.ccEmails.join(',');
        }

        this.mailingMode = this.thirdPartyCarrier.sendRateConToCarrier
          ? 'rateConfirmation'
          : this.thirdPartyCarrier.sendRateConAndBolToCarrier
          ? 'rateConfirmationNBol'
          : null;
      },
      deep: true,
      immediate: true,
    },
    ccEmails: {
      handler(val) {
        if (!val) {
          this.thirdPartyCarrier.ccEmails = [];
        } else {
          this.thirdPartyCarrier.ccEmails = val.split(',').map((element) => {
            return element.trim();
          });
        }
      },
    },
    mailingMode: {
      handler(val) {
        this.thirdPartyCarrier.sendRateConToCarrier =
          val === 'rateConfirmation';
        this.thirdPartyCarrier.sendRateConAndBolToCarrier =
          val === 'rateConfirmationNBol';
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    filteredFuelSurchargeOptions() {
      return this.fuelSurchargeOptions.filter(
        (item) => item.value !== 'formulaPerMile'
      );
    },
    rateConType() {
      return this.thirdPartyCarrier.rateConType;
    },
    haulingFeeAmount() {
      if (isNaN(this.thirdPartyCarrier.charges.hauling_fee_rate)) {
        this.thirdPartyCarrier.charges.hauling_fee_rate = 0;
      }
      if (isNaN(this.thirdPartyCarrier.charges.hauling_fee)) {
        this.thirdPartyCarrier.charges.hauling_fee = 0;
      }
      const shipperDetails = this.shipperReceiverLegList.filter(
        (item) => item.renderAddressType == 'shipper' || !!item.load_shipper_id
      );
      if (this.thirdPartyCarrier.charges.hauling_fee_type === 'qty') {
        const haulingFee =
          Number(this.thirdPartyCarrier.charges.hauling_fee_rate) *
          shipperDetails.reduce(function (sum, current) {
            const additionalFreightDetailsTotalQty =
              ((current || {}).additionalFreightDetails || {}).totalQty || 0;
            return (
              sum +
              Number(current.freight_qty) +
              Number(additionalFreightDetailsTotalQty)
            );
          }, 0);
        this.thirdPartyCarrier.charges.hauling_fee = haulingFee;
        return haulingFee;
      } else if (this.thirdPartyCarrier.charges.hauling_fee_type === 'weight') {
        const haulingFee =
          Number(this.thirdPartyCarrier.charges.hauling_fee_rate) *
          shipperDetails.reduce(function (sum, current) {
            const additionalFreightDetailsTotalWeight =
              ((current || {}).additionalFreightDetails || {}).totalWeight || 0;
            return (
              sum +
              Number(current.freight_weight) +
              Number(additionalFreightDetailsTotalWeight)
            );
          }, 0);
        this.thirdPartyCarrier.charges.hauling_fee = haulingFee;
        return haulingFee;
        /*} else if (
        this.thirdPartyCarrier.charges.hauling_fee_type === "truck_hour"
      ) {
        const haulingFee =
          Number(this.thirdPartyCarrier.charges.hauling_fee_rate) *
          Number(this.thirdPartyCarrier.charges.haulingFeeQty);
        this.thirdPartyCarrier.charges.hauling_fee = haulingFee;
        return haulingFee;*/
      } else {
        this.thirdPartyCarrier.charges.hauling_fee = Number(
          this.thirdPartyCarrier.charges.hauling_fee_rate
        );
        return Number(this.thirdPartyCarrier.charges.hauling_fee_rate);
      }
    },

    fuelSurchargeAmount() {
      if (isNaN(this.thirdPartyCarrier.charges.fuel_surcharge_rate)) {
        this.thirdPartyCarrier.charges.fuel_surcharge_rate = 0;
      }
      if (isNaN(this.thirdPartyCarrier.charges.fuel_surcharge)) {
        this.thirdPartyCarrier.charges.fuel_surcharge = 0;
      }
      if (
        this.thirdPartyCarrier.charges.fuel_surcharge_rate &&
        this.thirdPartyCarrier.charges.fuel_surcharge_type == 'percentage'
      ) {
        const fuelSurchargeAmount =
          (this.haulingFeeAmount *
            Number(this.thirdPartyCarrier.charges.fuel_surcharge_rate)) /
          100;
        this.thirdPartyCarrier.charges.fuel_surcharge = fuelSurchargeAmount;
        return fuelSurchargeAmount;
      }

      if (
        this.thirdPartyCarrier.charges.fuel_surcharge_rate &&
        this.thirdPartyCarrier.charges.fuel_surcharge_type == 'per_mile'
      ) {
        const data = {
          manual:
            this.calculatedMiles *
            this.thirdPartyCarrier.charges.fuel_surcharge_rate,
          google_maps:
            this.calculatedMiles *
            this.thirdPartyCarrier.charges.fuel_surcharge_rate,
          p:
            this.calculatedMiles *
            this.thirdPartyCarrier.charges.fuel_surcharge_rate,
        }[this.mileType];
        this.thirdPartyCarrier.charges.fuel_surcharge = data;
        return data;
      }

      if (this.thirdPartyCarrier.charges.fuel_surcharge_rate) {
        this.thirdPartyCarrier.charges.fuel_surcharge = Number(
          this.thirdPartyCarrier.charges.fuel_surcharge_rate
        );
        return Number(this.thirdPartyCarrier.charges.fuel_surcharge_rate);
      }

      return 0;
    },

    subTotal() {
      const haulingFeeAmount = Number(this.haulingFeeAmount);
      const fuelSurchargeAmount = Number(this.fuelSurchargeAmount);

      const accessorialFeesTotalAmount =
        this.thirdPartyCarrier.charges.accessorial_fee
          .map((fees) => Number(fees.rate))
          .reduce((totalAmount, rate) => totalAmount + Number(rate), 0);
      const accessorialDeductionFeesTotalAmount =
        this.thirdPartyCarrier.charges.accessorial_deduction
          .map((fees) => Number(fees.rate))
          .reduce((totalAmount, rate) => totalAmount + Number(rate), 0);

      const subTotal =
        Number(haulingFeeAmount) +
        Number(fuelSurchargeAmount) +
        Number(accessorialFeesTotalAmount) +
        Number(accessorialDeductionFeesTotalAmount);
      this.thirdPartyCarrier.subTotal = subTotal;
      return subTotal;
    },

    totalAmount() {
      const discount = this.thirdPartyCarrier.discount || 0;

      if (this.subTotal < discount) {
        return Number(this.subTotal);
      }

      const total = this.subTotal - discount;
      this.thirdPartyCarrier.totalAmount = parseFloat(total).toFixed(2);
      return this.thirdPartyCarrier.totalAmount;
    },
    carrierInfo() {
      if (
        this.thirdPartyCarrier &&
        this.thirdPartyCarrier.carrierAsCustomerId
      ) {
        const carrier = this.carriersList.find(
          (item) =>
            item.customer_id === this.thirdPartyCarrier.carrierAsCustomerId
        );

        if (carrier) {
          let updatedAddress = carrier.address ? carrier.address : '';
          // if (carrier.city) {
          //   if (updatedAddress) {
          //     updatedAddress += ", ";
          //   }
          //   updatedAddress += carrier.city;
          // }
          // if (carrier.state || carrier.zip_code) {
          //   if (updatedAddress) {
          //     updatedAddress += ", ";
          //   }
          //   updatedAddress += carrier.state + " " + carrier.zip_code;
          // }

          return {
            carrierName: carrier.company_name,
            carrierAddressLine1: updatedAddress,
            carrierAddressLine2:
              carrier.city + ', ' + carrier.state + ' ' + carrier.zip_code,
            carrierContact: carrier.phone_number,
            carrierEmail: carrier.email,
          };
        }
      }
      return null;
    },
    driverInfo() {
      if (
        this.thirdPartyCarrier &&
        this.thirdPartyCarrier.driverAssetAssignments.length
      ) {
        const driverDetails = this.thirdPartyCarrier.driverAssetAssignments[0];
        return {
          truckNumber: driverDetails.truckNumber,
          trailerNumber: driverDetails.trailerNumber,
          driverName: driverDetails.driverName,
          driverPhoneNumber: driverDetails.driverPhoneNumber,
        };
      }
      return null;
    },
  },
  methods: {
    handleCarrierChange(carrierId) {
      if (this.mailingMode === null && carrierId) {
        this.mailingMode = 'rateConfirmationNBol';
        this.thirdPartyCarrier.sendRateConAndBolToCarrier = true;
        this.thirdPartyCarrier.sendRateConToCarrier = false;
      }
    },
    openRateConfirmationDialog(dialogMode) {
      this.dialogMode = dialogMode;
      this.isRateConfirmationDialogActive = true;
    },
    closeRateConfirmationDialog() {
      this.isRateConfirmationDialogActive = false;
      this.dialogMode = 'rateConfirmation'; //Default state
    },
    // accessorial fee for third party carrier
    addNewAccessorialFeeForThirdPartyCarrier() {
      this.thirdPartyCarrier.charges.accessorial_fee.push({
        id: '',
        rate: '',
        hasError: false,
      });
    },

    removeAccessorialFeeThirdPartyCarrier(index) {
      this.thirdPartyCarrier.charges.accessorial_fee.splice(index, 1);
    },

    // accessorial deduction for third party carrier
    addNewAccessorialdeductionFeeThirdPartyCarrier() {
      this.thirdPartyCarrier.charges.accessorial_deduction.push({
        id: '',
        rate: '',
        hasError: false,
      });
    },

    removeAccessorialdeductionFeeThirdPartyCarrier(index) {
      this.thirdPartyCarrier.charges.accessorial_deduction.splice(index, 1);
    },

    init() {
      if (this.thirdPartyCarrier.charges.accessorial_deduction.length === 0) {
        this.addNewAccessorialdeductionFeeThirdPartyCarrier();
      }

      if (this.thirdPartyCarrier.charges.accessorial_fee.length === 0) {
        this.addNewAccessorialFeeForThirdPartyCarrier();
      }
    },
    clearLoadSelection() {
      this.mailingMode = null;
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .accessorial-selector span.vs__selected {
  max-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
