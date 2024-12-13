<template>
  <section>
    <div>
      <div class="vx-row flex justify-between items-center mb-2 w-full">
        <h5 class="">{{ loadTitle }}</h5>
        <div>
          <vs-button
            color="primary"
            type="filled"
            size="small"
            @click="addNewCustomFieldOption('load')"
            >New Load Payment Field</vs-button
          >
        </div>
      </div>
      <div v-for="(list, index) of templateFieldList" :key="index">
        <div class="vx-row space-x-1 items-center">
          <div>
            <label class="text-xs"> Fields </label>
            <div class="flex flex-col">
              <Dropdown
                class="w-field"
                :options="loadTemplateFields"
                :value="list.fieldId"
                dataKey="fieldId"
                optionValue="fieldId"
                optionLabel="fieldName"
                placeholder="Select Field"
                @change="selectField($event, list, index)"
                filter
                :disabled="isUpdateButtonVisible"
              />
              <!-- <v-select
                :value="list.fieldId"
                :options="loadTemplateFields"
                label="fieldName"
                :reduce="(field) => field.fieldId"
                :clearable="false"
                class="w-full"
                style="min-width: 150px"
                @input="selectField($event, list, index)"
              /> -->
            </div>
          </div>
          <template
            v-if="
              list &&
              (list.type === 'formulaLoadedMiles' ||
                list.type === 'formulaEmptyMiles')
            "
          >
            <div class="w-32">
              <label class="text-xs"> Public Fuel Price </label>
              <div class="flex flex-col">
                <input
                  step="any"
                  type="number"
                  v-model.number="list.v1"
                  class="w-full custom-input"
                  @input="getPayment(index)"
                  :readonly="isUpdateButtonVisible"
                />
              </div>
            </div>
            <div class="w-40">
              <label class="text-xs">
                {{ 'Base Price' }}
              </label>
              <div class="flex flex-col">
                <input
                  step="any"
                  name="quantity"
                  type="number"
                  v-model.number="list.v2"
                  class="w-full custom-input"
                  :readonly="isFlatType || isUpdateButtonVisible"
                  @input="getPayment(index)"
                />
              </div>
            </div>
            <div class="w-40">
              <label class="text-xs"> Rate </label>
              <div class="flex flex-col">
                <input
                  step="any"
                  name="rate"
                  type="number"
                  v-model.number="list.rate"
                  class="w-full custom-input"
                  @input="getPayment(index)"
                  :readonly="isUpdateButtonVisible"
                />
              </div>
            </div>
            <div class="w-40">
              <label class="text-xs">
                {{ list.quantityLabel || 'Quantity' }}
              </label>
              <div class="flex flex-col">
                <input
                  step="any"
                  name="quantity"
                  type="number"
                  v-model.number="list.quantity"
                  class="w-full custom-input"
                  :readonly="isFlatType || isUpdateButtonVisible"
                  @input="getPayment(index)"
                />
              </div>
            </div>
            <div class="w-40">
              <label class="text-xs"> Payment </label>
              <div class="flex flex-col">
                <input
                  step="any"
                  name="payment"
                  type="number"
                  v-model.number="list.payment"
                  class="w-full custom-input"
                  readonly
                />
              </div>
            </div>
          </template>
          <template v-else>
            <div class="w-40" v-if="list.isPercentage">
              <label class="text-xs"> Percentage </label>
              <div class="flex flex-col">
                <input
                  step="any"
                  name="rate"
                  type="number"
                  v-model.number="list.percentage"
                  class="w-full custom-input"
                  @input="getPayment(index)"
                  :readonly="isUpdateButtonVisible"
                />
              </div>
            </div>
            <div class="w-40" v-else>
              <label class="text-xs"> Rate </label>
              <div class="flex flex-col">
                <input
                  step="any"
                  name="rate"
                  type="number"
                  v-model.number="list.rate"
                  class="w-full custom-input"
                  @input="getPayment(index)"
                  :readonly="isUpdateButtonVisible"
                />
              </div>
            </div>
            <div class="w-40">
              <label class="text-xs">
                {{ list.quantityLabel || 'Quantity' }}
              </label>
              <div class="flex flex-col">
                <input
                  step="any"
                  name="quantity"
                  type="number"
                  v-model.number="list.quantity"
                  class="w-full custom-input"
                  :readonly="isFlatType || isUpdateButtonVisible"
                  @input="getPayment(index)"
                />
              </div>
            </div>
            <div class="w-40" v-show="list.isStopPayType">
              <label class="text-xs">Pay start after</label>
              <div class="flex flex-col">
                <input
                  step="any"
                  name="quantity"
                  type="number"
                  v-model.number="list.payStartAfter"
                  class="w-full custom-input"
                  @input="getPayment(index)"
                  :readonly="isUpdateButtonVisible"
                />
              </div>
            </div>
            <div class="w-40">
              <label class="text-xs"> Payment </label>
              <div class="flex flex-col">
                <input
                  step="any"
                  name="payment"
                  type="number"
                  v-model.number="list.payment"
                  class="w-full custom-input"
                  readonly
                />
              </div>
            </div>
          </template>

          <div>
            <label class="text-xs"> Comments </label>
            <div class="flex flex-col">
              <vs-input
                step="any"
                name="quantity"
                type="text"
                v-model="list.comment"
                class="w-full"
                :readonly="isUpdateButtonVisible"
              />
            </div>
          </div>
          <template v-if="!isUpdateButtonVisible">
            <div class="w-6 pt-5 pl-2.5">
              <vx-tooltip text="Edit Custom Payment Field">
                <vs-button
                  color="primary"
                  type="border"
                  size="small"
                  icon="edit"
                  radius
                  @click="editCustomField(list)"
                ></vs-button>
                <!-- :disabled="!(loadTemplateFields || []).length" -->
                <!-- TODO : Validate relevance of above line  -->
              </vx-tooltip>
            </div>
            <div
              class="w-6 pt-5 pl-2.5 ml-2"
              style="margin-left: 1rem !important"
            >
              <vs-button
                color="danger"
                type="border"
                size="small"
                icon-pack="feather"
                icon="icon-trash"
                radius
                @click="removeTemplateField(index)"
              ></vs-button>
            </div>
          </template>
        </div>
      </div>
      <div class="vx-row mt-2 flex w-full">
        <vs-button
          v-if="!isUpdateButtonVisible"
          color="primary"
          type="border"
          @click="addTemplateFields"
        >
          Add New Payment
        </vs-button>
        <div
          class="flex gap-2 items-center ml-auto"
          v-if="isSaveButtonVisible || isUpdateButtonVisible"
        >
          <template v-if="hiddenSaveButtonDriverId">
            <vs-button
              v-if="isSaveButtonVisible"
              color="primary"
              @click.stop="$emit('onSave')"
            >
              Save
            </vs-button>
          </template>

          <vs-button
            v-if="isUpdateButtonVisible"
            color="primary"
            @click.stop="$emit('onUpdate')"
          >
            Update
          </vs-button>
        </div>
      </div>
      <div class="vx-row mt-3">
        <div class="flex items-center justify-between" v-if="!isBillingTab">
          <h5 class="text-base font-semibold">{{ loadTitle }} Load Payment:</h5>
          <p class="ml-2">
            <span class="mr-1">&dollar;</span>{{ getSumTotal | currencyFormat }}
          </p>
        </div>
        <vs-divider />
      </div>
    </div>

    <CustomFields
      :togglePopup="toggleAddCustomFieldPopup"
      :tripOptions="driverPayTripOption"
      :loadOptions="driverPayLoadOptions"
      :selectedTarget="target"
      :editCustomFieldData="editCustomFieldData"
      @closePopup="closePopup"
      @getCustomFields="$emit('updateCustomFields')"
    ></CustomFields>
  </section>
