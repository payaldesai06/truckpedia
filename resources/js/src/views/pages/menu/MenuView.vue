<template>
  <div class="menu-view">
    <!-- Header Section -->
    <div
      :class="[
        'menu-header pl-0',
      ]"
    >
      <div class="flex">
        <h3>{{ subMenuName }}</h3>

        <div class="menu-header-list flex items-center overflow-x-auto">
          <vs-chip
            class="cursor-pointer mx-2 text-sm min-w-75"
            v-for="{ id, title, icon, isActive, name } in viewOptions"
            :key="id"
            :color="isActive ? 'primary' : ''"
            @click.native="changeTab(id)"
          >
            <vs-icon class="mr-1" size="18px" :icon="icon" />
            {{ title }}
          </vs-chip>
          <label
            class="text-sm font-semibold ml-4 cursor-pointer text-primary"
            @click.stop="showViewPrompt"
          >
            Add
          </label>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="menu-view-container" v-if="currentComponent">
      <component
        :ref="currentComponent"
        :is="currentComponent"
        :title="subMenuName"
        :viewMetaData="viewMetaData"
        :customFields="customFields"
        :recordData="recordData"
        :fetchingData="fetchingData"
        @toggleDetailsView="toggleDetailsView"
        @updateView="updateView"
        @update:Details="updateRecord"
      />
    </div>

    <!-- View Prompt -->
    <ViewPrompt
      v-if="viewPromptVisible"
      @close="viewPromptVisible = false"
      @submit="addView"
    />

    <!-- View/Edit Records and Fields -->
    <ViewEditRecord
      ref="viewEditRecord"
      :customFields="customFields"
      :fieldTypes="fieldTypes"
      @updateRecord="updateRecord"
      @submitRecord="submitRecord"
      @deleteRecord="deleteRecord"
      @addField="addField"
      @updateField="updateField"
      @updateView="updateView"
      @uploadFiles="uploadFiles"
      @deleteFile="deleteFile"
      @deleteField="deleteField"
      @searchLinkedRecords="searchLinkedRecords"
    />
  </div>
</template>
<!-- eslint-disable multiline-ternary nonblock-statement-body-position implicit-arrow-linebreak -->
<script>
// Libraries
import { mapGetters } from "vuex";
import { isEmpty, isNil } from "lodash";
import { v4 as uuidv4 } from "uuid";

// Helpers
import { menuViews, fieldTypes } from "./helpers/helper";

import GroupBy from "./mixins/GroupBy";

