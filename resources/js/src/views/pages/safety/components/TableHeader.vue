<template>
  <thead ref="dropdownParentNode">
    <tr>
      <th
        v-for="(item, index) in headerList"
        :key="item.id"
        :style="`max-width:${item.width}px; width: ${item.width}px`"
        :columnId="item.id"
        @dragstart="dragStart(item, index)"
        @dragenter.prevent
        @dragover.prevent
        @drop="dropDown(item, index)"
        draggable
      >
        <div class="flex items-center justify-between">
          <span>
            {{ item.label }}
          </span>
          <div class="header-dropdown" v-if="item.id !== 0">
            <vs-dropdown
              :ref="`filterDropdown_${item.id}`"
              vs-custom-content
              vs-trigger-click
              class="cursor-pointer"
            >
              <div class="text-right">
                <vs-icon icon="arrow_drop_down" />
              </div>

              <vs-dropdown-menu class="dropdown-items" style="min-width: 130px">
                <template>
                  <vs-dropdown-item
                    v-for="({ value, text }, index) in sortingOptions"
                    :key="index"
                  >
                    <div
                      class="cursor-pointer flex items-center dropdown-item-hover"
                      @click="
                        $emit('handleSortSchema', [
                          {
                            field: item.colId,
                            sortOrder: value,
                          },
                        ])
                      "
                    >
                      <vs-icon
                        size="14px"
                        icon="check"
                        :class="{ 'opacity-0': !isSorted(item.colId, value) }"
                      />
                      <p class="ml-1 text-sm">Sort {{ text }}</p>
                    </div>
                  </vs-dropdown-item>
                </template>
              </vs-dropdown-menu>
            </vs-dropdown>
          </div>
        </div>
      </th>
    </tr>
  </thead>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  components: {
    draggable,
  },
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    sortingOptions: {
      type: Array,
      default: () => [
        { text: 'A → Z', value: 'a' },
        { text: 'Z → A', value: 'd' },
        { text: 'Empty → Nonempty', value: 'en' },
        { text: 'Nonempty → Empty', value: 'ne' },
      ],
    },
    sortSchemaData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      dragStartOrder: null,
      dragEndOrder: null,
    };
  },
  computed: {
    headerList() {
      const headers = this.headers.map((item) => {
        return {
          ...item,
          isFixed: false,
        };
      });

      return [{ id: 0, label: '#', width: 45, isFixed: true }, ...headers];
    },
    isSorted() {
      return (field, sortOrder) => {
        return (
          this.sortSchemaData &&
          this.sortSchemaData.length &&
          this.sortSchemaData[0].field === field &&
          this.sortSchemaData[0].sortOrder === sortOrder
        );
      };
    },
  },
  methods: {
    dragStart(item, index) {
      if (item.isFixed || index === 0) return;
      this.dragStartOrder = index;
    },
    dropDown(item, index) {
      if (item.isFixed || index === 0 || this.dragStartOrder == null) return;

      this.dragEndOrder = index;
      if (this.dragStartOrder !== this.dragEndOrder) {
        this.$emit('updateRecordOrder', {
          dropIndex: this.dragEndOrder,
          dragIndex: this.dragStartOrder,
        });
      }

      this.dragStartOrder = null;
      this.dragEndOrder = null;
    },
  },
};
</script>

<style lang="scss" scoped>
$borderColor: #e9ebf0;
thead {
  background: #f5f5f5;
  border-bottom-color: #e9ebf0;
  tr {
    th {
      border: 1px solid $borderColor;
      padding: 4px 16px;
      position: relative;
      overflow: hidden;
      white-space: nowrap;
      color: hsl(0, 0%, 10%);
      font-weight: 500;
      font-size: 10px;
      text-transform: uppercase;
      -moz-text-overflow: ellipsis;
      -ms-text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
    }
  }
}

.cursor-pointer {
  cursor: pointer;
}
</style>
<style>
.handleResizeble {
  top: 4px;
  right: 0;
  bottom: 0;
  width: 3px;
  height: 30px;
  position: absolute;
  cursor: ew-resize;
}
.handleResizeble:hover,
.handleResizeble:active {
  background-color: #2d7ff9;
  border-radius: 2px;
}
</style>
