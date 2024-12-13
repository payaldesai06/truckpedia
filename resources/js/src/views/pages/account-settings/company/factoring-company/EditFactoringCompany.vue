<template>
  <vs-sidebar
    click-not-close
    position-right
    parent="body"
    default-index="1"
    color="primary"
    class="add-new-data-sidebar items-no-padding"
    spacer
    v-model="isSidebarActiveLocal"
  >
    <div class="mt-6 flex items-center justify-between px-6">
      <h4>Edit Factoring Company</h4>

      <feather-icon
        icon="XIcon"
        @click.stop="isSidebarActiveLocal = false"
        class="cursor-pointer"
      ></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <div class="p-6">
        <factoring-company-information
          :factoringCompany.sync="factoringCompany"
          :isEditMode="true"
        ></factoring-company-information>
      </div>

    <div class="flex flex-wrap items-center p-6 space-x-2" slot="footer">
      <vs-button type="filled" color="primary" @click="submit"
        >Submit</vs-button
      >
      <vs-button
        type="border"
        color="danger"
        @click="isSidebarActiveLocal = false"
        >Cancel</vs-button
      >
    </div>
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import FactoringCompanyInformation from "./FactoringCompanyInformation.vue";

export default {
  name: "EditFactoringCompany",
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
    VuePerfectScrollbar,
    FactoringCompanyInformation,
  },
  data() {
    return {
      factoringCompany: {
        name: "",
        billing_email: "",
        phone_number: "",
        state: "",
        zip_code: "",
        city: "",
        address: "",
        factoring_fee_fractional: "",
        request_payment_merge_pdfs: "",
      },
    };
  },
  created() {
    this.initValues();
  },
  computed: {
    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive;
      },
      set(val) {
        if (!val) {
          this.$emit("closeSidebar");
        }
      },
    },
  },
  watch: {
    isSidebarActive(val) {
      if (!val) return;
      if (Object.entries(this.data).length === 0) {
        this.initValues();
        this.$validator.reset();
      } else {
        this.initValues();
        this.$validator.reset();
      }
    },
  },
  methods: {
    initValues(data = {}) {
      const factoringCompany = this.data.id ? this.data : data;
      let factoring_fee_fractional = factoringCompany.factoring_fee_fractional;
      if (factoring_fee_fractional) {
        factoring_fee_fractional = factoring_fee_fractional * 100;
      }
      this.factoringCompany = {
        address: factoringCompany.address,
        name: factoringCompany.name,
        billing_email: factoringCompany.billing_email,
        phone_number: factoringCompany.phone_number,
        city: factoringCompany.city,
        state: factoringCompany.state,
        zip_code: factoringCompany.zip_code,
        factoring_fee_fractional: factoring_fee_fractional,
        request_payment_merge_pdfs: factoringCompany.request_payment_merge_pdfs,
        integrationPartner: factoringCompany.integrationPartner,
      };
    },
    closeSidebar() {
      this.$emit("closeSidebar");
      this.initValues();
    },
    async submit() {
      if (
        this.factoringCompany.factoring_fee_fractional &&
        (this.factoringCompany.factoring_fee_fractional > 100 ||
          this.factoringCompany.factoring_fee_fractional < 0)
      ) {
        return this.$vs.notify({
          color: "danger",
          title: "Error",
          text: "Invalid Factoring Fee. Please enter value between 0 to 100.",
        });
      }

      this.$vs.loading();

      let factoring_fee_fractional =
        this.factoringCompany.factoring_fee_fractional;
      if (factoring_fee_fractional || factoring_fee_fractional === 0) {
        factoring_fee_fractional = factoring_fee_fractional / 100;
      }

      const payload = {
        name: this.factoringCompany.name,
        billing_email: this.factoringCompany.billing_email,
        phone_number: this.factoringCompany.phone_number,
        state: this.factoringCompany.state,
        zip_code: this.factoringCompany.zip_code,
        city: this.factoringCompany.city,
        address: this.factoringCompany.address,
        id: this.data.id,
        factoring_fee_fractional: factoring_fee_fractional,
        request_payment_merge_pdfs:
          this.factoringCompany.request_payment_merge_pdfs == true ? 1 : null,
        integrationPartner: this.factoringCompany.integrationPartner
      };

      try {
        // store in db
        await this.$store.dispatch(
          "factoring-company/updateFactoringCompany",
          payload
        );
        await this.closeSidebar();
        await this.$emit("factoringCompany:updated");
        await this.$vs.notify({
          color: "primary",
          title: "Factoring Company Updated",
          text: "Factoring company updated successfully.",
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
.add-new-data-sidebar {
  ::v-deep .vs-sidebar--background {
    z-index: 50000;
  }
  ::v-deep .vs-sidebar {
    z-index: 50000;
    width: 55vw;
    max-width: 90vw;
  }
}
</style>
