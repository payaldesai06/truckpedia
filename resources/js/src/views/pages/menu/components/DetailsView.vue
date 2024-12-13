<template>
  <Dialog
    class="dialog"
    :visible="isPromptActive"
    :closable="false"
    :modal="true"
    :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
    :style="{ width: '40vw' }"
    :contentStyle="{ overflow: 'auto', padding: '2px 70px 30px' }"
  >
    <!-- Header Section -->
    <template #header>
      <div class="w-full flex items-center justify-between">
        <div class="w-full flex justify-between border-right">
          <div class="flex self-center" v-if="false">
            <vs-icon
              :class="[
                'mr-1',
                previousIconVisible
                  ? 'color-gray cursor-pointer'
                  : 'color-lightgray',
              ]"
              icon="arrow_back_ios"
              size="small"
              @click="previousIconVisible ? $emit('prev') : ''"
            />
            <vs-icon
              :class="[
                'ml-1',
                nextIconVisible
                  ? 'color-gray cursor-pointer'
                  : 'color-lightgray',
              ]"
              icon="arrow_forward_ios"
              size="small"
              @click="nextIconVisible ? $emit('next') : ''"
            />
          </div>
          <div class="flex self-center" v-else />
          <div>
            <vs-dropdown
              v-if="showNavigation"
              v-show="deleteDetailsDropdown"
              class="cursor-pointer mr-2"
              vs-custom-content
              vs-trigger-click
            >
              <vs-icon icon="more_horiz" />
              <vs-dropdown-menu>
                <div
                  class="m-2 flex items-center cursor-pointer hover:text-primary"
                  @click="deleteDetails"
                >
                  <vs-icon icon="delete" size="small" />
                  <label class="cursor-pointer ml-2" v-text="'Delete'" />
                </div>
              </vs-dropdown-menu>
            </vs-dropdown>
            <!-- <vs-icon v-else class="cursor-pointer mr-2" icon="more_horiz" /> -->
          </div>
        </div>
        <div class="ml-4 self-end">
          <vs-icon
            class="cursor-pointer"
            icon="close"
            size="small"
            @click="$emit('toggleDialog')"
          />
        </div>
      </div>
    </template>

    <!-- Body Section -->
    <div class="w-full mt-4">
      <div v-for="(customField, index) in customFields" :key="index">
        <template>
          <div class="details-view">
            <div class="label">
              <label v-text="customField.name" />
            </div>
            <div class="detail-input">
              <!-- Single select  -->
              <div
                class="w-full flex items-center"
                v-if="customField.type === 'singleSelect'"
              >
                <!-- <div class="w-1/4">
              <label class="font-semibold" v-text="'Status'" />
            </div> -->
                <div class="w-full">
                  <Dropdown
                    class="w-full"
                    v-model="form[customField.id]"
                    :options="customField.singleSelectOptions"
                    optionLabel="optionName"
                    optionValue="optionId"
                    showClear
                    :placeholder="`Select a ${customField.name}`"
                  >
                    <template #value="slotProps">
                      <div class="flex" v-if="slotProps.value">
                        <vs-chip
                          :color="
                            getOptionColor(
                              slotProps.value,
                              customField.singleSelectOptions
                            )
                          "
                          :style="
                            getOptionColor(
                              slotProps.value,
                              customField.singleSelectOptions
                            )
                              ? generateTextColor(
                                  getOptionColor(
                                    slotProps.value,
                                    customField.singleSelectOptions
                                  )
                                )
                              : ''
                          "
                        >
                          {{
                            getOptionName(
                              slotProps.value,
                              customField.singleSelectOptions
                            )
                          }}
                        </vs-chip>
                      </div>
                      <label v-else class="text-gray-400">
                        {{ slotProps.placeholder }}
                      </label>
                    </template>
                    <template #option="{ option: { optionName, color } }">
                      <div class="flex">
                        <vs-chip
                          :color="color || ''"
                          :style="color ? generateTextColor(color) : ''"
                        >
                          {{ optionName }}
                        </vs-chip>
                      </div>
                    </template>
                  </Dropdown>
                </div>
              </div>
              <!-- User type  -->
              <div
                class="w-full flex items-center"
                v-else-if="customField.type === 'user'"
              >
                <!-- <div class="w-1/4">
              <label class="font-semibold" v-text="'Status'" />
            </div> -->
                <div class="w-full">
                  <Multiselect
                    class="w-full"
                    v-model="form[customField.id]"
                    :placeholder="`Select ${customField.name}`"
                    :show-labels="false"
                    track-by="id"
                    label="fullName"
                    :multiple="true"
                    :options="allUsers"
                    :allow-empty="true"
                    :closeOnSelect="false"
                  >
                  </Multiselect>
                </div>
              </div>
              <!-- Date field  -->
              <div
                class="w-full flex items-center"
                v-else-if="customField.type === 'date'"
              >
                <!-- <div class="w-1/4">
              <label class="font-semibold" v-text="'Status'" />
            </div> -->
                <div class="w-full">
                  <CustomDateTimeSelector
                    class="menu-detailsview-date-input"
                    :dateValue="form[customField.id].utcDateOnly"
                    :timeValue="form[customField.id].utcTimeOnly"
                    @input:Date="updateDate($event, customField.id)"
                    @input:Time="updateTime($event, customField.id)"
                  />
                </div>
              </div>
              <!-- Date with out timezone  -->
              <div
                class="w-full flex items-center"
                v-else-if="customField.type === 'dateNoTz'"
              >
                <div class="w-full">
                  <CustomDateTimeSelector
                    class="menu-detailsview-date-input"
                    :dateValue="form[customField.id].localDateOnly"
                    :timeValue="form[customField.id].localTimeOnly"
                    :convertToUTC="false"
                    @input:Date="updateDate($event, customField.id, true)"
                    @input:Time="updateTime($event, customField.id, true)"
                  />
                </div>
              </div>
              <!-- Files type  -->
              <div
                class="w-full flex items-center"
                v-else-if="customField.type === 'files'"
              >
                <div class="vx-col w-full" id="file-input">
                  <vx-input-group>
                    <div
                      class="vs-component vs-con-input-label vs-input w-full vs-input-primary"
                    >
                      <div class="vs-con-input">
                        <input
                          type="file"
                          class="vs-inputx vs-input--input normal hasValue"
                          :ref="`fileUpload-${customField.id}`"
                          multiple
                          @change="fileSelected($event, customField.id)"
                        />
                      </div>
                    </div>
                  </vx-input-group>
                </div>
              </div>
              <!-- Number Type  -->
              <div class="w-full" v-else-if="customField.type === 'number'">
                <vs-input
                  class="w-full number-field"
                  :class="{
                    hasInput: typeof form[customField.id] === 'number',
                  }"
                  v-model.number="form[customField.id]"
                  :placeholder="`Enter ${customField.name}`"
                  type="number"
                  color="primary"
                  @wheel="$event.target.blur()"
                />
              </div>
              <!-- Currency Type  -->
              <div class="w-full" v-else-if="customField.type === 'currency'">
                <vs-input
                  class="w-full number-field number-field-icon"
                  :class="{
                    hasInput: typeof form[customField.id] === 'number',
                  }"
                  v-model.number="form[customField.id]"
                  :placeholder="`Enter ${customField.name}`"
                  icon-no-border
                  icon="attach_money"
                  type="number"
                  color="primary"
                  @wheel="$event.target.blur()"
                />
              </div>
              <!-- Multiselect Dropdown  -->
              <div
                class="flex items-center"
                style="width: calc(100% - 21px)"
                v-else-if="customField.type === 'multiSelect'"
              >
                <div class="w-full">
                  <MultiSelect
                    class="w-full custom-multiselect"
                    v-model="form[customField.id]"
                    :options="customField.multiSelectOptions"
                    :filter="true"
                    scrollHeight="150px"
                    optionLabel="optionName"
                    optionValue="optionId"
                    placeholder="Select options"
                  >
                    <template #value="slotProps">
                      <div
                        class="flex"
                        v-if="slotProps.value && slotProps.value.length"
                      >
                        <div
                          v-for="(option, index) of slotProps.value"
                          :key="index"
                        >
                          <vs-chip
                            :color="
                              getOptionColor(
                                option,
                                customField.multiSelectOptions
                              )
                            "
                            :style="
                              getOptionColor(
                                option,
                                customField.multiSelectOptions
                              )
                                ? generateTextColor(
                                    getOptionColor(
                                      option,
                                      customField.multiSelectOptions
                                    )
                                  )
                                : ''
                            "
                          >
                            {{
                              getOptionName(
                                option,
                                customField.multiSelectOptions
                              )
                            }}
                          </vs-chip>
                        </div>
                      </div>
                      <label v-else class="text-gray-400">
                        {{ slotProps.placeholder }}
                      </label>
                    </template>
                    <template #option="{ option: { optionName, color } }">
                      <div class="flex">
                        <vs-chip
                          :color="color || ''"
                          :style="color ? generateTextColor(color) : ''"
                        >
                          {{ optionName }}
                        </vs-chip>
                      </div>
                    </template>
                  </MultiSelect>
                </div>
              </div>
              <!-- Record Link type  -->
              <div
                class="flex items-center"
                style="width: calc(100% - 21px)"
                v-else-if="customField.type === 'recordLink'"
              >
                <div
                  v-if="form[customField.id] && form[customField.id].length"
                  class="w-full"
                >
                  <div
                    class="p-2 border-2 rounded mb-2 flex w-full justify-between flex-wrap"
                    v-for="record in form[customField.id]"
                    :key="record.recordId"
                  >
                    <div
                      v-for="(rec, index) in record.recordData"
                      :key="index"
                      :class="[
                        index === 0 || !(record.recordData.length > 2)
                          ? 'w-full'
                          : `w-1/${record.recordData.length - 1}`,
                      ]"
                    >
                      <div
                        class="w-full flex items-center justify-between"
                        v-if="index === 0"
                      >
                        <vs-chip
                          v-if="rec.type === 'singleSelect'"
                          class="w-max text-ellipsis"
                          :color="rec.color ? rec.color : ''"
                          :style="rec.color ? generateTextColor(rec.color) : ''"
                        >
                          {{ rec.value || "" }}
                        </vs-chip>
                        <label v-else class="font-semibold text-ellipsis">
                          {{ rec.value || "" }}
                        </label>
                        <vs-icon
                          class="cursor-pointer"
                          icon="close"
                          @click.stop="
                            deleteLinkedRecord(customField.id, record.recordId)
                          "
                        />
                      </div>
                      <div
                        class="flex flex-col w-full mt-2"
                        v-else-if="index > 0"
                      >
                        <label class="text-xs">{{ rec.name }}</label>
                        <vs-chip
                          v-if="rec.type === 'singleSelect'"
                          class="w-max text-ellipsis"
                          :color="rec.color ? rec.color : ''"
                          :style="rec.color ? generateTextColor(rec.color) : ''"
                        >
                          {{ rec.value || "" }}
                        </vs-chip>
                        <label v-else class="text-ellipsis">
                          {{ rec.value || "" }}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <vs-button
                  v-if="!form[customField.id].length"
                  class="p-1 text-sm"
                  color="primary"
                  type="border"
                  icon="add"
                  @click.stop="toggleRecordLinkDialog(customField.id)"
                >
                  Add Record
                </vs-button>
              </div>
              <!-- Roll Up or Formula - Disabled Input  -->
              <input
                v-else
                class="w-full custom-input"
                v-model="form[customField.id]"
                :disabled="
                  customField.type === 'rollup' ||
                  customField.type === 'formula'
                "
                :placeholder="generatePlaceholder(customField)"
                type="filled"
                color="primary"
              />
              <vs-dropdown
                class="cursor-pointer ml-2"
                vs-custom-content
                vs-trigger-click
                v-if="editColumnName"
              >
                <vs-icon icon="more_horiz" />
                <vs-dropdown-menu>
                  <vs-dropdown-item>
                    <div
                      class="m-2 flex items-center cursor-pointer hover:text-primary"
                      @click.stop="$emit('editField', customField.id)"
                    >
                      <vs-icon icon="edit" size="small" />
                      <label class="cursor-pointer ml-2" v-text="'Edit'" />
                    </div>
                  </vs-dropdown-item>
                  <vs-dropdown-item v-if="!customField.level">
                    <div
                      class="m-2 flex items-center cursor-pointer hover:text-primary"
                      @click.stop="initDeletePrompt(customField.id)"
                    >
                      <vs-icon icon="delete" size="small" />
                      <label class="cursor-pointer ml-2" v-text="'Delete'" />
                    </div>
                  </vs-dropdown-item>
                </vs-dropdown-menu>
              </vs-dropdown>
            </div>
          </div>
        </template>
        <template
          v-if="customField.type === 'files' && form[customField.id].length > 0"
        >
          <div class="files-list-container">
            <div class="w-full" />
            <Files
              class="height-170 overflow-x-auto border-gray rounded p-2 mt-2 files-list"
              :fileList="form[customField.id]"
              @deleteFile="deleteFile($event, customField.id)"
            />
            <div class="width-28" />
          </div>
        </template>

        <!-- <template v-else>
        <div class="w-full flex items-center mt-2">
        <div class="w-1/4">
          <label class="font-semibold" v-text="'Status'" />
        </div>
        <div class="w-full">
          <Dropdown
            class="w-full"
            v-model="form.status"
            :options="statusList"
            optionLabel="label"
            optionValue="value"
            :filter="true"
          >
            <template #value="{ value }">
              <div class="flex" v-if="value">
                <vs-chip :color="getStatusColor(value)">
                  {{ getStatusLabel(value) }}
                </vs-chip>
              </div>
              <label v-else class="text-gray-400">Select Status</label>
            </template>
            <template #option="{ option: { label, value } }">
              <div class="flex">
                <vs-chip :color="getStatusColor(value)">{{ label }}</vs-chip>
              </div>
            </template>
          </Dropdown>
        </div>
      </div>
      </template> -->
      </div>

      <!-- <div class="w-full flex items-center mt-2">
        <div class="w-1/4">
          <label class="font-semibold" v-text="'Assignee'" />
        </div>
        <div class="w-full">
          <Dropdown
            class="w-full"
            v-model="form.assignee"
            :options="userList"
            optionLabel="name"
            optionValue="name"
            :filter="true"
          >
            <template #value="{ value }">
              <div class="flex" v-if="value">
                <vs-chip>
                  <vs-avatar :text="value" />
                  {{ value }}
                </vs-chip>
              </div>
              <label v-else class="text-gray-400">Select User</label>
            </template>
            <template #option="{ option: { name } }">
              <div class="flex">
                <vs-avatar :text="name" />
                <div class="ml-2 self-center">
                  <label>{{ name }}</label>
                </div>
              </div>
            </template>
          </Dropdown>
        </div>
      </div> -->
      <div class="w-full flex items-center mt-5" v-if="addNewField">
        <div class="w-1/4">
          <label
            class="cursor-pointer hover:text-primary text-sm"
            v-text="'+ Add new field'"
            @click.stop="$emit('toggleFieldDialog')"
          />
        </div>
      </div>
    </div>

    <!-- Footer Section -->
    <template #footer>
      <div class="w-full mt-4">
        <div class="w-1/3 flex ml-auto">
          <vs-button class="w-full" color="primary" @click.stop="saveDetails">
            Save
          </vs-button>
          <vs-button
            class="w-full mr-0"
            color="primary"
            type="border"
            @click.stop="$emit('toggleDialog')"
          >
            Cancel
          </vs-button>
        </div>
      </div>
    </template>

    <!-- Delete Prompt -->
    <DeletePrompt
      v-if="deletePrompt.isActive"
      :isPromptActive="deletePrompt.isActive"
      :label="'Do you want to delete this field?'"
      @onAccept="deleteField"
      @onClose="closeDeletePrompt"
    />

    <!-- Record Link Dialog -->
    <RecordLinkDialog
      v-if="recordLinkDialog.isActive"
      :isDialogActive="recordLinkDialog.isActive"
      :recordList="recordList"
      :selectedFieldId="recordLinkDialog.selectedFieldId"
      @onClose="closeRecordLinkDialog"
      @onSelect="linkRecord"
      @searchLinkedRecords="searchLinkedRecords"
    />
  </Dialog>
