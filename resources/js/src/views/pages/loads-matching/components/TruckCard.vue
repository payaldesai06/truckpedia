<template>
  <div class="card mt-5 shadow" @dblclick="searchLoads">
    <div class="card-left">
      <div class="flex pt-3">
        <h3>{{ data.truck_number }}</h3>
        <span class="ml-3">{{ data.driver_name }}</span>
      </div>

      <div class="address">
        <div class="path-border-container">
          <img src="@assets/images/custom/sender_icon.svg" />
          <div class="path-border"></div>
          <img src="@assets/images/custom/receiver_icon.svg" />
        </div>
        <div>
          <div>
            <h4>
              {{ data.destination.city ? data.destination.city + ", " : "" }}
              <!-- <span v-if="data.destination.state">,</span> -->
              {{ data.destination.state ? data.destination.state : "" }}
            </h4>
            <span>
              <flat-pickr
                v-model="reloadDate"
                :disabled="shareAuthId ? true : false"
                @on-change="handleChangeReloadDate()"
                ref="flat-pickr"
                placeholder="Select reload date"
                class="w-full"
              />
            </span>
            <!-- <span>{{ data.reload_date ? data.reload_date : "" }} </span> -->
          </div>

          <div class="mt-3">
            <div>
              <div class="flex justify-between">
                <span>Destination</span>
                <div
                  v-if="!shareAuthId"
                  class="tooltip-dropdown"
                  @click.stop="toggleDropdown"
                >
                  <a href="javascript:void(0)">
                    <vs-icon icon="error_outline" color="primary"></vs-icon>
                  </a>
                  <div class="tooltip-dropdown-menu" v-show="dropdown">
                    <p>
                      Manually input City and State or add States from the
                      dropdown
                    </p>
                    <vs-button type="line" @click="changeDestination"
                      >click to change</vs-button
                    >
                  </div>
                </div>
              </div>

              <vs-select
                v-if="chooseDropdown"
                placeholder="Select destinations"
                multiple
                class="w-full"
                autocomplete
                v-model="selectedStateList"
                :disabled="shareAuthId ? true : false"
                @input="updateReloadDestinationStatesList"
              >
                <vs-select-item
                  :key="index"
                  :value="item.text"
                  :text="item.text"
                  v-for="(item, index) in stateList"
                />
              </vs-select>

              <div v-if="!chooseDropdown" class="flex">
                <gmap-autocomplete
                  name="address"
                  placeholder="City, State"
                  class="vs-inputx vs-input--input normal hasValue"
                  :value="address"
                  :disabled="shareAuthId ? true : false"
                  @place_changed="getChangedPlace($event)"
                  :options="googleMapAutoCompleteOptions"
                  :select-first-on-enter="true"
                >
                </gmap-autocomplete>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card-right">
      <p class="text-right load-matching-truck-type">{{ data.truck_type }}</p>
      <div class="flex mt-6 justify-between">
        <div class="w-1/2 dh-od">
          <span>DH-(O)</span>
          <multiselect
            v-model="DeadheadO"
            placeholder=""
            label="text"
            track-by="value"
            tag-position="bottom"
            :allow-empty="false"
            @select="updateTruckDeadheadOrigin"
            :disabled="shareAuthId ? true : false"
            :options="deadheadOptions"
            :show-labels="false"
          >
          </multiselect>
        </div>

        <div class="w-1/2 ml-5">
          <span>Expected Rate</span>
          <vs-input
            type="number"
            :disabled="shareAuthId ? true : false"
            v-model="targetPrice"
            @input="updateTruckTargetPrice"
            class="w-full"
          />
        </div>
      </div>

      <div class="flex mt-6 justify-between">
        <div class="w-1/2 dh-od">
          <span>DH-(D)</span>
          <multiselect
            v-model="DeadheadD"
            placeholder=""
            label="text"
            track-by="value"
            tag-position="bottom"
            :allow-empty="false"
            @select="updateTruckDeadheadDestination"
            :disabled="shareAuthId ? true : false"
            :options="deadheadOptions"
            :show-labels="false"
          >
          </multiselect>
        </div>

        <div class="w-1/2 ml-5">
          <span>Max Weight</span>
          <vs-input
            type="number"
            :disabled="shareAuthId ? true : false"
            v-model="maxWeight"
            @input.native="updateTruckMaxWeight"
            class="w-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/config/constants.js";
