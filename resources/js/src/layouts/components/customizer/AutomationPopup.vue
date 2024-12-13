<template>
  <div>
    <vs-sidebar
      parent="body"
      position-right
      default-index="1"
      color="primary"
      class="sidebarx"
      spacer
      v-model="toggleThisPopup"
    >
      <div
        class="flex items-center h-full text-center"
        v-if="checkEmptyAutomation"
      >
        <p>
          Let <b>Truckpedia</b> do the work for you by automating your most common
          tasks
        </p>
      </div>

      <div class="mt-20 overflow-auto" style="max-height: 80vh" v-else>
        <!-- Trigger automation listing  -->
        <div
          class="automation-list-item"
          v-for="(item, propertyName, index) in transformedAutomations"
          :key="index"
          @click="goToAutomationSetting(item, propertyName)"
        >
          <div>
            <div>
              <div class="flex justify-between">
                <p class="title">
                  When drivers clicks on
                  {{ propertyName.replace("driver", "").replaceAll("_", " ") }}
                </p>
                <div class="dropdown">
                  <a class="a-icon" href="#">
                    <vs-icon icon="more_horiz"></vs-icon>
                  </a>
                  <div class="dropdown-content">
                    <!-- <p @click.stop="goToAutomationSetting(item, propertyName)">
                      Edit
                    </p>
                    <vs-divider class="my-2" />-->
                    <p @click.stop="deleteAutomation(propertyName)">Delete</p>
                  </div>
                </div>
              </div>
              <span class="subtitle">{{
                displaySelectedActions(item, propertyName)
              }}</span>
            </div>
          </div>
          <vs-divider />
        </div>
        <!-- Schedule automation listing  -->
        <div
          class="automation-list-item"
          v-for="item in schedulesAutomations"
          :key="'schedules_' + item.id"
          @click="goToAutomationSetting(item, 'schedulesTime')"
        >
          <div>
            <div class="flex justify-between">
              <p class="title">
                {{ generateScheduledSelectedTimeString(item) }}
              </p>
              <div class="dropdown">
                <a class="a-icon" href="#">
                  <vs-icon icon="more_horiz"></vs-icon>
                </a>
                <div class="dropdown-content">
                  <p @click.stop="deleteScheduleAutomation(item)">Delete</p>
                </div>
              </div>
            </div>
            <span class="subtitle">{{
              displaySelectedScheduleActions(item)
            }}</span>
          </div>
          <vs-divider />
        </div>
        <!-- Maintenance Reminder listings  -->
        <div
          class="automation-list-item"
          v-for="item in reminderAutomation"
          :key="'reminder_' + item.id"
          @click="goToAutomationSetting(item, 'reminderAutomation')"
        >
          <div>
            <div class="flex justify-between">
              <p class="title">
                {{ generateReminderAutomationString(item) }}
              </p>
              <div class="dropdown">
                <a class="a-icon" href="#">
                  <vs-icon icon="more_horiz"></vs-icon>
                </a>
                <div class="dropdown-content">
                  <p @click.stop="deleteReminderAutomation(item)">Delete</p>
                </div>
              </div>
            </div>
            <span class="subtitle">
              {{ displayReminderAutomationActions(item) }}
            </span>
          </div>
          <vs-divider />
        </div>
        <!-- </div> -->
      </div>

      <div
        class="automation-list-item"
        v-if="automations && automations.loadCollaboratorAddedNotification"
        @click="
          goToAutomationSetting(
            automations.loadCollaboratorAddedNotification,
            'loadNotificationAutomation'
          )
        "
      >
        <div>
          <div class="flex justify-between">
            <p class="title">Load Collaborator Added</p>
            <div class="dropdown">
              <a class="a-icon" href="#">
                <vs-icon icon="more_horiz"></vs-icon>
              </a>
              <div class="dropdown-content">
                <p
                  @click.stop="
                    deleteLoadCollaboratorAddedNotificationAutomation(
                      automations.loadCollaboratorAddedNotification
                    )
                  "
                >
                  Delete
                </p>
              </div>
            </div>
          </div>
          <span class="subtitle">
            Send an email to load collaborator when added
          </span>
        </div>
        <vs-divider />
      </div>

      <div class="footer-sidebar" slot="footer">
        <div
          class="automation-list-item py-3 flex justify-between"
          @click="goToAutomationSetting(null, null)"
        >
          <p class="title">Create Automation</p>
          <span>
            <vs-icon icon="add"></vs-icon>
          </span>
        </div>
      </div>
    </vs-sidebar>
    <transition name="slide-fade">
      <div v-show="toggleAutomationSetting" class="automation-custom-sidebar">
        <automation-setting
          :transformedAutomations="transformedAutomations"
          :automationSettingParameters="automationSettingParameters"
          :toggleAutomationSetting="toggleAutomationSetting"
          @closeAutomationSetting="closeAutomationSetting"
        ></automation-setting>
      </div>
    </transition>
  </div>
