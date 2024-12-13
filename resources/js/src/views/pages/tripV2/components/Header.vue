<template>
  <!-- Header Section -->
  <div
    :class="[
      'view-header pl-0',
      isCollapsed ? 'width-100-70' : 'width-100-200',
    ]"
  >
    <div class="flex">
      <div class="flex items-center overflow-x-auto">
        <vs-chip
          class="cursor-pointer mx-2 text-sm min-w-75"
          v-for="{ id, title, isActive } in viewOptions"
          :key="id"
          v-show="hideForSpecificUser(title)"
          :color="isActive ? 'primary' : ''"
          @click.native="$emit('changeTab', id)"
        >
          {{ title }}
        </vs-chip>
        <label
          class="text-sm font-semibold ml-4 cursor-pointer text-primary flex items-center"
          v-if="false"
        >
          <vs-icon class="mr-1" size="20px" icon="add_circle_outline" />
          View
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import config from '@/config/constants';

export default {
  name: 'Header',
  props: {
    isCollapsed: {
      type: Boolean,
      default: false,
    },
    viewOptions: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters('auth', ['user']),
  },
  methods: {
    hideForSpecificUser(title) {
      if (
        this.user.admin_company_details.admin_company_detail_id ===
        config.hidefunctionalitiesForSpecificCompanyIds
      ) {
        if (title === 'Drivers Pay') {
          return false;
        }
      }
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
.view-header {
  height: 60px;
  padding: 1.2rem;
  background: rgb(255, 255, 255);
  position: fixed;
  transition: all 0.4s ease;
  top: 0;
  border-bottom: 1px solid #0002;
  z-index: 998;
}

// Utility Classes
.width-100-200 {
  width: calc(100% - 250px);
}

.width-100-70 {
  width: calc(100% - 70px);
}

.min-w-75 {
  min-width: 75px;
}

@media (max-width : 768px) {
  .min-w-75 {
    min-width: 150px;
  }
}
</style>
