<template>
  <div>
    <vs-input type="number" label="Integration ID" v-model="integrationId" />
    <div class="mt-4">
      <vs-button color="primary" type="filled" @click="submitIntegrationId"
        >Submit</vs-button
      >
      <vs-button
        color="danger"
        class="ml-1"
        type="filled"
        @click="deleteIntegrationId"
        >Delete</vs-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      integrationId: ""
    };
  },

  created() {
    this.getIntegrationId();
  },

  methods: {
    getIntegrationId() {
      this.$store.dispatch("truckstop/getIntegrationId").then(data => {
        this.integrationId = data.payload.integrationId;
      });
    },

    submitIntegrationId() {
      const payload = {
        integrationId: this.integrationId
      };
      this.$store
        .dispatch("truckstop/postIntegrationId", payload)
        .then(() => {
          this.$vs.notify({
            color: "success",
            title: "Added successfully",
            text: "Truck Stop Integration ID added successfully"
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
          this.$emit("handleTruckStopStatus");
        });
    },

    deleteIntegrationId() {
      this.$store
        .dispatch("truckstop/deleteIntegrationId")
        .then(() => {
          this.$vs.notify({
            color: "success",
            title: "Deleted successfully",
            text: "Truck Stop Integration ID deleted successfully"
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
          this.getIntegrationId();
          this.$emit("handleTruckStopStatus");
        });
    }
  }
};
</script>
