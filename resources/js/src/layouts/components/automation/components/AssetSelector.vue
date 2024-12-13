<template>
  <vx-card class="asset-selector mx-1">
    <div class="vx-row">
      <div class="vx-col flex align-items-center w-full justify-content-between">
        <h5 class="font-bold w-1/6">{{ assetName }}</h5>
        <!-- <vs-input
          v-model="searchKey"
          class="w-2/3"
          icon="search"
          icon-after="true"
          placeholder="Search"
        />
        <vs-button
          v-if="assetsList.length"
          class="w-1/6"
          color="primary"
          type="border"
          icon-pack="feather"
          icon="icon-plus"
          @click="addAsset"
        >
        </vs-button> -->
      </div>
    </div>
    <vs-divider />
    <div  class="mx-auto" v-if="selectedAssets">
      <div class="vx-row w-full mx-auto">
        <div v-for="property in propertiesList" :key="property.value">
          <vs-checkbox v-model="selectedAssets[property.value]" class="text-xs mt-3">{{ property.label }}</vs-checkbox>
        </div>
      </div>
      <div class="vx-row w-full mx-auto mt-3">
        <template v-if="(selectedAssets['asset'] || []).length">
          <span
            v-if="!hasAtLeastOneProperty"
            class="text-danger text-sm ml-4"
          >
            Select at-least one expiration property
          </span>
        </template>
      </div>
      <div class="vx-row w-full mx-auto mt-2">
        <multiselect
          v-model="selectedAssets['asset']"
          :multiple="true"
          :options="assetOption"
          :label="assetLabelKey"
          :track-by="assetTrackKey"
          :showLabels="false"
          :placeholder="'Select value'"
          :closeOnSelect="false"
          group-values="assets"
          group-label="groupName"
          :group-select="true"
          :hide-selected="true"
          :showNoOptions="true"
        >
          <template slot="noResult">
            <div class="multiselect__option">
              No results found
            </div>
          </template>
          <template slot="noOptions">
            <div class="multiselect__option">
              No options available
            </div>
          </template>
        </multiselect>
      </div>
    </div>
  </vx-card>
</template>

<script>
export default {
  name: 'AssetSelector',
  props: {
    assetName: {
      type: String,
      default: 'Asset Name'
    },
    assetsList: {
      type: Array,
      default: () => []
    },
    propertiesList: {
      type: Array,
      default: () => []
    },
    assetTrackKey: { // Core property in the asset object to track in ui 
      type: String,
      default: 'id'
    },
    assetLabelKey: { // Label property in the asset object to track in ui 
      type: String,
      default: 'id'
    },
    value: {
      type: Object,
      default: () => []
    }
  },
  data () {
    return {
      searchKey: '',
      selectedAssets: null
    }
  },
  mounted() {
    this.bindInitData();
  },
  watch: {
    selectedAssets: {
      handler: function (val) {
        this.$emit('input', val);
        this.$forceUpdate();
      },
      deep: true
    },
    assetsList: {
      handler: function (val) {
        this.bindInitData();
      },
      deep: true
    }
  },
  computed: {
    assetOption () {
      return [
        {
          groupName: 'All',
          assets: this.assetsList
        },
      ];
    },
    hasAtLeastOneProperty () {
      let hasATrueValue = false;
      if(this.selectedAssets) {
        const properties = Object.keys(this.selectedAssets);
        const index = properties.indexOf('asset');
        properties.splice(index, 1);
        properties.forEach((property) => {
          if ((this.selectedAssets || {})[property]) {
            hasATrueValue = true;
          }
        })
      }
      return hasATrueValue;
    },
  },
  methods: {
    bindInitData () {
      (this.propertiesList || []).forEach((property) => {
        if (!(this.selectedAssets|| {})[property.value]) {
          this.selectedAssets = Object.assign({}, this.selectedAssets, { [property.value]: (this.value || {})[property.value] || false })
        }
      })
      const assetsDataMap = this.assetsList.reduce(
        (accumulator, currentValue) => {
          accumulator[currentValue.id] = currentValue
          return accumulator
        },
      {});
      let assetsData = (this.value || {}).asset || [];
      assetsData = assetsData.map((asset) => {
        return { ...asset, ...assetsDataMap[asset.id] };
      })
      this.selectedAssets = Object.assign({}, this.selectedAssets, { asset: assetsData })
    }
  }
}
</script>

<style lang="scss" scoped>
.asset-selector {
  // max-height: 20vh;
  max-width: 30vw;
  .asset-row {
    align-items: center;
  }
  .w-10 {
    width: 10%;
  }
  .w-30 {
    width: 30%;
  }
  .w-60 {
    width: 60%;
  }
}
.align-items-center {
  align-items: center;
}
.justify-content-between {
  justify-content: space-between;
}
</style>