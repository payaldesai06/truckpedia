<template>
  <div class="w-full">
    <div class="flex items-center justify-center mt-10">
      <vs-chip color="warning" transparent>
        {{ subscriptionStatus }}
      </vs-chip>
    </div>

    <div class="mt-4 flex flex-col items-center">
      <p class="text-sm font-semibold text-danger opacity-75">
        Please make due payment, to keep using services.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubscriptionSuspended',

  props: {
    subscriptionStatus: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
