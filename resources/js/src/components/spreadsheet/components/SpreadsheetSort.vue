<template>
  <div>
    <div class="sort">
      <div @click.stop="toggleSortDropDown">
        <div
          v-if="!sortingSchemaRawPayload.length"
          class="flex items-center cursor-pointer"
        >
          <vs-icon icon="swap_vert"></vs-icon>
          <span>Sort</span>
        </div>
        <div class="flex items-center cursor-pointer sorted-container" v-else>
          <vs-icon icon="swap_vert"></vs-icon>
          <span>Sorted by {{ sortingSchemaRawPayload.length }} fields</span>
        </div>
      </div>
      <div
        class="sort-dropdown"
        v-if="dropdown"
        v-click-outside="closeSortDropDown"
      >
        <div class="p-3 sort-content">
          <span>Sort by</span>
          <vs-divider class="m-2"></vs-divider>
          <template v-if="!isSortExists">
            <template v-if="(columnsOptions || []).length">
              <div class="spreadsheet-add-new-sort-menu">
                <div
                  v-for="(column, index) in columnsOptions"
                  :key="index"
                  class="columns-list"
                  @click.stop="handleAddColumnSort(column)"
                >
                  <span>{{ column.name }}</span>
                </div>
              </div>
            </template>
            <section v-else>
              <p class="flex justify-center align-center text-info">
                Add few columns to the sheet to start sorting
              </p>
            </section>
          </template>
          <template v-else>
            <draggable
              tag="ul"
              :list="sortingSchemaRawPayload"
              class="draggable-list-group"
              handle=".drag-handle"
              @change="updateSortSchemaPayload"
            >
              <li
                class="draggable-list-group-item flex"
                v-for="(item, i) in sortingSchemaRawPayload"
                :key="i"
              >
                <!-- Template for single row of sort selection  -->
                <div class="flex items-center mt-2" :key="i">
                  <multiselect
                    class="w-select"
                    :show-labels="false"
                    v-model="item.column"
                    track-by="name"
                    label="name"
                    :options="columnsOptions"
                    :allow-empty="false"
                    :preselectFirst="true"
                    @close="updateSortSchemaPayload()"
                  >
                  </multiselect>
                  <multiselect
                    class="mx-2 w-select"
                    :show-labels="false"
                    v-model="item.sorting"
                    track-by="value"
                    label="text"
                    :options="sortingOptions"
                    :allow-empty="false"
                    :preselectFirst="true"
                    @close="updateSortSchemaPayload()"
                  ></multiselect>
                  <div class="cursor-pointer" @click.stop="removeSort(i)">
                    <vs-icon icon="close" />
                  </div>
                </div>
                <!-- Drag Icon for each row  -->
                <vs-icon
                  class="drag-handle"
                  size="small"
                  icon="drag_indicator"
                />
              </li>
            </draggable>
            <div class="my-2">
              <vs-dropdown vs-custom-content vs-trigger-click>
                <span>+ Add another sort</span>
                <vs-dropdown-menu ref="addAnotherSortDropdown">
                  <div class="spreadsheet-add-new-sort-menu">
                    <div
                      v-for="(column, index) in columnsOptions"
                      :key="index"
                      class="columns-list p-2 cursor-pointer"
                      @click.stop="handleAddColumnSort(column)"
                    >
                      <span>{{ column.name }}</span>
                    </div>
                  </div>
                </vs-dropdown-menu>
              </vs-dropdown>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpreadsheetSort',
  props: {
    subsheetId: {
      type: Number,
      required: true,
    },
    spreadsheetId: {
      type: Number,
      required: true,
    },
    columns: {
      type: Array,
    },
    sortSchemaData: {
      required: false,
    },
    sortingOptions: {
      /**
       * TODO: Clarify who altered the prop name and removed 2 options
       * The component is using the declaration below ,
       * the one from parent is modified and prop name altered
       */
      type: Array,
      default: () => [
        { text: 'A → Z', value: 'a' },
        { text: 'Z → A', value: 'd' },
        { text: 'Empty → Nonempty', value: 'en' },
        { text: 'Nonempty → Empty', value: 'ne' },
      ],
    },
  },
  async mounted() {
    this.setSortSchema(this.sortSchemaData);
  },
  data() {
    return {
      dropdown: false,
      columnsOptions: this.columns,
      sortingSchemaRawPayload: [
        /* Below structure shows the intended structure for sortingSchemaRawPayload
          {
            column: {
              * Column selected for first sort condition
            },
            sorting: {
              * Sorting selected for first sort condition
            }
          },
          {
            column: {
              * Column selected for 2nd sort condition
            },
            sorting: {
              * Sorting selected for 2nd sort condition
            }
          }
        */
      ],
    };
  },
  computed: {
    isSortExists() {
      return this.sortingSchemaRawPayload.length > 0;
    },
    columnIdMap() {
      return this.columns.reduce((acc, column) => {
        acc[column.id] = column;
        return acc;
      }, {});
    },
    sortingOptionsMap() {
      return this.sortingOptions.reduce((acc, option) => {
        acc[option.value] = option;
        return acc;
      }, {});
    },
  },
  methods: {
    setSortSchema(sortSchemaPayload = null) {
      /** Retain the null declaration above
       *  This method is called from parent via refs
       */
      const sortSchemaData = sortSchemaPayload || [];
      if (Object.keys(sortSchemaData).length > 0) {
        const columnIdMap = this.columnIdMap;
        const sortingOptionsMap = this.sortingOptionsMap;
        const sortingSchemaRawPayload = [];

        sortSchemaData.forEach((item) => {
          const { columnId, order } = item || {};
          if (columnId && order) {
            const colValue = columnIdMap[columnId];
            const orderVal = sortingOptionsMap[order];
            if (colValue && orderVal) {
              sortingSchemaRawPayload.push({
                column: colValue,
                sorting: orderVal,
              });
            }
          }
        });

        this.sortingSchemaRawPayload = sortingSchemaRawPayload;
      } else {
        this.sortingSchemaRawPayload = [];
      }
    },
    getSortColumnData() {
      if (
        this.sortingSchemaRawPayload &&
        this.sortingSchemaRawPayload.length > 0
      ) {
        return this.sortingSchemaRawPayload.map((ele, i) => {
          return {
            columnId: ele.column.id,
            order: ele.sorting.value,
            predefinedColumn: ele.column.predefinedColumn,
          };
        });
      }
      return [];
    },
    async updateSortSchemaPayload() {
      const sortColumn = this.getSortColumnData();
      this.$emit('handleSortSchema', sortColumn);
      return sortColumn;
    },
    handleAddColumnSort(column) {
      this.sortingSchemaRawPayload.push({
        column,
        sorting: this.sortingOptions[0],
      });
      this.$nextTick(() => {
        this.updateSortSchemaPayload();
        if (this.$refs.addAnotherSortDropdown) {
          this.$refs.addAnotherSortDropdown.dropdownVisible = false;
        }
      });
    },
    removeSort(index) {
      this.sortingSchemaRawPayload.splice(index, 1);
      this.$nextTick(() => {
        this.updateSortSchemaPayload();
      });
    },
    openSortDropDown() {
      this.dropdown = true;
    },
    closeSortDropDown() {
      this.dropdown = false;
    },
    toggleSortDropDown() {
      this.dropdown = !this.dropdown;
    },
  },
};
</script>

