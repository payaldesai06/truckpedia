<template>
  <div>
    <div class="top-block">
      <vs-button
        color="primary"
        size="small"
        @click="closeAutomationSetting"
        type="border"
      >
        Back
      </vs-button>
      <div class="vx-row p-5">
        <!-- Left side  -->
        <div class="w-1/2">
          <div>
            <p class="mb-3">TRIGGER</p>
            <div
              v-if="selectedTrigger"
              class="automation-card-container"
              @click="openTriggerOnRight()"
            >
              <p class="trigger-name" v-if="selectedTrigger != triggers[1]">
                {{ selectedTrigger }} {{ selectedTriggerOption }}
              </p>
              <p v-else>
                <span class="trigger-name">{{ selectedTrigger }}</span
                ><br />{{ scheduledTime }}
              </p>
            </div>
            <vs-dropdown v-else vs-custom-content vs-trigger-click>
              <a class="a-icon">
                <div class="focus-container">+ Add trigger</div>
              </a>
              <vs-dropdown-menu>
                <vs-dropdown-item
                  v-for="item in triggers"
                  :key="item"
                  v-show="checkEarlyAccess(item)"
                  @click="handleTriggerSelected(item)"
                >
                  {{ item }}
                </vs-dropdown-item>
              </vs-dropdown-menu>
            </vs-dropdown>

            <!-- Suggested triggers  -->
            <!-- Below TRIGGER, when users have not yet selected one trigger -->
            <div v-if="!selectedTrigger">
              <p class="pt-5 pb-2 font-medium">Suggested triggers for you:</p>
              <ul v-for="item in triggers" :key="item">
                <li
                  class="py-2 card-list"
                  v-if="checkEarlyAccess(item)"
                  @click="handleTriggerSelected(item)"
                >
                  {{ item }}
                </li>
              </ul>
            </div>

            <!-- Actions  -->
            <div class="mt-12" v-else>
              <p class="mb-3">ACTIONS</p>
              <div class="automation-card-container">
                <h5 class="typo__label">Run actions</h5>
                <div :class="{ runActions: selectedActions.length > 4 }">
                  <!-- Actions List  -->
                  <div
                    class="selected-action-list"
                    v-for="(item, index) in selectedActions"
                    :class="selectedActionClass(item)"
                    :key="index"
                    @click="actionOnSelected(item)"
                  >
                    <span
                      v-if="
                        selectedTrigger == triggers[1] ||
                        selectedTrigger === triggers[2] ||
                        selectedTrigger === triggers[3]
                      "
                    >
                      {{ item.action }}
                    </span>
                    <span v-else>{{ item }}</span>
                    <vs-dropdown v-if="!isLoadCollaboratorAdded">
                      <a class="a-icon" href="#">
                        <vs-icon icon="more_horiz"></vs-icon>
                      </a>
                      <vs-dropdown-menu>
                        <vs-dropdown-item @click="removeAction(index, item)">
                          delete
                        </vs-dropdown-item>
                      </vs-dropdown-menu>
                    </vs-dropdown>
                  </div>
                  <!-- Actions List  End-->
                </div>
                <vs-dropdown vs-custom-content vs-trigger-click class="mt-3">
                  <a class="a-icon" v-if="!isLoadCollaboratorAdded">
                    <div v-if="!selectedActions.length">
                      <div class="focus-container">+ Add action</div>
                    </div>
                    <div v-else>
                      <div class="text-primary">+ Add action</div>
                    </div>
                  </a>
                  <vs-dropdown-menu>
                    <vs-dropdown-item
                      v-for="item in triggerActions[selectedTrigger]"
                      :key="item"
                      @click="setAction(item)"
                    >
                      {{ item }}
                    </vs-dropdown-item>
                  </vs-dropdown-menu>
                </vs-dropdown>
              </div>
              <vs-button
                color="primary"
                type="filled"
                class="mt-3"
                @click="updateAutomation"
                >Submit</vs-button
              >
            </div>
            <!-- Actions END  -->
          </div>
        </div>

        <!-- Right side  -->
        <div class="w-1/2 right-sidebar">
          <div v-if="!displayActionDetails">
            <div>
              <span>TRIGGER DETAILS</span>
              <div class="mt-5">
                <label class="typo__label"
                  >Trigger type <field-required-sign
                /></label>
                <multiselect
                  v-model="selectedTrigger"
                  :disabled="disabledTriggerOption"
                  :options="triggers"
                  @select="handleSelectTrigger"
                  :showLabels="false"
                  :allowEmpty="false"
                >
                </multiselect>
                <div v-if="selectedTrigger !== triggers[4]">
                  Please select one option for this trigger.
                </div>
              </div>
            </div>
            <!-- Options  -->
            <!-- Trigger action  -->
            <div class="mt-5" v-if="selectedTrigger === triggers[0]">
              <label class="typo__label">Trigger option</label>
              <field-required-sign />
              <multiselect
                v-model="selectedTriggerOption"
                :options="triggerOptions"
                :showLabels="false"
                :hideSelected="true"
                :allowEmpty="false"
                :disabled="disabledTriggerOption"
                @select="checkTriggerOptionValidity"
              >
              </multiselect>
              <span style="color: red">{{ invalidTriggerOptionWarning }}</span>
            </div>
            <!-- 'At a scheduled time'  -->
            <div v-else-if="selectedTrigger === triggers[1]">
              <AtScheduledTimeSelector
                v-model="intervalValues"
                :timeRange="timeRange"
                ref="scheduleTimeSelector"
              />
            </div>
            <!-- 'Maintenance reminder'-->
            <div v-else-if="selectedTrigger === triggers[2]">
              <AtScheduledTimeSelector
                v-model="maintenanceReminder"
                :mode="'maintenance'"
                ref="maintenanceReminder"
                :assetsList="assetsList"
              />
            </div>
            <!-- Expiration Reminder  -->
            <ExpirationReminderSelector
              ref="expirationReminder"
              v-else-if="selectedTrigger === triggers[3]"
              v-model="expirationReminder.inAdvanceDays"
            />
          </div>

          <!-- Right Drawer Properties by action  -->
          <div v-else class="automation-properties-list">
            <div>
              <span>ACTION DETAILS</span>
              <div v-if="selectedTrigger === triggers[0]">
                <email-configuration
                  @handleExtraEmails="handleExtraEmails"
                  :getAutomationEmailList="extraEmails"
                  :triggers="triggers"
                  :trigger="selectedTrigger"
                >
                </email-configuration>
              </div>
              <div
                v-if="
                  selectedTrigger === triggers[1] ||
                  selectedTrigger === triggers[2] ||
                  selectedTrigger === triggers[3]
                "
              >
                <div
                  v-if="
                    selectedTrigger === triggers[1] ||
                    selectedTrigger === triggers[2] ||
                    selectedTrigger === triggers[3]
                  "
                >
                  <div
                    v-for="(item, index) in selectedActions"
                    :key="index"
                    v-show="isActiveAction.selectedIndex == item.selectedIndex"
                  >
                    <email-configuration
                      :scheduledData="scheduledActionsData[index]"
                      :trigger="selectedTrigger"
                      :shareUrl="shareUrl"
                      :action="item"
                      :triggers="triggers"
                      @scheduledEmailConfiguration="emailConfiguration"
                    >
                    </email-configuration>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="selectedTrigger === triggers[3] && !isActiveAction">
        <AssetsBoard
          ref="expirationReminderAssetsBoard"
          v-if="selectedTrigger === triggers[3]"
          :assetsList="assetsList"
          v-model="expirationReminder.assets"
        />
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/config/constants";
import { mapGetters } from "vuex";
export default {
  name: "AutomationSetting",
  props: [
    "transformedAutomations",
    "automationSettingParameters",
    "toggleAutomationSetting",
  ],

  data() {
    return {
      // ALERT: all these triggers, options, actions variables and code need re-written after we adding other triggers.
      triggers: [
        'When drivers click on',
        'At a scheduled time',
        'Reminder',
        'Expiration Reminder',
        'Load Collaborator Added',
      ],
      triggerOptions: [
        "All driver buttons below",
        "START LOAD",
        "ARRIVED for shipper",
        "LOADED for shipper",
        "ARRIVED at receiver",
        "UNLOADED from receiver",
        "END LOAD",
        "Upload"
      ],
      actions: [
        "Send an email to dispatcher",
        "Send an email to load collaborators",
        "Send an email to other addresses",
        "Send an email to customer",
      ],
      triggerActions: {
        "When drivers click on": [
          "Send an email to dispatcher",
          "Send an email to load collaborators",
          "Send an email to other addresses",
          "Send an email to customer",
        ],
        'At a scheduled time': ['Send an email', 'Send available trucks link'],
        Reminder: ['Send an email'],
        'Expiration Reminder': ['Send an email'],
        'Load Collaborator Added': ['Send an email'],
      },
      selectedTrigger: "",
      selectedTriggerOption: "",
      selectedActions: [],
      isActiveAction: "",
      extraEmails: [],
      invalidTriggerOptionWarning: "",
      driverPayloadKeys: [
        "driver_all_buttons",
        "driver_start_load",
        "driver_shipper_arrived",
        "driver_shipper_loaded",
        "driver_receiver_arrived",
        "driver_receiver_unloaded",
        "driver_end_load",
        "driver_upload",
      ],
      scheduledActionsData: [],
      isActiveScheduled: null,
      scheduledCounter: 0,
      scheduledResponse: {
        to: [],
        cc: [],
        bcc: [],
        fromName: "",
        replyTo: "",
        subject: "",
        content: "",
        shareUrl: "",
      },
      scheduledTime: "",
      intervalValues: null,
      timeRange: [],
      weekOnTimeOption: config.weekDays,
      monthOnTimeOption: config.monthDays,
      newScheduleObjectUpdate: null,
      oldScheduleObjectUpdate: null,
      maintenanceReminder: null,
      assetsList: null,
      expirationReminder: null,
    };
  },

  components: {
    EmailConfiguration: () => import("./components/EmailConfiguration.vue"),
    AtScheduledTimeSelector: () =>
      import("./components/AtScheduledTimeSelector.vue"),
    AssetsBoard: () => import("./components/AssetsBoard.vue"),
    ExpirationReminderSelector: () =>
      import("./components/ExpirationReminderSelector.vue"),
  },

  computed: {
    ...mapGetters("auth", ["user"]),
    disabledTriggerOption() {
      if (!this.selectedTrigger || this.automationSettingParameters.property) {
        return true;
      }
      return false;
    },
    displayActionDetails() {
      if (
        this.selectedTrigger == this.triggers[0] &&
        this.isActiveAction != this.actions[2]
      )
        return false;
      if (this.isActiveAction != "") return true;
      return false;
    },
    isLoadCollaboratorAdded() {
      return this.selectedTrigger === this.triggers[4];
    },
  },

  watch: {
    toggleAutomationSetting() {
      console.log("toggleAutomationSetting()");
      if (this.toggleAutomationSetting) {
        this.setupTriggers();
        /* Trigger asset fetch on pop up open
         *   if automationMode == reminderAutomation
         *   or automationMode == null (create automation flow)
         */
        const { property } = this.automationSettingParameters;
        if (property == "reminderAutomation" || property == null) {
          this.assignFullAssetList();
        }
      }
    },
    selectedActions() {
      if (!this.selectedActions.length) {
        this.isActiveAction = "";
      }
    },
    intervalValues(newVal) {
      const {
        intervalType,
        everyTime,
        startingTime,
        startingDate,
        selectedDays,
      } = newVal || {};
      this.newScheduleObjectUpdate = JSON.stringify(newVal);
      if (intervalType && everyTime && startingTime && startingDate) {
        if (intervalType.value !== "day" && !selectedDays.length) {
          this.scheduledTime = "";
          return;
        }
        const intervalTypeText = (
          intervalType.text ||
          intervalType.value ||
          ""
        ).toLowerCase();
        const weekOnTime = (selectedDays || []).map((item) => {
          return item.text || item.value;
        });
        const lastValueOfWeekOnTime =
          weekOnTime.length > 1 ? weekOnTime.pop() : "";
        const triggerText = `Every ${everyTime} ${intervalTypeText}${
          everyTime > 1 ? "s" : ""
        }`;
        const selectedDaysText =
          (weekOnTime.length ? ` on ${weekOnTime.join(", ")}` : "") +
          (lastValueOfWeekOnTime ? ` and ${lastValueOfWeekOnTime}` : "");
        const timeText = ` at ${startingTime ? startingTime.text : ""}`;
        this.scheduledTime = triggerText + selectedDaysText + timeText;
        return;
      }
      this.scheduledTime = "";
    },
  },
  async created() {
    // await this.disabledPreviousTime();
    this.shareLink();
    await this.getTimeRanges();
  },
  methods: {
    checkEarlyAccess(item) {
    return true;
    },
    shareLink() {
      this.$store.dispatch("loads-matching/getShareLink").then((data) => {
        this.shareUrl =
          document.location.origin +
          `/share/loads-matching/` +
          data.payload.url.split("=")[1];
      });
    },
    handleSelectTrigger() {
      if (!this.isLoadCollaboratorAdded) {
        this.selectedActions = [];
        this.scheduledActionsData = [];
      } else {
        this.selectedActions = ['Send an email'];
        this.scheduledActionsData = [];
        this.isActiveAction = '';
      }
    },
    // disabledPreviousTimeFlatpikr() {
    //   this.onUpdate();
    //   // this.disabledPreviousTime();
    // },
    // disabledPreviousTime() {
    //   if (this.startingDate) {
    //     if (this.startingDate == new Date().toISOString().slice(0, 10)) {
    //       const time = new Date().toLocaleTimeString([], {
    //         hour: "2-digit",
    //         minute: "2-digit",
    //       });
    //       const ranges = this.timeRange.filter((ele) => {
    //         if (ele.value.split(":").join("") >= time.split(":").join("")) {
    //           return ele;
    //         }
    //       });
    //       this.startingTime = ranges[0];
    //       this.timeRange = [];
    //       this.timeRange = ranges;
    //     } else {
    //       this.getTimeRanges();
    //     }
    //   }
    // },
    selectedActionClass(item) {
      if (this.selectedTrigger === this.triggers[0]) {
        if (this.isActiveAction === item) {
          return "active-action";
        }
      } else {
        if (this.isActiveAction.selectedIndex === item.selectedIndex) {
          return "active-action";
        }
      }
    },
    openTriggerOnRight() {
      this.isActiveAction = "";
    },
    closeAutomationSetting() {
      this.resetSetting();
      this.resetScheduleSetting();
      this.scheduledActionsData = [];
      this.$emit("closeAutomationSetting");
    },

    resetSetting() {
      this.selectedTrigger = "";
      this.selectedTriggerOption = "";
      this.selectedActions = [];
      this.isActiveAction = "";
      this.extraEmails = [];
      this.invalidTriggerOptionWarning = "";
    },

    handleTriggerSelected(triggerName) {
      console.log('AutomationSetting handleTriggerSelected()');
      this.resetSetting();
      if (triggerName === this.triggers[4]) {
        this.selectedActions = ['Send an email'];
      }
      this.selectedTrigger = triggerName;
    },

    handleExtraEmails(emails) {
      this.extraEmails = emails;
    },

    removeAction(index, item) {
      if (item && !item.action) {
        if (item == this.actions[2]) {
          this.extraEmails = [];
        }
      }
      if (index > -1) {
        this.selectedActions.splice(index, 1);
        this.scheduledActionsData.splice(index, 1);
      }
    },

    actionOnSelected(item) {
      if (!this.isLoadCollaboratorAdded) {
        this.isActiveAction = item;
      }
    },

    addScheduleAction(action) {
      this.scheduledCounter = this.scheduledCounter + 1;
      this.selectedActions.push({
        action: action,
        selectedIndex: this.scheduledCounter,
      });
      this.actionOnSelected({
        action: action,
        selectedIndex: this.scheduledCounter,
      });
    },

    setAction(action) {
      /* trigger[1] = schedule , trigger[2] = maintenance , trigger[3] = Expiration Reminder */
      if (
        this.selectedTrigger == this.triggers[1] ||
        this.selectedTrigger == this.triggers[2] ||
        this.selectedTrigger == this.triggers[3]
      ) {
        // use for multiple select
        this.scheduledCounter = this.scheduledCounter + 1;
        this.selectedActions.push({
          action: action,
          selectedIndex: this.scheduledCounter,
        });
        this.scheduledActionsData.push({
          id: this.scheduledCounter,
          ...this.scheduledResponse,
        });
        this.actionOnSelected({
          action: action,
          selectedIndex: this.scheduledCounter,
        });
      } else {
        if (!this.selectedActions.includes(action)) {
          this.selectedActions.push(action);
          this.actionOnSelected(action);
        }
      }
    },

    notifyErrorHelper(message) {
      this.$vs.notify({
        color: "danger",
        title: "Error",
        text: message,
      });
    },

    ValidateEmail(mail) {
      const email = mail.trim();
      const atCount = email.length - email.replaceAll("@", "").length;
      if (atCount == 1) {
        return true;
      }
      this.notifyErrorHelper("You have entered an invalid email address!");
      return false;
    },

    checkEmailEmpty(ele) {
      if (!ele || ele != "") {
        return ele;
      }
    },

    /* Email Action content validation for schedule and maintenance reminder*/
    validateEmailActionContent() {
      if (!this.scheduledActionsData.length) {
        this.notifyErrorHelper("Email address is required.");
        return false;
      }
      for (const ele of this.scheduledActionsData) {
        if (ele) {
          if (ele.replyTo) {
            const replyEmailValidation = this.ValidateEmail(ele.replyTo);
            if (!replyEmailValidation) {
              return false;
            }
          }
          const emailTo = ele.to.filter(this.checkEmailEmpty);
          const emailCC = ele.cc.filter(this.checkEmailEmpty);
          const emailBCC = ele.bcc.filter(this.checkEmailEmpty);
          for (const emails of emailTo) {
            if (emails) {
              const toEmailValidation = this.ValidateEmail(emails);
              if (!toEmailValidation) {
                return false;
              }
            }
          }
          for (const emails of emailCC) {
            if (emails) {
              const bccEmailValidation = this.ValidateEmail(emails);
              if (!bccEmailValidation) {
                return false;
              }
            }
          }
          for (const emails of emailBCC) {
            if (emails) {
              const ccEmailValidation = this.ValidateEmail(emails);
              if (!ccEmailValidation) {
                return false;
              }
            }
          }

          if (!emailTo.length && !emailCC.length && !emailBCC.length) {
            this.notifyErrorHelper("Email address is required.");
            return false;
          }
          if (ele.subject == "") {
            this.notifyErrorHelper("Subject is required.");
            return false;
          }
          if (ele.fromName == "") {
            this.notifyErrorHelper("From name is required.");
            return false;
          }
          if (ele.content == "") {
            this.notifyErrorHelper("Content is required.");
            return false;
          }
        }
      }
      return true;
    },

    scheduleValidation() {
      const {
        startingDate,
        startingTime,
        selectedDays,
        intervalType,
        scheduleAutomationId,
      } = this.intervalValues || {};

      if (!startingDate) {
        this.notifyErrorHelper("Date is required.");
        return false;
      }

      if (!startingTime) {
        this.notifyErrorHelper("Time is required.");
        return false;
      }
      if (this.oldScheduleObjectUpdate !== this.newScheduleObjectUpdate) {
        if (!scheduleAutomationId || startingDate || startingTime) {
          if (startingDate) {
            const startDateTimeValidator = new Date(
              startingDate + "T" + startingTime.value
            );
            if (startDateTimeValidator.getTime() <= new Date().getTime()) {
              this.notifyErrorHelper(
                "You have entered an invalid starting date/time!"
              );
              return false;
            }
          }
        }
      }

      if ((intervalType || {}).value !== "day" && !selectedDays.length) {
        this.notifyErrorHelper("Please select at least one day");
        return false;
      }

      const isValidEmailAction = this.validateEmailActionContent();
      if (!isValidEmailAction) {
        return false;
      }

      if (!scheduleAutomationId) {
        this.createAutomation();
        return false;
      }
      return true;
    },

    async validateScheduleSelector() {
      const { validate } = (this.$refs || {}).scheduleTimeSelector || {};
      if (validate) {
        return await this.$refs.scheduleTimeSelector.validate();
      } else {
        const {
          intervalType,
          everyTime,
          selectedDays,
          startingDate,
          startingTime,
        } = this.intervalValues || {};
        if (!intervalType) {
          this.notifyErrorHelper("Please select one interval type.");
          return false;
        }
        const interValTypeValue = (intervalType.value || "").toLowerCase();
        if (!everyTime) {
          this.notifyErrorHelper("Please enter a frequency of interval");
          return false;
        } else if (interValTypeValue === "day") {
          if (!(1 <= everyTime && everyTime <= 750)) {
            this.notifyErrorHelper(
              "Please enter a valid day interval in range 1 to 750"
            );
            return false;
          }
          if (!Number.isInteger(everyTime)) {
            /* Floating point check  */
            this.notifyErrorHelper(
              'Please enter a valid non decimal for day interval in range 1 to 750'
            );
            return false;
          }
        }
        if (!(selectedDays || []).length) {
          if (interValTypeValue === "week" || interValTypeValue === "month") {
            this.notifyErrorHelper("Please select valid days/dates");
            return false;
          }
        }
        if (!startingDate) {
          this.notifyErrorHelper("Please select a valid start date");
          return false;
        }
        if (!startingTime) {
          this.notifyErrorHelper("Please select a valid start time");
          return false;
        }
        return true;
      }
    },

    async validateMaintenanceMode() {
      /* Validate in Ui if maintenance selector is rendered*/
      const { validate } = (this.$refs || {}).maintenanceReminder || {};
      let isValidMaintenanceReminder = true;
      if (validate) {
        isValidMaintenanceReminder =
          await this.$refs.maintenanceReminder.validate();
      }
      if (!isValidMaintenanceReminder) return false;

      /* Validate action selection */
      if (this.selectedActions.length == 0) {
        this.notifyErrorHelper("Please select at least one action.");
        return false;
      }

      /* Validate action contents */
      const isValidEmailAction = this.validateEmailActionContent();
      if (!isValidEmailAction) return false;

      /* Validate the maintenance data required variables
       *   This block becomes relevant at times when maintenance selector in not in Ui
       */
      const { intervalType, maintenanceAssets, selectedDays, everyTime } =
        this.maintenanceReminder;
      if (!intervalType) {
        this.notifyErrorHelper("Please select one interval type.");
        return false;
      }
      if (!(selectedDays || []).length) {
        this.notifyErrorHelper(
          "Please select at-least one advance reminder interval"
        );
        return false;
      }
      if (!everyTime) {
        this.notifyErrorHelper("Please enter a frequency of interval");
        return false;
      } else {
        const minValueForValidation =
          Math.max(...[...selectedDays.map((x) => x.value), 1]) + 1;
        if (!(minValueForValidation <= everyTime && everyTime <= 750)) {
          this.notifyErrorHelper(
            `Please enter a valid day interval in range ${minValueForValidation} to 750`
          );
          return false;
        }
        if (!Number.isInteger(everyTime)) {
          /* Floating point check  */
          this.notifyErrorHelper(
            `Please enter a valid non decimal for day interval in range ${minValueForValidation} to 750`
          );
          return false;
        }
      }
      if (!maintenanceAssets || !maintenanceAssets.length) {
        this.notifyErrorHelper(
          "Please select at-least one truck or trailer for reminder"
        );
        return false;
      }
      if (!maintenanceAssets.every((x) => x.nextServiceAt)) {
        this.notifyErrorHelper(
          "Please select next service date for all assets selected"
        );
        return false;
      }
      return true;
    },

    async validateTriggerSelector() {
      /* Check for invalidTriggerOptionWarning */
      if (this.invalidTriggerOptionWarning) {
        this.notifyErrorHelper("Invalid trigger option.");
        return false;
      }
      /* Validate trigger option */
      if (!this.selectedTriggerOption) {
        this.notifyErrorHelper("Please select one trigger option.");
        return false;
      }
      /* Validate action selection */
      if (this.selectedActions.length == 0) {
        this.notifyErrorHelper("Please select at least one action");
        return false;
      }
      /* Validate email values entered for actions */
      if (this.selectedActions.includes(this.actions[2])) {
        for (const emails of this.extraEmails) {
          const toEmailValidation = this.ValidateEmail(emails);
          if (!toEmailValidation) {
            return false;
          }
        }
        if (!this.extraEmails.length) {
          this.notifyErrorHelper(
            "Please provide at least one email for the other addresses action."
          );
          return false;
        }
      }

      return true;
    },

    async validateExpirationReminder() {
      /* Validate in Ui if maintenance selector is rendered*/
      const { validate } = (this.$refs || {}).expirationReminder || {};
      let isValidExpirationReminder = true;
      if (validate) {
        isValidExpirationReminder =
          await this.$refs.expirationReminder.validate();
      }
      if (!isValidExpirationReminder) return false;

      /* Validate Asset selector Board */
      const { validate: assetBoardValidator } =
        (this.$refs || {}).expirationReminderAssetsBoard || {};
      let isValidAssetsList = true;
      if (assetBoardValidator) {
        isValidAssetsList =
          await this.$refs.expirationReminderAssetsBoard.validate();
      }
      if (!isValidAssetsList) return false;

      /* Validate action selection */
      if (this.selectedActions.length == 0) {
        this.notifyErrorHelper("Please select at least one action");
        return false;
      }

      /* Validate action contents */
      const isValidEmailAction = this.validateEmailActionContent();
      if (!isValidEmailAction) return false;

      /* Validate the expiration data required variables */
      const { inAdvanceDays, assets } = this.expirationReminder || {};
      /* Validate if in advance days are selected  */
      if (!(inAdvanceDays || []).length) {
        this.notifyErrorHelper(
          "Please select at-least one advance reminder interval"
        );
        return false;
      }
      /* Validate if at least one asset is selected */
      const assetKeys = Object.keys(assets || {});
      const assetListMap = assetKeys.reduce((acc, key) => {
        if (assets[key].asset) {
          acc = [...acc, ...assets[key].asset];
        }
        return acc;
      }, []);
      if (!assetListMap || !assetListMap.length) {
        this.notifyErrorHelper("Please select at-least one asset for reminder");
        return false;
      }
      /* Validate if at least one property is selected when an asset is selected */
      let hasATrueValue = false;
      Object.keys(assets).forEach((key) => {
        if (assets[key].asset && assets[key].asset.length) {
          const properties = Object.keys(assets[key]);
          const index = properties.indexOf("asset");
          properties.splice(index, 1);
          properties.forEach((property) => {
            if ((assets[key] || {})[property]) {
              hasATrueValue = true;
            }
          });
        }
      });
      if (!hasATrueValue) {
        this.notifyErrorHelper(
          "Please select at-least one property for the asset selected"
        );
        return false;
      }
      return true;
    },

    async validateSchedule() {
      if (this.selectedTrigger === this.triggers[3]) {
        /* Expiration Reminder */
        return await this.validateExpirationReminder();
      } else if (this.selectedTrigger === this.triggers[2]) {
        /* Maintenance Reminder */
        return await this.validateMaintenanceMode();
      } else if (this.selectedTrigger === this.triggers[1]) {
        return await this.validateScheduleSelector();
      } else if (this.selectedTrigger === this.triggers[4]) {
        return true;
      } else {
        // Trigger Mode
        return await this.validateTriggerSelector();
      }
    },

    async updateAutomation() {
      const isValidSchedule = await this.validateSchedule();
      if (!isValidSchedule) return;

      /* Trigger/Click Mode Action validation*/
      let payload = {};
      /* Click / Trigger automation */
      if (this.selectedTrigger == this.triggers[0]) {
        payload = this.generateClickModePayload();
      }

      /* Schedule automation */
      /* The following block of code handles Schedule mode data validation using scheduleValidation
       *  This function also decides if to use create flow or update flow.
       *  Change this to ensure the function only handles Validation and flow control is moved back to this parent function
       *  Will be better to implement payload generation as a separate function as well
       */
      if (this.selectedTrigger == this.triggers[1]) {
        const validate = await this.scheduleValidation();
        if (!validate) return;
        this.scheduledActionsData.map((item) => delete item.id);
        const {
          intervalType,
          everyTime,
          selectedDays,
          startingDate,
          startingTime,
          scheduleAutomationId,
        } = this.intervalValues || {};
        const payloadFreqType = intervalType.value.toLowerCase();
        const payloadSelectedDates =
          payloadFreqType === "day"
            ? []
            : selectedDays.map((item) => item.value);
        payload = {
          schedule: {
            id: scheduleAutomationId,
            freqType: payloadFreqType,
            freqInterval: everyTime,
            selectedDates: payloadSelectedDates,
            startDate: startingDate,
            startTime: startingTime.value,
            actions: this.scheduledActionsData,
          },
        };
      }

      /* Automation reminder */
      if (this.selectedTrigger == this.triggers[2]) {
        const { scheduleAutomationId } = this.maintenanceReminder || {};
        if (!scheduleAutomationId) {
          this.createAutomation();
          return;
        }
        payload = this.generateMaintenanceModePayload();
      }

      /* Expiration reminder */
      if (this.selectedTrigger == this.triggers[3]) {
        const { scheduleAutomationId } = this.expirationReminder || {};
        if (!scheduleAutomationId) {
          this.createAutomation();
          return;
        }
        payload = await this.generateExpirationModePayload();
      }

      if (this.selectedTrigger == this.triggers[4]) {
        payload.loadCollaboratorAddedNotification = true;
      }

      this.$store
        .dispatch("automation/updateAutomation", payload)
        .then(() => {
          this.$vs.notify({
            color: "success",
            title: "Automation Updated",
            text: "Automation Updated Successfully",
          });
          this.closeAutomationSetting();
        })
        .catch((error) => {
          this.notifyErrorHelper(error.response.data.message);
        });
    },

    generateClickModePayload() {
      let payloadKey = "";
      let payload = {};

      for (let i = 0; i < this.triggerOptions.length; ++i) {
        if (this.selectedTriggerOption.includes(this.triggerOptions[i])) {
          payloadKey = this.driverPayloadKeys[i];
          break;
        }
      }
      const extraEmails = this.extraEmails
        .filter(this.checkEmailEmpty)
        .map((ele) => ele.trim());
      const payloadValue = {
        dispatcher: this.selectedActions.includes(this.actions[0])
          ? "email"
          : "",
        collaborator: this.selectedActions.includes(this.actions[1])
          ? "email"
          : "",
        extra_emails: extraEmails,
        customer: this.selectedActions.includes(this.actions[3])
          ? "email"
          : "",
      };

      if (payloadKey == this.driverPayloadKeys[0]) {
        for (let i = 1; i < this.triggerOptions.length; ++i) {
          payload[this.driverPayloadKeys[i]] = payloadValue;
        }
      } else {
        payload[payloadKey] = payloadValue;
      }
      return payload;
    },

    generateMaintenanceModePayload() {
      const {
        intervalType,
        everyTime,
        selectedDays,
        scheduleAutomationId,
        maintenanceAssets,
      } = this.maintenanceReminder || {};
      const freqType = intervalType.value.toLowerCase();
      const inAdvance = selectedDays.map((item) => item.value);
      const assets = maintenanceAssets.map((asset) => {
        const assetPayload = {
          type: asset.type,
          originalAssetId: asset.id || asset.originalAssetId,
          nextServiceAt: asset.nextServiceAt,
        };
        if (asset.reminderAssetId)
          assetPayload.reminderAssetId = asset.reminderAssetId;
        return assetPayload;
      });
      const reminder = {
        category: "maintenance",
        freqType,
        freqInterval: everyTime,
        inAdvance,
        assets,
        actions: this.scheduledActionsData,
      };
      /* In update mode 'id' is needed */
      if (scheduleAutomationId) reminder.id = scheduleAutomationId;
      return {
        reminder,
      };
    },

    async generateExpirationModePayload() {
      const generateAssetPayload = async (assets) => {
        const typeMap = {
          Drivers: "driver",
          Trucks: "truck",
          Trailers: "trailer",
        };
        const payload = [];
        Object.keys(assets).forEach((key) => {
          if (((assets[key] || {}).asset || []).length) {
            const properties = [];
            const assetList = assets[key].asset;
            const assetKeys = Object.keys(assets[key]);
            const index = properties.indexOf("asset");
            assetKeys.splice(index, 1);
            assetKeys.forEach((assetKey) => {
              if (assets[key][assetKey]) properties.push(assetKey);
            });
            assetList.forEach((asset) => {
              payload.push({
                type: typeMap[key],
                originalAssetId: asset.id,
                fieldsToCheck: properties,
                reminderAssetId: asset.reminderAssetId || null,
              });
            });
          }
        });
        return payload;
      };
      const {
        inAdvanceDays: inAdvance,
        assets,
        scheduleAutomationId,
      } = this.expirationReminder || {};
      const assetsPayload = await generateAssetPayload(assets);
      const reminder = {
        category: "expiration",
        freqType: "expirationDate",
        inAdvance: inAdvance.map((item) => item.value),
        assets: assetsPayload,
        actions: this.scheduledActionsData,
      };
      /* In update mode 'id' is needed */
      if (scheduleAutomationId) reminder.id = scheduleAutomationId;
      return {
        reminder,
      };
    },

    async createAutomation() {
      let payload = null;
      /* Schedule Mode */
      if (this.selectedTrigger == this.triggers[1]) {
        this.scheduledActionsData.map((item) => delete item.id);
        const {
          intervalType,
          everyTime,
          selectedDays,
          startingDate,
          startingTime,
        } = this.intervalValues || {};
        const payloadFreqType = intervalType.value.toLowerCase();
        const payloadSelectedDates =
          payloadFreqType === "day"
            ? []
            : (selectedDays || []).map((item) => item.value);
        const startTime = (startingTime || {}).value || "";
        payload = {
          schedule: {
            freqType: payloadFreqType,
            freqInterval: everyTime,
            selectedDates: payloadSelectedDates,
            startDate: startingDate,
            startTime,
            actions: this.scheduledActionsData,
          },
        };
      }
      /* Maintenance Mode */
      if (this.selectedTrigger == this.triggers[2]) {
        payload = this.generateMaintenanceModePayload();
      }
      if (this.selectedTrigger == this.triggers[3]) {
        payload = await this.generateExpirationModePayload();
      }
      this.$store
        .dispatch("automation/createAutomation", payload)
        .then(() => {
          this.$vs.notify({
            color: "success",
            title: "Automation Updated",
            text: "Automation Updated Successfully",
          });
          this.resetScheduleSetting();
          this.closeAutomationSetting();
          this.scheduledActionsData = [];
        })
        .catch((error) => {
          this.notifyErrorHelper(error.response.data.message);
        });
    },

    resetScheduleSetting() {
      this.selectedTrigger = "";
      this.scheduleAutomationId = null;
      this.intervalValues = null;
      this.maintenanceReminder = null;
      this.expirationReminder = {
        inAdvanceDays: null,
        assets: {
          Trucks: {},
          Trailers: {},
          Drivers: {},
        },
      };
    },

    emailConfiguration(data) {
      if (data.actionId) {
        const index = this.scheduledActionsData.findIndex(
          (ele) => ele.actionId === data.actionId
        );
        this.$set(this.scheduledActionsData, index, data);
      }
      if (this.scheduledActionsData.some((item) => item.id === data.id)) {
        const index = this.scheduledActionsData.findIndex(
          (ele) => ele.id === data.id
        );
        this.$set(this.scheduledActionsData, index, data);
      }
    },

    // Two cases: 1) Creating a new trigger. 2) Modify existing trigger.
    setupTriggers() {
      // Existing trigger.
      console.log("setupTriggers()", this.automationSettingParameters);

      if (!this.automationSettingParameters.value) {
        this.resetSetting();
        this.resetScheduleSetting();
        return;
      }
      if (!this.automationSettingParameters.property) {
        return;
      }
      if (this.automationSettingParameters.property == "reminderAutomation") {
        const value = this.automationSettingParameters.value;
        if (value.category === "expiration") {
          this.selectedTrigger = this.triggers[3];
          const generateExpirationAssetMap = (assets) => {
            const assetMap = {
              Trucks: {},
              Trailers: {},
              Drivers: {},
            };
            const driverAssets = assets.filter(
              (asset) => asset.type === "driver"
            );
            const truckAssets = assets.filter(
              (asset) => asset.type === "truck"
            );
            const trailerAssets = assets.filter(
              (asset) => asset.type === "trailer"
            );
            const driverPropertyMap = driverAssets.length
              ? driverAssets[0].fieldsToCheck
              : [];
            const truckPropertyMap = truckAssets.length
              ? truckAssets[0].fieldsToCheck
              : [];
            const trailerPropertyMap = trailerAssets.length
              ? trailerAssets[0].fieldsToCheck
              : [];

            driverPropertyMap.forEach((property) => {
              assetMap.Drivers[property] = true;
            });
            assetMap.Drivers.asset = driverAssets.map((x) => {
              return {
                id: x.originalAssetId,
                name: x.name || null,
                reminderAssetId: x.reminderAssetId,
              };
            });

            truckPropertyMap.forEach((property) => {
              assetMap.Trucks[property] = true;
            });
            assetMap.Trucks.asset = truckAssets.map((x) => {
              return {
                id: x.originalAssetId,
                name: x.name || null,
                reminderAssetId: x.reminderAssetId,
              };
            });

            trailerPropertyMap.forEach((property) => {
              assetMap.Trailers[property] = true;
            });
            assetMap.Trailers.asset = trailerAssets.map((x) => {
              return {
                id: x.originalAssetId,
                name: x.name || null,
                reminderAssetId: x.reminderAssetId,
              };
            });
            return assetMap;
          };
          if (!this.expirationReminder) this.expirationReminder = {};
          this.expirationReminder.scheduleAutomationId = value.id;
          this.expirationReminder.category = value.category || "expiration";
          this.expirationReminder.inAdvanceDays = value.inAdvance
            .split(",")
            .map((ele) => {
              return {
                value: ele,
                text: ele,
              };
            });
          this.expirationReminder.assets = generateExpirationAssetMap(
            value.assets
          );
          /* Binding Actions Data of expiry*/
          this.scheduledActionsData = value.actions;
          this.$nextTick(() => {
            value.actions.forEach((item) => {
              if (item.actionType == "email") {
                this.addScheduleAction("Send an email");
              }
            });
          });
        } else if (value.category === "maintenance") {
          this.selectedTrigger = this.triggers[2];
          if (!this.maintenanceReminder) this.maintenanceReminder = {};
          this.maintenanceReminder.intervalType = { value: value.freqType };
          this.maintenanceReminder.everyTime = value.freqInterval;
          this.maintenanceReminder.scheduleAutomationId = value.id;
          this.maintenanceReminder.selectedDays = value.inAdvance
            .split(",")
            .map((ele) => {
              return {
                value: ele,
                text: ele,
              };
            });
          this.maintenanceReminder.category = value.category || "maintenance";
          this.maintenanceReminder.maintenanceAssets = value.assets || [];
          /* Binding Actions Data of maintenance*/
          this.scheduledActionsData = value.actions;
          this.$nextTick(() => {
            value.actions.forEach((item) => {
              if (item.actionType == "email") {
                this.addScheduleAction("Send an email");
              }
            });
            this.oldScheduleObjectUpdate = JSON.stringify(this.intervalValues);
          });
        }
      } else if (this.automationSettingParameters.property == "schedulesTime") {
        const value = this.automationSettingParameters.value;
        this.selectedTrigger = this.triggers[1];
        if (!this.intervalValues) this.intervalValues = {};
        this.intervalValues.intervalType = { value: value.freqType };
        this.intervalValues.everyTime = value.freqInterval;
        this.intervalValues.scheduleAutomationId = value.id;
        const isMonth = value.freqType === "month";
        const selectorOption = isMonth
          ? this.monthOnTimeOption
          : this.weekOnTimeOption;
        this.intervalValues.selectedDays = value.selectedDates.map((ele) => {
          /** ele - 1 for month since month mapping starts from val = 1 , but week starts from val = 0 */
          return isMonth ? selectorOption[ele - 1] : selectorOption[ele];
        });

        const [startTime] = this.timeRange.filter((ele) => {
          const time = value.startTime.split(":");
          if (ele.value == time[0] + ":" + time[1]) {
            return ele;
          }
        });
        this.intervalValues.startingTime = startTime;
        this.intervalValues.startingDate = value.startDate;

        this.scheduledActionsData = value.actions;
        this.$nextTick(() => {
          value.actions.forEach((item) => {
            if (item.actionType == "emailAvailableTrucks") {
              this.addScheduleAction("Send available trucks link");
            } else {
              this.addScheduleAction("Send an email");
            }
          });
          this.oldScheduleObjectUpdate = JSON.stringify(this.intervalValues);
        });
      } 
      else if(this.automationSettingParameters.property === 'loadNotificationAutomation'){
        this.selectedTrigger = this.triggers[4];
        this.selectedActions = ['Send an email'];
      }
      else {
        this.selectedTrigger = this.triggers[0];
        for (let i = 0; i < this.driverPayloadKeys.length; ++i) {
          if (
            this.automationSettingParameters.property ==
            this.driverPayloadKeys[i]
          ) {
            this.selectedTriggerOption = this.triggerOptions[i];
            break;
          }
        }
        if (this.automationSettingParameters.value.dispatcher == "email") {
          this.setAction(this.actions[0]);
        }
        if (this.automationSettingParameters.value.collaborator == "email") {
          this.setAction(this.actions[1]);
        }
        if (this.automationSettingParameters.value.customer == "email") {
          this.setAction(this.actions[3]);
        }
        if (this.automationSettingParameters.value.extra_emails.length > 0) {
          this.setAction(this.actions[2]);
          this.extraEmails =
            this.automationSettingParameters.value.extra_emails;
        }
      }
    },

    checkTriggerOptionValidity(option) {
      this.invalidTriggerOptionWarning = "";

      // No existing triggers.
      if (Object.keys(this.transformedAutomations).length == 0) {
        return;
      }

      let optionPlayloadKey = "";
      for (let i = 0; i < this.triggerOptions.length; ++i) {
        if (option == this.triggerOptions[i]) {
          optionPlayloadKey = this.driverPayloadKeys[i];
          break;
        }
      }

      if (!this.automationSettingParameters.property) {
        // If creating a new trigger, should not select existing trigger option.
        if (Object.hasOwn(this.transformedAutomations, "driver_all_buttons")) {
          this.invalidTriggerOptionWarning =
            "A trigger for all driver buttons has already been created. Please modify or delete that trigger first.";
        } else if (
          Object.hasOwn(this.transformedAutomations, optionPlayloadKey)
        ) {
          this.invalidTriggerOptionWarning =
            "A trigger for this option has already been created. Please modify that trigger.";
        } else if (optionPlayloadKey == "driver_all_buttons") {
          this.invalidTriggerOptionWarning =
            "A trigger for one specific driver button has already been created. Please delete that trigger first.";
        }
      } else {
        // Editing existing trigger.
        if (this.automationSettingParameters.property != optionPlayloadKey) {
          this.invalidTriggerOptionWarning =
            "Changing existing trigger option is not allowed.";
        }
        /*if (Object.hasOwn(this.transformedAutomations, "driver_all_buttons")) {
          // We are guaranteed that user is editing driver_all_buttons.
          if (optionPlayloadKey != "driver_all_buttons") {
            this.invalidTriggerOptionWarning =
              "A trigger for all driver buttons has already been created. Please modify or delete that trigger first.";
          }
        } else if (
          // Modify one
          Object.hasOwn(this.transformedAutomations, optionPlayloadKey) &&
          this.automationSettingParameters.property != optionPlayloadKey
        ) {
          this.invalidTriggerOptionWarning =
            "A trigger for this option has already been created. Please modify that trigger.";
        } else if (optionPlayloadKey == "driver_all_buttons") {
          this.invalidTriggerOptionWarning =
            "A trigger for one specific driver button has already been created. Please delete that trigger first.";
        }*/
      }
    },

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

    async assignFullAssetList() {
      const { trailers: trailerList, trucks: trucksList } =
        await this.getAllVehicles();
      const allDrivers = await this.getAllDrivers();
      this.assetsList = {
        trucksList,
        trailerList,
        allDrivers,
      };
      return this.assetsList;
    },

    async getAllVehicles() {
      const {
        data: {
          payload: { trucks, trailers },
        },
      } = await this.$store.dispatch("vehicleV2/fetchAllVehicles");
      return { trailers, trucks };
    },

    async getAllDrivers() {
      try {
        const data =
          (await this.$store.dispatch("driverV2/getAllDrivers")) || {};
        this.driversList = data;
        return data;
      } catch (e) {
        throw e;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
div.indent {
  text-indent: 50px;
}

.trigger-name {
  font-size: 15px;
  padding: 7px;
  font-weight: 500;
}

.focus-container {
  border: 2px dashed rgb(204, 204, 204);
  padding: 1.5rem;
  width: 300px;
  cursor: pointer;
}

.automation-card-container {
  padding: 1rem;
  background: #fff;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  max-width: 60%;
  cursor: pointer;
}

.right-sidebar {
  background: #fff;
  padding: 2rem;
  border: 1px solid hsl(0, 0%, 88%);
}

.empty-trigger {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
}

.card-list {
  background: #fff;
  padding: 1rem;
  box-shadow: 0px 0px 3px #ccc;
  border-radius: 3px;
  max-width: 300px;
  margin-block: 1rem;
  cursor: pointer;
}

.selected-action-list {
  border: 1px solid #ccc;
  padding: 1.2rem;
  border-radius: 3px;
  margin-block: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    text-transform: capitalize;
    font-weight: 500;
    color: rgb(77, 77, 77);
  }
}

.active {
  display: block !important;
}

.automation-properties-list .automation-properties-item {
  display: none;
}

.active-action {
  border: 2px solid rgb(115, 103, 240);
}

.runActions {
  overflow: auto;
  height: 300px;
}
</style>
