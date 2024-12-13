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
      <h4>{{ isCreateMode ? "Add" : "Edit" }} Equipment</h4>
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
      <div class="p-6">
        <div class="vx-row">
          <div class="vx-col w-full">
            <label class="text-xs"> Equipment # </label>

            <vs-input v-model="equipmentType" class="w-full" />
          </div>

          <div class="vx-col w-full mt-4">
            <label class="text-xs"> Description </label>
            <vs-input v-model="description" class="w-full" />
          </div>

          <div class="vx-col w-full">
            <div class="vx-row">
              <div class="vx-col w-1/2 mt-4">
                <label class="text-xs"> Weight </label>
                <vs-input v-model="weight" class="w-full" type="number" />
              </div>

              <div class="vx-col w-1/2 mt-4">
                <label class="text-xs"> Weight Unit </label>

                <v-select
                  class="w-full mb-4 md:mb-0"
                  :options="weightOptions"
                  label="label"
                  :reduce="(option) => option.value"
                  :clearable="true"
                  :dir="$vs.rtl ? 'rtl' : 'ltr'"
                  v-model="weightUnit"
                />
              </div>
            </div>
          </div>

          <div class="vx-col w-full">
            <div class="vx-row">
              <div class="vx-col w-1/2 mt-4">
                <label class="text-xs"> Quantity </label>
                <vs-input v-model="qty" class="w-full" type="number" />
              </div>

              <div class="vx-col w-1/2 mt-4">
                <label class="text-xs"> Quantity Unit </label>

                <v-select
                  :options="qtyOptions"
                  label="label"
                  :reduce="(option) => option.value"
                  :clearable="true"
                  :dir="$vs.rtl ? 'rtl' : 'ltr'"
                  v-model="qtyUnit"
                  class="w-full mb-4 md:mb-0"
                />
              </div>
            </div>
          </div>

          <div class="vx-col w-full">
            <div class="vx-row">
              <div class="vx-col w-1/3 mt-4">
                <label class="text-xs"> Length </label>
                <vs-input v-model="length" class="w-full" />
              </div>

              <div class="vx-col w-1/3 mt-4">
                <label class="text-xs"> Width </label>

                <vs-input v-model="width" class="w-full" />
              </div>

              <div class="vx-col w-1/3 mt-4">
                <label class="text-xs"> Height </label>

                <vs-input v-model="height" class="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </component>

    <div class="flex flex-wrap items-center p-6 space-x-2" slot="footer">
      <vs-button type="filled" color="primary" @click="submit">
        Submit
      </vs-button>
      <vs-button type="border" color="danger" @click.stop="closeSidebar">
        Cancel
      </vs-button>
    </div>
  </vs-sidebar>
</template>
<!-- eslint-disable multiline-ternary -->
<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import CloseSidebarMixin from "@/mixins/closeSidebarMixin";
import config from '@/config/constants'

export default {
  name: "SavedEquipmentSidebar",

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
    VuePerfectScrollbar,
  },

  data() {
    return {
      id: "",
      equipmentType: "",
      description: "",
      weight: "",
      weightUnit: "",
      qty: "",
      qtyUnit: null,
      length: null,
      width: "",
      height: "",
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },
      weightOptions: config.weightOptions,
      qtyOptions: config.qtyOptions,
    };
  },

  computed: {
    scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },
    isCreateMode() {
      return !!(Object.entries(this.data).length === 0);
    },
  },

  created() {
    this.initValues();
  },

  methods: {
    async initValues(data = {}) {
      const savedEquipment = this.data.id ? { ...this.data } : data;
      this.id = savedEquipment.id;
      this.equipmentType = savedEquipment.equipmentType;
      this.description = savedEquipment.description;
      this.weight = savedEquipment.weight;
      this.weightUnit = savedEquipment.weightUnit;
      this.qty = savedEquipment.qty;
      this.qtyUnit = savedEquipment.qtyUnit;
      this.length = savedEquipment.length;
      this.width = savedEquipment.width;
      this.height = savedEquipment.height;
    },

    closeSidebar() {
      this.$emit("closeSidebar");
    },

    submit() {
      this.$vs.loading();

      const payload = {
        equipmentType: this.equipmentType,
        description: this.description,
        weight: this.weight,
        weightUnit: this.weightUnit,
        qty: this.qty,
        qtyUnit: this.qtyUnit,
        length: this.length,
        width: this.width,
        height: this.height,
      };

      if (!this.isCreateMode) {
        payload.id = this.data.id;
      }

      this.isCreateMode
        ? this.createEquipment(payload)
        : this.updateEquipment(payload);
    },

    createEquipment(payload) {
      this.$vs.loading();
      this.$store
        .dispatch("saved-equipment/createEquipment", payload)
        .then(() => {
          this.$emit("equipment-created");
          this.closeSidebar();
          this.$vs.notify({
            color: "primary",
            title: "Equipment Added",
            text: "Equipment added successfully.",
          });
        })
        .catch((error) => {
          this.$vs.notify({
            color: "danger",
            title: "Error",
            text: this.getErrorMsg(error),
          });
        })
        .finally(() => this.$vs.loading.close());
    },

    updateEquipment(payload) {
      this.$vs.loading();
      this.$store
        .dispatch("saved-equipment/updateEquipment", payload)
        .then(() => {
          this.closeSidebar();
          this.$emit("equipment-updated");
          this.$vs.notify({
            color: "primary",
            title: "Equipment Updated",
            text: "Equipment updated successfully.",
          });
        })
        .catch((error) => {
          this.$vs.notify({
            color: "danger",
            title: "Error",
            text: this.getErrorMsg(error),
          });
        })
        .finally(() => this.$vs.loading.close());
    },

    getErrorMsg(error) {
      return error &&
        error.response &&
        error.response.data &&
        error.response.data.message
        ? error.response.data.message
        : "Something went wrong";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@sass/custom/sidebar.scss";

::v-deep .vs__dropdown-menu {
  max-height: 180px !important;
}
</style>
