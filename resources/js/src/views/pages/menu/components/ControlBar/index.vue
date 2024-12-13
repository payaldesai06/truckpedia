<template>
  <div class="controls-bar">
    <section class="left-block">
      <div class="create-record">
        <vs-button
          color="primary"
          size="small"
          @click="toggleDetailsView({})"
          icon="add"
        >
          New
        </vs-button>
      </div>
    </section>
    <section class="right-block">
      <slot></slot>
      <div class="group-by ml-2" v-if="viewName !== 'gantt'">
        <vs-dropdown vs-trigger-click>
          <vs-button
            class="btn-drop cursor-pointer"
            color="primary"
            icon="expand_more"
            size="small"
            icon-after
          >
            <span v-if="viewName === 'gantt'"> Dates Criteria </span>
            <span v-else> Group By </span>
            <span v-if="selectedGroupBy.name">
              : {{ selectedGroupBy.name }}
            </span>
          </vs-button>
          <vs-dropdown-menu>
            <vs-dropdown-item
              v-for="item in groupByOptions"
              :key="item.id"
              :disabled="item.isDisabled"
              @click="updateGroupBy(item)"
            >
              {{ item.name }}
            </vs-dropdown-item>
          </vs-dropdown-menu>
        </vs-dropdown>
      </div>
      <div class="show-column ml-2" v-if="viewName !== 'board'">
        <vs-button
          class="btn-drop cursor-pointer"
          color="primary"
          icon="expand_more"
          size="small"
          icon-after
          @click="toggleShowColumnPanel"
        >
          <span> Show </span>
        </vs-button>
        <OverlayPanel
          ref="showColumnCtrl"
          appendTo="body"
          id="show_column_overlay_panel"
          style="width: 200px; padding: 0"
        >
          <div class="show_colum_overlay_controls">
            <vs-button
              color="danger"
              type="line"
              size="small"
              @click="setColumOptions"
            >
              Reset
            </vs-button>
            <vs-button
              type="line"
              size="small"
              color="primary"
              @click="updateColumnSelections"
            >
              Save
            </vs-button>
          </div>
          <draggable
            tag="ul"
            :list="columSelections"
            group="items"
            class="list-group"
          >
            <li
              class="list-group-item"
              v-for="(item, idx) in columSelections"
              :key="item.name + idx"
              :class="{
                disabled:
                  viewName === 'gantt' &&
                  selectionRecordDetails.length > 0 &&
                  !selectionRecordDetails.ids.includes(item.id),
              }"
            >
              <span class="text">{{ item.name }} </span>
              <vs-checkbox v-model="columSelections[idx].selected" />
            </li>
          </draggable>
        </OverlayPanel>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MeuViewControlBar",
  components: {
    Draggable: () => import("vuedraggable"),
  },
  props: {
    viewName: {
      type: String,
      required: true,
      default: "",
    },
    selectedGroupBy: {
      type: Object,
      required: true,
      default: () => {},
    },
    viewMetaData: {
      type: Object,
      required: true,
      default: () => {},
    },
    groupByOptions: {
      type: Array,
      required: true,
      default: () => [],
    },
    customFields: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      columSelections: [],
    };
  },
  watch: {
    viewMetaData: {
      handler() {
        this.setColumOptions();
      },
      immediate: true,
      deep: true,
    },
  },
  computed: {
    selectionRecordDetails() {
      const selected = this.columSelections.filter((item) => item.selected);
      return {
        length: selected.length,
        ids: selected.map((item) => item.id),
      };
    },
  },
  methods: {
    toggleDetailsView(data) {
      this.$emit("toggleDetailsView", data);
    },
    toggleShowColumnPanel(event) {
      this.setColumOptions();
      this.$refs.showColumnCtrl.toggle(event);
    },
    setColumOptions() {
      const generateNewArray = (viewMetaData, customFields) => {
        const { columns } = (viewMetaData || {}).show || {};
        if (columns && columns.length > 0) {
          const customFieldsMap = customFields.reduce((acc, item) => {
            acc[item.id] = item;
            return acc;
          }, {});
          const columnsSelected = (columns || [])
            .map((item) => ({
              ...customFieldsMap[item.customFieldId],
              ...item,
              selected: true,
            }))
            .sort((a, b) => a.order - b.order);
          const selectedColumnIds = columnsSelected.map((item) => item.id);
          const unSelectedColumns = customFields
            .filter((item) => !selectedColumnIds.includes(item.id))
            .map((item) => ({
              ...item,
              selected: false,
            }));
          return [...columnsSelected, ...unSelectedColumns];
        }
        return customFields.map((item) => {
          return {
            ...item,
            selected: false,
          };
        });
      };
      this.columSelections = generateNewArray(
        this.viewMetaData,
        this.customFields
      );
    },
    updateColumnSelections() {
      const payload = {
        show: {
          columns: this.columSelections
            .filter((x) => x.selected)
            .map((item, index) => ({
              customFieldId: item.id,
              order: index + 1,
            })),
        },
      };
      this.$emit("updateView", payload);
      this.$refs.showColumnCtrl.hide();
    },
    updateGroupBy({ id }) {
      if (id == null || id == undefined) return;
      const payload = {
        groupBy: {
          firstLevel: {
            customFieldId: id === 0 ? null : id,
          },
        },
      };
      this.$emit("updateView", payload);
    },
  },
};
</script>

<style lang="scss" scoped>
.controls-bar {
  position: relative;
  width: 100%;
  min-height: 40px;
  max-height: 40px;
  z-index: 5;
  background: rgb(255, 255, 255);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1333333333);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  min-width: 0;
  padding: 0 1.2rem;
  .left-block {
    display: flex;
    align-items: center;
  }
  .right-block {
    display: flex;
    align-items: center;
  }
}
#show_column_overlay_panel {
  ::v-deep {
    .p-overlaypanel-content {
      padding: 0;
    }
    .vs-button {
      border-bottom: none;
    }
  }
  .show_colum_overlay_controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    border-bottom: 1px solid #f0f1f8;
  }
  .list-group {
    max-height: 50vh;
    overflow: auto;
    .list-group-item {
      width: 100%;
      padding: 10px;
      min-width: 150px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 30px;
      align-items: center;
      &.disabled {
        pointer-events: none;
        opacity: 0.6;
      }
      &:hover {
        color: var(--primary-color);
      }
      .text {
        margin-left: 5px;
        word-wrap: break-word;
        max-width: 75%;
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
        cursor: default;
      }
      &:hover {
        background-color: #f0f1f3;
      }
    }
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