<template>
  <div>
    <div>
      <div class="flex flex-col gap-2">
        <label>Username<field-required-sign /></label>
        <vs-input
          class="w-full"
          placeholder="Username"
          v-model="username"
          :disabled="tafsData"
        />
        <label>Password<field-required-sign /></label>
        <vs-input
          class="mt-2 w-full"
          type="password"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <div class="my-6">
        <vs-button
          color="primary"
          :disabled="submitDisabled"
          type="filled"
          @click="submitServiceAccount"
        >
          Submit
        </vs-button>
        <vs-button
          color="danger"
          :disabled="!tafsData"
          type="filled"
          @click="openDeleteConfirmation"
        >
          Delete
        </vs-button>
      </div>
      <vs-divider />
    </div>
  </div>
</template>

<script>
import { getApiErrorMsg } from '@/helpers/helper';
import globalMixins from '@/mixins/globalMixins';

export default {
  props: {
    tafsData: {
      type: Object,
      default: () => null,
    },
  },
  mixins: [globalMixins],
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {
    submitDisabled() {
      return (
        this.username.trim().length === 0 || this.password.trim().length === 0
      );
    },
  },
  methods: {
    clearInputs() {
      this.username = '';
      this.password = '';
    },
    submitServiceAccount() {
      const payload = this.tafsData
        ? { id: this.id, password: this.password }
        : { username: this.username, password: this.password };

      const action = this.tafsData
        ? 'tafs/updateAccount'
        : 'tafs/createAccount';
      const successMessage = this.tafsData
        ? 'Tafs account updated successfully'
        : 'Tafs account added successfully';

      this.$vs.loading();
      this.$store
        .dispatch(action, payload)
        .then(() => {
          this.showSuccessMessage(successMessage);
          this.clearInputs();
          this.$emit('handleTafsStatus');
          this.$emit('closePopup');
        })
        .catch((error) => {
          this.showErrorMessage(getApiErrorMsg(error));
        })
        .finally(this.$vs.loading.close);
    },
    openDeleteConfirmation() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Delete Account',
        text: 'Are you sure you want to remove this account?',
        accept: this.disconnectTafsAccount,
      });
    },
    disconnectTafsAccount() {
      this.$vs.loading();
      this.$store
        .dispatch('tafs/deleteAccount', this.id)
        .then(() => {
          this.showSuccessMessage('Tafs account deleted successfully');
          this.clearInputs();
          this.$emit('handleTafsStatus');
          this.$emit('closePopup');
        })
        .catch((error) => {
          this.showErrorMessage(getApiErrorMsg(error));
        })
        .finally(this.$vs.loading.close);
    },
  },
  watch: {
    tafsData(value) {
      if (value) {
        this.username = value.username;
        this.id = value.id;
      }
    },
  },
};
</script>
