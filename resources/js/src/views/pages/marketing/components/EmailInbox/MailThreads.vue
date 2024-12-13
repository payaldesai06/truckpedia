<template>
  <div>
    <!-- <div class="centerx icons-example">
      <vs-input
        icon="search"
        placeholder="Search"
        v-model="searchThread"
        class="w-full"
        @keyup.enter="searchThreads"
      />
    </div> -->
    <div
      class="overflow-auto"
      :style="
        loading
          ? { height: 'calc(100vh - 70px)' }
          : { 'max-height': 'calc(100vh - 70px)' }
      "
      ref="emailListRef"
    >
      <div
        v-show="threadMessages.length !== 0"
        v-for="(thread, index) in threadMessages"
        :key="index"
        :class="['thread-card', { active: index === activeIndex }]"
        @click="setActive(index, thread)"
      >
        <div class="flex items-center justify-between mb-2 gap-2">
          <!-- Note, the messages are sorted in asc order or time by default. -->
          <h6
            :class="{
              'font-bold': threadHasUnreadMessages(thread),
            }"
          >
            {{ getSenderName(thread) }}
          </h6>
          <span
            :class="{
              'font-bold': threadHasUnreadMessages(thread),
            }"
            >{{
              utcToLocalTime(
                thread.messages[thread.messages.length - 1].utcDate
              )
            }}</span
          >
        </div>
        <div class="thread-card-content">
          <p
            class="mb-2"
            :class="{
              'font-bold': threadHasUnreadMessages(thread),
            }"
          >
            {{ thread.messages[thread.messages.length - 1].subject }}
          </p>
          <!-- <p class="mb-2">{{ thread.snippet }}</p> -->
        </div>
      </div>
      <div v-if="loading" class="flex items-center justify-center mt-10">
        <ProgressSpinner
          style="width: 50px; height: 50px"
          strokeWidth="5"
          animationDuration="1s"
        />
      </div>
      <div
        class="flex items-center justify-center empty-thread"
        v-if="
          selectedEmailAccounts.length === 0 &&
          threadMessages.length === 0 &&
          !loading
        "
      >
        <div>
          <div
            class="flex items-center justify-center"
            style="flex-direction: column"
          >
            <h5 class="mt-4">Select an account</h5>
          </div>
        </div>
      </div>
      <div
        class="flex items-center justify-center empty-thread"
        v-else-if="
          selectedEmailAccounts.length &&
          threadMessages.length === 0 &&
          !loading
        "
      >
        <div>
          <div
            class="flex items-center justify-center"
            style="flex-direction: column"
          >
            <h5 class="mt-4">No emails found</h5>
          </div>
        </div>
      </div>
    </div>

    <div class="load-more-btn">
      <button
        type="button"
        @click="handleLoadMoreEmails"
        class="mr-10"
        v-if="!loading && Object.keys(nextPageToken).length > 0"
      >
        Load More
      </button>
    </div>
  </div>
</template>

<script>
import { getApiErrorMsg } from '@/helpers/helper';
import ProgressSpinner from 'primevue/progressspinner';

