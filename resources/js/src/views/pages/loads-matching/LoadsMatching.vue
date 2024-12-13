<template>
  <div v-bind:class="{ 'p-10': shareAuthId }">
    <div
      class="flex sm:items-center justify-between sm:flex-row flex-col mb-3 sm:mb-0"
    >
      <h4 class="my-5">Available Trucks</h4>

      <div class="flex items-center">
        <div
          class="px-2 cursor-pointer flex items-center gap-1"
          @click="changeView(items.name)"
          v-for="items in viewOption"
          :key="items.name"
        >
          <template
            v-if="!shareAuthId"
          >
            <vs-icon
              :icon="items.icon"
              :color="items.active ? 'primary' : ''"
            />
            <span :class="items.active ? 'text-primary' : ''">{{
              items.name
            }}</span>
          </template>
        </div>
        <vs-button
          radius
          color="primary"
          type="border"
          icon-pack="feather"
          icon="icon-share-2"
          class="mr-4 ml-3"
          aria-label="Share"
          title="Share"
          size="small"
          v-bind:class="{ hidden: shareAuthId }"
          @click.stop="shareClick"
        >
        </vs-button>
      </div>
    </div>
    <div v-if="!shareAuthId">
      <GmapMap
        v-if="!viewOption[2].active"
        ref="mapRef"
        :center="center"
        :zoom="5"
        map-type-id="roadmap"
        class="gmap"
        :style="!viewOption[0].active ? 'height: 80vh;' : 'height: 60vh'"
      >
        <GmapCluster>
          <gmap-info-window
            :options="infoOptions"
            :position="{
              lat: infoWindowDetails.latitude,
              lng: infoWindowDetails.longitude,
            }"
            :opened="infoWinOpen"
            @closeclick="infoWinOpen = false"
          >
            <div>
              <div>
                <b class="text-dark">{{ infoWindowDetails.truck_number }}</b>
              </div>
              <div class="border-window"></div>
              <div>
                <table>
                  <tr class="mt-3">
                    <th>
                      <span class="font-light text-dark">Current Location</span>
                    </th>
                    <td style="max-width: 150px">
                      <span class="text-dark font-bold">
                        {{ infoWindowDetails.formatted_location }}</span
                      >
                    </td>
                  </tr>
                </table>
              </div>
              <div class="border-window"></div>
            </div>
          </gmap-info-window>

          <gmap-marker
            v-for="truck in trucks"
            :key="truck.truck_id"
            :position="{
              lat: truck.latitude,
              lng: truck.longitude,
            }"
            :clickable="true"
            :icon="require('@assets/images/custom/marker_truck_circle.svg')"
            :label="{
              text: String(truck.truck_number),
              color: '#fff',
              fontSize: '12px',
              className: 'marker-label',
            }"
            :title="truck.truck_number"
            @click="toggleInfoWindow(truck)"
          ></gmap-marker>
        </GmapCluster>
      </GmapMap>
    </div>

    <div v-show="!viewOption[1].active">
      <TruckLoadsList />
    </div>
  </div>
</template>
<script>
import { gmapApi } from "vue2-google-maps";
import TruckLoadsList from "./components/TruckLoadsList.vue";
import GmapCluster from "vue2-google-maps/dist/components/cluster";

export default {
  components: {
    TruckLoadsList,
    GmapCluster,
  },
  data() {
    return {
      datConnectionStatus: "",
      truckstopConnectionStatus: "",
      locateTrucks: [],
      drivers: [],
      popup: false,
      trucks: [],
      viewOption: [
        { name: "View all", icon: "view_week", active: true },
        { name: "Map", icon: "location_on", active: false },
        { name: "List", icon: "clear_all", active: false },
      ],
      shareAuthId: "",
      center: {
        lat: 34.052235,
        lng: -118.243683,
      },
      selected_driver: null,
      infoWindowDetails: {
        latitude: 34.052235,
        longitude: -118.243683,
      },
      infoWindowPos: null,
      infoWinOpen: false,
      infoOptions: {
        maxWidth: 200,
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
    };
  },

  computed: {
    google: gmapApi,
  },

  created() {
    if (this.$route.name === "share-loads-matching") {
      this.shareAuthId = this.$route.params.id;
      // this.getShareLocateTrucks();
    } else {
      // Connection status should only be called when user is loged in.
      this.getDatConnectionStatus();
      this.getTruckStopConnectionStatus();
      this.getLocateTrucks();
    }
  },

  mounted() {
    // use for remove GmapCluster add event warning
    const _originalConsoleWarn = console.warn;

    console.warn = (...args) => {
      const filteredArgs = args.filter(
        (m) =>
          !JSON.stringify(m).includes(
            "google.maps.event.addDomListener() is deprecated"
          )
      );
      if (filteredArgs.length > 0) {
        _originalConsoleWarn(filteredArgs);
      }
    };
  },

  methods: {
    async getDatConnectionStatus() {
      this.$store.dispatch("dat/connectionStatus").then((data) => {
        this.datConnectionStatus = data.message;
        localStorage.setItem("datConnectionStatus", data.message);
      });
    },

    async getTruckStopConnectionStatus() {
      this.$store.dispatch("truckstop/connectionStatus").then((data) => {
        this.truckstopConnectionStatus = data.message;
        localStorage.setItem("truckstopConnectionStatus", data.message);
      });
    },

    changeView(name) {
      const getIndex = this.viewOption.findIndex((ele) => ele.name === name);
      this.viewOption[getIndex].active = true;
      this.viewOption.map((ele, index) => {
        if (getIndex != index) {
          this.viewOption[index].active = false;
        }
      });
    },

    async shareClick() {
      try {
        let data = await this.$store.dispatch("loads-matching/getShareLink");
        let url =
          document.location.origin +
          `/share/loads-matching/` +
          data.payload.url.split("=")[1];
        let that = this;
        this.$copyText(url).then(
          function (e) {
            that.$vs.notify({
              title: "Success",
              text: "Copied",
              color: "success",
            });
          },
          function (e) {
            that.$vs.notify({
              title: "Danger",
              text: "Can not copy",
              color: "danger",
            });
          }
        );
      } catch (error) {
        this.$vs.notify({
          title: "Danger",
          text: "Can not copy",
          color: "danger",
        });
      } finally {
        this.$vs.loading.close();
      }
    },

    async getLocateTrucks() {
      this.$vs.loading();
      try {
        const { payload } = await this.$store.dispatch(
          "loads-matching/getAllLocateTruck"
        );
        for (let i = 0; i < payload.trucks.length; i++) {
          if (payload.trucks[i].latitude && payload.trucks[i].longitude) {
            this.trucks.push(payload.trucks[i]);
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.$vs.loading.close();
      }
    },

    async getShareLocateTrucks() {
      this.$vs.loading();
      try {
        const params = {
          company_id: this.shareAuthId,
        };
        const { payload } = await this.$store.dispatch(
          "loads-matching/getShareAllLocateTruck",
          params
        );
        for (let i = 0; i < payload.trucks.length; ++i) {
          if (payload.trucks[i].latitude) {
            this.trucks.push(payload.trucks[i]);
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
  },
};
</script>

<style lang="scss">
.input-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #d8d6de;
}

.gmap {
  width: 100%;
  height: 300px;

  @media (max-width: 991px) {
    height: 449px;
  }
}

.border-window {
  border-bottom: 1px solid #00000029;
  width: 100%;
  margin: 8px 0;
}
</style>
