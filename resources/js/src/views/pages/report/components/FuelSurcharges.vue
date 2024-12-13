<template>
  <div>
    <div class="text-right my-4">
      <vs-button color="primary" @click="toggleFuelPopup(true)">
        Import Fuel Surcharges
      </vs-button>
    </div>
    <add-custom-report
      :popup-active="popupActive"
      @onClose="toggleFuelPopup(false)"
      @showFailedLoadsPopup="showFailedLoadsPopup"
    />
    <vs-popup
      :active.sync="failedLoadsPopup"
      class="failed-loads-popup"
      title="Bulk Upload Error"
    >
      <ul class="pt-4 pb-10">
        <li class="mb-5" v-if="notFoundLoads.length">
          Following loads were not found: {{ notFoundLoads.join(', ') }}
        </li>
        <li v-if="failedToUploadLoads.length">
          Following loads failed to update: {{ failedToUploadLoads.join(', ') }}
        </li>
      </ul>
    </vs-popup>
  </div>
</template>

<script>
import AddCustomReport from '../AddCustomReport.vue';
export default {
  components: { AddCustomReport },
  name: 'FuelSurcharges',
  data() {
    return {
      popupActive: false,
      failedLoadsPopup: false,
      notFoundLoads: [],
      failedToUploadLoads: [],
    };
  },
  methods: {
    toggleFuelPopup(value) {
      this.popupActive = value;
    },
    showFailedLoadsPopup(notFoundLoads, failedToUploadLoads) {
      this.failedLoadsPopup = true;
      this.notFoundLoads = notFoundLoads;
      this.failedToUploadLoads = failedToUploadLoads;
    },
  },
};
</script>