</template>
<!-- eslint-disable multiline-ternary nonblock-statement-body-position implicit-arrow-linebreak -->
<script>
import { isEmpty } from "lodash";
import { mapGetters } from "vuex";
import { generateTextColor } from "@/config/helpers.js";

export default {
  name: "DetailsView",
  components: {
    CustomDateTimeSelector: () => import("@/components/custom/CustomDateTimeSelector"),
    DeletePrompt: () => import("@/components/prompts/DeletePrompt"),
    RecordLinkDialog: () => import("./RecordLinkDialog"),
    Files: () => import("@/components/files/Files"),
  },
  props: {
    isPromptActive: {
      type: Boolean,
      default: false,
    },
    statusList: {
      type: Array,
      default: () => [],
    },
    userList: {
      type: Array,
      default: () => [],
    },
    selectedItem: {
      type: Array,
      default: () => [],
    },
    nextIconVisible: {
      type: Boolean,
      default: true,
    },
    previousIconVisible: {
      type: Boolean,
      default: true,
    },
    customFields: {
      type: Array,
      default: () => [],
    },
    addNewField: {
      type: Boolean,
      default: true,
    },
    editColumnName: {
      type: Boolean,
      default: true,
    },
    deleteDetailsDropdown: {
      type: Boolean,
      default: true,
    },
    recordLinkData: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapGetters("companyUserV2", ["getAllUsersList"]),
    showNavigation() {
      return this.selectedItem.length > 0;
    },
    allUsers() {
      return this.getAllUsersList;
    },
    allUsersMap() {
      return this.allUsers.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
      }, {});
    },
    isAddView() {
      return isEmpty(this.selectedItem);
    },
    recordList() {
      return this.recordLinkDialog.selectedFieldId
        ? this.recordLinkData[this.recordLinkDialog.selectedFieldId]
        : {};
    },
  },
  data() {
    return {
      form: {},
      isMenuVisible: false,
      valueType: {
        text: "textValue",
        singleSelect: "singleSelectValue",
        date: "dateValue",
        user: "userValue",
        dateNoTz: "dateNoTzValue",
        files: "filesValue",
        number: "numberValue",
        currency: "currencyValue",
        multiSelect: "multiSelectValues",
        recordLink: "recordLinkValues",
        rollup: "rollupValue",
        formula: "formulaValue",
      },
      deletePrompt: {
        isActive: false,
        selectedItemID: null,
      },
      recordLinkDialog: {
        isActive: false,
        selectedFieldId: null,
      },
    };
  },
  methods: {
    searchLinkedRecords(payload) {
      this.$emit("searchLinkedRecords", payload);
    },
    getStatusLabel(value) {
      const status = this.statusList.find((item) => item.label === value);
      return status ? status.label : "";
    },
    getStatusColor(value) {
      const status = this.statusList.find((item) => item.value === value);
      return status ? status.color : "";
    },
    saveDetails() {
      const payload = this.customFields
        .map((field) => {
          const value = this.valueType[field.type];
          const basicFields = ["text", "singleSelect", "number", "currency"];

          if (basicFields.includes(field.type)) {
            if (field.type === "number" || field.type === "currency") {
              return {
                fieldId: field.id,
                [value]: !isNaN(this.form[field.id])
                  ? this.form[field.id]
                  : null,
              };
            }
            return {
              fieldId: field.id,
              [value]: this.form[field.id] || "",
            };
          }
          if (field.type === "user") {
            return {
              fieldId: field.id,
              [value]: (this.form[field.id] || []).map((x) => ({
                userId: x.id,
              })),
            };
          }
          if (field.type === "date" && this.form[field.id]) {
            return {
              fieldId: field.id,
              [value]: {
                ...this.form[field.id],
              },
            };
          }
          if (field.type === "dateNoTz" && this.form[field.id]) {
            return {
              fieldId: field.id,
              [value]: {
                ...this.form[field.id],
              },
            };
          }
          if (field.type === "multiSelect" && this.form[field.id]) {
            return {
              fieldId: field.id,
              [value]: (this.form[field.id] || []).map((x) => ({
                optionId: x,
              })),
            };
          }
          if (field.type === "recordLink" && this.form[field.id]) {
            return {
              fieldId: field.id,
              [value]: this.form[field.id],
            };
          }
          if (field.type === "files" && this.form[field.id]) {
            const filesPayload = this.form[field.id].map((file) => {
              const isTempID = isNaN(file.id) && file.id.includes("temp");
              const payload = isTempID
                ? {
                    originalFileName: file.originalFileName,
                    storageFileName: file.storageFileName,
                  }
                : { id: file.id };

              return payload;
            });
            return {
              fieldId: field.id,
              files: filesPayload,
            };
          }
        })
        .filter(Boolean);

      this.isAddView
        ? this.$emit("submit:Details", payload)
        : this.$emit("update:Details", payload);
    },
    deleteDetails() {
      this.$emit("delete:Details", this.selectedItem[0].id);
    },
    updateDate(date, fieldId, isDateNoTz = false) {
      const dateKeyValue = isDateNoTz ? "localDateOnly" : "utcDateOnly";
      const timeKeyValue = isDateNoTz ? "localTimeOnly" : "utcTimeOnly";

      this.form[fieldId] = {
        [dateKeyValue]: date,
        [timeKeyValue]: this.form[fieldId][timeKeyValue] || null,
      };
    },
    updateTime(time, fieldId, isDateNoTz = false) {
      const dateKeyValue = isDateNoTz ? "localDateOnly" : "utcDateOnly";
      const timeKeyValue = isDateNoTz ? "localTimeOnly" : "utcTimeOnly";

      this.form[fieldId] = {
        [timeKeyValue]: time,
        [dateKeyValue]: this.form[fieldId][dateKeyValue] || null,
      };
    },
    fileSelected(event, fieldId) {
      if (!isEmpty(event.target.files)) {
        const payload = {
          files: [...event.target.files],
          recordId:
            this.selectedItem && this.selectedItem[0] && this.selectedItem[0].id
              ? this.selectedItem[0].id
              : null,
          fieldId,
        };
        this.$emit("uploadFiles", payload);
      }

      this.$refs[`fileUpload-${fieldId}`][0].value = "";
    },
    deleteFile({ file }, fieldId) {
      if (fieldId) {
        this.form[fieldId] = (this.form[fieldId] || []).filter(
          (item) => item.id !== file.id
        );
      }
    },
    initCustomFields(val) {
      const result = val.reduce((acc, field) => {
        if (!this.isAddView) {
          const value = this.valueType[field.type];
          const item = this.selectedItem.find(
            (item) => item.fieldId === field.id
          );
          if (item && value === "userValue") {
            acc[field.id] = (item[value] || []).map(
              (x) => this.allUsersMap[x.userId]
            );
          } else if (item && value === "dateValue") {
            acc[field.id] = item
              ? item[value]
              : { utcDateOnly: null, utcTimeOnly: null };
          } else if (item && value === "currencyValue") {
            acc[field.id] =
              item && item[value] ? Number(item[value]).toFixed(2) : null;
          } else if (item && value === "dateNoTz") {
            acc[field.id] = item
              ? item[value]
              : { localDateOnly: null, localTimeOnly: null };
          } else if (item && value === "multiSelectValues") {
            acc[field.id] = item ? item[value].map((x) => x.optionId || x) : [];
          } else if (item && value === "recordLinkValues") {
            acc[field.id] = item
              ? item[value].map((x) => {
                  return {
                    ...x,
                    recordData: this.getLinkedRecords(item.fieldId, x.recordId),
                  };
                })
              : [];
          } else if (item && value === "rollupValue") {
            acc[field.id] = item.numberValue;
          } else if (item && value === "formulaValue") {
            acc[field.id] = !isNaN(item.numberValue) ? item.numberValue : "";
          } else {
            acc[field.id] = item ? item[value] : "";
          }
        } else {
          acc[field.id] = "";
        }
        return acc;
      }, {});

      Object.keys(this.form).forEach((key) => {
        const hasKey = Object.keys(result).includes(key);
        if (!hasKey) delete this.form[key];
      });

      const fileFields = val
        .filter((field) => field.type === "files")
        .map((field) => field.id);
      if (fileFields.length) {
        fileFields.forEach((field) => {
          this.form[field] = result[field];
        });
      }

      const singleSelect = val.filter((field) => field.type === "singleSelect");
      if (singleSelect.length) {
        singleSelect.forEach((field) => {
          const optionIDs = (field.singleSelectOptions || []).map(
            (x) => x.optionId
          );
          this.form[field.id] = optionIDs.includes(result[field.id])
            ? result[field.id]
            : null;
        });
      }
      const multiSelect = val.filter((field) => field.type === "multiSelect");
      if (multiSelect.length) {
        multiSelect.forEach((field) => {
          const optionIDs = (field.multiSelectOptions || []).map(
            (x) => x.optionId
          );

          if (result[field.id])
            this.form[field.id] = result[field.id].filter((x) =>
              optionIDs.includes(x)
            );
        });
      }
      this.form = { ...result, ...this.form };
    },
    getOptionColor(id, optionsArray) {
      const option = (optionsArray || []).find(
        (option) => option.optionId === id
      );

      return option && option.color ? option.color : "";
    },
    getOptionName(id, optionsArray) {
      const option = (optionsArray || []).find(
        (option) => option.optionId === id
      );

      return option && option.optionName ? option.optionName : "";
    },
    initDeletePrompt(id) {
      this.deletePrompt.isActive = true;
      this.deletePrompt.selectedItemID = id;
    },
    deleteField() {
      this.$emit("deleteField", this.deletePrompt.selectedItemID);
      this.closeDeletePrompt();
    },
    closeDeletePrompt() {
      this.deletePrompt.isActive = false;
      this.deletePrompt.selectedItemID = null;
    },
    toggleRecordLinkDialog(fieldId) {
      this.recordLinkDialog.isActive = true;
      this.recordLinkDialog.selectedFieldId = fieldId;
    },
    closeRecordLinkDialog() {
      this.recordLinkDialog.isActive = false;
      this.recordLinkDialog.selectedFieldId = null;
    },
    linkRecord(recordId) {
      const fieldId = this.recordLinkDialog.selectedFieldId;

      this.form[fieldId] = [
        ...(this.form[fieldId] || []),
        {
          recordId,
          recordData: this.getLinkedRecords(
            this.recordLinkDialog.selectedFieldId,
            recordId
          ),
        },
      ];

      this.closeRecordLinkDialog();
    },
    getLinkedRecords(fieldId, recordId) {
      let result = [];

      if (fieldId && recordId) {
        const res = this.recordLinkData[fieldId].find(
          (record) => record.recordId === recordId
        );

        result = res && res.data ? res.data : result;
      }

      return result;
    },
    deleteLinkedRecord(fieldId, recordId) {
      this.form[fieldId] = this.form[fieldId].filter(
        (record) => record.recordId !== recordId
      );
    },
    generateTextColor(color) {
      return generateTextColor(color);
    },
    generatePlaceholder(customFieldData) {
      const { type, rollUpMetaData, formulaMetaData } = customFieldData || {};
      const { targetCustomFieldName, targetSubmenuName } = rollUpMetaData || {};
      const { formula } = formulaMetaData || {};
      const { op, params } = formula || {};
      const [prm1, prm2] = params || [];
      const customFieldMap = this.customFields.reduce((acc, field) => {
        acc[field.id] = field.name;
        return acc;
      }, {});
      const prm1Name =
        prm1 && prm1.customField ? customFieldMap[prm1.customField] : "";
      const prm2Name =
        prm2 && prm2.customField ? customFieldMap[prm2.customField] : "";

      if (type === "rollup") {
        if (targetSubmenuName && targetSubmenuName) {
          return `${targetCustomFieldName} RollUp (from ${targetSubmenuName})`;
        }
      } else if (type === "formula") {
        if (op && prm1Name && prm2Name) {
          return `${prm1Name} ${op} ${prm2Name}`;
        }
      }
      return "";
    },
  },
  watch: {
    customFields: {
      handler(val) {
        this.initCustomFields(val);
      },
      deep: true,
      immediate: true,
    },
    selectedItem: {
      handler() {
        this.initCustomFields(this.customFields);
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@sass/custom/form.scss";

.dialog {
  z-index: 999 !important;

  ::v-deep .p-dialog-header {
    padding: 1rem;
    border-bottom: 1px solid #0002;
  }

  ::v-deep .p-dialog-content {
    border-bottom: 1px solid #0002;
    overflow-y: visible;
  }

  .files-list-container {
    display: grid;
    grid-template-columns: 25% 75%;

    .files-list {
      width: calc(100% - 21px);

      ::v-deep label {
        white-space: nowrap;
        max-width: 120px;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      ::v-deep .vs-button--icon {
        z-index: 49;
      }
    }
  }

  .details-view {
    /* &:first-child{
    border-bottom: 1px solid rgba(0,0,0,0.1);
    margin-bottom: 20px;
    padding-bottom: 20px;
  } */
    margin-top: 1.5rem;
    width: 100%;
    // display: flex;
    align-items: center;
    display: grid;
    grid-template-columns: 25% 75%;
    /* &:not(:first-child){
    margin-top: 1.5rem; 
    width: 100%;
    display: flex;
    align-items: center;
  } */
    .label {
      // width: 25%;
      width: 100%;
      label {
        color: hsl(0, 0%, 20%);
        opacity: 0.75;
        font-size: 13px;
      }
    }
    .detail-input {
      width: 100%;
      display: flex;
    }
  }

  .number-field {
    &.hasInput {
      ::v-deep {
        .input-span-placeholder {
          visibility: hidden !important;
        }
      }
    }
    ::v-deep {
      /* Chrome, Safari, Edge, Opera */
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      input[type="number"] {
        -moz-appearance: textfield;
      }
    }
  }

  .number-field-icon {
    ::v-deep {
      .vs-con-input .vs-icon {
        margin-top: 2px;
        z-index: 1;
      }

      .vs-input--input.hasIcon,
      .vs-input--input.hasIcon:not(.icon-after-input) + .vs-input--placeholder {
        padding-left: 1.5rem !important;
      }
    }
  }

  .custom-multiselect {
    ::v-deep {
      .p-multiselect-label {
        max-height: 36px;
      }
    }
  }
}

.menu-detailsview-date-input {
  ::v-deep {
    .vs-con-input input {
      background-color: #fff;
    }
  }
}

// Utility classes
.text-end {
  text-align: end;
}

.border-right {
  border-right: 1px solid #0002;
}

.color-gray {
  color: gray;
}

.color-lightgray {
  color: lightgray;
}

.height-170 {
  height: 170px;
}

.border-gray {
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.width-28 {
  width: 28px;
}

.details-view {
  /* &:first-child{
    border-bottom: 1px solid rgba(0,0,0,0.1);
    margin-bottom: 20px;
    padding-bottom: 20px;
  } */
  margin-top: 1.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  /* &:not(:first-child){
    margin-top: 1.5rem; 
    width: 100%;
    display: flex;
    align-items: center;
  } */
  .label {
    width: 25%;
    label {
      color: hsl(0, 0%, 20%);
      opacity: 0.75;
      font-size: 13px;
      word-break: break-word;
    }
  }
  .detail-input {
    width: 100%;
    display: flex;
  }
}

.border-2 {
  border: 2px solid rgba(0, 0, 0, 0.1);

  &:hover {
    border: 2px solid rgba(0, 0, 0, 0.2);
  }
}

.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.w-max {
  width: max-content;
}

.custom-input {
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0.7rem !important;
  color: inherit;
  position: relative;
  padding: 0.4rem;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  box-shadow: 0 0 0 0 rgb(0 0 0 / 15%);
  transition: all 0.3s ease;
  width: 100%;
}
</style>
