<template>
  <vx-card>
    <div class="vx-row m-0 flex justify-between items-center w-full">
      <div class="vx-col pl-0 flex items-center">
        <h3 class="title" v-text="'Trailers'" />
        <Dropdown
          class="min-width-125 ml-4"
          v-model="filter.status"
          :options="status"
          dataKey="uniqueId"
          optionLabel="label"
          optionValue="value"
          placeholder="Select Status"
          @change="fetchTrailers()"
        />
      </div>
      <div class="vx-col pr-0 flex">
        <vs-button
          color="primary"
          type="border"
          icon-pack="feather"
          icon="icon-external-link"
          id="button-export-loading"
          class="vs-con-loading__container"
          @click.stop="exportExcel"
        >
          Export
        </vs-button>
        <vs-button
          class="ml-4"
          color="primary"
          icon="local_shipping"
          @click.prevent="redirectToAddTrailer"
        >
          ADD TRAILER
        </vs-button>
      </div>
    </div>
    <vs-divider />
    <div class="vx-row">
      <div class="vx-col w-full">
        <DataTable
          :value="trailers"
          filterDisplay="row"
          :filters="filter"
          removableSort
          responsiveLayout="scroll"
          :lazy="true"
          :paginator="true"
          :rows="defaultPageSize"
          :rowHover="true"
          :totalRecords="totalRecords"
          @sort="onSort($event)"
          @page="onPage($event)"
          :rowsPerPageOptions="[10, 25, 50]"
          :currentPageReportTemplate="`Displaying {first} to {last} of {totalRecords} records`"
        >
          <Column header="" :headerStyle="{ width: '0.5rem' }">
            <template #body="{ data }">
              <div>
                <vs-icon
                  class="cursor-pointer"
                  icon="edit"
                  @click.prevent="editTrailer(data)"
                />
              </div>
            </template>
          </Column>
          <Column
            field="trailerNumber"
            header="Trailer Number"
            :showFilterMenu="false"
          >
            <template #body="{ data: { trailerNumber } }">
              <div>
                <span v-text="trailerNumber" />
              </div>
            </template>
            <template #filter="{}">
              <InputText
                class="p-column-filter"
                style="width: 100px"
                v-model="filter['trailerNumber']"
                type="text"
                @input="onFilter"
              />
            </template>
          </Column>
          <Column
            field="driverName"
            header="Driver Name"
            :showFilterMenu="false"
          >
            <template #body="{ data: { driverName } }">
              <div>
                <span v-text="driverName" />
              </div>
            </template>
            <template #filter="{}">
              <InputText
                class="p-column-filter"
                style="width: 100px"
                v-model="filter['driverName']"
                type="text"
                @input="onFilter"
              />
            </template>
          </Column>
          <Column field="year" header="Year" :showFilterMenu="false">
            <template #body="{ data: { year } }">
              <div>
                <span v-text="year" />
              </div>
            </template>
            <template #filter="{}">
              <InputText
                class="p-column-filter"
                style="width: 100px"
                v-model="filter['year']"
                type="text"
                @input="onFilter"
              />
            </template>
          </Column>
          <Column field="make" header="Make" :showFilterMenu="false">
            <template #body="{ data: { make } }">
              <div>
                <span v-text="make" />
              </div>
            </template>
            <template #filter="{}">
              <InputText
                class="p-column-filter"
                style="width: 100px"
                v-model="filter['make']"
                type="text"
                @input="onFilter"
              />
            </template>
          </Column>
          <Column field="vin" header="VIN" :showFilterMenu="false">
            <template #body="{ data: { vin } }">
              <div>
                <span v-text="vin" />
              </div>
            </template>
            <template #filter="{}">
              <InputText
                class="p-column-filter"
                style="width: 100px"
                v-model="filter['vin']"
                type="text"
                @input="onFilter"
              />
            </template>
          </Column>
          <Column
            field="Tag"
            header="Tag"
            :showFilterMenu="false"
            :sortable="false"
          >
            <template #body="{ data: { tags } }">
              <div>
                <span v-text="getTags(tags)" />
              </div>
            </template>
            <template #filter="{}">
              <Dropdown
                v-model="filter['tagId'].value"
                :options="allTags"
                placeholder="Tag"
                optionLabel="business_name"
                optionValue="tag_id"
                class="p-column-filter"
                :showClear="true"
                appendTo="body"
                @change="onFilter()"
              />
            </template>
          </Column>
          <Column
            field="licensePlate"
            header="License Plate"
            :showFilterMenu="false"
          >
            <template #body="{ data: { licensePlate } }">
              <div>
                <span v-text="licensePlate" />
              </div>
            </template>
            <template #filter="{}">
              <InputText
                class="p-column-filter"
                style="width: 100px"
                v-model="filter['licensePlate']"
                type="text"
                @input="onFilter"
              />
            </template>
          </Column>
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
import { getApiErrorMsg } from '@/helpers/helper';

