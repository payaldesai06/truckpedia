<template>
  <div class="flex justify-between p-2 bg-white">
    <div class="flex items-center">
      <vs-avatar size="large" src="" />
      <div v-if="isGroupOrIntercompanyOrLoad">
        <div>
          <p>{{ chatTitle }}</p>
          <span>{{ getMultipleUsersName }}</span>
        </div>
      </div>
      <p v-else>
        {{ computedUserName }} <br />
        <!-- <span class="font-bold">Online</span> -->
      </p>
    </div>

    <div class="flex items-center" v-show="isAddNewUserEnable">
      <!-- Add User Button -->
      <vs-icon
        class="cursor-pointer mr-3"
        icon="person_add"
        size="medium"
        @click="toggleOverlayPanel"
      />
      <!-- Overlay Panel -->
      <OverlayPanel
        ref="op"
        appendTo="body"
        style="width: 320px; z-index: 52010"
        :autoZIndex="false"
      >
        <Listbox
          v-model="selectedUsers"
          :options="getUsersList"
          :multiple="true"
          :filter="true"
          dataKey="id"
          optionLabel="fullName"
          listStyle="max-height:360px;width: 100%"
        >
          <template #option="slotProps">
            <div class="flex items-center">
              <vs-avatar
                style="min-width: 32px"
                color="primary"
                :text="getInitials(slotProps.option.fullName)"
              />
              <div>{{ slotProps.option.fullName }}</div>
            </div>
          </template>
        </Listbox>
        <div class="mt-3">
          <vs-button
            class="w-full"
            color="primary"
            type="border"
            :disabled="selectedUsers.length === 0"
            @click="addNewUsersToChat"
          >
            Add Users
          </vs-button>
        </div>
      </OverlayPanel>

      <!-- Ellipsis Icon (Three Dots) -->
      <div class="flex items-center justify-end pr-1">
        <div class="flex items-center justify-end pr-1">
          <vs-popup
            classContent="popup-example"
            title="Change Group Name"
            :active.sync="popupActive"
            width="300px"
          >
            <!-- Content for the popup -->
            <template>
              <div>
                <div class="w-full">
                  <vs-input class="w-full" v-model="updateGroupName" />
                  <div class="flex items-center justify-end mt-5">
                    <vs-button
                      color="primary"
                      type="filled"
                      class="mr-3"
                      @click="saveGroupName()"
                    >
                      Save
                    </vs-button>
                    <vs-button
                      :color="colorx"
                      type="border"
                      @click="cancelGroupName()"
                    >
                      Cancel
                    </vs-button>
                  </div>
                </div>
              </div>
            </template>
          </vs-popup>
          <template>
            <vs-dropdown>
              <vs-icon
                icon="more_vert"
                class="btn-drop w-max cursor-pointer"
                color="secondary"
                size="small"
                v-show="isNameUpdateAllowed"
              />
              <vs-dropdown-menu>
                <div
                  @click="openChangeChatNamePopup"
                  class="cursor-pointer px-5 py-3 text-center"
                  style="min-width: 200px"
                >
                  <span>Change Group Name</span>
                </div>
              </vs-dropdown-menu>
            </vs-dropdown>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Listbox from 'primevue/listbox';
import { mapGetters } from 'vuex';

import { getInitialFromFullName } from '@/helpers/helper';

export default {
  name: 'ChatWindowHeader',
  components: {
    Listbox,
  },
  props: {
    chatData: {
      type: Object | String,
      default: () => {},
    },
  },
  computed: {
    ...mapGetters('companyUserV2', ['getAllUsersList']),
    ...mapGetters('chat', ['chatList']),

    isGroupOrIntercompanyOrLoad() {
      return ['group', 'intercompany', 'load'].includes(this.chatData.chatType);
    },
    chatTitle() {
      switch (this.chatData.chatType) {
        case 'group':
          return this.computedName('group');
        case 'intercompany':
          return this.computedName('intercompany');
        case 'load':
          return `#${this.computedName('load')}`;
        default:
          return '';
      }
    },
    getMultipleUsersName() {
      if (
        this.chatData &&
        this.chatData.chatUsers &&
        this.chatData.chatUsers.length > 0
      ) {
        const names = this.chatData.chatUsers
          .map((user) => `${user.firstName} ${user.lastName}`)
          .filter((item) => item.trim() !== '');

        const firstThreeNames = names.slice(0, 5).join(', ');
        const remainingCount = names.length - 5;

        let finalString = firstThreeNames;
        if (remainingCount > 0) {
          return (finalString += ` +${remainingCount}`);
        }
        return finalString;
      }
    },
    computedName() {
      return (type) => {
        if (this.chatData) {
          if (type === 'intercompany' && this.chatData.intercompanyData) {
            return this.chatData.intercompanyData.otherCompanyName;
          }
          if (type === 'group' && this.chatData.groupData) {
            return this.chatData.groupData.name;
          }
          if (type === 'load' && this.chatData.loadData) {
            return this.chatData.loadData.number;
          }
        }
      };
    },
    computedUserName() {
      if (this.chatData && this.chatData.firstName) {
        return `${this.chatData.firstName} ${this.chatData.lastName}`;
      }
      return '';
    },
    getUsersList() {
      if (this.getAllUsersList) {
        return this.getAllUsersList.filter(
          (user) =>
            ((this.chatData || {}).chatUsers || []).findIndex(
              (u) => u.userId === user.id
            ) < 0
        );
      }
      return [];
    },
    isAddNewUserEnable() {
      return (
        (this.chatData &&
          (this.chatData.chatType === 'group' ||
            this.chatData.chatType === 'load')) ||
        this.chatData.chatType === 'intercompany'
      );
    },
    isNameUpdateAllowed() {
      return this.chatData && this.chatData.chatType === 'group';
    },
  },
  data() {
    return {
      selectedUsers: [],
      isDropdownVisible: false,
      popupActive: false, // Track the popup's open state
      updateGroupName: '',
      colorx: '#848484'
    };
  },
  created() {
    this.$nextTick(() => {
      this.$watch(
        () => this.$refs.op.visible,
        (newVal) => {
          if (!newVal) {
            this.selectedUsers = [];
          }
        }
      );
    });

    if (this.getAllUsersList.length === 0) {
      this.$store.dispatch('companyUserV2/fetchAllUsers');
    }
  },
  methods: {
    toggleOverlayPanel() {
      this.$refs.op.toggle(event);
    },
    addNewUsersToChat() {
      const payload = {
        chatUsers: this.selectedUsers.map((user) => {
          return {
            userId: user.id,
          };
        }),
      };

      this.$emit('addNewUsers', payload);
      this.$refs.op.hide();
    },
    getInitials(fullName) {
      return getInitialFromFullName(fullName);
    },
    // Method to toggle the popup
    openChangeChatNamePopup() {
      this.updateGroupName = this.chatTitle;
      this.popupActive = true;
    },
    saveGroupName() {
      const payload = {
        chatId: this.chatData.chatId,
        name: this.updateGroupName,
      };
      this.$store.dispatch('chat/changeGroupChatName', payload).then(() => {
        this.popupActive = false;
      });
    },
    cancelGroupName() {
      this.popupActive = false;
    },
  },
};
</script>

<style scoped></style>
