<template>
  <div>
    <div class="relative">
      <div class="vx-navbar-wrapper navbar-full p-0">
        <vs-navbar class="navbar-custom navbar-skelton" :color="navbarColor">
          <div class="flex justify-between w-full items-center">
            <div class="flex items-center">
              <!-- Left Side -->
              <router-link
                tag="div"
                to="/"
                class="vx-logo cursor-pointer flex items-center"
              >
                <!--          <logo class="w-10 mr-4 fill-current text-primary"/>-->
                <!--          <span class="vx-logo-text text-primary">Vuexy</span>-->
                <!--          <h2 class="text-primary brand-text mb-0">Vuexy</h2>-->

                <logo class="w-10 mr-2" />
                <img
                  :src="ezpapelTextLogo"
                  class="h-8 w-auto hidden xl:inline-block"
                  alt="text logo"
                />
              </router-link>
              <!-- Navbar Items -->
              <ul
                class="w-full xl:pl-6 pr-4 menu-items flex flex-wrap xl:flex-no-wrap items-center"
                v-if="screenWidth >= 1200"
              >
                <li
                  class="menu-item"
                  v-for="(item, index) in navMenuItems"
                  :key="index"
                  :class="{ 'mr-2': !(navMenuItems.length === index + 1) }"
                >
                  <!-- If header -->
                  <template v-if="item.header">
                    <h-nav-menu-header
                      :header="item"
                      class="menu-header relative"
                    />
                  </template>

                  <!-- If it's group -->
                  <template v-else-if="item.submenu">
                    <h-nav-menu-group
                      class="menu-group relative py-4"
                      bottom
                      :key="`group-${index}`"
                      :group="item"
                      :groupIndex="index"
                      :open="checkGrpChildrenActive(item)"
                    />
                  </template>

                  <!-- If it's link -->
                  <div v-else-if="item.url" class="menu-link">
                    <h-nav-menu-item
                      class="relative py-4 cursor-pointer"
                      :to="item.slug !== 'external' ? item.url : null"
                      :href="item.slug === 'external' ? item.url : null"
                      :icon="item.icon"
                      :target="item.target"
                      :isDisabled="item.isDisabled"
                      :slug="item.slug"
                    >
                      <span class="truncate">{{ item.name }}</span>
                      <vs-chip :color="item.tagColor" v-if="item.tag">{{
                        item.tag
                      }}</vs-chip>
                    </h-nav-menu-item>
                  </div>
                </li>
              </ul>
              <div v-else>
                <div @click="active = !active">
                  <vs-icon class="list" icon="list" color="primary"></vs-icon>
                </div>
              </div>
            </div>
            <!-- Right Side -->
            <!--        <search-bar class="mr-4"/>-->
            <div class="flex items-center">
              <span @click="handleAutomationButton" class="cursor-pointer pt-2">
                <feather-icon
                  icon="ToolIcon"
                  class="cursor-pointer opacity-75 hover:opacity-100"
                  title="Automation"
                />
              </span>

              <div
                class="__navbar-right mt-1 mr-6 ml-6 sm:space-x-4 space-x-2 flex items-center"
              >
                <router-link
                  tag="div"
                  :to="{ name: 'account-setting' }"
                  class="vx-logo cursor-pointer"
                >
                  <feather-icon
                    icon="SettingsIcon"
                    class="cursor-pointer opacity-75 hover:opacity-100"
                    title="Account Settings"
                  />
                </router-link>
              </div>

              <profile-drop-down class="flex-shrink-0" />
            </div>
          </div>
        </vs-navbar>
        <automation-popup
          ref="refAutomation"
          :openAutomationPopup="openAutomationPopup"
          @closeAutomationPopup="closeAutomationPopup"
          @reopenAutomationPopup="reopenAutomationPopup"
        ></automation-popup>
      </div>
    </div>
    <transition name="slide-fade">
      <div v-show="active" class="custom-sidebar shadow-2xl">
        <div
          class="menu-item"
          v-for="(item, index) in navMenuItems"
          :key="index"
          :class="{ 'mr-2': !(navMenuItems.length === index + 1) }"
        >
          <!-- If header -->
          <template v-if="item.header">
            <h-nav-menu-header :header="item" class="menu-header relative" />
          </template>

          <!-- If it's group -->
          <template v-else-if="item.submenu">
            <h-nav-menu-group
              class="menu-group relative py-4"
              bottom
              :key="`group-${index}`"
              :group="item"
              :groupIndex="index"
              :open="checkGrpChildrenActive(item)"
            />
          </template>

          <!-- If it's link -->
          <div v-else-if="item.url" class="menu-link" @click="closeSidebar">
            <h-nav-menu-item
              class="relative py-4 cursor-pointer"
              :to="item.slug !== 'external' ? item.url : null"
              :href="item.slug === 'external' ? item.url : null"
              :icon="item.icon"
              :target="item.target"
              :isDisabled="item.isDisabled"
              :slug="item.slug"
            >
              <span class="truncate">{{ item.name }}</span>
              <vs-chip :color="item.tagColor" v-if="item.tag">{{
                item.tag
              }}</vs-chip>
            </h-nav-menu-item>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import HNavMenuGroup from "../horizontal-nav-menu/HorizontalNavMenuGroup.vue";
