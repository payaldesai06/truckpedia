<template>
  <div class="maintenance-reminder-selector mt-5">
    <div class="vx-row d-flex mb-5">
      <div class="vx-col">
        <span class="text-black">Asset schedule</span>
      </div>
    </div>
    <div class="vx-row d-flex">
      <div class="vx-col w-50">
        <label for="truck-selector">Trucks</label>
        <multiselect
          v-model="selectedTrucks"
          :multiple="true"
          :options="allTruckOptions"
          label="number"
          :showLabels="false"
          :placeholder="'Select trucks'"
          :closeOnSelect="false"
          trackBy="id"
        >
          <!-- data-vv-validate-on="change"
          v-validate="'required'"
          data-vv-as="selected"
          name="selectedTrucks" -->
        </multiselect>
      </div>
      <div class="vx-col w-50">
        <label for="trailer-selector">Trailer</label>
        <multiselect
          v-model="selectedTrailers"
          :multiple="true"
          :options="allTrailerOptions"
          label="number"
          track-by="id"
          :showLabels="false"
          :placeholder="'Select trailers'"
          :closeOnSelect="false"
        >
        </multiselect>
      </div>
    </div>
    <template v-if="assetsSelected.length">
      <div class="vx-row">
        <div class="vx-col w-full mt-4">
          <span class="text-black">Select Maintenance Dates</span>
        </div>
        <div class="mt-5 vx-col w-full space-y-4">
          <div class="vx-row">
            <div class="vx-col w-1/3">
              <label class="text-sm opacity-75"> Asset Name</label>
            </div>
            <div class="vx-col w-1/3">
              <label class="text-sm opacity-75">Next Service at</label>
            </div>
            <div class="vx-col w-1/3">
            </div>
          </div>
        </div>
      </div>
      <div class="maintenance-selector-assets-list">
        <MaintenanceSelectorListItem
          v-for="(asset, index) in selectedTrucks"
          :key="`truck-selection-${index}`"
          :asset="asset"
          @setDate="setMaintenanceDateOfTruck"
          @remove="removeTruck"
        />
        <MaintenanceSelectorListItem
          v-for="(asset, index) in selectedTrailers"
          :key="`trailer-selection-${index}`"
          :asset="asset"
          @setDate="setMaintenanceDateOfTrailer"
          @remove="removeTailer"
        />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'MaintenanceSelector',
  props: {
    value: {
      type: Object | Array,
      default: null
    },
    assetsList: {
      type: Object,
      default: null
    }
  },
  components: {
    MaintenanceSelectorListItem: () => import('./MaintenanceSelectorListItem.vue')
  },
  data () {
    return {
      selectedTrucks: [],
      selectedTrailers: [],
      allTruckOptions: [],
      allTrailerOptions: []
    }
  },
  computed : {
    assetsSelected () {
      return [
        ...this.selectedTrucks.map( x => { return { ...x, type: 'truck'}} ),
        ...this.selectedTrailers.map( x => { return { ...x, type: 'trailer'}}),
      ]
    }
  },
  watch: {
    assetsSelected: {
      handler(newVal) {
        this.$emit('input', newVal)
      },
      deep: true
    },
    assetsList: {
      handler(newVal) {
        const { trucksList, trailerList } = newVal || {};
        this.allTruckOptions = trucksList || [];
        this.allTrailerOptions = trailerList || [];
        this.$nextTick()
        this.assignInitialValuesOfAssets()
      },
      deep: true,
      immediate: true
    }
  },
  methods : {
    setMaintenanceDateOfTruck (payload) {
      const { assetData , date } = payload || {};
      const { id } = assetData || {};
      if(!id) return;
      const assetIndex = this.selectedTrucks.findIndex(asset => asset.id === id);
      this.$set(this.selectedTrucks, assetIndex, {
        ...assetData,
        nextServiceAt: date
      })
    },
    removeTruck ({ id }) {
      if(!id) return;
      this.selectedTrucks = this.selectedTrucks.filter(x => x.id !== id)
    },

    setMaintenanceDateOfTrailer (payload) {
      const { assetData , date } = payload || {};
      const { id } = assetData || {};
      if(!id) return;
      const assetIndex = this.selectedTrailers.findIndex(asset => asset.id === id);
      this.$set(this.selectedTrailers, assetIndex, {
        ...assetData,
        nextServiceAt: date
      })
    },
    removeTailer ({ id }) {
      if(!id) return;
      this.selectedTrailers = this.selectedTrailers.filter(x => x.id !== id)
    },
    
    async validate() {
      if (!this.assetsSelected.length) {
        this.notifyErrorHelper("Please select at-least one truck or trailer for reminder");
        return false;
      }
      if(!this.assetsSelected.every(x => x.nextServiceAt)) {
        this.notifyErrorHelper("Please select next service date for all assets selected");
        return false;
      }
      return true;
    },

    notifyErrorHelper(message) {
      this.$vs.notify({
        color: "danger",
        title: "Error",
        text: message,
      });
    },

    async assignInitialValuesOfAssets() {
      const newVal = this.value;
      const allTrailerMap = this.allTrailerOptions.reduce(
        (accumulator, currentValue) => {
          accumulator[currentValue.id] = currentValue
          return accumulator
        },
      {});
      const allTrucksMap = this.allTruckOptions.reduce(
        (accumulator, currentValue) => {
          accumulator[currentValue.id] = currentValue
          return accumulator
        },
      {});
      if(newVal && newVal.length) {
        newVal.forEach(asset => {
          if(asset.type === 'trailer') {
            const trailerData = allTrailerMap[asset.originalAssetId] || {};
            this.selectedTrailers.push({
              ...trailerData,
              ...asset            
            })
          } else if (asset.type === 'truck') {
            const truckDate = allTrucksMap[asset.originalAssetId] || {};
            this.selectedTrucks.push({
              ...truckDate,
              ...asset            
            })
          }
        });
      } else {
        this.selectedTrailers = [];
        this.selectedTrucks = [];
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .maintenance-selector-assets-list {
    max-height: 40vh;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
  }
</style>