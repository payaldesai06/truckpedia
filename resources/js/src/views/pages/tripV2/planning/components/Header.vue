<template>
  <!-- Planning Header Section -->
  <div :class="['view-header pl-0']">
    <div class="flex justify-between">
      <div class="flex items-center overflow-x-auto">
        <vs-chip
          style="min-width: 75px"
          class="cursor-pointer mx-2 text-sm"
          v-for="{ id, title } in viewOptions"
          :key="id"
          :color="activeId === id ? 'primary' : ''"
          @click.native="$emit('changeTab', id)"
        >
          {{ title }}
        </vs-chip>
      </div>
      <!-- <div class="flex">
        <vs-button
          type="filled"
          icon="add"
          size="small"
          @click.stop="$emit('addSchedule')"
        >
          Schedule
        </vs-button>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'PlanningHeader',
  props: {
    viewOptions: {
      type: Array,
      default: () => [],
    },
    activeId: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    ...mapGetters('auth', ['user']),
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.view-header {
  padding: 1.2rem;
  background: rgb(255, 255, 255);
  transition: all 0.4s ease;
  border-bottom: 1px solid #0002;
  z-index: 2;
  width: 100%;
}
::v-deep {
  .vs-button--icon {
    z-index: 10 !important;
  }
}
</style>
