<template>
  <div>
    <div class="flex justify-between items-center">
      <h4>Upload Excel/CSV File</h4>
      <vs-button
        v-if="file"
        size="small"
        color="danger"
        @click="removeSelectedFile"
      >
        Remove File
      </vs-button>
    </div>
    <div class="drop-box">
      <input
        ref="fileInput"
        type="file"
        accept=".xlsx, .xls, .csv"
        :value="fileInput"
        @input="onFileUpload"
      />
      <div
        class="flex justify-center items-center"
        style="flex-direction: column"
        v-if="!file"
      >
        <h6 class="mt-3 mb-0 text-muted">CLICK TO UPLOAD</h6>
      </div>
      <div class="flex items-center" v-else>
        <span class="text-muted">{{ file.name }}</span>
      </div>
    </div>
    <template v-if="fileData">
      <DataTable
        :value="fileData"
        responsiveLayout="scroll"
        :scrollable="true"
        scrollHeight="400px"
        class="mt-12"
      >
        <Column field="colName" header="Column Name">
          <template #body="{ data: { colName } }">
            <div>
              {{ colName }}
            </div>
          </template>
        </Column>
        <Column field="" header="Select Type">
          <template #body="{ data: { colType, colName, id } }">
            <div class="flex flex-col">
              <Dropdown
                :value="colType"
                @change="(e) => onColTypeChange(e, id)"
                :options="colTypeOptions"
                optionLabel="label"
                optionValue="value"
                style="width: 150px"
                appendTo="body"
                :disabled="!colName"
              />
              <span v-if="!colName" class="text-danger text-xs mt-2">
                Column name can not be empty
              </span>
            </div>
          </template>
        </Column>
        <Column field="colData" header="Samples">
          <template #body="{ data: { colData } }">
            <div>
              {{ (colData || []).slice(0, 5).join(', ') }}
            </div>
          </template>
        </Column>
      </DataTable>
    </template>
  </div>
</template>
<script>
import XLSX from 'xlsx';
import globalMixins from '@/mixins/globalMixins';

export default {
  name: 'CsvUpload',
  props: {
    colTypes: {
      type: Array,
      default: () => [],
    },
    checkDuplicates: {
      type: Boolean || undefined,
      default: () => false,
    },
    maxRows: {
      type: Number || undefined || null,
      default: () => null,
    },
  },
  mixins: [globalMixins],
  computed: {
    colTypeOptions() {
      return [
        ...this.colTypes,
        { label: 'Do not import', value: 'doNotImport' },
      ];
    },
  },
  data() {
    return {
      file: null,
      fileData: null,
      fileInput: null,
    };
  },
  methods: {
    onFileUpload(e) {
      if (!e.target.files.length) return;
      // Check if file is valid
      const allowedTypes = [
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'text/csv',
      ];

      if (!allowedTypes.includes(e.target.files[0].type)) {
        this.$vs.notify({
          title: 'Invalid File Type',
          text: 'Please upload a valid file',
          color: 'danger',
        });
        this.fileInput = null;
        return;
      }

      this.file = e.target.files[0];

      // Read file and return array of objects with column name, column data
      const reader = new FileReader();
      reader.onload = (e) => {
        const workbook = XLSX.read(e.target.result, {
          type: 'array',
          codepage: 65001, // To support non-ascii characters like accent mark, CJK, Arabic in Excel. CSV does not work and I don't know how to fix it.
        });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        let sheetData = XLSX.utils
          .sheet_to_json(sheet, {
            header: 1,
            defval: '',
            raw: false, // Otherwise "100%" will be converted to number 1.
          })
          .filter((row) => row.some((cell) => cell !== ''));

        if (this.maxRows && sheetData.length > this.maxRows) {
          this.showErrorMessage(
            `Please split this CSV. It should have less than ${this.maxRows} rows`
          );
          this.file = null;
          this.fileInput = null;
          return;
        }
        this.fileData = sheetData[0].map((column, index) => {
          const matchedColumn = this.colTypeOptions.find(
            (item) => item.label === column
          );
          return {
            id: index + 1,
            colName: column,
            colType: matchedColumn ? matchedColumn.value : 'doNotImport',
            colData: (sheetData || []).slice(1).map((row) => row[index]),
          };
        });
        const matchedColumns = this.fileData.filter(
          (item) => item.colType !== 'doNotImport'
        );
        if (matchedColumns.length) {
          matchedColumns.forEach((column) => {
            this.updateCsvData(column);
          });
        } else {
          this.updateCsvData();
        }
      };

      reader.readAsArrayBuffer(this.file);
    },
    removeSelectedFile() {
      this.file = null;
      this.$refs.fileInput.value = '';
      this.fileData = null;
      this.updateCsvData();
    },
    onColTypeChange(e, id) {
      const colIndex = this.fileData.findIndex((col) => col.id === id);
      if (this.checkDuplicates) {
        const foundElement = this.fileData.find(
          (item) => item.colType !== 'doNotImport' && item.colType === e.value
        );
        if (foundElement) {
          this.showErrorMessage(
            `You have already selected this type for ${foundElement.colName}`
          );
          return;
        }
      }
      this.fileData[colIndex].colType = e.value;
      this.updateCsvData(this.fileData[colIndex]);
    },
    updateCsvData(leads = null) {
      this.$emit('updateCsvData', leads);
    },
  },
};
</script>
<style lang="scss" scoped>
.drop-box {
  align-items: center;
  border-style: dashed;
  border-width: 2px;
  border-radius: 15px;
  border-color: rgb(204, 204, 204);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 20px;
  cursor: pointer;
  min-height: 200px;
  margin-top: 25px;
  position: relative;
  input {
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
  }
  h6 {
    color: rgb(204, 204, 204);
  }
}
</style>
<style lang="scss">
.p-dropdown-panel {
  z-index: 53000 !important;
}
</style>
