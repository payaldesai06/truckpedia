<template>
  <vx-card title="Driver Pay Manger" id="driver-pay-manager">
    <div class="vx-row">
      <div class="vx-col w-full mb-4">
        <div class="w-1/4">
          <h2 class="text-base opacity-75 mb-2">Pay Range Filter</h2>
          <flat-pickr
            class="w-full"
            v-model="filters['pay_range']"
            :config="flat_pikr_config"
          />
        </div>
      </div>

      <div class="mt-base vx-col w-full">
        <DataTable
          :value="items.data"
          :lazy="true"
          :paginator="true"
          :rows="rows"
          :rowHover="true"
          :totalRecords="totalRecords"
          :filters="filters"
          filterDisplay="row"
          :loading="loading"
          responsiveLayout="scroll"          
          @sort="onSort($event)"
          @page="onPage($event)"
          :rowsPerPageOptions="[5, 10, 15]"
        >
          <template #empty>
            No records found
          </template>

          <Column
            field="id"
            header="Trip #"
            :sortable="true"
            :showFilterMenu="false"
          >
            <template #body="slotProps">
              {{ slotProps.data.trip_id }}
            </template>
            <template #filter>
              <InputText
                type="text"
                v-model="filters['id']"
                @input="onInputFilter"
                class="p-column-filter w-full"
              />
            </template>
          </Column>

          <Column
            field="trip_start_date"
            header="Trip StartDate"
            :sortable="true"
            :showFilterMenu="false"
          >
            <template #body="slotProps">
              {{ slotProps.data.trip_start_date }}
            </template>
            <template #filter>
              <InputText
                type="text"
                v-model="filters['trip_start_date']"
                @input="onInputFilter"
                class="p-column-filter w-full"
              />
            </template>
          </Column>

          <Column
            field="trip_end_date"
            header="Trip EndDate"
            :sortable="true"
            :showFilterMenu="false"
          >
            <template #body="slotProps">
              {{ slotProps.data.trip_end_date }}
            </template>
            <template #filter>
              <InputText
                type="text"
                v-model="filters['trip_end_date']"
                @input="onInputFilter"
                class="p-column-filter w-full"
              />
            </template>
          </Column>

          <Column
            field="driver_one_name"
            header="Driver Name"
            :sortable="true"
            :showFilterMenu="false"
          >
            <template #body="slotProps">
              {{ slotProps.data.driver_one_name }}
            </template>
            <template #filter>
              <InputText
                type="text"
                v-model="filters['driver_one_name']"
                @input="onInputFilter"
                class="p-column-filter w-full"
              />
            </template>
          </Column>

          <Column
            field="driver_two_name"
            header="Co-Driver Name"
            :sortable="true"
            :showFilterMenu="false"
          >
            <template #body="slotProps">
              {{ slotProps.data.driver_two_name }}
            </template>
            <template #filter>
              <InputText
                type="text"
                v-model="filters['driver_two_name']"
                @input="onInputFilter"
                class="p-column-filter w-full"
              />
            </template>
          </Column>

          <Column
            field="total_miles"
            header="Total Miles"
            :sortable="true"
            :showFilterMenu="false"
          >
            <template #body="slotProps">
              {{ slotProps.data.total_miles }}
            </template>
            <template #filter>
              <InputText
                type="text"
                v-model="filters['total_miles']"
                @input="onInputFilter"
                class="p-column-filter w-full"
              />
            </template>
          </Column>

          <Column
            field="trip_start_time"
            header="Trip Start Time"
            :sortable="true"
            :showFilterMenu="false"
          >
            <template #body="slotProps">
              {{ slotProps.data.trip_start_time }}
            </template>
            <!--<template #filter>
              <InputText type="text"
                         v-model="filters['trip_start_time']"
                         @input="onInputFilter"
                         class="p-column-filter w-full"/>
            </template>-->
          </Column>

          <Column
            field="trip_end_time"
            header="Trip End Time"
            :sortable="true"
            :showFilterMenu="false"
          >
            <template #body="slotProps">
              {{ slotProps.data.trip_end_time }}
            </template>
            <!--<template #filter>
              <InputText type="text"
                         v-model="filters['trip_end_time']"
                         @input="onInputFilter"
                         class="p-column-filter w-full"/>
            </template>-->
          </Column>

          <Column
            field="total_hours"
            header="Total Hours"
            :sortable="true"
            :showFilterMenu="false"
          >
            <template #body="slotProps">
              {{ slotProps.data.total_hours }}
            </template>
            <template #filter>
              <InputText
                type="text"
                v-model="filters['total_hours']"
                @input="onInputFilter"
                class="p-column-filter w-full"
              />
            </template>
          </Column>
          <Column
            field="reimbursement"
            header="Reimbursement"
            :sortable="true"
            :showFilterMenu="false"
          >
            <template #body="slotProps">
              {{ slotProps.data.reimbursement }}
            </template>
            <template #filter>
              <InputText
                type="text"
                v-model="filters['reimbursement']"
                @input="onInputFilter"
                class="p-column-filter w-full"
              />
            </template>
          </Column>
          <Column
            field="total_payment"
            header="Amount"
            :sortable="true"
            :showFilterMenu="false"
          >
            <template #body="slotProps">
              {{ slotProps.data.total_payment }}
              <!-- {{ `$${slotProps.data.total_payment}` }} -->
            </template>
            <!-- <template #filter>
              <InputText type="text"
                         v-model="filters['total_payment']"
                          @input="onInputFilter"
                         class="p-column-filter w-full"/>
            </template> -->
          </Column>

          <Column
            field="status"
            header="Status"
            :sortable="true"
            :showFilterMenu="false"
          >
            <template #body="slotProps">
              {{ slotProps.data.status }}
            </template>
            <template #filter>
              <InputText
                type="text"
                v-model="filters['status']"
                @input="onInputFilter"
                class="p-column-filter w-full"
              />
            </template>
          </Column>

          <Column
            field="payment_request_date"
            header="Request Date"
            :sortable="true"
            :showFilterMenu="false"
          >
            <template #body="slotProps">
              {{ slotProps.data.payment_request_date }}
            </template>
            <template #filter>
              <InputText
                type="text"
                v-model="filters['payment_request_date']"
                @input="onInputFilter"
                class="p-column-filter w-full"
              />
            </template>
          </Column>

          <Column header="Action">
            <template #body="slotProps">
              <div class="flex items-center space-x-2">
                <vs-button
                  type="filled"
                  color="#00cfe8"
                  @click="onEdit(slotProps.data)"
                  >Edit</vs-button
                >
              </div>
            </template>
          </Column>

          <template #footer>
            In total there are {{ totalRecords }} items.
          </template>
        </DataTable>
      </div>
    </div>
  </vx-card>