</template>

<script>
import CustomFields from '@/views/pages/account-settings/company/driver-pay-templates/components/CustomFields';
import { mapGetters } from 'vuex';

export default {
  name: 'LoadTemplate',
  components: {
    CustomFields,
  },
  props: {
    load: {
      // Load for which the calculation is being made
      type: Object,
      default: () => null,
      required: true,
    },
    customFields: {
      type: Object,
      default: () => null,
    },
    loadTitle: {
      type: String,
      default: () => '',
    },
    initLoadTemplateData: {
      type: Array,
      default: () => [],
    },
    isApproved: {
      type: Boolean,
      default: () => false,
    },
    isBillingTab: {
      type: Boolean,
      default: () => false,
    },
    isSaveButtonVisible: {
      type: Boolean,
      default: () => false,
    },
    isUpdateButtonVisible: {
      type: Boolean,
      default: () => false,
    },
    hiddenSaveButtonDriverId: {
      type: Boolean,
      default: () => false,
    },
    driverId: {
      type: Number,
      required: false,
    },
    isPreTripPayTemplateDetailsAvailable: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      toggleAddCustomFieldPopup: false,
      templateFieldList: [],
      editCustomFieldData: {},
      driverPayTripOption: [{ text: 'Flat Pay', value: 'flatPay' }],
      driverPayLoadOptions: [
        {
          text: 'By Loaded Miles',
          value: 'byLoadedMiles',
        },
        {
          text: 'By Empty Miles',
          value: 'byEmptyMiles',
        },
        {
          text: 'Flat Pay',
          value: 'flatPay',
        },
        {
          text: 'Stop Pay',
          value: 'stopPay',
        },
        {
          text: 'By Hour',
          value: 'byHour',
        },
        {
          text: 'By Percentage Of Hauling Fee',
          value: 'byPercentageOfHaulingFee',
        },
        {
          text: 'By Percentage Of Fuel Surcharge',
          value: 'byPercentageOfFuelSurcharge',
        },
        {
          text: 'By Percentage Of Total Income',
          value: 'byPercentageOfTotalIncome',
        },
        {
          text: 'Formula Loaded Miles',
          value: 'formulaLoadedMiles',
        },
        {
          text: 'Formula Empty Miles',
          value: 'formulaEmptyMiles',
        },
      ],
      target: '',
      loadTemplateFields: [],
      isFlatType: false,
      selectedLoad: 1,
      publicFuelPrice: null,
      isFirstCall: true,
    };
  },
  filters: {
    currencyFormat(value) {
      if (!value) return '0.00';

      return (+value).toFixed(2);
    },
  },
  computed: {
    ...mapGetters('load', ['getFuelPrice']),
    getSumTotal() {
      const total = this.templateFieldList.reduce((acc, curr) => {
        let payment = 0;
        if (curr.hasOwnProperty('payment')) {
          payment = Number(curr.payment);
        } else {
          payment = 0;
        }
        return acc + payment;
      }, 0);
      this.$emit('loadPaymentTotal', total);
      return parseFloat(total).toFixed(2);
    },
    loadTemplateFieldsMap() {
      return this.loadTemplateFields.reduce((acc, curr) => {
        acc[curr.fieldId] = curr;
        return acc;
      }, {});
    },
  },

  watch: {
    toggleAddCustomFieldPopup: {
      handler(val) {
        this.$emit('isCustomFieldPopupOpenOrNot', val);
      },
    },
    templateFieldList: {
      handler(val) {
        if (
          !this.isFirstCall ||
          (this.isFirstCall && !this.isPreTripPayTemplateDetailsAvailable)
        ) {
          this.$emit('toggleSaveButtonVisibility', this.driverId);
        }
        this.$emit('input', val);
        if (this.isBillingTab) {
          this.getSumTotal;
        }
        this.isFirstCall = false;
      },
      deep: true,
    },
    customFields: {
      handler(val) {
        if (val) {
          this.setCustomFields(val);
        }
      },
      deep: true,
      immediate: true,
    },
    loadTemplateFields: {
      handler(val) {
        this.$emit('loadTemplateFields', val);
      },
      deep: true,
      immediate: true,
    },
    initLoadTemplateData: {
      handler(val) {
        if (val && val.length) {
          let templatesOfRender = JSON.parse(JSON.stringify(val));
          this.templateFieldList = templatesOfRender.map((item, i) => {
            const templateArray =
              this.loadTemplateFieldsMap[item.fieldId] || {};
            const { qty, payment: paymentFromTemplate } = item || {};
            const {
              rate,
              quantity,
              quantityLabel,
              payment: calculatedPayment,
            } = this.getQuantityAndPaymentValue(this.load, {
              ...item,
              ...templateArray,
            });
            if (rate) {
              item.rate = rate;
            }
            item.quantity = qty ? parseFloat(qty) : parseFloat(quantity);
            item.payment = paymentFromTemplate
              ? paymentFromTemplate
              : calculatedPayment;
            const date = this.isBillingTab
              ? this.load.stops[0].shipping_date ||
                this.load.stops[0].date ||
                null
              : this.load.stops[0][0].date;

            return {
              ...item,
              type: templateArray.type,
              fieldName: templateArray.fieldName,
              isPercentage: !!item.percentage,
              isStopPayType: templateArray.type === 'stopPay',
              quantityLabel,
              v1: !item.v1 ? this.getFuelPrice(date) : item.v1,
            };
          });
        }
      },
      deep: true,
      immediate: true,
    },
  },

  created() {
    // this.getTemplateDataById({ value: this.selectedLoad });
    const date = this.isBillingTab
      ? this.load.stops[0].shipping_date || this.load.stops[0].date || null
      : this.load.stops[0][0].date;
    this.publicFuelPrice = this.getFuelPrice(date);
  },

  methods: {
    checkDriverPayTemplateType(item, i) {
      if (item && item.type && item.type.includes('byPercentage')) {
        this.$set(this.templateFieldList, i, { isPercentage: true });
        return;
      }
      if (item && item.fieldType && item.fieldType.includes('byPercentage')) {
        this.$set(this.templateFieldList, i, { isPercentage: true });
        return;
      }
      this.$set(this.templateFieldList, i, { isPercentage: false });
    },
    addNewCustomFieldOption(target) {
      this.target = target;
      this.toggleAddCustomFieldPopup = true;
    },
    setCustomFields(customFieldsData) {
      this.loadTemplateFields = ((customFieldsData || {}).loadFields || []).map(
        (item) => {
          return {
            ...item,
            fieldName: item.name,
            fieldId: item.id,
            defaultPercentage: item.defaultPercentage
              ? parseFloat(item.defaultPercentage).toFixed(2)
              : 0,
            defaultRate: item.defaultRate
              ? parseFloat(item.defaultRate).toFixed(2)
              : null,
          };
        }
      );
    },
    closePopup() {
      this.toggleAddCustomFieldPopup = false;
      this.editCustomFieldData = {};
      this.target = '';
    },
    addTemplateFields() {
      this.templateFieldList.push({
        id: null,
        selectedFieldId: '',
        rate: 0,
        quantity: 0,
        payment: 0,
        comment: '',
        fieldType: 'rate',
        payStartAfter: null,
        isStopPayType: false,
        percentage: null,
        isPercentage: false,
        v2: null,
        v3: null,
      });
    },
    resetTemplateFieldList() {
      this.loadTemplateFields = [];
      this.templateFieldList = this.templateFieldList.map((val) => {
        return {
          ...val,
          selectedFieldId: '',
          rate: 0,
          quantity: 0,
          payment: 0,
          comment: '',
          fieldType: 'rate',
          payStartAfter: null,
          isStopPayType: false,
          v2: null,
          v3: null,
        };
      });
    },
    /*getTemplateDataById({ value }) {
      // This function of code is no longer used in this component
      // since we have stopped using the concept of driverPayTemplateId for the time being
      if (!value) {
        this.resetTemplateFieldList();
        return;
      }
      // if (value !== this.selectedLoad) {
      //   this.resetTemplateFieldList()
      // }
      this.$store
        .dispatch("driverPayTemplates/getTemplateDataById", value)
        .then((data) => {
          this.loadTemplateFields = data.loadDetails;
        });
    },*/
    selectField(event, list, i) {
      const { value } = event;
      if (!value) return;
      this.templateFieldList[i] = {};
      const currentObj = this.loadTemplateFields.find(
        (val) => val.fieldId === value
      );
      this.checkDriverPayTemplateType(currentObj, i);

      const {
        defaultPercentage,
        defaultRate,
        type,
        defaultPayStartAfter,
        defaultV2,
        defaultV3,
      } = currentObj;
      this.templateFieldList[i].fieldId = currentObj.fieldId;
      if (type.includes('byPercentage')) {
        this.templateFieldList[i].percentage = Number(defaultPercentage);
        this.templateFieldList[i].rate = null;
      } else {
        this.templateFieldList[i].rate = Number(defaultRate);
        this.templateFieldList[i].percentage = null;
      }
      this.templateFieldList[i].type = type;
      if (type === 'stopPay') {
        this.templateFieldList[i].isStopPayType = true;
        this.templateFieldList[i].payStartAfter = defaultPayStartAfter;
      } else {
        this.templateFieldList[i].isStopPayType = false;
      }
      if (type === 'flatPay') {
        this.isFlatType = true;
        this.templateFieldList[i].quantity = 1;
      } else if (
        type === 'formulaLoadedMiles' ||
        type === 'formulaEmptyMiles'
      ) {
        this.templateFieldList[i].v1 = this.publicFuelPrice;
        this.templateFieldList[i].v2 = defaultV2;
        this.templateFieldList[i].v3 = defaultV3;
      } else {
        this.isFlatType = false;
      }
      const { quantity, quantityLabel, payment } =
        this.getQuantityAndPaymentValue(this.load, this.templateFieldList[i]);
      this.templateFieldList[i].quantity = quantity;
      this.templateFieldList[i].quantityLabel = quantityLabel;
      this.templateFieldList[i].payment = payment;

      this.getPayment(i);
    },
    formatAmount(amount) {
      if (isNaN(amount)) return null;

      return parseFloat(amount).toFixed(2);
    },
    getPayment(i) {
      const {
        rate,
        quantity,
        isStopPayType,
        percentage,
        isPercentage,
        payStartAfter,
        type,
        v1,
        v2,
        v3,
      } = this.templateFieldList[i];
      if (isPercentage) {
        let newObject = Object.assign({}, this.templateFieldList[i], {
          payment: this.formatAmount((percentage / 100) * quantity),
        });
        this.$set(this.templateFieldList, i, newObject);
      } else if (
        type === 'formulaEmptyMiles' ||
        type === 'formulaLoadedMiles'
      ) {
        const rate = (v1 - v2) / v3;
        let newObject = Object.assign({}, this.templateFieldList[i], {
          rate: rate.toFixed(3),
          payment: this.formatAmount(Number(rate) * quantity),
        });
        this.$set(this.templateFieldList, i, newObject);
      } else {
        if (isStopPayType) {
          let multiplier = Number(quantity) - Number(payStartAfter);
          let payment =
            multiplier > 0 ? this.formatAmount(multiplier * Number(rate)) : 0;
          let newObject = Object.assign({}, this.templateFieldList[i], {
            payment,
          });
          this.$set(this.templateFieldList, i, newObject);
        } else {
          let newObject = Object.assign({}, this.templateFieldList[i], {
            payment: this.formatAmount(Number(rate) * quantity),
          });
          this.$set(this.templateFieldList, i, newObject);
        }
      }
    },
    removeTemplateField(index) {
      this.templateFieldList.splice(index, 1);
    },
    getQuantityAndPaymentValue(loadData, fieldData) {
      /** Mentioning the payType and the corresponding field name in the load object 
          By % of total income: qty is load income/amount/rate: loadTotalRate.
          By % of fuel surcharge: qty is loadFuelSurcharge.
          By % of hauling fees: qty is loadHaulingFees.
          By hour: qty: user input.
          Stop Pay: qty is array_size(stops), payStartAfter: coming from template data. amount = rate * (qty - payStartAfter).
          Flat pay: qty is 1, no change.
          By empty miles: qty is emptyDistance.
          By loaded miles: qty is loadedDistance.
        */
      // byPercentageOfTotalIncome: "loadTotalRate",
      // byPercentageOfFuelSurcharge: "loadFuelSurcharge",
      // byPercentageOfHaulingFee: "loadHaulingFees",
      // byHour: "", // user input
      // stopPay: "stops".length,
      // flatPay: 1,
      // byEmptyMiles: "emptyDistance",
      // byLoadedMiles: "loadedDistance",
      let { type, percentage, rate } = fieldData || {};
      percentage = Number(percentage) || 0;
      rate = Number(rate) || 0;
      const date = this.isBillingTab
        ? this.load.stops[0].shipping_date || this.load.stops[0].date || null
        : this.load.stops[0][0].date;
      let v1 = this.getFuelPrice(date);
      const { v2, v3 } = fieldData;
      let quantity = 0,
        rateFormula;

      switch (type) {
        case 'byLoadedMiles':
          quantity = loadData.loadedDistance || 0;
          return {
            quantity,
            quantityLabel: 'Loaded Miles',
            payment: this.formatAmount(quantity * rate),
          };
        case 'byEmptyMiles':
          quantity = loadData.emptyDistance || 0;
          return {
            quantity,
            quantityLabel: 'Empty Miles',
            payment: this.formatAmount(quantity * rate),
          };
        case 'flatPay':
          return {
            quantity: 1,
            quantityLabel: 'Quantity',
            payment: this.formatAmount(1 * rate),
          };
        case 'stopPay':
          quantity = loadData.stops.length || 0;
          let payStartAfter = fieldData.payStartAfter || 0;
          let multiplier = quantity - payStartAfter;
          return {
            quantity,
            quantityLabel: 'Stops',
            payment: multiplier > 0 ? this.formatAmount(multiplier * rate) : 0,
          };
        case 'byHour':
          return {
            quantity: 0,
            quantityLabel: 'Hours',
            payment: 0,
          };
        case 'byPercentageOfHaulingFee':
          quantity = loadData.loadHaulingFees || 0;
          return {
            quantity,
            quantityLabel: 'Hauling Fee',
            payment: this.formatAmount((percentage / 100) * quantity),
          };
        case 'byPercentageOfFuelSurcharge':
          quantity = loadData.loadFuelSurcharge || 0;
          return {
            quantity,
            quantityLabel: 'Fuel Surcharge',
            payment: this.formatAmount((percentage / 100) * quantity),
          };
        case 'byPercentageOfTotalIncome':
          quantity = loadData.loadTotalRate || 0;
          return {
            quantity,
            quantityLabel: 'Load Rate',
            payment: this.formatAmount((percentage / 100) * quantity),
          };
        case 'formulaLoadedMiles':
          quantity = loadData.loadedDistance || 0;
          rateFormula = (v1 - v2) / v3;
          return {
            quantity,
            quantityLabel: 'Loaded Miles',
            rate: rateFormula.toFixed(3), // Round the rate to 3 decimal places
            payment: this.formatAmount(quantity * rateFormula),
          };
        case 'formulaEmptyMiles':
          quantity = loadData.emptyDistance || 0;
          rateFormula = (v1 - v2) / v3;
          return {
            rate: rateFormula.toFixed(3),
            quantity,
            quantityLabel: 'Empty Miles',
            payment: this.formatAmount(quantity * rateFormula),
          };
        default:
          return {
            quantity: 0,
            payment: 0,
            quantityLabel: '',
          };
      }
    },
    editCustomField(item) {
      this.target = item.fieldTarget;
      if (!item.hasOwnProperty('id')) {
        let getDefaultFields = this.loadTemplateFields.find(
          (x) => x.id === item.fieldId
        );
        this.editCustomFieldData = getDefaultFields || {};
      } else {
        this.editCustomFieldData = item;
      }
      this.toggleAddCustomFieldPopup = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.max-width-125 {
  width: 125px;
}

.min-width-125 {
  min-width: 125px;
}

.custom-input {
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0.7rem !important;
  color: inherit;
  position: relative;
  padding: 0.4rem;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  box-shadow: 0 0 0 0 rgb(0 0 0 / 15%);
  transition: all 0.3s ease;
  width: 100%;
}

.w-40 {
  width: 6rem; /* 140px */
}

.w-field {
  width: 15rem;
}
::v-deep .vs__dropdown-menu {
  max-height: 180px !important;
}
</style>
