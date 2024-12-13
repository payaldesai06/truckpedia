<template>
  <div class="border border-solid rounded light-border p-1">
    <!-- Search Input -->
    <vs-input
      :class="['w-full', { 'cursor-not-allowed': disabled }]"
      v-model="searchText"
      icon="search"
      placeholder="Search"
      :disabled="disabled"
    />

    <!-- Options List -->
    <div class="options-list mt-4">
      <div
        v-for="(option, index) in filteredOptions"
        :key="dataKey ? option[dataKey] : index"
        class="flex gap-2"
      >
        <Checkbox
          :class="disabled ? 'cursor-not-allowed' : ''"
          :id="dataKey ? option[dataKey] : index"
          :value="option[optionValue]"
          v-model="checkedValues"
          :disabled="disabled"
          @change="onChange"
        />
        <label
          :for="dataKey ? option[dataKey] : index"
          :class="disabled ? 'cursor-not-allowed' : 'cursor-pointer'"
        >
          {{ option[optionLabel] }}
        </label>
      </div>

      <span
        v-if="searchText && !filteredOptions.length"
        class="block text-center"
      >
        No Result Found
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomMultiselect',
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: Array | String,
      required: true,
    },
    dataKey: {
      type: String,
      default: null,
    },
    optionLabel: {
      type: String,
      default: 'label',
    },
    optionValue: {
      type: String,
      default: 'value',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    filteredOptions() {
      if (!this.searchText) return this.options;

      return this.options.filter((option) => {
        return option[this.optionLabel]
          .toLowerCase()
          .includes(this.searchText.toLowerCase());
      });
    },
  },
  data() {
    return {
      searchText: '',
      checkedValues: [],
    };
  },
  created() {
    this.checkedValues = this.value ? [...this.value] : [];
  },
  methods: {
    onChange() {
      this.$emit('input', this.checkedValues);
    },
  },
  watch: {
    value(val) {
      if (JSON.stringify(val) !== JSON.stringify(this.checkedValues)) {
        this.checkedValues = [...val];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.options-list {
  max-height: 180px;
  overflow-y: auto;
  overflow-x: auto;

  > div:not(:first-child) {
    margin-top: 0.5rem;
  }

  label {
    white-space: nowrap;
  }
}

::v-deep {
  .vs-input--icon {
    font-size: 1.5rem;
  }
}

.options-list::-webkit-scrollbar {
  height: 8px;
  overflow: visible;
  width: 8px;
}

.options-list::-webkit-scrollbar-thumb {
  border-style: solid;
  border-color: transparent;
  border-width: 4px;
  background-color: #dadce0;
  border-radius: 8px;
  box-shadow: none;
}

// Utility Classes
.light-border {
  border-color: #0000001a;
}
</style>