export default {
  name: 'TrailersList',
  data() {
    return {
      trailers: [],
      totalPage: 1,
      totalRecords: 0,
      status: [
        { id: 1, label: 'Active', value: 'active' },
        { id: 2, label: 'Inactive', value: 'inactive' },
      ],
      filter: {
        status: 'active', // string, one of “active” or “inactive”,
        trailerNumber: '', // string,
        driverName: '', // string,
        year: '', // string,
        make: '', // string,
        vin: '', // string,
        licensePlate: '', // string,
        tagId: { value: null },
      },
      sortBy: {},
      loading: false,
      paginationMetaData: null,
      defaultPageSize: 25,
      allTags: [],
    };
  },
  computed: {
    footerText() {
      const { from, to, total } = this.paginationMetaData || {};
      if (from && to && total) {
        return `Displaying ${from} to ${to} of ${total} records`;
      }
      return '';
    },
  },
  async created() {
    await this.getAllTags();
    this.initLocalFilters();
    this.init();
  },
  methods: {
    async fetchTrailers(pageSize = this.defaultPageSize, currentPage = 1) {
      try {
        this.loading = true;
        const payload = {
          pageSize,
          // sortBy: this.sortBy,
        };
        const filter = {};
        for (const key in this.filter) {
          if (typeof this.filter[key] === 'object') {
            if (this.filter[key].value !== null) {
              filter[key] = this.filter[key].value;
            }
            continue;
          }
          if (this.filter[key]) {
            filter[key] = this.filter[key];
          }
        }
        if (Object.keys(filter).length) {
          payload.filter = filter;
        }
        let { data, meta, links } = await this.$store.dispatch(
          'trailersV2/fetchAllTrailers',
          {
            currentPage,
            payload,
          }
        );
        this.trailers = data || [];
        this.totalPage = (meta || {}).last_page || 1;
        this.totalRecords = (meta || {}).total || 0;
        this.paginationMetaData = meta;
        return data;
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
        this.loading = false;
      }
    },
    initLocalFilters() {
      const lastRouteName = this.$store.state.previousRoute;
      const validRoutes = ['CreateTrailer', 'UpdateTrailer'];
      const trailerFilters =
        (this.$store.state.localFilters &&
          this.$store.state.localFilters.trailerFilters) ||
        {};

      if (
        lastRouteName &&
        validRoutes.includes(lastRouteName) &&
        trailerFilters
      ) {
        Object.keys(trailerFilters).forEach((key) => {
          if (trailerFilters[key]) {
            if (typeof trailerFilters[key] === 'object') {
              this.filter[key].value = trailerFilters[key].value;
            } else {
              this.filter[key] = trailerFilters[key];
            }
          }
        });
      } else {
        this.$store.commit('UPDATE_LOCAL_FILTERS', {
          trailerFilters: {},
        });
      }
    },
    async init() {
      try {
        this.$vs.loading();
        await this.fetchTrailers();
      } catch (error) {
      } finally {
        this.$vs.loading.close();
      }
    },
    redirectToAddTrailer() {
      this.saveLocalFilters();
      this.$router.push({ name: 'CreateTrailer' }).catch(() => true);
    },
    editTrailer(data) {
      if (!(data || {}).id) return;
      this.saveLocalFilters();
      this.$router
        .push({
          name: 'UpdateTrailer',
          params: {
            trailerDetails: data,
            id: data.id,
          },
        })
        .catch(() => true);
    },
    onSort(event) {},
    onPage({ page, rows }) {
      this.fetchTrailers(rows, page + 1);
    },
    async getAllTags() {
      const response = await this.$store.dispatch('tag/getAllTags');
      this.allTags = response.payload.data;
    },
    getTags(tags) {
      let tagLabels = [];
      tags.forEach(function (value) {
        tagLabels.push(value.tagBusinessName);
      });
      return tagLabels.join(', ');
    },
    async exportExcel() {
      try {
        const payload = {
          filter: {},
        };
        const filter = {};
        for (const key in this.filter) {
          if (typeof this.filter[key] === 'object') {
            if (this.filter[key].value !== null) {
              filter[key] = this.filter[key].value;
            }
            continue;
          }
          if (this.filter[key]) {
            filter[key] = this.filter[key];
          }
        }
        if (Object.keys(filter).length) {
          payload.filter = filter;
        }
        payload.filter.toDownload = 1;
        this.$vs.loading({
          container: '#button-export-loading',
          scale: 0.45,
        });
        const data = await this.$store.dispatch('trailersV2/fetchAllTrailers', {
          payload,
        });
        window.location = data.download_url;
        return;
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
        this.$vs.loading.close('#button-export-loading > .con-vs-loading');
      }
    },
    async onFilter() {
      try {
        this.loading = true;
        await this.fetchTrailers();
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
        this.loading = false;
      }
    },
    saveLocalFilters() {
      const isFilterApplied = Object.keys(this.filter).some((key) => {
        if (key === 'status' && this.filter[key] === 'active') {
          return false;
        }
        if (typeof this.filter[key] === 'object') {
          return this.filter[key].value;
        }
        return this.filter[key];
      });

      if (isFilterApplied) {
        this.$store.commit('UPDATE_LOCAL_FILTERS', {
          trailerFilters: this.filter,
        });
      } else {
        this.$store.commit('UPDATE_LOCAL_FILTERS', {
          trailerFilters: {},
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .vs-input--icon {
    top: 10px;
  }
}

// Utility
.min-width-125 {
  min-width: 125px;
}
.vx-card {
  box-shadow: none !important;
}
</style>
