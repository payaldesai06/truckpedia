<template>
  <div class="mt-6 vx-row space-y-4">
    <div class="p-6 vx-row space-y-4 scroll-area--data-list-add-new">
      <div class="vx-col w-full">
        <div class="flex items-center flex-col sm:flex-row">
          <vs-avatar
            :src="logoImageUrl"
            size="64px"
            class="mb-4 sm:mb-0 sm:mr-4"
          />

          <div>
            <input
              type="file"
              class="hidden"
              ref="updateTagImageInput"
              @change="updateTagImage"
              accept="image/*"
            />

            <vs-button
              type="border"
              class="mr-4"
              @click="$refs.updateTagImageInput.click()"
            >
              Upload Photo
            </vs-button>

            <vs-button type="flat" color="danger" @click="resetTagImage">
              Remove
            </vs-button>
          </div>
        </div>
      </div>
      <!-- use tag for billing starts here  -->
      <div class="vx-col w-full">
        <label class="text-lg">
          Which company billing info would you like to display on the invoices?
          <field-required-sign /> </label
        ><br />

        <ul class="flex items-center space-x-2 mt-2">
          <li>
            <vs-radio
              vs-name="tag.use_tag_for_billing"
              vs-value="true"
              v-model="tag.use_tag_for_billing"
            >
              This tag company
            </vs-radio>
          </li>
          <li>
            <vs-radio
              vs-name="tag.use_tag_for_billing"
              vs-value="false"
              v-model="tag.use_tag_for_billing"
            >
              Parent company
            </vs-radio>
          </li>
        </ul>
      </div>
      <!-- use tag for billing ends here  -->

      <!-- invoice sync cascade starts here -->
      <div class="vx-col w-full">
        <label class="text-lg">
          Would you like to sync invoices to parent company's QuickBooks account
          when this tag is not connected to QuickBooks?
          <field-required-sign /> </label
        ><br />

        <ul class="flex items-center space-x-2 mt-2">
          <li>
            <vs-radio
              vs-name="tag.invoice_sync_cascade"
              v-model="tag.invoice_sync_cascade"
              vs-value="true"
            >
              Yes
            </vs-radio>
          </li>
          <li>
            <vs-radio
              vs-name="tag.invoice_sync_cascade"
              v-model="tag.invoice_sync_cascade"
              vs-value="false"
            >
              No
            </vs-radio>
          </li>
        </ul>
      </div>
      <!-- invoice sync cascade ends here  -->

      <div class="vx-col w-full">
        <label class="text-xs">
          Business name
          <field-required-sign />
        </label>

        <vs-input
          type="text"
          name="business_name"
          v-model="tag.business_name"
          class="w-full"
        />
      </div>

      <div class="vx-col w-full">
        <label class="text-xs"> Type </label>
        <v-select
          :options="options"
          v-model="tag.type"
          :reduce="(x) => x.value"
          label="text"
        ></v-select>
      </div>

      <div class="vx-col w-full">
        <label class="text-xs">
          Email
          <field-required-sign />
        </label>

        <vs-input
          type="email"
          name="email"
          v-model.trim="tag.email"
          class="w-full"
        />
      </div>

      <div class="vx-col w-full">
        <label class="text-xs">Billing CC Emails </label>

        <vs-input
          v-model="tag.ccEmail"
          class="w-full"
          @keypress.space.prevent
        />
        <p class="small text-xs">Separate multiple emails with commas</p>
      </div>

      <div class="vx-col w-full">
        <label class="text-xs">
          Address
          <field-required-sign />
        </label>

        <vs-input
          type="text"
          name="address"
          v-model.trim="tag.address"
          class="w-full"
        />
      </div>

      <div class="vx-col w-full">
        <label class="text-xs">
          City
          <field-required-sign />
        </label>

        <vs-input
          type="text"
          name="city"
          v-model.trim="tag.city"
          class="w-full"
        />
      </div>

      <div class="vx-col w-full">
        <label class="text-xs">
          State
          <field-required-sign />
        </label>

        <vs-input
          type="text"
          name="state"
          v-model.trim="tag.state"
          class="w-full"
        />
      </div>

      <div class="vx-col w-full">
        <label class="text-xs">
          Zipcode
          <field-required-sign />
        </label>

        <vs-input
          type="text"
          name="zipcode"
          v-model.trim="tag.zipcode"
          class="w-full"
        />
      </div>

      <div class="vx-col w-full">
        <label class="text-xs">
          Load id start from
          <field-required-sign />
        </label>

        <vs-input
          type="number"
          name="load_unique_id_started_from"
          v-model.trim="tag.load_unique_id_started_from"
          class="w-full"
        />
      </div>

      <div class="vx-col w-full">
        <label class="text-xs"> Phone number </label>

        <vs-input
          type="text"
          name="phone_number"
          v-model.trim="tag.phone_number"
          class="w-full"
        />
      </div>

      <div class="vx-col w-full">
        <label class="text-xs"> US dot number </label>
        <vs-input
          type="text"
          name="usdot_number"
          v-model.trim="tag.usdot_number"
          class="w-full"
        />
      </div>

      <div class="vx-col w-full" v-if="showTagNumberPrefix">
        <label class="text-xs"> Number prefix </label>
        <vs-input
          type="text"
          name="numberPrefix"
          v-model.trim="tag.numberPrefix"
          class="w-full"
        />
      </div>

      <!-- /** DISABLED AS WE ARE NOT USING driverTemplateId FOR NOW */ -->
      <!-- <div class="vx-col w-full">
        <label class="text-xs">
          Driver Pay Templates
        </label>
        <v-select
        :options="driverPayTemplatesOptions"
        :reduce="(x) => x.id"
        v-model="tag.driverPayTemplateId"
        label="name"></v-select>
      </div> -->

      <!--Only show it for 2 companies. Put the company id arrays in constant.js.-->
      <div
        class="vx-col w-full"
        v-if="tag.type == 'ownerOperator' && hasPayToCodeAccess"
      >
        <label class="text-xs">Pay To Code</label>
        <vs-input
          v-model="tag.pay_to_code"
          class="w-full"
          @keypress.space.prevent
        />
      </div>

      <div class="vx-col w-full" v-if="tag.type == 'ownerOperator'">
        <div class="flex justify-content-between">
          <label class="text-xs"> Driver Pay Templates </label>
        </div>
        <section>
          <DriverPayTemplateBlock
            v-model="tag.driverPayTemplate"
            :hideName="true"
            :hideHeader="true"
          />
          <vs-divider class="mb-0"></vs-divider>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import config from "@/config/constants";

