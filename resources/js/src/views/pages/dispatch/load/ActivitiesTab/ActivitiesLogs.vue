<template>
  <DataTable :value="activitiesLogs" responsiveLayout="scroll">
    <Column field="utcTime" header="Date and Time">
      <template #body="slotProps">
        {{ utcToLocal(slotProps.data.utcTime) }}
      </template>
    </Column>
    <Column field="modifiedByUser" header="User Name">
      <template #body="slotProps">
        {{ slotProps.data.modifiedByUser.name }}
      </template>
    </Column>
    <Column field="modifiedByUser" header="User Role">
      <template #body="slotProps">
        {{ slotProps.data.modifiedByUser.role }}
      </template>
    </Column>
    <Column field="" header="Notes">
      <template #body="slotProps">
        {{ getNotes(slotProps.data) }}
      </template>
    </Column>
    <template #empty> No records found </template>
  </DataTable>
</template>

<script>
import config from '@/config/constants.js';

export default {
  props: {
    logs: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activitiesLogs: [],
    };
  },
  mounted() {
    this.activitiesLogs = this.logs.filter((l) => {
      // Test account for one user, I use it to handle the cases when email load cannot be created.
      if (
        process.env.NODE_ENV == 'production' &&
        l.modifiedByUser &&
        l.modifiedByUser.id == 595
      ) {
        return false;
      }
      return true;
    });
  },
  methods: {
    utcToLocal(utcTime) {
      return this.$dayjs.utc(utcTime).local().format('MM/DD/YY HH:mm z');
    },
    getNotes({ type, truck, trailer }) {
      if (type) {
        if (
          type === 'adminDispatcherAssignVehicleToLoad' ||
          type === 'driverAssignVehicleToLoad'
        ) {
          if (truck && truck.number && trailer && trailer.number) {
            return `Assigned truck ${truck.number} and trailer ${trailer.number}`;
          } else if (truck && truck.number) {
            return `Assigned truck ${truck.number}`;
          } else if (trailer && trailer.number) {
            return `Assigned trailer ${trailer.number}`;
          } else {
            return '';
          }
        } else {
          return config.loadLogStatuses[type] || '';
        }
      }
    },
  },
};
</script>
