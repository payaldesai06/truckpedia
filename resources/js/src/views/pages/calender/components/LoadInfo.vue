<template>
  <vs-row vs-w="12" class="p-6">
    <!-- 第一行 -->
    <vs-row
      vs-w="12"
      v-for="truck in payload[0].vehicles"
      :key="truck.truck_number"
    >
      <vs-col vs-w="6" class="fristList padding-margin">
        <span class="listSpan">Truck:</span>
        {{ truck ? truck.truck_number : "n/a" }}
      </vs-col>
      <vs-col vs-w="5" class="fristList margin-x">
        <span class="listSpan">Trailer:</span>
        {{ truck ? truck.trailer_number : "n/a" }}
      </vs-col>
    </vs-row>
    <!-- 第二行 -->
    <vs-row vs-w="12" class="mt-5">
      <vs-col vs-w="12" class="list padding-margin flex">
        <div class="fixed-width">
          <span class="listSpan">Driver: </span>
        </div>
        <!-- {{drivers.drivers}} -->
        <span
          class="font-bold"
          v-for="(driver, index) in payload[0].drivers"
          :key="driver.driver_id"
        >
          {{ driver ? driver.name : "n/a"
          }}{{ index < payload[0].drivers.length - 1 ? ", " : "" }}
        </span>
      </vs-col>
    </vs-row>
    <!-- 第三行 -->
    <vs-row vs-w="12">
      <vs-col vs-w="6" class="list padding-margin flex">
        <div class="fixed-width">
          <span class="listSpan">Load #: </span>
        </div>
        <b>{{
          payload[0].load_unique_id ? payload[0].load_unique_id : "n/a"
        }}</b>
      </vs-col>
      <vs-col vs-w="5" class="otherList margin-x flex">
        <div class="fixed-width">
          <span class="listSpan">Reference #: </span>
        </div>
        <b>{{
          payload[0].load_reference ? payload[0].load_reference : "n/a"
        }}</b>
      </vs-col>
    </vs-row>
    <!-- 第四行 -->
    <vs-row vs-w="12">
      <vs-col vs-w="6" class="list padding-margin flex">
        <div class="fixed-width">
          <!-- This current location is buggy if more than one truck in load. -->
          <span class="listSpan">Current location: </span>
        </div>
        <b style="width: 300px;">{{
          !payload[0].vehicles[0]
            ? "n/a"
            : payload[0].vehicles[0].location.formatted_location
        }}</b>
      </vs-col>
      <vs-col
        vs-w="5"
        class="otherList margin-x flex"
        v-if="this.$route.name == 'share'"
      >
        <div class="fixed-width">
          <span class="listSpan">Status: </span>
        </div>
        <b>{{
          payload[0].load_status
            ? translateStatusToOutSiders(payload[0].load_status)
            : "n/a"
        }}</b>
      </vs-col>
    </vs-row>
    <vs-divider />
    <!-- 第五行 -->
    <vs-row
      vs-w="12"
      v-for="(items, index) in payload[0].shippers"
      :key="items.shipper_id"
    >
      <vs-col vs-w="6" class="list padding-margin flex">
        <div class="fixed-width">
          <span class="listSpan">Origin {{ ++index }}:</span>
        </div>
        <b>
          {{ !items.shipper_name ? "n/a" : items.shipper_name }}
          -
          {{ !items.city ? "n/a" : items.city }},
          {{ !items.state ? "n/a" : items.state }}
        </b>
      </vs-col>
      <vs-col vs-w="6" class="otherList margin-x flex">
        <div class="fixed-width">
          <span class="listSpan">Appt time {{ index }}: </span>
        </div>
        <b>
          {{
            items.shipping_date ? items.shipping_date.replace(/-/g, "/") : "n/a"
          }}
          &nbsp;{{
            items.shipping_time ? items.shipping_time.replace(/:/g, ":") : " "
          }}
        </b>
      </vs-col>
    </vs-row>
    <vs-divider />
    <!-- 第六行 -->
    <vs-row
      vs-w="12"
      v-for="(items, index) in payload[0].receivers"
      :key="'a' + items.receiver_id"
    >
      <vs-col vs-w="6" class="list padding-margin flex">
        <div class="fixed-width">
          <span class="listSpan">Destination {{ ++index }}: </span>
        </div>
        <b>
          {{ !items.receiver_name ? "n/a" : items.receiver_name }}
          -
          {{ !items.city ? "n/a" : items.city }},
          {{ !items.state ? "n/a" : items.state }}
        </b>
      </vs-col>
      <vs-col vs-w="6" class="otherList margin-x flex">
        <div class="fixed-width">
          <span class="listSpan">Appt time {{ index }}: </span>
        </div>
        <b>
          {{
            !items.delivery_date
              ? "n/a"
              : items.delivery_date.replace(/-/g, "/")
          }}
          &nbsp;{{
            items.delivery_time ? items.delivery_time.replace(/:/g, ":") : ""
          }}
        </b>
      </vs-col>
    </vs-row>
    <vs-divider />
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
          v-for="(truck, index) in truck"
          :key="index"
          :position="truck.position"
          :clickable="true"
          @click="toggleInfoWindow(truck, truck.truck_id)"
        ></gmap-marker>
      </GmapMap>
    </div>
  </vs-row>
