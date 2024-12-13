<template>
  <div class="vx-row space-y-4">
    <div class="px-6 pb-6 vx-row space-y-4">
      <div class="vx-col w-full">
        <label class="text-xs">
          Name
          <field-required-sign />
        </label>
        <vs-input
          type="text"
          name="business_name"
          v-model="factoringCompany.name"
          class="w-full"
        />
      </div>

      <div class="vx-col w-full">
        <label class="text-xs">
          Billing Email
          <field-required-sign />
        </label>
        <vs-input
          type="email"
          name="email"
          v-model.trim="factoringCompany.billing_email"
          class="w-full"
        />
      </div>

      <div class="vx-col w-full">
        <label class="text-xs">
          Address
          <field-required-sign />
        </label>
        <vs-input
          type="text"
          name="address"
          v-model.trim="factoringCompany.address"
          class="w-full"
        />
      </div>

      <vs-row class="w-full m-4 gap-2">
        <div class="vx-col w-1/3">
          <label class="text-xs">
            City
            <field-required-sign />
          </label>
          <vs-input
            type="text"
            name="city"
            v-model.trim="factoringCompany.city"
            class="w-full"
          />
        </div>

        <div class="vx-col w-1/3">
          <label class="text-xs">
            State
            <field-required-sign />
          </label>
          <vs-input
            type="text"
            name="state"
            v-model.trim="factoringCompany.state"
            class="w-full"
          />
        </div>

        <div class="vx-col flex-grow">
          <label class="text-xs">
            Zipcode
            <field-required-sign />
          </label>
          <vs-input
            type="text"
            name="zipcode"
            v-model.trim="factoringCompany.zip_code"
            class="w-full"
          />
        </div>
      </vs-row>

      <div class="vx-col w-full">
        <label class="text-xs"> Phone number <field-required-sign /> </label>
        <vs-input
          type="text"
          name="phone_number"
          v-model.trim="factoringCompany.phone_number"
          class="w-full"
        />
      </div>

      <div class="vx-col w-full">
        <div class="flex flex-row items-center justify-between">
          <div class="w-full relative">
            <label class="text-xs">Factoring fee percentage</label>
            <vs-input
              data-vv-validate-on="blur"
              type="number"
              :min="0"
              :step="0.01"
              :max="100"
              name="factoring_fee_fractional"
              v-model.number="factoringCompany.factoring_fee_fractional"
              class="w-full"
            />
            <div
              class="absolute flex items-center"
              style="bottom: 7px; right: 50px"
            >
              %
            </div>
          </div>
        </div>
      </div>

      <div class="vx-col w-full">
        <div class="flex flex-row items-center justify-between">
          <div class="w-full relative">
            <vs-checkbox
              v-model="factoringCompany.request_payment_merge_pdfs"
              class="h-full inline-flex"
            >
              Merge invoice, rate confirmation, and POD to one single pdf when
              sending payment request emails.
            </vs-checkbox>
          </div>
        </div>
      </div>

      <div class="vx-col w-full">
        <label class="text-xs">Integration Partner</label>
        <v-select
          class="w-full"
          v-model="factoringCompany.integrationPartner"
          :reduce="(option) => option.value"
          :options="integrationOptions"
        ></v-select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FactoringCompanyInformation',
  props: {
    factoringCompany: {
      type: Object,
      required: true,
    },
    isEditMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      integrationOptions: [
        { label: 'RTS', value: 'rts' },
        { label: 'Wex', value: 'wex' },
        { label: 'TAFS', value: 'tafs' },
      ],
    };
  },
};
</script>

<style scoped></style>