export default {
  name: "MenuView",
  mixins: [GroupBy],
  components: {
    ListView: () => import("./components/ListView"),
    BoardView: () => import("./components/BoardView"),
    GanttView: () => import("./components/GanttView"),
    TableView: () => import("./components/TableView"),
    ViewPrompt: () => import("./components/ViewPrompt"),
    ViewEditRecord: () => import("./components/ViewEditRecord"),
  },
  props: {
    isCollapsed: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters("menuV2", ["getAllSubMenu", "getAllView"]),
    subMenuName() {
      const { submenuId } = this.$route.params;
      if (!submenuId) return "";

      const submenu = this.getAllSubMenu.find(
        (item) => item.id === parseInt(submenuId)
      );
      return submenu ? submenu.name : "";
    },
    currentComponent() {
      if (this.viewOptions.length === 0) return "";

      const { name } = this.viewOptions.find((item) => item.isActive);
      if (!name) return "";

      return this.componentList[name];
    },
    viewId() {
      const { id } = this.viewOptions.find((item) => item.isActive);
      return id;
    },
    viewMetaData() {
      const { name } = this.viewOptions.find((item) => item.isActive);
      if (!name) return {};
      return {
        ...this[`${name}MetaData`],
        type: name,
      };
    },
    recordLinkFields () {
      return this.customFields.filter((item) => item.type === 'recordLink')
    }
  },
  data() {
    return {
      viewOptions: [],
      componentList: {
        list: "ListView",
        board: "BoardView",
        gantt: "GanttView",
        table: "TableView",
      },
      viewPromptVisible: false,
      fieldTypes,
      listMetaData: {},
      boardMetaData: {},
      tableMetaData: {},
      ganttMetaData: {},
      customFields: [],
      recordData: [],
      fetchingData: true,
    };
  },
  created() {
    this.init();
  },
  methods: {
    hideTableGanttForNow(name) {
      //  if(name === "table" || name === "gantt"){
      //   return false
      //  }
      return true;
    },
    getErrorMsg(error) {
      return error &&
        error.response &&
        error.response.data &&
        error.response.data.message
        ? error.response.data.message
        : "Something went wrong";
    },
    async initViews(viewID = null) {
      try {
        await this.$store.dispatch("companyUserV2/fetchAllUsers");
        if (this.getAllView.length === 0) return [];

        this.viewOptions = this.getAllView.map((item) => {
          const view = menuViews[item.type];
          if (!view) return {};

          return {
            ...view,
            id: item.id,
            isActive: viewID ? viewID === item.id : false,
          };
        });

        if (!viewID) {
          const tableViewIndex = this.viewOptions.findIndex(
            (item) => item.name === "table"
          );

          tableViewIndex !== -1
            ? (this.viewOptions[tableViewIndex].isActive = true)
            : (this.viewOptions[0].isActive = true);
        }
      } catch (e) {
        console.error(e);
      }
    },
    redirectToErrorPage() {
      this.$router.push({ name: "page-error-404" });
    },
    async fetchData(viewID = null) {
      try {
        const { menuId, submenuId } = this.$route.params;

        if (!menuId || !submenuId) {
          this.redirectToErrorPage();
          return;
        }

        this.$vs.loading();
        this.fetchingData = true;
        await this.$store.dispatch("menuV2/fetchSubMenuList", menuId);
        await this.$store.dispatch("menuV2/fetchViewList", {
          id: submenuId
        });
        await this.initViews(viewID);
        await this.fetchViewData();
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: "danger",
          title: "Error",
          text: this.getErrorMsg(error),
        });
      } finally {
        this.$vs.loading.close();
        this.fetchingData = false;
      }
    },
    async fetchViewData(viewId) {
      try {
        const {
          data: {
            payload: {
              listMetaData,
              boardMetaData,
              tableMetaData,
              ganttMetaData,
              recordCustomFields,
              recordData,
            },
          },
        } = await this.$store.dispatch("menuV2/getView", viewId || this.viewId);

        this.listMetaData = listMetaData || {};
        this.boardMetaData = boardMetaData || {};
        this.tableMetaData = tableMetaData || {};
        this.ganttMetaData = ganttMetaData || {};
        this.customFields = recordCustomFields || [];
        this.recordData = recordData || [];
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: "danger",
          title: "Error",
          text: this.getErrorMsg(error),
        });
      }
    },
    async init() {
      try {
        await this.fetchData();

        this.$nextTick(() => {
          this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
              if (toParams.submenuId !== previousParams.submenuId) {
                this.resetTableViewSortSchema();
                this.fetchData();
              }
            }
          );
        });
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: "danger",
          title: "Error",
          text: this.getErrorMsg(error),
        });
      }
    },
    async changeTab (id) {
      try {
        const { title } = this.viewOptions.find((item) => item.id === id)
        if (!title) return

        this.$vs.loading()

        this.viewOptions.forEach((item) => {
          item.isActive = item.id === id
        })

        this.resetTableViewSortSchema();
        await this.fetchViewData()
      } catch (error) {
      } finally {
        this.$vs.loading.close()
      }
    },
    showViewPrompt() {
      this.viewPromptVisible = true;
    },
    async addView({ name: type, title: name }) {
      try {
        this.viewPromptVisible = false;
        const { submenuId } = this.$route.params;
        if (!submenuId) return;

        const {
          data: {
            payload: { id },
          },
        } = await this.$store.dispatch("menuV2/createView", {
          name,
          type,
          submenuId,
        });

        await this.fetchData(id);
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: "danger",
          title: "Error",
          text: this.getErrorMsg(error),
        });
      }
    },
    async updateRecord(record) {
      try {
        if (!record) return;

        const { submenuId } = this.$route.params;
        const payload = {
          submenuId,
          recordId: record.recordId,
          newValues: record.values,
        };

        await this.$store.dispatch("menuV2/updateFieldValues", payload);
        this.fetchViewData();
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: "danger",
          title: "Error",
          text: this.getErrorMsg(error),
        });
      }
    },
    async submitRecord(record) {
      try {
        if (!record) return;

        const { submenuId } = this.$route.params;
        const payload = {
          submenuId,
          newValues: record.values,
        };

        await this.$store.dispatch("menuV2/createNewRecord", payload);
        this.fetchViewData();
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: "danger",
          title: "Error",
          text: this.getErrorMsg(error),
        });
      }
    },
    async deleteRecord(id) {
      try {
        if (!id) return;

        const payload = {
          submenuId: this.$route.params.submenuId,
          recordId: id,
        };

        await this.$store.dispatch("menuV2/deleteRecord", payload);
        this.fetchViewData();
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: "danger",
          title: "Error",
          text: this.getErrorMsg(error),
        });
      }
    },
    async getCustomFields() {
      try {
        const { submenuId } = this.$route.params;
        const {
          data: {
            payload: { fields },
          },
        } = await this.$store.dispatch("menuV2/fetchCustomFields", submenuId);

        this.customFields = fields || [];
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: "danger",
          title: "Error",
          text: this.getErrorMsg(error),
        });
      }
    },
    async addField(data, recordId) {
      try {
        if (isEmpty(data)) return;

        const { submenuId } = this.$route.params;
        const payload = {
          submenuId,
          fields: [data],
        };

        await this.$store.dispatch("menuV2/createCustomFields", payload);
        await this.getCustomFields();
        await this.fetchViewData();

        if (recordId) {
          const {
            status,
            data: {
              result,
              payload: { recordData }
            }
          } = await this.fetchRecord(submenuId, recordId)

          if (status === 200 && result) {
            const result = this.formatData([{ ...recordData }])
            const selectedRecord = result && result.length ? result[0].customFieldsData : []
            this.$refs.viewEditRecord.selectedRecord = selectedRecord
          }
        }

        if (data.type === 'recordLink') {
          const record =
            this.customFields[this.customFields.length - 1].type ===
            'recordLink'
              ? {
                fieldId: this.customFields[this.customFields.length - 1].id,
                submenuId: submenuId
                    // Original BE API code implemented the wrong payload.
                    // this.customFields[this.customFields.length - 1]
                    //  .recordLinkMetaData.submenuId
              }
              : null
          if (record) {
            let recordLinkData = await this.fetchTargetRecords(
              record.submenuId,
              record.fieldId
            )

            if (!isEmpty(recordLinkData)) {
              recordLinkData = this.formatTargetRecords(recordLinkData)
              this.$refs.viewEditRecord.initRecordLinkFields(recordLinkData)
            }
          }
        }
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: "danger",
          title: "Error",
          text: this.getErrorMsg(error),
        });
      }
    },
    async updateField(data) {
      try {
        if (isEmpty(data)) return;

        const payload = {
          id: data.id,
          name: data.name,
          level: data.level
        };

        if (data.type === 'singleSelect')
          payload.singleSelectOptions = data.singleSelectOptions || []
        else if (data.type === 'multiSelect')
          payload.multiSelectOptions = data.multiSelectOptions || []
        else if (data.type === 'formula' && data.formulaMetaData) {
          payload.formulaMetaData = data.formulaMetaData
        }

        await this.$store.dispatch("menuV2/updateCustomField", payload);
        this.getCustomFields();
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: "danger",
          title: "Error",
          text: this.getErrorMsg(error),
        });
      }
    },
    async updateView(data) {
      try {
        if (isEmpty(data)) return;
        const payload = {
          ...data,
          id: this.viewId,
        };
        await this.$store.dispatch("menuV2/updateView", payload);
        this.fetchViewData(this.viewId);
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: "danger",
          title: "Error",
          text: this.getErrorMsg(error),
        });
      }
    },
    async toggleDetailsView (recordId) {
      const isValidRecordId = !isNil(recordId) && !isNaN(Number(recordId))
      let payload = []
      let recordLinkData = {}
      const { submenuId } = this.$route.params

      if (isValidRecordId) {
        const {
          status,
          data: {
            result,
            payload: { recordData }
          }
        } = await this.fetchRecord(submenuId, recordId)

        if (status === 200 && result) {
          const result = this.formatData([{ ...recordData }])
          payload = result && result.length ? result[0].customFieldsData : []
        }
      }

      if (this.recordLinkFields && this.recordLinkFields.length) {
        for (const record of this.recordLinkFields) {
          const {
            id,
            // Original BE API code implemented the wrong payload.
            //recordLinkMetaData: { submenuId }
          } = record

          recordLinkData = await this.fetchTargetRecords(submenuId, id)

          if (!isEmpty(recordLinkData)) {
            recordLinkData = this.formatTargetRecords(recordLinkData)
            this.$refs.viewEditRecord.initRecordLinkFields(recordLinkData)
          }
        }
      }

      if (this.$refs.viewEditRecord) {
        this.$refs.viewEditRecord.toggleDetailsView(payload)
      }
    },
    getFileExtension (files) {
      const fileExtension = files.map((file) => {
        const extension = file.name.split('.').pop()
        return { extension }
      })
      return fileExtension
    },
    async generateS3NameAndURL (files, recordId, fieldId) {
      try {
        if (files.length === 0) return
        const allFiles = await this.getFileExtension(files)
        const { submenuId } = this.$route.params
        const {
          data: { result, payload }
        } = await this.$store.dispatch('menuV2/uploadAttachment', {
          submenuId,
          recordId,
          fieldId,
          files: allFiles
        })
        return result && payload ? payload : []
      } catch (error) {}
    },
    async uploadAttachmentsToS3 (s3FileNameAndURL, files) {
      // this.$vs.loading()
      try {
        if (s3FileNameAndURL) {
          const attachments = []
          for (let i = 0; i < s3FileNameAndURL.length; i++) {
            const { storageFileName, url } = s3FileNameAndURL[i]
            const file = files[i]
            const { status } = await this.$store.dispatch('uploadFileToS3ViaPresignedUrl', {
              url,
              file,
              extension: storageFileName.split(".").pop() 
            })
            if (status === 200)
              attachments.push({
                storageFileName,
                originalFileName: file.name
              })
          }
          return attachments
        }
      } catch (error) {
      } finally {
        // this.$vs.loading.close()
      }
    },
    async fetchRecord (submenuId, recordId) {
      try {
        const res = await this.$store.dispatch('menuV2/fetchRecord', {
          submenuId: parseInt(submenuId),
          recordId
        })
        return res
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: this.getErrorMsg(error)
        })
      }
    },
    updateSelectedRecordFileValues (recordId, fieldId, recordData) {
      this.recordData = this.recordData.map((record) => {
        if (record.id === recordId) {
          record.customFieldsData = record.customFieldsData.map((field) => {
            if (field.fieldId === fieldId) {
              return {
                ...field,
                filesValue: recordData.customFieldsData.find(
                  (f) => f.fieldId === fieldId
                ).filesValue
              }
            }
            return field
          })
        }
        return record
      })
      if (this.$refs.viewEditRecord)
        this.$refs.viewEditRecord.updateSelectedRecord(fieldId, recordData)
    },
    async uploadFiles ({ files, recordId, fieldId }) {
      try {
        // Process attachments
        const s3FileNameAndURL = await this.generateS3NameAndURL(
          files,
          recordId,
          fieldId
        )
        const attachments =
          (await this.uploadAttachmentsToS3(s3FileNameAndURL, files)) || []

        const filesArray = files.map((file) => {
          const fileDetails = attachments.find(
            (attachment) => attachment.originalFileName === file.name
          )

          return {
            id: `temp-${uuidv4()}`,
            file,
            ...fileDetails
          }
        })

        if (this.$refs.viewEditRecord) {
          if (recordId)
            await this.$refs.viewEditRecord.addAttachments(fieldId, filesArray)
          else
            await this.$refs.viewEditRecord.addNewRecordAttachments(
              fieldId,
              filesArray
            )
        }
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: this.getErrorMsg(error)
        })
      }
    },
    async deleteFile (payload) {
      try {
        const { submenuId } = this.$route.params
        const { recordId, fieldId, files } = payload
        await this.$store.dispatch('menuV2/deleteFiles', {
          submenuId: parseInt(submenuId),
          recordId,
          fieldId,
          files
        })
        const {
          status,
          data: {
            result,
            payload: { recordData }
          }
        } = await this.fetchRecord(submenuId, recordId)
        if (status === 200 && result)
          this.updateSelectedRecordFileValues(recordId, fieldId, recordData)
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: this.getErrorMsg(error)
        })
      }
    },
    async deleteField ({ fieldId }) {
      try {
        const { submenuId } = this.$route.params

        await this.$store.dispatch('menuV2/deleteCustomField', {
          submenuId: parseInt(submenuId),
          fieldId
        })
        await this.fetchViewData()
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: this.getErrorMsg(error)
        })
      }
    },

    async searchLinkedRecords(searchObj){
      const { submenuId } = this.$route.params;
      let recordLinkData = await this.fetchTargetRecords(submenuId, searchObj.fieldId, searchObj.text)

      if (!isEmpty(recordLinkData)) {
        recordLinkData = this.formatTargetRecords(recordLinkData)
        this.$refs.viewEditRecord.initRecordLinkFields(recordLinkData)
      }
    },
    async fetchTargetRecords (submenuId, fieldId, searchKeyWords = null) {
      try {
        const {
          status,
          data: {
            result,
            payload: { recordCustomFields, recordData }
          }
        } = await this.$store.dispatch('menuV2/getTargetRecords', {
          submenuId,
          fieldId,
          searchKeyWords
        })

        if (status === 200 && result) {
          return {
            fieldId,
            recordCustomFields,
            recordData
          }
        }
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: this.getErrorMsg(error)
        })
      }
    },
    formatTargetRecords (records) {
      const customFields = records.recordCustomFields//.slice(0, 4)
      const customFieldsData = records.recordData.map((record) => {
        record.customFieldsData = record.customFieldsData.filter((field) =>
          customFields.find((customField) => customField.id === field.fieldId)
        )

        return record
      })

      const fieldValueTypes = [
        "textValue",
        "userValue",
        "singleSelectValue",
        "numberValue",
        "currencyValue",
        "multiSelectValue"
      ]
      const formattedRecords = customFieldsData.map((record) => {
        const data = record.customFieldsData.map((field) => {
          const customField = customFields.find(
            (customField) => customField.id === field.fieldId &&
              fieldValueTypes.some((type) => field[type])
          )

          if (customField) {
            let fieldValue = ''
            let fieldColor = ''

            if (field.textValue) fieldValue = field.textValue
            if (field.userValue)
              fieldValue = field.userValue
                .map((user) => this.allUsersMap[user.userId].fullName)
                .join(', ')
            if (field.singleSelectValue) {
              fieldValue = customField.singleSelectOptions.find(
                (option) => option.optionId === field.singleSelectValue
              ).optionName

              fieldColor = customField.singleSelectOptions.find(
                (option) => option.optionId === field.singleSelectValue
              ).color
            }
            if (field.dateValue)
              fieldValue = this.convertToLocalDateTime(
                field.dateValue.utcDateOnly,
                field.dateValue.utcTimeOnly
              )
            if (field.dateNoTzValue)
              fieldValue = `${field.dateNoTzValue.localDateOnly || ''} ${
                field.dateNoTzValue.localTimeOnly || ''
              }`
            if (field.hasOwnProperty('numberValue')) fieldValue = field.numberValue
            if (field.currencyValue)
              fieldValue = field.currencyValue
                ? `$${parseFloat(field.currencyValue).toFixed(2)}`
                : ''
            if (field.multiSelectValue) {
              fieldValue = customField.multiSelectOptions
                .filter((option) =>
                  field.multiSelectValue.includes(option.optionId)
                )
                .map((option) => option.optionName)
                .join(', ')
            }

            const values = {
              name: customField.name,
              value: fieldValue,
              color: fieldColor,
              type: customField.type
            }

            return values
          }
        }).filter((field) => field)
        return {
          recordId: record.id,
          data
        }
      })
      return { [records.fieldId]: formattedRecords }
    },
    resetTableViewSortSchema() {
      if (this.$refs['TableView']) {
        this.$refs['TableView'].handleSortSchema([]);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-header {
  width: 100%;
  height: 60px;
  padding: 1.2rem;
  background: rgb(255, 255, 255);
  position: fixed;
  transition: all 0.4s ease;
  top: 0;
  border-bottom: 1px solid #0002;
  z-index: 5;
  /* box-shadow: 0 4px 20px 0 rgb(0 0 0 / 5%); */
  .menu-header-list {
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

// Utility Classes
.min-w-75 {
  min-width: 75px;
}

.menu-view-container {
  margin-top: 56px;
}
</style>
