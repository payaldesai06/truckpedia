<template>
  <vs-sidebar
    parent="body"
    position-right
    default-index="1"
    color="primary"
    spacer
    v-model="isModalShowing"
    class="add-accessorial-services-sidebar"
  >
    <div class="flex items-center justify-between p-4">
      <h4>{{ editMode ? 'Edit' : 'Add' }} Accessorial Service</h4>
      <feather-icon
        icon="XIcon"
        @click="onClose"
        class="cursor-pointer"
      ></feather-icon>
    </div>

    <form class="vs-sidebar-form px-3 pb-5 mt-4">
      <div class="vx-row w-full m-0">
        <div class="vx-col w-1/2 pb-4 relative">
          <label>Date <field-required-sign /></label>
          <div class="relative">
            <flat-pickr
              class="w-full"
              name="date"
              clearable
              v-model="formData.date"
            />
            <span class="clear-date" v-if="formData.date" @click="removeDate">
              <vs-icon icon="close"></vs-icon>
            </span>
          </div>
        </div>
        <div class="vx-col w-1/2 pb-4">
          <label>Type <field-required-sign /></label>
          <v-select
            v-model="formData.type"
            :reduce="(type) => type.value"
            :clearable="false"
            :options="types"
            :disabled="editMode"
            name="serviceType"
            label="title"
            class="w-full"
          />
        </div>
        <div class="vx-col w-1/2 pb-4 relative">
          <label>Location Name</label>
          <vs-input v-model="formData.locationName" class="w-full" />
        </div>
        <div class="vx-col w-1/2 pb-4 relative">
          <label>Street Address</label>
          <vs-input v-model="formData.streetAddress" class="w-full" />
        </div>
        <div class="vx-col w-1/2 pb-4">
          <label>City</label>
          <vs-input v-model="formData.city" class="w-full" />
        </div>
        <div class="vx-col w-1/2 pb-4">
          <label>State</label>
          <vs-input v-model="formData.state" class="w-full" />
        </div>
        <div class="vx-col w-1/2 pb-4">
          <label>Postal Code</label>
          <vs-input v-model="formData.postalCode" class="w-full" />
        </div>
        <div class="vx-col w-1/2 pb-4">
          <label>Amount</label>
          <vs-input
            v-model="formData.amount"
            type="number"
            name="Amount"
            v-validate="'between:0,999999.99'"
            data-vv-validate-on="blur"
            class="w-full"
          />
          <span class="text-danger text-sm">
            {{ errors.first('Amount') }}
          </span>
        </div>
        <div class="vx-col w-1/2 pb-4">
          <label>Reference</label>
          <vs-input
            v-model="formData.reference"
            data-vv-validate-on="blur"
            name="Reference"
            class="w-full"
          />
          <span class="text-danger text-sm">
            {{ errors.first('Reference') }}
          </span>
        </div>
        <div
          class="vx-col w-1/2 pb-4"
          v-if="formData.type == 'trailerMovement'"
        >
          <label>Moves <field-required-sign /></label>
          <vs-input
            v-model="formData.trailerMoves"
            v-validate="'between:1,255'"
            data-vv-validate-on="blur"
            name="Moves"
            type="number"
            class="w-full"
          />
          <span class="text-danger text-sm">
            {{ errors.first('Moves') }}
          </span>
        </div>
        <div
          class="vx-col w-1/2 pb-4"
          v-if="formData.type == 'trailerRecovery'"
        >
          <label>Trailer # <field-required-sign /></label>
          <vs-input
            v-model="formData.trailerNumber"
            data-vv-validate-on="blur"
            name="Trailer"
            class="w-full"
          />
          <span class="text-danger text-sm">
            {{ errors.first('Trailer') }}
          </span>
        </div>
      </div>
      <div class="flex justify-end w-full mt-5">
        <vs-button
          color="#1877F2"
          class="mr-3 action-btn"
          type="border"
          @click.prevent="onClose"
        >
          Cancel
        </vs-button>
        <vs-button
          color="#1877F2"
          class="action-btn"
          :disabled="isSubmitDisabled"
          @click.stop="submitForm"
        >
          {{ editMode ? 'Update' : 'Save' }}
        </vs-button>
      </div>
    </form>
  </vs-sidebar>
</template>

