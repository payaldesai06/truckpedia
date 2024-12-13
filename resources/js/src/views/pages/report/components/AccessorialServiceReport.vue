<template>
  <div class="vs-row flex py-6">
    <div class="w-full">
      <div class="vs-row flex gap-3 py-5 items-end">
        <div>
          <label for="choose-period" class="text-sm opacity-75"
            >Choose Period</label
          >
          <div>
            <flat-pickr
              v-model="selectedDate"
              :config="datePickerConfig"
              class="date-picker"
            />
          </div>
        </div>
        <div>
          <vs-button
            color="primary"
            @click="generateMasReport"
            v-if="selectedDate"
          >
            MAS Report
          </vs-button>
        </div>
      </div>
    </div>
    <div class="pt-6">
      <div class="pb-5" v-if="selectedDate">
        <label for="report-format" class="text-sm opacity-75"
          >Walmart or Syncada</label
        >
        <v-select
          :options="reportFormats"
          v-model="selectedReportFormat"
          :reduce="(option) => option.toLowerCase()"
          style="width: 200px"
        />
      </div>
      <template v-if="selectedReportFormat && selectedDate">
        <div class="vs-row flex gap-4">
          <div
            v-for="button in reportTypeButtons"
            :key="button.id"
            class="mb-4"
          >
            <vs-button
              color="primary"
              type="border"
              @click="handleReportTypeButtonSubmit(button)"
              >{{ button.label }}</vs-button
            >
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import monthSelectPlugin from 'flatpickr/dist/plugins/monthSelect/index.js';
import 'flatpickr/dist/plugins/monthSelect/style.css';
import globalMixins from '@/mixins/globalMixins';
import {
  getApiErrorMsg,
  downloadXlsx,
  downloadCsv,
  getMonthName,
} from '@/helpers/helper';
export default {
  name: 'AccessorialServiceReport',
  data() {
    return {
      datePickerConfig: {
        plugins: [
          new monthSelectPlugin({
            altFormat: 'M Y',
            dateFormat: 'm.Y',
          }),
        ],
        altInput: true,
        minDate: '01.2024',
      },
      selectedDate: '',
      selectedReportFormat: null,
      reportFormats: ['Walmart', 'Syncada'],
      masReportData: [],
      reportTypeButtons: [
        {
          id: 1,
          label: 'Bobtail & Hazmat',
          types: ['hazmat', 'bobtail'],
          terminal: null,
        },
        {
          id: 2,
          label: 'Ontario Trailer Movement',
          types: ['trailerMovement'],
          terminal: 'ontario',
        },
        {
          id: 3,
          label: 'Ontario Trailer Recovery',
          types: ['trailerRecovery'],
          terminal: 'ontario',
        },
        {
          id: 4,
          label: 'Oswego Trailer Movement',
          types: ['trailerMovement'],
          terminal: 'oswego',
        },
        {
          id: 5,
          label: 'Oswego Trailer Recovery',
          types: ['trailerRecovery'],
          terminal: 'oswego',
        },
      ],
    };
  },
  mixins: [globalMixins],
  computed: {
    datePayload() {
      const month = this.selectedDate.split('.')[0];
      const year = this.selectedDate.split('.')[1];
      return {
        ...(month && { month }),
        ...(year && { year }),
      };
    },
    convertedDataInCsv() {
      return this.masReportData.join('\n');
    },
  },
  methods: {
    async generateMasReport() {
      try {
        this.$vs.loading();
        const { rows } = await this.$store.dispatch(
          'report/exportAccessorialServiceMasReport',
          this.datePayload
        );
        this.masReportData = rows;
        if (this.masReportData.length) {
          this.setDataForCsv(
            `LGSB_MAS Upload ${getMonthName(this.datePayload.month)} ${
              this.datePayload.year
            } tm.hazmatch.tr.csv`
          );
        } else {
          this.showErrorMessage('Data not found');
        }
      } catch (error) {
        this.showErrorMessage(getApiErrorMsg(error));
      } finally {
        this.$vs.loading.close();
      }
    },
    generateFileNameForWalmart(fileType, payload) {
      let fileNameByType = null;
      if (fileType == 'hazmat') {
        fileNameByType = 'Hazmat & Bobtail';
      } else if (fileType == 'trailerMovement') {
        if (payload.terminal == 'ontario') {
          fileNameByType = 'Ontario Trailer Moves';
        } else {
          fileNameByType = 'Oswego Trailer Moves';
        }
      } else if (fileType == 'trailerRecovery') {
        if (payload.terminal == 'ontario') {
          fileNameByType = 'Ontario Trailer Recoveries';
        } else {
          fileNameByType = 'Oswego Trailer Recoveries';
        }
      }
      return `${this.datePayload.year} ${getMonthName(
        this.datePayload.month
      )} ${fileNameByType}.xlsx`;
    },
    async handleReportTypeButtonSubmit(reportType) {
      try {
        this.$vs.loading();
        const payload = {
          ...this.datePayload,
          types: reportType.types,
          ...(reportType.terminal && { terminal: reportType.terminal }),
          report: this.selectedReportFormat,
        };
        const { sheets } = await this.$store.dispatch(
          'report/exportAccessorialServiceSyncadaReport',
          payload
        );
        if (sheets && sheets.length) {
          let fileName = null;
          const fileType = payload.types[0]; // checking file type
          if (this.selectedReportFormat == 'walmart') {
            fileName = this.generateFileNameForWalmart(fileType, payload);
          } else {
            fileName = `ImportEBill ${getMonthName(
              this.datePayload.month
            ).toLowerCase()} ${this.datePayload.year} ${
              payload.terminal || ''
            }${
              fileType == 'hazmat'
                ? 'HZ'
                : fileType == 'trailerMovement'
                ? ' TM'
                : fileType == 'trailerRecovery'
                ? ' TR'
                : ''
            }.xlsx`;
          }
          downloadXlsx(sheets, fileName);
        } else {
          this.showErrorMessage('Data not found');
        }
      } catch (error) {
        this.showErrorMessage(getApiErrorMsg(error));
      } finally {
        this.$vs.loading.close();
      }
    },

    setDataForCsv(fileName) {
      downloadCsv(this.convertedDataInCsv, fileName);
    },
  },
  watch: {
    selectedDate(val) {
      if (!val) {
        this.selectedReportFormat = null;
      }
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep .date-picker {
  width: 200px;
}
</style>
