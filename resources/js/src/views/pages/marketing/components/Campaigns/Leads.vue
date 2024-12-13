<template>
  <div>
    <div>
      <div v-if="isAddLeadBannerVisible">
        <div class="flex justify-center">
          <div>
            <img src="@assets/images/custom/taking-notes.svg" height="500px" />
          </div>
        </div>
        <div class="text-center">
          <h4 class="mb-10">Add some leads to get started</h4>
          <vs-button @click="popupActive = true">Add Leads</vs-button>
        </div>
      </div>
      <div v-else>
        <div>
          <div class="flex">
            <div class="ml-auto flex gap-2">
              <vs-button icon="add" @click="popupActive = true">
                Add Leads
              </vs-button>
              <vs-button
                v-if="selectedLeads && selectedLeads.length"
                color="danger"
                type="border"
                icon="delete"
                @click="showDeleteLeadsWarning"
              />
            </div>
          </div>
          <DataTable
            :value="leads"
            :lazy="true"
            :paginator="true"
            :rows="rows"
            :rowHover="true"
            :totalRecords="totalRecords"
            :loading="loading"
            dataKey="id"
            @page="onPage($event)"
            @sort="onSort($event)"
            :rowsPerPageOptions="[25, 50, 75]"
            :selection.sync="selectedLeads"
            responsiveLayout="scroll"
            class="mt-5"
            :filters="filters"
            filterDisplay="row"
            removableSort
          >
            <Column selectionMode="multiple" :headerStyle="{ width: '3em' }" />
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
                  v-model="filters['firstName'].value"
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
                  v-model="filters['lastName'].value"
                  @input="onFilter"
                  class="p-column-filter w-full"
                />
              </template>
            </Column>
            <Column
              field="jobTitle"
              header="Job Title"
              :sortable="true"
              :showFilterMenu="false"
            >
              <template #body="slotProps">
                {{ slotProps.data.jobTitle }}
              </template>
              <template #filter>
                <InputText
                  type="text"
                  v-model="filters['jobTitle'].value"
                  @input="onFilter"
                  class="p-column-filter w-full"
                />
              </template>
            </Column>
            <Column
              field="companyName"
              header="Company Name"
              :sortable="true"
              :showFilterMenu="false"
            >
              <template #body="slotProps">
                {{ slotProps.data.companyName }}
              </template>
              <template #filter>
                <InputText
                  type="text"
                  v-model="filters['companyName'].value"
                  @input="onFilter"
                  class="p-column-filter w-full"
                />
              </template>
            </Column>

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
                  v-model="filters['email'].value"
                  @input="onFilter"
                  class="p-column-filter w-full"
                />
              </template>
            </Column>

            <Column
              field="status"
              header="Status"
              :sortable="true"
              :showFilterMenu="false"
            >
              <template #body="slotProps">
                {{ getLeadStatus(slotProps.data.status) }}
              </template>
              <template #filter>
                <Dropdown
                  v-model="filters['status'].value"
                  @change="onFilter()"
                  :options="leadStatuses"
                  optionLabel="label"
                  optionValue="value"
                  placeholder="Any"
                  class="p-column-filter"
                  :showClear="true"
                  appendTo="body"
                >
                </Dropdown>
              </template>
            </Column>
            <Column field="" header="Action">
              <template #body="slotProps">
                <vs-button
                  type="filled"
                  color="#00cfe8"
                  @click.stop="toggleLeadSidebar(slotProps.data)"
                >
                  Edit
                </vs-button>
              </template>
            </Column>
            <template #empty> No records found </template>
            <template #footer>
              In total there are {{ totalRecords }} leads.
            </template>
          </DataTable>
        </div>
      </div>
    </div>
    <NewLead
      :popupActive="popupActive"
      :campaignId="campaignId"
      @closePopup="closePopup"
    />
    <template>
      <div>
        <vs-sidebar
          position-right
          parent="body"
          default-index="1"
          color="primary"
          class="sidebarx"
          spacer
          v-model="updateLeadSidebar.isActive"
        >
          <div>
            <div class="flex items-center justify-between">
              <h4>Edit Lead</h4>
            </div>
            <vs-divider class="mb-0"></vs-divider>
            <div class="vx-col w-full mt-4">
              <label class="text-xs"> First Name </label>
              <vs-input
                v-model="updateLeadSidebar.data.firstName"
                name="firstName"
                class="w-full"
              />
            </div>
            <div class="vx-col w-full mt-4">
              <label class="text-xs"> Last Name </label>
              <vs-input
                v-model="updateLeadSidebar.data.lastName"
                name="lastName"
                class="w-full"
              />
            </div>
            <div class="vx-col w-full mt-4">
              <label class="text-xs"> Job Title </label>
              <vs-input
                v-model="updateLeadSidebar.data.jobTitle"
                name="jobTitle"
                class="w-full"
              />
            </div>
            <div class="vx-col w-full mt-4">
              <label class="text-xs"> Company Name </label>
              <vs-input
                v-model="updateLeadSidebar.data.companyName"
                name="companyName"
                class="w-full"
              />
            </div>
            <div class="vx-col w-full mt-4">
              <label class="text-xs"> Email <field-required-sign /> </label>
              <vs-input
                v-model="updateLeadSidebar.data.email"
                name="email"
                class="w-full"
              />
            </div>
            <div class="vx-col w-full mt-4 text-right">
              <vs-button @click="updateLead">Update</vs-button>
            </div>
          </div>
        </vs-sidebar>
      </div>
    </template>
  </div>
</template>

<script>
import { getApiErrorMsg } from '@/helpers/helper';
import NewLead from './NewLead.vue';

