<template>
  <div>
    <!-- Statuses section when load is not canceled or deleted -->
    <div
      v-if="
        hasLoadStatus &&
        load.status &&
        load.status != 'canceled' &&
        load.status != 'deleted'
      "
      class="status-container"
    >
      <div
        class="status cursor-pointer"
        v-for="statusItem in statuses"
        :key="statusItem.name"
        @click.stop="handleLoadStatus(statusItem.name)"
      >
        <p
          :class="[
            {
              'current-status':
                hasLoadStatus && statusItem.name === currentStatus,
            },
          ]"
        >
          {{ transformedName(statusItem.name) }}
        </p>
      </div>
    </div>
    <!-- Status section when load is canceled -->
    <div
      class="status-container"
      v-else-if="hasLoadStatus && load.status === 'canceled'"
    >
      <div class="status">
        <p style="color: red; font-size: 14px; font-weight: 700">
          {{ transformedName(load.status) }}
        </p>
      </div>
    </div>
    <!-- Status section when load is deleted -->
    <div
      class="status-container"
      v-else-if="hasLoadStatus && load.status === 'deleted'"
    >
      <div class="status">
        <p style="color: red; font-size: 14px; font-weight: 700">
          {{ transformedName(load.status) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadStatus',
  props: {
    load: {
      type: Object,
      default: 'open',
    },
  },
  data() {
    return {
      statuses: [
        { name: 'open', icon: 'report' },
        { name: 'assign', icon: 'supervisor_account' },
        { name: 'in_transit', icon: 'local_shipping' },
        { name: 'delivered', icon: 'check_circle' },
        { name: 'invoice_created', icon: 'receipt' },
        { name: 'payment_requested', icon: 'logout' },
        { name: 'invoice_paid', icon: 'monetization_on' },
      ],
      currentStatus: '',
    };
  },
  computed: {
    transformedName() {
      const nameMappings = {
        open: 'Open',
        assign: 'Assigned',
        in_transit: 'In Transit',
        delivered: 'Delivered',
        invoice_created: 'Invoice Generated',
        payment_requested: 'Payment Requested',
        invoice_paid: 'Paid',
        canceled: 'Canceled',
        deleted: 'Deleted',
      };

      return (name) => nameMappings[name] || '';
    },
    hasLoadStatus() {
      return this.load !== null && typeof this.load.status !== 'undefined';
    },
  },
  watch: {
    'load.status': {
      handler(newStatus) {
        this.currentStatus = newStatus || '';
      },
      immediate: true,
    },
  },
  methods: {
    handleLoadStatus(item) {
      this.currentStatus = item; // Update the currently selected status
      this.$emit('handleLoadStatus', item);
    },
  },
};
</script>

<style scoped>
.status-container {
  display: flex;
  justify-content: space-between;
  margin: 5px 0 20px;
}

.status {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-right: 10px;
  background-color: #f2f2f2;
  border-radius: 5px;
  text-align: center;
  min-width: 100px;
  width: 100%;
}

.status p {
  margin-top: 5px;
  font-size: 12px;
}

.status-circle {
  width: 46px;
  height: 46px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.current-status {
  font-weight: 700;
  color: rgb(40, 199, 111);
  font-size: 14px !important;
}
</style>
