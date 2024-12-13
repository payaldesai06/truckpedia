<template>
  <thead ref="dropdownParentNode">
    <tr>
      <th
        v-for="item in headerList"
        :key="item.id"
        :style="`max-width:${item.width}px; width: ${item.width}px`"
        :columnId="item.id"
        @dragstart="dragStart(item)"
        @dragenter.prevent
        @dragover.prevent
        @drop="dropDown(item)"
        draggable
      >
        <div class="flex items-center justify-between">
          <span>
            {{ item.name }}
          </span>
          <div
            class="header-dropdown"
            v-if="item.id !== 0 && isSortSupported(item)"
          >
            <vs-dropdown
              :ref="`filterDropdown_${item.id}`"
              vs-custom-content
              vs-trigger-click
              class="cursor-pointer"
            >
              <div class="text-right">
                <vs-icon icon="arrow_drop_down" />
              </div>
              <vs-dropdown-menu class="dropdown-items">
                <template>
                  <vs-dropdown-item
                    v-for="({ value, text }, index) in sortingOptions"
                    :key="index"
                  >
                    <div
                      class="cursor-pointer flex items-center dropdown-item-hover"
                      @click="selectSortOrder(item, value)"
                    >
                      <vs-icon
                        size="14px"
                        icon="check"
                        :class="{
                          'opacity-0': !isSorted(item, value),
                        }"
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
    columnTypesForSorting: {
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

      return [{ id: 0, name: '#', width: 30, isFixed: true }, ...headers];
    },
    isSortSupported() {
      return ({ type }) => {
        return this.columnTypesForSorting.includes(type);
      };
    },
    isSorted() {
      return ({ customFieldId }, sortOrder) => {
        if (!customFieldId || !sortOrder) {
          return false;
        }

        return (
          this.sortSchemaData &&
          this.sortSchemaData.length &&
          this.sortSchemaData[0].field === customFieldId &&
          this.sortSchemaData[0].sortOrder === sortOrder
        );
      };
    },
  },
  methods: {
    checkMove({ draggedContext }) {
      return (
        !this.headerList[draggedContext.futureIndex].isFixed &&
        !draggedContext.element.isFixed
      );
    },
    dragStart(item) {
      this.dragStartOrder = item;
    },
    dropDown(item) {
      this.dragEndOrder = item;
      if (this.dragStartOrder.order !== this.dragEndOrder.order) {
        this.$emit('updateRecordOrder', {
          moved: {
            element: this.dragStartOrder,
            newIndex: this.dragEndOrder.order,
            oldIndex: this.dragStartOrder.order,
          },
        });
      }
    },
    selectSortOrder(column, sortOrder) {
      const { customFieldId } = column;

      if (this.isSorted(column, sortOrder) || !customFieldId || !sortOrder) {
        return;
      }

      this.$emit('handleSortSchema', [
        {
          field: customFieldId,
          sortOrder,
        },
      ]);
    },
  },
};
</script>

<style lang="scss" scoped>
$borderColor: #e9ebf0;
thead {
  background: #fafbfc;
  border-bottom-color: #e9ebf0;
  tr {
    th {
      border: 1px solid $borderColor;
      padding: 4px 16px;
      position: relative;
      overflow: hidden;
      white-space: nowrap;
      color: #87909e;
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
