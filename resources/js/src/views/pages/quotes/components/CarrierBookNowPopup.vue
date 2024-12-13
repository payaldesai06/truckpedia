<template>
  <vs-popup
    title="Confirm"
    :active.sync="showBookNowPopupInternal"
    background-color="rgba(0,0,0,.2)"
  >
    <div>
      <span>Book now at {{ formatAmount((data || {}).rate) || '' }}?</span>
      <div class="mt-3">
        <label class="vs-input--label pl-0">
          Number of trucks
          <field-required-sign />
        </label>
        <vs-input
          class="w-full"
          type="number"
          v-model="numberOfTrucksInternal"
          data-vv-validate-on="blur"
          v-validate="'required|numeric'"
          name="numberOfTrucks"
        ></vs-input>
        <span class="text-danger text-sm">
          {{ errors.first('numberOfTrucks') }}
        </span>
      </div>
    </div>
    <div>
      <div class="text-right">
        <vs-button class="mt-5" @click="onSubmit" color="primary">
          Submit
        </vs-button>
        <vs-button
          class="mt-5"
          @click="showBookNowPopupInternal = false"
          color="danger"
          type="border"
        >
          Cancel
        </vs-button>
      </div>
    </div>
  </vs-popup>
</template>

<script>
import { formatAmount } from '@/helpers/helper';

export default {
  name: 'CarrierBookNowPopup',
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    showBookNowPopupInternal: {
      get() {
        return this.isActive;
      },
      set(value) {
        this.$emit('onClose', value);
      },
    },
  },
  data() {
    return {
      validationDict: {
        custom: {
          numberOfTrucks: {
            required: 'Number of Trucks is required',
            numeric: 'Value must be a valid integer',
          },
        },
      },
      numberOfTrucksInternal: null,
    };
  },
  created() {
    this.$validator.localize('en', this.validationDict);
    const {
      carrierNumberOfTrucks,
      quote: { numberOfTrucks },
    } = this.data;
    this.numberOfTrucksInternal =
      carrierNumberOfTrucks || numberOfTrucks || null;
  },
  methods: {
    formatAmount,
    async onSubmit() {
      const isValid = await this.validateForm();
      if (isValid) {
        this.$emit('onSubmit', {
          submittedNumberOfTrucks: this.numberOfTrucksInternal,
        });
      }
    },
    async validateForm() {
      await this.$validator.validateAll();
      if (this.errors.items.length) {
        return false;
      }
      return true;
    },
  },
};
</script>
