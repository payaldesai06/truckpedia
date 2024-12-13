<template>
  <!-- Expiration Dates Form -->
  <vx-card>
    <div class="vx-row">
      <div class="vx-col">
        <h5 class="font-bold">Expiration Dates</h5>
      </div>
    </div>
    <vs-divider />
    <!-- IRP Expiration Date -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <label class="text-xs">IRP Expiration Date</label>
        <flat-pickr
          placeholder=""
          class="w-full"
          name="irpExpirationDate"
          v-model="irpExpirationDate"
        />
      </div>
    </div>
    <!-- Company IRP -->
    <!-- <div class="vx-row">
      <div class="vx-col w-1/2">
        <vs-checkbox class="text-xs mt-3">Company IRP</vs-checkbox>
      </div>
    </div> -->
    <!-- Annual Inspection Expiration Date -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <label class="text-xs">Annual Inspection Expiration Date</label>
        <flat-pickr
          placeholder=""
          class="w-full"
          name="annualInspExpireDate"
          v-model="annualInspExpireDate"
        />
      </div>
    </div>
    <!-- Insurance Expiration Date -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <label class="text-xs"> Insurance Expiration Date </label>
        <flat-pickr
          placeholder=""
          class="w-full"
          name="insuranceExpireDate"
          v-model="insuranceExpireDate"
        />
      </div>
    </div>
    <!-- <div class="vx-row">
      <div class="vx-col w-full">
        <label class="text-xs">Quarterly Maintenance</label>
        <vs-input class="w-full" />
      </div>
    </div> -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <label class="text-xs">Registration Expiration Date</label>
        <flat-pickr
          placeholder=""
          class="w-full"
          name="registrationExpireDate"
          v-model="registrationExpireDate"
        />
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col w-full">
        <label class="text-xs">Annual Permit Expiration Date</label>
        <flat-pickr
          placeholder=""
          class="w-full"
          name="annualPermitExpireDate"
          v-model="annualPermitExpireDate"
        />
      </div>
    </div>
  </vx-card>
</template>

<script>
export default {
  name: "ExpirationDateForm",
  components: {
    
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
        irpExpirationDate,
        annualInspExpireDate,
        insuranceExpireDate,
        registrationExpireDate,
        annualPermitExpireDate
      } = this || {};
      return {
        irpExpirationDate,
        annualInspExpireDate,
        insuranceExpireDate,
        registrationExpireDate,
        annualPermitExpireDate
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
          irpExpirationDate,
          annualInspExpireDate,
          insuranceExpireDate,
          registrationExpireDate,
          annualPermitExpireDate
        }  = newVal || {};
        this.irpExpirationDate = irpExpirationDate
        this.annualInspExpireDate = annualInspExpireDate
        this.insuranceExpireDate = insuranceExpireDate
        this.registrationExpireDate = registrationExpireDate
        this.annualPermitExpireDate = annualPermitExpireDate
      },
      deep: true,
      immediate: true
    }
  },
  data() {
    return {
      irpExpirationDate: null, // date, like “2022-11-22”.
      annualInspExpireDate: null, // date,
      insuranceExpireDate: null, // date.
      registrationExpireDate: null, // date.
      annualPermitExpireDate: null // date.
    };
  },
};
</script>
