<template>
  <div>
    <!-- Origin  -->
    <div class="flex items-center space-x-4 mt-3">
      <div class="w-10/12">
        <div class="flex">
          <span class="vs-input--label">Origin</span>
          <field-required-sign />
          <div class="place-tooltip-dropdown ml-2">
            <a href="javascript:void(0)">
              <vs-icon icon="error_outline" color="primary"></vs-icon>
            </a>
            <div class="place-tooltip-dropdown-menu">
              <p>
                Manually input City and State or add States from the dropdown
              </p>
              <vs-button
                type="line"
                size="small"
                @click="toggleOriginStateDropdown"
                >click to change</vs-button
              >
            </div>
          </div>
        </div>

        <multiselect
          :multiple="true"
          :show-labels="false"
          v-model="selectedOriginStateList"
          v-if="chooseOriginDropdown"
          track-by="text"
          label="text"
          placeholder="Select one or more states"
          :options="stateList"
        >
        </multiselect>

        <div v-if="!chooseOriginDropdown" class="flex">
          <gmap-autocomplete
            name="originAddress"
            placeholder="City, State"
            class="vs-inputx vs-input--input normal hasValue"
            :value="originAddress"
            @place_changed="setOriginPlace($event)"
            :options="googleMapAutoCompleteOptions"
            :select-first-on-enter="true"
          >
          </gmap-autocomplete>
        </div>
      </div>

      <div class="w-1/4">
        <span class="vs-input--label">DH-O</span>
        <multiselect
          :show-labels="false"
          :preselectFirst="true"
          v-model="dhOrigin"
          track-by="value"
          label="text"
          placeholder=""
          :options="dhOption"
          :allow-empty="false"
        >
        </multiselect>
      </div>
    </div>
    <div>
      <!-- Destination dropdown  -->
      <div class="flex items-center space-x-4 mt-3">
        <div class="w-10/12">
          <div class="flex">
            <span class="vs-input--label">Destination</span>
            <field-required-sign />
            <div class="place-tooltip-dropdown ml-2">
              <a href="javascript:void(0)">
                <vs-icon icon="error_outline" color="primary"></vs-icon>
              </a>
              <div class="place-tooltip-dropdown-menu">
                <p>
                  Manually input City and State or add States from the dropdown
                </p>
                <vs-button
                  type="line"
                  size="small"
                  @click="toggleDestinationStateDropdown"
                  >click to change</vs-button
                >
              </div>
            </div>
          </div>

          <multiselect
            :multiple="true"
            :show-labels="false"
            v-model="selectedDestinationStateList"
            v-if="chooseDestinationDropdown"
            track-by="text"
            label="text"
            placeholder="Select one or more states"
            :options="stateList"
          >
          </multiselect>

          <div v-if="!chooseDestinationDropdown" class="flex">
            <gmap-autocomplete
              name="destinationAddress"
              placeholder="City, State"
              class="vs-inputx vs-input--input normal hasValue"
              :value="destinationAddress"
              @place_changed="setDestinationPlace($event)"
              :options="googleMapAutoCompleteOptions"
              :select-first-on-enter="true"
            >
            </gmap-autocomplete>
          </div>
        </div>
        <div class="w-1/4">
          <span class="vs-input--label">DH-D</span>
          <multiselect
            :show-labels="false"
            :preselectFirst="true"
            v-model="dhDestination"
            track-by="value"
            label="text"
            placeholder=""
            :options="dhOption"
            :allow-empty="false"
          >
          </multiselect>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <label class="vs-input--label">Truck type</label>
      <multiselect
        v-model="manualSearchTruckTypes"
        :multiple="true"
        label="text"
        track-by="value"
        :options="manualSearchTruckTypeOptions"
        :show-labels="false"
      >
        <template slot="singleLabel" slot-scope="props">
          <span>{{ props.option.text }} </span>
        </template>
        <template slot="option" slot-scope="props">
          <div class="flex justify-between w-full">
            <div>
              {{ props.option.text }}
            </div>
          </div>
        </template>
      </multiselect>
    </div>
    <div class="flex items-center space-x-4 mt-3">
      <vs-input
        type="number"
        label="Length"
        placeholder="Fleet"
        v-model="length"
      />
      <vs-input
        type="number"
        label="Weight"
        placeholder="Weight"
        v-model="weight"
      />
      <div class="w-1/4">
        <span class="vs-input--label">Capacity</span>
        <multiselect
          :show-labels="false"
          :preselectFirst="true"
          v-model="capacity"
          track-by="value"
          label="text"
          placeholder=""
          :options="fullPartialOption"
          :searchable="false"
          :allow-empty="false"
        >
        </multiselect>
      </div>
    </div>
    <div class="flex items-center space-x-4 mt-3">
      <div class="w-1/2">
        <label class="vs-input--label block"
          >Start date<field-required-sign
        /></label>
        <flat-pickr
          v-model="selectedStartDate"
          class="w-full"
          placeholder="Select start date"
        />
      </div>
      <div class="w-1/2">
        <label class="vs-input--label block">End date</label>
        <flat-pickr
          v-model="selectedEndDate"
          class="w-full"
          placeholder="Select end date"
        />
      </div>
    </div>
    <div class="mt-3 text-center">
      <vs-button
        color="primary"
        class="w-1/3"
        type="filled"
        @click="loadMatchingSearch"
        >Search</vs-button
      >
    </div>
  </div>
