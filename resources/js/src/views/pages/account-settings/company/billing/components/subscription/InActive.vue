<template>
  <div class="w-full">
    <div class="mt-4 text-3xl font-semibold">
      <div v-if="user.admin_company_details.monthly_fee_per_unit">
        <p class="text-3xl font-semibold">
          <span>&dollar;</span
          >{{ user.admin_company_details.monthly_fee_per_unit
          }}<span class="ml-1 text-sm uppercase font-bold opacity-75"
            >/driver</span
          >
        </p>
      </div>
      <div v-else-if="user.admin_company_details.monthly_fee">
        <p class="text-3xl font-semibold">
          <span>&dollar;</span>{{ user.admin_company_details.monthly_fee
          }}<span class="ml-1 text-sm uppercase font-bold opacity-75"
            >/Month</span
          >
        </p>
      </div>
      <div v-else>
        <span class="ml-1 text-sm uppercase font-bold opacity-75"
          >Contact Ezpapel for pricing</span
        >
      </div>
    </div>

    <div class="mt-4 flex flex-col items-center">
      <vs-button type="filled" color="primary" @click="onActivate"
        >Activate
      </vs-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SubscriptionInActive",

  computed: {
    ...mapGetters("auth", ["isFreeTrialActive", "user"]),
  },

  methods: {
    async onActivate() {
      if (!this.isFreeTrialActive) {
        return await this.subscriptionActivate();
      }

      this.$vs.dialog({
        type: "confirm",
        color: "primary",
        title: "Activate Plan",
        text: "Are you sure. You want to active you plan while your free trial is active?",
        acceptText: "Yes",
        accept: () => this.subscriptionActivate(),
      });
    },

    async subscriptionActivate() {
      this.$vs.loading();

      try {
        await this.$store.dispatch("stripe/subscriptionActive");

        this.$vs.notify({
          color: "primary",
          title: "Payment",
          text: "Subscription activated successfully.",
        });
      } catch (error) {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message,
        });
      } finally {
        this.$vs.loading.close();
      }
    },
  },
};
</script>

<style scoped></style>
