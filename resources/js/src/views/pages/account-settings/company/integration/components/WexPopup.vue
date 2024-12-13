<template>
  <div>
    <div>
      <p>Service Account</p>
      <p>
        ALERT: Please talk to Wex/EFS/Fleet One and Truckpedia before entering
        username and password. Wex/EFS/Fleet One need to add our server's IP
        address to your account before we can pull fuel transactions. If you
        enter username and password without talking to them, we will NOT get any
        fuel transactions.
      </p>
      <div class="labelx">
        <vs-input
          label="Username"
          placeholder="Username"
          v-model="serviceAccountUsername"
        />
        <vs-input
          label="Password"
          class="mt-2"
          type="password"
          placeholder="Password"
          v-model="serviceAccountPassword"
        />
      </div>
      <div class="my-6">
        <vs-button color="primary" type="filled" @click="submitServiceAccount"
          >Submit</vs-button
        >
        <vs-button color="danger" type="filled" @click="disconnectWexAccount"
          >Delete</vs-button
        >
      </div>
      <vs-divider />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      serviceAccountUsername: '',
      serviceAccountPassword: '',
    };
  },

  created() {
    this.getAccountDetails();
  },

  computed: {
    ...mapGetters('auth', { authUser: 'user' }),
  },

  methods: {
    getAccountDetails() {
      this.$store.dispatch('wex/getAccountDetails').then((data) => {
        this.serviceAccountUsername = data.payload.userName;
        this.serviceAccountPassword = data.payload.password;
      });
    },
    submitServiceAccount() {
      let username = this.serviceAccountUsername,
        password = this.serviceAccountPassword;
      if (username.trim().length === 0 || password.trim().length === 0) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Please enter username & password',
        });
        return;
      }
      const payload = {
        username: username,
        password: password,
      };
      this.$vs.loading();
      this.$store
        .dispatch('wex/postWexServiceAccount', payload)
        .then(() => {
          this.$emit('handleWexStatus');
          this.$vs.notify({
            color: 'success',
            title: 'Add successfully',
            text: 'Service account added successfully',
          });
          setTimeout(() => {
            this.$emit('closePopup');
          }, 200);
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
    disconnectWexAccount() {
      this.$vs.loading();
      this.$store
        .dispatch('wex/disconnectWexAccount')
        .then(() => {
          this.$vs.notify({
            color: 'success',
            title: 'Deleted successfully',
            text: 'Service account deleted successfully',
          });
          setTimeout(() => {
            this.$emit('closePopup');
          }, 200);
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
          this.getAccountDetails();
          this.$emit('handleWexStatus');
        });
    },
  },
};
</script>
