<template>
  <vs-popup
    :title="customFieldTitle"
    :active.sync="toggleDriverCustomFieldPopup"
    style="z-index: 52035"
  >
    <div class="overflow-hidden">
      <!-- <vs-input placeholder="Name" v-model="name"/>
        <vs-input placeholder="Rate" v-model="rate" class="mt-2"/> -->
      <div>
        <div>
          <label>Type</label>
          <field-required-sign />
        </div>
        <v-select
          :options="loadOptions"
          v-if="selectedTarget === 'load'"
          v-model="selectedType"
          :disabled="isEdit"
          label="text"
        ></v-select>
        <v-select
          :options="tripOptions"
          v-model="selectedType"
          v-else
          :disabled="isEdit"
          label="text"
        ></v-select>
      </div>
      <div class="mt-4">
        <div>
          <label>Name</label>
          <field-required-sign />
        </div>
        <vs-input placeholder="Name" v-model="name" class="w-full" />
      </div>
      <!-- Make this visible only to a few companies, put the ids in constants.js -->
      <div class="mt-4" v-if="hasDefaultGLAccess">
        <label>Default GL Account</label>
        <vs-input
          placeholder="Default GL Account"
          v-model="defaultAccount"
          class="w-full"
        />
      </div>
      <div
        v-if="
          selectedType &&
          (selectedType.value === 'formulaEmptyMiles' ||
            selectedType.value === 'formulaLoadedMiles')
        "
      >
        <div class="flex items-center mt-4 gap-2">
          <span class="mt-5">( Fuel Price - </span>
          <div>
            <div>
              <label>Default Base Price</label>
              <field-required-sign />
              <vs-input
                placeholder="Default Base Price"
                v-model="defaultV2"
                class="w-50px"
              />
            </div>
          </div>
          <div class="mt-5"><span>)</span> <span> / </span></div>
          <div>
            <div>
              <label>Default MPG</label>
              <field-required-sign />
              <vs-input
                placeholder="Default MPG"
                v-model="defaultV3"
                class="w-100px"
              />
            </div>
          </div>
        </div>
      </div>
      <template v-else>
        <div class="mt-4" v-if="!checkSelectedType">
          <div>
            <label>Default rate</label>
            <field-required-sign />
          </div>
          <vs-input
            placeholder="Default rate"
            v-model="defaultRate"
            type="number"
            class="w-full"
          />
        </div>
        <div class="mt-4" v-else>
          <div>
            <label>Default Percentage</label>
            <field-required-sign />
          </div>
          <vs-input
            v-model="defaultPercentage"
            type="number"
            min="-100"
            max="100"
            class="w-full"
          />
        </div>
      </template>

      <div class="mt-4" v-if="selectedType && selectedType.value === 'stopPay'">
        <div>
          <label>Default Pay Start After</label>
          <field-required-sign />
        </div>
        <vs-input
          placeholder="Default Pay Start After"
          v-model="defaultPayStartAfter"
          type="number"
          class="w-full"
        />
      </div>

      <div class="vx-row mt-4">
        <div class="vx-col w-1/4">
          <vs-checkbox v-model="taxable">Taxable?</vs-checkbox>
        </div>
      </div>
      <br />
      <vs-button
        color="primary"
        type="filled"
        class="mt-8"
        @click="handleCustomFieldsApiCall"
        >Submit</vs-button
      >
    </div>
  </vs-popup>
</template>

<script>
import { mapGetters } from 'vuex';
import config from '@/config/constants';

