<template>
  <div>
    <div
      id="sidebar"
      :class="['side-bar', isCollapsed ? 'compress-width' : 'expand-width']"
    >
      <div class="resize-handle" id="resize-handle"></div>
      <div :class="[!isCollapsed ? 'm-2' : 'my-2']">
        <div class="text-center" v-if="isTruckpediaUser">
          <img
            v-show="isCollapsed"
            src="@assets/images/logo/truckpedia-intial-logo.svg"
            class="h-7 w-auto align-middle"
            alt="logo app"
          />
          <img
            v-show="!isCollapsed"
            src="@assets/images/logo/truckpedia-full-logo.svg"
            class="h-7 w-auto align-middle"
            alt="logo app"
          />
        </div>
        <div class="text-center" v-else>
          <img
            v-show="isCollapsed"
            src="@assets/images/logo/truckpedia-intial-logo.svg"
            class="h-7 w-auto align-middle"
            alt="logo app"
          />
          <!-- TODO: make this larger -->
          <img
            v-show="!isCollapsed"
            src="@assets/images/logo/truckpedia-tms-full-logo.svg"
            class="h-7 w-auto align-middle"
            alt="logo app"
          />
        </div>
      </div>
      <vs-divider class="my-2" />
      <div
        class="flex flex-col justify-between overflow-x-auto"
        :style="
          isCollapsed
            ? 'height: calc(100% - 55px)'
            : 'height: calc(100% - 115px)'
        "
      >
        <ul class="features-list">
          <li
            v-for="(item, index) in filteredNavMenuItems"
            :key="index"
            :class="[
              'list-item',
              'w-full',
              'h-auto',
              'items-start',
              item.children && item.children.length ? 'flex flex-col' : '',
            ]"
          >
            <div
              :class="[
                'list-item-wrapper ml-2',
                {
                  'text-primary':
                    item.url.length > 1
                      ? currentRoute.split('/').includes(item.url.slice(1))
                      : currentRoute === item.url,
                },
              ]"
              @click="
                item.children && item.children.length
                  ? toggleSubModuleMenu(index)
                  : redirectToPath(item.url)
              "
            >
              <vs-dropdown
                v-if="isCollapsed && item.children && item.children.length"
                class="cursor-pointer"
                vs-custom-content
                vs-trigger-click
              >
                <div class="list-icon mt-auto">
                  <feather-icon
                    v-if="item.icon"
                    :icon="item.icon"
                    :title="isCollapsed ? item.name : ''"
                  />
                  <img
                    v-else-if="item.customIcon"
                    class="height-24px w-auto align-middle custom-icon"
                    :src="customIcons[item.customIcon]"
                    :alt="item.name"
                  />
                </div>
                <vs-dropdown-menu v-if="item.children && item.children.length">
                  <div
                    class="m-2"
                    v-for="(subItem, subIndex) in item.children"
                    :key="subIndex"
                  >
                    <label
                      :class="[
                        'text-sm cursor-pointer',
                        {
                          'text-primary':
                            subItem.url.length > 1
                              ? currentRoute.includes(subItem.url)
                              : currentRoute === subItem.url,
                        },
                      ]"
                      @click="redirectToPath(subItem.url)"
                    >
                      {{ subItem.name }}
                    </label>
                  </div>
                </vs-dropdown-menu>
              </vs-dropdown>
              <div v-else class="list-item-wrapper">
                <div class="list-icon mt-auto">
                  <feather-icon
                    v-if="item.icon"
                    :icon="item.icon"
                    :title="isCollapsed ? item.name : ''"
                  />
                  <img
                    v-else-if="item.customIcon"
                    class="height-24px w-auto align-middle custom-icon"
                    :src="customIcons[item.customIcon]"
                    :alt="item.name"
                  />
                </div>
                <div class="list-label">
                  <label v-show="!isCollapsed" class="cursor-pointer">
                    {{ item.name }}
                  </label>
                </div>
              </div>
            </div>
            <ul v-if="isSubMenuOpen(index) && !isCollapsed" class="w-full">
              <li
                v-for="(subItem, subIndex) in item.children"
                :key="`sub-${subIndex}`"
                :class="['sub-menu', { 'pl-5': !isCollapsed }]"
              >
                <div
                  :class="[
                    'list-item-wrapper ml-2',
                    {
                      'text-primary':
                        subItem.url.length > 1
                          ? currentRoute.includes(subItem.url)
                          : currentRoute === subItem.url,
                    },
                  ]"
                  @click="redirectToPath(subItem.url)"
                >
                  <div class="list-icon mt-auto">
                    <feather-icon
                      v-if="subItem.icon"
                      :icon="subItem.icon"
                      :title="isCollapsed ? subItem.name : ''"
                    />
                    <img
                      v-else-if="subItem.customIcon"
                      class="height-24px w-auto align-middle custom-icon"
                      :src="customIcons[subItem.customIcon]"
                      :alt="subItem.name"
                    />
                  </div>
                  <div
                    :class="{ 'mt-2': subItem.name === 'CRM' }"
                    class="list-label"
                  >
                    <label v-show="!isCollapsed" class="cursor-pointer">
                      {{ subItem.name }}
                    </label>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li v-if="showOnEarlyAccess()">
            <vs-divider />

            <div :class="['mt-2', { 'pl-3': isCollapsed }]">
              <!-- <vs-button
                v-show="isCollapsed"
                size="small"
                color="primary"
                type="border"
                icon="add"
                @click="toggleMenuPopup(null)"
              /> -->
              <button
                v-show="
                  isCollapsed &&
                  !this.companyFeatureAccess.includes('basic') &&
                  !this.companyFeatureAccess.includes('noTms')
                "
                class="new-menu-btn small-menu-btn pl-1"
                size="small"
                color="primary"
                type="border"
                icon="add"
                @click="toggleMenuPopup(null)"
              >
                <vs-icon icon="add"></vs-icon>
              </button>
              <!-- <vs-button
                v-show="!isCollapsed"
                class="w-full"
                size="small"
                color="primary"
                type="border"
                icon="add"
                @click="toggleMenuPopup(null)"
              >
                NEW MENU
              </vs-button> -->
              <button
                v-show="
                  !isCollapsed &&
                  !this.companyFeatureAccess.includes('basic') &&
                  !this.companyFeatureAccess.includes('noTms')
                "
                class="new-menu-btn"
                size="small"
                color="primary"
                type="border"
                icon="add"
                @click="toggleMenuPopup(null)"
              >
                <vs-icon icon="add"></vs-icon> NEW MENU
              </button>
              <div v-if="menus && menus.length > 0">
                <div v-for="(menu, index) in menus" :key="index">
                  <div class="menu">
                    <div class="w-full flex items-center justify-between">
                      <div
                        :class="[
                          'flex items-center',
                          { 'bg-active': menu.isOpen && !isCollapsed },
                        ]"
                      >
                        <vs-icon
                          v-show="!isCollapsed"
                          :icon="
                            menu.isOpen ? 'arrow_drop_down' : 'arrow_right'
                          "
                          @click="toggleSubMenu(index)"
                          class="show-on-menu-hover expand-icon"
                        />
                        <!-- :color="stringToColor(menu.name)" use this for dynamic color  -->
                        <vs-avatar
                          v-show="!isCollapsed"
                          :class="[
                            'cursor-default avatar-size',
                            { 'm-1': isCollapsed },
                          ]"
                          :color="menu.color || defaultColor"
                          :icon="menu.avatarIcon"
                          :text="
                            menu.avatarIcon ? '' : getFirstLetter(menu.name)
                          "
                        />
                        <vs-dropdown
                          v-show="isCollapsed"
                          class="cursor-pointer"
                          vs-custom-content
                          vs-trigger-click
                        >
                          <vs-avatar
                            class="cursor-default avatar-size ml-5px"
                            :color="menu.color || defaultColor"
                            :icon="menu.avatarIcon"
                            :text="
                              menu.avatarIcon ? '' : getFirstLetter(menu.name)
                            "
                          />
                          <vs-dropdown-menu
                            v-if="menu.subMenus && menu.subMenus.length"
                          >
                            <div
                              class="m-2"
                              v-for="(subMenu, idx) in menu.subMenus"
                              :key="idx"
                            >
                              <label
                                :class="[
                                  'text-sm',
                                  currentRoute ===
                                  `/menu-view/${menu.id}/${subMenu.id}`
                                    ? 'text-primary'
                                    : 'cursor-pointer',
                                ]"
                                @click.stop="
                                  redirectToPath(
                                    `/menu-view/${menu.id}/${subMenu.id}`
                                  )
                                "
                              >
                                {{ subMenu.name }}
                              </label>
                            </div>
                          </vs-dropdown-menu>
                        </vs-dropdown>
                        <label
                          v-show="!isCollapsed"
                          class="ml-1 font-normal cursor-pointer"
                          style="font-size: 13px"
                          @click.stop="toggleSubMenu(index)"
                        >
                          {{ menu.name }}
                        </label>
                      </div>
                      <vs-dropdown
                        v-if="!isAnyDialogActive"
                        class="cursor-pointer show-on-menu-hover custom-sub-menu-dropdown"
                        vs-custom-content
                        vs-trigger-click
                      >
                        <vs-icon v-show="!isCollapsed" icon="more_horiz" />
                        <vs-dropdown-menu>
                          <div class="m-2">
                            <label
                              class="cursor-pointer hover:text-primary"
                              v-text="'Rename'"
                              @click="toggleRenameMenuPrompt('menu', menu)"
                            />
                          </div>
                          <div class="m-2">
                            <label
                              class="cursor-pointer hover:text-primary"
                              v-text="'Add SubMenu'"
                              @click="toggleSubMenuPopup(null, menu.id)"
                            />
                          </div>
                          <div class="m-2">
                            <label
                              class="cursor-pointer hover:text-primary"
                              v-text="'Share with'"
                              @click="toggleMenuSharePopup('menu', menu.id)"
                            />
                          </div>
                          <div class="m-2" v-if="isOwner(menu.ownerId)">
                            <label
                              class="cursor-pointer hover:text-primary"
                              v-text="'Delete'"
                              @click="
                                initDeletePrompt('menu', menu.id, menu.name)
                              "
                            />
                          </div>
                        </vs-dropdown-menu>
                      </vs-dropdown>
                    </div>
                    <div
                      class="w-full"
                      v-if="
                        menu.subMenus &&
                        menu.subMenus.length > 0 &&
                        menu.isOpen &&
                        !isCollapsed
                      "
                    >
                      <div
                        class="sub-menu pl-10"
                        v-for="(subMenu, i) in menu.subMenus"
                        :key="i"
                      >
                        <div class="flex items-center">
                          <vs-icon
                            icon="lens"
                            size="10px"
                            :color="subMenu.color || defaultColor"
                            v-if="
                              currentRoute ===
                              `/menu-view/${menu.id}/${subMenu.id}`
                            "
                          ></vs-icon>
                          <vs-icon
                            icon="trip_origin"
                            size="10px"
                            :color="subMenu.color || defaultColor"
                            v-else
                          ></vs-icon>

                          <label
                            v-show="!isCollapsed"
                            :class="[
                              'ml-4 text-sm',
                              currentRoute ===
                              `/menu-view/${menu.id}/${subMenu.id}`
                                ? 'text-primary'
                                : 'cursor-pointer',
                            ]"
                            @click.stop="
                              redirectToPath(
                                `/menu-view/${menu.id}/${subMenu.id}`
                              )
                            "
                          >
                            {{ subMenu.name }}
                          </label>
                        </div>
                        <vs-dropdown
                          v-if="!isAnyDialogActive"
                          class="cursor-pointer show-on-submenu-hover custom-sub-menu-dropdown"
                          vs-custom-content
                          vs-trigger-click
                        >
                          <vs-icon v-show="!isCollapsed" icon="more_horiz" />
                          <vs-dropdown-menu>
                            <div class="m-2">
                              <label
                                class="cursor-pointer hover:text-primary"
                                v-text="'Rename'"
                                @click="
                                  toggleRenameMenuPrompt('subMenu', {
                                    ...subMenu,
                                    menuId: menu.id,
                                  })
                                "
                              />
                            </div>
                            <div class="m-2">
                              <label
                                class="cursor-pointer hover:text-primary"
                                v-text="'Share with'"
                                @click="
                                  toggleMenuSharePopup('subMenu', subMenu.id)
                                "
                              />
                            </div>
                          </vs-dropdown-menu>
                        </vs-dropdown>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div
          :class="[
            'flex items-center sidebar-bottom',
            !isCollapsed ? 'justify-around' : 'justify-center',
          ]"
          v-if="!isCollapsed"
        >
          <div
            class="vx-row m-0 py-2 items-center cursor-pointer"
            @click="goToChat"
          >
            <feather-icon class="cursor-pointer" icon="MessageSquareIcon" />
            <div v-if="hasUnReadyMessage" class="new-message-dot"></div>
          </div>
          <div
            class="vx-row m-0 py-3 items-center w-fit cursor-pointer"
            @click="toggleAutomationPopup"
            v-if="!hideForSpecificCompanys() && !hideAutomation"
          >
            <img
              class="w-auto align-middle"
              v-show="!isCollapsed"
              height="20px"
              src="@assets/images/custom/automation-icon.svg"
            />
            <!-- <label
              v-show="!isCollapsed"
              class="ml-4 font-semibold cursor-pointer"
            >
              Automation
            </label> -->
          </div>
          <div
            class="vx-row m-0 py-3 items-center w-fit cursor-pointer"
            @click="redirectToPath('/account-setting')"
            v-show="!isCollapsed && !hideAccountSetting"
          >
            <feather-icon
              icon="SettingsIcon"
              class="cursor-pointer"
              title="Account Settings"
            />
            <!-- <label
              v-show="!isCollapsed"
              class="ml-4 font-semibold cursor-pointer"
            >
              Settings
            </label> -->
          </div>
          <div class="vx-row m-0 py-3 items-center" v-show="!isCollapsed">
            <profile-drop-down class="flex-shrink-0" />
            <!-- <label
              v-show="!isCollapsed"
              class="ml-3 font-semibold cursor-pointer"
            >
              Profile
            </label> -->
          </div>
          <div
            class="vx-row m-0 py-3 items-center w-fit cursor-pointer"
            @click="toggleSidebar"
          >
            <feather-icon class="cursor-pointer" :icon="sidebarToggleIcon" />
            <!-- <label
              v-show="!isCollapsed"
              class="ml-4 font-semibold cursor-pointer"
            >
              Back
            </label> -->
          </div>
        </div>

        <div class="p-3" v-else>
          <div
            class="vx-row m-0 py-2 items-center cursor-pointer"
            @click="goToChat"
            v-tooltip.right="tooltipOptions"
          >
            <feather-icon class="cursor-pointer" icon="MessageSquareIcon" />
            <div v-if="hasUnReadyMessage" class="new-message-dot"></div>
          </div>
          <div
            class="vx-row m-0 py-2 items-center w-fit cursor-pointer"
            @click="toggleAutomationPopup"
            v-if="!hideForSpecificCompanys() && !hideAutomation"
          >
            <img
              class="w-auto align-middle"
              height="20px"
              src="@assets/images/custom/automation-icon.svg"
            />
            <!-- <label
              v-show="!isCollapsed"
              class="ml-4 font-semibold cursor-pointer"
            >
              Automation
            </label> -->
          </div>
          <div
            v-show="!hideAccountSetting"
            class="vx-row m-0 py-2 items-center w-fit cursor-pointer"
            @click="redirectToPath('/account-setting')"
          >
            <feather-icon
              icon="SettingsIcon"
              class="cursor-pointer"
              title="Account Settings"
            />
            <!-- <label
              v-show="!isCollapsed"
              class="ml-4 font-semibold cursor-pointer"
            >
              Settings
            </label> -->
          </div>
          <div class="vx-row m-0 py-2 items-center">
            <profile-drop-down class="flex-shrink-0" />
            <!-- <label
              v-show="!isCollapsed"
              class="ml-3 font-semibold cursor-pointer"
            >
              Profile
            </label> -->
          </div>
          <div
            class="vx-row m-0 py-1 items-center w-fit cursor-pointer"
            @click="toggleSidebar"
          >
            <feather-icon class="cursor-pointer" :icon="sidebarToggleIcon" />
            <!-- <label
              v-show="!isCollapsed"
              class="ml-4 font-semibold cursor-pointer"
            >
              Back
            </label> -->
          </div>
        </div>
      </div>
      <automation-popup
        :openAutomationPopup="openAutomationPopup"
        @closeAutomationPopup="toggleAutomationPopup(false)"
        @reopenAutomationPopup="toggleAutomationPopup(true)"
      />

      <!-- Menu -->
      <Menu
        v-if="menuPopupActive"
        :isPromptActive="menuPopupActive"
        @closePrompt="toggleMenuPopup(false)"
        @submit="onMenuSubmit"
      />

      <!-- Menu Rename Prompt -->
      <MenuNamePrompt
        :title="menuNamePromptTitle"
        :isPromptActive="menuNamePrompt.isActive"
        :currentName="menuNamePrompt.name"
        :color="menuNamePrompt.color"
        :isAvatarVisible="menuNamePrompt.type === 'menu'"
        @onClose="closeRenameMenuPrompt"
        @onAccept="renameMenu"
      />

      <!-- SubMenu -->
      <SubMenu
        :isPromptActive="subMenuPopupActive"
        @closePrompt="toggleSubMenuPopup(false)"
        @submit="onSubMenuSubmit"
      />

      <!-- Menu Share -->
      <MenuShareDialog
        v-if="menuSharePopup.isActive"
        :isPromptActive="menuSharePopup.isActive"
        :sharedWith="menuSharePopup.sharedWith"
        :accessLevels="accessLevels"
        :allUsers="allUsers"
        :recordType="menuSharePopup.type"
        :isPrivate="menuSharePopup.isPrivate"
        @onClose="closeMenuSharePopup"
        @onSubmit="updateSharePermissions"
      />

      <!-- Delete Prompt -->
      <DeletePrompt
        v-if="deletePrompt.isActive"
        :isPromptActive="deletePrompt.isActive"
        :label="`Do you want to delete ${deletePrompt.selectedItemName}?`"
        @onAccept="deleteRecord"
        @onClose="closeDeletePrompt"
      />
    </div>
  </div>