export default {
  name: "TagInformation",

  props: {
    tag: {
      type: Object,
      required: true,
    },

    isEditMode: {
      type: Boolean,
      default: false,
    },
  },

  components: {
    DriverPayTemplateBlock: () =>
      import(
        "@/views/pages/account-settings/company/driver-pay-templates/components/DriverPayTemplateBlock"
      ),
  },

  data() {
    return {
      options: [
        { text: "Subsidiary", value: "subsidiary" },
        { text: "Terminal", value: "terminal" },
        { text: "Owner Operator", value: "ownerOperator" },
      ],
      logoImageUrl: null,
      // driverPayTemplatesOptions: [] /** DISABLED AS WE ARE NOT USING driverTemplateId FOR NOW */
    };
  },

  computed: {
    ...mapGetters("auth", ["user"]),
    hasPayToCodeAccess() {
      const { admin_company_detail_id } =
        (this.user || {}).admin_company_details || {};
      if (admin_company_detail_id) {
        return config.companiesWithPayToCodeNDefaultGLAccountAccess.includes(
          Number(admin_company_detail_id)
        );
      }
      return false;
    },
    showTagNumberPrefix() {
      return this.user.admin_company_detail_id && config.showTagNumberPrefix.includes(
        this.user.admin_company_detail_id
      );
    },
  },

  mounted() {
    //  this.commonApiCall(); /** DISABLED AS WE ARE NOT USING driverTemplateId FOR NOW */
  },

  methods: {
    /** DISABLED AS WE ARE NOT USING driverTemplateId FOR NOW */
    // async commonApiCall() {
    //   await this.$store
    //     .dispatch("driverPayTemplates/getDriverPayTemplates")
    //     .then((data) => {
    //       this.driverPayTemplatesOptions = data.templates;
    //     })
    // },
    updateTagImage(event) {
      if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();

        reader.onload = (e) => {
          this.logoImageUrl = e.target.result;
        };
        reader.readAsDataURL(event.target.files[0]);
      }
      this.$emit("updateTagImage", event);
    },
    resetTagImage() {
      this.$refs.updateTagImageInput.value = "";
      this.logoImageUrl = null;
      this.$emit("resetTagImage");
    },
  },
};
</script>
