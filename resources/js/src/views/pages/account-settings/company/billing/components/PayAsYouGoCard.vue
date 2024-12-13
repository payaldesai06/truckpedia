<template>
  <div class="h-full w-full">
    <h4 class="text-lg uppercase font-semibold text-primary">Pay as you go</h4>

    <component
      :is="subscriptionComponent"
      :subscriptionStatus="subscriptionStatus"
      :subscriptionToDate="subscriptionToDate"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import config from "@/config/constants";
import SubscriptionInActive from "./subscription/InActive";
import SubscriptionActive from "./subscription/Active";
import SubscriptionSuspended from "./subscription/Suspended";

export default {
  name: "PayAsYouGo",

  components: {
    SubscriptionInActive,
    SubscriptionActive,
    SubscriptionSuspended
  },

  data() {
    return {
      subscriptionStatuses: config.status.subscription
    };
  },

  computed: {
    ...mapGetters("auth", ["user"]),

    subscriptionStatus() {
      return this.user.admin_company_details.subscription_status;
    },

    subscriptionToDate() {
      return this.user.admin_company_details.subscription_to_date;
    },

    subscriptionComponent() {
      return {
        [this.subscriptionStatuses.in_active]: "subscription-in-active",
        [this.subscriptionStatuses.active]: "subscription-active",
        [this.subscriptionStatuses.suspended]: "subscription-suspended",
        [this.subscriptionStatuses.canceled]: "subscription-in-active"
      }[this.subscriptionStatus];
    }
  }
};
</script>

<style scoped></style>
