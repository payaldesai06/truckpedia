<template>
  <Dialog
    :visible="isShow"
    :style="{ width: '60rem' }"
    :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
    position="bottomright"
    header="Header"
    :modal="true"
  >
    <template #header>
      <div class="w-full flex items-center justify-between vs-header-sidebar">
        <h4>{{ showDataMode ? 'Email Details' : 'New Email' }}</h4>
        <feather-icon
          icon="XIcon"
          @click="onClose"
          class="cursor-pointer text-white"
        ></feather-icon>
      </div>
    </template>
    <form class="email-form pb-5 mt-3">
      <div class="vx-row w-full m-0">
        <div class="vx-col md:w-1/2 w-full pb-4">
          <label>From <field-required-sign /></label>
          <v-select
            :options="modifiedMarkeingEmails"
            v-model="emailData.emailAccountId"
            label="fullName"
            v-validate="'required'"
            data-vv-as="selected"
            name="emailAccountId"
            :clearable="true"
            :reduce="(option) => option.id"
            :disabled="showDataMode"
          />
          <span class="text-danger text-sm">
            {{ errors.first('emailAccountId') }}
          </span>
        </div>
        <div class="vx-col md:w-1/2 w-full pb-4">
          <label
            >To
            <span class="small text-xs"
              >(Separate multiple emails with commas)</span
            ></label
          >
          <vs-input
            class="w-full"
            v-model="emailTo"
            name="emailTo"
            @keypress.space.prevent
            @input="setEmail($event, 'to')"
            @blur="checkEmailValidation('to')"
            :disabled="showDataMode"
          />
          <span class="text-danger text-sm" v-if="!validEmailAddress.to">
            Please enter valid email Address
          </span>
        </div>
        <div class="vx-col md:w-1/2 w-full pb-4">
          <label
            >Cc
            <span class="small text-xs"
              >(Separate multiple emails with commas)</span
            ></label
          >
          <vs-input
            class="w-full"
            v-model="emailCc"
            name="emailCc"
            @keypress.space.prevent
            @input="setEmail($event, 'cc')"
            @blur="checkEmailValidation('cc')"
            :disabled="showDataMode"
          />
          <span class="text-danger text-sm" v-if="!validEmailAddress.cc">
            Please enter valid email Address
          </span>
        </div>
        <div class="vx-col md:w-1/2 w-full pb-4">
          <label
            >Bcc
            <span class="small text-xs"
              >(Separate multiple emails with commas)</span
            ></label
          >
          <vs-input
            class="w-full"
            v-model="emailBcc"
            name="emailBcc"
            @keypress.space.prevent
            @input="setEmail($event, 'bcc')"
            @blur="checkEmailValidation('bcc')"
            :disabled="showDataMode"
          />
          <span class="text-danger text-sm" v-if="!validEmailAddress.bcc">
            Please enter valid email Address
          </span>
        </div>
        <div class="vx-col w-full pb-4">
          <label>Subject <field-required-sign /></label>
          <vs-input
            class="w-full"
            v-model="emailData.subject"
            name="subject"
            v-validate="'required|max:225'"
            data-vv-validate-on="blur"
            :disabled="showDataMode"
          />
          <span class="text-danger text-sm">{{ errors.first('subject') }}</span>
        </div>
        <div class="vx-col w-full pb-4 mt-4">
          <label>Content <field-required-sign /></label>
          <vue-editor
            v-model="emailData.content"
            :editorToolbar="customToolbar"
            :editorOptions="editorOptions"
            :placeholder="!showDataMode ? 'Add content here...' : ''"
            :disabled="showDataMode"
          ></vue-editor>
        </div>
      </div>
      <div class="flex justify-end w-full mt-5" v-if="!showDataMode">
        <!-- <vs-button color="#1877F2" class="mr-3 action-btn" type="border">
            Cancel
          </vs-button> -->
        <vs-button
          color="#1877F2"
          class="action-btn"
          :disabled="!validateForm"
          @click="handlePostEmail"
        >
          Save
        </vs-button>
      </div>
    </form>
  </Dialog>
