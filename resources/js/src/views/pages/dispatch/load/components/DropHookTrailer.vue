<template>
  <div class="flex items-center gap-3">
    <div class="flex items-center gap-3">
      <!-- Drop Trailer Dropdown -->
      <v-select
        v-model="dropTrailerTypeModel"
        :reduce="(trailer) => trailer.value"
        :options="trailerDropOptions"
        placeholder="Drop Trailer"
        style="width: 170px; font-size: 13px"
      ></v-select>
      <v-select
        v-model="dropTrailerIdModel"
        :reduce="(trailer) => trailer.trailer_id"
        label="trailer_number"
        :options="trailerOptions"
        placeholder="trailer"
        style="width: 170px; font-size: 13px"
      ></v-select>
    </div>

    <div class="flex items-center gap-3">
      <!-- Hook Trailer Dropdown -->
      <v-select
        v-model="hookTrailerTypeModel"
        :reduce="(trailer) => trailer.value"
        :options="trailerHookOptions"
        placeholder="Hook Trailer"
        style="width: 170px; font-size: 13px"
      ></v-select>
      <v-select
        v-model="hookTrailerIdModel"
        :reduce="(trailer) => trailer.trailer_id"
        label="trailer_number"
        placeholder="trailer"
        :options="trailerOptions"
        style="width: 170px; font-size: 13px"
      ></v-select>
    </div>
  </div>
</template>

<script>
import config from '@/config/constants.js';

export default {
  name: 'DropHookTrailer',
  props: {
    hookTrailerId: {
      type: [Number, String],
      default: '',
    },
    dropTrailerId: {
      type: [Number, String],
      default: '',
    },
    trailerOptions: {
      type: Array,
      default: () => [],
    },
    hookTrailerType: {
      type: String,
      default: '',
    },
    dropTrailerType: {
      type: String,
      default: '',
    },
  },
  mounted() {
    this.trailerHookOptions = config.trailerHookOptions;
    this.trailerDropOptions = config.trailerDropOptions;
  },
  data() {
    return {
      hookTrailerTypeModel: '',
      dropTrailerTypeModel: '',
      hookTrailerIdModel: null,
      dropTrailerIdModel: null,
      trailerHookOptions: [],
      trailerDropOptions: [],
    };
  },
  watch: {
    hookTrailerType: {
      handler(newValue) {
        this.hookTrailerTypeModel = newValue;
      },
      immediate: true,
    },
    dropTrailerType: {
      handler(newValue) {
        this.dropTrailerTypeModel = newValue;
      },
      immediate: true,
    },
    dropTrailerTypeModel: {
      handler(newValue) {
        if (newValue === null) {
          newValue = '';
        }
        this.$emit('dropTrailerType', newValue);
      },
    },
    hookTrailerTypeModel: {
      handler(newValue) {
        if (newValue === null) {
          newValue = '';
        }
        this.$emit('hookTrailerType', newValue);
      },
    },
    dropTrailerIdModel: {
      handler(newValue) {
        this.$emit('update:dropTrailerId', newValue);
      },
    },
    hookTrailerIdModel: {
      handler(newValue) {
        this.$emit('update:hookTrailerId', newValue);
      },
    },
    hookTrailerId: {
      handler(newValue) {
        this.hookTrailerIdModel = newValue;
      },
      immediate: true,
    },
    dropTrailerId: {
      handler(newValue) {
        this.dropTrailerIdModel = newValue;
      },
      immediate: true,
    },
  },
  computed: {
    hookTrailerNumber() {
      return this.getTrailerNumber(this.hookTrailerId);
    },
    dropTrailerNumber() {
      return this.getTrailerNumber(this.dropTrailerId);
    },
  },
  methods: {
    getTrailerNumber(trailerId) {
      if (trailerId && this.trailerOptions.length > 0) {
        const trailer = this.trailerOptions.find(
          (item) => item.trailer_id === trailerId
        );
        return trailer ? trailer.trailer_number : '';
      }
      return '';
    },
  },
};
</script>
