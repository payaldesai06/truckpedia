<template>
  <!-- Truck Info Form -->
  <vx-card class="info-form">
    <div class="vx-row">
      <div class="vx-col">
        <h5 class="font-bold">Truck Info</h5>
      </div>
    </div>
    <vs-divider />
    <!-- Status  -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <label class="text-xs">Status<field-required-sign /></label>
        <v-select
          v-validate="'included:active,inactive'"
          data-vv-as="selected"
          name="status"
          label="label"
          :options="statusOptions"
          :reduce="(option) => option.value"
          v-model="status"
          :clearable="false"
          class="mb-4 md:mb-0"
        />
        <span class="text-danger text-sm">{{ errors.first("status") }}</span>
      </div>
    </div>
    <!-- Tag  -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <label class="text-xs">Tag</label>
        <v-select
          data-vv-name="tags"
          name="tags"
          :options="allTags"
          :clearable="true"
          v-model="tags"
          :get-option-label="getOptionLabel"
          class="mb-4 md:mb-0"
          multiple
        />
      </div>
    </div>
    <!-- Truck Number  -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <label class="text-xs">Truck Number <field-required-sign /></label>
        <vs-input
          v-validate="'required'"
          data-vv-validate-on="blur"
          name="truckNumber"
          v-model="truckNumber"
          class="w-full"
        />
        <span class="text-danger text-sm">{{
          errors.first("truckNumber")
        }}</span>
      </div>
    </div>
    <!-- Year  -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <label class="text-xs">Year</label>
        <Calendar
          v-model="year"
          view="year"
          :manualInput="false"
          name="year"
          dateFormat="yy"
          class="w-full"
        />
      </div>
    </div>
    <!-- Make  -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <label class="text-xs">Make</label>
        <vs-input name="make" v-model="make" class="w-full" />
      </div>
    </div>
    <!-- Model  -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <label class="text-xs">Model</label>
        <vs-input name="model" v-model="model" class="w-full" />
      </div>
    </div>
    <!-- Color  -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <label class="text-xs">Color</label>
        <vs-input class="w-full" name="color" v-model="color" />
      </div>
    </div>
    <!-- Vin  -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <label class="text-xs">Vin</label>
        <vs-input class="w-full" name="vin" v-model="vin" />
      </div>
    </div>
    <!-- License Plate -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <label class="text-xs">License Plate</label>
        <vs-input class="w-full" name="licensePlate" v-model="licensePlate" />
      </div>
    </div>
    <!-- State -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <label class="text-xs">State</label>
        <v-select
          name="licenseState"
          label="text"
          :options="stateOption"
          :reduce="(option) => option.text"
          v-model="licenseState"
          :clearable="true"
          class="mb-4 md:mb-0"
        />
      </div>
    </div>
    <!-- Hourly Cost Value -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <label class="text-xs">Hourly Cost</label>
        <vx-input-group>
          <template slot="prepend">
            <div class="prepend-text bg-primary">
              <span>$</span>
            </div>
          </template>
          <vs-input
            v-validate="'decimal:2'"
            class="w-full"
            type="number"
            step="any"
            name="hourlyCost"
            v-model.number="hourlyCost"
          />
        </vx-input-group>
        <span class="text-danger text-sm">
          {{ errors.first("hourlyCost") }}
        </span>
      </div>
    </div>
    <!-- Hourly Cost  -->
    <!-- Insurance Value -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <label class="text-xs">Insurance Value</label>
        <vx-input-group>
          <template slot="prepend">
            <div class="prepend-text bg-primary">
              <span>$</span>
            </div>
          </template>
          <vs-input
            v-validate="'decimal:2'"
            class="w-full"
            type="number"
            step="any"
            name="insuranceValue"
            v-model.number="insuranceValue"
          />
        </vx-input-group>
        <span class="text-danger text-sm">
          {{ errors.first("insuranceValue") }}
        </span>
      </div>
    </div>
    <!-- Insurance  -->
    <div class="vx-row">
      <!-- Monthly Insurance Cost -->
      <div class="vx-col w-1/2">
        <label class="text-xs">Monthly Insurance Cost</label>
        <vx-input-group>
          <template slot="prepend">
            <div class="prepend-text bg-primary">
              <span>$</span>
            </div>
          </template>
          <vs-input
            v-validate="'decimal:2'"
            class="w-full"
            type="number"
            step="any"
            name="monthlyInsuranceCost"
            v-model.number="monthlyInsuranceCost"
          />
        </vx-input-group>
        <span class="text-danger text-sm">
          {{ errors.first("monthlyInsuranceCost") }}
        </span>
      </div>
      <!-- Total Insurance Cost -->
      <div class="vx-col w-1/2">
        <label class="text-xs">Total Insurance Cost</label>
        <vx-input-group>
          <template slot="prepend">
            <div class="prepend-text bg-primary">
              <span>$</span>
            </div>
          </template>
          <vs-input
            v-validate="'decimal:2'"
            class="w-full"
            type="number"
            step="any"
            name="totalInsuranceCost"
            v-model.number="totalInsuranceCost"
          />
        </vx-input-group>
        <span class="text-danger text-sm">
          {{ errors.first("totalInsuranceCost") }}
        </span>
      </div>
    </div>
    <!-- Check box holder  -->
    <!-- <section>
      <div class="vx-row">
        <div class="vx-col w-full">
          <vs-checkbox class="text-xs mt-3">Lease ?</vs-checkbox>
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col w-full">
          <vs-checkbox class="text-xs mt-3">Damage Waiver</vs-checkbox>
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col w-full">
          <vs-checkbox class="text-xs mt-3">
            Lease Agreement with Option to Purchase
          </vs-checkbox>
        </div>
      </div>
    </section> -->
  </vx-card>
