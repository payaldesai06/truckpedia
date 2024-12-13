<template>
  <vs-row vs-w="12" class="p-6">
    <div id="popup-map">
      <GmapMap :center="center" ref="mapRef" :zoom="10" class="h-full w-full">
        <DirectionsRenderer
          travelMode="DRIVING"
          :origin="origin"
          :waypoints="waypnt"
          :destination="destination"
          :optimizeWaypoints="false"
        />

        <gmap-info-window
          :options="infoOptions"
          :position="infoWindowPos"
          :opened="infoWinOpen"
          @closeclick="infoWinOpen = false"
        >
        </gmap-info-window>

        <gmap-marker
          v-for="(item, index) in truck"
          :key="index"
          v-if="item.location.lat && item.location.lng"
          :position="item.location"
          :clickable="true"
          @click="toggleInfoWindow(item, item.truckId)"
        ></gmap-marker>
      </GmapMap>
    </div>
  </vs-row>
</template>

<script>
import DirectionsRenderer from '../../../calender/components/DirectionsRenderer';
import { mapState } from 'vuex';
export default {
  name: 'LoadInfo',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    loadStopList: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  components: {
    DirectionsRenderer,
  },
  computed: {
    ...mapState('load', ['allDriverTruckTrailerForLoadDriver']),
  },
  async created() {
    if (this.$route.name === 'share') {
      this.data.loadId = this.$route.params.id;
      this.getShareData();
    }

    await this.getLoadTrucks();
    this.setOnMap();
  },
  data() {
    return {
      active: true,
      origin: null,
      destination: null,
      waypnt: [],
      truck: [],
      center: {
        lat: 34.052235,
        lng: -118.243683,
      },
      infoWindowPos: null,
      infoWinOpen: false,
      infoOptions: {
        content: '',
        maxWidth: 200,
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
    };
  },
  methods: {
    async getLoadTrucks() {
      try {
        this.$vs.loading();
        const filter = {
          loadId: this.data.loadId,
        };
        const {
          payload: { trucks },
        } = await this.$store.dispatch('load/trackLoadTrucks', filter);

        this.truck = trucks;
        this.setOnMap();
      } catch (error) {
        console.log(error);
      } finally {
        this.$vs.loading.close();
      }
    },

    translateStatusToOutSiders(status) {
      switch (status) {
        case 'open':
          return 'Open';
        case 'assign':
          return 'Dispatched';
        case 'in_transit':
          return 'In Transit';
        case 'delivered':
          return 'Delivered';
        default:
          return 'Completed';
      }
    },

    setOnMap() {
      this.waypnt = [];
      this.loadStopList.forEach((stop, i) => {
        const location = {
          lat: Number(stop.latitude),
          lng: Number(stop.longitude),
        };

        if (i === 0) {
          this.origin = location;
        } else if (i === this.loadStopList.length - 1) {
          this.destination = location;
        } else {
          this.waypnt.push({
            location: location,
            stopover: true,
          });
        }
      });
    },

    async getShareData() {
      try {
        this.$vs.loading();
        const filter = {
          load_id: this.data.loadId,
        };
        var data = await this.$store.dispatch(
          'calendar/getshareLinkDetails',
          filter
        );
        if (!data.data.result) {
          this.active = false;
        } else {
          this.active = true;
          this.payload = JSON.parse(JSON.stringify(data.data.payload));
          this.setOnMap();
        }
      } catch (error) {
      } finally {
        this.$vs.loading.close();
      }
    },

    toggleInfoWindow(truck, truckId) {
      if (!truckId) {
        return;
      }
      this.infoWinOpen = true;
      this.infoWindowPos = truck.location;
      const getTruckById = this.allDriverTruckTrailerForLoadDriver.trucks.find(
        (truck) => truck.id === truckId
      );
      this.infoOptions.content = `<div><div class="mt-2 space-y-1">
                  <div>
                  <b>truck number: </b>
                    ${getTruckById.number}
                  </div>
                   <div>
                   <b>location: </b>
                    ${truck.location.formattedAddress}
                  </div>
                </div>`;
    },
  },
};
</script>

<style lang="stylus">
.sidebarx {
  overflow: auto !important;
}

.vs-sidebar .vs-sidebar--items {
  overflow: auto !important;
}

#popup-map {
  height: 32rem;
  width: 100%;
}

.listSpan {
  font-weight: 300;
  min-width: 95px;
  max-width: 200px;
  color: #000
}

.fristList {
  font-weight: 900;
  margin-left: 1rem;
  line-height: 1.8rem;
  font-size: 15px;
}

.list {
  font-size: 1rem;
  margin-left: 1rem;
  table-layout: fixed;
}

word-wrap break-all {
  word-break: normal;
  overflow: hidden;
}

.otherList {
  font-size: 1rem;
  margin-left: 0.5rem;
}

.vs-icon {
  vertical-align: middle;
  margin-right: 0.5rem;
}

.vs-dropdown-item-col {
  line-height: 2rem;
}

.vs-sidebar-all {
  max-width: 100%;
  z-index: 52010;
}

.vs-sidebar {
  max-width: 1100px;
  z-index: 52010;
}

.con-vs-dropdown--menu {
  z-index: 52010;
}

.vs-sidebar--background {
  z-index: 52010;
}

.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    > button {
      margin-left: 10px;
    }
  }
}

.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > button {
    border: 0px solid rgba(0, 0, 0, 0) !important;
    border-left: 1px solid rgba(0, 0, 0, 0.07) !important;
    border-radius: 0px !important;
  }
}

.chip-container {
  min-height: 34px;
  display: flex;
  padding: 7px;
  flex-wrap: wrap;
  align-content: space-between;
  max-height: 300px;
  overflow: auto;

  .chip {
    margin: 2px;
    background: #f0f0f0;
    padding: 1px 15px;
    border: 1px solid #ccc;
    border-radius: 15px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    i {
      cursor: pointer;
      opacity: 0.56;
      margin-left: 8px;
    }
  }

  input {
    flex: 1 1 auto;
    width: 30px;
    border: none;
    outline: none;
    padding: 8px;
  }

  .material-icons {
    font-size: 16px;
  }
}

.collaborator-icon {
  width: 43px;
  height: 38px;
  cursor: pointer;
}

.email-collaborator {
  position: relative;
  top: 3px;
  right: 3px;
}

.user-list-dropdown .con-chips {
  justify-content: start !important;
}

.user-list-dropdown .vs-icon {
  margin-right: 0;
}

.user-list-dropdown .con-chips .con-vs-chip {
  margin: 0;
}

.user-list-dropdown {
  position: absolute;
  background: #fff;
  right: 2px;
  border-radius: 6px;
  box-shadow: 0 1px 10px 0 #0005;
  max-height: 400px;
  min-width: 235px;
  z-index: 1000;
  background-color: #fff;
}

.padding-margin{
padding-left: 0.2rem;
margin-top: 0.2rem;
margin-bottom: 0.2rem
}
.margin-x{
    margin-top: 0.2rem;
    margin-bottom: 0.2rem
}
.fixed-width{
  width: 250px;
}
</style>