<script>
import config from '@/config/constants.js';
import SetPlaceMixin from '@/mixins/setPlaceMixin.js';
import {
  getApiErrorMsg,
  emptyStringToNull,
  getObjectDifference,
  nullToEmptyString,
} from '@/helpers/helper';
export default {
  name: 'AddAccessorialServices',
  props: {
    isModalActive: {
      required: true,
      type: Boolean,
    },
    isModalData: {
      required: true,
      default: () => null,
    },
  },
  mixins: [SetPlaceMixin],
  data() {
    return {
      formData: {
        type: '',
        date: '',
        locationName: '',
        trailerMoves: null,
        trailerNumber: '',
        reference: '',
        streetAddress: '',
        city: '',
        state: '',
        postalCode: '',
        amount: null,
      },
      types: [
        {
          title: 'Trailer Movement',
          value: 'trailerMovement',
        },
        {
          title: 'Trailer Recovery',
          value: 'trailerRecovery',
        },
        {
          title: 'Hazmat',
          value: 'hazmat',
        },
        {
          title: 'Bobtail',
          value: 'bobtail',
        },
      ],
      formDataForUpdate: null,
      googleMapAutoCompleteOptions: config.googleMapAutoCompleteOptions,
    };
  },
  computed: {
    isModalShowing: {
      get() {
        return this.isModalActive;
      },
      set() {},
    },
    editMode() {
      return this.isModalData ? true : false;
    },
    isSubmitDisabled() {
      return (
        this.errors.any() ||
        !this.formData.date ||
        !this.formData.type ||
        (this.formData.type == 'trailerMovement' &&
          !this.formData.trailerMoves) ||
        (this.formData.type == 'trailerRecovery' &&
          !this.formData.trailerNumber) ||
        (this.editMode &&
          JSON.stringify(this.formData) ===
            JSON.stringify(this.formDataForUpdate))
      );
    },
  },
  methods: {
    resetForm() {
      this.formData.date = '';
      this.formData.type = '';
      this.formData.locationName = '';
      this.formData.trailerMoves = null;
      this.formData.trailerNumber = '';
      this.formData.reference = '';
      this.formData.streetAddress = '';
      this.formData.city = '';
      this.formData.state = '';
      this.formData.postalCode = '';
      this.formData.amount = null;
      delete this.formData.id;
    },
    onClose() {
      this.$emit('onClose');
      this.resetForm();
      this.$validator.reset();
    },
    removeDate() {
      this.formData.date = '';
    },
    removeEmptyFields(payload) {
      return Object.fromEntries(
        Object.entries(payload).filter(
          ([_, v]) =>
            (v != '' && v != null) ||
            (typeof v == 'object' && v != null && v.length) ||
            typeof v === 'boolean'
        )
      );
    },
    async submitForm() {
      try {
        if (this.editMode) {
          const changedValues = getObjectDifference(
            this.formDataForUpdate,
            this.formData
          );
          emptyStringToNull(changedValues);
          if (changedValues.trailerMoves) {
            changedValues.trailerMoves = Number(changedValues.trailerMoves);
          }   
          if (changedValues.amount) {
            changedValues.amount = Number(changedValues.amount);
          }
          await this.$store.dispatch('accounting/updateAccessorialServices', {
            id: this.formData.id,
            ...changedValues,
          });
        } else {
          const payload = this.removeEmptyFields(this.formData);
          if (payload.trailerMoves) {
            payload.trailerMoves = Number(payload.trailerMoves);
          }
          if (payload.amount) {
            payload.amount = Number(payload.amount);
          }
          await this.$store.dispatch(
            'accounting/createAccessorialServices',
            payload
          );
        }
        this.$vs.notify({
          color: 'primary',
          title: 'Success',
          text: `Accessorial Service ${
            !this.editMode ? 'Added' : 'Updated'
          } Successfully`,
        });
        this.$emit('refresh');
        this.onClose();
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
  },
  watch: {
    isModalData(val) {
      if (val) {
        const data = { ...this.formData, ...val };
        // removing unneseccary fields
        delete data.createdBy;
        if (data.type == 'trailerMovement') {
          delete data.trailerNumber;
        } else if (data.type == 'trailerRecovery') {
          delete data.trailerMoves;
        } else if (data.type == 'hazmat' || data.type == 'bobtail') {
          delete data.trailerNumber;
          delete data.trailerMoves;
        }
        this.formData = nullToEmptyString(data);
        this.formDataForUpdate = structuredClone(this.formData);
      }
    },
    'formData.type'(val) {
      if (val && !this.editMode) {
        if (val === 'trailerMovement') {
          this.formData.trailerNumber = '';
        } else if (val === 'trailerRecovery') {
          this.formData.trailerMoves = null;
        } else {
          this.formData.trailerNumber = '';
          this.formData.trailerMoves = null;
        }
      }
    },
  },
};
</script>

<style lang="scss">
.add-accessorial-services-sidebar {
  .vs-sidebar--items {
    overflow: auto;
  }
  .vs-sidebar {
    width: 45vw !important;
    max-width: 50vw !important;
  }
  .vs-input--label {
    padding-left: 0px;
  }
  .clear-date {
    position: absolute;
    inset: 0 0 0 auto;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 25px;
  }
}
</style>
