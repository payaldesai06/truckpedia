<template>
  <vs-popup
    title=""
    :active.sync="showSubmitQuotePopupInternal"
    background-color="rgba(0,0,0,.2)"
  >
    <div>
      <label class="vs-input--label">
        New quote rate
        <field-required-sign />
      </label>
      <vs-input
        type="number"
        v-model="newQuoteRateInternal"
        data-vv-validate-on="blur"
        v-validate="'required'"
        name="newQuoteRate"
        class="w-full"
      ></vs-input>
      <span class="text-danger text-sm">
        {{ errors.first('newQuoteRate') }}
      </span>
      <div>
        <label class="vs-input--label">
          Quote valid until
          <field-required-sign />
        </label>
        <flat-pickr
          v-model="quoteValidUntilInternal"
          :config="flatPikrConfig"
          data-vv-validate-on="on-change"
          v-validate="'required'"
          name="quoteValidUntil"
          class="w-full"
        />
        <span class="text-danger text-sm">
          {{ errors.first('quoteValidUntil') }}
        </span>
      </div>

      <div>
        <label class="vs-input--label">
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
        <vs-button
          class="mt-5"
          @click="handleRespondRequests"
          color="primary"
          type="filled"
        >
          Submit
        </vs-button>
      </div>
    </div>
  </vs-popup>
</template>

<script>
export default {
  name: 'submitQuotePopup',
  props: {
    showSubmitQuotePopup: Boolean,
    newQuoteRate: String,
    quoteValidUntil: String,
    numberOfTrucks: String,
  },
  data() {
    return {
      flatPikrConfig: {
        mode: 'single',
      },
      newQuoteRateInternal: this.newQuoteRate,
      quoteValidUntilInternal: this.quoteValidUntil,
      numberOfTrucksInternal: this.numberOfTrucks,
      validationDict: {
        custom: {
          newQuoteRate: {
            required: 'New Quote Rate is required',
          },
          quoteValidUntil: {
            required: 'Quote Valid Until is required',
          },
          numberOfTrucks: {
            required: 'Number of Trucks is required',
            numeric: 'Value must be a valid integer',
          },
        },
      },
    };
  },
  created() {
    this.$validator.localize('en', this.validationDict);
  },
  computed: {
    showSubmitQuotePopupInternal: {
      get() {
        return this.showSubmitQuotePopup;
      },
      set(value) {
        this.$emit('update:showSubmitQuotePopup', value);
      },
    },
  },
  methods: {
    handleRespondRequests() {
      this.$emit('submit-request', {
        newQuoteRate: this.newQuoteRateInternal,
        quoteValidUntil: this.quoteValidUntilInternal,
        numberOfTrucks: this.numberOfTrucksInternal,
        showSubmitQuotePopup: this.showSubmitQuotePopupInternal,
      });
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

<style></style>
