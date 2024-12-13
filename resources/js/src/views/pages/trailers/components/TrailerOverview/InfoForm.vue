<template>
  <!-- Trailer Info Form -->
  <vx-card class="info-form">
    <div class="vx-row">
      <div class="vx-col">
        <h5 class="font-bold">Trailer Info</h5>
      </div>
    </div>
    <vs-divider />

    <!-- Status & Ride  -->
    <div class="vx-row">
      <!-- Tags -->
      <div class="vx-col w-full">
        <label class="text-xs">Tags</label>
        <v-select
          data-vv-name="tags"
          name="tags"
          :options="allTags"
          :clearable="false"
          v-model="tags"
          :get-option-label="getOptionLabel"
          class="mb-4 md:mb-0"
          multiple
        />
      </div>
      <!-- Status  -->
      <div class="vx-col w-1/2">
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
      <!-- Trailer Number  -->
      <div class="vx-col w-1/2">
        <label class="text-xs">Trailer Number <field-required-sign /></label>
        <vs-input
          v-validate="'required'"
          data-vv-validate-on="blur"
          name="trailerNumber"
          v-model="trailerNumber"
          class="w-full"
        />
        <span class="text-danger text-sm">{{
          errors.first("trailerNumber")
        }}</span>
      </div>
    </div>

    <!-- Trailer number & Make   -->
    <div class="vx-row">
      <div class="vx-col w-1/2">
        <label class="text-xs">Trailer Type</label>
        <v-select
          :options="trailer_type_options"
          label="title"
          :reduce="(option) => option.value"
          :clearable="true"
          v-model="trailerType"
          class="w-full"
        />
      </div>
      <!-- Make  -->
      <div class="vx-col w-1/2">
        <label class="text-xs">Make</label>
        <vs-input name="make" v-model="make" class="w-full" />
      </div>
    </div>

    <!-- Year & Model -->
    <div class="vx-row">
      <!-- Year  -->
      <div class="vx-col w-1/2">
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
      <!-- Model  -->
      <div class="vx-col w-1/2">
        <label class="text-xs">Model</label>
        <vs-input name="model" v-model="model" class="w-full" />
      </div>
    </div>

    <!-- Vin -->
    <div class="vx-row">
      <!-- Ride  -->
      <div class="vx-col w-1/2">
        <label class="text-xs">Ride</label>
        <vs-input class="w-full" name="ride" v-model="ride" />
      </div>
      <!-- Vin  -->
      <div class="vx-col w-1/2">
        <label class="text-xs">Vin</label>
        <vs-input class="w-full" name="vin" v-model="vin" />
      </div>
    </div>

    <!-- Break Type & Width-->
    <div class="vx-row">
      <!-- Width  -->
      <div class="vx-col w-1/2">
        <label class="text-xs">Width</label>
        <vs-input class="w-full" name="width" v-model="width" />
      </div>
      <!-- Break Type -->
      <div class="vx-col w-1/2">
        <label class="text-xs">Brake Type</label>
        <v-select
          data-vv-as="selected"
          name="value"
          label="label"
          :options="breakTypeOptions"
          :reduce="(option) => option.value"
          v-model="brakeType"
          :clearable="true"
          class="mb-4 md:mb-0"
        />
      </div>
    </div>

    <!-- Roof & Tire size -->
    <div class="vx-row">
      <!-- Tire size -->
      <div class="vx-col w-1/2">
        <label class="text-xs">Tire size</label>
        <vs-input class="w-full" name="tireSize" v-model="tireSize" />
      </div>
      <!-- Roof-->
      <div class="vx-col w-1/2">
        <label class="text-xs">Roof</label>
        <vs-input class="w-full" name="roof" v-model="roof" />
      </div>
    </div>

    <!-- License Plate & State -->
    <div class="vx-row">
      <!-- License Plate -->
      <div class="vx-col w-1/2">
        <label class="text-xs">License Plate</label>
        <vs-input class="w-full" name="licensePlate" v-model="licensePlate" />
      </div>
      <!-- State -->
      <div class="vx-col w-1/2">
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

    <!-- Check box holder  -->
    <section>
      <div class="vx-row">
        <div class="vx-col w-full">
          <vs-checkbox
            class="text-xs mt-3"
            name="platedWalls"
            v-model="platedWalls"
            >Plated Walls</vs-checkbox
          >
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col w-full">
          <vs-checkbox class="text-xs mt-3" name="vented" v-model="vented"
            >Vented</vs-checkbox
          >
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col w-full">
          <vs-checkbox class="text-xs mt-3" name="skirts" v-model="skirts"
            >Skirts</vs-checkbox
          >
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col w-full">
          <vs-checkbox class="text-xs mt-3" name="rentedOut" v-model="rentedOut"
            >Rented Out</vs-checkbox
          >
        </div>
      </div>
    </section>

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
  </vx-card>
