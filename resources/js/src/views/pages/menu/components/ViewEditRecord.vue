<template>
  <div class="view-edit-records">
    <!-- Record Details View -->
    <DetailsView
      v-if="isDetailsViewActive"
      ref="detailsView"
      :isPromptActive="isDetailsViewActive"
      :customFields="customFields"
      :selectedItem="selectedRecord"
      :nextIconVisible="hasNextRecord"
      :previousIconVisible="hasPreviousRecord"
      :recordLinkData="recordLinkData"
      @toggleDialog="toggleDetailsView"
      @update:Details="updateRecord"
      @submit:Details="submitRecord"
      @delete:Details="deleteRecord"
      @next="nextRecord"
      @prev="previousRecord"
      @toggleFieldDialog="toggleFieldDialog"
      @editField="editField"
      @deleteField="deleteField"
      @uploadFiles="uploadFiles"
      @delete:File="deleteFile"
      @searchLinkedRecords="searchLinkedRecords"
    />

    <!-- Field Form -->
    <FieldForm
      v-if="isFieldDialogVisible"
      :isPromptActive="isFieldDialogVisible"
      :typesList="fieldTypes"
      :selectedField="selectedField"
      :submenuList="submenuList"
      :rollUpTargets="rollUpTargets"
      :customFields="customFields"
      :submenuId="submenuId"
      @closeDialog="closeFieldDialog"
      @addField="addField"
      @updateField="updateField"
    />
  </div>
</template>
<!-- eslint-disable nonblock-statement-body-position multiline-ternary -->
<script>
import { isEmpty } from "lodash";
import { mapGetters } from "vuex";

export default {
  name: 'ViewEditRecord',
  provide () {
    return {
      customFields: this.customFields,
    }
  },
  props: {
    customFields: {
      type: Array,
      default: () => []
    },
    fieldTypes: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    DetailsView: () => import("./DetailsView.vue"),
    FieldForm: () => import("./FieldForm.vue"),
  },
  data () {
    return {
      isDetailsViewActive: false,
      isFieldDialogVisible: false,
      selectedRecord: null,
      selectedField: null,
      selectedRecordID: null,
      rollUpTargets: null,
      recordLinkData: {}
    }
  },
  computed: {
    ...mapGetters('menuV2', ['getAllSubMenu']),
    submenuId () {
      const { submenuId } = (this.$route || {}).params || {}
      return submenuId || null
    },
    hasNextRecord() {
      // if (!isEmpty(this.selectedRecord) && this.selectedRecord.id) {
      //   const index = this.dataObject.findIndex(
      //     (item) => item.id === this.selectedRecord.id
      //   )
      //   return index < this.dataObject.length - 1
      // }

      return false;
    },
    hasPreviousRecord() {
      // if (!isEmpty(this.selectedRecord) && this.selectedRecord.id) {
      //   const index = this.dataObject.findIndex(
      //     (item) => item.id === this.selectedRecord.id
      //   )
      //   return index > 0
      // }

      return false;
    },
    submenuList () {
      const submenuId = this.submenuId;
      return submenuId
        ? this.getAllSubMenu.filter((item) => item.id !== parseInt(submenuId))
        : this.getAllSubMenu
    }
  },
  methods: {
    searchLinkedRecords(payload){
      this.$emit("searchLinkedRecords", payload);
    },
    /* Details view controls : Start */
    toggleDetailsView(record = []) {
      if (!isEmpty(record)) {
        this.selectedRecord = record;
        this.selectedRecordID = record[0].id;
      } else {
        this.selectedRecord = [];
        this.selectedRecordID = null;
      }

      this.isDetailsViewActive = !this.isDetailsViewActive;
    },
    updateRecord(val) {
      this.$emit("updateRecord", {
        recordId: this.selectedRecordID,
        values: [...val],
      });
      this.toggleDetailsView();
    },
    submitRecord(val) {
      this.$emit("submitRecord", { values: [...val] });
      this.toggleDetailsView();
    },
    deleteRecord(id) {
      this.$emit("deleteRecord", id);
      this.toggleDetailsView();
    },
    nextRecord() {
      // const index = this.dataObject.findIndex(
      //   (item) => item.id === this.selectedRecord.id
      // )
      // this.selectedRecord = this.dataObject[index + 1]
    },
    previousRecord() {
      // const index = this.dataObject.findIndex(
      //   (item) => item.id === this.selectedRecord.id
      // )
      // this.selectedRecord = this.dataObject[index - 1]
    },
    /* Details view controls : End */
    /* Field Records controls : Start */
    closeFieldDialog() {
      this.selectedField = null;
      this.toggleFieldDialog();
    },
    toggleFieldDialog() {
      this.isFieldDialogVisible = !this.isFieldDialogVisible;
    },
    addField(val) {
      this.$emit("addField", val, this.selectedRecordID);
      this.toggleFieldDialog();
    },
    editField(id) {
      this.selectedField = this.customFields.find((item) => item.id === id);
      this.toggleFieldDialog();
    },
    updateField(val) {
      this.$emit("updateField", val);
      this.selectedField = null;
      this.toggleFieldDialog();
    },
    uploadFiles (val) {
      this.$emit('uploadFiles', val)
    },
    deleteFile (val) {
      this.$emit('deleteFile', val)
    },
    updateSelectedRecord (fieldId, record) {
      if (record.id === this.selectedRecordID)
        this.selectedRecord = this.selectedRecord.map(
          (field) => {
            if (field.fieldId === fieldId) {
              return {
                ...field,
                filesValue: record.customFieldsData.find(
                  (f) => f.fieldId === fieldId
                ).filesValue
              }
            }
            return field
          }
        )
    },
    deleteField (id) {
      this.$emit('deleteField', {
        fieldId: id
      })
    },
    initRecordLinkFields (record) {
      if (isEmpty(this.recordLinkData)) {
        this.recordLinkData = record
        return
      }

      Object.keys(record).forEach((key) => {
        if (this.recordLinkData[key]) this.recordLinkData[key] = record[key]
        else
          this.recordLinkData = {
            ...this.recordLinkData,
            [key]: record[key]
          }
      })
    },
    addAttachments (fieldId, filesArray) {
      const fieldName =
        this.customFields.find((field) => field.id === fieldId).name || ''
      const existingFiles = this.$refs.detailsView.form[fieldName] || []
      this.$refs.detailsView.form[fieldName] = [
        ...existingFiles,
        ...filesArray
      ]

      this.selectedRecord = this.selectedRecord.map((field) => {
        if (field.fieldId === fieldId) {
          return {
            ...field,
            filesValue: [...this.$refs.detailsView.form[fieldName]]
          }
        }
        return field
      })
    },
    addNewRecordAttachments (fieldId, filesArray) {
      if (this.$refs.detailsView) {
        const fieldName =
          this.customFields.find((field) => field.id === fieldId).name || ''
        if (fieldName) {
          const existingFiles = this.$refs.detailsView.form[fieldName] || []
          this.$refs.detailsView.form[fieldName] = [
            ...existingFiles,
            ...filesArray
          ]
        }
      }
    },
    /* Field Records controls : End */
  }
}
</script>