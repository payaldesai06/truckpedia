<template>
  <div>
    <!-- Overview Details -->
    <div class="vx-row w-full m-0">
      <!-- First Column -->
      <div class="vx-col w-full pl-0 mb-8 md:mb-0 mt-6">
        <div class="text-right">
          <vs-button color="primary" @click="toggleLaneSidebar(true)"
            >New Lane</vs-button
          >
        </div>
        <div class="mt-4">
          <LanesTabTable
            :totalRecords="totalRecords"
            :paginationMetaData="paginationMetaData"
            :lanesData="lanesData"
            @laneDeleted="laneUpdated"
            @getLaneIdToEdit="getLanesIdToEdit"
            @fetchLanes="getLanesData"
          />
        </div>
      </div>
    </div>
    <AddLane
      @closeSidebar="toggleLaneSidebar(false)"
      @laneUpdated="laneUpdated"
      :isActive="laneSidebar.isActive"
      :laneSidebar="laneSidebar"
    />
  </div>
</template>

<script>
import AddLane from './lanes/AddLane.vue';
import LanesTabTable from './lanes/LanesTabTable.vue';
import { getApiErrorMsg } from '@/helpers/helper';
export default {
  name: 'Lanes-tab',
  components: {
    LanesTabTable,
    AddLane,
  },
  data() {
    return {
      lanesData: [],
      paginationMetaData: {},
      totalRecords: 0,
      currentPage: 1,
      laneSidebar: {
        isActive: false,
        id: null,
      },
    };
  },
  created() {
    this.getLanesData();
  },
  methods: {
    async getLanesData(pageSize = 25, page = 1) {
      try {
        const params = {
          customerId: this.$route.params.id,
          pageSize,
          page,
          fields: [
            'code',
            'origin',
            'destination',
            'distance',
            'rate',
            'roundTripDistance',
            'roundTripRate',
            'notes',
          ],
        };
        const { data } = await this.$store.dispatch(
          'customer/getCustomerLanes',
          params
        );
        this.lanesData = data.payload.lanes;
        const { meta } = (data || {}).payload || {};
        const { totalItems, currentPage } = meta || {};
        this.totalRecords = totalItems || 0;
        this.currentPage = currentPage || 1;
        this.paginationMetaData = meta;
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    toggleLaneSidebar(isActive = false, id = null) {
      this.laneSidebar.isActive = isActive;
      this.laneSidebar.id = id;
    },
    laneUpdated() {
      this.toggleLaneSidebar(false);
      this.getLanesData(25, this.currentPage); // getting data of 1st page
    },
    getLanesIdToEdit(id) {
      this.toggleLaneSidebar(true, id);
    },
  },
};
</script>
