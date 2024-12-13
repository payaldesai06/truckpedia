<template>
  <DataTable
    v-if="lanes.length"
    :value="lanes"
    :expandedRows.sync="expandedRows"
    dataKey="id"
  >
    <Column field="origin" header="Pickup">
      <template #body="slotProps">
        <p>
          {{ formatStop(slotProps.data.origin) }}
        </p>
        <div v-if="slotProps.data.origin.geofence">
          <span>Deadhead:</span
          ><span class="font-semibold pl-2">
            {{ slotProps.data.origin.geofence.deadhead }}</span
          >
        </div>
      </template>
    </Column>
    <Column field="destination" header="Delivery">
      <template #body="slotProps">
        <p>
          {{ formatStop(slotProps.data.destination) }}
        </p>
        <div v-if="slotProps.data.destination.geofence">
          <span>Deadhead:</span
          ><span class="font-semibold pl-2">{{
            slotProps.data.destination.geofence.deadhead
          }}</span>
        </div>
      </template>
    </Column>
    <Column field="rpm" header="Target RPM">
      <template #body="slotProps">
        <p>
          {{ formatRPM(slotProps.data.rpm) }}
        </p>
      </template>
    </Column>
    <Column field="minRate" header="Min Rate">
      <template #body="slotProps">
        <p>
          {{ slotProps.data.minRate }}
        </p>
      </template>
    </Column>
    <Column field="repeat" header="Frequency">
      <template #body="slotProps">
        <vs-chip
          class="frequency-chip"
          :color="frequencyToChipColor(slotProps.data.repeat)"
          transparent
        >
          {{ slotProps.data.repeat }}
        </vs-chip>
      </template>
    </Column>
    <Column field="maxWeight" header="Max Weight">
      <template #body="slotProps">
        <p>
          {{ slotProps.data.maxWeight }}
        </p>
      </template>
    </Column>
    <Column style="width: 2rem">
      <template #body="slotProps">
        <vs-dropdown class="cursor-pointer mt-2">
          <MoreVerticalIcon class="cursor-pointer" stroke="#6c757d" />
          <vs-dropdown-menu>
            <vs-dropdown-item @click="$emit('updateLane', slotProps.data)">
              <div class="flex col-gap-2 items-center">
                <EditIcon stroke="#6c757d" size="16" />
                <span>Edit</span>
              </div>
            </vs-dropdown-item>
            <vs-dropdown-item>
              <div
                class="flex col-gap-2 items-center"
                @click="openDeleteConfirmation(slotProps.data.id)"
              >
                <Trash2Icon stroke="red" size="16" />
                <span>Delete</span>
              </div>
            </vs-dropdown-item>
          </vs-dropdown-menu>
        </vs-dropdown>
      </template>
    </Column>
    <Column expander style="width: 2rem" />
    <template #expansion="slotProps">
      <div class="flex justify-between mb-5 flex-wrap w-full">
        <div class="mw-45" style="line-height: 28px">
          <div class="flex mb-2" v-if="slotProps.data.trucks.length">
            <p class="title">Trucks</p>
            <p class="font-semibold break-all content">
              {{ joinTruckIds(slotProps.data.trucks) }}
            </p>
          </div>
          <div class="flex mb-2">
            <p class="title">Equipment Type</p>
            <p class="font-semibold capitalize break-all content">
              {{ slotProps.data.equipmentTypes.join(', ') }}
            </p>
          </div>
          <div v-if="slotProps.data.repeat === 'once'" class="flex mb-2">
            <p class="title">Date Range</p>
            <p class="font-semibold content">
              {{ slotProps.data.startDate }} -
              {{ slotProps.data.endDate }}
            </p>
          </div>
        </div>
        <div class="mw-45" style="line-height: 28px">
          <div class="flex mb-2" v-if="slotProps.data.weeklyDays">
            <p class="title">Days of the week</p>
            <p class="font-semibold capitalize content">
              {{ joinDays(slotProps.data.weeklyDays) }}
            </p>
          </div>
          <div class="flex mb-2" v-if="slotProps.data.startTime">
            <p class="title">Start Time</p>
            <p class="font-semibold content">
              {{ slotProps.data.startTime }}
            </p>
          </div>
          <div class="flex mb-2" v-if="slotProps.data.endTime">
            <p class="title">End Time</p>
            <p class="font-semibold content">
              {{ slotProps.data.endTime }}
            </p>
          </div>
        </div>
      </div>
    </template>
  </DataTable>
</template>
<script>
import { MoreVerticalIcon, EditIcon, Trash2Icon } from 'vue-feather-icons';
export default {
  name: 'RatesListView',
  components: {
    MoreVerticalIcon,
    EditIcon,
    Trash2Icon,
  },
  data() {
    return {
      expandedRows: [],
      lanes: [],
    };
  },
  mounted() {
    this.getAllMarketplaceLanes();
  },
  methods: {
    frequencyToChipColor(value) {
      if (value === 'once') return 'warning';
      else if (value === 'weekly') return 'success';
    },
    async getAllMarketplaceLanes() {
      const parameters = {
        //page: 1,
        //pageSize: 50,
        fields: [
          'repeat',
          'weeklyDays',
          'startDate',
          'endDate',
          'startTime',
          'endTime',
          'equipmentTypes',
          'distance',
          'rpm',
          'maxRpm',
          'maxWeight',
          'trucks',
          'origin',
          'minRate',
          'destination',
        ],
      };
      const { data } = await this.$store.dispatch(
        'marketplace/getMarketplaceLanes',
        parameters
      );
      this.lanes = data.result ? data.payload.lanes : [];
    },
    joinTruckIds(arr) {
      return arr.map((item) => item.number).join(', ') || '-';
    },
    joinDays(arr) {
      if (!arr || !arr.length) return '';
      if (arr.length === 7) return 'Mon-Sun';
      else return arr.map((item) => item.slice(0, 3)).join(', ');
    },
    formatStop(stop) {
      if (stop.geofence) {
        return stop.geofence.city + ', ' + stop.geofence.state;
      } else if (stop.states) {
        return stop.states.join(', ');
      }
    },
    formatRPM(value) {
      return Number(value).toFixed(2);
    },
    async openDeleteConfirmation(id) {
      await this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Delete lane',
        text: 'Are you sure you want to delete this lane?',
        accept: () => this.handleDelete(id),
      });
    },
    handleDelete(id) {
      this.$vs.loading();
      this.$store
        .dispatch('marketplace/deleteMarketplaceLanes', id)
        .then((data) => {
          if (data.status === 200) {
            this.getAllMarketplaceLanes();
            this.$vs.notify({
              title: 'Delete schedule',
              text: 'Lane deleted successfully',
              color: 'success',
            });
          }
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        })
        .finally(() => {
          this.$vs.loading.close();
        });
    },
  },
};
</script>
<style lang="scss">
.vs-dropdown-menu {
  min-width: 120px;

  .vs-dropdown--menu {
    padding: 10px !important;

    .vs-dropdown--item-link {
      padding: 10px 10px;
    }
  }
}
</style>

<style lang="scss" scoped>
.mw-45 {
  width: 45%;
}
.title {
  min-width: 25%;
}
.content {
  min-width: 75%;
}
@media (max-width: 768px) {
  .mw-45 {
    width: 100% !important;
  }
  .title {
    min-width: 50%;
  }
  .content {
    min-width: 50%;
  }
}
</style>
