<template>
  <!-- Expiration Dates Form -->
  <vx-card>
    <div class="vx-row">
      <div class="vx-col">
        <h5 class="font-bold">Expiration Dates</h5>
      </div>
    </div>
    <vs-divider />
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
    emitDate() {
      const {
        annualInspExpireDate,
        insuranceExpireDate,
        registrationExpireDate,
        annualPermitExpireDate
      } = this || {};
      return {
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
          annualInspExpireDate,
          insuranceExpireDate,
          registrationExpireDate,
          annualPermitExpireDate
        }  = newVal || {};
        this.annualInspExpireDate = annualInspExpireDate
        this.insuranceExpireDate = insuranceExpireDate
        this.registrationExpireDate = registrationExpireDate
        this.annualPermitExpireDate = annualPermitExpireDate
      },
      immediate: true,
      deep: true
    }
  },
  data() {
    return {
      annualInspExpireDate: null, // date, like “2022-11-22”.
      insuranceExpireDate: null, // date. like “2022-11-22”.
      registrationExpireDate: null, // date. like “2022-11-22”.
      annualPermitExpireDate: null // date. like “2022-11-22”.
    };
  },
};
</script>