</template>

<script>
import DirectionsRenderer from "./DirectionsRenderer";

export default {
  name: "LoadInfo",
  props: ["data"],
  components: {
    DirectionsRenderer
  },
  async created() {
    if (this.$route.name === "share") {
      this.payload[0].load_id = this.$route.params.id;
      this.getShareData();
    }
  },
  data() {
    return {
      active: true,
      make_private_show: true,
      fullscreen: false,
      url: null,
      toggleDropdown: false,
      chips: [],
      currentInput: "",
      origin: null,
      destination: null,
      waypnt: [],
      payload: [
        {
          load_id: null,
          load_unique_id: "", //"n/a",
          load_reference: "", //"n/a",
          load_status: "", //"invoice_paid",
          shippers: [
            {
              shipper_id: 1,
              shipper_name: "", //"Schoen Group",
              shipping_date: "", //"2021-05-03",
              shipping_time: "",
              latitude: "", //33.9628906,
              longitude: "" //-118.0825548, //"10:00:00"
            }
          ],
          receivers: [
            {
              receiver_id: 1,
              receiver_name: "", //"Schoen Group",
              delivery_date: "", //"2021-05-14",
              delivery_time: "", //"15:30:00",
              latitude: "", //33.9628906,
              longitude: "" //-118.0825548,
            }
          ],
          drivers: [
            {
              driver_id: 1,
              name: "", //"Parth",
              phone_number: "" //"8414915994"
            }
          ],
          vehicles: [
            {
              truck_id: 1,
              truck_number: "", //"Truck 601",
              trailer_id: 1,
              trailer_number: "", //"Trailer 101",
              location: {
                latitude: "", //33.9628906,
                longitude: "", //-118.0825548,
                heading_degrees: 0,
                formatted_location: "" //"11035 Enterprise Avenue, Santa Fe Springs, CA, 90670"
              }
            }
          ]
        }
      ],
      drivers: [],
      truck: [],
      center: {
        lat: 34.052235,
        lng: -118.243683
      },
      selected_truck: null,
      infoWindowPos: null,
      infoWinOpen: false,
      infoOptions: {
        content: "",
        maxWidth: 200,
        pixelOffset: {
          width: 0,
          height: -35
        }
      }
    };
  },
  methods: {
    async getData() {
      //请求数据
      try {
        this.$vs.loading();
        const filter = {
          load_id: this.data.loadId
        };

        const data = await this.$store.dispatch(
          "calendar/getAllTrackingsLoadDetail",
          filter
        );
        this.payload = data;
        this.$emit("setPayloadData", this.payload);
        this.setOnMap();
      } catch (error) {
        console.log(error);
      } finally {
        this.$vs.loading.close();
      }
      //临时显示地图的东西
    },

    translateStatusToOutSiders(status) {
      switch (status) {
        case "open":
          return "Open";
        case "assign":
          return "Dispatched";
        case "in_transit":
          return "In Transit";
        case "delivered":
          return "Delivered";
        default:
          return "Completed";
      }
    },

    setOnMap() {
      this.truck = [];
      if (
        this.payload[0].vehicles &&
        this.payload[0].vehicles.length > 0 //&&
        //this.payload[0].vehicles[0].location.latitude
      ) {
        for (let i = 0; i < this.payload[0].vehicles.length; ++i) {
          if (this.payload[0].vehicles[i].location.latitude) {
            this.center = {
              lat: this.payload[0].vehicles[0].location.latitude,
              lng: this.payload[0].vehicles[0].location.longitude
            };
            break;
          }
        }

        this.payload[0].vehicles.map(vehicles => {
          let position = {
            lat: vehicles.location.latitude,
            lng: vehicles.location.longitude
          };
          if (position.lat && position.lng) {
            let infoContent = `<div><div class="mt-2 space-y-1">
                  <div>
                  <b>truck number: </b>
                    ${vehicles.truck_number}
                  </div>
                  <div>
                   <b>trailer number: </b>
                    ${vehicles.trailer_number}
                  </div>
                   <div>
                   <b>location: </b>
                    ${vehicles.location.formatted_location}
                  </div>
                </div>`;

            this.truck.push({
              position: position,
              infoContent: infoContent,
              truck_id: vehicles ? vehicles.truck_id : ""
            });
          }
        });
      }
      // In case they don't have Samsara or Motive, we use driver location from mobile app.
      if ( this.truck.length == 0 &&
        this.payload[0].drivers &&
        this.payload[0].drivers.length > 0
      ) {
        for (let i = 0; i < this.payload[0].drivers.length; ++i) {
          if (this.payload[0].drivers[i].latitude) {
            this.center = {
              lat: this.payload[0].drivers[i].latitude,
              lng: this.payload[0].drivers[i].longitude
            };
            break;
          }
        }

        this.payload[0].drivers.map(driver => {
          let position = {
            lat: driver.latitude,
            lng: driver.longitude
          };
          if (position.lat && position.lng) {
            let infoContent = `<div><div class="mt-2 space-y-1">
                  <div>
                  <b>driver name: </b>
                    ${driver.name}
                  </div>
                </div>`;

            this.truck.push({
              position: position,
              infoContent: infoContent,
              truck_id: ""
            });
          }
        });
      }

      this.waypnt = [];

      this.origin = {
        lat: this.payload[0].shippers[0].latitude,
        lng: this.payload[0].shippers[0].longitude
      };
      this.destination = {
        lat: this.payload[0].receivers[this.payload[0].receivers.length - 1]
          .latitude,
        lng: this.payload[0].receivers[this.payload[0].receivers.length - 1]
          .longitude
      };

      if (this.payload[0].shippers.length > 1) {
        this.payload[0].shippers.slice(1).map(val => {
          this.waypnt.push({
            location: { lat: val.latitude, lng: val.longitude },
            stopover: true
          });
        });
      }

      if (this.payload[0].receivers.length > 1) {
        this.payload[0].receivers.slice(0, -1).map(val => {
          this.waypnt.push({
            location: { lat: val.latitude, lng: val.longitude },
            stopover: true
          });
        });
      }
    },
    async getShareData() {
      //请求数据
      try {
        this.$vs.loading();
        const filter = {
          load_id: this.payload[0].load_id
        };
        var data = await this.$store.dispatch(
          "calendar/getshareLinkDetails",
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
      //临时显示地图的东西
    },

    toggleInfoWindow(truck, truck_id) {
      this.infoWindowPos = truck.position;
      this.infoOptions.content = truck.infoContent;
      //check if its the same marker that was selected if yes toggle
      if (this.selected_truck && this.selected_truck.truck_id == truck_id) {
        this.infoWinOpen = !this.infoWinOpen;
      } else {
        // if different marker set infowindow to open and reset current marker index
        this.infoWinOpen = true;
        this.selected_truck = truck;
      }
    }
  }
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
