<template>
  <div>
    <div v-if="authUser.role != 'dispatcher'">
      <p>Service Account</p>
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
        <vs-button color="danger" type="filled" @click="deleteServiceAccount"
          >Delete</vs-button
        >
      </div>
      <vs-divider />
    </div>

    <div>
      <p>User Account</p>
      <vs-input
        label="Username"
        placeholder="Username"
        v-model="userAccountUsername"
      />
      <div class="my-6">
        <vs-button color="primary" type="filled" @click="submitUserAccount"
          >Submit</vs-button
        >
        <vs-button color="danger" type="filled" @click="deleteUserAccount"
          >Delete</vs-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      serviceAccountUsername: "",
      serviceAccountPassword: "",
      userAccountUsername: "",
      checkValidationServiceUsername: false
    };
  },

  created() {
    this.getAccountDetails();
  },

  computed: {
    ...mapGetters("auth", { authUser: "user" })
  },

  methods: {
    getAccountDetails() {
      this.$store.dispatch("dat/accountDetails").then(data => {
        if (this.authUser.role != "dispatcher") {
          this.serviceAccountUsername = data.payload.serviceAccount.username;
          this.serviceAccountPassword = data.payload.serviceAccount.password;
        }
        this.userAccountUsername = data.payload.userAccount.username;
      });
    },

    submitServiceAccount() {
      const payload = {
        username: this.serviceAccountUsername,
        password: this.serviceAccountPassword
      };
      this.$store
        .dispatch("dat/postServiceAccount", payload)
        .then(() => {
          this.$emit("handleDatStatus");
          this.$vs.notify({
            color: "success",
            title: "Add successfully",
            text: "Service account added successfully"
          });
        })
        .catch(error => {
          this.$vs.notify({
            color: "danger",
            title: "Error",
            text: error.response.data.message
          });
        });
    },

    deleteServiceAccount() {
      this.$store
        .dispatch("dat/deleteServiceAccount")
        .then(() => {
          this.$vs.notify({
            color: "success",
            title: "Deleted successfully",
            text: "Service account deleted successfully"
          });
        })
        .catch(error => {
          this.$vs.notify({
            color: "danger",
            title: "Error",
            text: error.response.data.message
          });
        })
        .finally(() => {
          this.getAccountDetails();
          this.$emit("handleDatStatus");
        });
    },

    submitUserAccount() {
      const payload = {
        username: this.userAccountUsername
      };
      this.$store
        .dispatch("dat/postUserAccount", payload)
        .then(() => {
          this.$emit("handleDatStatus");
          this.$vs.notify({
            color: "success",
            title: "Add successfully",
            text: "User account added successfully"
          });
        })
        .catch(error => {
          this.$vs.notify({
            color: "danger",
            title: "Error",
            text: error.response.data.message
          });
        });
    },

    deleteUserAccount() {
      this.$store
        .dispatch("dat/deleteUserAccount")
        .then(() => {
          this.$vs.notify({
            color: "success",
            title: "Deleted successfully",
            text: "User account deleted successfully"
          });
        })
        .catch(error => {
          this.$vs.notify({
            color: "danger",
            title: "Error",
            text: error.response.data.message
          });
        })
        .finally(() => {
          this.getAccountDetails();
          this.$emit("handleDatStatus");
        });
    }
  }
};
</script>

<style lang="stylus">
.labelx {
  vs-input {
    margin: 10px;
  }
}
</style>
