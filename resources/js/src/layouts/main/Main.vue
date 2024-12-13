<!-- =========================================================================================
    File Name: Main.vue
    Description: Main layout
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div
    class="layout--main"
    :class="[
      layoutTypeClass,
      navbarClasses,
      footerClasses,
      { 'no-scroll': isAppPage },
    ]"
  >
    <div
      id="content-area"
      :class="[contentAreaClass, { 'show-overlay': bodyOverlay }]"
    >
      <div id="content-overlay" />
      <div class="flex w-full">
        <CustomSidebar
          :class="['customSidebar', isCollapsed ? 'width-70' : '']"
          @sidebarResize="sidebarResize"
          :navMenuItems="navMenuItemsList"
          @collapseSidebar="isCollapsed = !isCollapsed"
        />
        <div
          :class="[
            'content-wrapper ml-auto',
            isCollapsed ? 'width-100-70' : 'width-100-200',
          ]"
          :style="contentWrapperWidth"
          id="content-wrapper"
        >
          <div class="router-view">
            <div class="router-content">
              <!-- <transition :name="routerTransition"> -->
              <div
                v-if="$route.meta.breadcrumb || $route.meta.pageTitle"
                class="router-header flex flex-wrap items-center mb-12"
              >
                <div
                  class="content-area__heading"
                  :class="{
                    'pr-4 border-0 md:border-r border-solid border-grey-light':
                      $route.meta.breadcrumb,
                  }"
                >
                  <h2 class="mb-1">{{ routeTitle }}</h2>
                </div>

                <!-- BREADCRUMB -->
                <vx-breadcrumb
                  class="ml-4 md:block hidden"
                  v-if="$route.meta.breadcrumb"
                  :route="$route"
                  :isRTL="$vs.rtl"
                />
              </div>
              <!-- </transition> -->

              <div class="content-area__content">
                <back-to-top
                  :bottom="backToTopSpaceFromBottom"
                  :right="$vs.rtl ? 'calc(100% - 2.2rem - 38px)' : '30px'"
                  visibleoffset="500"
                  v-if="!hideScrollToTop"
                >
                  <vs-button
                    icon-pack="feather"
                    icon="icon-arrow-up"
                    class="shadow-lg btn-back-to-top"
                  />
                </back-to-top>

                <!-- <transition :name="routerTransition" mode="out-in">  -->
                <router-view
                  :isCollapsed="isCollapsed"
                  @changeRouteTitle="changeRouteTitle"
                  @setAppClasses="
                    (classesStr) => $emit('setAppClasses', classesStr)
                  "
                />
                <!-- </transition> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <the-footer
        :class="[
          'ml-auto py-0',
          isCollapsed ? 'width-100-70' : 'width-100-200',
        ]"
      /> -->
    </div>
  </div>
</template>
<!-- eslint-disable nonblock-statement-body-position -->
<script>
import { mapGetters } from "vuex";
import config from "@/config/constants";
// import IdleTimer from "@/helpers/IdleTimer.js";

import BackToTop from "vue-backtotop";
import navMenuItems from "@/layouts/components/vertical-nav-menu/navMenuItems.js";
import TheFooter from "@/layouts/components/TheFooter.vue";
import themeConfig from "@/../themeConfig.js";

import CustomSidebar from "../components/customizer/CustomSidebar";

