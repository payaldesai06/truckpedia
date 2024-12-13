<template>
  <div class="w-full">
    <div class="flex items-center justify-center mt-10">
      <vs-chip color="primary" transparent>
        {{ subscriptionStatus }}
      </vs-chip>
      until {{ subscriptionToDate }}
    </div>

    <div class="mt-4 flex flex-col items-center">
      <vs-button type="border" color="danger" @click="onCancel"
        >Cancel
      </vs-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubscriptionActive",

  props: {
    subscriptionStatus: {
      type: String,
      required: true
    },

    subscriptionToDate: {
      type: String,
      required: true
    }
  },

  methods: {
    onCancel() {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: "Cancel Plan",
        text: "Are you sure. You want to cancel your plan?",
        acceptText: "Yes",
        accept: () => this.subscriptionCancel()
      });
    },

    async subscriptionCancel() {
      this.$vs.loading();

      try {
        await this.$store.dispatch("stripe/subscriptionCancel");

        this.$vs.notify({
          color: "primary",
          title: "Subscription",
          text: "Subscription canceled successfully."
        });
      } catch (error) {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message
        });
      } finally {
        this.$vs.loading.close();
      }
    }
  }
};
</script>

<style scoped></style>
