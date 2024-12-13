<template>
  <div>
    <DataTable
      :value="tableData"
      :lazy="true"
      :paginator="true"
      :rows="rows"
      :totalRecords="totalRecords"
      :rowsPerPageOptions="[10, 25, 50]"
      :loading="loading"
      responsiveLayout="scroll"
      @page="onPage($event)"
    >
      <template #empty> No records found </template>
      <Column field="cardNo" header="Card No">
        <template #body="{ data: { cardNumber } }">
          {{ cardNumber }}
        </template>
      </Column>
      <Column field="expirationDate" header="Expiration Date">
        <template #body="{ data: { expirationDate } }">
          {{ expirationDate }}
        </template>
      </Column>
      <Column field="assignDate" header="Assigned On">
        <template #body="{ data: { currentAssignee } }">
          {{ (currentAssignee || {}).assignDate }}
        </template>
      </Column>
      <Column field="user" header="Current Driver">
        <template #body="{ data: { currentAssignee } }">
          {{ ((currentAssignee || {}).user || {}).name }}
        </template>
      </Column>
      <Column field="truck" header="Current Truck">
        <template #body="{ data: { currentAssignee } }">
          {{ ((currentAssignee || {}).truck || {}).number }}
        </template>
      </Column>
      <Column field="notes" header="Notes">
        <template #body="{ data: { notes } }">
          {{ notes }}
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="{ data: { status } }">
          <div
            class="status"
            :class="status === 'active' ? 'isActive' : 'isInactive'"
          >
            {{ status }}
          </div>
        </template>
      </Column>
      <Column field="action" header="Action" :sortable="false">
        <template #body="slotProps">
          <div class="flex items-center space-x-2">
            <vx-tooltip text="Edit">
              <img
                src="@assets/images/crm/editIcon.svg"
                alt="edit-icon"
                width="28"
                class="cursor-pointer"
                @click.stop="editItem(slotProps.data.id)"
              />
            </vx-tooltip>
            <vx-tooltip text="Delete">
              <img
                src="@assets/images/custom/deleteIcon.svg"
                alt="delete-icon"
                width="28"
                class="cursor-pointer"
                @click.stop="deleteItem(slotProps.data.id)"
              />
            </vx-tooltip>
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
export default {
  name: 'TableList',
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    totalRecords: {
      type: Number,
    },
    rows: {
      type: Number,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onPage({ page, rows }) {
      this.$emit('onPage', { page, rows });
    },
    editItem(id) {
      this.$emit('editItem', id);
    },
    deleteItem(id) {
      this.$emit('deleteItem', id);
    },
  },
};
</script>

<style lang="scss" scoped>
.status {
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  height: 30px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-transform: capitalize;
  max-width: 75px;
}

.isActive {
  background: var(--Foundation-Success-Light, #e7f5ef);
  color: var(--foundation-success-normal-hover, #0b8d57);
}

.isInactive {
  background: var(--Foundation-Error-Light, #fbe9e7);
  color: var(--foundation-error-normal-hover, #d93025);
}

@media (max-width: 768px) {
  :deep(.p-datatable .p-datatable-thead > tr > th),
  :deep(.p-datatable .p-datatable-tbody > tr > td) {
    min-width: 200px;
  }
}
</style>
