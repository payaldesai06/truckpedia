<template>
  <div class="deal-email">
    <template v-if="emails.length && !loading">
      <div class="flex justify-end py-3">
        <AddBtn
          text="New Email"
          class="add-btn"
          @onClick="handleEmailModal(true)"
        />
      </div>
      <EmailsTable :emails="emails" @setActiveEmailId="setActiveEmailId" />
    </template>
    <template v-else-if="!loading">
      <div class="flex justify-center no-data-found py-10">
        <div class="flex flex-col items-center">
          <h6 class="mb-3">No Email</h6>
          <div class="flex gap-3">
            <AddBtn
              text="New Email"
              class="add-btn"
              @onClick="handleEmailModal(true)"
            />
          </div>
        </div>
      </div>
    </template>
    <!-- Add deal email -->
    <AddEmail
      :isShow="emailModal"
      :activeEmailId="activeEmailId"
      @triggerAction="getAllEmails"
      @closeEmailModal="handleEmailModal(false)"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import AddBtn from './AddBtn.vue';
import EmailsTable from './email/EmailsTable.vue';
export default {
  name: 'deal-email',
  components: {
    AddBtn,
    EmailsTable,
    AddEmail: () => import('./email/AddEmail.vue'),
  },
  data() {
    return {
      emails: [],
      loading: true,
      emailModal: false,
      activeEmailId: null,
      pagination: {
        page: 1,
        pageSize: 25,
      },
    };
  },
  computed: {
    ...mapGetters('marketing', ['selectedDeal']),
  },
  mounted() {
    this.getAllEmails();
  },
  methods: {
    async getAllEmails() {
      try {
        this.$vs.loading();
        const payload = {
          ...this.pagination,
          dealId: this.selectedDeal.id,
          fields: ['to', 'subject'],
        };
        const { data } = await this.$store.dispatch(
          'marketing/getAllEmailsForDeal',
          payload
        );
        this.emails = data.payload.emails;
      } catch (error) {
        console.log(error, 'error');
      } finally {
        this.$vs.loading.close();
        this.loading = false;
      }
    },
    handleEmailModal(value) {
      this.emailModal = value;
      if(!value) {
        this.activeEmailId = null;
      }
    },
    setActiveEmailId(id) {
      this.activeEmailId = id;
      this.handleEmailModal(true);
    }
  },
};
</script>
