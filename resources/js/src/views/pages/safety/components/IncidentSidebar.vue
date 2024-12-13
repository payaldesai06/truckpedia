<template>
  <div class="incident-sidebar mt-4 shadow-md h-85vh overflow-auto">
    <template>
      <div class="py-3 flex items-center justify-center bg-primary">
        <h3 class="text-base text-white">Incident Columns</h3>
      </div>
      <vs-divider class="mt-2" />

      <!-- Options -->
      <div class="px-2 mb-2">
        <div class="px-2 flex flex-col gap-2">
          <span
            class="flex items-center justify-between gap-2"
            v-for="col in showColumns"
            :key="col.id"
          >
            <label>{{ col.label }}</label>
            <vs-switch
              v-model="col.value"
              @input="onHideColumnChange(col.key, $event)"
            />
          </span>
        </div>
      </div>
    </template>
  </div>
</template>
<!-- eslint-disable multiline-ternary -->
<script>
import safetyCommonFunctions from '../mixins/safetyCommonFunctions';
import config from '@/config/constants.js';

export default {
  name: 'IncidentSidebar',
  mixins: [safetyCommonFunctions],
  data() {
    return {
      showColumns: [],
      defaultCols: config.safetyModule.tableDefaultCols,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.showColumns = this.defaultColumns.map(({ id, colId, label }) => {
        return {
          id,
          key: colId,
          label,
          value: true,
        };
      });

      const showColumns = this.currentUserCustomizations;

      this.showColumns =
        showColumns && Object.keys(showColumns).length
          ? this.showColumns.map((column) => {
              const { key } = column;
              const value = showColumns[key] || false;

              return { ...column, value };
            })
          : this.showColumns;
    },
    onHideColumnChange(key, val) {
      this.$emit('update:showColumns', {
        key,
        val,
        allColumns: [...this.showColumns],
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.incident-sidebar {
  &::-webkit-scrollbar {
    width: 8px;
    overflow: visible;
  }

  &::-webkit-scrollbar-thumb {
    border-style: solid;
    border-color: transparent;
    border-width: 4px;
    background-color: #dadce0;
    border-radius: 8px;
    box-shadow: none;
  }

  // Mozilla Firefox scrollbar
  scrollbar-width: thin;
  scrollbar-color: #dadce0 #dadce0;
}

// Utility classes
.h-85vh {
  height: 85vh;
}

.bg-primary {
  background-color: rgb(115, 103, 240);
}
</style>
