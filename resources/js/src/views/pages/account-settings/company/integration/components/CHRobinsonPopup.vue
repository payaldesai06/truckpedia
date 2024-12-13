<template>
  <div>
    <vs-input
      type="text"
      label="Carrier Code (T number)"
      v-model="carrierCode"
    />
    <div class="mt-4">
      <vs-button color="primary" type="filled" @click="submitCarrierCode"
        >Submit</vs-button
      >
      <vs-button
        color="danger"
        class="ml-1"
        type="filled"
        @click="deleteCarrierCode"
        >Delete</vs-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carrierCode: "",
    };
  },

  created() {
    this.getCarrierCode();
  },

  methods: {
    getCarrierCode() {
      this.$store.dispatch("chrobinson/getCarrierCode").then((data) => {
        this.carrierCode = data.payload.carrierCode;
      });
    },

    submitCarrierCode() {
      const payload = {
        carrierCode: this.carrierCode,
      };
      this.$store
        .dispatch("chrobinson/postCarrierCode", payload)
        .then(() => {
          this.$vs.notify({
            color: "success",
            title: "Added successfully",
            text: "C.H. Robinson carrier code added successfully",
          });
        })
        .catch((error) => {
          this.$vs.notify({
            color: "danger",
            title: "Error",
            text: error.response.data.message,
          });
        })
        .finally(() => {
          this.$emit("handleCHRobinsonStatus");
        });
    },

    deleteCarrierCode() {
      this.$store
        .dispatch("chrobinson/deleteCarrierCode")
        .then(() => {
          this.$vs.notify({
            color: "success",
            title: "Deleted successfully",
            text: "C.H. Robinson carrier code deleted successfully",
          });
        })
        .catch((error) => {
          this.$vs.notify({
            color: "danger",
            title: "Error",
            text: error.response.data.message,
          });
        })
        .finally(() => {
          this.getCarrierCode();
          this.$emit("handleCHRobinsonStatus");
        });
    },
  },
};
</script>
