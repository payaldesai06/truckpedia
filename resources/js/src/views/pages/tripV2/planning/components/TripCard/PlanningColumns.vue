<template>
  <Draggable
    tag="tbody"
    @end="onDragEnd"
    :draggable="`.parent-column${uniqueId}`"
    :group="{ name: `items${uniqueId}`, put: true }"
  >
    <template v-for="(item, i) in columnsData">
      <tr
        v-if="item"
        :key="item.loadId"
        :class="`parent-column${uniqueId}`"
        :data-id="`item-${uniqueId}-${item.loadId}`"
        @click="showPlanningLoads(item, i)"
      >
        <td
          v-for="(column, index) in columns"
          :key="column.field"
          :class="{ 'td-children': item.isChildren, editable: column.edit }"
        >
          <div class="table-td" v-if="!item.isChildren">
            <div v-if="index < 1">
              <vs-checkbox
                @click.native.stop
                v-model="selectedLoads"
                :vs-value="item.loadId"
                :vs-name="item.loadId"
                class="h-full inline-flex"
              ></vs-checkbox>
            </div>
            <!-- <div class="dropdown-dot" v-if="index < 1"></div> -->
            <!-- Set Stops  -->
            <span v-if="column.field === 'stops'">
              {{ item[column.field].length }}
            </span>
            <template v-else>
              <template v-if="!column.edit">
                <span
                  v-if="column.field === 'loadNumber'"
                  style="cursor: pointer"
                  @click.prevent="showLoadDetails(item)"
                >
                  {{ item[column.field] }}
                </span>
                <span
                  v-else-if="column.field === 'loadDriverAssignedTruck'"
                  style="cursor: default"
                >
                  <span
                    v-for="(truck, i) in item[column.field]"
                    :key="truck.truckId"
                  >
                    {{ truck.truckNumber
                    }}<template v-if="i + 1 !== item[column.field].length"
                      >,</template
                    >
                  </span>
                </span>
                <span
                  v-else-if="column.field === 'loadDriverAssignedTrailer'"
                  style="cursor: default"
                >
                  <span
                    v-for="(trailer, i) in item[column.field]"
                    :key="trailer.trailerId"
                  >
                    {{ trailer.trailerNumber
                    }}<template v-if="i + 1 !== item[column.field].length"
                      >,</template
                    >
                  </span>
                </span>
                <span v-else style="cursor: default">
                  {{ item[column.field] }}
                </span>
              </template>
              <vs-input
                v-else
                @click.native.stop
                v-model="item[column.field]"
                class="border-0 bg-transparent"
                type="number"
                @input="setCustomInput(item, i, column.field, $event)"
              >
              </vs-input>
              <!-- <input
                v-else
                @click.stop
                v-model="item[column.field]"
                class="border-0 bg-transparent"
              /> -->
            </template>
          </div>
          <div v-else class="table-td">
            <div class="dropdown-dot" v-if="index < 1"></div>
            {{ item.stopId }}
          </div>
        </td>
        <td></td>
      </tr>
      <tr
        :key="`item-${uniqueId}-${item.loadId}`"
        :data-child-header-id="`item-${uniqueId}-${item.loadId}`"
        v-if="!isNaN(uniqueId)"
      >
        <th
          v-for="stopCol in stopColumns"
          :key="stopCol.field"
          v-show="item.showChildren"
        >
          <div class="planning-header">
            {{ stopCol.header }}
          </div>
        </th>
        <th v-show="item.showChildren"></th>
      </tr>
      <tr
        v-for="stop in item.stops"
        :key="stop.type + stop.stopId + item.loadId"
        :data-child-row-id="`item-${uniqueId}-${item.loadId}`"
        v-show="item.showChildren"
      >
        <td
          class="td-children"
          v-for="(stopColumn, index2) in stopColumns"
          :key="stopColumn.field"
        >
          <div class="table-td">
            <div class="dropdown-dot" v-if="index2 < 1"></div>
            <!-- Set Stops  -->
            <span v-if="!stopColumn.edit">
              {{ stop[stopColumn.field] }}
            </span>
            <input v-else />
          </div>
        </td>
        <td
          class="td-children"
          v-for="(item, index3) in Array(getRestColumnSize(item.stops.length))"
          :key="index3"
        ></td>
      </tr>
    </template>
  </Draggable>
