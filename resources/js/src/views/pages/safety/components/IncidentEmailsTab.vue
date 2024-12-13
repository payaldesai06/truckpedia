<template>
  <div class="mt-4">
    <vx-card>
      <div class="vx-row">
        <div class="vx-col">
          <h5 class="font-bold">Emails</h5>
        </div>
      </div>
      <vs-divider />
      <div class="vx-row">
        <!-- Left Section -->
        <div class="vx-col w-full md:w-1/4">
          <div>
            <vs-button
              color="primary"
              class="w-full"
              :disabled="isEmailComposerOpen"
              @click.stop="toggleEmailComposer"
            >
              New Email
            </vs-button>
          </div>
          <vs-divider class="my-2" />
          <div class="email-list overflow-y-auto">
            <!-- Email list -->
            <div class="flex flex-col gap-2">
              <div
                :class="[
                  'p-2 rounded cursor-pointer h-34',
                  previewEmailId === email.emailId
                    ? 'border-gray-highlighted'
                    : 'border-gray',
                ]"
                v-for="(email, index) in value.emails"
                :key="email.emailId"
                @click="selectEmail(email)"
              >
                <div class="flex justify-between">
                  <p
                    class="font-bold text-ellipsis overflow-hidden whitespace-nowrap"
                  >
                    {{ getEmails(email.to) }}
                  </p>
                  <vs-icon
                    icon="delete"
                    class="delete-icon"
                    @click="confirmDeleteEmail($event, email, index)"
                  ></vs-icon>
                </div>

                <p class="text-sm font-medium">
                  {{ email.subject }}
                </p>
                <p
                  class="text-xs email-content pointer-events-none"
                  v-html="email.content"
                ></p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Section -->
        <div class="vx-col w-full md:w-3/4">
          <template v-if="emailComposer.isVisible">
            <incident-email-composer
              v-model="emailData"
              @send-email="sendEmail"
              @cancel-email="closeEmailComposer"
            />
          </template>
          <template v-else-if="emailPreview.isVisible">
            <incident-email-preview
              :value="emailPreview.email"
              @close-preview="closeEmailPreview"
            />
          </template>
          <template v-else>
            <div class="flex items-center justify-center h-full">
              <p class="text-2xl font-bold">
                Please select an email or add new email.
              </p>
            </div>
          </template>
        </div>
      </div>
    </vx-card>
  </div>
</template>

<script>
import IncidentEmailComposer from './IncidentEmailComposer.vue';
import IncidentEmailPreview from './IncidentEmailPreview.vue';

import { arrayToCommaSeparatedString, getApiErrorMsg } from '@/helpers/helper';

export default {
  name: 'IncidentEmailsTab',
  components: {
    IncidentEmailComposer,
    IncidentEmailPreview,
  },
  props: {
    value: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    isEmailComposerOpen() {
      return this.emailComposer.isVisible;
    },
    previewEmailId() {
      return this.emailPreview.email.emailId;
    },
  },
  data() {
    return {
      emailData: {
        to: [],
        cc: [],
        bcc: [],
        fromName: '',
        from: '',
        replyTo: [],
        subject: '',
        content: '',
        type: 'sendOutFromEzpapel',
      },
      emailComposer: {
        isVisible: false,
      },
      emailPreview: {
        isVisible: false,
        email: {},
      },
    };
  },
  methods: {
    resetEmailData() {
      this.emailData = {
        to: [],
        cc: [],
        bcc: [],
        fromName: '',
        from: '',
        replyTo: [],
        subject: '',
        content: '',
        type: 'sendOutFromEzpapel',
      };
    },
    closeEmailComposer() {
      this.emailComposer.isVisible = false;
      this.resetEmailData();
    },
    toggleEmailComposer() {
      this.closeEmailPreview();
      this.emailComposer.isVisible = !this.emailComposer.isVisible;
    },
    async sendEmail() {
      try {
        this.$vs.loading({
          container: '#btn-send-email',
          scale: 0.45,
        });

        const payload = {
          ...this.emailData,
          incidentId: Number(this.value.incidentId),
          from:
            this.emailData.type === 'sendOutFromEzpapel'
              ? null
              : this.emailData.from,
        };

        const { data } = await this.$store.dispatch(
          'incidents/sendEmail',
          payload
        );

        if (data && data.payload) {
          delete payload.incidentId;

          this.value.emails = [
            ...this.value.emails,
            {
              ...payload,
              emailId: data.payload.emailId,
              createdAt: data.payload.createdAt,
            },
          ].sort((a, b) => b.emailId - a.emailId);
        }

        this.$vs.notify({
          title: 'Success',
          text: `Email ${
            payload.type === 'sendOutFromEzpapel' ? 'sent' : 'saved'
          } successfully`,
          color: 'success',
        });

        this.resetEmailData();
      } catch (error) {
        this.$vs.notify({
          title: 'Error',
          text: error.response.data.message || error.message,
          color: 'danger',
        });
      } finally {
        this.$vs.loading.close('#btn-send-email > .con-vs-loading');
      }
    },
    selectEmail(email) {
      this.closeEmailComposer();
      this.emailPreview = {
        isVisible: true,
        email,
      };
    },
    closeEmailPreview() {
      this.emailPreview = {
        isVisible: false,
        email: {},
      };
    },
    getEmails(emails) {
      return arrayToCommaSeparatedString(emails);
    },
    confirmDeleteEmail(event, email, index) {
      event.stopPropagation();
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Confirm',
        text: 'Are you sure you want to delete this email?',
        acceptText: 'Yes',
        accept: () => this.deleteEmail(email, index),
      });
    },
    async deleteEmail(email, index) {
      try {
        const payload = {
          incidentId: Number(this.value.incidentId),
          emailId: email.emailId,
        };
        const response = await this.$store.dispatch(
          'incidents/deleteEmail',
          payload
        );
        if (response.status === 200) {
          this.value.emails.splice(index, 1);
          this.$vs.notify({
            title: 'Success',
            text: `Email delete successfully`,
            color: 'success',
          });
          this.emailPreview.isVisible = false;
        }
      } catch (error) {
        this.$vs.notify({
          title: 'Error',
          color: 'danger',
          text: getApiErrorMsg(error),
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.email-list {
  max-height: 520px;
  scrollbar-color: #dadce0 transparent;
  scrollbar-width: thin;

  .email-content {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    background: #fff;
  }
}

.email-list::-webkit-scrollbar {
  height: 8px;
  overflow: visible;
  width: 8px;
}

.email-list::-webkit-scrollbar-thumb {
  border-style: solid;
  border-color: transparent;
  border-width: 4px;
  background-color: #dadce0;
  border-radius: 8px;
  box-shadow: none;
}
// Utility classes
.border-gray {
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.border-gray-highlighted {
  border: 1px solid rgba(0, 0, 0, 0.5);
}

.whitespace-nowrap {
  white-space: nowrap;
}

.text-ellipsis {
  text-overflow: ellipsis;
}

.h-34 {
  height: 8.5rem;
}

.delete-icon {
  font-size: 1.5rem;
}
</style>
