<template>
  <div>
    <div class="flex mt-5 justify-end items-center gap-4 mr-10">
      <v-select
        :options="ownerOperatorTags"
        v-model="selectedTag"
        :reduce="(option) => option.value"
        placeholder="Owner Operators"
        style="width: 250px"
        @input="onSelectedTagChange"
      />
      <flat-pickr
        v-model="selectedDateRange"
        placeholder="Select Date Range"
        :config="flat_pikr_config"
        @on-close="onDatePickerClose"
        @on-change="onDateChange"
        style="width: 14rem; max-height: 40px"
      />
    </div>
    <div class="vx-row mt-5 w-full">
      <div class="vx-col w-full">
        <DataTable
          :value="items"
          :lazy="true"
          :paginator="false"
          :loading="loading"
        >
          <template #empty> No records found </template>

          <Column field="item" header="Item"> </Column>

          <Column field="amount" header="Amount">
            <template #body="slotProps">
              {{ formatAmount(slotProps.data.amount) }}
            </template>
          </Column>
          <ColumnGroup type="footer">
            <Row>
              <Column footer="Totals:" footerStyle="text-align:right" />
              <Column :footer="totalAmount" />
            </Row>
          </ColumnGroup>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script>
import { formatAmount, getApiErrorMsg } from '@/helpers/helper';
import globalMixins from '@/mixins/globalMixins';
import { mapGetters } from 'vuex';

export default {
  name: 'SettlementSummary',

  mixins: [globalMixins],

  data() {
    return {
      selectedDateRange: '',
      selectedTag: null,
      items: [],
      loading: false,

      // Flate Pikr Config
      flat_pikr_config: {
        mode: 'range',
      },
    };
  },

  created() {
    if (!this.allTags.length) {
      this.$store.dispatch('tag/getAllTags');
    }
  },

  computed: {
    ...mapGetters('tag', ['allTags']),
    ownerOperatorTags() {
      return this.allTags
        .filter((tag) => tag.type === 'ownerOperator')
        .map((tag) => ({ label: tag.business_name, value: tag.tag_id }));
    },
    totalAmount() {
      const total = this.items.reduce(
        (total, item) => (total += item.amount),
        0
      );
      return formatAmount(total);
    },
  },
  methods: {
    async getSettlementSummary() {
      const dates = this.selectedDateRange.split(' to ');
      const requestPayload = {};

      if (dates.length && dates.length === 1) {
        requestPayload.startDate = dates[0];
        requestPayload.endDate = dates[0];
      } else {
        requestPayload.startDate = dates[0];
        requestPayload.endDate = dates[1];
      }
      if (this.selectedTag) {
        requestPayload.tagIds = [this.selectedTag];
      }
      this.loading = true;
      try {
        const {
          data: { payload },
        } = await this.$store.dispatch(
          'trip2/getSettlementSummary',
          requestPayload
        );
        this.items = payload;
      } catch (error) {
        this.showErrorMessage(getApiErrorMsg(error));
      } finally {
        this.loading = false;
      }
    },
    formatAmount(amount) {
      return formatAmount(amount);
    },
    onDatePickerClose(selectedDates, dateStr, instance) {
      if (selectedDates.length == 1) {
        instance.setDate([selectedDates[0], selectedDates[0]], true);
      }
    },
    onDateChange(dateArray) {
      if (dateArray.length > 1) {
        this.getSettlementSummary();
      }
    },
    onSelectedTagChange() {
      if (this.selectedDateRange) {
        this.getSettlementSummary();
      }
    },
  },
};
</script>

<style scoped></style>
