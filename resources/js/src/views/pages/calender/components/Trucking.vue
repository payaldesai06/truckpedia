<template>
  <div id="map">
    <vs-button
      color="primary"
      type="border"
      @click="toggleTrafficLayer()"
      class="traffic-toggle-button"
    >
      {{ showTrafficLayer ? 'Hide' : 'Show' }} Traffic
    </vs-button>
    <GmapMap
      ref="mapRef"
      :center="mapCenter"
      :zoom="4"
      class="mt-6 mx-auto gmap"
      :style="options ? 'height: 80vh;' : 'height: 60vh'"
      map-type-id="roadmap"
    >
      <GmapCluster>
        <template v-if="!isUserBrokerOrShipper">
          <gmap-info-window
            :options="infoOptions"
            :position="{
              lat: Number(infoWindowDetails.latitude),
              lng: Number(infoWindowDetails.longitude),
            }"
            :opened="infoWinOpen"
            @closeclick="infoWinOpen = false"
          >
            <div v-if="infoWindowDetails.truck_number">
              <div>
                <b class="text-dark">{{ infoWindowDetails.truck_number }}</b>
                <span class="text-xs ml-2">{{
                  infoWindowDetails.load_id
                    ? 'Load ' + infoWindowDetails.load_number
                    : ''
                }}</span>
              </div>
              <div v-if="infoWindowDetails.load_id" class="address">
                <div class="path-border-container">
                  <img src="@assets/images/custom/sender_icon.svg" />
                  <div class="path-border"></div>
                  <img src="@assets/images/custom/receiver_icon.svg" />
                </div>
                <div class="flex flex-col justify-between">
                  <div>
                    <h6>
                      {{ infoWindowDetails.origin }}
                    </h6>
                  </div>
                  <div>
                    <h6>
                      {{ infoWindowDetails.destination }}
                    </h6>
                  </div>
                </div>
              </div>
              <div class="border-window"></div>
              <div>
                <table>
                  <tr class="mt-3">
                    <th>
                      <span class="font-light text-dark">Current Location</span>
                    </th>
                    <td style="max-width: 150px">
                      <span class="text-dark font-bold">{{
                        infoWindowDetails.formatted_location
                      }}</span>
                    </td>
                  </tr>
                  <!-- <tr class="mt-3">
                <th class="font-light text-dark">Next Stop</th>
                <td><span class="text-dark font-bold ml-3"></span></td>
              </tr> -->
                </table>
              </div>
              <div class="border-window"></div>
              <div v-if="infoWindowDetails.load_id">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="viewDetails()"
                >
                  VIEW DETAILS
                </button>
              </div>
            </div>
            <div v-else>
              <div>
                <h6 class="text-primary">{{ infoWindowDetails.name }}</h6>
              </div>
            </div>
          </gmap-info-window>

          <gmap-marker
            v-for="truck in trucks"
            :key="'t' + truck.truck_id"
            :position="{
              lat: truck.latitude,
              lng: truck.longitude,
            }"
            :icon="require('@assets/images/custom/marker_truck_circle.svg')"
            :label="{
              text: truck.truck_number,
              color: '#fff',
              fontSize: '12px',
              className: 'marker-label',
            }"
            :title="truck.truck_number"
            :clickable="true"
            @click="toggleInfoWindow(truck)"
          ></gmap-marker>

          <gmap-marker
            v-for="driver in drivers"
            :key="'d' + driver.userId"
            :position="{
              lat: Number(driver.latitude),
              lng: Number(driver.longitude),
            }"
            :label="{
              text: driver.name,
              color: 'black',
              fontSize: '15px',
              className: 'marker-label',
            }"
            :clickable="true"
            @click="toggleInfoWindow(driver)"
          ></gmap-marker>
        </template>
        <template v-else>
          <gmap-marker
            v-for="load in loads"
            :key="'t' + load.loadId"
            :position="{
              lat: load.location.lat,
              lng: load.location.lng,
            }"
            :icon="require('@assets/images/custom/marker_truck_circle.svg')"
            :label="{
              text: `${load.loadNumber}`,
              color: '#fff',
              fontSize: '12px',
              className: 'marker-label',
            }"
            :title="`${load.loadNumber}`"
            :clickable="false"
          />
        </template>
      </GmapCluster>
    </GmapMap>

    <vs-popup fullscreen title="Truck details" :active.sync="detailsPopup">
      <calendar-details ref="cardDetail" :data="calendarDetails">
      </calendar-details>
    </vs-popup>
  </div>
</template>

<script>
import CalendarDetails from '../CalendarDetails';
import GmapCluster from 'vue2-google-maps/dist/components/cluster';

import { mapGetters } from 'vuex';

let trafficLayer;

