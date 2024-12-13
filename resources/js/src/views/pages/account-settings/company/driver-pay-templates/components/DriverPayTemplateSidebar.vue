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
    <DriverPayTemplateBlock
      v-if="isSidebarActiveLocal"
      ref="driverPayTemplateBlock"
      :data="sidebarData"
    ></DriverPayTemplateBlock>

    <div class="footer-sidebar" slot="footer">
      <div class="flex items-center justify-end gap-5">
        <vs-button
          color="primary"
          type="filled"
          @click="submitDriverPayTemplateForm"
        >
          Submit
        </vs-button>
        <vs-button
          color="danger"
          type="border"
          @click.stop="isSidebarActiveLocal = false"
        >
          Cancel
        </vs-button>
      </div>
    </div>
  </vs-sidebar>
</template>

<script>
import CloseSidebarMixin from "@/mixins/closeSidebarMixin";
import DriverPayTemplateBlock from "./DriverPayTemplateBlock.vue";

export default {
  name: "DriverPayTemplateSidebar",

  mixins: [CloseSidebarMixin],

  props: {
    isSidebarActive: {
      type: Boolean,
      required: true,
    },
    sidebarData: {
      type: Object,
      default: () => [],
    },
  },

  components: {
    DriverPayTemplateBlock
  },

  data() {
    return {
      templateId: null,
    };
  },

  watch: {
    sidebarData: {
      handler(val) {
        this.templateId = val.id;
      },
    },
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
  methods: {
    submitDriverPayTemplateForm() {
      if (this.templateId) {
        this.editTemplateData();
      } else {
        this.createTemplateData();
      }
    },
    async createTemplateData() {
      this.$vs.loading();
      try {
        await this.$refs.driverPayTemplateBlock.createTemplateData();
        this.$emit("getTemplates");
        this.closeSidebar();
      } catch (e) {
        console.error(e)
      } finally {
        this.$vs.loading.close();
      }
    },
    async editTemplateData() {
      try {
        await this.$refs.driverPayTemplateBlock.editTemplateData();
        this.$emit("getTemplates");
        this.closeSidebar();
      } catch (e) {
        console.error(e)
      } finally {
        this.$vs.loading.close();
      }
    },
    closeSidebar() {
      this.$emit("closeSidebar");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@sass/custom/sidebar.scss";
::v-deep {
  .bill-chips {
    width: 100%;
  }
}

::v-deep .con-chips {
  border: 1px solid rgba(0, 0, 0, 0.2) !important;
  box-shadow: none !important;
}

.footer-sidebar {
  padding: 10px;
  margin: 0;
}
</style>