</template>

<script>
import Vue from "vue";
import PrimeVue from "primevue/config";
import Calendar from "primevue/calendar";
import config from "@/config/constants.js";
// For custom error message
import { Validator } from "vee-validate";
import { mapGetters } from "vuex";

const dict = {
  custom: {
    status: {
      required: "The status field is required.",
    },
    trailerNumber: {
      required: "The trailer number field is required.",
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
  name: "TrailerInfoForm",
  components: {
    Calendar,
  },
  props: {
    trailerData: {
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
        trailerNumber,
        trailerType,
        year,
        make,
        model,
        vin,
        ride,
        width,
        licensePlate,
        licenseState,
        insuranceValue,
        monthlyInsuranceCost,
        totalInsuranceCost,
        brakeType,
        tireSize,
        roof,
        platedWalls,
        vented,
        skirts,
        rentedOut,
        tags,
      } = this || {};
      return {
        status,
        trailerNumber,
        trailerType,
        year: year
          ? typeof year == "string"
            ? year
            : String(new Date(year).getFullYear())
          : year,
        make,
        model,
        vin,
        ride,
        width,
        licensePlate,
        licenseState,
        insuranceValue,
        monthlyInsuranceCost,
        totalInsuranceCost,
        brakeType,
        tireSize,
        roof,
        platedWalls,
        vented,
        skirts,
        rentedOut,
        tags,
      };
    },
  },
  watch: {
    emitDate(newVal) {
      this.$emit("input", newVal);
    },
    value: {
      handler(newVal) {
        const {
          status,
          trailerNumber,
          trailerType,
          year,
          make,
          model,
          vin,
          ride,
          width,
          licensePlate,
          licenseState,
          insuranceValue,
          monthlyInsuranceCost,
          totalInsuranceCost,
          brakeType,
          tireSize,
          roof,
          platedWalls,
          vented,
          skirts,
          rentedOut,
          tags,
        } = newVal || {};
        if (status) {
          this.status = status;
        }
        this.trailerNumber = trailerNumber;
        this.trailerType = trailerType;
        this.year = year || null;
        this.make = make;
        this.model = model;
        this.vin = vin;
        this.ride = ride;
        this.width = width;
        this.licensePlate = licensePlate;
        this.licenseState = licenseState;
        this.insuranceValue = insuranceValue;
        this.monthlyInsuranceCost = monthlyInsuranceCost;
        this.totalInsuranceCost = totalInsuranceCost;
        this.brakeType = brakeType;
        this.tireSize = tireSize;
        this.roof = roof;
        this.platedWalls = platedWalls;
        this.vented = vented;
        this.skirts = skirts;
        this.rentedOut = rentedOut;
        this.tags = tags;
      },
      deep: true,
      immediate: true,
    },
  },
  data() {
    return {
      status: "active",
      statusOptions: [
        { label: "Active", value: "active" },
        { label: "Inactive", value: "inactive" },
      ],
      trailerNumber: "",
      year: null,
      make: "",
      model: "",
      vin: "",
      licensePlate: "",
      licenseState: "", // 2 UPPER case letters, like “CA”
      stateOption: config.state_list,
      insuranceValue: "", // decimal
      monthlyInsuranceCost: "", // decimal
      totalInsuranceCost: "", // decimal
      ride: "", // String,
      width: "", // String,
      breakTypeOptions: [
        { label: "Drum", value: "drum" },
        { label: "Disc", value: "disc" },
      ],
      trailer_type_options: config.equipmentTypeOptions,
      trailerType: null,
      brakeType: "", // String
      tireSize: "", // String
      roof: "", // String
      platedWalls: null, //boolean
      vented: null, //boolean
      skirts: null, //boolean
      rentedOut: null, //boolean
      tags: [], // array of tag ids : [{id: 1}, {id:2}]
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
