<template>
  <!-- Driver Assignments/Transponder Assignments Section -->
  <vx-card class="mt-4">
    <div class="vx-row">
      <div class="vx-col">
        <vs-chip class="cursor-pointer mx-2">Driver Assignments</vs-chip>
        <vs-chip class="cursor-pointer mx-2" color="primary">
          Transponder Assignments
        </vs-chip>
      </div>
    </div>
    <vs-divider />
    <div class="vx-row m-0">
      <div class="vx-row w-full flex justify-between">
        <div class="vx-col flex items-center">
          <vs-icon size="small" icon="add_circle" />
          <label class="text-xs ml-2">Transponder ID</label>
        </div>
        <div class="vx-col">
          <label class="text-xs">Start Date</label>
        </div>
        <div class="vx-col">
          <label class="text-xs">End Date</label>
        </div>
        <div class="vx-col">
          <label class="text-xs">Created At</label>
        </div>
      </div>
    </div>
    <vs-divider />
  </vx-card>
</template>

<script>
export default {
  name: "DriverTransponderAssignment",
};
</script>