</template>

<script>
import DatatableMixin from "@/mixins/datatableMixin";
import { mapState } from "vuex";

export default {
  name: "DriverPayManagerDatatable",

  mixins: [DatatableMixin],

  data() {
    return {
      filters: {
        id: "",
        trip_start_date: "",
        trip_end_date: "",
        driver_one_name: "",
        driver_two_name: "",
        total_miles: "",
        total_hours: "",
        total_payment: "",
        reimbursement: "",
        status: "",
        payment_request_date: "",
        trip_start_time: "",
        trip_end_time: ""
      },

      // Flat Pikr Config
      flat_pikr_config: {
        mode: "range",
        defaultDate: []
      }
    };
  },

  mounted() {
    this.commonApiCall();
  },

  computed: {
    ...mapState("driver-pay", { items: "driverPays" })
  },

  methods: {
    async commonApiCall(filter = {}) {
      this.loading = true;

      try {
        await this.$store.dispatch("driver-pay/getDriverDatatable", {
          eventForServer: this.eventForServer,
          filter
        });
      } catch (error) {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message
        });
      } finally {
        this.loading = false;
      }
    },

    onEdit(trip) {
      this.$router.push({
        name: "driver-pay-manager-edit",
        params: { id: trip.trip_id }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
//#driver-pay-manager table tr th.p-sortable-column,
//#driver-pay-manager tbody.p-datatable-tbody td {
//  text-align: center !important;
//}

::v-deep {
  .p-sortable-column,
  .p-datatable-tbody > tr > td {
    @apply truncate;
  }

  //.p-datatable-thead > tr > td,
  //.p-datatable-tbody  td {
  //  @apply text-center
  //}
}
</style>
