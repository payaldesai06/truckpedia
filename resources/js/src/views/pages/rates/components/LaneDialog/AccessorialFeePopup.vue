<template>
  <Dialog
    class="accessorial-fee-dialog"
    :visible="isPromptActive"
    :closable="false"
    :modal="true"
    :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
    :style="{ width: '40vw' }"
    :contentStyle="{ overflow: 'auto', padding: '0 1.5rem' }"
  >
    <!-- Header Section -->
    <template #header>
      <div class="w-full flex items-center">
        <div class="ml-auto">
          <vs-icon
            class="cursor-pointer"
            icon="close"
            size="small"
            @click="$emit('toggleDialog')"
          />
        </div>
      </div>
    </template>

    <vs-divider class="mt-0" />

    <!-- Body Section -->
    <div class="w-full mt-4">
      <div class="fee-container" v-for="field in formFields" :key="field.id">
        <div class="label">
          <label>{{ field.label }}</label>
        </div>
        <div class="input">
          <vs-input
            class="w-full"
            v-model="value[field.key]"
            type="number"
            icon="attach_money"
            data-vv-validate-on="blur"
            :name="field.key"
            v-validate="'between:0,9999.99'"
            @input.native="validateValue($event, field.key)"
          />
          <span class="text-danger text-sm">
            {{ errors.first(field.key) }}
          </span>
        </div>
      </div>
    </div>

    <vs-divider class="mb-0" />

    <!-- Footer Section -->
    <template #footer>
      <div class="w-full mt-4">
        <div class="max-w-fit flex ml-auto">
          <vs-button
            class="w-full"
            color="primary"
            :disabled="isDisabled"
            @click.stop="saveDetails"
          >
            Save
          </vs-button>
          <vs-button
            class="w-full"
            color="primary"
            type="border"
            @click.stop="$emit('toggleDialog')"
          >
            Cancel
          </vs-button>
        </div>
      </div>
    </template>
  </Dialog>
</template>

<script>
import { mapGetters } from 'vuex';
import { isEqual } from 'lodash';
import { getObjectDifference } from '../../../../../helpers/helper';

export default {
  name: 'AccessorialFeePopup',
  props: {
    isPromptActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters('planningV2', ['getAccessorialFee']),
    isDisabled() {
      return isEqual(this.getAccessorialFee, this.value);
    },
  },
  data() {
    return {
      formFields: [
        {
          id: 1,
          key: 'detentionRate',
          label: 'Detention (hourly after 2 hours)',
        },
        {
          id: 2,
          key: 'layoverRate',
          label: 'Layover (daily)',
        },
        {
          id: 3,
          key: 'tonuRate',
          label: 'TONU',
        },
        {
          id: 4,
          key: 'extraStopRate',
          label: 'Extra Stop',
        },
        {
          id: 5,
          key: 'chassisRentalRate',
          label: 'Chassis Rental (daily)',
        },
        {
          id: 6,
          key: 'chassisSplitRate',
          label: 'Chassis Split',
        },
        {
          id: 7,
          key: 'dryStorageRate',
          label: 'Dry Storage (daily)',
        },
        {
          id: 8,
          key: 'hazmatRate',
          label: 'Hazmat',
        },
        {
          id: 9,
          key: 'prepullRate',
          label: 'Prepull',
        },
      ],
      value: {
        detentionRate: null,
        layoverRate: null,
        tonuRate: null,
        extraStopRate: null,
        chassisRentalRate: null,
        chassisSplitRate: null,
        dryStorageRate: null,
        hazmatRate: null,
        prepullRate: null,
      },
    };
  },
  created() {
    this.initValidator();

    Object.keys(this.value).forEach((key) => {
      this.value[key] = this.getAccessorialFee[key] || null;
    });
  },
  methods: {
    initValidator() {
      const commonRules = {
        between: () => 'Rate must be between 0 and 9999.99',
      };
      const dict = {
        custom: {
          detentionRate: {
            ...commonRules,
          },
          layoverRate: {
            ...commonRules,
          },
          tonuRate: {
            ...commonRules,
          },
          extraStopRate: {
            ...commonRules,
          },
          chassisRentalRate: {
            ...commonRules,
          },
          chassisSplitRate: {
            ...commonRules,
          },
          dryStorageRate: {
            ...commonRules,
          },
          hazmatRate: {
            ...commonRules,
          },
          prepullRate: {
            ...commonRules,
          },
        },
      };

      this.$validator.localize('en', dict);
    },
    async saveDetails() {
      await this.$validator.validateAll();
      if (this.errors.items.length) {
        return;
      }
      this.$emit(
        'saveDetails',
        getObjectDifference(this.getAccessorialFee, this.value)
      );
    },
    validateValue(event, field) {
      // Max 2 decimal places
      const regex = new RegExp(/^\d+(\.\d{0,2})?$/);
      const value = String(event.target.value);
      if (!regex.test(value)) {
        const valueLength = value.length;
        event.target.value = value.substring(0, valueLength - 1);
      }

      this.value[field] =
        event.target.value !== '' ? Number(event.target.value) : null;
    },
  },
};
</script>

<style lang="scss" scoped>
.accessorial-fee-dialog {
  ::v-deep .p-dialog-content {
    overflow-y: visible;
    min-height: auto;
  }

  .fee-container {
    margin-top: 1.5rem;
    width: 100%;
    align-items: center;
    display: grid;
    grid-template-columns: 25% 75%;

    .label {
      width: 100%;
      label {
        color: hsl(0, 0%, 20%);
        opacity: 0.75;
        font-size: 13px;
      }
    }

    .input {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    ::v-deep {
      .vs-input--icon {
        top: 11px;
        border-right: none !important;
        z-index: 10 !important;
      }
    }
  }
}

// Utility Classes
.max-w-fit {
  max-width: fit-content;
}
</style>
