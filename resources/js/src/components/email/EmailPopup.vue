<template>
  <div>
    <vs-popup title="" :active.sync="isActive">
      <!-- Content for the popup -->
      <template>
        <div>
          <template>
            <div>
              <div class="email-config">
                <div class="mt-4 my-3">
                  <label>To</label>
                  <p class="small text-xs">
                    Separate multiple emails with commas
                  </p>
                  <vs-input
                    v-model="emailTo"
                    class="w-full"
                    @input="onEmailInput('emailTo')"
                  />
                  <div>
                    <vs-collapse>
                      <vs-collapse-item class="p-0">
                        <div slot="header" class="p-0 m-0">
                          <span class="text-sm">Show more options</span>
                        </div>
                        <div class="mt-3">
                          <label class="my-4">Cc</label>
                          <p class="small text-xs">
                            Separate multiple emails with commas
                          </p>
                          <vs-input
                            v-model="emailCC"
                            class="w-full"
                            @input="onEmailInput('emailCC')"
                          />
                        </div>
                        <div class="mt-3">
                          <label class="my-4">Bcc</label>
                          <p class="small text-xs">
                            Separate multiple emails with commas
                          </p>
                          <vs-input
                            v-model="emailBCC"
                            class="w-full"
                            @input="onEmailInput('emailBCC')"
                          />
                        </div>
                        <div class="mt-3">
                          <label class="my-4">From name</label>
                          <div>
                            <vs-input v-model="fromName" class="w-full" />
                          </div>
                        </div>
                        <div class="mt-3">
                          <label class="my-4">Reply to</label>
                          <div>
                            <vs-input v-model="replyTo" class="w-full" />
                          </div>
                        </div>
                      </vs-collapse-item>
                    </vs-collapse>
                    <div class="mt-3">
                      <label class="my-4">Subject</label>
                      <vs-input class="w-full" v-model="subject" />
                    </div>
                    <div class="mt-3">
                      <label class="my-4">Content</label>
                      <vue-editor
                        v-model="content"
                        :editorToolbar="customToolbar"
                      ></vue-editor>
                    </div>
                    <div class="mt-3">
                      <p>
                        <strong>Note:</strong> Selected files will be included
                        in the email as attachments.
                      </p>
                    </div>
                    <vs-button class="mt-4" @click="sendEmail()"
                      >Send Email</vs-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </template>
    </vs-popup>
  </div>
</template>
<script>
import { VueEditor } from 'vue2-editor';
import { validateEmail } from '../../helpers/helper';
export default {
  name: 'EmailPopup',
  components: {
    VueEditor,
  },
  props: {
    selectedDocs: {
      type: Array,
      default: function () {
        return [];
      },
    },
    isPopupActive: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isOpenSendEmailPopup: false,
      cc: [],
      bcc: [],
      emailTo: '',
      emailCC: '',
      emailBCC: '',
      fromName: '',
      replyTo: '',
      subject: '',
      notes: '',
      content: '',
      customToolbar: [
        [{ font: [] }],
        [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ color: [] }, { background: [] }],
        ['link'],
      ],
    };
  },
  created() {
    this.setAvailableData();
  },
  computed: {
    isActive: {
      get() {
        return this.isPopupActive;
      },
      set(val) {
        if (!val) {
          this.closePopup();
          this.clearForm();
        }
      },
    },
  },
  methods: {
    setAvailableData() {
      this.replyTo = this.user.admin_company_details.email;
      this.fromName = this.user.admin_company_details.business_name;
    },
    async validateMultipleEmails(emails, emailMsg) {
      if (emails) {
        for (const item of emails.split(',')) {
          const validte = await validateEmail(item);
          if (!validte) {
            this.$vs.notify({
              color: 'danger',
              title: 'Error',
              text: `You have entered an invalid ${emailMsg} email address!`,
            });
            return true;
          }
          return false;
        }
      }
      return false;
    },
    async sendEmail() {
      if (this.emailTo === '' || this.subject === '') {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Email and Subject are required fields.',
        });
        return;
      }
      if (await this.validateMultipleEmails(this.emailCC, 'CC')) return;
      if (await this.validateMultipleEmails(this.replyTo, 'Reply to')) return;
      if (await this.validateMultipleEmails(this.emailBCC, 'Bcc')) return;
      if (await this.validateMultipleEmails(this.emailTo, 'To')) return;
      const payload = {
        email: {
          fromName: this.fromName || '',
          replyTo: this.replyTo || '',
          to:
            (this.emailTo &&
              this.emailTo.split(',').map((email) => email.trim())) ||
            undefined,
          cc:
            (this.emailCC &&
              this.emailCC.split(',').map((email) => email.trim())) ||
            undefined,
          bcc:
            (this.emailBCC &&
              this.emailBCC.split(',').map((email) => email.trim())) ||
            undefined,
          subject: this.subject,
          content: this.content,
          attachments: this.selectedDocs.map(({ fileName, url }) => {
            return {
              filename: fileName,
              url,
            };
          }),
        },
      };
      try {
        const response = await this.$store.dispatch('email/sendEmail', payload);
        if (response && response.data) {
          this.$vs.notify({
            color: 'primary',
            title: 'Email Sent',
            text: 'Your email has been sent successfully.',
          });
        } else {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Invalid response from the server.',
          });
        }
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message || error.message,
        });
      }
      this.clearForm();
      this.closePopup();
    },
    clearForm() {
      this.emailTo = '';
      this.emailCC = '';
      this.emailBCC = '';
      this.subject = '';
      this.content = '';
      this.notes = '';
    },
    isOpenPopup() {
      this.isOpenSendEmailPopup = true;
    },
    closePopup() {
      this.$emit('closePopup');
    },
    onEmailInput(field) {
      if (this[field]) {
        // Remove spaces
        this[field] = this[field].replace(/\s/g, '');
      }
    },
  },
};
</script>
<style>
.customNotes .ql-toolbar.ql-snow {
  display: none;
}
.customNotes #quill-container {
  border-top: 1px solid #ccc;
}
</style>
