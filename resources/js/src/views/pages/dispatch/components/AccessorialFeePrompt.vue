<template>
  <vs-prompt
    :title="promptTitle"
    :accept-text="isEditMode ? 'Update' : 'Save'"
    @accept="onAccept"
    @cancel="onClose"
    @close="onClose"
    :is-valid="isFormValid"
    :active.sync="isOpen"
    style="z-index: 52015"
  >
    <div class="con-exemple-prompt space-y-4">
      <div>
        <label class="text-xs">
          Name
          <field-required-sign />
        </label>
        <vs-input name="accessorial_fee_name" v-model="name" class="w-full" />
      </div>

      <div>
        <label class="text-xs">
          Description
          <field-required-sign />
        </label>
        <vs-input
          name="accessorial_fee_description"
          v-model="description"
          class="w-full"
        />
      </div>

      <vs-checkbox v-model="commissionable" class="ml-0">
        <label class="text-sm">Commissionable?</label>
      </vs-checkbox>
    </div>
  </vs-prompt>
</template>

<script>
import { isValidInputValue, getApiErrorMsg } from '@/helpers/helper';

export default {
  name: 'AccessorialFeePrompt',

  props: {
    active: {
      required: true,
      default: false,
    },
    data: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      isOpen: this.active,
      id: null,
      name: null,
      description: null,
      commissionable: true,
    };
  },

  computed: {
    hasValueChanged() {
      if (this.isEditMode) {
        return (
          this.name !== this.data.name ||
          this.description !== this.data.description ||
          this.commissionable !== this.data.commissionable
        );
      }
      return true;
    },
    isFormValid() {
      return (
        isValidInputValue(this.name) &&
        isValidInputValue(this.description) &&
        this.hasValueChanged
      );
    },
    isEditMode() {
      return Object.keys(this.data).length;
    },
    promptTitle() {
      return this.isEditMode ? `Edit Accessorial Fee` : `New Accessorial Fee`;
    },
  },

  watch: {
    active(newVal) {
      this.isOpen = newVal;

      if (this.isEditMode) {
        this.id = this.data.id || null;
        this.name = this.data.name || null;
        this.description = this.data.description || null;
        this.commissionable = this.data.commissionable;
      }
    },
  },

  methods: {
    onClose(isNewAdded = false) {
      this.id = null;
      this.name = null;
      this.description = null;
      this.commissionable = true;
      if (!isNewAdded) {
        this.$emit('accessorial-fee::added', null);
      }
      this.$emit('close');
    },
    async onAccept() {
      try {
        this.$vs.loading();

        if (this.isEditMode) {
          let payload = {
            id: this.id,
          };
          if (this.name !== this.data.name) {
            payload.name = this.name;
          }
          if (this.description !== this.data.description) {
            payload.description = this.description;
          }
          if (this.commissionable !== this.data.commissionable) {
            payload.commissionable = this.commissionable;
          }

          const {
            data: { result },
          } = await this.$store.dispatch(
            'accounting/updateAccessorialFee',
            payload
          );
          if (result) {
            this.$emit('accessorial-fee::updated', {
              id: this.id,
              name: this.name,
              description: this.description,
              commissionable: this.commissionable,
            });
            this.onClose(true);
            this.$vs.notify({
              color: 'primary',
              title: 'Accessorial Fee',
              text: 'Accessorial Fee updated successfully.',
            });
          }
        } else {
          let payload = {
            name: this.name,
            description: this.description,
            commissionable: this.commissionable,
          };

          const { data } = await this.$store.dispatch(
            'accounting/createAccessorialFee',
            payload
          );
          if (data && data.payload) {
            const accessorialFee = {
              ...payload,
              id: data.payload.id,
              commissionable: this.commissionable,
            };
            this.$emit('accessorial-fee::added', accessorialFee);
            this.onClose(true);
            this.$vs.notify({
              color: 'primary',
              title: 'Accessorial Fee',
              text: 'Accessorial Fee added successfully.',
            });
          }
        }
      } catch (error) {
        this.$vs.notify({
          title: 'Error',
          color: 'danger',
          text: getApiErrorMsg(error),
        });
      } finally {
        this.$vs.loading.close();
      }
    },
  },
};
</script>

<style lang="stylus">
.vs-icon{
  margin-right: 0px !important;
}
</style>