</template>
<!-- eslint-disable multiline-ternary nonblock-statement-body-position -->
<script>
import Logo from '../Logo.vue';

// Libraries
import { mapGetters } from 'vuex';
import config from '@/config/constants';
import { isEqual, debounce } from 'lodash';
import { EventBus } from '../../../helpers/eventBus';
import constants from '../../../config/constants';
import { ChevronRightIcon } from 'vue-feather-icons';

export default {
  name: 'CustomSidebar',
  components: {
    Logo,
    ChevronRightIcon,
    Menu: () => import('@/components/menu/Menu.vue'),
    SubMenu: () => import('@/components/menu/SubMenu.vue'),
    AutomationPopup: () => import('./AutomationPopup.vue'),
    DeletePrompt: () => import('@/components/prompts/DeletePrompt'),
    MenuShareDialog: () => import('./components/MenuShareDialog.vue'),
    MenuNamePrompt: () => import('@/components/menu/MenuNamePrompt.vue'),
    ProfileDropDown: () => import('../navbar/components/ProfileDropDown.vue'),
  },
  computed: {
    ...mapGetters('auth', [
      'user',
      'isTruckpediaUser',
      'companyFeatureAccess',
      'isUserBrokerOrShipper',
    ]),
    ...mapGetters('menuV2', ['getAllMenu', 'getAllSubMenu']),
    ...mapGetters('companyUserV2', ['getAllWebUsersList']),
    ...mapGetters('chat', ['chatList']),

    filteredNavMenuItems() {
      let navItems = [...this.navMenuItems];
      const restrictedBasicRoutes = [
        '/invoices',
        '/planning',
        '/reports',
        '/maintenance-v2',
      ];
      if (this.companyFeatureAccess.includes('basic')) {
        navItems = navItems.filter(
          (d) => !restrictedBasicRoutes.includes(d.url)
        );
      }
      if (this.companyFeatureAccess.includes('noTms')) {
        navItems = navItems.filter(
          (i) =>
            ![
              'home',
              'dispatch',
              'calendar',
              'planning',
              'invoices',
              'report',
              'maintenance',
              'driver',
              'truck',
              'trailer',
            ].includes(i.slug)
        );
      }
      if (this.user && this.user.admin_company_details) {
        for (const item of navItems) {
          if (item.slug == 'marketing') {
            const emailCampaign =
              this.companyFeatureAccess.includes('marketing');
            const crm = this.companyFeatureAccess.includes('crm');
            if (emailCampaign && !crm) {
              item.children = item.children.filter((c) => c.name != 'CRM');
            }
            /* CRM users must be able to use email campaign.
            else if (!emailCampaign && crm) {
              item.children = item.children.filter((c) => c.name == 'CRM');
            }
            */
          }
        }
        const hideAllTabsExpect = [
          'home',
          'calendar',
          'driver',
          'truck',
          'trailer',
          'safety',
        ];
        if (
          config.onlyUseSafetyTab.some(
            (item) =>
              item === this.user.admin_company_details.admin_company_detail_id
          )
        ) {
          navItems = navItems.filter((item) =>
            hideAllTabsExpect.includes(item.slug)
          );
        }
      }
      if (this.isUserBrokerOrShipper) {
        navItems = navItems.filter((item) => item.slug !== 'home');
      }

      return navItems.filter((item) => this.showOnCheckEarlyAccess(item));
    },
    currentRoute() {
      return this.$route.path;
    },
    sidebarToggleIcon() {
      return this.isCollapsed ? 'ArrowRightCircleIcon' : 'ArrowLeftCircleIcon';
    },
    menus() {
      return this.getAllMenu;
    },
    allUsers() {
      const userList = this.getAllWebUsersList;

      return userList.map((user) => {
        if (this.menuSharePopup.sharedWith.length) {
          const sharedUser = this.menuSharePopup.sharedWith.find(
            (shared) => shared.id === user.id
          );

          if (sharedUser) return sharedUser;
        }
        return {
          id: user.id,
          fullName: user.fullName,
          accessLevel: this.accessLevels[0].value,
        };
      });
    },
    accessLevels() {
      return config.menuAccessLevels;
    },
    menuNamePromptTitle() {
      return this.menuNamePrompt.type === 'menu'
        ? 'Rename Menu'
        : 'Rename Submenu';
    },
    isAnyDialogActive() {
      return (
        this.menuPopupActive ||
        this.menuNamePrompt.isActive ||
        this.subMenuPopupActive ||
        this.menuSharePopup.isActive
      );
    },
    currentUserID() {
      return this.user && this.user.user_id ? this.user.user_id : null;
    },
    hasUnReadyMessage() {
      let isUnRead = false;
      for (let chat of this.chatList) {
        // ignore opened chat
        if (!this.lastSeenChatIds.includes(chat.chatId)) {
          if (chat.lastMessageUtc && chat.lastSeenUtc && !chat.isCurrentUser) {
            const lastMessageLocal = this.$dayjs
              .utc(chat.lastMessageUtc)
              .local();
            const lastSeenLocal = this.$dayjs.utc(chat.lastSeenUtc).local();
            if (lastMessageLocal.isAfter(lastSeenLocal)) {
              isUnRead = true;
            }
          }
          if (chat.lastMessageUtc && !chat.lastSeenUtc) {
            isUnRead = true;
          }
        }
      }
      return isUnRead;
    },
    hideAutomation() {
      return (
        this.isTruckpediaUser ||
        (this.user && this.user.role === 'maintenance') ||
        this.companyFeatureAccess.includes('basic') ||
        this.companyFeatureAccess.includes('noTms')
      );
    },
    hideAccountSetting() {
      return this.user && this.user.role === 'maintenance';
    },
  },
  props: {
    navMenuItems: {
      required: true,
      type: Array,
    },
  },
  data: () => ({
    isProduction: process.env.NODE_ENV === 'production',
    isCollapsed: true,
    openAutomationPopup: false,
    customIcons: {
      trailer: require('@assets/images/custom/custom-trailer.svg'),
      safety: require('@assets/images/custom/safety.svg'),
      customer: require('@assets/images/custom/handshake.svg'),
      marketingIcon: require('@assets/images/custom/marketing.svg'),
      chartInfoGraphicIcon: require('@assets/images/custom/chartInfoGraphicIcon.svg'),
      ratesListIcon: require('@assets/images/custom/rates.svg'),
      carriersIcon: require('@assets/images/custom/carriers.svg'),
    },
    menuPopupActive: false,
    menuNamePrompt: {
      isActive: false,
      id: null,
      name: '',
      color: '',
    },
    subMenuPopupActive: false,
    selectedMenuId: null,
    menuSharePopup: {
      isActive: false,
      type: null,
      sharedWith: [],
      isPrivate: false,
    },
    defaultColor: '#c3c3c3', // default light gray color for menu and submenu
    deletePrompt: {
      type: null,
      isActive: false,
      selectedItemID: null,
      selectedItemName: null,
    },
    tooltipOptions: {
      content: '',
      container: false,
      show: false,
      classes: 'chat-tooltip',
    },
    lastSeenChatIds: [],
    openSubMenus: {},
  }),
  created() {
    const dayjsUtc = require('dayjs/plugin/utc');
    this.$dayjs.extend(dayjsUtc);

    this.init();
    this.$store.dispatch('factoring-company/getAllFactoringCompanies');
  },
  mounted() {
    this.resizeColumWidth();
    this.$nextTick(() => {
      this.getChats(true);
    });
    EventBus.$on(
      constants.socketIoEvents.newMessages,
      this.handleNewChatMessage
    );
    EventBus.$on('lastSeenChatId', this.handleLastSeenChat);
  },
  methods: {
    goToChat() {
      this.getChats();
      this.redirectToPath('/chat');
    },
    resizeColumWidth() {
      const resizeData = {
        tracking: false,
        startCursorScreenX: null,
        maxWidth: 500,
        minWidth: 70,
      };

      document
        .getElementById('resize-handle')
        .addEventListener('mousedown', (event) => {
          event.preventDefault();
          event.stopPropagation();
          resizeData.startWidth =
            document.getElementById('sidebar').offsetWidth;
          resizeData.startCursorScreenX = event.screenX;
          resizeData.tracking = true;
        });

      document.addEventListener('mouseup', (event) => {
        if (resizeData.tracking) {
          const cursorScreenXDelta =
            event.screenX - resizeData.startCursorScreenX;
          let newWidth = Math.min(
            resizeData.startWidth + cursorScreenXDelta,
            resizeData.maxWidth
          );
          newWidth = Math.max(resizeData.minWidth, newWidth);
          const screenWidth = document.body.clientWidth;
          document.getElementById('sidebar').style.width = `${newWidth}px`;
          document.getElementById('content-wrapper').style.width = `${
            screenWidth - newWidth
          }px`;
          this.$emit('sidebarResize', newWidth);
          if (newWidth > 135) {
            this.isCollapsed = false;
          } else {
            this.isCollapsed = true;
          }
        }
      });

      document.addEventListener('mouseup', (event) => {
        if (resizeData.tracking) resizeData.tracking = false;
      });
    },
    stringToColor(string, saturation = 100, lightness = 40) {
      let hash = 0;
      for (let i = 0; i < string.length; i++) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash;
      }
      return `hsl(${hash % 360}, ${saturation}%, ${lightness}%)`;
    },
    showOnEarlyAccess() {
      if (this.user.role !== 'super_admin') {
        return true;
      }
      return false;
    },
    hideForSpecificCompanys() {
      if (
        this.user.role === 'super_admin' ||
        this.user.admin_company_details.admin_company_detail_id ===
          config.hidefunctionalitiesForSpecificCompanyIds
      ) {
        return true;
      }
      return false;
    },
    showOnCheckEarlyAccess(item) {
      if (this.user.role !== 'super_admin') {
        if (
          this.user.admin_company_details.admin_company_detail_id ===
          config.hidefunctionalitiesForSpecificCompanyIds
        ) {
          if (item.slug === 'invoices' || item.slug === 'customer') {
            return true;
          }
          return false;
        }
        if (item.slug === 'safety') {
          return (
            config.showSafetyTab.includes(this.user.admin_company_detail_id) ||
            this.companyFeatureAccess.includes('safety')
          );
        }
        if (item.slug === 'quotes' || item.slug === 'rates') {
          return this.companyFeatureAccess.includes('marketplace');
        }
        if (item.slug === 'marketing') {
          return (
            this.companyFeatureAccess.includes('marketing') ||
            this.companyFeatureAccess.includes('crm')
          );
        }
        if (item.slug === 'carrier') {
          return this.companyFeatureAccess.includes('brokerModeForCarrier');
        }
      }
      return true;
    },
    redirectToPath(path) {
      if (path !== this.currentRoute) this.$router.push(path).catch(() => true);
    },
    toggleSidebar() {
      document.getElementById('sidebar').removeAttribute('style');
      document.getElementById('content-wrapper').removeAttribute('style');
      // this.isCollapsed
      //   ? setTimeout(() => {
      //     this.isCollapsed = !this.isCollapsed
      //   }, 100)
      //   : (this.isCollapsed = !this.isCollapsed)
      this.isCollapsed = !this.isCollapsed;
      this.$emit('collapseSidebar');
    },
    toggleAutomationPopup(val = null) {
      this.openAutomationPopup = val === null ? !this.openAutomationPopup : val;
    },
    toggleSubModuleMenu(index) {
      this.$set(this.openSubMenus, index, !this.openSubMenus[index]);
    },
    isSubMenuOpen(index) {
      return !!this.openSubMenus[index];
    },
    getErrorMsg(error) {
      return error &&
        error.response &&
        error.response.data &&
        error.response.data.message
        ? error.response.data.message
        : 'Something went wrong';
    },
    async fetchMenus() {
      await this.$store.dispatch('menuV2/fetchMenuList');
    },
    async init() {
      try {
        this.$vs.loading();

        await this.fetchMenus();
        await this.$store.dispatch('companyUserV2/fetchAllWebUsers');
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: this.getErrorMsg(error),
        });
      } finally {
        this.$vs.loading.close();
      }
    },
    toggleMenuPopup(val = null) {
      this.menuPopupActive = val === null ? !this.menuPopupActive : val;
    },
    getFirstLetter(name) {
      return name.trim().charAt(0);
    },
    toggleSubMenu(index) {
      const menus = this.menus.map((menu, i) => {
        return {
          ...menu,
          isOpen: i === index ? !menu.isOpen : false,
        };
      });

      this.$store.commit('menuV2/setAllMenu', menus);
    },
    toggleRenameMenuPrompt(type = 'menu', menu = null) {
      this.menuNamePrompt = {
        ...menu,
        type,
        isActive: true,
      };
    },
    closeRenameMenuPrompt() {
      this.menuNamePrompt = {
        isActive: false,
        id: null,
        menuId: null,
        name: '',
        color: '',
      };
    },
    async renameMenu({ name, color }) {
      try {
        const { id, type, menuId, color: oldColor } = this.menuNamePrompt;
        const payload = {
          id,
          name,
          color: oldColor !== color ? color : oldColor,
        };
        this.closeRenameMenuPrompt();

        if (type === 'menu') {
          await this.$store.dispatch('menuV2/updateMenu', payload);
          await this.$store.dispatch('menuV2/fetchMenuList');
        } else {
          await this.$store.dispatch('menuV2/updateSubMenu', payload);
          await this.$store.dispatch('menuV2/fetchSubMenuList', menuId);
          const updatedSubmenu = this.getAllSubMenu.find(
            (submenu) => submenu.id === id
          );

          if (updatedSubmenu) {
            const menus = this.menus.map((menu) => {
              return {
                ...menu,
                subMenus: menu.subMenus.map((submenu) => {
                  if (submenu.id === id) {
                    return updatedSubmenu;
                  }
                  return submenu;
                }),
              };
            });

            this.$store.commit('menuV2/setAllMenu', menus);
          }
        }
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: this.getErrorMsg(error),
        });
      }
    },
    async onMenuSubmit(menu) {
      try {
        this.toggleMenuPopup(false);

        const payload = {
          name: menu.name,
          sharedPermissions: menu.sharedPermissions || [],
          color: menu.color,
          submenus: [
            {
              name: 'whiteboard',
              predefinedData: '',
              views: menu.views.map((view) => {
                return {
                  name: view,
                  type: view.toLowerCase(),
                };
              }),
            },
          ],
        };
        await this.$store.dispatch('menuV2/createMenu', payload);
        await this.fetchMenus();

        this.$vs.notify({
          time: 8000,
          color: 'success',
          text: 'Menu created successfully',
        });
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: this.getErrorMsg(error),
        });
      }
    },
    toggleSubMenuPopup(val = null, menuId = null) {
      this.selectedMenuId = menuId;
      this.subMenuPopupActive = val === null ? !this.subMenuPopupActive : val;
    },
    async onSubMenuSubmit(subMenu) {
      try {
        const payload = {
          menuId: this.selectedMenuId,
          ...subMenu,
        };
        this.toggleSubMenuPopup(false);

        await this.$store.dispatch('menuV2/createSubMenu', payload);
        await this.fetchMenus();
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: this.getErrorMsg(error),
        });
      }
    },
    async fetchMenuSharedPermissions() {
      try {
        const {
          data: {
            payload: { sharedPermissions },
          },
        } = await this.$store.dispatch(
          'menuV2/fetchMenuSharedPermissions',
          this.selectedMenuId
        );

        if (sharedPermissions && sharedPermissions.length) {
          this.menuSharePopup.sharedWith = sharedPermissions.map(
            (permission) => {
              const user = this.allUsers.find(
                (user) => user.id === permission.userId
              );

              return {
                ...user,
                accessLevel: permission.accessLevel,
              };
            }
          );
        }
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: this.getErrorMsg(error),
        });
      }
    },
    async fetchSubMenuSharedPermissions() {
      try {
        const {
          data: {
            payload: { sharedPermissions, isPrivate },
          },
        } = await this.$store.dispatch(
          'menuV2/fetchSubMenuSharedPermissions',
          this.selectedMenuId
        );

        this.menuSharePopup.isPrivate = isPrivate;

        if (sharedPermissions && sharedPermissions.length) {
          this.menuSharePopup.sharedWith = sharedPermissions.map(
            (permission) => {
              const user = this.allUsers.find(
                (user) => user.id === permission.userId
              );

              return {
                ...user,
                accessLevel: permission.accessLevel,
              };
            }
          );
        }
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: this.getErrorMsg(error),
        });
      }
    },
    async toggleMenuSharePopup(type = 'menu', menuId = null) {
      this.selectedMenuId = menuId;
      if (type === 'menu') await this.fetchMenuSharedPermissions();
      else if (type === 'subMenu') await this.fetchSubMenuSharedPermissions();

      this.menuSharePopup = {
        ...this.menuSharePopup,
        isActive: !this.menuSharePopup.isActive,
        type,
      };
    },
    closeMenuSharePopup() {
      this.selectedMenuId = null;
      this.menuSharePopup = {
        isActive: false,
        type: 'menu',
        sharedWith: [],
        isPrivate: false,
      };
    },
    async updateSharePermissions({ isPrivate, sharedPermissions }) {
      try {
        const { type, sharedWith } = this.menuSharePopup;

        if (
          isEqual(sharedWith, sharedPermissions) &&
          isPrivate === this.menuSharePopup.isPrivate
        ) {
          this.closeMenuSharePopup();
          return;
        }

        const payload = {
          id: this.selectedMenuId,
          sharedPermissions: sharedPermissions.map((user) => ({
            userId: user.id,
            accessLevel: user.accessLevel,
          })),
        };

        if (type === 'menu')
          await this.$store.dispatch(
            'menuV2/changeMenuSharedPermissions',
            payload
          );
        else {
          payload.isPrivate = isPrivate;

          await this.$store.dispatch(
            'menuV2/updateSubMenuPermissions',
            payload
          );
        }

        this.closeMenuSharePopup();
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: this.getErrorMsg(error),
        });
      }
    },
    isOwner(id) {
      return id === this.currentUserID;
    },
    async deleteMenu(menuId) {
      try {
        await this.$store.dispatch('menuV2/deleteMenu', menuId);
        this.$vs.notify({
          time: 4000,
          color: 'success',
          text: 'Menu deleted successfully',
        });

        if (this.$route.name === 'MenuView') {
          const currentMenuIndex = this.menus.findIndex(
            (menu) => menu.id === menuId
          );

          if (
            currentMenuIndex !== -1 &&
            (this.menus[currentMenuIndex + 1] ||
              this.menus[currentMenuIndex - 1])
          ) {
            const menu =
              this.menus[currentMenuIndex + 1] ||
              this.menus[currentMenuIndex - 1];
            const nextMenuID = menu.id;
            const nextSubMenuID = menu.subMenus[0].id;

            this.redirectToPath(`/menu-view/${nextMenuID}/${nextSubMenuID}`);
          } else this.$router.push({ name: 'home' });
        }
        await this.fetchMenus();
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: this.getErrorMsg(error),
        });
      }
    },
    initDeletePrompt(type, id, name) {
      this.deletePrompt.type = type;
      this.deletePrompt.isActive = true;
      this.deletePrompt.selectedItemID = id;
      this.deletePrompt.selectedItemName = name;
    },
    async deleteRecord() {
      if (this.deletePrompt.type === 'menu')
        await this.deleteMenu(this.deletePrompt.selectedItemID);

      this.closeDeletePrompt();
    },
    closeDeletePrompt() {
      this.deletePrompt.type = null;
      this.deletePrompt.isActive = false;
      this.deletePrompt.selectedItemID = null;
      this.deletePrompt.selectedItemName = null;
    },
    clearPopup: debounce(function () {
      this.tooltipOptions.content = '';
      this.tooltipOptions.show = false;
    }, 8000),
    async handleNewChatMessage(chat) {
      let message = chat.messages[0];
      let openChatId = sessionStorage.getItem('openChatId') || '';

      // mark unread on new message
      if (openChatId.toString() !== chat.chat.chatId.toString()) {
        this.lastSeenChatIds = this.lastSeenChatIds.filter(
          (e) => e !== chat.chat.chatId
        );
      }

      if (
        this.currentUserID.toString() === message.senderUserId.toString() ||
        openChatId.toString() === chat.chat.chatId.toString()
      ) {
        return;
      }
      // TOOD: Show multiple poopup for new message without overlapping
      let senderFullName = `${message.senderFirstName} ${message.senderLastName}`;
      if (message.textMessage) {
        this.tooltipOptions.content = `${senderFullName}: ${message.textMessage}`;
      } else {
        this.tooltipOptions.content = `${senderFullName}: Sent an attachment`;
      }
      this.tooltipOptions.show = true;

      // clear popup after 8 sec
      this.clearPopup();

      if (this.isChatAlreadyExists(chat.chat.chatId)) {
        // update existing chat using socket.io data
        this.$store.commit('chat/UPDATE_CHAT_LAST_MSG_DATE_TIME', {
          chatId: chat.chat.chatId,
          lastMessageUtc: chat.messages[0].createdAt,
        });
      } else {
        // For new chat call the getChats api again
        await this.getChats();
        this.$forceUpdate();
      }
    },
    async getChats(checkForIntercompanyChatParams = false) {
      await this.$store.dispatch('chat/getChats');
      if (checkForIntercompanyChatParams) {
        await this.setDefaultIntercompanyChat();
      }
    },
    handleLastSeenChat(chatId) {
      this.lastSeenChatIds = [...new Set([...this.lastSeenChatIds, chatId])];
    },
    isChatAlreadyExists(chatId) {
      return this.chatList.filter((chat) => chat.chatId === chatId).length;
    },
    intercompanyChatById(companyId) {
      return this.chatList.find(
        (chat) =>
          chat.chatType === 'intercompany' &&
          chat.intercompanyData.otherCompanyId == companyId
      );
    },
    async setDefaultIntercompanyChat() {
      try {
        const { otherCompanyId, type } = this.$route.query;
        if (otherCompanyId && type === 'intercompany') {
          const chat = this.intercompanyChatById(otherCompanyId);

          if (chat) {
            EventBus.$emit('openIntercompanyChat', chat);
          } else {
            // Create new chat
            const payload = {
              needChatMetaData: true,
              page: 1,
              pageSize: 50,
              queryChatType: 'intercompany',
              otherCompanyId: Number(otherCompanyId),
            };

            const messages = await this.$store.dispatch(
              'chat/getMessages',
              payload
            );
            if (messages.chat) {
              const foundChat = this.chatList.find(
                (chat) => chat.id === messages.chat.chatId
              );
              if (!foundChat) {
                this.$store.commit('chat/ADD_TO_CHAT_LIST', messages.chat);
              }
            }
            const chat = this.intercompanyChatById(otherCompanyId);
            if (chat) {
              EventBus.$emit('openIntercompanyChat', chat);
            }
          }

          // clear query params
          this.$router.replace({ query: {} });
        }
      } catch (error) {
        console.log(error, 'error');
      }
    },
    hidePopups() {
      this.toggleMenuPopup(false);
      this.closeMenuSharePopup();
      this.toggleSubMenuPopup(false);
      this.closeDeletePrompt();
      this.closeRenameMenuPrompt();
    }
  },
  beforeDestroy() {
    EventBus.$off(constants.socketIoEvents.newMessages);
    EventBus.$off('lastSeenChatId');
  },
  watch: {
    $route: {
      handler() {
        this.hidePopups();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.side-bar {
  height: 100vh;
  background: rgb(255, 255, 255);
  position: fixed;
  transition: all 0.4s ease;
  top: 0;
  border-right: 1px solid #0002;
  /* box-shadow: 0 4px 20px 0 rgb(0 0 0 / 5%); */

  .list-item,
  .list-item-wrapper {
    display: flex;
    align-items: center;
    height: 38px;
    cursor: pointer;
    flex-shrink: 0;

    .list-icon {
      transition: transform 0.2s ease-in-out;
      width: 40px;
      height: 32px;
      padding: 2px 7px;
      flex-shrink: 0;
      position: relative;
    }
    .list-label {
      font-size: 13px;
      font-weight: 400;
      line-height: 1;
    }
    .text-primary {
      .list-label {
        font-weight: 600;
      }
    }
  }
}

//  Utilities Classes
.w-fit {
  width: fit-content;
}

.height-24px {
  height: 24px;
}

.text-primary {
  .custom-icon {
    filter: invert(28%) sepia(73%) saturate(1570%) hue-rotate(187deg)
      brightness(101%) contrast(96%);
  }
}
.custom-icon {
  filter: invert(38%) sepia(0%) saturate(3%) hue-rotate(170deg) brightness(94%)
    contrast(81%);
}
.new-menu-btn {
  background: #e4e4e4;
  color: #7c828d;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 500;
  border-radius: 5px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  width: 95%;
  cursor: pointer;
  border: none;
  grid-gap: 0.25rem;
  gap: 0.25rem;
  &:hover {
    background: #e4e4e4;
  }
}
.avatar-size {
  width: 20px;
  height: 20px;
  border-radius: 25%;
  font-size: 0.8em;
  font-weight: 500;
  margin-top: 5px;
  margin-left: 14px;
}
.menu {
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  margin-top: 5px;
  position: relative;
  cursor: pointer;
  label {
    user-select: none;
  }
  /* &:hover{
    background: rgba(233,235,240);
  } */
}
.sub-menu {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 25px;
  /* &:hover{
    background: rgba(233,235,240);
  } */
  label {
    font-size: 12px !important;
    font-weight: 400;
    line-height: 32px;
  }
}

.show-on-menu-hover,
.show-on-submenu-hover {
  display: none;
}
.expand-icon {
  position: absolute;
}
.menu:hover .show-on-menu-hover,
.sub-menu:hover .show-on-submenu-hover {
  display: block;
}
.bg-active {
  background: rgba(233, 235, 240);
  width: 100%;
}
.custom-sub-menu-dropdown {
  position: absolute;
  right: 18px;
}

.small-menu-btn {
  width: 20px;
}

.sidebar-bottom {
  /* border-top: 1px solid #e9ebf0; */
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #fff;
}

/* .features-list{
  overflow: auto;
    padding-bottom: 20px;
} */

.resize-handle {
  position: absolute;
  box-sizing: border-box;
  cursor: col-resize !important;
  -webkit-touch-callout: none;
  user-select: none;
  height: 100%;
  width: 5px;
  transition: background 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.1s;
  right: 0;
  opacity: 0.2;
  z-index: 1;
  background: transparent;
  &:hover,
  &:active {
    border-color: #7b68ee;
    border-style: solid;
  }
}

.expand-width {
  width: 250px;
}

.compress-width {
  width: 70px;
}

.ml-5px {
  margin: 0 0 0 5px !important;
}
.h-7 {
  height: 2rem !important;
}
.new-message-dot {
  width: 10px;
  height: 10px;
  background-color: red; /* Or any color you prefer for the dot */
  border-radius: 50%;
  display: inline-block;
  margin-left: 5px;
}
</style>
<style lang="scss">
.chat-tooltip {
  position: relative;
  z-index: 99;
  width: 280px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  border: 0 none;
  border-radius: 6px;
  margin-left: 50px;
  background: #ffffff;
  color: #495057;
  .tooltip-inner {
    padding: 8px;
    padding-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  }
  .tooltip-arrow {
    width: 12px;
    height: 40px;
    position: absolute;
    transform: translateX(-85%);
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      width: 12px;
      height: 12px;
      background: white;
      transform: translateX(8%) translateY(85%) rotate(45deg);
      left: 30%;
      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
