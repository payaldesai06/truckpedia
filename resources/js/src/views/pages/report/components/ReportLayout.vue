<template>
  <div class="vx-row space-y-6">
    <div class="vx-col w-1/6">
      <vs-button color="dark"
                 type="border"
                 icon-pack="feather"
                 icon="icon-arrow-left"
                 :to="{name: 'report'}">Back
      </vs-button>
    </div>

    <div class="vx-col w-full">
      <slot/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ReportLayout',

  async created () {
  }
}
</script>

<style scoped>

</style>
