<template>
  <div class="invoice-add-item-card">
    <header>
      <div class="vx-row flex justify-between items-end">
        <div class="vx-col">
          <h5 class="font-bold">Item Details</h5>
        </div>
        <div class="vx-col flex">
          <strong> {{ itemTotal }} </strong>
        </div>
      </div>
      <vs-divider />
    </header>
    <div class="vx-row flex gap-4 mx-auto">
      <div class="vx-col px-0">
        <vs-input v-model="item.name" label="Item" class="w-full" />
        <label class="text-xs" v-if="item.syncToMenu">
          <vs-button
            color="primary"
            type="flat"
            style="padding: 0"
            size="small"
            @click.stop="$emit('toggleRecordDialog')"
          >
            linked to {{ linkedRecordName }}
          </vs-button>
        </label>
      </div>
      <div class="vx-col px-0 flex flex-col" v-if="item.syncToMenu">
        <label class="vs-input--label mt-1">Warehouse</label>
        <v-select
          class="w-full"
          v-model="item.syncToMenu.singleSelectValue"
          :reduce="(option) => option.value"
          :options="warehouseOptions"
          :clearable="true"
          style="width: 191px !important"
        />
      </div>
      <div class="vx-col px-0 flex justify-end w-1/3">
        <vs-input
          type="number"
          v-model="item.qty"
          label="Qty"
          class="w-full"
          min="0"
          onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
        />
        <vs-input
          icon="attach_money"
          @click.native.stop
          :value="item.rate"
          class="w-full ml-4"
          type="number"
          label="Price"
          @input="setCustomInput('rate', $event)"
        >
        </vs-input>
      </div>
    </div>
    <div class="vx-row flex justify-between mt-4 mx-auto">
      <section>
        <span v-if="hasError" class="text-danger">
          Name, Qty, and Price fields are required
        </span>
      </section>
      <section class="flex justify-end">
        <vs-button
          color="danger"
          type="line"
          @click="$emit('cancel')"
          style="border: none"
          size="small"
        >
          Cancel
        </vs-button>
        <vs-button
          type="filled"
          @click.stop="validateForm"
          size="small"
          class="mr-4"
        >
          Save
        </vs-button>
      </section>
    </div>
  </div>
</template>
<!-- eslint-disable implicit-arrow-linebreak multiline-ternary -->
<script>
import { formatAmount } from "@/helpers/helper";

import config from "@/config/constants";

export default {
  name: "AddItemCard",
  props: {
    itemValue: {
      type: Object,
      default: null,
    },
    warehouseOptions: {
      type: Array,
      default: [],
    },
    recordList: {
      type: Array,
      default: () => [],
    },
  },
  created() {
    if (this.itemValue) {
      // this.item = this.itemValue;
      this.item = JSON.parse(JSON.stringify(this.itemValue));
    }
  },
  data() {
    return {
      item: {
        name: null,
        qty: 1,
        rate: null,
      },
      timeoutHandler: null,
      hasError: false,
    };
  },
  computed: {
    itemTotal() {
      const total = this.item.qty * (this.item.rate || 0);
      return formatAmount(Number(total).toFixed(2));
    },
    linkedRecordName() {
      if (this.item && this.item.syncToMenu) {
        const record = this.recordList.find(
          (record) =>
            record.recordId ===
            this.item.syncToMenu.recordLinkValues[0].recordId
        );
        return record
          ? record.data.find((rec) => rec.type === "text").value || ""
          : "";
      }
      return "";
    },
  },
  methods: {
    validateForm() {
      const { name, rate, qty } = this.item;
      if (name && rate && qty) {
        this.$emit("save", this.item);
      } else {
        this.hasError = true;
      }
    },
    toFixed(x, d) {
      if (!d) return x.toFixed(d); // don't go wrong if no decimal
      return Number(x)
        .toFixed(d)
        .replace(/\.?0+$/, "");
    },
    setCustomInput(key, event) {
      clearTimeout(this.timeoutHandler);
      const countOfDecimal = ((event + "").split(".")[1] || "").length;
      const decimalToSupport = 2;
      let dataToSet =
        countOfDecimal > decimalToSupport
          ? this.toFixed(event, decimalToSupport)
          : event;
      this.$set(this.item, key, dataToSet);

      /* After typing: Check if all decimal are 0 then set the value to non decimal */
      this.timeoutHandler = setTimeout(() => {
        if (Number.isInteger(parseFloat(event)) && countOfDecimal > 0) {
          let dataToSet = this.toFixed(event, decimalToSupport);
          this.$set(this.item, key, dataToSet);
        }
      }, 1000);
    },
    updateCurrentItem(payload) {
      // this is the method that will be called from the parent component
      this.item = payload;
    },
  },
};
</script>

<style lang="scss" scoped>
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
}
</style>