export default {
  props: ['options'],
  components: {
    CalendarDetails,
    GmapCluster,
  },
  data() {
    return {
      trucks: [],
      drivers: [],
      detailsPopup: false,
      calendarDetails: {
        active: false,
        value: null,
      },
      mapCenter: {
        lat: 39.83333361, // 34.052235,
        lng: -98.58, // -118.243683
      },
      infoWindowDetails: {
        latitude: 34.052235,
        longitude: -118.243683,
      },
      infoWindowPos: null,
      infoWinOpen: false,
      infoOptions: {
        maxWidth: 500,
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
      loads: [],
      showTrafficLayer: false,
    };
  },
  computed: {
    ...mapGetters('auth', ['isUserBrokerOrShipper']),
  },

  created() {
    if (!this.isUserBrokerOrShipper) this.getLocateTrucks();
    else this.trackCarrierTrucks();
  },

  mounted() {
    // use for remove GmapCluster add event warning
    const _originalConsoleWarn = console.warn;

    console.warn = (...args) => {
      const filteredArgs = args.filter(
        (m) =>
          !JSON.stringify(m).includes(
            'google.maps.event.addDomListener() is deprecated'
          )
      );
      if (filteredArgs.length > 0) {
        _originalConsoleWarn(filteredArgs);
      }
    };
  },

  methods: {
    viewDetails() {
      this.detailsPopup = true;
      this.calendarDetails.active = true;
      this.calendarDetails.loadId = this.infoWindowDetails.load_id;
      this.$refs.cardDetail.getData();
    },
    async getLocateTrucks() {
      this.$vs.loading();
      try {
        const payload = await this.$store.dispatch(
          'calendar/getLocateTrucksDrivers'
        );
        for (let i = 0; i < payload.trucks.length; ++i) {
          if (payload.trucks[i].latitude) {
            this.trucks.push(payload.trucks[i]);
          }
        }
        for (let i = 0; i < payload.drivers.length; i++) {
          if (payload.drivers[i].latitude) {
            this.drivers.push(payload.drivers[i]);
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.$vs.loading.close();
      }
    },
    toggleInfoWindow(truck) {
      this.infoWindowDetails = truck;
      this.infoWinOpen = true;
    },
    async trackCarrierTrucks() {
      try {
        this.$vs.loading();
        const {
          payload: { loads },
        } = await this.$store.dispatch('truckpedia/trackCarrierTrucks');

        this.loads = loads.filter(
          (load) => load.location && load.location.lat && load.location.lng
        );
      } catch (error) {
        console.log(error);
      } finally {
        this.$vs.loading.close();
      }
    },
    toggleTrafficLayer() {
      if (trafficLayer === undefined) {
        trafficLayer = new google.maps.TrafficLayer();
      }
      this.showTrafficLayer = !this.showTrafficLayer;
      this.$refs.mapRef.$mapPromise.then((map) => {
        trafficLayer.setMap(this.showTrafficLayer ? map : null);
      });
    },
  },
};
</script>

<style lang="scss">
.gmap {
  height: 400px;
}

.list-box {
  border: 1px solid #7367f0;
  padding: 8px;
  border-radius: 8px;
  margin-top: 0.25rem;
  cursor: pointer;
  span {
    color: #7367f0;
  }
  .small-input {
    width: 30px;
    border: none;
    border-bottom: 1px solid #7367f0;
  }
}

// .flatpickr-input {
//   border: none;
// }
.flatpickr-calendar.inline {
  box-shadow: none !important;
}

// .vs-dropdown--custom {
//   border-radius: 20px;
// }

.calendar-icon {
  position: absolute;
  right: 20px;
  top: 10px;
  font-size: 20px;
}

.address {
  margin-top: 14px;
  display: flex;
  .path-border-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
    .path-border {
      border: 1px solid rgb(105, 76, 254);
      height: 21px;
      width: 1px;
      border-style: dashed;
    }
    img {
      width: 18px;
    }
  }
}

.border-window {
  border-bottom: 1px solid #00000029;
  width: 100%;
  margin: 8px 0;
}

.btn {
  padding: 8px 5px;
  width: 100%;
  border-radius: 5px;
  border: none;
  font-size: 12px;
}
.btn-primary {
  background: #7367f0;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.btn-outline {
  border: 1px solid #7367f0;
  color: #7367f0;
  text-transform: uppercase;
  background: #fff;
}

.chip {
  background: #e1e7fc;
  border-radius: 50px;
  text-align: center;
  padding: 2px;
  width: 70px;
  margin-top: 5px;
  span {
    color: #7367f0;
    text-transform: uppercase;
    font-size: 8px;
    font-weight: 500;
  }
}

.traffic-toggle-button {
  min-width: 130px; 
  margin-top: 30px;
}
</style>
