<template>
  <!-- Finance Form -->
  <vx-card class="mt-4">
    <div class="vx-row">
      <div class="vx-col">
        <h5 class="font-bold">Finance</h5>
      </div>
    </div>
    <vs-divider />
    <div class="vx-row">
      <div class="vx-col w-full">
        <label class="text-xs">Ownership Type</label>
        <v-select
          data-vv-as="selected"
          name="value"
          label="label"
          :options="ownershipOptions"
          :reduce="(option) => option.value"
          v-model="ownershipType"
          :clearable="true"
          class="mb-4 md:mb-0"
        />
      </div>
    </div>
    <!-- Acquisition date and cost -->
    <div class="vx-row">
      <!-- Acquisition Date -->
      <div class="vx-col w-1/2">
        <label class="text-xs">Date Acquired</label>
        <flat-pickr
          placeholder=""
          class="w-full"
          name="dateAcquired"
          v-model="dateAcquired"
        />
      </div>
      <!-- Acquisition Cost -->
      <div class="vx-col w-1/2">
        <label class="text-xs">Cost</label>
        <vx-input-group>
          <template slot="prepend">
            <div class="prepend-text bg-primary">
              <span>$</span>
            </div>
          </template>
          <vs-input
            class="w-full"
            type="number"
            step="any"
            name="acquireCost"
            v-model.number="acquireCost"
            v-validate="'decimal:2'"
          />
        </vx-input-group>
        <span class="text-danger text-sm">
          {{ errors.first("acquireCost") }}
        </span>
      </div>
    </div>
    <!-- Lending and EMI details  -->
    <div class="vx-row">
      <div class="vx-col w-1/2">
        <label class="text-xs">Payment Start Date</label>
        <flat-pickr
          placeholder=""
          class="w-full"
          name="paymentStartDate"
          v-model="paymentStartDate"
        />
      </div>
      <div class="vx-col w-1/2">
        <label class="text-xs">Payment End Date</label>
        <flat-pickr
          placeholder=""
          class="w-full"
          name="paymentEndDate"
          v-model="paymentEndDate"
        />
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col w-1/2">
        <label class="text-xs">Interest Rate</label>
        <vx-input-group>
          <template slot="prepend">
            <div class="prepend-text bg-primary">
              <span>%</span>
            </div>
          </template>
          <vs-input
            v-validate="'decimal:4|max_value:100|min_value:0'"
            class="w-full"
            type="number"
            step="any"
            name="interestRate"
            v-model.number="interestRate"
          />
        </vx-input-group>
        <span class="text-danger text-sm">
          {{ errors.first("interestRate") }}
        </span>
      </div>
      <div class="vx-col w-1/2">
        <label class="text-xs">Lender</label>
        <vs-input class="w-full" name="lender" v-model="lender" />
      </div>
    </div>
    <!-- Monthly Payment & Contract Number-->
    <div class="vx-row">
      <div class="vx-col w-1/2">
        <label class="text-xs">Monthly Payment</label>
        <vx-input-group>
          <template slot="prepend">
            <div class="prepend-text bg-primary">
              <span>$</span>
            </div>
          </template>
          <vs-input
            class="w-full"
            type="number"
            step="any"
            name="monthlyPayment"
            v-model.number="monthlyPayment"
            v-validate="'decimal:2'"
          />
        </vx-input-group>
        <span class="text-danger text-sm">
          {{ errors.first("monthlyPayment") }}
        </span>
      </div>
      <div class="vx-col w-1/2">
        <label class="text-xs">Contract Number</label>
        <vs-input
          class="w-full"
          name="contractNumber"
          v-model="contractNumber"
        />
      </div>
    </div>
    <!-- Sale date and price -->
    <div class="vx-row">
      <!-- Price Sold -->
      <div class="vx-col w-1/2">
        <label class="text-xs">Price Sold</label>
        <vx-input-group>
          <template slot="prepend">
            <div class="prepend-text bg-primary">
              <span>$</span>
            </div>
          </template>
          <vs-input
            class="w-full"
            type="number"
            step="any"
            name="priceSold"
            v-model.number="priceSold"
            v-validate="'decimal:2'"
          />
        </vx-input-group>
        <span class="text-danger text-sm">
          {{ errors.first("priceSold") }}
        </span>
      </div>
      <!-- Date Sold -->
      <div class="vx-col w-1/2">
        <label class="text-xs">Date Sold</label>
        <flat-pickr
          placeholder=""
          class="w-full"
          name="dateSold"
          v-model="dateSold"
        />
      </div>
    </div>
    <!-- <div class="vx-row">
      <div class="vx-col w-1/2">
        <div class="vx-col w-1/2">
          <label class="text-xs">Selling Price</label>
          <vs-input class="w-full" :value="'$ 0.00'" />
        </div>
      </div>
    </div> -->
  </vx-card>