<style lang="scss" scoped>
.sort-dropdown {
  min-width: 200px;
  position: absolute;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  z-index: 1000;

  @media (max-width: 991px) {
    width: 90%;
  }

  .sort-content {
    background: #fff;
    position: relative;
    min-width: 500px;
  }

  .columns-list {
    padding: 4px;
    font-size: 12px;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background: #f8f8f8;
    }
  }

  .w-select {
    width: 200px !important;
  }
}

.sort-another-dropdown {
  min-width: 200px;
  position: absolute;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  z-index: 1000;

  @media (max-width: 991px) {
    width: 90%;
  }

  .sort-another-content {
    background: #fff;
    position: relative;
    min-width: 500px;
  }

  .columns-list {
    padding: 4px;
    font-size: 12px;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background: #f8f8f8;
    }
  }

  .w-select {
    width: 200px !important;
  }
}

.sorted-container {
  background: #fee2d5;
  padding: 2px 8px;
  border-radius: 3px;
  box-shadow: 0 0px 1px 0 rgb(0 0 0 / 6%), 0 0px 0px 0 rgb(0 0 0 / 8%);
}

.draggable-list-group {
  .draggable-list-group-item {
    .drag-handle {
      margin-top: 1.2rem;
      margin-left: 1rem;
      cursor: grab !important;
    }
    &.sortable-chosen {
      .drag-handle {
        cursor: grabbing !important;
      }
    }
  }
}
.spreadsheet-add-new-sort-menu {
  max-height: 300px;
  overflow: auto;
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
</style>
