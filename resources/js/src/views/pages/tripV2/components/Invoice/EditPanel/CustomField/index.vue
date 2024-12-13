<template>
  <vx-card class="mt-2">
    <header>
      <div class="vx-row flex justify-between items-end">
        <div class="vx-col">
          <h5 class="font-bold flex">
            <span> Custom Payment Fields </span>
            <vx-tooltip
              class="ml-1"
              text="Custom invoice fields let you include extra information into the summary block. Expected->  Name = String; Value= Number(2 decimal max)"
            >
              <vs-icon icon="info" size="small" color="primary" />
            </vx-tooltip>
          </h5>
        </div>
        <div class="vx-col flex">
          <vs-button
            color="primary"
            size="small"
            type="filled"
            class="mr-2"
            @click.stop="addField"
          >
            ADD
          </vs-button>
          <vs-button
            color="primary"
            size="small"
            type="filled"
            @click.stop="addNewCustomPaymentFields"
          >
            ADD NEW FIELD
          </vs-button>
        </div>
      </div>
      <vs-divider />
    </header>
    <section v-if="customFields.length">
      <section
        v-for="(field, index) in customFields"
        :key="`${field.fieldId}_${index}`"
      >
        <div class="vx-row flex justify-between items-center">
          <div class="vx-col flex items-start gap-2">
            <!-- <vs-input v-model="field.fieldId" label="Field Name" class="mr-2" /> -->
            <div>
              <label>Field Name</label>
              <v-select
                :options="paymentCustomOptions"
                label="name"
                :clearable="false"
                :reduce="(option) => option.fieldId"
                v-model="field.fieldId"
                class="w-64"
                @input="isFieldPercentage(field.fieldId, index)"
              />
            </div>

            <vs-input
              v-if="field.percentage != null || field.isPercentage"
              @click.native.stop
              v-model.number="field.percentage"
              type="number"
              label="Field Percentage"
              min="-100"
              max="100"
              @input="handlePercentageAmount($event, index)"
            />
            <!-- @keypress="validateNumberMinMax($event)" -->
            <vs-input
              v-else
              @click.native.stop
              v-model.number="field.payment"
              type="number"
              label="Field Value"
            >
            </vs-input>
          </div>
          <div class="vx-col flex items-end">
            <vs-button
              class="delete-btn ml-1 mb-2"
              color="danger"
              size="small"
              type="border"
              icon="delete"
              @click.stop="deleteField(index)"
            />
          </div>
        </div>
        <vs-divider />
      </section>
    </section>
    <section v-else>
      <div class="vx-row flex justify-centre">
        <div class="vx-col">
          <h5 class="font-italic">No custom payment fields added</h5>
        </div>
      </div>
    </section>
    <CustomFieldPopup
      :active.sync="customPaymentFieldPopup"
      @customFieldPayment::added="addNewCustomFieldPayment"
      @close="customPaymentFieldPopup = false"
    />
  </vx-card>
</template>
<!-- eslint-disable nonblock-statement-body-position object-shorthand -->
<script>
import CustomFieldPopup from "./CustomFieldPopup.vue";
export default {
  name: "CustomFieldBlock",
  props: {
    customFieldsData: {
      type: Array,
      default: () => [],
    },
    toggleAddNewInvoicePopup: {
      type: Boolean,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    CustomFieldPopup,
  },
  data() {
    return {
      customFields: [],
      paymentCustomOptions: [{ id: null, name: "Add new", description: "" }],
      customPaymentFieldPopup: false,
      isPercentage: false,
      subTotalAmount: 0,
    };
  },
  watch: {
    items: {
      handler(val) {
        this.subTotalAmount = val.reduce(
          (acc, curr) => acc + Number(curr.rate) * Number(curr.qty),
          0
        );
        this.customFields.forEach((field, i) => {
          if (
            field.percentage ||
            field.percentage === 0 ||
            field.percentage === "0"
          ) {
            this.handlePercentageAmount(field.percentage, i);
          }
        });
      },
    },
    customFields: {
      handler: function (val) {
        this.$emit("customFieldsUpdate", val);
        this.$emit("customFieldsOptions", this.paymentCustomOptions);
      },
      deep: true,
    },
    customFieldsData: {
      handler(val) {
        this.customFields = val;
      },
    },
  },

  mounted() {
    this.initCustomFields();
    this.$nextTick(() => {
      this.getInvoiceCustomFields();
    });
  },
  methods: {
    handlePercentageAmount(value, index) {
      this.customFields[index].payment =
        Number.parseFloat(value * this.subTotalAmount / 100).toFixed(2);
    },
    getInvoiceCustomFields() {
      this.$store
        .dispatch("invoiceV2/getInvoiceCustomFields")
        .then(({ data }) => {
          this.paymentCustomOptions = data.payload.fields;
          this.$emit("customFieldsOptions", this.paymentCustomOptions);
          this.customFields.forEach((field, i) => {
            if (field.percentage) {
              this.handlePercentageAmount(field.percentage, i);
            }
          });
        });
    },
    addNewCustomPaymentFields() {
      // if (!id) {
      this.customPaymentFieldPopup = true;
      // }
    },
    addNewCustomFieldPayment() {
      this.getInvoiceCustomFields();
    },
    addField() {
      this.customFields.push({
        fieldId: null,
        payment: null,
        percentage: null,
        isPercentage: false,
      });
    },
    deleteField(index) {
      this.customFields.splice(index, 1);
    },
    toFixed(x, d) {
      if (!d) return x.toFixed(d); // don't go wrong if no decimal
      return Number(x)
        .toFixed(d)
        .replace(/\.?0+$/, "");
    },
    isFieldPercentage(fieldId) {
      if (!fieldId) return false;

      const field = this.paymentCustomOptions.find(
        (field) => field.fieldId === fieldId
      );

      if (field && field.percentageOf === "subtotal") {
        // this code works
        this.customFields = this.customFields.map((x) =>
          x.fieldId === fieldId ? { ...x, isPercentage: true } : x
        );
      } else {
        this.customFields = this.customFields.map((x) =>
          x.fieldId === fieldId
            ? { ...x, isPercentage: false, percentage: null, payment: "" }
            : x
        );
      }
    },
    initCustomFields() {
      this.$nextTick(() => {
        this.customFields.forEach((field) => {
          field.isPercentage =
            field.percentage !== undefined && field.percentage !== null;
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.delete-btn {
  margin-bottom: -1.5rem !important;
}
::v-deep {
  .vs-button-linex {
    display: none;
  }
  .vs-input {
    width: 100%;
    input,
    .vs-input--input {
      border: none !important;
      background: #f7f8f9 !important;
      box-shadow: none !important;
    }
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    /*!* Firefox *!*/
    input[type="number"] {
      -moz-appearance: textfield;
    }
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      opacity: 1;
    }
  }
  .dollar-text {
    color: inherit !important;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .vs-input--icon {
    top: 12px;
    border-right: none !important;
  }
  .vs-divider {
    margin: 10px 0;
  }
}
</style>
