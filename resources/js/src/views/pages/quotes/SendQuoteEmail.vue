<template>
  <div class="email-form-container">
    <div class="form-row">
      <div class="label mt-4">From Name<field-required-sign /></div>
      <div class="input mt-4">
        <vs-input v-model="fromName" class="w-full" />
      </div>
      <div class="label mt-4" style="text-align: center">to</div>
      <div class="input">
        <p class="small text-xs">Separate multiple emails with commas</p>
        <vs-input v-model="to" @keypress.space.prevent class="w-full" />
      </div>
    </div>
    <div class="form-row">
      <div class="label">Cc</div>
      <div class="input">
        <p class="small text-xs">Separate multiple emails with commas</p>
        <vs-input v-model="cc" @keypress.space.prevent class="w-full" />
      </div>
    </div>
    <div class="form-row">
      <div class="label">Bcc</div>
      <div class="input">
        <p class="small text-xs">Separate multiple emails with commas</p>
        <vs-input v-model="bcc" @keypress.space.prevent class="w-full" />
      </div>
    </div>
    <div class="form-row">
      <div class="label">Reply to<field-required-sign /></div>
      <div class="input">
        <p class="small text-xs">Separate multiple emails with commas</p>
        <vs-input v-model="replyTo" @keypress.space.prevent class="w-full" />
      </div>
    </div>
    <div class="form-row">
      <div class="label">Subject<field-required-sign /></div>
      <div class="input">
        <vs-input v-model="subject" class="w-full" />
      </div>
    </div>
    <vs-divider />
    <QuoteEmailContentPreview :quoteEmailContent="quotesDetails" />
    <div class="quotesBtn">
      <vs-button @click.stop="goBack">Back</vs-button>
      <vs-button @click.stop="sendEmail">Send via Truckpedia</vs-button>
    </div>
  </div>
</template>

<script>
import QuoteEmailContentPreview from './components/QuoteEmailContentPreview.vue';
import { Store, mapGetters } from 'vuex';

export default {
  name: 'SendQuoteEmail',
  components: {
    QuoteEmailContentPreview,
  },
  computed: {
    ...mapGetters('auth', ['user']),
    // bcc() {
    //   return this.selectedCarriers.map((item) => item.email).join(', ');
    // },
  },
  props: {
    selectedCarriers: {
      type: Array,
      default: () => [],
    },
    quotesDetails: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      fromName: '',
      replyTo: '',
      to: '',
      cc: [],
      bcc: [],
      subject: '',
    };
  },
  created() {
    this.setAvailableData();
    this.subject = `New Quote Request From ${this.user.admin_company_details.business_name}`;
  },
  watch: {
    selectedCarriers(newVal) {
      this.setAvailableData();
    },
  },

  methods: {
    goBack() {
      this.$emit('goBack');
    },
    setAvailableData() {
      this.fromName = this.user.admin_company_details.business_name;
      this.bcc = this.selectedCarriers
        .map((item) => {
          if (item.ccEmails.length) {
            return `${item.email},${item.ccEmails.join(',')}`;
          }
          return item.email;
        })
        .filter(Boolean)
        .join(',');
      this.cc = this.currentUserEmails();
      this.replyTo = this.user.admin_company_details.email;
    },
    // Add email validation function
    currentUserEmails() {
      const { email, billing_cc_emails } =
        (this.user || {}).admin_company_details || {};
      return `${email}${billing_cc_emails ? ',' : ''}${
        billing_cc_emails && billing_cc_emails.join(', ')
      }`;
    },
    async sendEmail() {
      const { fromName, replyTo, cc, bcc, subject, to } = this;

      // Check if any required fields are empty
      if (!fromName || !replyTo || !subject) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Please fill in all required fields.',
        });
        return;
      }
      // Proceed to send the email
      const emailData = {
        fromName,
        to: to
          ? to
              .split(',')
              .map((email) => email.trim())
              .filter(Boolean)
          : null,
        replyTo: replyTo
          .split(',')
          .map((email) => email.trim())
          .filter(Boolean),
        cc: cc
          ? cc
              .split(',')
              .map((email) => email.trim())
              .filter(Boolean)
          : null,
        bcc: bcc
          ? bcc
              .split(',')
              .map((email) => email.trim())
              .filter(Boolean)
          : null,
        subject,
      };

      this.$emit('submitCreateEditQuote', emailData);
    },
  },
};
</script>

<style scoped lang="scss">
.quotesBtn {
  display: flex;
  justify-content: space-between;
  margin: 25px 0px;

  button {
    padding: 14px 24px;
    border-radius: 5px;
    color: #fff;
    background-color: #3975eb;
    outline: none;
    border: 1px solid #3975eb;
    cursor: pointer;
  }
}

.email-form-container {
  background-color: #f3f4f6;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  padding: 25px;

  .form-row {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    .label {
      width: 80px;
      text-align: left;
      font-weight: 500;
    }

    .input {
      flex-grow: 1;

      input {
        background-color: #fff;
        border: none;
        padding: 15px;
        outline: none;
        width: 100%;
      }
    }
  }
}
</style>
