<template>
  <div>
    <div class="mt-10">
      <DataTable
        :value="emailAccounts"
        :lazy="true"
        :paginator="true"
        :rows="rows"
        :rowHover="true"
        :totalRecords="totalRecords"
        :filters="filters"
        filterDisplay="row"
        :loading="loading"
        responsiveLayout="scroll"
        @sort="onSort($event)"
        @page="onPage($event)"
        :rowsPerPageOptions="[10, 25, 50]"
        removableSort
      >
        <Column
          field="email"
          header="Email"
          :sortable="true"
          :showFilterMenu="false"
        >
          <template #body="slotProps">
            {{ slotProps.data.email }}
          </template>
          <template #filter>
            <InputText
              type="text"
              v-model.number="filters['email'].value"
              @input="onFilter"
              class="p-column-filter w-full"
            />
          </template>
        </Column>

        <Column
          field="firstName"
          header="First Name"
          :sortable="true"
          :showFilterMenu="false"
        >
          <template #body="slotProps">
            {{ slotProps.data.firstName }}
          </template>
          <template #filter>
            <InputText
              type="text"
              v-model.number="filters['firstName'].value"
              @input="onFilter"
              class="p-column-filter w-full"
            />
          </template>
        </Column>

        <Column
          field="lastName"
          header="Last Name"
          :sortable="true"
          :showFilterMenu="false"
        >
          <template #body="slotProps">
            {{ slotProps.data.lastName }}
          </template>
          <template #filter>
            <InputText
              type="text"
              v-model.number="filters['lastName'].value"
              @input="onFilter"
              class="p-column-filter w-full"
            />
          </template>
        </Column>
        <Column field="authNeeded" header="Status">
          <template #body="slotProps">
            <div>
              <template>
                <vs-chip
                  v-if="slotProps.data.authNeeded"
                  transparent
                  :color="'danger'"
                  v-primeVueTooltip.top="
                    'Please reconnect this email account to resume sending emails.'
                  "
                >
                  Disconnected
                </vs-chip>
                <vs-chip v-else transparent :color="'success'">
                  Normal
                </vs-chip>
              </template>
            </div>
          </template>
        </Column>
        <Column header="Actions" :headerStyle="{ width: '0.5rem' }">
          <template #body="{ data: { id } }">
            <div class="flex items-center gap-2">
              <vs-icon
                class="cursor-pointer"
                size="small"
                icon="edit"
                @click.stop="toggleEmailSidebar(id)"
              />
              <vs-icon
                class="cursor-pointer"
                size="small"
                icon="delete"
                @click.stop="openDeleteConfirmation(id)"
              />
            </div>
          </template>
        </Column>

        <template #empty><b>No records found</b></template>
        <template #footer v-if="footerText">
          <div class="vx-row flex justify-between items-center">
            <div class="vx-col">{{ footerText }}</div>
          </div>
        </template>
      </DataTable>
    </div>
    <email-sidebar
      :isSidebarActive="emailSidebar.isActive"
      :data="emailSidebar.data"
      @closeSidebar="toggleEmailSidebar"
      @refreshEmailAccounts="fetchEmailAccounts"
    />
  </div>
</template>

<script>
import { getApiErrorMsg } from '@/helpers/helper';
import { EventBus } from '@/helpers/eventBus';

export default {
  name: 'EmailAccountTable',
  components: {
    EmailSidebar: () => import('./EmailSidebar.vue'),
  },
  data() {
    return {
      emailAccounts: [],
      totalRecords: 0,
      paginationMetaData: {},
      loading: false,
      rows: 25,
      filters: {
        email: { value: null },
        firstName: { value: null },
        lastName: { value: null },
      },
      sortBy: {
        field: null,
        order: null,
      },
      statuses: ['active', 'draft', 'completed'],
      emailSidebar: {
        isActive: false,
        data: {},
      },
    };
  },
  computed: {
    footerText() {
      const { from, to, total } = this.paginationMetaData || {};
      if (from && to && total) {
        return `Displaying ${from} to ${to} of ${total} records`;
      }
      return '';
    },
  },
  created() {
    this.init();
  },
  mounted() {
    EventBus.$on('refreshEmailAccounts', this.fetchEmailAccounts);
  },
  methods: {
    async init() {
      try {
        this.$vs.loading();
        await this.fetchEmailAccounts();
      } catch (error) {
      } finally {
        this.$vs.loading.close();
      }
    },
    async fetchEmailAccounts(pageSize = 25, currentPage = 1) {
      try {
        const { data } = await this.$store.dispatch(
          'marketing/getEmailAccountList',
          {
            page: currentPage,
            pageSize,
            filters: Object.keys(this.filters).reduce((acc, key) => {
              if (this.filters[key].value) {
                acc[key] = this.filters[key].value;
              }

              return acc;
            }, {}),
            sortBy: this.sortBy.field && this.sortBy.order ? this.sortBy : {},
            fieldsToQuery: ['email', 'firstName', 'lastName', 'authNeeded'],
          }
        );

        this.emailAccounts = data.payload.emailAccounts || [];
        const { meta } = (data || {}).payload || {};
        const { totalPage, totalItems } = meta || {};
        this.totalPage = totalPage || 1;
        this.totalRecords = totalItems || 0;
        this.paginationMetaData = meta;
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    async onFilter() {
      try {
        this.loading = true;
        await this.fetchEmailAccounts();
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
    onPage({ page, rows }) {
      this.fetchEmailAccounts(rows, page + 1);
    },
    toggleEmailSidebar(id) {
      this.emailSidebar.isActive = id ? true : false;
      this.emailSidebar.data = id ? { id } : {};
    },
    async openDeleteConfirmation(id) {
      await this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Delete Email Account',
        text: 'Are you sure to revoke our access to this account and remove it from Marketing?',
        accept: () => this.deleteEmailAccount(id),
      });
    },
    async deleteEmailAccount(id) {
      try {
        await this.$store.dispatch('marketing/deleteEmailAccount', id);
        this.onFilter();
        this.$vs.notify({
          time: 3000,
          title: 'Success',
          text: 'Deleted successfully',
          color: 'success',
        });
        this.$store.commit('marketing/setMarketingEmails', []);
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
  },
};
</script>
<style scoped lang="scss">
::v-deep {
  .p-column-filter-clear-button {
    display: none;
  }
}

#button-delete-email:hover {
  color: #fff !important;
}
</style>
