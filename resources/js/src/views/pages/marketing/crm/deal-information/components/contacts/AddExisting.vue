<template>
  <Dialog
    :visible="isShow"
    :style="{ width: '40vw' }"
    :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
    :modal="true"
  >
    <template #header>
      <div class="flex items-center justify-between w-full">
        <h5>Add Existing Contacts</h5>
        <vs-icon
          class="cursor-pointer"
          icon="close"
          size="small"
          @click="onClose"
        />
      </div>
    </template>
    <label>Contact <field-required-sign /></label>
    <!-- <vs-input v-model="contact" name="contact" class="w-full" /> -->
    <v-select
      :options="existingContact"
      :clearable="true"
      :appendToBody="true"
      v-model="selectedContactId"
      class="mb-4 md:mb-0"
      :getOptionLabel="getFullName"
      :reduce="(option) => option.id"
      name="existingContact"
      v-validate="'required'"
      data-vv-as="selected"
      :multiple="true"
    />
    <span class="text-danger text-sm">{{
      errors.first('existingContact')
    }}</span>
    <div class="flex justify-end w-full mt-3">
      <vs-button class="mr-3 action-btn" type="border" @click="onClose">
        Cancel
      </vs-button>
      <vs-button
        class="action-btn"
        :disabled="!validateForm"
        @click="addExistingContact"
      >
        Save
      </vs-button>
    </div>
  </Dialog>
</template>

<script>
import { getApiErrorMsg } from '@/helpers/helper';
import { Validator } from 'vee-validate';
import { mapGetters } from 'vuex';
const dict = {
  custom: {
    existingContact: {
      required: 'Contact field is required',
    },
  },
};
Validator.localize('en', dict);
export default {
  name: 'add-existing',
  props: {
    isShow: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      selectedContactId: '',
      existingContact: [],
    };
  },
  mounted() {
    this.fetchContacts();
  },
  watch: {
    isShow: {
      handler() {
        this.selectedContactId = '';
      },
    },
  },
  computed: {
    ...mapGetters('marketing', ['selectedDeal']),
    validateForm() {
      return !this.errors.any() && this.selectedContactId;
    },
  },
  methods: {
    getFullName(option) {
      return `${option.firstName} ${option.lastName}`;
    },
    async addExistingContact() {
      const payload = {
        id: this.selectedDeal.id,
        addContactIds: this.selectedContactId,
      };
      const response = await this.$store.dispatch(
        'marketing/editDeal',
        payload
      );
      if (response.data.result) {
        this.$vs.notify({
          title: 'Success',
          text: 'Contacts added in deal successfully',
          color: 'primary',
        });
        this.onClose();
        this.$emit('refresh');
      }
    },
    async fetchContacts() {
      try {
        const { data } = await this.$store.dispatch('marketing/getContacts');
        this.existingContact = data.payload.contacts || [];
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },

    onClose() {
      this.$emit('hideExistingModal');
    },
  },
};
</script>

<style>
body ul[role='listbox'] {
  z-index: 100000 !important;
}
</style>