</template>

<script>
import AutomationSetting from "../automation/AutomationSetting.vue";
import config from "@/config/constants";

export default {
  components: { AutomationSetting },
  name: "AutomationPopup",
  props: ["openAutomationPopup"],

  data() {
    return {
      toggleThisPopup: false,
      automations: {},
      transformedAutomations: {},
      automationSettingParameters: {
        property: null,
        value: null,
      },
      toggleAutomationSetting: false,
      schedulesAutomations: [],
      weekOnTimeOption: config.weekDays,
      monthOnTimeOption: config.monthDays,
      timeRange: [],
      reminderAutomation: [],
    };
  },

  watch: {
    $route() {
      this.toggleAutomationSetting = false;
    },

    toggleThisPopup() {
      console.log("Popup calls toggleThisPopup()", this.toggleThisPopup);
      if (!this.toggleThisPopup) {
        this.$emit("closeAutomationPopup");
      }
    },

    openAutomationPopup() {
      console.log(
        "Popup calls openAutomationPopup()",
        this.toggleThisPopup,
        this.openAutomationPopup
      );
      if (this.openAutomationPopup) {
        this.toggleThisPopup = true;
        if (this.toggleThisPopup) {
          this.getAllAutomations();
        }
      }
    },
  },
  mounted() {
    this.getTimeRanges();
  },
  computed: {
    checkEmptyAutomation() {
      if (
        !Object.keys(this.transformedAutomations).length &&
        !this.schedulesAutomations.length &&
        !this.reminderAutomation.length
      ) {
        return true;
      }
      return false;
    },
  },
  methods: {
    getTimeRanges() {
      const interval = 15;
      const ranges = [];
      const date = new Date();
      for (let i = 0; i < 24 * 60; i = i + interval) {
        date.setHours(0);
        date.setMinutes(i);
        const timeValue = `${String(date.getHours()).padStart(2, "0")}:${String(
          date.getMinutes()
        ).padStart(2, "0")}`;
        ranges.push({
          text: date.toLocaleTimeString("en", {
            hour: "numeric",
            minute: "numeric",
          }),
          value: timeValue,
        });
      }
      this.timeRange = ranges;
    },
    closePopup() {
      console.log("Popup calls closePopup()", this.toggleThisPopup);
      this.toggleThisPopup = false;
    },

    closeAutomationSetting() {
      console.log("Popup calls closeAutomationSetting()");
      this.toggleAutomationSetting = false;
      setTimeout(() => this.$emit("reopenAutomationPopup"), 50);
    },

    transformAutomations() {
      console.log("Popup calls transformAutomations()");
      const tempTransformed = {};
      const driverClicksOnProperties = [
        "driver_start_load",
        "driver_shipper_arrived",
        "driver_shipper_loaded",
        "driver_receiver_arrived",
        "driver_receiver_unloaded",
        "driver_end_load",
        "driver_upload",
      ];
      for (const property of driverClicksOnProperties) {
        tempTransformed[property] = this.transformAutomationToString(
          this.automations[property]
        );
      }
      // console.log("tempTransformed", tempTransformed);
      const tempList = Object.values(tempTransformed);
      const isSame = tempList.every((item) => item == tempList[0]);
      if (isSame && tempList[0]) {
        this.transformedAutomations = {
          driver_all_buttons: this.automations["driver_start_load"],
        };
      } else {
        this.transformedAutomations = {};
        for (const property in this.automations) {
          if (tempTransformed[property]) {
            this.transformedAutomations[property] = this.automations[property];
          }
        }
      }
      this.schedulesAutomations = [];
      this.automations.schedules.forEach((item) => {
        if (item.actions) {
          this.schedulesAutomations.push(item);
        }
      });

      this.reminderAutomation = [];
      ((this.automations || {}).reminders || []).forEach((item) => {
        if (item.actions) {
          this.reminderAutomation.push(item);
        }
      });

      this.automations.loadCollaboratorAddedNotification =
        (this.automations || {}).loadCollaboratorAddedNotification || false;
    },

    transformAutomationToString(item) {
      let ret = "";
      if (item.extra_emails && item.extra_emails.length > 0) {
        const sortedLowerCaseEmails = item.extra_emails
          .map((e) => e.toLowerCase())
          .sort();
        sortedLowerCaseEmails.forEach((e) => {
          ret += `${e},`;
        });
      }
      if (item.dispatcher) {
        ret += "d,";
      }
      if (item.collaborator) {
        ret += "c,";
      }
      if (item.customer) {
        ret += "cu,";
      }
      return ret;
    },

    getAllAutomations() {
      this.$store
        .dispatch("automation/getAllAutomations")
        .then((data) => {
          this.automations = data;
          // console.log("get automation", this.automations);
          this.transformAutomations();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    goToAutomationSetting(automationItem, propertyName) {
      console.log(
        "Popup calls goToAutomationSetting()",
        automationItem,
        propertyName
      );
      this.automationSettingParameters.property = propertyName;
      this.automationSettingParameters.value = automationItem;
      this.toggleThisPopup = false;
      this.toggleAutomationSetting = true;
    },
    generateScheduledSelectedTimeString(item) {
      const {
        actions,
        startTime,
        selectedDates,
        freqInterval,
        freqType,
        startDate,
      } = item || {};
      if (freqType && startTime && freqInterval && actions) {
        if (freqType !== "day" && !selectedDates.length) {
          return "";
        }
        const [startTime] = this.timeRange.filter((ele) => {
          const time = item.startTime.split(":");
          if (ele.value === `${time[0]}:${time[1]}`) {
            return ele;
          }
        });

        const getSelectedDaysText = (freqType, selectedDates) => {
          const weekOnTime = [...selectedDates];
          let lastValueOfWeekOnTime =
            weekOnTime.length > 1 ? weekOnTime.pop() : "";
          if (freqType === "week") {
            const weekDays = weekOnTime.map((ele) => {
              return this.weekOnTimeOption[ele];
            });
            const week = weekDays.map((ele) => (ele || {}).text || "");
            const endString = lastValueOfWeekOnTime
              ? ` and ${this.weekOnTimeOption[lastValueOfWeekOnTime].text}`
              : "";
            return ` on ${week.join(", ")} ${endString}`;
          }
          if (freqType === "month") {
            const monthDays = weekOnTime.map((ele) => {
              return this.monthOnTimeOption[ele - 1];
            });
            const days = monthDays.map((ele) => (ele || {}).text || "");
            const endString = lastValueOfWeekOnTime
              ? ` and ${this.monthOnTimeOption[lastValueOfWeekOnTime - 1].text}`
              : "";
            return ` on ${days.join(", ")} ${endString}`;
          }
          return "";
        };
        const selectedDaysText = getSelectedDaysText(freqType, selectedDates);
        const triggerText = `Every ${freqInterval} ${freqType}${
          freqInterval > 1 ? "s" : ""
        }`;
        const timeText = ` at ${startTime ? startTime.text : ""}`;
        return triggerText + selectedDaysText + timeText;
      }
      return "";
    },
    displaySelectedActions(item) {
      let targets = "";

      if (item.dispatcher) {
        targets = "dispatcher";
      }
      if (item.collaborator) {
        targets += `${targets == "" ? "" : ", "}load collaborator`;
      }
      if (item.customer) {
        targets += `${targets == "" ? "" : ", "}customer`;
      }
      if (item.extra_emails.length > 0) {
        targets += `${targets == "" ? "" : " and "}extra emails`;
      }

      if (targets) {
        return `send an email to ${targets}`;
      }
      return "";
    },
    displaySelectedScheduleActions(item) {
      let targets = "";

      if (item.actions.some((ele) => ele.actionType == "email")) {
        targets = "an email";
      }
      if (
        item.actions.some((ele) => ele.actionType == 'emailAvailableTrucks')
      ) {
        targets += `${targets == "" ? "" : " and "}available trucks link`;
      }

      if (targets) {
        return `send ${targets}`;
      }
      return "";
    },

    /*
    Not needed for now. May need in the future.
    showAutomation(item) {
      if (!item.dispatcher && !item.collaborator && !item.extra_emails.length) {
        return false;
      }
      return true;
    },*/

    deleteLoadCollaboratorAddedNotificationAutomation() {
      const payload = {
        loadCollaboratorAddedNotification: false,
      };
      this.$store
        .dispatch('automation/updateAutomation', payload)
        .then(() => {
          this.$vs.notify({
            color: 'success',
            title: 'Automation Deleted',
            text: 'Automation Deleted Successfully',
          });
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        })
        .finally(() => this.getAllAutomations());
    },

    deleteAutomation(key) {
      console.log("Popup calls deleteAutomation()", key);

      const emptyPayload = {
        dispatcher: "",
        collaborator: "",
        extra_emails: [],
      };
      let payload = {};
      if (key == "driver_all_buttons") {
        payload = {
          driver_start_load: emptyPayload,
          driver_shipper_loaded: emptyPayload,
          driver_shipper_arrived: emptyPayload,
          driver_receiver_arrived: emptyPayload,
          driver_receiver_unloaded: emptyPayload,
          driver_end_load: emptyPayload,
          driver_upload: emptyPayload,
        };
      } else {
        payload = {
          [key]: emptyPayload,
        };
      }

      this.$store
        .dispatch("automation/updateAutomation", payload)
        .then(() => {
          this.$vs.notify({
            color: "success",
            title: "Automation Deleted",
            text: "Automation Deleted Successfully",
          });
        })
        .catch((error) => {
          this.$vs.notify({
            color: "danger",
            title: "Error",
            text: error.response.data.message,
          });
        })
        .finally(() => this.getAllAutomations());
    },
    deleteScheduleAutomation(item) {
      const payload = {
        schedule: {
          id: item.id,
        },
      };
      this.$store
        .dispatch("automation/deleteScheduleAutomation", payload)
        .then(() => {
          this.$vs.notify({
            color: "success",
            title: "Automation Deleted",
            text: "Automation Deleted Successfully",
          });
        })
        .catch((error) => {
          this.$vs.notify({
            color: "danger",
            title: "Error",
            text: error.response.data.message,
          });
        })
        .finally(() => this.getAllAutomations());
    },
    generateReminderAutomationString({ freqInterval ,freqType }) {
      if (freqType === "day") {
        return freqInterval ? `Reminder: every ${freqInterval} days` : "Reminder";
      } else if (freqType === "expirationDate") {
        return "Expiration Reminder";
      }
    },
    displayReminderAutomationActions({ inAdvance }) {
      let inAdvanceString = inAdvance;
      const inAdvanceArray = inAdvance.split(",");
      if (inAdvanceArray.length > 1) {
        const lastEl = inAdvanceArray.pop();
        inAdvanceString = inAdvanceArray.join(", ") + ` and ${lastEl}`;
      }
      return inAdvanceString
        ? `Send an email ${inAdvanceString} days in advance`
        : "";
    },
    deleteReminderAutomation(item) {
      const payload = {
        reminder: {
          id: item.id,
        },
      };
      this.$store
        .dispatch("automation/deleteScheduleAutomation", payload)
        .then(() => {
          this.$vs.notify({
            color: "success",
            title: "Automation Deleted",
            text: "Automation Deleted Successfully",
          });
        })
        .catch((error) => {
          this.$vs.notify({
            color: "danger",
            title: "Error",
            text: error.response.data.message,
          });
        })
        .finally(() => this.getAllAutomations());
    },
  },
};
</script>

<style lang="scss">
.sidebarx {
  .vs-sidebar {
    max-width: 400px;
    padding: 10px;
    z-index: 200001 !important;
  }

  .vs-sidebar--background {
    z-index: 200000;
  }
}

.footer-sidebar {
  margin-bottom: 30px;
  padding: 5px;
}

.automation-list-item {
  padding: 8px 8px 0px;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .title {
    font-weight: 500;
    font-size: 14px;
  }

  .subtitle {
    font-size: 12px;
  }
}

.email-config {
  .con-chips {
    display: block;
  }
}

.automation-custom-sidebar {
  height: 100vh;
  position: absolute;
  width: 100vw;
  overflow-y: auto;
  top: 0;
  left: 0;
  background: #fff;
  padding: 20px;
  z-index: 100;
}

.a-icon {
  z-index: 20000;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 110px;
  box-shadow: 0px 0px 4px rgb(0 0 0 / 20%);
  padding: 5px;
  z-index: 1;
  right: 0;
  border-radius: 4px;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content {
  top: 0;
}
</style>