import SetPlaceMixin from '@/mixins/setPlaceMixin.js';

export default {
  props: ["data"],

  data() {
    return {
      address: "",
      DeadheadD: null,
      DeadheadO: null,
      destination: "",
      chooseDropdown: false,
      selectedStateList: [],
      reloadCity: "",
      reloadState: "",
      reloadCityLat: null,
      reloadCityLng: null,
      targetPrice: null,
      maxWeight: null,
      debounce: null,
      shareAuthId: "",
      reloadDate: "",
      // flat_pikr_config: {
      //   defaultDate: this.reloadDate
      // },
      stateList: config.state_list,
      // google map autocomplete options
      googleMapAutoCompleteOptions: config.googleMapAutoCompleteOptions,
      deadheadOptions: [
        { text: "50", value: 50 },
        { text: "100", value: 100 },
        { text: "150", value: 150 },
        { text: "200", value: 200 },
        { text: "300", value: 300 },
        { text: "450", value: 450 },
      ],
      dropdown: false,
    };
  },

  mixins: [SetPlaceMixin],

  created() {
    this.setAllValues();
    if (this.$route.name === "share-loads-matching") {
      this.shareAuthId = this.$route.params.id;
    }
  },

  watch: {
    data() {
      this.setAllValues();
    },
  },

  methods: {
    toggleDropdown() {
      this.dropdown = !this.dropdown;
    },
    changeDestination() {
      this.chooseDropdown = !this.chooseDropdown;
    },
    // Reload Date method
    handleChangeReloadDate() {
      if (this.shareAuthId) return;

      const payload = {
        truck_id: this.data.truck_id,
        reload_date: this.reloadDate,
      };
      this.$store
        .dispatch("loads-matching/updateTruckReloadDate", payload)
        .then((data) => {
          if (data.result) {
            this.$vs.notify({
              title: "Reload date updated",
              text: "Truck reload date updated sucessfully",
              color: "success",
            });
          } else {
            this.$vs.notify({
              title: "Invalid date",
              text: "Please select a valid date",
              color: "danger",
            });
          }
        });
    },

    /*
     * Google Map Autocomplete
     */
     getChangedPlace(place) {
      // Extract address components from the provided place
      const { city, state, latitude, longitude } =
        this.setPlace(place);
      if (city && state) {
        this.updateDestinationWithStateAndCity(city, state, latitude, longitude);
      }
    },

    // Set all value method
    setAllValues() {
      this.DeadheadD = {
        text: this.data.dh_destination,
        value: this.data.dh_destination,
      };
      this.DeadheadO = {
        text: this.data.dh_origin,
        value: this.data.dh_origin,
      };
      this.targetPrice = this.data.matching_target_price;
      this.maxWeight = this.data.matching_max_weight;
      this.reloadDate = this.data.reload_date;
      if (this.data.reload_states.length > 0) {
        this.chooseDropdown = true;
        this.selectedStateList = [];
        this.data.reload_states.map((val) => {
          this.selectedStateList.push(val.reload_state);
        });
      } else {
        this.chooseDropdown = false;
        if (this.data.reload_city && this.data.reload_state) {
          this.address = this.data.reload_city.concat(
            ", ",
            this.data.reload_state
          );
          this.reloadCity = this.data.reload_city;
          this.reloadState = this.data.reload_state;
          this.reloadCityLat = this.data.reload_city_latitude;
          this.reloadCityLng = this.data.reload_city_longitude;
        } else {
          this.address = "";
          this.reloadCity = "";
          this.reloadState = "";
          this.reloadCityLat = null;
          this.reloadCityLng = null;
        }
      }
    },

    updateReloadDestinationStatesList() {
      const payload = {
        truck_id: this.data.truck_id,
        reload_states: this.selectedStateList,
      };
      this.address = "";
      this.reloadCity = "";
      this.reloadState = "";
      this.reloadCityLat = null;
      this.reloadCityLng = null;
      this.updateDestinationApi(payload);
    },

    updateDestinationWithStateAndCity(city, state, lat, lng) {
      const payload = {
        truck_id: this.data.truck_id,
        reload_city: city,
        reload_state: state,
        reload_city_latitude: lat,
        reload_city_longitude: lng,
      };
      this.address = city + ", " + state;
      this.reloadCity = city;
      this.reloadState = state;
      this.reloadCityLat = lat;
      this.reloadCityLng = lng;
      this.selectedStateList = [];
      this.updateDestinationApi(payload);
    },

    async updateDestinationApi(payload) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.$vs.loading();
        this.$store
          .dispatch("loads-matching/updateTruckReloadDestination", payload)
          .then(() => {
            this.$vs.notify({
              color: "primary",
              title: "Destination updated",
              text: "Destination updated successfully.",
            });
          })
          .catch((error) => {
            this.$vs.notify({
              title: "Error",
              text: error.response.data.message,
              color: "danger",
            });
          })
          .finally(() => {
            this.$vs.loading.close();
          });
      }, 1000);
    },

    async updateTruckDeadheadOrigin(event) {
      const payload = {
        truck_id: this.data.truck_id,
        dh_origin: event.value,
      };
      this.$vs.loading();
      this.$store
        .dispatch("loads-matching/updateTruckDeadheadOrigin", payload)
        .then(() => {
          this.$vs.notify({
            color: "primary",
            title: "Deadhead origin updated",
            text: "Truck deadhead origin updated successfully.",
          });
        })
        .catch((error) => {
          this.$vs.notify({
            title: "Error",
            text: error.response.data.message,
            color: "danger",
          });
        })
        .finally(() => {
          this.$vs.loading.close();
        });
    },

    async updateTruckDeadheadDestination(event) {
      const payload = {
        truck_id: this.data.truck_id,
        dh_destination: event.value,
      };
      this.$vs.loading();
      this.$store
        .dispatch("loads-matching/updateTruckDeadheadDestination", payload)
        .then(() => {
          this.$vs.notify({
            color: "primary",
            title: "Deadhead destination updated",
            text: "Truck deadhead destination updated successfully.",
          });
        })
        .catch((error) => {
          this.$vs.notify({
            title: "Error",
            text: error.response.data.message,
            color: "danger",
          });
        })
        .finally(() => {
          this.$vs.loading.close();
        });
    },

    async updateTruckTargetPrice() {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        const payload = {
          truck_id: this.data.truck_id,
          matching_target_price: this.targetPrice,
        };
        this.$vs.loading();
        this.$store
          .dispatch("loads-matching/updateTruckTargetPrice", payload)
          .then(() => {
            this.$vs.notify({
              color: "primary",
              title: "Rate updated",
              text: "Expected Rate updated successfully.",
            });
          })
          .catch((error) => {
            this.$vs.notify({
              title: "Error",
              text: error.response.data.message,
              color: "danger",
            });
          })
          .finally(() => {
            this.$vs.loading.close();
          });
      }, 1000);
    },

    async updateTruckMaxWeight() {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        const payload = {
          truck_id: this.data.truck_id,
          matching_max_weight: this.maxWeight,
        };
        this.$vs.loading();
        this.$store
          .dispatch("loads-matching/updateTruckMaxWeight", payload)
          .then(() => {
            this.$vs.notify({
              color: "primary",
              title: "Max Weight updated",
              text: "Truck max weight updated successfully.",
            });
          })
          .catch((error) => {
            this.$vs.notify({
              title: "Error",
              text: error.response.data.message,
              color: "danger",
            });
          })
          .finally(() => {
            this.$vs.loading.close();
          });
      }, 1000);
    },

    async searchLoads() {
      if (this.shareAuthId) {
        return;
      }
      if (
        this.data.destination.city &&
        this.data.destination.state &&
        this.data.destination.latitude &&
        this.data.destination.longitude
      ) {
        var origin = {
          city: this.data.destination.city,
          state: this.data.destination.state,
          latitude: this.data.destination.latitude,
          longitude: this.data.destination.longitude,
          deadhead: this.DeadheadO.value,
        };
      } else {
        this.$vs.notify({
          title: "Error",
          text: "Invalid or empty truck load receiver location.",
          color: "danger",
        });
        return;
      }

      if (this.selectedStateList.length > 0) {
        var destination = { states: [...this.selectedStateList] };
      } else {
        var destination = {
          city: this.reloadCity,
          state: this.reloadState,
          latitude: this.reloadCityLat,
          longitude: this.reloadCityLng,
          deadhead: this.DeadheadD.value,
        };
        if (
          !destination.city ||
          !destination.state ||
          !destination.latitude ||
          !destination.longitude
        ) {
          this.$vs.notify({
            title: "Error",
            text: "Invalid reload destination. Please input city or select states again.",
            color: "danger",
          });
          return;
        }
      }

      const payload = {
        origin: origin,
        destination: destination,
        startDate: this.reloadDate,
        endDate: this.reloadDate,
        ezpapelEquipmentType: this.data.truck_type,
        weight: this.maxWeight > 0 ? this.maxWeight : null,
      };

      const searchId =
        "truckcard-" +
        Math.random().toString(36).slice(2, 7) +
        "-" +
        Date.now();
      this.$emit("performLoadSearch", payload, searchId);
    },
  },
};
</script>