export default {
  name: 'Leads',
  props: {
    campaignId: {
      type: Number,
      default: null,
    },
    data: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    isAddLeadBannerVisible() {
      return (
        !this.loading &&
        !this.leads.length &&
        Object.keys(this.filters).every((key) => !this.filters[key].value)
      );
    },
  },
  data() {
    return {
      leads: [],
      rows: 25,
      loading: false,
      totalRecords: 0,
      selectedLeads: null,
      popupActive: false,
      leadStatuses: [
        { id: 1, label: 'Sent', value: 'sent' },
        { id: 2, label: 'Opened', value: 'opened' },
        { id: 3, label: 'Replied', value: 'replied' },
      ],
      filters: {
        status: { value: null },
        companyName: { value: null },
        email: { value: null },
        firstName: { value: null },
        lastName: { value: null },
        jobTitle: { value: null },
      },
      metaData: null,
      sortBy: {
        field: null,
        order: null,
      },
      updateLeadSidebar: {
        isActive: false,
        data: {
          id: null,
          email: '',
          firstName: '',
          lastName: '',
          jobTitle: '',
          companyName: '',
        },
      },
    };
  },
  components: {
    NewLead,
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      try {
        this.$vs.loading();
        await this.getLeads();
      } catch (error) {
      } finally {
        this.$vs.loading.close();
      }
    },
    async getLeads(pageSize = this.rows, currentPage = 1) {
      try {
        this.loading = true;

        const {
          data: {
            payload: { leads, meta },
          },
        } = await this.$store.dispatch('marketing/getLeads', {
          campaignId: this.campaignId,
          page: currentPage,
          pageSize,
          filters: Object.keys(this.filters).reduce((acc, key) => {
            if (this.filters[key].value) {
              acc[key] = this.filters[key].value;
            }

            return acc;
          }, {}),
          sortBy: Object.keys(this.sortBy).reduce((acc, key) => {
            if (this.sortBy[key]) {
              acc[key] = this.sortBy[key];
            }

            return acc;
          }, {}),
        });
        this.leads = leads;
        this.totalRecords = (meta || {}).totalItems || 0;
        this.rows = (meta || {}).perPage ? Number((meta || {}).perPage) : 25;
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
    async onFilter() {
      try {
        this.loading = true;
        await this.getLeads();
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
        this.loading = false;
      }
    },
    onSort({ sortField, sortOrder }) {
      this.sortBy = {
        field: sortField,
        order: sortField ? (sortOrder === 1 ? 'asc' : 'desc') : null,
      };

      this.onFilter();
    },
    getLeadStatus(status) {
      if (!status) {
        return '';
      }

      return this.leadStatuses.find((leadStatus) => leadStatus.value === status)
        .label;
    },
    onPage({ page, rows }) {
      this.rows = rows;
      this.getLeads(rows, page + 1);
    },
    closePopup() {
      this.popupActive = false;
      this.getLeads();
    },
    showDeleteLeadsWarning() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Are you sure?',
        text: 'Are you sure you want to delete the selected leads?',
        acceptText: 'Delete',
        accept: () => this.deleteLeads(),
      });
    },
    async deleteLeads() {
      try {
        await this.$store.dispatch('marketing/deleteLead', {
          campaignId: this.campaignId,
          leads: this.selectedLeads.map((lead) => ({ id: lead.id })),
        });
        this.$vs.notify({
          color: 'success',
          title: 'Success',
          text: 'Leads deleted successfully',
        });
        this.selectedLeads = [];
        this.getLeads();
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    toggleLeadSidebar(data = null) {
      this.updateLeadSidebar.isActive = !this.updateLeadSidebar.isActive;
      this.updateLeadSidebar.data = { ...data } || {
        id: null,
        email: '',
        firstName: '',
        lastName: '',
        jobTitle: '',
        companyName: '',
      };
    },
    async updateLead() {
      try {
        const validationChecks = [
          {
            condition: !this.campaignId,
            message: 'Campaign ID is missing.',
          },
          {
            condition: !this.updateLeadSidebar.data.id,
            message: 'Lead ID is missing.',
          },
          {
            condition: !this.updateLeadSidebar.data.email,
            message: 'Email is required.',
          },
        ];
        // Check if required fields are present
        for (const check of validationChecks) {
          if (check.condition) {
            this.$vs.notify({
              color: 'danger',
              title: 'Error',
              text: check.message,
            });
            return;
          }
        }
        // Prepare the payload for updating the lead
        const payload = {
          campaignId: this.campaignId,
          leads: [
            {
              id: this.updateLeadSidebar.data.id,
              email: this.updateLeadSidebar.data.email,
              firstName: this.updateLeadSidebar.data.firstName || null,
              lastName: this.updateLeadSidebar.data.lastName || null,
              jobTitle: this.updateLeadSidebar.data.jobTitle || null,
              companyName: this.updateLeadSidebar.data.companyName || null,
            },
          ],
        };

        // Call the marketing/updateLead API
        await this.$store.dispatch('marketing/updateLead', payload);

        // Show success message
        this.$vs.notify({
          color: 'success',
          title: 'Success',
          text: 'Lead updated successfully',
        });

        await this.getLeads();
        this.toggleLeadSidebar();
      } catch (error) {
        // Display error message if an error occurs
        this.$vs.notify({
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
.status {
  border-radius: 50px;
  padding: 4px 8px;
  border: 1px solid rgb(192, 192, 192);
  background: none;
}

::v-deep {
  .p-column-filter-clear-button {
    display: none;
  }
}
</style>