</template>
<script>
import { VueEditor } from 'vue2-editor';
import { mapGetters } from 'vuex';
import { Validator } from 'vee-validate';
import { getApiErrorMsg } from '@/helpers/helper';
const dict = {
  custom: {
    emailAccountId: {
      required: 'Email field is required.',
    },
    subject: {
      required: 'Subject field is required',
    },
  },
};
Validator.localize('en', dict);
export default {
  name: 'add-deal-email',
  components: {
    VueEditor,
  },
  props: {
    isShow: {
      type: Boolean,
      default: () => false,
    },
    activeEmailId: {
      type: Number | null,
      default: () => null,
    },
  },
  data() {
    return {
      emailTo: null,
      emailCc: null,
      emailBcc: null,
      emailData: {
        emailAccountId: null,
        to: null,
        cc: null,
        bcc: null,
        subject: null,
        content: null,
      },
      customToolbar: [
        [{ font: [] }],
        [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ color: [] }, { background: [] }],
        ['link'],
      ],
      validEmailAddress: {
        to: true,
        cc: true,
        bcc: true,
      },
      showDataMode: false,
    };
  },
  computed: {
    ...mapGetters('marketing', ['getAllMarketingEmails', 'selectedDeal']),
    modifiedMarkeingEmails() {
      return this.getAllMarketingEmails.map((email) => ({
        id: email.id,
        fullName: `${email.firstName || ''} ${email.lastName || ''} ${
          email.email ? `(${email.email})` : ''
        }`.trim(),
      }));
    },
    validateForm() {
      return (
        !this.errors.any() &&
        this.emailData.emailAccountId &&
        this.validEmailAddress.cc &&
        this.validEmailAddress.bcc &&
        this.validEmailAddress.to &&
        this.emailData.content
      );
    },
    editorOptions() {
      return {
        modules: {
          toolbar: this.showDataMode ? false : true,
        },
      };
    },
  },
  mounted() {
    this.getEmailAccounts();
  },
  methods: {
    checkEmailValidation(key) {
      // Simple is enough.
      // DO NOT CHANGE THIS WITHOUT ZBU'S PERMISSION.
      const validRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (this.emailData[key] && this.emailData[key].length) {
        const isValid = this.emailData[key].every((email) =>
          validRegex.test(email)
        );
        this.validEmailAddress[key] = isValid;
      } else {
        this.validEmailAddress[key] = true;
      }
    },
    onClose() {
      this.$emit('closeEmailModal');
    },
    setEmail(value, key) {
      this.emailData[key] = value
        .split(',')
        .map((email) => email.trim())
        .filter((email) => email);
    },
    resetForm() {
      this.emailTo = null;
      this.emailCc = null;
      this.emailBcc = null;
      this.emailData = {
        emailAccountId: null,
        to: null,
        cc: null,
        bcc: null,
        subject: null,
        content: null,
      };
      this.validEmailAddress = {
        to: true,
        cc: true,
        bcc: true,
      };
    },
    async getEmailAccounts() {
      if (!this.getAllMarketingEmails.length) {
        try {
          const { data } = await this.$store.dispatch(
            'marketing/getEmailAccountList',
            {
              fieldsToQuery: ['firstName', 'lastName', 'email'],
            }
          );
          this.$store.commit(
            'marketing/setMarketingEmails',
            data.payload.emailAccounts
          );
        } catch (e) {
          console.log(e);
        }
      }
    },
    async handlePostEmail() {
      if (!this.emailData.to && !this.emailData.cc && !this.emailData.bcc) {
        this.$vs.notify({
          title: 'Error',
          text: "Please specify at least one recipient in the 'To', 'Cc', or 'Bcc' field.",
          color: 'danger',
        });
        return;
      }
      try {
        this.$vs.loading();
        const payload = Object.fromEntries(
          Object.entries({
            ...this.emailData,
            id: this.selectedDeal.id,
          }).filter(
            ([_, v]) =>
              (v != '' && v != null) ||
              (typeof val == 'object' && v != null && val.length)
          )
        );
        await this.$store.dispatch('marketing/createEmailForDeal', payload);
        this.$vs.notify({
          title: 'Success',
          text: 'Email added successfully',
          color: 'primary',
        });
        this.onClose();
        this.$emit('triggerAction');
      } catch (error) {
        this.$vs.notify({
          title: 'Error',
          text: getApiErrorMsg(error),
          color: 'danger',
        });
      } finally {
        this.$vs.loading.close();
      }
    },
    async getEmailById(emailId) {
      try {
        this.$vs.loading();
        const payload = {
          dealId: this.selectedDeal.id,
          emailId,
        };
        const { data } = await this.$store.dispatch(
          'marketing/getEmailByIdForDeal',
          payload
        );
        const emailToShow = data.payload.email;
        this.emailTo = emailToShow.to;
        this.emailCc = emailToShow.cc;
        this.emailBcc = emailToShow.bcc;
        this.emailData.emailAccountId = emailToShow.emailAccount.id;
        this.emailData.subject = emailToShow.subject;
        this.emailData.content = emailToShow.content;
      } catch (error) {
        this.$vs.notify({
          title: 'Error',
          text: 'Something went wrong',
          color: 'danger',
        });
      } finally {
        this.$vs.loading.close();
      }
    },
  },
  watch: {
    isShow(val) {
      if (val) {
        this.resetForm();
      }
    },
    activeEmailId(id) {
      if (id) {
        this.getEmailById(id);
        this.showDataMode = true;
      } else {
        this.showDataMode = false;
      }
    },
  },
};
</script>

<style lang="scss">
.email-form {
  input:disabled {
    opacity: 1;
    cursor: not-allowed;
    pointer-events: all;
  }
  .ql-disabled .ql-editor {
    background-color: #fafafa;
    * {
      cursor: not-allowed;
    }
    cursor: not-allowed;
  }
}
</style>
