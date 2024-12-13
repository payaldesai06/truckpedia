<template>
  <vx-card>
    <div class="vx-row m-0 flex justify-between items-center w-full">
      <div class="vx-col pl-0 flex items-center">
        <h3 v-text="'Drivers'" />
        <Dropdown
          class="min-width-125 ml-4"
          v-model="filter.status.value"
          :options="status"
          dataKey="uniqueId"
          optionLabel="label"
          optionValue="value"
          placeholder="Select Status"
          @change="fetchDrivers()"
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
          icon="person_add"
          @click="redirectToAddDriver"
        >
          ADD DRIVER
        </vs-button>
      </div>
    </div>
    <vs-divider />
    <div class="vx-row">
      <div class="vx-col w-full">
        <DataTable
          :value="drivers"
          :key="defaultKey"
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
            <template #body="{ data: { id } }">
              <div>
                <vs-icon
                  class="cursor-pointer"
                  icon="edit"
                  @click.prevent="redirectToEditDriver(id)"
                />
              </div>
            </template>
          </Column>
          <Column
            field="name"
            header="Name"
            :showFilterMenu="false"
            :sortable="true"
          >
            <template #body="{ data: { name } }">
              <div>
                <span v-text="name" />
              </div>
            </template>
            <template #filter="{}">
              <InputText
                class="p-column-filter"
                style="width: 100px"
                v-model="filter['name'].value"
                type="text"
                @input="onFilter"
              />
            </template>
          </Column>
          <!-- <Column
            field="driverHos"
            header="Hos"
            :showFilterMenu="false"
            :sortable="false"
          >
            <template #body="{ data: { driverHos, name } }">
              <div v-if="driverHos" class="flex gap-1 justify-evenly">
                <Knob
                  :style="knobStyleObject"
                  :value="driverHos.breakValue"
                  :valueTemplate="driverHos.breakLabel"
                  :strokeWidth="hosKnobStrokeWidth"
                  :size="hosKnobIconHeight"
                  :valueColor="driverHos.breakValueColor"
                  :rangeColor="driverHos.breakRangeColor"
                  readonly
                  v-tooltip.top="`Until break: ${name}`"
                />

                <Knob
                  :style="knobStyleObject"
                  :value="driverHos.driveValue"
                  :valueTemplate="driverHos.driveLabel"
                  :strokeWidth="hosKnobStrokeWidth"
                  :size="hosKnobIconHeight"
                  :valueColor="driverHos.driveValueColor"
                  :rangeColor="driverHos.driveRangeColor"
                  readonly
                  v-tooltip.top="`Drive: ${name}`"
                />

                <Knob
                  :style="knobStyleObject"
                  :value="driverHos.shiftValue"
                  :valueTemplate="driverHos.shiftLabel"
                  :strokeWidth="hosKnobStrokeWidth"
                  :size="hosKnobIconHeight"
                  :valueColor="driverHos.shiftValueColor"
                  :rangeColor="driverHos.shiftRangeColor"
                  readonly
                  v-tooltip.top="`Shift: ${name}`"
                />

                <Knob
                  :style="knobStyleObject"
                  :value="driverHos.cycleValue"
                  :valueTemplate="driverHos.cycleLabel"
                  :strokeWidth="hosKnobStrokeWidth"
                  :size="hosKnobIconHeight"
                  :valueColor="driverHos.cycleValueColor"
                  :rangeColor="driverHos.cycleRangeColor"
                  readonly
                  v-tooltip.top="`Cycle: ${name}`"
                />
              </div>
            </template>
          </Column> -->
          <Column
            field="truckNumber"
            header="Truck"
            :showFilterMenu="false"
            :sortable="false"
          >
            <template #body="{ data: { truckNumber } }">
              <div>
                <span v-text="truckNumber" />
              </div>
            </template>
            <template #filter="{}">
              <InputText
                class="p-column-filter"
                style="width: 100px"
                v-model="filter['truckNumber'].value"
                type="text"
                @input="onFilter"
              />
            </template>
          </Column>
          <Column
            field="trailerNumber"
            header="Trailer"
            :showFilterMenu="false"
            :sortable="false"
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
                v-model="filter['trailerNumber'].value"
                type="text"
                @input="onFilter"
              />
            </template>
          </Column>
          <Column
            field="phone"
            header="Phone"
            :showFilterMenu="false"
            :sortable="true"
          >
            <template #body="{ data: { phone } }">
              <div>
                <span v-text="phone" />
              </div>
            </template>
            <template #filter="{}">
              <InputText
                class="p-column-filter"
                style="width: 100px"
                v-model="filter['phone'].value"
                type="text"
                @input="onFilter"
              />
            </template>
          </Column>
          <Column
            field="email"
            header="Email"
            :showFilterMenu="false"
            :sortable="true"
          >
            <template #body="{ data: { email } }">
              <div>
                <span v-text="email" />
              </div>
            </template>
            <template #filter="{}">
              <InputText
                class="p-column-filter"
                style="width: 100px"
                v-model="filter['email'].value"
                type="text"
                @input="onFilter"
              />
            </template>
          </Column>
          <Column
            field="companyEmployeeId"
            header="Employee ID"
            :showFilterMenu="false"
            :sortable="false"
          >
            <template #body="{ data: { companyEmployeeId } }">
              <div>
                <span v-text="companyEmployeeId" />
              </div>
            </template>
            <template #filter="{}">
              <InputText
                class="p-column-filter"
                style="width: 100px"
                v-model="filter['companyEmployeeId'].value"
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
                @change="onFilter()"
                :options="allTags"
                dataKey="uniqueId"
                placeholder="Tag"
                optionLabel="business_name"
                optionValue="tag_id"
                class="p-column-filter"
                :showClear="true"
                appendTo="body"
              />
            </template>
          </Column>
          <Column
            field="driverType"
            header="Driver Type"
            :showFilterMenu="false"
            :sortable="true"
          >
            <template #body="{ data: { driverType } }">
              <div>
                <span v-text="getDriverType(driverType)" />
              </div>
            </template>
            <template #filter="{}">
              <Dropdown
                v-model="filter['driverType'].value"
                @change="onFilter()"
                :options="driverTypes"
                placeholder="Any"
                optionLabel="label"
                optionValue="value"
                class="p-column-filter"
                :showClear="true"
                appendTo="body"
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
import config from '@/config/constants';
import { getUniqueIdV4 } from '@/helpers/helper';
import hosMixin from '@/mixins/hosMixin';