</template>

<script>
import Vue from "vue";
import PrimeVue from "primevue/config";
import Calendar from "primevue/calendar";
import config from "@/config/constants.js";
// For custom error message
import { Validator } from 'vee-validate';
import { mapGetters } from "vuex";

const dict = {
  custom: {
    status: {
      required: "The status field is required.",
    },
    truckNumber: {
      required: "The truck number field is required.",
    },
    insuranceValue: {
      decimal: "The field must be numeric and may contain 2 decimal points",
    },
    monthlyInsuranceCost: {
      decimal: "The field must be numeric and may contain 2 decimal points",
    },
    totalInsuranceCost: {
      decimal: "The field must be numeric and may contain 2 decimal points",
    },
  },
};
// Register custom messages
Validator.localize("en", dict);
Vue.use(PrimeVue, {
  locale: {},
});

export default {
  name: "TruckInfoForm",
  components: {
    Calendar,
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
    ...mapGetters("tag", ["allTags"]),
    emitDate() {
      const {
        status,
        tags,
        truckNumber,
        year,
        make,
        model,
        color,
        vin,
        licensePlate,
        licenseState,
        hourlyCost,
        insuranceValue,
        monthlyInsuranceCost,
        totalInsuranceCost,
      } = this || {};
      return {
        status,
        tags,
        truckNumber,
        year: year
          ? typeof year == "string"
            ? year
            : String(new Date(year).getFullYear())
          : year,
        make,
        model,
        color,
        vin,
        licensePlate,
        licenseState,
        hourlyCost,
        insuranceValue,
        monthlyInsuranceCost,
        totalInsuranceCost
      }
    },
  },
  watch: {
    emitDate(newVal) {
      this.$emit("input", newVal);
    },
    value: {
      handler (newVal) {
        const {
          status,
          truckNumber,
          year,
          make,
          model,
          color,
          vin,
          licensePlate,
          licenseState,
          hourlyCost,
          insuranceValue,
          monthlyInsuranceCost,
          totalInsuranceCost,
          tags
        }  = newVal || {};
        if(status){
          this.status = status;
        }
        this.truckNumber = truckNumber;
        this.year = year || null;
        this.make = make;
        this.model = model;
        this.color = color;
        this.vin = vin;
        this.licensePlate = licensePlate;
        this.licenseState = licenseState;
        this.hourlyCost = hourlyCost;
        this.insuranceValue = insuranceValue;
        this.monthlyInsuranceCost = monthlyInsuranceCost;
        this.totalInsuranceCost = totalInsuranceCost;
        this.tags = tags;
      },
      immediate: true,
      deep: true
    }
  },
  data() {
    return {
      status: "active",
      statusOptions: [
        { label: "Active", value: "active" },
        { label: "Inactive", value: "inactive" },
      ],
      tags: [], // array of tag ids
      truckNumber: '',
      year: null,
      make: "",
      model: "",
      color: "",
      vin: "",
      licensePlate: "",
      licenseState: "", // 2 UPPER case letters, like “CA”
      hourlyCost: null,
      stateOption: config.state_list,
      insuranceValue: "", // decimal
      monthlyInsuranceCost: "", // decimal
      totalInsuranceCost: "", // decimal
    };
  },
  methods: {
    getOptionLabel(option) {
      if (option && option.hasOwnProperty("tagBusinessName")) {
        return option["tagBusinessName"];
      } else {
        return option["business_name"];
      }
    },
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
