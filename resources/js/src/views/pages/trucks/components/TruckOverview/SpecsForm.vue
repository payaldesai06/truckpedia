<template>
  <!-- Specs Form -->
  <vx-card class="mt-4">
    <div class="vx-row">
      <div class="vx-col">
        <h5 class="font-bold">Specs</h5>
      </div>
    </div>
    <vs-divider />
    <!-- Odometer at Purchase -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <label class="text-xs">Odometer at Purchase</label>
        <vs-input
          type="number"
          v-validate="'numeric|max:7'"
          class="w-full"
          name="odometerAtPurchase"
          v-model.number="odometerAtPurchase"
        />
        <span class="text-danger text-sm">
          {{ errors.first("odometerAtPurchase") }}
        </span>
      </div>
    </div>
    <!-- Current Odometer -->
    <!-- <div class="vx-row">
      <div class="vx-col w-full">
        <label class="text-xs">Current Odometer</label>
        <vs-input class="w-full" />
      </div>
    </div> -->
    <!-- Break Type : Front and Rear -->
    <div class="vx-row">
      <div class="vx-col w-1/2">
        <label class="text-xs">Brake Type (Front)</label>
        <v-select
          data-vv-as="selected"
          name="value"
          label="label"
          :options="breakTypeOptions"
          :reduce="(option) => option.value"
          v-model="brakeTypeFront"
          :clearable="true"
          class="mb-4 md:mb-0"
        />
      </div>
      <div class="vx-col w-1/2">
        <label class="text-xs">Brake Type (Rear)</label>
        <v-select
          data-vv-as="selected"
          name="value"
          label="label"
          :options="breakTypeOptions"
          :reduce="(option) => option.value"
          v-model="brakeTypeRear"
          :clearable="true"
          class="mb-4 md:mb-0"
        />
      </div>
    </div>
    <!-- Speed Limit  (Pedal/Cruise) -->
    <div class="vx-row">
      <div class="vx-col w-1/2">
        <label class="text-xs">Speed Limit (Pedal)</label>
        <vs-input
          class="w-full"
          name="speedLimitPedal"
          v-model="speedLimitPedal"
        />
      </div>
      <div class="vx-col w-1/2">
        <label class="text-xs">Speed Limit (Cruise)</label>
        <vs-input
          class="w-full"
          name="speedLimitCruise"
          v-model="speedLimitCruise"
        />
      </div>
    </div>
    <!-- Fuel Tank capacity  -->
    <div class="vx-row">
      <div class="vx-col w-1/2">
        <label class="text-xs">Fuel Tank Capacity</label>
        <vs-input
          class="w-full"
          name="fuelTankCapacity"
          v-model="fuelTankCapacity"
        />
      </div>
      <div class="vx-col w-1/2">
        <label class="text-xs">APU Unit</label>
        <vs-input class="w-full" name="apuUnit" v-model="apuUnit" />
      </div>
    </div>
    <!-- Tire Size  -->
    <div class="vx-row">
      <div class="vx-col w-1/2">
        <label class="text-xs">Tire Size</label>
        <vs-input class="w-full" name="tireSize" v-model="tireSize" />
      </div>
      <div class="vx-col w-1/2"></div>
    </div>
    <!-- <div class="vx-row">
      <div class="vx-col w-1/2">
        <label class="text-xs">ELD Number</label>
        <vs-input class="w-full" />
      </div>
      <div class="vx-col w-1/2">
        <label class="text-xs">ELD</label>
        <vs-checkbox class="text-xs mt-3" />
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col w-1/2">
        <label class="text-xs">TM Number</label>
        <vs-input class="w-full" />
      </div>
    </div> -->
    <div class="vx-row">
      <div class="vx-col w-1/2">
        <vs-checkbox
          class="text-xs mt-3"
          name="idleShutoff"
          v-model="idleShutoff"
          >Idle Shutoff</vs-checkbox
        >
      </div>
    </div>
  </vx-card>
</template>

<script>
import { Validator } from "vee-validate";
const dict = {
  custom: {
    odometerAtPurchase: {
      numeric: "The field must be numeric with no decimal",
      max: "The field supports a maximum of 7 characters",
    },
  },
};
// Register custom messages
Validator.localize("en", dict);

export default {
  name: "TruckSpecsForm",
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
        odometerAtPurchase,
        brakeTypeFront,
        brakeTypeRear,
        speedLimitPedal,
        speedLimitCruise,
        fuelTankCapacity,
        tireSize,
        idleShutoff,
        apuUnit,
      } = this || {};
      return {
        odometerAtPurchase,
        brakeTypeFront,
        brakeTypeRear,
        speedLimitPedal,
        speedLimitCruise,
        fuelTankCapacity,
        tireSize,
        idleShutoff,
        apuUnit,
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
          odometerAtPurchase,
          brakeTypeFront,
          brakeTypeRear,
          speedLimitPedal,
          speedLimitCruise,
          fuelTankCapacity,
          tireSize,
          idleShutoff,
          apuUnit
        }  = newVal || {};
        this.odometerAtPurchase = odometerAtPurchase;
        this.brakeTypeFront = brakeTypeFront;
        this.brakeTypeRear = brakeTypeRear;
        this.speedLimitPedal = speedLimitPedal;
        this.speedLimitCruise = speedLimitCruise;
        this.fuelTankCapacity = fuelTankCapacity;
        this.tireSize = tireSize;
        this.idleShutoff = idleShutoff;
        this.apuUnit = apuUnit;
      },
      deep: true,
      immediate: true
    }
  },
  data() {
    return {
      odometerAtPurchase: null, //int.
      brakeTypeFront: "", // string, “drum” or “disc”.
      brakeTypeRear: "", // string, “drum” or “disc”.
      speedLimitPedal: "", // string.
      speedLimitCruise: "", // string.
      fuelTankCapacity: "", //string.
      tireSize: "", // string.
      idleShutoff: null, // boolean.
      breakTypeOptions: [
        { label: "Drum", value: "drum" },
        { label: "Disc", value: "disc" },
      ],
      apuUnit: null,
    };
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
