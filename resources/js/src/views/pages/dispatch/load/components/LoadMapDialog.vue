<template>
  <Dialog
    class="dialog"
    :visible="isDialogActive"
    :closable="false"
    :modal="true"
    :breakpoints="{ '960px': '80vw', '640px': '100vw' }"
    :style="{ width: '80vw' }"
  >
    <!-- Header Section -->
    <template #header>
      <div class="w-full flex items-center justify-start">
        <gmap-autocomplete
          class="vs-inputx vs-input--input normal hasValue"
          :value="search"
          placeholder="Search address"
          @place_changed="setPlace($event)"
          :options="googleMapAutoCompleteOptions"
          @input="onAddressChange($event)"
        >
        </gmap-autocomplete>
        <span class="ml-2">or</span>
        <vs-input
          class="ml-2 w-full"
          v-model="searchByLatLang"
          placeholder="Latitude, Longitude"
          @input="setLatLang()"
        />
      </div>
      <div class="w-full flex items-center justify-end">
        <vs-icon
          class="cursor-pointer ml-2"
          icon="close"
          size="small"
          @click="onClose"
        />
      </div>
    </template>

    <!-- Main Content -->
    <template>
      <div class="w-full">
        <GmapMap
          :center="defaultCenter"
          :zoom="zoom"
          class="gmap"
          map-type-id="roadmap"
          ref="map"
          @click="handleMapClick"
        >
          <GmapMarker
            v-if="marker.position.lat && marker.position.lng"
            :position="marker.position"
            :clickable="true"
            @click="handleMapClick"
          />
          <template v-if="markers && markers.length">
            <GmapMarker
              v-for="marker in markers"
              :key="marker.id"
              :position="marker.position"
              :label="
                marker.label
                  ? {
                      text: String(marker.label),
                      className: 'marker-label',
                    }
                  : null
              "
            />
          </template>
        </GmapMap>
      </div>
    </template>
  </Dialog>
</template>

<script>
import config from '@/config/constants.js';
import GoogleMapMixin from '@/mixins/googleMapMixin';

export default {
  name: 'LoadMapDialog',
  mixins: [GoogleMapMixin],
  props: {
    isDialogActive: {
      type: Boolean,
      default: false,
    },
    defaultCenter: {
      type: Object,
      default: () => {
        return {
          lat: 39.83333361,
          lng: -98.58,
        };
      },
    },
    markers: {
      type: Array,
      default: () => [],
    },
    zoomInBasedOnMarkers: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      search: '',
      zoom: 6,
      marker: {
        position: {
          lat: null,
          lng: null,
        },
      },
      googleMapAutoCompleteOptions: config.googleMapAutoCompleteOptions,
      searchByLatLang: '',
      placeId: null,
    };
  },
  mounted() {
    if (this.zoomInBasedOnMarkers && this.markers.length) {
      this.zoom = 13;
    }
  },
  methods: {
    onClose() {
      this.$emit('close');
    },
    handleMapClick(e) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();

      if (
        this.marker.position.lat !== lat ||
        this.marker.position.lng !== lng
      ) {
        this.marker.position = {
          lat,
          lng,
        };
      }

      this.$emit('update:address', {
        placeId: e.placeId || this.placeId,
        map: this.$refs.map,
        ...this.marker.position,
      });
    },
    async setPlace(place) {
      if (!place) return;

      this.search = place.formatted_address;
      this.zoom = 18;
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      const res = await this.getGeocoderLatLng({
        location: { lat, lng },
      });
      this.placeId = res.results[0].place_id || null;

      this.marker.position = {
        lat,
        lng,
      };
      this.$refs.map.panTo({
        lat,
        lng,
      });
    },
    onAddressChange(e) {
      this.searchByLatLang = '';
      this.search = e.target.value;
    },
    setLatLang() {
      if (this.search) {
        this.search = '';
      }

      // Validate lat, lang
      const latLang = this.searchByLatLang.split(',');
      if (latLang.length !== 2) {
        return;
      }

      const lat = parseFloat(latLang[0]);
      const lng = parseFloat(latLang[1]);

      if (isNaN(lat) || isNaN(lng)) {
        return;
      }

      this.zoom = 18;
      this.placeId = null;
      this.marker.position = {
        lat,
        lng,
      };
      this.$refs.map.panTo({
        lat,
        lng,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog {
  ::v-deep {
    .p-dialog-header {
      // padding-bottom: 0px !important;
    }

    .marker-label {
      background: rgba(0, 0, 0, 0.5);
      color: #fff !important;
      padding: 5px;
      border-radius: 5px;
      margin-bottom: 50px;
      margin-left: -20px;
    }
  }
}
.gmap {
  height: 72vh;
}
</style>
