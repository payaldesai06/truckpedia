<template>
  <div class="menu-board-view">
    <ControlBar
      :viewName="'board'"
      :selectedGroupBy="selectedGroupBy"
      :groupByOptions="groupByOptions"
      :viewMetaData="viewMetaData"
      :customFields="customFields"
      @updateView="updateView"
      @toggleDetailsView="toggleDetailsView"
    />
    <div class="mt-2 gap-4 draggable-row">
      <div
        class="vx-col draggable-col"
        v-for="(item, index) in viewData"
        :key="index"
      >
        <div class="">
          <h3 class="text-base opacity-75 ml-2">{{ item.label }}</h3>
          <vs-divider />
        </div>

        <div class="draggable-list">
          <draggable
            :list="item.records"
            group="items"
            class="p-2 space-y-4 overflow-y-auto draggable-item"
            :data-status="item.value"
            @change="$event => updateRecord($event, item)"
          >
            <!-- @change="updateRecord(item.value, $event)" -->
            <draggable-card
              v-for="(record, i) in item.records"
              :key="i"
              :data="record"
              :customFields="customFields"
              class="cursor-pointer"
              @click.native="toggleDetailsView(record.id)"
            />
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable multiline-ternary -->
<script>
import GroupBy from "../mixins/GroupBy";
export default {
  name: "BoardView",
  mixins: [GroupBy],
  components: {
    Draggable: () => import("vuedraggable"),
    DraggableCard: () => import("./DraggableCard"),
    ControlBar: () => import("./ControlBar"),
  },
  props: {
    customFields: {
      type: Array,
      default: () => [],
    },
    recordData: {
      type: Array,
      default: () => [],
    },
    viewMetaData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    /* Record Update Logic */
    toggleDetailsView(recordId) {
      this.$emit("toggleDetailsView", recordId);
    },
    updateView(data) {
      const payload = {
        boardMetaData: {
          ...data,
        },
      };
      this.$emit("updateView", payload);
    },
    updateRecord (event, item) {
      if (
        this.selectedGroupBy &&
        this.selectedGroupBy.type === 'singleSelect' &&
        event.added
      ) {
        const recordID = event.added.element.id
        const payload = {
          recordId: recordID,
          values: this.recordData
            .find((record) => record.id === recordID)
            .customFieldsData.map((field) => {
              if (field.fieldId === this.selectedGroupBy.id) {
                return {
                  ...field,
                  singleSelectValue: item.id || null
                }
              }

              return field
            })
        }

        this.$emit('update:Details', payload)
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.draggable-row {
  display: flex;
  width: 98%;
  margin: auto;
  overflow-y: hidden;
  overflow-x: visible;
  // @media (max-width: 1199px) {
  //   overflow-y: hidden;
  //   overflow-x: visible;
  // }
}
.draggable-col {
  background: var(--surface-b);
  border-radius: 1rem;
  padding-top: 1rem;
  flex: 1;
  height: 89vh;
  min-width: 240px;
  // @media (max-width: 768px) {
  //   min-width: 280px;
  // }
}

.draggable-item {
  height: calc(100vh - 165px);
}

/* width */
.draggable-list > ::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.draggable-list > ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #b3b3b3;
  border-radius: 10px;
  background: #f1f1f1;
}

/* Handle */
.draggable-list > ::-webkit-scrollbar-thumb {
  background: #b7b7b7;
  border-radius: 10px;
}

/* Handle on hover */
.draggable-list > ::-webkit-scrollbar-thumb:hover {
  background: #7a7a7a;
}

// Utility Classes
.h-fit-content {
  height: fit-content;
}
</style>
