<template>
  <div class="w-full">
    <!-- <div class="vx-row w-full m-0 md:mb-base">
      <div class="vx-col pl-0 w-full md:w-1/2 mb-8 md:mb-0">
        <Statistics/>
      </div>

      <div class="vx-col pr-0 w-full md:w-1/2 mb-8 md:mb-0">
        <TripRevenue/>
      </div>
    </div>

    <div class="vx-row w-full m-0">
      <div class="vx-col px-0 w-full">
        <LoadDatatable/>
      </div>
    </div> -->
    <home-v-2 />
  </div>
</template>

<script>
// import Statistics from './Statistics'
// import TripRevenue from './TripRevenue'
// import LoadDatatable from './LoadDatatable'
import HomeV2 from '../../home-tab/Index.vue';
export default {
  name: 'AdminDashboard',

  components: {
    // Statistics,
    // TripRevenue,
    // LoadDatatable,
    HomeV2
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .flatpickr-input {
    min-width: 14rem;
  }
}
</style>