</template>

<script>
// For custom error message
import { Validator } from "vee-validate";
const dict = {
  custom: {
    acquireCost: {
      decimal: "The field must be numeric and may contain 2 decimal points",
    },
    interestRate: {
      decimal: "Interest rate should be between 0 and 100, with upto 4 decimal places",
      min_value: "Interest rate should be between 0 and 100, with upto 4 decimal places",
      max_value: "Interest rate should be between 0 and 100, with upto 4 decimal places",
    },
    monthlyPayment: {
      decimal: "The field must be numeric and may contain 2 decimal points",
    },
    priceSold: {
      decimal: "The field must be numeric and may contain 2 decimal points",
    },
  },
};
// Register custom messages
Validator.localize("en", dict);
export default {
  name: "FinancialForm",
  data() {
    return {
      ownershipType: null, // string,
      dateAcquired: null, // date.
      acquireCost: null, // decimal.
      paymentStartDate: null, //  date.
      paymentEndDate: null, //  date.
      interestRate: null, //  decimal. Allowed values from 0 to 1.0. Sample values: 0.123456 means 12.3456%. At most 6 decimal places.
      lender: null, //  string.
      monthlyPayment: null, //  decimal.
      contractNumber: null, //  string
      priceSold: null, //  decimal.
      dateSold: null, //  date.
      ownershipOptions: [
        { label: "Company Truck", value: "company_truck" },
        { label: "Owner operator", value: "owner_operator" },
        { label: "Leased", value: "leased" },
      ],
    };
  },
  props: {
    truckData: {
      type: Object,
      default: null,
    },
    value: {
      type: Object,
      default: null,
    },
  },
  computed: {
    emitDate() {
      const {
        ownershipType,
        dateAcquired,
        acquireCost,
        paymentStartDate,
        paymentEndDate,
        interestRate,
        lender,
        monthlyPayment,
        contractNumber,
        priceSold,
        dateSold,
      } = this || {};
      return {
        ownershipType,
        dateAcquired,
        acquireCost,
        paymentStartDate,
        paymentEndDate,
        interestRate,
        lender,
        monthlyPayment,
        contractNumber,
        priceSold,
        dateSold,
      };
    },
  },
  watch: {
    emitDate(newVal) {
      this.$emit("input", newVal);
    },
    value: {
      handler (newVal) {
        const { 
          ownershipType,
          dateAcquired,
          acquireCost,
          paymentStartDate,
          paymentEndDate,
          interestRate,
          lender,
          monthlyPayment,
          contractNumber,
          priceSold,
          dateSold
        }  = newVal || {};
        this.ownershipType = ownershipType;
        this.dateAcquired = dateAcquired;
        this.acquireCost = acquireCost;
        this.paymentStartDate = paymentStartDate;
        this.paymentEndDate = paymentEndDate;
        this.interestRate = interestRate;
        this.lender = lender;
        this.monthlyPayment = monthlyPayment;
        this.contractNumber = contractNumber;
        this.priceSold = priceSold;
        this.dateSold = dateSold;
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    async validate() {
      await this.$validator.validateAll();
      if (this.errors.items.length) {
        return false;
      }
      return true;
    },
  },
};
</script>
