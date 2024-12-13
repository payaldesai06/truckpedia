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
            @on-change="onDateChange"
          />
        </div>
        <div>
          <vs-button
            color="primary"
            v-if="selectedDateRange"
            @click="getFlatFile()"
            >Flat File</vs-button
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
     * Get Flat File Reports
     */
    async getFlatFile() {
      this.$vs.loading();
      try {
        const { data } = await this.$store.dispatch('trip2/getFlatFile', {
          ...this.payload,
        });
        this.rows = data.payload;
        this.csvName = `GEAP_PDCO_Invoice_${this.$dayjs(
          this.payload.endDate
        ).format('MMDDYY')}.csv`;
        if (this.rows.length) {
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
    onDateChange() {
      if (this.selectedDateRange) {
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
};
</script>