<style lang="scss">
.card {
  display: flex;
  border-radius: 20px;
  background: #fff;
  @media (max-width: 991px) {
    flex-direction: column;
  }
  .card-left {
    border-right: 1px solid #f1f4ff;
    min-width: 170px;
    padding: 14px;
    @media (max-width: 991px) {
      border: none;
      min-width: 250px;
    }
    h3 {
      font-size: 13px;
      font-weight: 600;
    }
    h4 {
      color: #000;
      font-size: 13px;
    }
    span {
      color: #6e6b7b;
      font-size: 11px;
    }
    .address {
      margin-top: 20px;
      display: flex;
      .path-border-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 10px;
        .path-border {
          border: none !important;
          border-left: 1px dashed rgb(105, 76, 254) !important;
          height: 42px;
          width: 1px;
          // border-style: dashed;
        }
        img {
          width: 18px;
        }
      }
    }
  }
  .card-right {
    padding: 22px;
    position: relative;
    @media (max-width: 991px) {
      margin-left: 0;
    }
    h3 {
      font-size: 14px;
    }
    span {
      font-size: 12px;
    }
  }
}

.tooltip-dropdown {
  position: relative;
}
.tooltip-dropdown-menu {
  // display: none;
  position: absolute;
  z-index: 1000;
  background: #fff;
  padding: 10px;
  box-shadow: 0px 4px 24px #22292f1a;
  width: 170px;
  p {
    font-size: 10px;
    color: #6e6b7b;
  }
}
// .tooltip-dropdown:hover .tooltip-dropdown-menu {
//   display: block;
// }
.load-matching-truck-type {
  position: absolute;
  right: 24px;
  @media (max-width: 576px) {
    top: 0;
  }
}

.dh-od .multiselect {
  @media (min-width: 1199px) {
    width: 120px;
  }
}
</style>
