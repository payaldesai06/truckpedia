<template>
  <vs-popup
    class="chat-popup"
    :active.sync="localToggleChatModal"
    title="Add Chat"
  >
    <template>
      <div>
        <div class="w-full">
          <vs-tabs alignment="fixed">
            <vs-tab label="Individual" @click="setActiveTab('individual')">
              <div class="py-3">
                <label for="selectUsers"
                  >Select User <field-required-sign
                /></label>
                <v-select
                  v-model="selectedUser"
                  :options="userList"
                  :clearable="true"
                  :appendToBody="true"
                  label="fullName"
                  class="w-full"
                />
              </div>
            </vs-tab>
            <vs-tab label="Group" @click="setActiveTab('group')">
              <div class="py-3">
                <label for="groupName"
                  >Group Name <field-required-sign
                /></label>
                <vs-input v-model="groupName" class="w-full" />
              </div>
              <div class="py-3">
                <label for="selectUsers"
                  >Add Users <field-required-sign
                /></label>
                <v-select
                  v-model="selectedUsersForGroup"
                  :options="userList"
                  :clearable="true"
                  :appendToBody="true"
                  label="fullName"
                  multiple
                  class="w-full"
                />
              </div>
            </vs-tab>
            <vs-tab label="Inter-company" @click="setActiveTab('intercompany')">
              <div class="py-3">
                <label for="groupName">Company <field-required-sign /></label>
                <v-select
                  v-model="selectedCustomer"
                  :options="getCustomerList"
                  :appendToBody="true"
                  label="company_name"
                  class="w-full"
                />
              </div>
            </vs-tab>
          </vs-tabs>
        </div>
      </div>
    </template>
    <div class="flex items-center justify-end gap-4 mt-5">
      <vs-button type="border" @click="closePopup"> Cancel </vs-button>
      <vs-button type="filled" @click="handleSubmit" :disabled="disabledSubmit">
        Add
      </vs-button>
    </div>
  </vs-popup>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    toggleChatModal: {
      type: Boolean,
      default: () => false,
    },
    customersList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activeTab: 'individual',
      selectedUser: null,
      selectedUsersForGroup: [],
      groupName: '',
      selectedCustomer: null,
    };
  },
  computed: {
    ...mapGetters('companyUserV2', ['getAllUsersList']),
    ...mapGetters('chat', ['chatList']),
    ...mapGetters('auth', ['user']),
    disabledSubmit() {
      if (this.activeTab == 'individual') {
        return !this.selectedUser;
      } else if (this.activeTab == 'group') {
        return !this.groupName || !this.selectedUsersForGroup.length;
      } else if (this.activeTab == 'intercompany') {
        return !this.selectedCustomer;
      }
    },
    getCustomerList() {
      if (this.chatList && this.chatList.length) {
        const intercompanyChats = this.chatList.filter(
          (item) => item.chatType === 'intercompany'
        );
        if (intercompanyChats && intercompanyChats.length) {
          const excludedCompanyIds = intercompanyChats.map(
            (chat) => chat.intercompanyData.otherCompanyId
          );

          // Filter customers based on syncedCompanyId and excludedCompanyIds
          return this.customersList.filter(
            (item) =>
              item.syncedCompanyId &&
              !excludedCompanyIds.includes(item.syncedCompanyId)
          );
        }
      }

      return this.customersList.filter((item) => item.syncedCompanyId);
    },
    individualChatUsers() {
      let filtered = (this.chatList || []).filter(
        (item) => item.chatType === 'oneOnOne'
      );
      return filtered.map((ct) => {
        return {
          ...ct,
          chatUser: ct.chatUsers
            ? ct.chatUsers.filter((cu) => cu.userId != this.user.user_id)[0]
            : ct.chatUser
            ? ct.chatUser
            : {},
        };
      });
    },
    userList() {
      if (this.activeTab == 'individual') {
        const existingChatUserIds = [
          ...new Set(
            this.individualChatUsers.map((item) => item.chatUser.userId).flat()
          ),
        ];
        return this.getAllUsersList.filter(
          (item) =>
            item.id != this.user.user_id &&
            !existingChatUserIds.includes(item.id)
        );
      } else {
        return this.getAllUsersList;
      }
    },
    localToggleChatModal: {
      get() {
        return this.toggleChatModal;
      },
      set(val) {
        if (!val) {
          this.closePopup();
        }
      },
    },
  },
  methods: {
    closePopup() {
      this.$emit('closeChatModal');
      this.resetForm();
    },
    resetForm() {
      this.activeTab = 'individual';
      this.selectedUser = null;
      this.selectedUsersForGroup = [];
      this.groupName = '';
      this.selectedCustomer = null;
    },
    async handleSubmit() {
      if (this.activeTab == 'individual') {
        this.$emit('onUserSelected', this.selectedUser);
        this.selectedUser = null;
      } else if (this.activeTab == 'group') {
        const groupChatUsers = this.selectedUsersForGroup.map((item) => {
          return { userId: item.id };
        });

        const payload = {
          name: this.groupName,
          chatUsers: groupChatUsers,
        };
        await this.$store
          .dispatch('chat/createGroupChat', payload)
          .then(() => {
            this.$emit('refreshChats', payload);
          })
          .catch((error) => {
            this.$vs.notify({
              color: 'danger',
              title: 'Error',
              text: error.response.data.message,
            });
          })
          .finally(() => {
            this.$vs.loading.close();
          });
      } else if (this.activeTab == 'intercompany') {
        this.$emit(
          'getMessage',
          this.selectedCustomer.syncedCompanyId,
          {
            chatType: 'intercompany',
            intercompanyData: this.selectedCustomer,
          },
          true
        );
      }
      this.closePopup();
    },
    setActiveTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style lang="scss">
.chat-popup {
  .vs-popup {
    max-width: 450px;
  }
}
body ul[role='listbox'] {
  z-index: 100000 !important;
}
</style>