import HNavMenuHeader from "../horizontal-nav-menu/HorizontalNavMenuHeader.vue";
import HNavMenuItem from "../horizontal-nav-menu/HorizontalNavMenuItem.vue";
import Bookmarks from "../navbar/components/Bookmarks.vue";
import SearchBar from "../navbar/components/SearchBar.vue";
import NotificationDropDown from "../navbar/components/NotificationDropDown.vue";
import ProfileDropDown from "../navbar/components/ProfileDropDown.vue";
import Logo from "../Logo.vue";
import HorizontalNavMenu from "../horizontal-nav-menu/HorizontalNavMenu";
// Images
import EzpapelTextLogo from "@assets/images/logo/truckpedia-full-logo.svg";
import AutomationPopup from "./AutomationPopup.vue";
import { mapGetters } from "vuex";

export default {
  name: "CustomHorizontalNavBar",

  props: {
    navMenuItems: {
      required: true,
      type: Array,
    },
  },

  components: {
    HorizontalNavMenu,
    HNavMenuGroup,
    HNavMenuHeader,
    HNavMenuItem,
    Logo,
    Bookmarks,
    SearchBar,
    NotificationDropDown,
    ProfileDropDown,
    AutomationPopup,
  },

  data() {
    return {
      active: false,
      ezpapelTextLogo: EzpapelTextLogo,
      screenWidth: document.body.clientWidth,
      openAutomationPopup: false,
    };
  },
  watch: {
    screenWidth(val) {
      this.screenWidth = val;
    },
  },
  created() {},
  mounted() {
    // header头部监听
    let that = this;
    window.addEventListener("resize", function () {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    });
  },
  computed: {
    navbarColor() {
      let color = "#fff";
      if (this.navbarType === "sticky") color = "#f7f7f7";
      else if (this.navbarType === "static") {
        if (this.scrollY < 50) {
          color = "#f7f7f7";
        }
      }

      if (this.isThemedark === "dark") {
        if (color === "#fff") {
          color = "#10163a";
        } else {
          color = "#262c49";
        }
      }

      return color;
    },
    isThemedark() {
      return this.$store.state.theme;
    },
    navbarStyle() {
      return this.navbarType === "static"
        ? { transition: "all .25s ease-in-out" }
        : {};
    },
    navbarClasses() {
      return this.scrollY > 5 && this.navbarType === "static"
        ? null
        : "d-theme-dark-light-bg shadow-none";
    },
    scrollY() {
      return this.$store.state.scrollY;
    },
    verticalNavMenuWidth() {
      return this.$store.state.verticalNavMenuWidth;
    },
    windowWidth() {
      return this.$store.state.windowWidth;
    },
  },
  methods: {
    closeAutomationPopup() {
      console.log("Bar closeAutomationPopup()");
      this.openAutomationPopup = false;
    },

    reopenAutomationPopup() {
      console.log("Bar reopenAutomationPopup()");
      this.openAutomationPopup = true;
    },

    handleAutomationButton() {
      console.log("Bar handleAutomationButton()");
      this.openAutomationPopup = !this.openAutomationPopup;
    },

    closeSidebar() {
      this.active = false;
    },
    checkGrpChildrenActive(group) {
      const path = this.$route.fullPath;
      let active = false;
      const routeParent = this.$route.meta
        ? this.$route.meta.parent
        : undefined;

      if (group.submenu) {
        group.submenu.forEach((item) => {
          if (active) return true;
          if ((path === item.url || routeParent === item.slug) && item.url) {
            active = true;
          } else if (item.submenu) {
            this.checkGrpChildrenActive(item);
          }
        });
      }

      return active;
    },
  },
};
</script>

<style lang="scss" scoped>
.vs-navbar.navbar-skelton {
  padding: 0rem 2.2rem;
}

.items-center-dropdown {
  text-align: left;
  width: 6rem;
}
.list {
  font-size: 4rem;
  margin-left: 1rem;
}
.__navbar-right {
  .router-link-exact-active.router-link-active {
    color: rgba(var(--vs-primary), 1) !important;

    span {
      opacity: 1 !important;
    }
  }
}

#parentx {
  height: 500px;
}

@media (max-width: 1199px) {
  .menu-item:first-child {
    padding-top: 4.5rem;
  }
}

.custom-sidebar {
  height: 100vh;
  position: absolute;
  width: 60%;
  z-index: 10000;
  background: #fff;
  padding: 10px;
}
</style>
