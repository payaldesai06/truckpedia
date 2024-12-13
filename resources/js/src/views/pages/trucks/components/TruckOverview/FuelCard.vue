<template>
  <vx-card class="mt-4">
    <div class="vx-row">
      <div class="vx-col">
        <h5 class="font-bold">Fuel Card</h5>
      </div>
    </div>
    <vs-divider />
    <div class="vx-row">
      <div class="vx-col w-1/2 flex flex-col">
        <label class="text-xs">Fuel Card</label>
        <vs-input class="w-full" v-model="fuelCardNumber" />
      </div>
    </div>
  </vx-card>
</template>

<script>
export default {
  name: 'FuelCard',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      fuelCardNumber: '',
    };
  },
  watch: {
    value: {
      handler(newVal) {
        this.fuelCardNumber = newVal || '';
      },
      deep: true,
      immediate: true,
    },
    fuelCardNumber(newVal) {
      this.$emit('input', newVal);
    },
  },
};
</script>

<style></style>
