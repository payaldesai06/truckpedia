<template>
  <div>
    <p>
      Refer another company directly to Ezpapel using this form. Please make
      sure your referral is aware before submitting their information.
    </p>
    <vs-input label="Company Name" class="w-full my-3" v-model="companyName" />
    <div class="flex space-x-4 my-3">
      <vs-input
        type="text"
        label="Contact First Name"
        class="w-1/2"
        v-model="contactFirstName"
      />
      <vs-input
        type="text"
        label="Contact Last Name"
        class="w-1/2"
        v-model="contactLastName"
      />
    </div>
    <vs-input
      label="Contact Phone"
      type="text"
      class="w-full my-3"
      v-model="contactPhone"
    />
    <vs-input
      label="Contact Email"
      type="text"
      class="w-full my-3"
      v-model="contactEmail"
    />
    <div class="flex space-x-4 my-3">
      <div class="w-1/2">
        <label>Country</label>
        <multiselect
          v-model="country"
          :show-labels="false"
          :options="countryOption"
        ></multiselect>
      </div>
      <div class="w-1/2">
        <label>State / Province</label>
        <multiselect
          v-model="state"
          track-by="text"
          label="text"
          :show-labels="false"
          :options="stateOption"
        ></multiselect>
      </div>
    </div>

    <div>
      <vs-input
        type="text"
        class="w-full my-3"
        label="Number of trucks"
        v-model="numberOfTrucks"
      />
    </div>
    <div class="flex items-center space-x-4 mt-3">
      <vs-button color="primary" type="filled" @click="submitReferral"
        >Submit</vs-button
      >
      <vs-button
        color="primary"
        type="border"
        @click="$emit('closeSubmitReferralPopup')"
        >Cancel</vs-button
      >
    </div>
  </div>
</template>

<script>
import config from "@/config/constants.js";

export default {
  name: "SubmitReferral",
  data() {
    return {
      companyName: "",
      contactFirstName: "",
      contactLastName: "",
      contactPhone: "",
      contactEmail: "",
      country: "United States",
      countryOption: ["United States"],
      state: "",
      stateOption: config.state_list,
      numberOfTrucks: "",
    };
  },

  methods: {
    clearValues() {
      this.companyName = "";
      this.contactFirstName = "";
      this.contactLastName = "";
      this.contactPhone = "";
      this.contactEmail = "";
      this.state = "";
      this.numberOfTrucks = "";
    },

    submitReferral() {
      this.$vs.loading();
      const payload = {
        companyName: this.companyName,
        firstName: this.contactFirstName,
        lastName: this.contactLastName,
        phone: this.contactPhone,
        email: this.contactEmail,
        state: this.state.text,
        numberOfTrucks: this.numberOfTrucks,
      };

      this.$store
        .dispatch("referral/submitReferral", payload)
        .then((item) => {
          if (item.result) {
            this.$vs.notify({
              color: "success",
              title: "Submit Successfully",
              text: "Your referral is submitted successfully",
            });
            this.$emit("closeSubmitReferralPopup");
          }
        })
        .catch((error) => {
          this.$vs.notify({
            color: "danger",
            title: "Error",
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

<style lang="scss">
.multiselect__tags {
  border: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