export default {
  name: 'DriverList',
  mixins: [hosMixin],
  data() {
    return {
      drivers: [],
      totalPage: 1,
      totalRecords: 0,
      status: [
        { id: 1, label: 'Active', value: 'active' },
        { id: 2, label: 'Inactive', value: 'inactive' },
      ],
      filter: {
        status: { value: 'active' },
        name: { value: null },
        truckNumber: { value: null },
        trailerNumber: { value: null },
        phone: { value: null },
        email: { value: null },
        driverType: { value: null },
        companyEmployeeId: { value: null },
        tagId: { value: null },
      },
      sortBy: {
        field: null,
        order: null,
      },
      loading: false,
      paginationMetaData: null,
      defaultPageSize: 25,
      driverTypes: config.driverTypes,
      allTags: [],
      defaultKey: 0,
      driverHos: [],
      hosKnobIconHeight: 35,
      hosKnobStrokeWidth: 5,
      isComponentCreated: false,
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
    knobStyleObject() {
      return {
        height: `35px`,
      };
    },
  },
  async created() {
    await this.getAllTags();
    this.initLocalFilters();
    this.init();
  },
  methods: {
    async fetchDrivers(pageSize = 25, currentPage = 1) {
      try {
        this.loading = true;

        const { data } = await this.$store.dispatch(
          'driverV2/fetchDriverList',
          {
            page: currentPage,
            pageSize,
            filter: Object.keys(this.filter).reduce((acc, key) => {
              if (this.filter[key].value) {
                acc[key] = this.filter[key].value;
              }

              return acc;
            }, {}),
            sortBy: this.sortBy.field && this.sortBy.order ? this.sortBy : {},
          }
        );
        this.drivers = data.payload.data || [];
        const { meta } = (data || {}).payload || {};
        const { last_page, total } = meta || {};
        this.totalPage = last_page || 1;
        this.totalRecords = total || 0;
        this.paginationMetaData = meta;

        // if (this.isComponentCreated) this.getDriverHos();

        return data;
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: error.response.data.message || error.message,
        });
      } finally {
        this.loading = false;
      }
    },
    initLocalFilters() {
      const lastRouteName = this.$store.state.previousRoute;
      const validRoutes = ['drivers-add', 'drivers-edit'];
      const driverFilters =
        (this.$store.state.localFilters &&
          this.$store.state.localFilters.driverFilters) ||
        {};
      if (
        lastRouteName &&
        validRoutes.includes(lastRouteName) &&
        driverFilters
      ) {
        Object.keys(driverFilters).forEach((key) => {
          if (driverFilters[key].value) {
            this.filter[key].value = driverFilters[key].value;
          }
        });
      } else {
        this.$store.commit('UPDATE_LOCAL_FILTERS', {
          driverFilters: {},
        });
      }
    },
    async init() {
      try {
        this.$vs.loading();
        await this.fetchDrivers();
        await this.$store.dispatch('vehicleV2/fetchAllVehicles');
        // this.getDriverHos();
      } catch (error) {
      } finally {
        this.$vs.loading.close();
        this.isComponentCreated = true;
      }
    },
    redirectToAddDriver() {
      this.saveLocalFilters();
      this.$router.push({ name: 'drivers-add' }).catch(() => true);
    },
    redirectToEditDriver(id) {
      this.saveLocalFilters();
      this.$router
        .push({ name: 'drivers-edit', params: { id } })
        .catch(() => true);
    },
    onSort({ sortField, sortOrder }) {
      this.sortBy = {
        field: sortField,
        order: sortOrder && sortOrder === 1 ? 'asc' : 'desc',
      };

      this.onFilter();
    },
    onPage({ page, rows }) {
      this.fetchDrivers(rows, page + 1);
    },
    getDriverType(driverType) {
      const driverTypeObj = config.driverTypes.find(
        (item) => item.value === driverType
      );
      return driverTypeObj ? driverTypeObj.label : '';
    },
    async getAllTags() {
      const response = await this.$store.dispatch('tag/getAllTags');
      this.allTags = response.payload.data.map((item) => ({
        ...item,
        uniqueId: getUniqueIdV4(),
      }));
    },
    getTags(tags) {
      var tagLabels = [];
      tags.forEach(function (value) {
        tagLabels.push(value.tagBusinessName);
      });
      return tagLabels.join(', ');
    },
    async onFilter() {
      try {
        this.loading = true;
        await this.fetchDrivers();
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      } finally {
        this.loading = false;
      }
    },
    async exportExcel() {
      try {
        const payload = {
          filter: {},
        };

        payload.filter = Object.keys(this.filter).reduce((acc, key) => {
          if (this.filter[key].value) {
            acc[key] = this.filter[key].value;
          }
          return acc;
        }, {});
        payload.filter.toDownload = true;

        this.$vs.loading({
          container: '#button-export-loading',
          scale: 0.45,
        });

        const data = await this.$store.dispatch(
          'driverV2/fetchDriverList',
          payload
        );
        window.location = data.data.payload.download_url;
        return;
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      } finally {
        this.$vs.loading.close('#button-export-loading > .con-vs-loading');
      }
    },
    async getDriverHos() {
      try {
        const {
          status,
          data: {
            payload: { hos },
          },
        } = await this.$store.dispatch('hos/fetchHos');

        if (status === 200 && hos && hos.length) {
          this.driverHos = [...hos];
          this.initDriverHosColData();
        }
      } catch (e) {
        console.error(e);
      }
    },
    initDriverHosColData() {
      if (this.driverHos && this.driverHos.length) {
        (this.drivers || []).forEach((driver) => {
          driver.driverHos = this.initHosData(
            this.driverHos,
            driver.firstName,
            driver.lastName
          );
        });
        this.defaultKey = new Date().getTime();
      }
    },
    saveLocalFilters() {
      // Check if any filter is applied
      const isFilterApplied = Object.keys(this.filter).some((key) => {
        if (key === 'status' && this.filter[key].value === 'active') {
          return false;
        }
        return this.filter[key].value;
      });
      if (isFilterApplied) {
        this.$store.commit('UPDATE_LOCAL_FILTERS', {
          driverFilters: this.filter,
        });
      } else {
        this.$store.commit('UPDATE_LOCAL_FILTERS', {
          driverFilters: {},
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

  .p-column-filter-clear-button {
    display: none;
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
