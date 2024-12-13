<template>
  <!-- Driver Assignments Section -->
  <vx-card class="mt-4 driver-assignment">
    <div class="vx-row flex justify-between align-center">
      <div class="vx-col">
        <h5 class="font-bold">Driver Assignments</h5>
      </div>
    </div>
    <vs-divider />
    <div>
      <div class="vx-row mx-0 driver-assignment-row">
        <div class="vx-col pl-0 w-1/4 dar-col-1">
          <label class="text-xs">Driver #</label>
        </div>
        <div class="vx-col w-1/4 dar-col-2">
          <label class="text-xs">Start Date</label>
        </div>
        <div class="vx-col w-1/4 dar-col-3">
          <label class="text-xs">End Date</label>
        </div>
        <div class="vx-row mx-0 dar-col-4">
          <div class="vx-col pr-0 w-1/2">
            <label class="text-xs">Current</label>
          </div>
          <div class="vx-col pl-0 w-1/2">
            <label class="text-xs"></label>
          </div>
        </div>
      </div>
      <div class="">
        <div
          :class="['vx-row mx-0 mb-2 driver-assignment-row', { 'mt-1': index > 0 }]"
          v-for="(driver, index) of driverAssignments"
          :key="`driver-${index}`"
        >
          <div class="vx-col pl-0 w-1/4 dar-col-1">
            <v-select
              v-model="driverAssignments[index].userId"
              :options="driversList"
              :clearable="true"
              :reduce="(option) => option.id"
              label="fullName"
              class="mb-4 md:mb-0"
              placeholder="Select Driver"
            />
          </div>
          <div class="vx-col w-1/4 dar-col-2">
            <flat-pickr
              class="w-full"
              placeholder="Select start date"
              v-model="driverAssignments[index].startDate"
            />
          </div>
          <div class="vx-col w-1/4 dar-col-3">
            <flat-pickr
              class="w-full"
              placeholder="Select end date"
              v-model="driverAssignments[index].endDate"
            />
          </div>
          <div class="vx-col pr-0 w-1/4 self-center flex dar-col-4">
            <div class="vx-row mx-0 w-full ">
              <div class="vx-col p-0 pl-1 w-3/4 self-center flex">
                <vs-switch v-model="driverAssignments[index].isCurrent" />
              </div>
              <div class="vx-col p-0 pl-1 w-1/4 self-center flex">
                <vs-icon
                  class="cursor-pointer"
                  size="small"
                  icon="delete"
                  color="danger"
                  @click.stop="removeSelection(index)"
                />
              </div>
            </div>
          </div>
          <span
            v-if="!driverAssignments[index].userId"
            class="text-danger text-sm"
          >
            Driver is required. Select driver or remove row
          </span>
        </div>
      </div>
    </div>
    <div class="vx-row mt-2">
      <div class="vx-col w-full">
        <vs-button
          color="primary"
          size="small"
          type="border"
          @click="addNewDriverAssignment"
        >
          New Assignment
        </vs-button>
      </div>
    </div>
  </vx-card>
</template>

<script>
;
export default {
  name: "DriverAssignment",
  props: {
    driversList: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      driverAssignments: [],
    };
  },
  watch: {
    driverAssignments: {
      handler: function (val) {
        this.$emit("input", val);
      },
      deep: true,
    },
    value(newVal) {
      this.driverAssignments = newVal;
    },
  },
  methods: {
    addNewDriverAssignment() {
      this.driverAssignments.push({
        userId: "",
        startDate: "",
        endDate: "",
        isCurrent: false,
      });
    },
    removeSelection(index) {
      this.driverAssignments.splice(index, 1);
    },
    async validate() {
      return this.driverAssignments.every((x) => x.userId);
    },
  },
};
</script>

<style lang="scss" scoped>
.driver-assignment {
  .align-items-baseline {
    align-items: baseline;
  }
  ::v-deep .vx-card__body {
    padding: 0.8rem;
  }
  .driver-assignment-row {
    .dar-col-1 {
      padding: 0;
      width: 35% !important;
    }
    .dar-col-2,
    .dar-col-3 {
      padding: 0 0.25rem;
      width: 25% !important;
    }
    .dar-col-4 {
      padding: 0;
      width: 15% !important;
    }
  }
}

</style>