export default {
  name: 'CustomFieldsPopup',
  props: {
    togglePopup: {
      type: Boolean,
      required: true,
    },
    loadOptions: {
      default: [],
      type: Array,
    },
    tripOptions: {
      default: [],
      type: Array,
    },
    selectedTarget: {
      default: '',
      type: String,
    },
    editCustomFieldData: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      name: '',
      rate: null,
      defaultRate: null,
      defaultPayStartAfter: null,
      defaultPercentage: 0,
      defaultAccount: null,
      selectedType: '',
      defaultV2: '',
      defaultV3: '',
      taxable: true,
    };
  },

  computed: {
    ...mapGetters('auth', ['user']),
    toggleDriverCustomFieldPopup: {
      get() {
        return this.togglePopup;
      },
      set(val) {
        if (!val) {
          this.closePopup();
        }
      },
    },
    checkSelectedType() {
      if (this.selectedType && this.selectedType.value) {
        if (this.selectedType.value.includes('byPercentage')) {
          return true;
        }
      }
      return false;
    },
    isEdit() {
      if (Object.keys(this.editCustomFieldData).length > 0) {
        return true;
      }
      return false;
    },
    customFieldTitle() {
      if (Object.keys(this.editCustomFieldData).length > 0) {
        return 'Edit Custom Payment Field';
      }
      return 'Create Custom Payment Field';
    },
    hasDefaultGLAccess() {
      const { admin_company_detail_id } =
        (this.user || {}).admin_company_details || {};
      if (admin_company_detail_id) {
        return config.companiesWithPayToCodeNDefaultGLAccountAccess.includes(
          Number(admin_company_detail_id)
        );
      }
      return false;
    },
  },
  watch: {
    editCustomFieldData: {
      handler(val) {
        if (Object.keys(val).length) {
          this.name = val.name;
          this.defaultRate = val.defaultRate;
          this.defaultPercentage = val.defaultPercentage || 0;
          if (val.target === 'load') {
            const load = this.loadOptions.filter(
              (item) => item.value === val.type
            );
            this.selectedType = load[0];
          } else {
            const trip = this.tripOptions.filter(
              (item) => item.value === val.type
            );
            this.selectedType = trip[0];
          }
          this.defaultPayStartAfter = val.defaultPayStartAfter;
          this.defaultAccount = val.defaultAccount;
          this.defaultV2 = val.defaultV2;
          this.defaultV3 = val.defaultV3;
          this.taxable = val.taxable;
        }
      },
    },
  },
  methods: {
    initValues() {
      this.name = '';
      this.rate = null;
      this.defaultRate = null;
      this.defaultPayStartAfter = null;
      this.defaultPercentage = 0;
      this.defaultAccount = null;
      this.defaultV2 = null;
      this.defaultV3 = null;
      this.taxable = true;
      this.selectedType = null;
    },
    closePopup() {
      this.initValues();
      this.$emit('closePopup');
    },
    handleCustomFieldsApiCall() {
      if (Object.keys(this.editCustomFieldData).length > 0) {
        this.editCustomField();
      } else {
        this.createCustomField();
      }
    },
    generatedPayload() {
      const payload = {
        target: this.selectedTarget,
        name: this.name,
        defaultAccount: this.defaultAccount,
        type: (this.selectedType || {}).value,
      };
      if (Object.keys(this.editCustomFieldData).length > 0) {
        if (this.editCustomFieldData.fieldId) {
          payload.id = this.editCustomFieldData.fieldId;
        } else {
          payload.id = this.editCustomFieldData.id;
        }
      }
      if ((this.selectedType || {}).value === 'stopPay') {
        payload.defaultPayStartAfter = this.defaultPayStartAfter;
      }
      if (this.checkSelectedType) {
        payload.defaultPercentage = this.defaultPercentage;
      } else if (
        (this.selectedType || {}).value === 'formulaEmptyMiles' ||
        (this.selectedType || {}).value === 'formulaLoadedMiles'
      ) {
        payload.defaultV2 = Number(this.defaultV2).toFixed(3);
        payload.defaultV3 = Number(this.defaultV3).toFixed(3);
      } else {
        payload.defaultRate = this.defaultRate;
      }
      payload.taxable = this.taxable;
      return payload;
    },
    defaultv2Andv3Validation() {
      if (
        (this.selectedType || {}).value === 'formulaEmptyMiles' ||
        (this.selectedType || {}).value === 'formulaLoadedMiles'
      ) {
        if (!this.defaultV2 || !this.defaultV3) {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Default fields are required.',
          });
          return true;
        }
      }
    },
    createCustomField() {
      const validation = this.defaultv2Andv3Validation();
      if (validation) return;

      this.$vs.loading();
      this.$store
        .dispatch(
          'driverPayTemplates/createCustomFields',
          this.generatedPayload()
        )
        .then((data) => {
          this.$vs.notify({
            color: 'primary',
            title: 'Add Custom Field',
            text: 'Add custom field successfully.',
          });
          this.$emit('getCustomFields');
          this.closePopup();
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        })
        .finally(() => {
          this.$vs.loading.close();
        });
    },
    editCustomField() {
      const validation = this.defaultv2Andv3Validation();
      if (validation) return;

      this.$vs.loading();
      this.$store
        .dispatch('driverPayTemplates/editCustomField', this.generatedPayload())
        .then((data) => {
          this.$vs.notify({
            color: 'primary',
            title: 'Edit Custom Field',
            text: 'Edit custom field successfully.',
          });
          this.$emit('getCustomFields');
          this.closePopup();
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        })
        .finally(() => {
          this.$vs.loading.close();
        });
    },
  },
};
</script>

<style scoped>
.v-select .vs__dropdown-toggle .vs__actions .vs__clear {
  display: none !important;
}
.w-100px {
  width: 100px !important;
}
</style>
