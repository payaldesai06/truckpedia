<template>
  <div>
    <!-- Header -->
    <h3 class="crm-text" v-text="'CRM'" />
    <ul class="flex items-center gap-3 mt-4 crm-tab-list">
      <li
        v-for="{ id, title, isActive } in tabs"
        :key="id"
        :class="[
          'font-medium text-md cursor-pointer',
          isActive ? 'active' : 'invisible-border-bottom',
        ]"
        @click="changeComponent(id)"
      >
        {{ title }}
      </li>
    </ul>

    <!-- Content Section -->
    <div class="mt-5" v-if="currentComponent">
      <component :is="currentComponent" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import PipelineView from './PipelineView.vue';
import './components/index.scss'; //pipelineScss
export default {
  name: 'CRM',
  components: {
    PipelineView,
    Tasks: () => import('./deal-information/components/Tasks.vue'),
    Contacts: () => import('./deal-information/components/Contacts.vue'),
  },
  data() {
    return {
      tabs: [
        {
          id: 1,
          title: 'Pipeline',
          componentName: 'PipelineView',
          isActive: true,
        },
        {
          id: 2,
          title: 'Tasks',
          componentName: 'Tasks',
          isActive: false,
        },
        {
          id: 3,
          title: 'Contacts',
          componentName: 'Contacts',
          isActive: false,
        },
      ],
    };
  },
  mounted() {
    this.setCustomers();
    this.setAllUsers();
  },
  computed: {
    ...mapGetters('companyUserV2', ['getUsersList']),
    ...mapGetters('customer', ['getCachedCustomers']),
    currentComponent() {
      return this.tabs.find((tab) => tab.isActive).componentName;
    },
  },
  methods: {
    changeComponent(id) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.id === id;
      });
    },
    async setCustomers() {
      const payload = {
        filters: { status: ['active'] },
      };
      if (!this.getCachedCustomers[JSON.stringify(payload)]) {
        await this.$store.dispatch('customer/setCachedCustomers', payload);
      }
    },
    async setAllUsers() {
      const usersPayload = {
        roles: ['admin', 'dispatcher'],
        fields: ['firstName', 'lastName'],
      };
      if (!this.getUsersList[JSON.stringify(usersPayload)]) {
        await this.$store.dispatch('companyUserV2/fetchUsers', usersPayload);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.active {
  border-bottom: 2px solid rgba(var(--vs-primary), 1);
  color: rgba(var(--vs-primary), 1) !important;
}
.invisible-border-bottom {
  border-bottom: 2px solid transparent;
}
</style>
