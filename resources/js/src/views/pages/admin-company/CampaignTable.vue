<template>
  <DataTable
    :value="campaignList"
    :paginator="true"
    :rows="rows"
    :rowHover="true"
    :lazy="true"
    :totalRecords="totalRecords"
    :filters="filters"
    :loading="loading"
    responsiveLayout="scroll"
    @sort="onSort($event)"
    @page="onPage($event)"
    :rowsPerPageOptions="[10, 25, 50]"
    removableSort
    class="mt-12"
  >
    <Column
      field="name"
      header="Name"
      :sortable="false"
      :showFilterMenu="false"
    >
      <template #body="{ data: { name } }">
        <div class="name-user">
          {{ name || '' }}
        </div>
      </template>
    </Column>
    <Column
      field="status"
      header="Status"
      :sortable="false"
      :showFilterMenu="false"
    >
      <template #body="{ data: { status } }">
        <span :class="status ? cssForStatusCell[status] : ''" class="status">
          {{ getStatus(status) }}
        </span>
      </template>
    </Column>
    <Column field="leadsSent" header="Sent">
      <template #body="slotProps">
        {{ slotProps.data.leadsSent }}
      </template>
    </Column>
    <Column field="leadsOpened" header="Opened">
      <template #body="slotProps">
        {{ slotProps.data.leadsOpened }}
      </template>
    </Column>
    <Column field="leadsReplied" header="Replied">
      <template #body="slotProps">
        {{ slotProps.data.leadsReplied }}
      </template>
    </Column>
    <Column header="Actions">
      <template #body="{ data: { id, name } }">
        <div class="action-icons">
          <div @click="showEmailDetails(id)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M7.243 18.5001H3V14.2571L14.435 2.82208C14.6225 2.63461 14.8768 2.5293 15.142 2.5293C15.4072 2.5293 15.6615 2.63461 15.849 2.82208L18.678 5.65108C18.8655 5.83861 18.9708 6.09292 18.9708 6.35808C18.9708 6.62325 18.8655 6.87756 18.678 7.06508L7.243 18.5001ZM3 20.5001H21V22.5001H3V20.5001Z"
                fill="#6B7280"
              />
            </svg>
          </div>
          <div class="pr-2">
              <vs-icon
                class="cursor-pointer text-danger"
                size="small"
                icon="delete"
                @click.stop="openDeleteConfirmation(id)"
              />
            </div>
          <vs-dropdown>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M5 10.5C3.9 10.5 3 11.4 3 12.5C3 13.6 3.9 14.5 5 14.5C6.1 14.5 7 13.6 7 12.5C7 11.4 6.1 10.5 5 10.5ZM19 10.5C17.9 10.5 17 11.4 17 12.5C17 13.6 17.9 14.5 19 14.5C20.1 14.5 21 13.6 21 12.5C21 11.4 20.1 10.5 19 10.5ZM12 10.5C10.9 10.5 10 11.4 10 12.5C10 13.6 10.9 14.5 12 14.5C13.1 14.5 14 13.6 14 12.5C14 11.4 13.1 10.5 12 10.5Z"
                  fill="#6B7280"
                />
              </svg>
            </div>
            <vs-dropdown-menu>
              <vs-dropdown-item>
                <div
                  class="px-3"
                  @click="
                    toggleCampaignNamePopup({
                      id,
                      name,
                    })
                  "
                >
                  Rename
                </div>
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>
      </template>
    </Column>
    <template #empty><b> No records found </b></template>
    <template #footer v-if="footerText">
      <div class="vx-row flex justify-between items-center">
        <div class="vx-col">{{ footerText }}</div>
      </div>
    </template>
  </DataTable>
</template>

<script>
export default {
  name: 'CampaignTable',
  props: {
    campaignList: {
      type: Array,
      default: [],
    },
    totalRecords: {
      required: true,
      type: Number,
    },
    paginationMetaData: {
      required: true,
      type: Object | null,
    },
  },
  data() {
    return {
      loading: false,
      rows: 25,
      filters: {
        name: { value: null },
        status: { value: null },
      },
      sortBy: {
        field: null,
        order: null,
      },
      statuses: [
        { id: 1, label: 'Active', value: 'active' },
        { id: 2, label: 'Draft', value: 'draft' },
        { id: 3, label: 'Completed', value: 'completed' },
        { id: 4, label: 'Paused', value: 'paused' },
      ],
      cssForStatusCell: {
        active: 'active-status',
        paused: 'paused-status',
        completed: 'completed-status',
        draft: 'draft-status',
      },
    };
  },
  computed: {
    getStatus() {
      return (status) => {
        if (!status) return '';
        return this.statuses.find((item) => item.value === status).label;
      };
    },
    footerText() {
      const { from, to, total } = this.paginationMetaData || {};
      if (from && to && total) {
        return `Displaying ${from} to ${to} of ${total} records`;
      }
      return '';
    },
  },
  methods: {
    onSort({ sortField, sortOrder }) {
      this.sortBy = {
        field: sortField,
        order: sortOrder && sortOrder === 1 ? 'asc' : 'desc',
      };
    },
    onPage({ page, rows }) {
      this.$emit('refresh', page + 1, rows);
    },
    toggleCampaignNamePopup(data) {
      this.$emit('dataForUpdate', data);
    },
    showEmailDetails(id) {
      this.$emit('dataForUpdate', id);
    },
    openDeleteConfirmation(id) {
      this.$emit('deleteCampaign', id);
    }
  },
};
</script>

<style scoped lang="scss">
.active-status {
  background: var(--blue-600, #2563eb);
}
.completed-status {
  background: var(--green-600, #16a34a);
}
.draft-status {
  background: var(--gray-600, #4b5563);
}
.paused-status {
  background: var(--red-600, #b7552b);
}
.status {
  border-radius: 4px;
  padding: 2px 6px;
  color: #fff;
}
.action-icons {
  display: flex;
  align-items: center;
  svg {
    cursor: pointer;
    margin-right: 15px;
  }
}
</style>
