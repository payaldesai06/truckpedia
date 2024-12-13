<template>
  <div class="flex gap-4">
    <div class="w-4/12">
      <div class="flex flex-col">
        <label class="text-sm">Description</label>
        <vs-input class="w-auto" disabled :value="value.freight_description" />
      </div>
    </div>
    <div class="w-4/12">
      <div class="flex flex-col justify-center">
        <label class="text-sm">Qty</label>
        <vs-input
          class="w-auto"
          type="number"
          disabled
          :value="value.freight_qty"
        />
      </div>
    </div>
    <div class="w-4/12 flex gap-4 justify-between items-center">
      <vx-input-group class="mt-auto">
        <template slot="prepend">
          <div class="prepend-text bg-primary">
            <span>$</span>
          </div>
        </template>
        <vs-input type="number" v-model="qtyRate" />
      </vx-input-group>
    </div>
    <div class="text-lg w-4/12 mt-6 flex justify-center items-center">
      {{ totalFreightRate(value) | currencyFormat }}
    </div>
  </div>
</template>
<script>
import { isValidInputValue } from '@/helpers/helper';

export default {
  name: 'QuantityVariableRateForm',
  filters: {
    currencyFormat(value) {
      if (!value) return '$ 0.00';
      let retSting = '';
      if (value < 0) {
        retSting += '- ';
        value = value * -1;
      }
      retSting += `$${(+value).toFixed(2)}`;
      return retSting;
    },
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  computed: {
    qtyRate: {
      get() {
        return this.value.qtyRate;
      },
      set(val) {
        const qtyRate = isValidInputValue(val, [undefined, '']) ? val : null;
        this.$emit('input', { ...this.value, qtyRate });
      },
    },
  },
  methods: {
    totalFreightRate({ qtyRate, freight_qty }) {
      return Number(qtyRate) * Number(freight_qty);
    },
  },
};
</script>
