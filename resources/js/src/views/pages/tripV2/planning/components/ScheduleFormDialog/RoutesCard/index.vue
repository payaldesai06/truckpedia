<template>
  <div class="routes-selector">
    <div class="routes-header flex justify-between mb-2">
      <strong> Routes </strong>
      <vs-button
        color="primary"
        size="small"
        icon="add"
        @click="addNewRoute"
        type="filled"
      />
    </div>
    <div
      class="routes-scroll-area"
      :style="{ maxHeight: routeScrollAreaMaxHeight }"
    >
      <template v-for="(route, ix) in manualLanes || []">
        <RouteCard
          :key="ix"
          :value="route"
          :showDelete="manualLanes.length > 1"
          ref="routerBlock"
          @update="updateManualLane(ix, $event)"
          @delete="manualLanes.splice(ix, 1)"
        />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoutesCard',
  inject: ['reduceCardHeight'],
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    RouteCard: () => import('./RouteCard'),
  },
  data() {
    return {
      manualLanes: this.value,
    };
  },
  computed: {
    routeScrollAreaMaxHeight() {
      if (this.reduceCardHeight()) {
        return '25vh';
      }
      return '40vh';
    },
  },
  watch: {
    manualLanes: {
      handler(val) {
        this.$emit('input', val);
      },
      deep: true,
    },
    value: {
      handler(val) {
        this.manualLanes = val;
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    addNewRoute() {
      this.manualLanes.push({
        targetRpm: '',
        targetWeight: '',
        origin: {
          streetAddress: '',
          city: '',
          state: '',
          zipCode: '',
          latitude: '',
          longitude: '',
          deadhead: '',
          statesArray: [],
        },
        destination: {
          streetAddress: '',
          city: '',
          state: '',
          zipCode: '',
          latitude: '',
          longitude: '',
          deadhead: '',
          statesArray: [],
        },
      });
    },
    async validate() {
      let valid = true;
      await Promise.all(
        this.$refs.routerBlock.map(async (ref) => {
          const res = await ref.validate();
          valid = valid && res;
        })
      );
      return valid;
    },
    updateManualLane(ix, value) {
      this.$set(this.manualLanes, ix, value);
    },
  },
};
</script>
<style lang="scss" scoped>
.routes-selector {
  .routes-scroll-area {
    max-height: 25vh;
    overflow-y: auto;
    overflow-x: hidden;
    /* scroll bar */
    &::-webkit-scrollbar-thumb:horizontal {
      /*The style of the horizontal scrollbar*/
      width: 4px;
      background-color: #cccccc;
      -webkit-border-radius: 6px;
    }
    &::-webkit-scrollbar-track-piece {
      background-color: #fff; /*The background color of the scrollbar*/
      -webkit-border-radius: 0; /*Fillet width of the scrollbar*/
    }
    &::-webkit-scrollbar {
      width: 10px; /*the width of the scrollbar*/
      height: 8px; /*the height of the scroll bar*/
    }
    &::-webkit-scrollbar-thumb:vertical {
      /*The style of the vertical scrollbar*/
      height: 50px;
      background-color: #999;
      -webkit-border-radius: 4px;
      outline: 2px solid #fff;
      outline-offset: -2px;
      border: 2px solid #fff;
    }
    &::-webkit-scrollbar-thumb:hover {
      /*The hover style of the scroll bar*/
      height: 50px;
      background-color: #9f9f9f;
      -webkit-border-radius: 4px;
    }
  }
}
</style>
