<template>
  <div>
    <vs-input
      type="text"
      label="Login Id"
      class="w-full mb-5"
      v-model="loginId"
    />

    <vs-input
      type="text"
      label="Transaction Key"
      class="w-full mb-5"
      v-model="transactionKey"
    />
    <vs-input
      type="text"
      label="Public Client Key"
      class="w-full mb-5"
      v-model="publicClientKey"
    />

    <div class="mt-4">
      <vs-button
        color="primary"
        type="filled"
        @click.prevent="submitPaymentApiKey"
        autocomplete="off"
      >
        Submit
      </vs-button>
      <!-- <vs-button color="danger" class="ml-1" type="filled" @click="deletePaymentApiKey" autocomplete="off">
        Delete
      </vs-button> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginId: '',
      transactionKey: '',
      publicClientKey: '',
    };
  },
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    isActive: {
      handler(val) {
        if (!val) {
          this.clearForm();
        } else {
          this.getPaymentApiKey();
        }
      },
      immediate: true,
    },
  },
  methods: {
    submitPaymentApiKey() {
      const payload = {
        loginId: this.loginId,
        transactionKey: this.transactionKey,
        publicClientKey: this.publicClientKey,
      };
      this.$store
        .dispatch('authorize/connectPayment', payload)
        .then((data) => {
          this.$vs.notify({
            color: 'success',
            title: 'Successfully',
            text: 'Authorize.Net API key updated successfully',
          });
          if (data.message === 'Ok') {
            this.$emit('authorizeNetConnectionStatus');
            this.$emit('closePopup');
          }
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        });
    },
    getPaymentApiKey() {
      this.$store
        .dispatch('authorize/getAuthorizeKey')
        .then((data) => {
          this.loginId = data.payload.loginId;
          this.transactionKey = data.payload.transactionKey;
          this.publicClientKey = data.payload.publicClientKey;
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        });
    },
    clearForm() {
      this.loginId = '';
      this.transactionKey = '';
      this.publicClientKey = '';
    },
  },
};
</script>
