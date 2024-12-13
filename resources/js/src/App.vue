<!-- =========================================================================================
  File Name: App.vue
  Description: Main vue file - APP
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="app" :class="vueAppClasses">
    <router-view @setAppClasses="setAppClasses" />
    <template v-if="isProduction">
      <vs-alert
        :active.sync="showNewVersionAlertMsg"
        closable
        close-icon="cancel"
        class="newVersionAlterMsg"
      >
        <div class="flex mx-auto items-center justify-between">
          <span>
            A new version of this website is available. Click here to refresh
            the website.
          </span>
          <div>
            <vs-button color="#fff" type="border" @click="forceRefreshPage"
              >Refresh</vs-button
            >
          </div>
        </div>
      </vs-alert>
    </template>
  </div>
</template>

<script>
import themeConfig from "@/../themeConfig.js";
import { mapGetters } from "vuex";
import config from "@/config/constants";
import VersionAlert from "@/mixins/versionAlert";
import { joinSocketRoom, socket } from './socketIo';
import { EventBus } from "./helpers/eventBus"
import constants from "./config/constants";

export default {
  mixins: [VersionAlert],
  data() {
    return {
      vueAppClasses: [],
      isProduction: process.env.NODE_ENV === "production",
    };
  },
  computed: {
    ...mapGetters("auth", ["user"]),
    userId() {
      return (this.user || {}).user_id || null;
    },
  },
  watch: {
    "$store.state.theme"(val) {
      this.toggleClassInBody(val);
    },
    "$vs.rtl"(val) {
      document.documentElement.setAttribute("dir", val ? "rtl" : "ltr");
    },
    userId(val) {
      if (!process.env.NODE_ENV || process.env.NODE_ENV !== "development") {
        if (val) {
          if (window && window.intercomSettings) {
            this.updateIntercomSettings();
          } else if (window) {
            this.registerIntercomSettings();
          }
        }
      }

      //join socket room with id
      joinSocketRoom(this.user.user_id)
    },
  },
  methods: {
    toggleClassInBody(className) {
      if (className === "dark") {
        if (document.body.className.match("theme-semi-dark"))
          document.body.classList.remove("theme-semi-dark");
        document.body.classList.add("theme-dark");
      } else if (className === "semi-dark") {
        if (document.body.className.match("theme-dark"))
          document.body.classList.remove("theme-dark");
        document.body.classList.add("theme-semi-dark");
      } else {
        if (document.body.className.match("theme-dark"))
          document.body.classList.remove("theme-dark");
        if (document.body.className.match("theme-semi-dark"))
          document.body.classList.remove("theme-semi-dark");
      }
    },
    toggleTruckPediaClassInBody() {
      document.body.classList.toggle("truckpedia");
    },
    setAppClasses(classesStr) {
      this.vueAppClasses.push(classesStr);
    },
    handleWindowResize() {
      this.$store.commit("UPDATE_WINDOW_WIDTH", window.innerWidth);

      // Set --vh property
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    },
    handleScroll() {
      this.$store.commit("UPDATE_WINDOW_SCROLL_Y", window.scrollY);
    },
    registerIntercomSettings() {
      if (!this.userId) return;
      const { user_id, email, firstName, lastName, createdAt, hashHmac } =
        this.user;
      let created_at = new Date(createdAt).getTime();
      const intercomSettings = {
        api_base: config.intercomApiBase,
        app_id: config.intercomAppId,
        name: `${firstName} ${lastName}`, // Full name
        email, // Email address
        created_at, // Signup date as a Unix timestamp
        user_id: `${user_id}`,
        user_hash: hashHmac,
      };
      if (window) {
        window.Intercom("boot", intercomSettings);
        // window.Intercom('show')
      }
    },
    updateIntercomSettings() {
      if (!this.userId) return;
      const { user_id, email, firstName, lastName, createdAt, hashHmac } =
        this.user;
      let created_at = new Date(createdAt).getTime();
      const intercomSettings = {
        name: `${firstName} ${lastName}`, // Full name
        email,
        created_at,
        user_id: `${user_id}`,
        user_hash: hashHmac,
      };
      if (window) {
        window.Intercom("update", intercomSettings);
      }
    },
  },
  mounted() {
    // this.toggleClassInBody(themeConfig.theme);
    this.toggleTruckPediaClassInBody();
    this.$store.commit("UPDATE_WINDOW_WIDTH", window.innerWidth);

    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // socket event for new message
    socket.on(constants.socketIoEvents.newMessages, (data) => {
      EventBus.$emit(constants.socketIoEvents.newMessages, data);
    });
  },
  async created() {
    const dir = this.$vs.rtl ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);

    window.addEventListener("resize", this.handleWindowResize);
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    socket.off(constants.socketIoEvents.newMessages);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.router-view {
  padding: 0.3rem !important;
}
.newVersionAlterMsg {
  height: 66 px;
  z-index: 999999;
  opacity: 1;
  width: 32vw !important;
  position: fixed;
  bottom: 7vh;
  left: 32%;
  /* background: #7367F0; */
  background: #4dd0e1;
  color: #fff;
}
</style>

<style>
.con-vs-alert-primary .con-x {
  background-color: transparent;
}
.bg-light-blue{
  background: #eaf1fb;
}
</style>
