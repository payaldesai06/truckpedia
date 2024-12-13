<template>
  <div class="w-full">
    <div class="flex items-center space-x-4">
      <div>
        <img :src="report.image.src" :alt="report.name" class="w-24"/>
      </div>

      <div>
        <h3 class="text-lg">
          <router-link :to="report.route" class="text-dark hover:text-primary hover:opacity-75">
            {{ report.name }}
          </router-link>
        </h3>
        <p class="mt-2 max-w-md text-base" v-if="report.description">
          {{ report.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReportCard',

  props: {
    report: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
