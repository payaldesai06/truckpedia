<template>
  <vs-sidebar
    click-not-close
    position-right
    parent="body"
    default-index="1"
    color="primary"
    class="add-new-data-sidebar items-no-padding"
    spacer
    :value="isSidebarActive"
  >
    <div class="mt-6 flex items-center justify-between px-6">
      <h4>Create a New Tag</h4>

      <feather-icon
        icon="XIcon"
        @click.stop="closeSidebar"
        class="cursor-pointer"
      ></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <component
      :is="scrollbarTag"
      class="scroll-area--data-list-add-new"
      :settings="settings"
      :key="$vs.rtl"
    >
      <div class="p-6 h-full">
        <tag-information
          ref="tagInformationSection"
          :tag.sync="tag"
          @updateTagImage="updateTagImage"
          @resetTagImage="resetTagImage"
        ></tag-information>
      </div>
    </component>

    <div class="flex flex-wrap items-center p-6 space-x-2" slot="footer">
      <vs-button type="filled" color="primary" @click="submit"
        >Submit</vs-button
      >
      <vs-button type="border" color="danger" @click="closeSidebar"
        >Cancel</vs-button
      >
    </div>
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import CloseSidebarMixin from "@/mixins/closeSidebarMixin";
import TagInformation from "./TagInformation";
import { validateEmail, resizeImage } from "@/helpers/helper";
export default {
  name: "AddTag",

  mixins: [CloseSidebarMixin],

  props: {
    isSidebarActive: {
      type: Boolean,
      required: true,
    },
    data: {
      type: Object,
      default: () => {},
    },
  },

  components: {
    TagInformation,
    VuePerfectScrollbar,
  },

  data() {
    return {
      tag: {
        business_name: "",
        email: "",
        phone_number: "",
        state: "",
        zipcode: "",
        city: "",
        address: "",
        usdot_number: "",
        load_unique_id_started_from: "",
        use_tag_for_billing: "",
        invoice_sync_cascade: "",
        ccEmail: "",
        driverPayTemplate: {
          loadDetails: null,
          tripDetails: null,
        },
        logoImageUrl: "",
        logoImageStorageFileName: "",
        numberPrefix: null,
      },
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },
      tagImage: "",
      
    };
  },

  computed: {
    // isSidebarActiveLocal: {
    //   get() {
    //     return this.isSidebarActive;
    //   },
    //   set(val) {
    //     if (!val) {
    //       this.$emit("closeSidebar");
    //     }
    //   },
    // },
    scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },
  },

  methods: {
    initValues() {
      this.tag = {
        business_name: "",
        email: "",
        phone_number: "",
        state: "",
        zipcode: "",
        city: "",
        address: "",
        usdot_number: "",
        load_unique_id_started_from: "",
        use_tag_for_billing: "",
        invoice_sync_cascade: "",
        ccEmail: "",
        type: "",
        pay_to_code: "",
        // driverPayTemplateId: "",
        driverPayTemplate: {
          loadDetails: null,
          tripDetails: null,
        },
        logoImageUrl: "",
        logoImageStorageFileName: "",
        numberPrefix: null,
      };

      this.resetTagImage();
      if (this.$refs.tagInformationSection) {
        this.$refs.tagInformationSection.logoImageUrl = "";
      }
    },

    closeSidebar() {
      this.$emit("closeSidebar");
      this.initValues();
    },

    async submit() {
      if (this.tag.ccEmail) {
        for (const item of this.tag.ccEmail.split(",")) {
          const validte = await validateEmail(item);
          if (!validte) {
            this.$vs.notify({
              color: "danger",
              title: "Error",
              text: "You have entered an invalid email address!",
            });
            return;
          }
        }
      }

      this.$vs.loading();

      let payload = {
        business_name: this.tag.business_name,
        email: this.tag.email,
        phone_number: this.tag.phone_number,
        state: this.tag.state,
        zipcode: this.tag.zipcode,
        city: this.tag.city,
        address: this.tag.address,
        usdot_number: this.tag.usdot_number,
        load_unique_id_started_from: this.tag.load_unique_id_started_from,
        use_tag_for_billing:
          this.tag.use_tag_for_billing === "true" ? true : false,
        invoice_sync_cascade:
          this.tag.invoice_sync_cascade === "true" ? true : false,
        billing_cc_emails: this.tag.ccEmail
          .split(",")
          .map((ele) => ele.trim())
          .filter(Boolean),
        pay_to_code: this.tag.pay_to_code,
        type: this.tag.type,
        logoImageStorageFileName: this.tag.logoImageStorageFileName,
        numberPrefix: this.tag.numberPrefix,
      };

      if (payload.type == "ownerOperator") {
        payload.driverPayTemplate = {
          loadDetails: (
            (this.tag.driverPayTemplate || {}).loadDetails || []
          ).map((load) => ({ ...load, fieldId: load.id })),
          tripDetails: (
            (this.tag.driverPayTemplate || {}).tripDetails || []
          ).map((trip) => ({ ...trip, fieldId: trip.id })),
        };
      }

      try {
        if (this.tagImage) {
          const extension = this.tagImage.name.split(".").pop();
          const {
            data: {
              payload: { storageFileName, url },
            },
          } = await this.$store.dispatch("tag/getUploadURL", {
            extension,
            type: "logo",
          });

          if (storageFileName && url) {
            const { status } = await this.$store.dispatch(
              "uploadFileToS3ViaPresignedUrl",
              {
                url,
                file: this.tagImage,
                extension: extension,
              }
            );

            if (status === 200) {
              payload.logoImageStorageFileName = storageFileName;
            }
          }
        }

        // store in db
        await this.$store.dispatch("tag/createTag", payload);

        await this.$emit("tag:added");

        await this.closeSidebar();

        await this.$vs.notify({
          color: "primary",
          title: "Tag Added",
          text: "Tag added successfully.",
        });
      } catch (error) {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message,
        });
      } finally {
        this.$vs.loading.close();
      }
    },
    updateTagImage(event) {
      if (event.target.files && event.target.files[0]) {
        resizeImage(event.target.files[0], (result) => {
          this.tagImage = result
        });
      }
    },
    resetTagImage() {
      this.tagImage = "";
      this.tag.logoImageStorageFileName = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@sass/custom/sidebar.scss";

::v-deep {
  .con-slot-tabs {
    min-height: 250px;
  }
}
</style>