export default {
  name: 'MailThreads',
  props: {
    selectedEmailAccounts: {
      type: Array,
      default: () => [],
    },
    viewMode: {
      type: String,
      default: 'viewByAllInboxes',
    },
  },
  components: {
    ProgressSpinner,
  },
  data() {
    return {
      searchThread: '',
      activeIndex: -1,
      loading: false,
      threadMessages: [],
      nextPageToken: {},
      emailThreadIds: {},
      currentPage: 0,
    };
  },
  methods: {
    scrollToBottom() {
      const emailListRef = this.$refs.emailListRef;
      emailListRef.scrollTo({
        top: emailListRef.scrollHeight,
        behavior: 'smooth',
      });
    },
    handleLoadMoreEmails() {
      if (!this.loading && this.threadMessages.length > 0) {
        this.scrollToBottom();
        if (this.viewMode === 'viewByAllInboxes') {
          this.fetchEmails();
        } else {
          this.getEmailThreads(
            this.selectedEmailAccounts[0].id,
            this.searchThread
          );
        }
      }
    },
    setActive(index, thread) {
      if (this.activeIndex !== index) {
        this.activeIndex = index;
        const previouslyActive = document.querySelector('.thread-card.active');
        if (previouslyActive) {
          previouslyActive.classList.remove('active');
        }
        const emailAccountId =
          this.viewMode === 'viewByAllInboxes'
            ? Object.keys(this.emailThreadIds).find((key) =>
                this.emailThreadIds[key].includes(thread.id)
              )
            : this.selectedEmailAccounts[0].id;
        this.$emit(
          'thread-clicked',
          emailAccountId,
          this.threadMessages[index]
        );
      }
    },
    async getEmailThreads(id, searchQuery = undefined) {
      try {
        this.loading = true;
        const payload = {
          q: searchQuery,
          pageToken: this.nextPageToken[id] || null,
          withContent: false,
        };
        if (this.threadMessages.length) {
          payload.threadIdsToExclude = this.threadMessages
            .filter((thread) => thread.messages.length > 1)
            .map((thread) => thread.id)
            .join(',');
        }
        const { data } = await this.$store.dispatch('marketing/getThreads', {
          id: id,
          payload,
        });
        this.threadMessages.push(...data.payload.threads);
        if (data.payload.nextPageToken) {
          this.nextPageToken[id] = data.payload.nextPageToken;
        } else {
          delete this.nextPageToken[id];
        }
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
    // searchThreads() {
    //   if (this.selectedEmailAccounts.id) {
    //     this.getEmailThreads(this.selectedEmailAccounts.id, this.searchThread);
    //   }
    // },
    utcToLocalTime(utcTime) {
      if (!utcTime) return '';
      return this.$dayjs.utc(utcTime).local().format('MM/DD');
    },
    threadHasUnreadMessages(thread) {
      return thread.messages.some((m) => m.unread);
    },
    // Update a thread based on get one thread API.
    updateThread(thread) {
      for (let i = 0; i < this.threadMessages.length; ++i) {
        if (this.threadMessages[i].id == thread.id) {
          this.threadMessages[i] = thread;
          this.$forceUpdate();
          break;
        }
      }
    },
    getSenderName(thread) {
      if (thread.messages.length === 1) {
        const { from, sender } = thread.messages[0];
        return from || sender;
      } else {
        let email = '';
        if (this.viewMode === 'viewByAllInboxes') {
          email = (
            this.selectedEmailAccounts.find((account) =>
              (this.emailThreadIds[account.id] || []).includes(thread.id)
            ) || {}
          ).email;
        } else {
          email = this.selectedEmailAccounts[0].email;
        }
        // If the thread has more than one email, use the name (if no name,
        // then email) of the last message whose sender != myself.
        const lastMessageNotFromMe = thread.messages
          .slice()
          .reverse()
          .find((message) => message.sender !== email);
        if (lastMessageNotFromMe) {
          return lastMessageNotFromMe.from || lastMessageNotFromMe.sender;
        } else {
          // If the thread has more than one email and all emails are sent by
          // myself, then display the last message’s sender name (which is myself).
          return (
            thread.messages[thread.messages.length - 1].from ||
            thread.messages[thread.messages.length - 1].sender
          );
        }
      }
    },
    async fetchEmails() {
      // try {
      this.loading = true;
      const fetchEmailThreads = async (emailAccountId) => {
        const payload = {
          q: this.searchThread,
          pageToken: this.nextPageToken[emailAccountId] || null,
          withContent: false,
        };
        if ((this.emailThreadIds[emailAccountId] || []).length) {
          payload.threadIdsToExclude =
            this.emailThreadIds[emailAccountId].join(',');
        }
        const { data } = await this.$store.dispatch('marketing/getThreads', {
          id: emailAccountId,
          payload,
        });

        return data;
      };
      const sortThreads = async (messages = []) => {
        const threadsOnSamePage = [];
        const threadsOnDifferentPages = [];

        this.threadMessages.forEach((thread) => {
          if (thread.page === this.currentPage) {
            threadsOnSamePage.push(thread);
          } else {
            threadsOnDifferentPages.push(thread);
          }
        });

        this.threadMessages = [
          ...threadsOnDifferentPages,
          ...[...threadsOnSamePage, ...messages]
            .map((thread) => ({
              ...thread,
              page: this.currentPage,
            }))
            .sort((a, b) =>
              this.$dayjs
                .utc(a.messages[a.messages.length - 1].utcDate)
                .isBefore(
                  this.$dayjs.utc(b.messages[b.messages.length - 1].utcDate)
                )
                ? 1
                : -1
            ),
        ];
      };

      // First, get the first 6 email accounts.
      const emailAccounts = this.selectedEmailAccounts.slice(0, 6);
      const firstBatchMessages = [];
      for (const { id } of emailAccounts) {
        try {
          if (this.nextPageToken[id] != null || this.currentPage === 0) {
            const res = await fetchEmailThreads(id);
            if ((res || {}).payload) {
              firstBatchMessages.push(...res.payload.threads);
              this.emailThreadIds[id] = [
                ...(this.emailThreadIds[id] || []),
                ...res.payload.threads.map((thread) => thread.id),
              ];
              if (res.payload.nextPageToken) {
                this.nextPageToken[id] = res.payload.nextPageToken;
              } else {
                delete this.nextPageToken[id];
              }
            }
          }
        } catch (error) {}
      }

      await sortThreads(firstBatchMessages);
      this.loading = false;

      const restMessages = [];
      // If there are more than 6 email accounts, then divide them into groups of 6 and query them one by one.
      for (let i = 6; i < this.selectedEmailAccounts.length; i += 6) {
        const emailAccounts = this.selectedEmailAccounts.slice(i, i + 6);
        for (const emailAccount of emailAccounts) {
          try {
            if (
              this.nextPageToken[emailAccount.id] != null ||
              this.currentPage === 0
            ) {
              const res = await fetchEmailThreads(emailAccount.id);
              if ((res || {}).payload) {
                restMessages.push(...res.payload.threads);
                this.emailThreadIds[emailAccount.id] = [
                  ...(this.emailThreadIds[emailAccount.id] || []),
                  ...res.payload.threads.map((thread) => thread.id),
                ];
                if (res.payload.nextPageToken) {
                  this.nextPageToken[emailAccount.id] =
                    res.payload.nextPageToken;
                } else {
                  delete this.nextPageToken[emailAccount.id];
                }
              }
            }
          } catch (error) {}
        }
        await sortThreads(restMessages);
      }
      this.currentPage++;
      // } catch (error) {}
    },
  },
  watch: {
    selectedEmailAccounts(newVal) {
      this.nextPageToken = {};
      this.threadMessages = [];
      this.activeIndex = -1;
      this.emailThreadIds = {};
      this.currentPage = 0;
      if (newVal.length) {
        if (this.viewMode === 'viewByAllInboxes') {
          this.fetchEmails();
        } else {
          this.getEmailThreads(newVal[0].id);
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep {
  .vs-input--icon {
    top: unset;
  }
}

.empty-thread {
  margin: 20px 0;
  filter: grayscale(100%);
  opacity: 0.5;
  flex-direction: column;
  position: relative;

  h5 {
    font-size: 1.5rem;
    font-weight: bolder;
  }
}

.load-more-btn {
  margin: 0 15px;
  margin-top: 15px;
  button {
    padding: 10px;
    width: 100%;
    outline: none;
    border: none;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;
  }
}

.thread-card {
  padding: 5px;
  margin-right: 5px;
  border-radius: 15px;
  cursor: pointer;

  h6 {
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &-content {
    p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      overflow: hidden;
      max-width: 100%;
    }
  }
}

.active {
  background-color: #f4f4f4;
}
</style>
