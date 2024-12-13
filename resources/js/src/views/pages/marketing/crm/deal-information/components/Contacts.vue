<template>
  <div class="contacts" id="contacts">
    <template v-if="(contacts.length || filterFlag) && !loading">
      <div class="mb-4 flex gap-3 items-center">
        <vs-button
          color="primary"
          type="border"
          v-if="selectedContacts.length"
          @click.stop="handleCampaignModal(true)"
          >Add to Email Campaign</vs-button
        >
        <!-- <vs-input v-model="searchKey" placeholder="Search" icon="search" /> -->
        <!-- <v-select
          :options="statuses"
          v-model="filteredStatus"
          :clearable="true"
          :reduce="(option) => option"
          placeholder="Lead Status"
          class="mb-4 md:mb-0 select-type"
        />
        <v-select
          :options="assignees"
          v-model="filteredAssignee"
          :clearable="true"
          :reduce="(option) => option"
          placeholder="Assign To"
          class="mb-4 md:mb-0 select-type"
        /> -->
        <AddBtn
          text="New Contact"
          class="ml-auto"
          @onClick="handleContactModal(true)"
        />
      </div>
      <ContactsTable
        :contacts="contacts"
        :totalRecords="totalRecords"
        :selectedContacts="selectedContacts"
        :paginationMetaData="paginationMetaData"
        :userList="modifiedUserList"
        @fetchContacts="fetchContacts"
        @getSelectedContacts="getSelectedContacts"
        @editContactModal="editContactModal"
      />
    </template>
    <template v-else-if="!loading">
      <div class="flex justify-center no-data-found py-10">
        <div class="flex flex-col items-center">
          <h6 class="mb-3">No Contacts Created</h6>
          <div class="flex gap-3">
            <AddBtn
              v-if="location == 'deal'"
              class="add-exiting-btn"
              text="Add Existing"
              @onClick="handleExistingModal(true)"
            />
            <AddBtn text="New Contact" @onClick="handleContactModal(true)" />
          </div>
        </div>
      </div>
    </template>

    <!-- Add Existing Modal Only shows inside Deal->Contacts tab -->
    <AddExisting
      v-if="location == 'deal' && showExistingModal"
      :is-show="showExistingModal"
      @hideExistingModal="handleExistingModal(false)"
      @refresh="init"
    />

    <!-- Add New Contact -->
    <AddContacts
      :is-show="showContactModal"
      :selectedContactId="selectedContactId"
      :editContactType="editContactType"
      :location="location"
      :userList="modifiedUserList"
      @hideContactModal="handleContactModal(false)"
      @refresh="init"
    />

    <!-- Add Campaign to Contact -->
    <AddCampaign
      v-if="showCampaignModal"
      :is-show="showCampaignModal"
      @hanldeAddCampaign="hanldeAddCampaign"
      @hideCampaignModal="handleCampaignModal(false)"
    />
  </div>
</template>

<script>
import { getApiErrorMsg } from '@/helpers/helper';
import ContactsTable from './contacts/ContactsTable.vue';
import AddBtn from './AddBtn.vue';
import AddContacts from './contacts/AddContacts.vue';
import AddExisting from './contacts/AddExisting.vue';
import { mapGetters } from 'vuex';
import AddCampaign from './contacts/AddCampaign.vue';
import { getObjectDifference } from '../../../../../../helpers/helper';
export default {
  name: 'Contacts',
  components: { AddBtn, AddExisting, AddContacts, ContactsTable, AddCampaign },
  props: {
    location: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      totalRecords: 0,
      paginationMetaData: {},
      contacts: [],
      showExistingModal: false,
      showContactModal: false,
      searchKey: '',
      statuses: [],
      assignees: [],
      laoding: false,
      filteredAssignee: null,
      filteredStatus: null,
      selectedContactId: null,
      selectedContacts: [],
      showCampaignModal: false,
      editContactType: '',
      filters: {
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        companyName: '',
        assigneeId: null,
        status: null,
      },
      defaultPayloadForUsers: {
        roles: ['admin', 'dispatcher'],
        fields: ['firstName', 'lastName'],
      },
      filterFlag: false,
    };
  },
  created() {
    this.init();
  },
  computed: {
    ...mapGetters('marketing', ['selectedDeal']),
    ...mapGetters('companyUserV2', ['getUsersList']),
    modifiedUserList() {
      return (
        this.getUsersList[JSON.stringify(this.defaultPayloadForUsers)] || []
      ).map((user) => ({
        id: user.id,
        fullName: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
      }));
    },
  },
  methods: {
    async init() {
      try {
        this.$vs.loading();
        this.loading = true;
        await this.fetchContacts({ pageSize: 25, currentPage: 1 });
      } catch (error) {
      } finally {
        this.$vs.loading.close();
      }
    },
    async fetchContacts({
      pageSize = 25,
      currentPage = 1,
      filters = this.filters,
    }) {
      let payload = {
        ...(this.location == 'deal' && {
          dealId: Object.keys(this.selectedDeal).length
            ? this.selectedDeal.id
            : this.$route.params.id,
        }),
        page: currentPage,
        pageSize,
        fields: [
          'phone',
          'email',
          'customer',
          'address',
          'assignees',
          'status',
        ],
      };
      const appliedFilters = getObjectDifference(this.filters, filters);
      if (Object.keys(appliedFilters).length) {
        this.filterFlag = true;
        payload = { ...payload, ...appliedFilters };
      }

      try {
        const { data } = await this.$store.dispatch(
          'marketing/getContacts',
          payload
        );
        this.loading = false;

        this.contacts = data.payload.contacts || [];
        this.$store.commit('marketing/setDealContacts', this.contacts);
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
        this.loading = false;
      }
    },
    handleExistingModal(val) {
      this.showExistingModal = val;
    },
    handleContactModal(val) {
      this.$nextTick(() => {
        this.selectedContactId = null;
        this.showContactModal = val;
        if (val) {
          this.selectedContactId = 0;
        }
      });
    },
    editContactModal(val) {
      this.showExistingModal = false;
      this.$nextTick(() => {
        this.showContactModal = true;
        if (val.id) {
          this.selectedContactId = val.id;
          this.editContactType = 'existingContact';
        } else {
          this.selectedContactId = val;
          this.editContactType = '';
        }
      });
    },
    handleCampaignModal(value) {
      this.showCampaignModal = value;
    },
    getSelectedContacts(contacts) {
      this.selectedContacts = contacts;
    },
    async hanldeAddCampaign(campaignId) {
      const leads = [];
      if (
        !this.selectedContacts.every((contact) =>
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)
        )
      ) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Please select contacts with valid email.',
        });
      } else {
        this.selectedContacts.forEach((contact) => {
          const lead = {
            email: contact.email,
            firstName: contact.firstName || null,
            lastName: contact.lastName || null,
            companyName: (contact.customer && contact.customer.name) || null,
          };
          leads.push(lead);
        });
        try {
          await this.$store.dispatch('marketing/createLead', {
            campaignId,
            leads,
          });
          this.$vs.notify({
            time: 8000,
            color: 'primary',
            title: 'Success',
            text: 'Leads added successfully',
          });
          this.selectedContacts = [];
          this.handleCampaignModal(false);
        } catch (error) {
          this.$vs.notify({
            time: 8000,
            color: 'danger',
            title: 'Error',
            text: getApiErrorMsg(error),
          });
        }
      }
    },
  },
  watch: {
    selectedDeal: {
      handler(val) {
        if (val && this.location == 'deal') {
          this.fetchContacts();
        }
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss">
.select-type {
  width: 150px;
}
.vs-icon {
  padding: 3px;
}
</style>
