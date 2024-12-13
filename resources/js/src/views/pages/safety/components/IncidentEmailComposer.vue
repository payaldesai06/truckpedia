<template>
  <div>
    <div class="flex justify-end">
      <vs-icon
        class="cursor-pointer"
        icon="close"
        size="small"
        @click="cancelEmail"
      />
    </div>
    <div class="email-composer">
      <div class="my-3">
        <div>
          <label>Type</label>
          <v-select
            v-model="value.type"
            :options="types"
            :clearable="false"
            :reduce="(option) => option.value"
          />
        </div>
        <div v-show="isRecordOnlyType">
          <label>From</label>
          <vs-input
            v-model="value.from"
            @keypress.space.prevent
            class="w-full"
          />
        </div>
        <label class="my-4">To</label>
        <p class="small text-xs">Separate multiple emails with commas</p>
        <vs-input
          v-model="emailTo"
          class="w-full"
          @keypress.space.prevent
          @input="setEmail($event, 'to')"
        />
        <div>
          <vs-collapse>
            <vs-collapse-item class="p-0">
              <div slot="header" class="p-0 m-0">
                <span class="text-sm">Show more options</span>
              </div>
              <div class="mt-3">
                <label class="my-4">CC</label>
                <p class="small text-xs">
                  Separate multiple emails with commas
                </p>
                <vs-input
                  v-model="emailCc"
                  class="w-full"
                  @keypress.space.prevent
                  @input="setEmail($event, 'cc')"
                />
              </div>

              <div class="mt-3">
                <label class="my-4">BCC</label>
                <p class="small text-xs">
                  Separate multiple emails with commas
                </p>
                <vs-input
                  v-model="emailBcc"
                  class="w-full"
                  @keypress.space.prevent
                  @input="setEmail($event, 'bcc')"
                />
              </div>

              <div class="mt-3">
                <label class="my-4">From name</label>
                <div>
                  <vs-input v-model="value.fromName" class="w-full" />
                </div>
              </div>

              <div class="mt-3">
                <label class="my-4">Reply to</label>
                <p class="small text-xs">
                  Separate multiple emails with commas
                </p>
                <div>
                  <vs-input
                    v-model="replyTo"
                    class="w-full"
                    @keypress.space.prevent
                    @input="setEmail($event, 'replyTo')"
                  />
                </div>
              </div>
            </vs-collapse-item>
          </vs-collapse>

          <div class="mt-3">
            <label class="my-4">Subject</label>
            <vs-input class="w-full" v-model="value.subject" />
          </div>

          <div class="mt-3">
            <label class="my-4">Content</label>
            <vue-editor
              v-model="value.content"
              :editorToolbar="customToolbar"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Actions -->
    <div class="flex justify-center md:justify-end mt-2">
      <vs-button
        color="primary"
        @click="sendEmail"
        :disabled="isSubmitDisabled"
        id="btn-send-email"
      >
        {{ isRecordOnlyType ? 'Save' : 'Send' }}
      </vs-button>
      <vs-button type="border" class="ml-2" @click="cancelEmail">
        Cancel
      </vs-button>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';
import { mapGetters } from 'vuex';
import { arrayToCommaSeparatedString } from '@/helpers/helper';

export default {
  name: 'IncidentEmailComposer',
  components: {
    VueEditor,
  },
  props: {
    value: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapGetters('auth', ['user']),

    isRecordOnlyType() {
      return this.value && this.value.type === 'recordOnly';
    },
    isSubmitDisabled() {
      return this.value && (!this.value.subject || !this.value.content);
    },
  },
  data() {
    return {
      customToolbar: [
        [{ font: [] }],
        [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ color: [] }, { background: [] }],
        ['link'],
      ],
      types: [
        {
          id: 1,
          label: 'Send Out From Truckpedia',
          value: 'sendOutFromEzpapel',
        },
        { id: 2, label: 'Record Only', value: 'recordOnly' },
      ],
      emailTo: '',
      emailCc: '',
      emailBcc: '',
      replyTo: '',
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const { to, cc, bcc, replyTo } = this.value;
      this.emailTo = this.getEmails(to);
      this.emailCc = this.getEmails(cc);
      this.emailBcc = this.getEmails(bcc);
      this.replyTo = this.getEmails(replyTo);
    },
    getEmails(emails) {
      return arrayToCommaSeparatedString(emails);
    },
    setEmail(value, key) {
      this.value[key] = value
        .split(',')
        .map((email) => email.trim())
        .filter((email) => email);
    },
    sendEmail() {
      this.$emit('send-email');
      this.emailTo = '';
      this.emailCc = '';
      this.emailBcc = '';
      this.replyTo = '';
    },
    cancelEmail() {
      this.$emit('cancel-email');
    },
  },
  watch: {
    'value.type': {
      handler(val) {
        if (val === 'sendOutFromEzpapel') {
          const { email, business_name } =
            (this.user || {}).admin_company_details || {};

          this.value.fromName = business_name || '';
          this.value.replyTo = [email] || '';
        }
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.email-composer {
  overflow: auto;
  // height: 70vh;
}

.vs-collapse-item--header {
  padding: 0;
}
</style>
