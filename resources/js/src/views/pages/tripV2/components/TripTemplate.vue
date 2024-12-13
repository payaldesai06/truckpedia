<template>
  <section>
    <!-- <div class="vx-row justify-between items-center mb-6">
      <Dropdown
        class="min-width-125 mr-2"
        showClear
        :options="loads"
        v-model="selectedLoad"
        dataKey="uniqueId"
        optionLabel="name"
        optionValue="id"
        placeholder="Select template"
        @change="getTemplateDataById($event)"
      />
    </div> -->

    <div>
      <div class="vx-row flex justify-between items-center mb-2 w-full">
        <h5 class="">Recurring Payments</h5>
        <div>
          <vs-button
            color="primary"
            type="filled"
            size="small"
            @click="addNewCustomFieldOption('trip')"
            >New Recurring Payment Field</vs-button
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
                :options="tripTemplateFields"
                :value="list.fieldId"
                dataKey="id"
                optionValue="id"
                optionLabel="fieldName"
                placeholder="Select Field"
                @change="selectField($event, list, index)"
                filter
              />
              <!-- <v-select
                :value="list.fieldId"
                :options="tripTemplateFields"
                :reduce="(field) => field.id"
                label="fieldName"
                :clearable="false"
                class="w-full"
                style="min-width: 150px"
                @input="selectField($event, list, index)"
              /> -->
            </div>
          </div>

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
              />
            </div>
          </div>
          <div class="w-40">
            <label class="text-xs">Quantity </label>
            <div class="flex flex-col">
              <input
                step="any"
                name="quantity"
                type="number"
                v-model.number="list.quantity"
                class="w-full custom-input"
                :readonly="isFlatType"
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
          <div>
            <label class="text-xs"> Comments </label>
            <div class="flex flex-col">
              <vs-input
                step="any"
                name="quantity"
                type="text"
                v-model="list.comment"
                class="w-full"
              />
            </div>
          </div>
          <template>
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
                <!-- :disabled="!(tripTemplateFields || []).length" -->
                <!-- TODO : Validate relevance of above line  -->
              </vx-tooltip>
            </div>
            <div class="w-6 pt-5 pl-2.5" style="margin-left: 1rem !important">
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
      <div class="vx-row w-6/12 mt-2">
        <vs-button color="primary" type="border" @click="addTemplateFields">
          Add New Payment
        </vs-button>
      </div>
      <div class="vx-row">
        <vs-divider />
        <div class="flex items-center justify-between">
          <h5 class="text-base font-semibold">Recurring Total Payment:</h5>
          <p class="ml-2">
            <span class="mr-1">&dollar;</span>{{ getSumTotal | currencyFormat }}
          </p>
        </div>
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
import CustomFields from '../../../pages/account-settings/company/driver-pay-templates/components/CustomFields';
export default {
  name: 'TripTemplate',
  components: {
    CustomFields,
  },
  props: {
    // loads: {
    //   type: Array,
    //   default: () => [],
    // },
    customFields: {
      type: Object,
      default: () => null,
    },
    initTripTemplateData: {
      type: Array,
      default: () => [],
    },
    isApproved: {
      type: Boolean,
      default: () => false,
    },
  },
  filters: {
    currencyFormat(value) {
      if (!value) return '0.00';

      return (+value).toFixed(2);
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
      ],
      target: '',
      tripTemplateFields: [],
      isFlatType: false,
      selectedLoad: 1,
    };
  },
  computed: {
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
      this.$emit('tripPaymentTotal', this.formatAmount(total));
      return this.formatAmount(total);
    },
  },
  mounted() {
    // this.getTemplateDataById({ value: this.selectedLoad });
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
      this.tripTemplateFields = ((customFieldsData || {}).tripFields || []).map(
        (item) => {
          return {
            fieldName: item.name,
            defaultPercentage: item.defaultPercentage
              ? parseFloat(item.defaultPercentage).toFixed(2)
              : 0,
            defaultRate: item.defaultRate
              ? parseFloat(item.defaultRate).toFixed(2)
              : null,
            ...item,
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
        payStartAfter: 0,
        isStopPayType: false,
        percentage: null,
        isPercentage: false,
      });
    },
    // resetTemplateFieldList() {
    //   this.tripTemplateFields = [];
    //   this.templateFieldList = this.templateFieldList.map((val) => {
    //     return {
    //       ...val,
    //       selectedFieldId: "",
    //       rate: 0,
    //       quantity: 0,
    //       payment: 0,
    //       comment: "",
    //       fieldType: "rate",
    //       payStartAfter: 0,
    //       isStopPayType: false,
    //     };
    //   });
    // },
    // getTemplateDataById({ value }) {
    //   if (!value) {
    //     this.resetTemplateFieldList();
    //     return;
    //   }
    //   // if (value !== this.selectedLoad) {
    //   //   this.resetTemplateFieldList()
    //   // }
    //   this.$store
    //     .dispatch("driverPayTemplates/getTemplateDataById", value)
    //     .then((data) => {
    //       this.tripTemplateFields = data.tripDetails;
    //     });
    // },
    selectField(event, list, i) {
      const { value } = event;
      if (!value) return;

      this.templateFieldList[i] = {};

      const currentObj = this.tripTemplateFields.find(
        (val) => val.fieldId || val.id === value
      );
      this.checkDriverPayTemplateType(currentObj, i);
      const { defaultPercentage, defaultRate, type } = currentObj;
      this.templateFieldList[i].fieldId = value;
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
      } else {
        this.templateFieldList[i].isStopPayType = false;
      }
      if (type === 'flatPay') {
        this.isFlatType = true;
        this.templateFieldList[i].quantity = 1;
      } else {
        this.isFlatType = false;
        this.templateFieldList[i].quantity = 0;
      }

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
      } = this.templateFieldList[i];
      if (isPercentage) {
        let newObject = Object.assign({}, this.templateFieldList[i], {
          payment: this.formatAmount((percentage / 100) * quantity),
        });
        this.$set(this.templateFieldList, i, newObject);
      } else {
        if (isStopPayType) {
          let newObject = Object.assign({}, this.templateFieldList[i], {
            payment: this.formatAmount(rate * quantity - payStartAfter),
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
    editCustomField(item) {
      this.target = item.fieldTarget;
      if (!item.hasOwnProperty('id')) {
        let getDefaultFields = this.tripTemplateFields.find(
          (x) => x.id === item.fieldId
        );
        this.editCustomFieldData = getDefaultFields || {};
      } else {
        this.editCustomFieldData = item;
      }
      this.toggleAddCustomFieldPopup = true;
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
        this.$emit('input', val);
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
    initTripTemplateData: {
      handler(val) {
        if (val) {
          this.templateFieldList = val.map((item) => {
            const [templateArray] = this.tripTemplateFields.filter((ele) => {
              if (ele.id === item.fieldId) {
                return ele;
              }
            });
            return {
              fieldName: templateArray.fieldName,
              type: templateArray.type,
              ...item,
              quantity: item.qty ? parseFloat(item.qty) : 1,
              payment: item.payment
                ? this.formatAmount(item.payment)
                : this.formatAmount(item.rate),
            };
          });
        }
      },
      deep: true,
      immediate: true,
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
</style>
