<template>
  <div class="mt-3">
    <b>Action will run...</b>

    <div class="email-config">
      <div class="mt-4 my-3">
        <label v-if="trigger === triggers[0]">Add extra emails</label>
        <label v-else class="my-4">To</label>
        <p class="small text-xs">Separate multiple emails with commas</p>
        <vs-input v-model="emailTo" class="w-full" />
        <div v-if="trigger == triggers[1] || trigger == triggers[2] || trigger == triggers[3]">
          <vs-collapse>
            <vs-collapse-item class="p-0">
              <div slot="header" class="p-0 m-0">
                <span class="text-sm">Show more options</span>
              </div>
              <div class="mt-3">
                <label class="my-4">CC</label>
                <p class="small text-xs">
                  Separate multiple emails with commas
                </p>
                <vs-input v-model="emailCC" class="w-full" />
              </div>

              <div class="mt-3">
                <label class="my-4">BCC</label>
                <p class="small text-xs">
                  Separate multiple emails with commas
                </p>
                <vs-input v-model="emailBCC" class="w-full" />
              </div>

              <div class="mt-3">
                <label class="my-4">From name</label>
                <div>
                  <vs-input
                    v-model="fromName"
                    @input="sendDataToParent"
                    class="w-full"
                  />
                </div>
              </div>

              <div class="mt-3">
                <label class="my-4">Reply to</label>
                <div>
                  <vs-input
                    v-model="replyTo"
                    @input="sendDataToParent"
                    class="w-full"
                  />
                </div>
              </div>
            </vs-collapse-item>
          </vs-collapse>

          <div class="mt-3">
            <label class="my-4">Subject</label>
            <vs-input class="w-full" v-model="subject" />
          </div>

          <div class="mt-3">
            <label class="my-4">Content</label>

            <vue-editor
              v-model="content"
              :editorToolbar="customToolbar"
            ></vue-editor>
            <blockquote v-if="trigger == triggers[2]" class="mt-5">
              <strong> NOTE: </strong>
               “Asset numbers and service dates will be automatically appended at the end of the email”
            </blockquote>
            <blockquote v-if="trigger == triggers[3]" class="mt-5">
              <strong> NOTE: </strong>
               “Asset details will be appended at the end of the email”
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { mapGetters } from "vuex";

export default {
  name: "EmailConfiguration",
  props: {
    getAutomationEmailList: Array,
    trigger: {
      type: String,
    },
    action: {
      required: false,
    },
    scheduledData: {
      required: false,
    },
    shareUrl: {
      type: String,
      required: false,
    },
    triggers: {
      required: true,
      type: Array
    }
  },
  components: {
    VueEditor,
  },
  data() {
    return {
      emailChips: [],
      content: "",
      customToolbar: [
        [{ font: [] }],

        [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        ["bold", "italic", "underline"],
        // [
        //   { align: "" },
        //   { align: "center" },
        //   { align: "right" },
        //   { align: "justify" },
        // ],

        // ["blockquote"],

        [{ list: "ordered" }, { list: "bullet" }],

        // [{ indent: "-1" }, { indent: "+1" }],

        [{ color: [] }, { background: [] }],

        ["link"],
      ],

      fromName: "",
      replyTo: "",
      cc: [],
      bcc: [],
      subject: "",
      actionId: null,
      emailTo: "",
      emailCC: "",
      emailBCC: "",
    };
  },
  computed: {
    ...mapGetters("auth", ["userRole", "user"]),
  },
  created() {
    if (this.trigger == this.triggers[1] || this.trigger == this.triggers[2] || this.trigger == this.triggers[3]) {
      this.setAvailableData();
    }
    if (this.trigger == this.triggers[0]) {
      this.emailTo = this.getAutomationEmailList.join(",");
    }
  },

  watch: {
    scheduledData: {
      handler() {
        this.setEmailData();
      },
      immediate: true,
      deep: true,
    },
    emailTo() {
      if (this.trigger === this.triggers[0]) {
        this.$emit(
          "handleExtraEmails",
          this.emailTo.split(",").map((ele) => ele.trim())
        );
      }
    },
    getAutomationEmailList: function (emails) {
      if (this.trigger === this.triggers[0]) {
        this.emailTo = emails.join(",");
      }
    },
  },
  methods: {
    setAvailableData() {
      this.replyTo = this.user.admin_company_details.email;
      this.fromName = this.user.admin_company_details.business_name;
      if (this.action.action != "Send an email") {
        this.subject = `Available Trucks From ${this.user.admin_company_details.business_name}`;
        this.content = `Hi,<br/> <span>Please click <a href="${this.shareUrl}">here</a> to view our company's available trucks.</span> <br/> ${this.user.admin_company_details.business_name}`;
      }
      this.setEmailData();
    },
    setEmailData() {
      if (this.scheduledData && Object.keys(this.scheduledData).length) {
        if (
          this.scheduledData.cc.length ||
          this.scheduledData.bcc.length ||
          this.scheduledData.to.length
        ) {
          this.subject = this.scheduledData.subject;
          this.content = this.scheduledData.content;
          this.emailCC = this.scheduledData.cc.join(",");
          this.emailBCC = this.scheduledData.bcc.join(",");
          this.emailTo = this.scheduledData.to.join(",");
          this.actionId = this.scheduledData.actionId;
          this.replyTo = this.scheduledData.replyTo;
          this.fromName = this.scheduledData.fromName;
        }
      }

      if (!this.subject && this.trigger == this.triggers[2]) {
        /* Maintenance Mode */
        this.subject = `Reminder`;
      }
      if (!this.subject && this.trigger == this.triggers[3]) {
        /* Maintenance Mode */
        this.subject = `Expiration Reminder`;
      }
    },
    sendDataToParent() {
      if (this.trigger == this.triggers[1] || this.trigger == this.triggers[2] || this.trigger == this.triggers[3]) {
        this.$emit("scheduledEmailConfiguration", {
          id: this.action.selectedIndex,
          actionType:
            this.action.action == "Send an email"
              ? "email"
              : "emailAvailableTrucks",
          to: this.emailTo.split(",").map((ele) => ele.trim()),
          cc: this.emailCC.split(",").map((ele) => ele.trim()),
          bcc: this.emailBCC.split(",").map((ele) => ele.trim()),
          fromName: this.fromName,
          replyTo: this.replyTo ? this.replyTo.trim() : null,
          subject: this.subject,
          content: this.content,
          actionId: this.actionId,
        });
      }
    },
  },
  updated() {
    this.sendDataToParent();
  },
};
</script>

<style lang="scss">
.email-config {
  overflow: auto;
  height: 70vh;

  .con-chips {
    box-shadow: none !important;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 0;

    .con-vs-chip {
      margin: 6px 3px;
    }
  }

  input {
    width: 100%;
  }
}

.vs-collapse-item--header {
  padding: 0;
}
</style>
