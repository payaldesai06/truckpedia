import { cloneDeep } from 'lodash';
import { parseFloatWithTrim, commaSeparatedValue } from '@/helpers/helper';

export default {
  filters: {
    formatNumberWithCommas(value) {
      if (!value) return value;
      const formattedValue = parseFloatWithTrim(value);
      return commaSeparatedValue(formattedValue);
    },
    formatNumber(value) {
      if (!value) return value;
      return parseFloatWithTrim(value);
    },
  },
  methods: {
    onSort({ sortField, sortOrder }, valueKey) {
      if (!this.rawResponse[valueKey]) return [];
      if (this.sortBy !== undefined) {
        this.sortBy = {
          sortField: sortField || null,
          sortOrder: sortOrder || null,
        };
      }

      if (sortField && sortOrder) {
        (this[valueKey] || []).sort((a, b) => {
          const valueA = a[sortField];
          const valueB = b[sortField];
          if (valueA === null || valueB === null) return 0;
          if (sortOrder === 1) {
            return valueA > valueB ? 1 : -1;
          } else {
            return valueA < valueB ? 1 : -1;
          }
        });
      } else {
        this[valueKey] = cloneDeep(this.rawResponse[valueKey]);
        if (
          this.driversFuelEnergyReports !== undefined ||
          this.trucksFuelEnergyReports !== undefined
        ) {
          this.initFuelEnergyReportFields();
        }
      }
    },
    tagNames(value) {
      if (!value || !value.length) return '';

      return value
        .map(({ tagId }) => {
          const tag = (this.tagOptions || []).find(
            (tag) => tag.tag_id === tagId
          );
          return tag ? tag.business_name : '';
        })
        .join(', ');
    },
  },
  watch: {
    selectedDateRange: {
      handler(date) {
        if (date.split(' to ').length === 2) {
          this.initTab();
        }
      },
      deep: true,
    },
    selectedTag: {
      handler() {
        this.initTab();
      },
      deep: true,
    },
  },
};