export default {
  components: {
    BackToTop,
    TheFooter,
    CustomSidebar,
  },
  data() {
    return {
      footerType: themeConfig.footerType || "static",
      hideScrollToTop: themeConfig.hideScrollToTop,
      isNavbarDark: false,
      navbarColor: themeConfig.navbarColor || "#fff",
      navbarType: themeConfig.navbarType || "floating",
      navMenuItems: [],
      routerTransition: themeConfig.routerTransition || "none",
      routeTitle: this.$route.meta.pageTitle,

      // AutoLogout
      idleUserTime: config.idle_user_time,
      isAutoLogout: false,
      timer: null,
      isCollapsed: true,
      resizeableWidth: null,
    };
  },
  watch: {
    $route() {
      this.routeTitle = this.$route.meta.pageTitle;
    },
    resizeableWidth: {
      handler() {
        if (this.resizeableWidth > 135) {
          this.isCollapsed = false;
        } else {
          this.isCollapsed = true;
        }
      },
    },
    isThemeDark(val) {
      const color = this.navbarColor === "#fff" && val ? "#10163a" : "#fff";
      this.updateNavbarColor(color);
    },
    "$store.state.mainLayoutType"(val) {
      this.setNavMenuVisibility(val);
    },
    isAutoLogout(newValue) {
      if (newValue) {
        this.logOut();
      }
    },
  },
  computed: {
    ...mapGetters("auth", ["userRole", "user", "isUserBrokerOrShipper"]),

    bodyOverlay() {
      return this.$store.state.bodyOverlay;
    },
    contentAreaClass() {
      if (this.mainLayoutType === "vertical") {
        if (this.verticalNavMenuWidth === "default")
          return "content-area-reduced";
        else if (this.verticalNavMenuWidth === "reduced")
          return "content-area-lg";
        else return "content-area-full";
      } else return "content-area-full";
    },
    footerClasses() {
      return {
        "footer-hidden": this.footerType === "hidden",
        "footer-sticky": this.footerType === "sticky",
        "footer-static": this.footerType === "static",
      };
    },
    isAppPage() {
      return this.$route.meta.no_scroll;
    },
    isThemeDark() {
      return this.$store.state.theme === "dark";
    },
    layoutTypeClass() {
      return `main-${this.mainLayoutType}`;
    },
    mainLayoutType() {
      return this.$store.state.mainLayoutType;
    },
    navbarClasses() {
      return {
        "navbar-hidden": this.navbarType === "hidden",
        "navbar-sticky": this.navbarType === "sticky",
        "navbar-static": this.navbarType === "static",
        "navbar-floating": this.navbarType === "floating",
      };
    },
    verticalNavMenuWidth() {
      return this.$store.state.verticalNavMenuWidth;
    },
    windowWidth() {
      return this.$store.state.windowWidth;
    },
    backToTopSpaceFromBottom() {
      const { name: currentRouteName } = this.$route;
      const modifiedRoutes = [
        "drivers-edit",
        "drivers-add",
        "UpdateTrailer",
        "CreateTrailer",
        "UpdateTrucks",
        "CreateTrucks",
      ];
      if (modifiedRoutes.includes(currentRouteName)) {
        return "15%";
      }
      return "5%";
    },
    contentWrapperWidth() {
      if (this.resizeableWidth)
        return { width: `calc(100% - ${this.resizeableWidth}px)` };
      return { width: "calc(100% - 70px)" };
    },
    navMenuItemsList() {
      if (this.isUserBrokerOrShipper) {
        return this.navMenuItems.map((item) => {
          if (item.slug === "dispatch") {
            return {
              ...item,
              name: "Shipment",
            };
          } else if (item.slug === "calendar") {
            return {
              ...item,
              name: "Tracking Map",
            };
          }

          return item;
        });
      } else return this.navMenuItems;
    },
  },
  methods: {
    sidebarResize(width) {
      this.resizeableWidth = width;
    },
    changeRouteTitle(title) {
      this.routeTitle = title;
    },
    updateNavbarColor(val) {
      this.navbarColor = val;
      if (val === "#fff") this.isNavbarDark = false;
      else this.isNavbarDark = true;
    },
    setNavMenuVisibility(layoutType) {
      if (
        (layoutType === "horizontal" && this.windowWidth >= 1200) ||
        (layoutType === "vertical" && this.windowWidth < 1200)
      ) {
        this.$store.commit("TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE", false);
        this.$store.dispatch("updateVerticalNavMenuWidth", "no-nav-menu");
      } else {
        this.$store.commit("TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE", true);
      }
    },

    // Auto Logout
    /*storageChange() {
      const expiredTime = localStorage.getItem("_expiredTime");

      if (!expiredTime) {
        this.logOut();
      }
    },*/

    async logOut() {
      this.$store.dispatch("auth/logout").catch(() => {});

      await this.$store.dispatch("auth/logoutLocally");

      await this.$router.push({ name: "page-login" }).catch(() => {});
    },
  },
  created() {
    const color =
      this.navbarColor === "#fff" && this.isThemeDark
        ? "#10163a"
        : this.navbarColor;
    this.updateNavbarColor(color);
    this.setNavMenuVisibility(this.$store.state.mainLayoutType);

    // Get Auth User's Navbar Items
    if (this.isUserBrokerOrShipper) {
      this.navMenuItems = navMenuItems["shipperBroker"];
    } else {
      this.navMenuItems = navMenuItems[this.userRole];
    }

    //this.timer = null;
    /*new IdleTimer({
      timeout: this.idleUserTime,
      onTimeout: () => {
        if (this.isAutoLogout) {
          this.logOut();
        }
        this.isAutoLogout = true;
        // this.timer.cleanUp()
      },
      onExpired: () => {
        if (this.isAutoLogout) {
          this.logOut();
        }
        this.isAutoLogout = true;
        this.timer.cleanUp();
      },
    });*/

    // Auto Logout
    // window.addEventListener("storage", this.storageChange);
  },
  // updated () {
  //   // eslint-disable-next-line no-unused-expressions
  //   this.timer
  // },
  beforeDestroy() {
    this.timer = null;
    this.isAutoLogout = false;

    // localStorage.removeItem("_expiredTime");
    // window.removeEventListener("storage", this.storageChange);
  },
};
</script>

<style lang="scss" scoped>
.customSidebar {
  z-index: 999;
}

.content-wrapper,
.the-footer {
  transition: 0.5s;
}

.router-view,
.the-footer {
  padding: 1rem;
}

// Utility Classes

.width-70 {
  width: 70px;
}

.width-100-200 {
  width: calc(100% - 250px) !important;
}

.width-100-70 {
  width: calc(100% - 70px);
}
</style>
