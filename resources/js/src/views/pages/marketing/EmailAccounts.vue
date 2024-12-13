<template>
  <div>
    <Headers @changeComponent="changeComponent" />
    <div>
      <div>
        <email-account-table />
      </div>
    </div>
  </div>
</template>

<script>
import Headers from './components/EmailAccounts/Headers.vue';
import EmailAccountTable from './components/EmailAccounts/EmailAccountTable.vue';

export default {
  name: 'Marketing',
  data() {
    return {
      search: '',
      activeComponent: 'email',
    };
  },
  components: {
    Headers,
    EmailAccountTable,
  },
  methods: {
    changeComponent(newComponent) {
      if (newComponent === this.activeComponent) return;
      this.activeComponent = newComponent;
    },
  },
};
</script>
