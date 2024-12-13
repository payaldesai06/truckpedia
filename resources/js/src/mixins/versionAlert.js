import config from "@/config/constants";
export default {
  data() {
    return {
      versionCheckTimer: null,
      showNewVersionAlertMsg: false,
    };
  },
  created() {
    this.triggerVersionCheckTimer();
  },
  methods: {
    // Test case 1 Fetch New Version Successfully API call to getWebsiteVersion to return a response with a higher version.
    // Test case 2 Fetch New Version Unsuccessful API call to getWebsiteVersion to return an error response.
    // Test case 3 New Version Lower Than Current Version API call to getWebsiteVersion to return a lower version.
    // Test case 4 No New Version Available API call to getWebsiteVersion to return no version.
    // Test case 5 Check setInterval Value setInterval function to verify the correct interval value (7200000 milliseconds).

    // Function to trigger the version check timer.
    triggerVersionCheckTimer() {
      // Set interval only call on production 
      if (process.env.NODE_ENV === "production") {
        // Set the versionCheckTimer to call fetchVersion every 2 hours (7200000 milliseconds).
        this.versionCheckTimer = setInterval(() => {
          this.fetchVersion();
        }, 3600000); // 1 hour
      }
    },
    // Function to fetch the website version and check for updates.
    async fetchVersion() {
      try {
        // Fetch the new website version from the server.
        const newVersion = await this.$store.dispatch(
          "ezpapelWebsiteVersion/getEzpapelWebsiteVersion"
        );

        // Get the current version from the configuration (assuming config is defined).
        const currentVersion = config.ezpapelWebsiteVersion;

        // Check if the fetched version is newer than the current version.
        if (newVersion && newVersion.data.payload.version) {
          if (newVersion.data.payload.version > currentVersion) {
            // If a newer version is available, show an alert to the user.
            this.showNewVersionAlert();
          }
        }
      } catch (error) {
        // Log any errors that occur during the version check.
        console.log(error);
      }
    },
    showNewVersionAlert() {
      this.showNewVersionAlertMsg = true;
    },
    forceRefreshPage() {
      if (window) {
        // window.location.reload(true);
        window.location.href = window.location.href;
      }
    },
  },
  beforeDestroy() {
    clearInterval(this.versionCheckTimer);
  },
};
