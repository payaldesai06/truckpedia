<template>
  <!-- Company IFTA Form -->
  <vx-card class="mt-4">
    <div class="vx-row">
      <div class="vx-col">
        <h5 class="font-bold">Company IFTA</h5>
      </div>
    </div>
    <vs-divider />
    <!-- <div class="vx-row">
      <div class="vx-col w-full">
        <vs-checkbox class="text-xs">Company IRP</vs-checkbox>
      </div>
    </div> -->
    <div class="vx-row mt-3">
      <div class="vx-col w-full">
        <label class="text-xs">IFTA Decal#</label>
        <vs-input
          class="w-full"
          name="iftaDecalNumber"
          v-model="iftaDecalNumber"
        />
      </div>
    </div>
    <!-- <div class="vx-row mt-3">
      <div class="vx-col w-full">
        <vs-checkbox class="text-xs">
          Company Bobtail Insurance
        </vs-checkbox>
      </div>
    </div> -->
    <!-- <div class="vx-row mt-3">
      <div class="vx-col w-full">
        <vs-checkbox class="text-xs">
          Company Physical Damage Insurance
        </vs-checkbox>
      </div>
    </div> -->
  </vx-card>
</template>

<script>
export default {
  name: "CompanyIFTAForm",
  data() {
    return {
      iftaDecalNumber: "", // String
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
      const { iftaDecalNumber } = this || {};
      return {
        iftaDecalNumber,
      };
    },
  },
  watch: {
    emitDate(newVal) {
      this.$emit("input", newVal);
    },
    value: {
      handler (newVal) {
        const { iftaDecalNumber } = newVal || {};
        this.iftaDecalNumber = iftaDecalNumber
      },
      immediate: true,
      deep: true
    }
  },
};
</script>
