<template>
  <div>
    <div class="w-full py-6 flex items-center justify-between">
      <div class="flex items-end py-5 space-x-2">
        <div>
          <label class="text-sm opacity-75">Choose Period</label>
          <flat-pickr
            v-model="selectedDateRange"
            :config="flat_pikr_config"
            class="w-full"
            @on-close="onDatePickerClose"
          />
        </div>
        <div>
          <vs-button
            color="primary"
            v-if="selectedDateRange"
            @click="generateReport('mas')"
            >MAS Report</vs-button
          >
          <vs-button
            color="primary"
            v-if="selectedDateRange"
            @click="generateReport('syncada')"
            >Syncada Report</vs-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { downloadCsv, getApiErrorMsg } from '@/helpers/helper';
import globalMixins from '@/mixins/globalMixins';

export default {
  data() {
    return {
      selectedDateRange: null,
      // Flate Pikr Config
      flat_pikr_config: {
        mode: 'range',
      },
      payload: {},
      csvName: '',
      rows: [],
    };
  },
  mixins: [globalMixins],
  methods: {
    /**
     * Get Loads Reports based on type
     */
    async generateReport(type) {
      this.$vs.loading();
      try {
        const response = await this.$store.dispatch(
          type == 'mas'
            ? 'report/exportLoadsMasReport'
            : 'report/exportLoadsSyncadaReport',
          {
            ...this.payload,
          }
        );
        this.rows = response.rows;
        if (this.rows.length) {
          // Report csv name based on start and end dates
          if (this.payload.startDate === this.payload.endDate) {
            this.csvName = `LGSB_${
              type == 'mas' ? 'MAS' : 'Syncada'
            } Upload ${this.$dayjs(this.payload.startDate).format(
              'MM.DD.YY'
            )}.csv`;
          } else {
            this.csvName = `LGSB_${
              type == 'mas' ? 'MAS' : 'Syncada'
            } Upload ${this.$dayjs(this.payload.startDate).format(
              'MM.DD.YY'
            )}-${this.$dayjs(this.payload.endDate).format('MM.DD.YY')}.csv`;
          }
          this.setDataForCsv();
        } else {
          this.showErrorMessage('Data not found');
        }
      } catch (error) {
        this.showErrorMessage(getApiErrorMsg(error));
      } finally {
        this.$vs.loading.close();
      }
    },
    /**
     * convert the data to csv
     * @param {*} rows
     */
    convertToCsv(rows) {
      return rows.join('\n');
    },
    setDataForCsv() {
      downloadCsv(this.convertToCsv(this.rows), this.csvName);
    },
    onDatePickerClose(selectedDates, dateStr, instance) {
      if (selectedDates.length == 1) {
        instance.setDate([selectedDates[0], selectedDates[0]], true);
      }
    },
  },
  watch: {
    // look over the date range for start and end date if there is one set the end date to same
    selectedDateRange: {
      handler(val) {
        if (val) {
          const dates = this.selectedDateRange.split(' to ');
          if (dates.length && dates.length === 1) {
            this.payload.startDate = dates[0];
            this.payload.endDate = dates[0];
          } else {
            this.payload.startDate = dates[0];
            this.payload.endDate = dates[1];
          }
        }
      },
    },
  },
};
</script>
