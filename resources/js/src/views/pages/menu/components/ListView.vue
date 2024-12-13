<template>
  <div class="pt-0 menu-list-view">
    <ControlBar
      :viewName="'list'"
      :selectedGroupBy="selectedGroupBy"
      :groupByOptions="groupByOptions"
      :viewMetaData="viewMetaData"
      :customFields="customFields"
      @updateView="updateView"
      @toggleDetailsView="toggleDetailsView"
    />
    <section v-if="hasColumnToRender">
      <template v-for="(item, index) in viewData">
        <vx-card
          class="mt-2"
          :key="index"
          v-if="item.id == 0 ? ((item || {}).records || []).length : true"
        >
          <div class="flex items-center">
            <vs-icon
              class="mr-1 cursor-pointer"
              size="18px"
              :icon="isCollapsed[index] ? 'expand_more' : 'expand_less'"
              @click="() => (isCollapsed[index] = !isCollapsed[index])"
            />
            <strong
              color="primary"
              size="small"
              @click="() => (isCollapsed[index] = !isCollapsed[index])"
            >
              <label class="text-md font-semibold" v-text="item.label" />
            </strong>
            <small transparent color="primary" class="ml-2">
              <span> {{ ((item || {}).records || []).length }} items </span>
            </small>
          </div>
          <div v-if="!isCollapsed[index]" class="overflow-auto">
            <table class="list-table">
              <thead>
                <draggable
                  :list="customFieldsToRender"
                  @change="updateRecordOrder($event)"
                  tag="tr"
                >
                  <th
                    v-for="(customField, index) in customFieldsToRender"
                    :key="index"
                    class="cursor-move"
                  >
                    {{ customField.name }}
                  </th>
                </draggable>
              </thead>
              <tbody>
                <tr
                  v-for="(recordList, i) in item.records"
                  :key="i"
                  @click.stop="toggleDetailsView(recordList.id)"
                >
                  <template
                    v-for="(record, ix) in recordList.customFieldsData.filter(
                      (x) => x.isRender
                    )"
                  >
                    <td v-if="record.isRender" :key="ix">
                      <template v-if="record.userData">
                        <vs-chip
                          v-for="(user, index) in record.userData"
                          :key="index"
                          :class="[{ 'ml-1': index > 0 }]"
                          transparent
                          color="primary"
                          v-primeVueTooltip.top="user.fullName"
                        >
                          {{ user.tag }}
                        </vs-chip>
                      </template>
                      <template v-else-if="record.filesValue">
                        <div class="flex p-1">
                          <div
                            v-for="(extension, index) in getFileExtensions(
                              record.filesValue
                            )"
                            :key="index"
                          >
                            <label class="text-md">
                              {{
                                index < record.filesValue.length - 1 &&
                                index < fileExtensionLimit
                                  ? `${extension},&nbsp;`
                                  : extension
                              }}
                            </label>
                          </div>
                        </div>
                      </template>
                      <template v-else-if="record.singleSelectValue">
                        <vs-chip 
                          :color="record.color"
                          :style="generateTextColor(record.color)"
                        >
                          {{ record.textValue }}
                        </vs-chip>
                      </template>
                      <template v-else-if="record.multiSelectValues">
                        <div class="flex">
                          <div
                            v-for="option in record.multiSelectValues.slice(0, 3)"
                            :key="option.optionId"
                          >
                            <vs-chip 
                              class="w-max"
                              :color="option.color"
                              :style="generateTextColor(option.color)"
                            >
                              {{ option.optionName }}
                            </vs-chip>
                          </div>
                          <div
                            v-if="record.multiSelectValues.length > 3"
                            class="flex items-center"
                          >
                            <vs-chip class="w-max custom-icon-size">
                              <vs-avatar icon="add" />
                              {{ record.multiSelectValues.length - 3 }} more
                            </vs-chip>
                          </div>
                        </div>
                      </template>
                      <template v-else-if="!isNaN(record.numberValue)">
                        <span>
                        {{ record.numberValue }}
                      </span>
                      </template>
                      <span v-else>
                        {{ record.textValue }}
                      </span>
                    </td>
                  </template>
                </tr>
              </tbody>
            </table>
          </div>
        </vx-card>
      </template>
    </section>
    <!-- <section v-else-if="mountComplete">
      <Transition>
        <vx-card v-if="mountComplete">
          <div id="no-record-holder">
            <span style="color: red;">No columns to render.</span>
            <br>
            <span>
              Chose columns to render from <span v-tooltip="'[Show] button at top left'">show</span>
            </span>
          </div>
        </vx-card>
      </Transition>
    </section> -->
  </div>