</template>

<script>
import config from "@/config/constants.js";
import SetPlaceMixin from '@/mixins/setPlaceMixin.js';

export default {

  data() {
    return {
      chooseOriginDropdown: false,
      chooseDestinationDropdown: false,
      originAddress: "",
      destinationAddress: "",
      googleMapAutoCompleteOptions: config.googleMapAutoCompleteOptions,
      selectedStartDate: "",
      selectedEndDate: "",
      origin: [],
      destination: [],
      dhOrigin: { text: 50, value: 50 },
      dhDestination: { text: 50, value: 50 },
      length: null,
      weight: null,
      dhOption: [
        { text: "50", value: 50 },
        { text: "100", value: 100 },
        { text: "150", value: 150 },
        { text: "200", value: 200 },
        { text: "300", value: 300 },
        { text: "450", value: 450 },
      ],
      capacity: { text: "BOTH", value: "BOTH" },
      fullPartialOption: [
        { text: "FULL", value: "FULL" },
        { text: "PARTIAL", value: "PARTIAL" },
        { text: "BOTH", value: "BOTH" },
      ],
      manualSearchTruckTypes: [],
      manualSearchTruckTypeOptions: config.loadMatchingManualSearchTypeOptions,
      stateList: config.state_list,
      selectedOriginStateList: [],
      selectedDestinationStateList: [],
    };
  },

  mixins: [SetPlaceMixin],

  created() {},

  watch: {
    selectedOriginStateList() {
      if (this.selectedOriginStateList.length) {
        const selectedOriginStateListArray = this.selectedOriginStateList.map(
          (item) => item.text
        );
        this.originAddress = "";
        this.origin = { states: [...selectedOriginStateListArray] };
      }
    },

    selectedDestinationStateList() {
      if (this.selectedDestinationStateList.length) {
        const selectedDestinationStateListArray =
          this.selectedDestinationStateList.map((item) => item.text);
        this.destinationAddress = "";
        this.destination = { states: [...selectedDestinationStateListArray] };
      }
    },
  },

  methods: {
    /*
     * Google Map Autocomplete
     */
    setOriginPlace(place) {
      // Extract address components from the provided place
      const { city, state, latitude, longitude } =
        this.setPlace(place);

      if (city && state && latitude && longitude) {
        this.selectedOriginStateList = [];
        this.origin = {
          city,
          state,
          latitude,
          longitude,
        };
      }
      this.originAddress = city + ", " + state;
    },

    setDestinationPlace(place) {
      // Extract address components from the provided place
      const { city, state, latitude, longitude } =
        this.setPlace(place);

      if (city && state && latitude && latitude) {
        this.selectedDestinationStateList = [];
        this.destination = {
          city,
          state,
          latitude,
          longitude,
        };
      }
      this.destinationAddress = city + ", " + state;
    },

    toggleOriginStateDropdown() {
      this.chooseOriginDropdown = !this.chooseOriginDropdown;
    },

    toggleDestinationStateDropdown() {
      this.chooseDestinationDropdown = !this.chooseDestinationDropdown;
    },

    loadMatchingSearch() {
      if (
        (!this.origin.city ||
          !this.origin.state ||
          !this.origin.latitude ||
          !this.origin.longitude) &&
        (!this.origin.states || this.origin.states.length == 0)
      ) {
        this.$vs.notify({
          title: "Error",
          text: "Invalid Origin. Please input city or select states again.",
          color: "danger",
        });
        return;
      }
      if (
        (!this.destination.city ||
          !this.destination.state ||
          !this.destination.latitude ||
          !this.destination.longitude) &&
        (!this.destination.states || this.destination.states.length == 0)
      ) {
        this.$vs.notify({
          title: "Error",
          text: "Invalid Destination. Please input city or select states again.",
          color: "danger",
        });
        return;
      }

      if (this.origin.city) {
        this.origin.deadhead = this.dhOrigin.value;
      }
      if (this.destination.city) {
        this.destination.deadhead = this.dhDestination.value;
      }

      if (!this.selectedStartDate) {
        this.$vs.notify({
          title: "Error",
          text: "Please select Start Date.",
          color: "danger",
        });
        return;
      }
      if (
        this.selectedEndDate &&
        this.selectedEndDate < this.selectedStartDate
      ) {
        this.$vs.notify({
          title: "Error",
          text: "End Date cannot be ealier than Start Date.",
          color: "danger",
        });
        return;
      }

      let truckType = [];
      this.manualSearchTruckTypes.map((val) => {
        truckType.push(val.value);
      });

      const payload = {
        origin: this.origin,
        destination: this.destination,
        manualSearchTypes: truckType,
        startDate: this.selectedStartDate,
        endDate: this.selectedEndDate ? this.selectedEndDate : null,
        capacity: this.capacity.value,
        length: this.length ? this.length : null,
        weight: this.weight ? this.weight : null,
      };

      const searchId =
        "searchpopup-" +
        Math.random().toString(36).slice(2, 7) +
        "-" +
        Date.now();
      this.$emit("performLoadSearch", payload, searchId);
    },
  },
};
</script>

<style lang="scss">
.multiselect__tags {
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.place-tooltip-dropdown {
  position: relative;
}
.place-tooltip-dropdown-menu {
  display: none;
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
.place-tooltip-dropdown:hover .place-tooltip-dropdown-menu {
  display: block;
}
</style>
