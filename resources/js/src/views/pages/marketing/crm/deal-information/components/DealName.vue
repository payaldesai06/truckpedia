<template>
  <div class="info-box deal-card">
    <div class="flex items-center justify-between">
      <h4>{{ selectedDeal.name }}</h4>
      <img
        src="@assets/images/crm/editIcon-gray.svg"
        class="cursor-pointer"
        @click.stop="$emit('toggleDealSidebar')"
      />
    </div>
    <vs-divider />
    <div class="basic-deal-info">
      <div class="flex mb-5">
        <h6>Deal Pipeline</h6>
        <h5>
          {{ selectedDeal.pipeline && selectedDeal.pipeline.name }}
        </h5>
      </div>
      <div class="flex mb-5">
        <h6>Company</h6>
        <h5>
          {{ selectedDeal.customer ? selectedDeal.customer.name : '-' }}
        </h5>
      </div>
      <div class="flex mb-5">
        <h6>Assign To</h6>
        <h5>{{ assigneeNames }}</h5>
      </div>
      <div class="flex mb-5">
        <h6>Amount</h6>
        <h5>
          {{
            selectedDeal.amount ? formatAmountValue(selectedDeal.amount) : '-'
          }}
        </h5>
      </div>
      <div class="flex mb-3">
        <h6>Deal Probability</h6>
        <h5>
          {{ selectedDeal.probability ? selectedDeal.probability + '%' : '-' }}
        </h5>
      </div>
      <div class="flex mb-3">
        <h6>Deal Stage</h6>
        <h5>
          {{ selectedDeal.stage ? selectedDeal.stage.name : '-' }}
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { formatAmount } from '@/helpers/helper';
export default {
  name: 'deal-name',
  computed: {
    ...mapGetters('marketing', ['selectedDeal']),
    formatAmountValue() {
      return (amount) => {
        return formatAmount(amount);
      };
    },
    assigneeNames() {
      if (this.selectedDeal.assignees && this.selectedDeal.assignees.length) {
        return this.selectedDeal.assignees.map((item) => item.name).join(', ');
      } else return '-';
    },
  },
};
</script>

<style lang="scss" scoped>
.info-box.deal-card {
  border-radius: 4px;
  background: var(--White, #fffefe);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.08),
    0px 1px 4px 0px rgba(0, 0, 0, 0.04);
  max-height: 300px;
  overflow: auto;
  h4 {
    color: rgba(var(--vs-primary), 1) !important;
    font-size: 18px;
    font-weight: 600;
  }
  .basic-deal-info {
    h6 {
      color: var(--Black-Black-400, #45454a);
      font-size: 12px;
      font-weight: 400;
      &:first-child {
        min-width: 150px;
      }
    }
    h5 {
      color: var(--Black-Black-900, #050505);
      font-size: 12px;
      font-weight: 500;
    }
  }
}
</style>
