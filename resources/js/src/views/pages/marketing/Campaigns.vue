<template>
  <div>
    <div>
      <div class="flex">
        <vs-button type="filled" icon="add" @click="toggleCampaignNamePopup()">
          Add New
        </vs-button>
      </div>
    </div>
    <DataTable
      :value="campaigns"
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
        <!-- <template #filter>
          <InputText
            type="text"
            v-model.number="filters['name'].value"
            @input="onFilter"
            class="p-column-filter w-full"
          />
        </template> -->
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
        <!-- <template #filter="{}">
          <Dropdown
            v-model="filters['status'].value"
            @change="onFilter()"
            :options="statuses"
            placeholder="Any"
            class="p-column-filter"
            :showClear="true"
            optionLabel="label"
            optionValue="value"
            appendTo="body"
          >
          </Dropdown>
        </template> -->
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
            <div @click="redirectToCampaignOverview(id)">
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
                        campaignId: id,
                        campaignName: name,
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
    </DataTable>
    <campaign-name-popup
      :popupActive="campaignNamePopup.isActive"
      :data="campaignNamePopup.data"
      @closePopup="closePopup"
    />
  </div>
</template>

<script>
import CampaignNamePopup from './components/Campaigns/CampaignNamePopup.vue';
import { getApiErrorMsg } from '@/helpers/helper';
import globalMixins from '@/mixins/globalMixins';

export default {
  name: 'Campaigns',
  components: {
    CampaignNamePopup,
  },
  mixins: [globalMixins],
  data() {
    return {
      campaigns: [],
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
      rows: 25,
      loading: false,
      currentPage: 1,
      totalRecords: 0,
      cssForStatusCell: {
        active: 'active-status',
        paused: 'paused-status',
        completed: 'completed-status',
        draft: 'draft-status',
      },
      campaignNamePopup: {
        isActive: false,
        data: {
          campaignId: null,
          campaignName: '',
        },
      },
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      try {
        this.$vs.loading();
        await this.getCampaigns();
      } catch (error) {
      } finally {
        this.$vs.loading.close();
      }
    },
    async getCampaigns(pageSize = this.rows, currentPage = 1) {
      try {
        this.loading = true;

        const { data } = await this.$store.dispatch('marketing/getCampaigns', {
          page: currentPage,
          pageSize,
          // filters: Object.keys(this.filters).reduce((acc, key) => {
          //   if (this.filters[key].value) {
          //     acc[key] = this.filters[key].value;
          //   }

          //   return acc;
          // }, {}),
          // sortBy: this.sortBy.field && this.sortBy.order ? this.sortBy : {},
        });
        this.campaigns = data.payload.campaigns || [];
        const meta = data.payload.meta;
        this.totalRecords = (meta || {}).totalItems || 0;
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
        this.loading = false;
      }
    },
    onPage({ page, rows }) {
      this.rows = rows;
      this.currentPage = page + 1;
      this.getCampaigns(rows, page + 1);
    },
    closePopup(refresh) {
      this.toggleCampaignNamePopup();
      if (refresh) {
        this.getCampaigns();
      }
    },
    redirectToCampaignOverview(id) {
      if (!id) return;
      this.$router
        .push({
          name: 'campaign-overview',
          params: { id },
        })
        .catch(() => true);
    },
    toggleCampaignNamePopup(data = null) {
      this.campaignNamePopup.isActive = !this.campaignNamePopup.isActive;
      this.campaignNamePopup.data = data || {
        campaignId: null,
        campaignName: '',
      };
    },
    async onFilter() {
      try {
        this.loading = true;
        await this.getCampaigns();
      } catch (error) {
      } finally {
        this.loading = false;
      }
    },
    onSort({ sortField, sortOrder }) {
      this.sortBy = {
        field: sortField,
        order: sortOrder && sortOrder === 1 ? 'asc' : 'desc',
      };

      this.onFilter();
    },
    getStatus(status) {
      if (!status) return '';
      return this.statuses.find((item) => item.value === status).label;
    },
    async openDeleteConfirmation(id) {
      await this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Delete Campaign',
        text: 'Are you sure you want to remove this campaign?',
        accept: () => this.deleteCampaign(id),
      });
    },
    async deleteCampaign(id) {
      try {
        await this.$store.dispatch('marketing/deleteCampaign', { id });
        this.showSuccessMessage('Campaign Deleted Successfully', 3000);
        // if there is only  one element on current page go back to previous page
        if (this.campaigns.length === 1 && this.currentPage > 1) {
          document.querySelector('.p-highlight').previousSibling.click();
        } else {
          // refresh the current page
          document.querySelector('.p-highlight').click();
        }
      } catch (error) {
        this.showErrorMessage(getApiErrorMsg(error));
      }
    },
  },
};
</script>

<style scoped lang="scss">
.status {
  border-radius: 4px;
  padding: 2px 6px;
  color: #fff;
}
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
.action-icons {
  display: flex;
  align-items: center;
  svg {
    cursor: pointer;
    margin-right: 15px;
  }
}
.name-user {
  color: var(--gray-900, #111827);
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
}
.last-active {
  color: var(--gray-400, #9ca3af);
  font-size: 12px;
  font-weight: 450;
}
.position-absolute {
  position: absolute;
  z-index: 999;
}
.more-icon {
  font-size: 24px;
}

::v-deep {
  .p-column-filter-clear-button {
    display: none;
  }
}
</style>