</template>

<!-- eslint-disable multiline-ternary nonblock-statement-body-position -->
<script>
import GroupBy from "../mixins/GroupBy";
import { isEmpty } from 'lodash'
import { generateTextColor } from "@/config/helpers.js";

export default {
  name: "ListView",
  mixins: [GroupBy],
  components: {
    ControlBar: () => import("./ControlBar"),
  },
  props: {
    title: {
      type: String,
      default: "",
    },
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
    fetchingData: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    sortedCustomFields () {
      if (!isEmpty(this.viewMetaData)) {
        const fields = this.customFields.map((item) => {
          if (
            this.viewMetaData &&
            this.viewMetaData.show &&
            this.viewMetaData.show.columns
          )
            this.viewMetaData.show.columns.forEach((column) => {
              if (column.customFieldId === item.id) {
                item.order = column.order
              }
            })

          return item
        })

        return fields.sort((a, b) => a.order - b.order)
      }

      return this.customFields
    },
    hasColumnToRender() {
      const { show } = this.viewMetaData|| {};
      const { columns } = show || {};
      return (columns || []).length > 0;
    },
  },
  mounted() {
    this.confirmDataFetch();
  },
  data() {
    return {
      isCollapsed: {},
      fileExtensionLimit: 2,
      mountComplete: false,
    };
  },
  watch: {
    viewData: {
      handler(val) {
        Object.keys(val).map((key) => {
          const res = this.isCollapsed[key] || false;
          this.$set(this.isCollapsed, key, res);
        }, {});
      },
      immediate: true,
    },
  },
  methods: {
    toggleDetailsView(recordId) {
      this.$emit("toggleDetailsView", recordId);
    },
    updateView(data) {
      const payload = {
        listMetaData: {
          ...data,
        },
      };
      this.$emit("updateView", payload);
    },
    updateRecordOrder (record) {
      if (!isEmpty(record)) {
        const {
          moved: {
            element: { id },
            newIndex,
            oldIndex
          }
        } = record

        const sortedList = this.viewMetaData.show.columns.sort(
          (a, b) => a.order - b.order
        )

        const movedItem = sortedList.splice(oldIndex, 1)[0]
        sortedList.splice(newIndex, 0, movedItem)

        sortedList.map((item, index) => {
          item.order = index + 1
        })

        const payload = {
          listMetaData: {
            ...this.viewMetaData,
            show: {
              columns: sortedList
            }
          }
        }

        this.$emit('updateView', payload)
      }
    },
    generateTextColor(color) {
      return generateTextColor(color);
    },
    confirmDataFetch() {
      if (!this.fetchingData) {
        this.mountComplete = true;
      } else {
        // this.confirmDataFetch();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// Utility classes
.w-97 {
  width: 97%;
}

.text-gray {
  color: #9e9e9e;
}

.list-table {
  width: 100%;
  margin-top: 20px;
  border-collapse: separate;
  border-spacing: 0 0.2em;
  th {
    padding: 10px 5px;
    color: #87909e;
    font-weight: 500;
    width: 150px;
    min-width: 150px;
  }
  tr {
    width: 150px;
    min-width: 150px;
    box-shadow: 0px 2px 2px 0px #f0f1f8;
    cursor: pointer;
    td {
      padding: 10px 5px;
    }
    background-color: #ffffff;
    border: 1px solid #f0f1f8;
  }
}

::v-deep {
  .custom-icon-size {
    .material-icons {
      font-size: 1.8rem;
    }
  }
}

.w-max {
  width: max-content;
}
</style>
