<template>
  <vx-card class="mt-4">
    <div class="vx-row m-0 flex justify-between items-center w-full">
      <div class="vx-col pl-0">
        <h3 class="title" v-text="'Trailer Logs'" />
      </div>
      <div class="vx-col pr-0"></div>
    </div>
    <vs-divider />
    <div class="vx-row">
      <div class="vx-col w-full mt-4">
        <DataTable
          :value="logs"
          responsiveLayout="scroll"
          :lazy="true"
          :paginator="true"
          :rows="defaultPageSize"
          :rowHover="true"
          :totalRecords="totalRecords"
          :scrollable="true"
          @sort="onSort($event)"
          @page="onPage($event)"
          :rowsPerPageOptions="[10, 25, 50]"
          :currentPageReportTemplate="`Displaying {first} to {last} of {totalRecords} records`"
        >
          <Column field="trailerNumber" header="Trailer #" />
          <Column field="status" header="Status">
            <template #body="slotProps">
              <div>
                <vs-chip
                  transparent
                  :color="accentColor(slotProps.data.status)"
                >
                  {{ toPascal(slotProps.data.status) }}
                </vs-chip>
              </div>
            </template>
          </Column>
          <Column field="utcDateTime" header="Datetime">
            <template #body="{ data }">
              {{ utcToLocalTime(data) }}
            </template>
          </Column>
          <Column field="location" header="Location" />
          <Column field="loadNumber" header="Load #" />
          <Column field="loadReference" header="Reference" />
          <Column field="loadShipper" header="Shipper" />
          <Column field="loadReceiver" header="Receiver" />
          <Column field="loadDriverName" header="Driver" />
          <Column field="modifiedByUserName" header="Modified By" />
          <template #empty><b>No records found</b></template>
          <template #footer v-if="footerText">
            <div class="vx-row flex justify-between items-center">
              <div class="vx-col">{{ footerText }}</div>
              <div class="vx-col">
                <!-- <vs-pagination :total="totalPage" v-model="currentPage" /> -->
              </div>
            </div>
          </template>
        </DataTable>
      </div>
    </div>
  </vx-card>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: "TrailerLogsList",
  props: {
    trailerData: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      logs: [],
      totalPage: 1,
      totalRecords: 0,
      paginationMetaData: null,
      defaultPageSize: 10,
    };
  },
  computed: {
    trailerId () {
      return this.$route.params.id || null
    },
    footerText() {
      const { from, to, total } = this.paginationMetaData || {}
      if (from && to && total) {
        return `Displaying ${from} to ${to} of ${total} records`;
      }
      return "";
    },
  },
  created() {
    this.init();
    // https://day.js.org/docs/en/plugin/utc
    const dayjsUtc = require('dayjs/plugin/utc')
    dayjs.extend(dayjsUtc)
  },
  methods: {
    utcToLocalTime(data) {
      if (data.utcDateTime) {
        return dayjs.utc(data.utcDateTime).local().format('YYYY-MM-DD HH:mm')
      }
    },
    async getLogsList(pageSize = 10, currentPage = 1) {
      try {
        if (!this.trailerId)
          throw new Error({ message: "Required id missing" });
        this.$vs.loading();
        let { meta, links, logs } = await this.$store.dispatch(
          "trailersV2/getLogsList",
          {
            id: this.trailerId,
            pageSize,
            page: currentPage,
          }
        );
        this.logs = logs || [];
        this.totalPage = (meta || {}).last_page || 1;
        this.totalRecords = (meta || {}).total || 0;
        this.paginationMetaData = meta;
        // return data;
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: "danger",
          title: "Error",
          text:
            (((error || {}).response || {}).data || {}).message ||
            'Something went wrong'
        });
      } finally {
        this.$vs.loading.close();
      }
    },
    async init() {
      try {
        await this.getLogsList();
      } catch (error) {}
    },
    toPascal(text) {
      const result = text.replace(/([A-Z])/g, " $1");
      return result.charAt(0).toUpperCase() + result.slice(1);
    },
    accentColor(key) {
      const colorScheme = {
        inOperation: "success",
        dropEmptyTrailer: "success",
        dropLoadedTrailer: "success",
        hookEmptyTrailer: "success",
        hookLoadedTrailer: "success",
        serviceCompleted: "success",

        inService: "danger",
        serviceScheduled: "danger",
        serviceReported: "danger",
      };
      return colorScheme[key] || "";
    },
    onSort(event) {},
    onPage({ page, rows }) {
      this.getLogsList(rows, page + 1);
    },
  },
};
</script>
