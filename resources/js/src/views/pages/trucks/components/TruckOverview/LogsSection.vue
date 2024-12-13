<template>
  <!-- Logs Section -->
  <vx-card class="mt-4">
    <div class="vx-row">
      <div class="vx-col">
        <h5 class="font-bold">Logs</h5>
      </div>
    </div>
    <vs-divider />
    <div class="vx-row flex" v-for="{ id, label, value } in logs" :key="id">
      <div class="vx-col flex-1">
        <label class="text-xs">{{ label }}</label>
      </div>
      <div class="vx-col flex-none text-right">
        <label class="text-xs font-bold">{{ value }}</label>
      </div>
    </div>
  </vx-card>
</template>

<script>
export default {
  name: "LogSection",
  data() {
    return {
      logs: [
        {
          id: 1,
          label: "Odometer at Purchase",
          value: "0.0",
        },
        {
          id: 2,
          label: "Current Odometer",
          value: "",
        },
        {
          id: 3,
          label: "Calculated Odometer",
          value: "0.0",
        },
        {
          id: 4,
          label: "Today",
          value: "09/26/2012",
        },
        {
          id: 5,
          label: "Date Acquired",
          value: "",
        },
        {
          id: 6,
          label: "Days",
          value: "0",
        },
        {
          id: 7,
          label: "Avg Miles Per Day",
          value: "0.0",
        },
        {
          id: 8,
          label: "Avg Miles Per Month",
          value: "0.0",
        },
        {
          id: 9,
          label: "Avg Miles Per Year",
          value: "0.0",
        },
        {
          id: 10,
          label: "End of Useful Life",
          value: "",
        },
        {
          id: 11,
          label: "Days Until End Of Useful Life",
          value: "0",
        },
        {
          id: 12,
          label: "Estimated Miles Driven Throughout The Remainder Of The UL",
          value: "0.0",
        },
        {
          id: 13,
          label: "Estimated Miles At The End Of Useful Life",
          value: "0.0",
        },
        {
          id: 14,
          label: "Target Miles At End of Useful Life",
          value: "0.0",
        },
        {
          id: 15,
          label: "Difference of Miles from Current Miles",
          value: "0.0",
        },
        {
          id: 16,
          label: "Estimated Miles Per Day",
          value: "0.0",
        },
        {
          id: 17,
          label: "Estimated Miles Per Month",
          value: "0.0",
        },
        {
          id: 18,
          label: "Estimated Miles Per Year",
          value: "0.0",
        },
      ],
    };
  },
};
</script>
