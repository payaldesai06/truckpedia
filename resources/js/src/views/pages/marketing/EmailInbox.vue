<template>
  <div>
    <div class="flex">
      <div style="min-width: 15%" class="pr-4">
        <AccountList
          :viewMode="viewMode"
          @email-clicked="handleEmailClicked"
          @onViewChange="handleViewChange"
          @updateEmailAccounts="updateEmailAccounts"
        />
      </div>
      <div style="min-width: 20%" class="px-4">
        <MailThreads
          @thread-clicked="handelThreadClicked"
          ref="threadList"
          :selectedEmailAccounts="selectedEmailAccounts"
          :viewMode="viewMode"
        />
      </div>
      <div class="pl-4" style="min-width: 65%">
        <MailViewBox
          @threadUpdated="handleThreadUpdated"
          :selectedThread="selectedThread"
          :userEmailAccounts="allEmailAccounts"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AccountList from './components/EmailInbox/AccountList';
import MailViewBox from './components/EmailInbox/MailViewBox';
import MailThreads from './components/EmailInbox/MailThreads.vue';
import { getApiErrorMsg } from '@/helpers/helper';

export default {
  name: 'MailIndex',

  components: {
    AccountList,
    MailViewBox,
    MailThreads,
  },

  data() {
    return {
      selectedEmailAccounts: [],
      selectedThread: {},
      viewMode: 'viewByAllInboxes',
      allEmailAccounts: [],
    };
  },
  methods: {
    handleEmailClicked(item) {
      if (item !== this.selectedEmailAccounts[0]) {
        this.selectedThread = {};
      }
      this.selectedEmailAccounts = [item];
    },
    async handelThreadClicked(emailAccountId, thread) {
      // this.selectedThread = item;
      try {
        // this.loading = true;
        const { data } = await this.$store.dispatch(
          'marketing/getThreadMessages',
          {
            id: emailAccountId,
            threadId: thread.id,
          }
        );
        // Needed in child pages' API.
        data.payload.thread.emailAccountId = emailAccountId;
        this.selectedThread = data.payload.thread;
        // We shall ONLY mark a thread as read if it's successfully loaded.
        // It's wrong if we mark a thread as read even before we get it, cause
        // the latter can fail due to various reasons, like BE bug.
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
        // this.loading = false;
      }
    },
    handleThreadUpdated(thread) {
      this.$refs.threadList.updateThread(thread);
    },
    handleViewChange({ view, accountList }) {
      this.viewMode = view;
      this.selectedEmailAccounts = accountList || [];
      this.selectedThread = {};
    },
    updateEmailAccounts(emailAccounts) {
      this.allEmailAccounts = emailAccounts || [];
    },
  },
};
</script>

<style lang="scss" scoped></style>
