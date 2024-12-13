<template>
    <div class="bottom-block flex justify-content-between" v-if="selectedAssets">
      <div v-for="asset in assetsTypeSelected" :key="asset" class="w-full">
        <AssetSelector
          v-model="selectedAssets[asset]"
          :assetName="asset"
          :assetsList="expirationReminderAssetsData[asset]"
          :propertiesList="expirationReminderAssetProperties[asset]"
          :assetTrackKey="trackByData[asset].trackBy"
          :assetLabelKey="trackByData[asset].label"
        />
      </div>
    </div>
</template>

<script>
export default {
  name: 'AssetsBoard',
  components: {
    AssetSelector: () => import('./AssetSelector')
  },
  props: {
    assetsTypeSelected: {
      type: Array,
      default: () => ['Drivers','Trucks','Trailers'],
    },
    assetsList: {
      type: Object,
      default: () => {}
    },
    value: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      expirationReminderAssetProperties: {
        Trucks: [
          {
            label: 'IRP Expiration Date',
            value: 'irpExpirationDate'
          },
          {
            label: 'Annual Inspection Expiration Date',
            value: 'annualInspExpireDate'
          },
          {
            label: 'Insurance Expiration Date',
            value: 'insuranceExpireDate'
          },
          {
            label: 'Registration Expiration Date',
            value: 'registrationExpireDate'
          },
          {
            label: 'Annual Permit Expiration Date',
            value: 'annualPermitExpireDate'
          },
        ],
        Trailers: [
          {
            label: 'Annual Inspection Expiration Date',
            value: 'annualInspExpireDate'
          },
          {
            label: 'Insurance Expiration Date',
            value: 'insuranceExpireDate'
          },
          {
            label: 'Registration Expiration Date',
            value: 'registrationExpireDate'
          },
          {
            label: 'Annual Permit Expiration Date',
            value: 'annualPermitExpireDate'
          },
        ],
        Drivers: [
          {
            label: 'CDL Expiration Date',
            value: 'cdlExpirationDate'
          },
          {
            label: 'Medical Card Expiration Date',
            value: 'medicalCardExpirationDate'
          },
          {
            label: 'Occupation Expiration Date',
            value: 'occupationExpirationDate'
          },
          {
            label: 'Clearinghouse Expiration Date',
            value: 'clearinghouseExpirationDate'
          }
        ]
      },
      selectedAssets: null
    }
  },
  mounted () {
    this.selectedAssets = Object.assign({}, this.selectedAssets, this.value)
  },
  computed: {
    expirationReminderAssetsData () {
      const { trailerList, trucksList, allDrivers } = this.assetsList || {};
      return {
        Trailers: trailerList || [],
        Trucks: trucksList || [],
        Drivers: allDrivers || []
      }
    },
    trackByData () {
      return {
        Trailers: {
          trackBy: 'id',
          label: 'number'
        },
        Trucks: {
          trackBy: 'id',
          label: 'number'
        },
        Drivers: {
          trackBy: 'id',
          label: 'fullName'
        }
      }
    }
  },
  methods: {
    async validate () {
      return true
    }
  },
  watch: {
    selectedAssets: {
      handler (val) {
        this.$emit('input', val)
      },
      deep: true
    }
  }
}
</script>