</template>

<script>
import GoogleMapMixin from '@/mixins/googleMapMixin';
import { parseFloatWithTrim } from '@/helpers/helper';
import { mapGetters } from 'vuex';
import $ from 'jquery';
import config from '@/config/constants.js';

export default {
  name: 'PlanningColumn',
  inject: ['openLoadSidebar'],
  data() {
    return {
      columnsChildren: [],
      timeoutHandler: null,
      selectedLoads: [],
      cachedDistances: {},
      columnsData: [],
      distanceCache: new Map(),
    };
  },
  mixins: [GoogleMapMixin],
  computed: {
    ...mapGetters('tripV2', ['getPlanningLoads']),
    ...mapGetters('pcmiler', ['pcmiler']),
    ...mapGetters('auth', ['user']),

    shallRoundMilesToInteger() {
      return config.companiesWithRoundedMilesToInteger.includes(
        this.user.admin_company_detail_id
      );
    },
    stopColumns() {
      const columns = [
        { field: 'name', header: 'Name', expander: false },
        { field: 'city', header: 'City' },
        { field: 'state', header: 'State' },
        { field: 'type', header: 'Type' },
        { field: 'date', header: 'Date' },
        // { field: "segmentDistance", header: "Distance" },
      ];
      return columns;
    },
    getLoadsFromIds() {
      return this.columnsData.filter((load) =>
        this.selectedLoads.includes(load.loadId)
      );
    },
    stopTypeLatLngLoadList() {
      if (this.getLoadsFromIds.length > 1 && this.calculateDeadheadOption) {
        let ret = this.getLoadsFromIds
          .map((item, index) => {
            if (item && item.stops) {
              let firstStop = item.stops[0];
              let lastStop = item.stops[item.stops.length - 1];
              if (firstStop && lastStop) {
                if (index === 0) {
                  return `loadId${item.loadId}-last${lastStop.lat},${lastStop.long}`;
                } else if (index === this.getLoadsFromIds.length - 1) {
                  return `loadId${item.loadId}-first${firstStop.lat},${firstStop.long}`;
                } else {
                  return `loadId${item.loadId}-first${firstStop.lat},${firstStop.long};loadId${item.loadId}-last${lastStop.lat},${lastStop.long}`;
                }
              }
            }
            return '';
          })
          .join(';');

        return ret;
      }
      return '';
    },
  },
  props: {
    value: {
      default: [],
    },
    nodes: {
      default: [],
    },
    columns: {
      default: [],
    },
    calculateDeadheadOption: {
      type: Boolean,
      default: () => false,
    },
    uniqueId: {
      type: Number || null,
      default: () => null,
    },
  },
  watch: {
    nodes: {
      handler() {
        this.columnsData = this.nodes;
      },
      deep: true,
      immediate: true,
    },
    value: {
      handler(val) {
        this.selectedLoads = val;
      },
      deep: true,
      immediate: true,
    },
    selectedLoads: {
      handler(val) {
        this.$emit('input', val);
      },
      deep: true,
      immediate: true,
    },
    stopTypeLatLngLoadList: {
      handler(newValue) {
        console.log(newValue, 'calculating deadhead miles.');
        this.processStops(newValue);
      },
    },
  },
  methods: {
    onDragEnd(event) {
      const elements = $(`.parent-column${this.uniqueId}`);
      const sequencedLoadIds = [];
      const reOrderedLoads = [];
      for (let i = 0; i < elements.length; i++) {
        const elementId = $(elements[i]).data('id');
        const loadId = elementId.split('-')[2];
        sequencedLoadIds.push(Number(loadId));
        const selectedElement = $(`[data-id="${elementId}"]`);
        const selectedHeaders = $(`[data-child-header-id="${elementId}"]`);
        const selectedColumns = $(`[data-child-row-id="${elementId}"]`);
        $(selectedHeaders).insertAfter(selectedElement);
        $(selectedColumns).insertAfter(selectedHeaders);
      }
      sequencedLoadIds.forEach((loadId) => {
        this.columnsData.forEach((item) => {
          if (item.loadId === loadId) {
            reOrderedLoads.push(item);
          }
        });
      });
      this.$emit('changeOrder', reOrderedLoads);
    },

    async processStops(stopsString) {
      try {
        this.$emit('updateEndTripBtnVisibility', true);
        if (!stopsString) {
          // Reset all empty distance to default
          this.columnsData.forEach((load) => {
            // loadId is not unique, cause a load can have multiple drivers, tags, trucks, etc.
            const defaultValue = this.getPlanningLoads.find(
              (item) =>
                item.loadId === load.loadId &&
                ((load.driverUserId &&
                  load.driverUserId == item.driverUserId) ||
                  (load.ownerOperatorTagId &&
                    load.ownerOperatorTagId == item.ownerOperatorTagId) ||
                  (load.truckId && load.truckId == item.truckId))
            );
            if (defaultValue) {
              load.emptyDistance = defaultValue.emptyDistance;
            }
          });
          return;
        }
        let stops = stopsString.split(';');
        this.getPlanningLoads.forEach((item) => {
          const foundLoad = this.columnsData.find(
            (x) =>
              x.loadId === item.loadId &&
              ((x.driverUserId && x.driverUserId == item.driverUserId) ||
                (x.ownerOperatorTagId &&
                  x.ownerOperatorTagId == item.ownerOperatorTagId) ||
                (x.truckId && x.truckId == item.truckId))
          );
          if (foundLoad) {
            foundLoad.emptyDistance = item.emptyDistance;
          }
        });
        for (let i = 0; i < stops.length; i += 2) {
          const stop1 = this.parseStop(stops[i]);
          const stop2 = this.parseStop(stops[i + 1]);
          if (stop1 && stop2) {
            const engine = this.pcmiler.apiKey ? 'pc' : 'google';
            const distance = await this.calculateDistance(stop1, stop2, engine);
            if (distance) {
              const columnsData = this.columnsData.find(
                (load) => load.loadId === stop2.loadId
              );
              columnsData.emptyDistance =
                parseFloatWithTrim(
                  columnsData.emptyDistance + Number(distance)
                ) || 0;
            }
          }
        }
      } catch (error) {
      } finally {
        this.$emit('updateEndTripBtnVisibility', false);
      }
    },

    parseStop(stopString) {
      const matchResult = stopString.match(/loadId(\d+)-(first|last)(.*)/);
      if (!matchResult) return;
      const [, loadId, type, latLng] = matchResult;
      const [lat, lng] = latLng.split(',').map(Number);
      return { loadId: parseInt(loadId), type, lat, lng };
    },
    getRestColumnSize(stopsLength) {
      return this.columns.length - stopsLength;
    },
    toFixed(x, d) {
      if (!d) return x.toFixed(d); // don't go wrong if no decimal
      return Number(x)
        .toFixed(d)
        .replace(/\.?0+$/, '');
    },
    showPlanningLoads(colData, index) {
      this.$set(this.columnsData, index, {
        ...this.columnsData[index],
        showChildren: !this.columnsData[index].showChildren,
      });
    },
    setCustomInput(item, index, fieldName, event) {
      clearTimeout(this.timeoutHandler);
      const countOfDecimal = ((event + '').split('.')[1] || '').length;
      const decimalSupportMap = {
        totalLoadedDistance: 4,
      };

      const decimalToSupport = decimalSupportMap[fieldName] || 2;
      let dataToSet =
        countOfDecimal > decimalToSupport
          ? this.toFixed(event, decimalToSupport)
          : event;
      this.$set(this.columnsData[index], fieldName, dataToSet);

      /* After typing: Check if all decimal are 0 then set the value to non decimal */
      this.timeoutHandler = setTimeout(() => {
        if (Number.isInteger(parseFloat(event)) && countOfDecimal > 0) {
          let dataToSet = this.toFixed(event, decimalToSupport);
          this.$set(this.columnsData[index], fieldName, dataToSet);
        }
      }, 1000);
    },
    showLoadDetails({ loadId }) {
      if (loadId) {
        this.openLoadSidebar(loadId);
      }
    },
    async calculateDistanceByGoogle(origin, destination) {
      try {
        const routes = [
          {
            origin,
            destination,
          },
        ];
        const totalDistanceInMeter =
          await this.getGoogleDistanceBetweenMultipleRoutes(routes);
        return totalDistanceInMeter / 1609.344 !== 0
          ? (totalDistanceInMeter / 1609.344).toFixed(2)
          : 0;
      } catch (error) {
        console.log(error);
      }
    },
    async calculateDistanceByPCMiler(origin, destination) {
      let pcMilerLatLogString = '';
      const latLngList = [origin, destination];
      latLngList.forEach((stop) => {
        pcMilerLatLogString += stop.lng + ',' + stop.lat + ';';
      });
      const payload = {
        stops: pcMilerLatLogString.slice(0, -1),
        apiKey: this.pcmiler.apiKey,
      };
      return await this.$store
        .dispatch('pcmiler/getPcmilerTMile', payload)
        .then((data) => {
          return data[0].TMiles !== 0 ? data[0].TMiles : 0;
        })
        .catch((e) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Something went wrong while calculating miles by PC MILER. Is the API key correct? ',
          });
        });
    },
    async calculateDistance(origin, destination, engine = 'google') {
      const cacheKey = `${origin.lat},${origin.lng}-${destination.lat},${destination.lng}`;
      if (this.distanceCache.has(cacheKey)) {
        return this.distanceCache.get(cacheKey);
      } else {
        let distance = null;
        if (engine === 'google') {
          distance = await this.calculateDistanceByGoogle(origin, destination);
        } else {
          distance = await this.calculateDistanceByPCMiler(origin, destination);
        }
        if (this.shallRoundMilesToInteger) {
          distance = Math.round(distance);
        }
        if (distance != null) {
          // Google Maps API does sometimes fail, I got into this situation.
          this.distanceCache.set(cacheKey, distance);
        }
        return distance;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
td {
  box-shadow: 1px 2px 1px #f0f0f1;
  border-block-end-color: rgb(240, 241, 243);
  background: #f7f8f9;
  padding: 5px;
  color: #666666;
  &.editable {
    padding: 0;
  }
  input {
    color: #666666;
    width: 100%;
  }
  .table-td {
    display: flex;
    align-items: center;
    font-size: 13.5px;
    .dropdown-dot {
      background: rgb(211, 211, 211);
      width: 8px;
      height: 8px;
      border-radius: 2px;
      margin-right: 5px;
    }
    .span {
      cursor: default;
    }
    ::v-deep {
      .vs-input {
        width: 100%;
        input,
        .vs-input--input {
          border: none !important;
          background: #f7f8f9 !important;
          box-shadow: none !important;
        }
        /* Chrome, Safari, Edge, Opera */
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        /*!* Firefox *!*/
        input[type='number'] {
          -moz-appearance: textfield;
        }
        input[type='number']::-webkit-inner-spin-button,
        input[type='number']::-webkit-outer-spin-button {
          opacity: 1;
        }
      }
    }
  }
}
.planning-header {
  font-weight: 500;
  color: #000;
}
.td-children {
  background: #fff;
  &:first-child {
    padding-left: 30px;
  }
}
</style>
