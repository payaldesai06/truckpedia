<template>
  <section id="driver-pay-template-block">
    <div class="mt-6 flex items-center justify-between px-6" v-if="!hideHeader">
      <h4>Driver Pay Templates</h4>
      <!-- <vs-button
          color="primary"
          size="small"
          type="filled"
          @click="toggleAddCustomFieldPopup = true"
          >Add custom field</vs-button
        > -->
    </div>
    <vs-divider class="mb-0"></vs-divider>
    <div class="p-2">
      <div>
        <div v-if="!hideName">
          <label>Name</label>
          <vs-input
            type="text"
            placeholder="Name"
            class="w-full"
            v-model="templates.name"
          />
        </div>
        <div class="flex items-center justify-between mt-3">
          <h4>Per Load</h4>
          <vs-button
            color="primary"
            type="filled"
            size="small"
            @click="addNewCustomFieldOption('load')"
            >New Per Load Custom Payment Field</vs-button
          >
        </div>
        <!-- Per Load  -->
        <div
          class="flex items-center gap-5 mt-3"
          v-for="(item, index) in templates.loadDetails"
          :key="index"
        >
          <v-select
            :options="userCreatedCustomFields.loads"
            :getOptionLabel="(loads) => loads.fieldName"
            :value="templates.loadDetails[index]"
            placeholder="Select an option"
            style="width: 250px"
            :clearable="false"
            @input="handleDefaultValues($event, index, 'load')"
          ></v-select>
          <div
            v-if="
              item &&
              (item.type === 'formulaEmptyMiles' ||
                item.type === 'formulaLoadedMiles')
            "
          >
          <!-- TODO: why here you use defaultV2 and defaultV3, but other code just use percentage, perStartAfter without default? -->
          <div class="flex items-center gap-2">
              <span class="whitespace-no-wrap">( Fuel Price - </span>
              <vs-input
                type="number"
                step="any"
                placeholder="Base Price"
                class="w-1/4"
                v-model.number="item.v2"
              />
              ) <span> / </span>
              <vs-input
                type="number"
                step="any"
                placeholder="MPG"
                class="w-1/4"
                v-model.number="item.v3"
              />
            </div>
          </div>
          <div v-else class="flex items-center gap-5">
            <vx-input-group>
              <template slot="prepend">
                <div class="prepend-text bg-primary">
                  <span v-if="checkDriverPayTemplateType(item)">$</span>
                  <span v-else>%</span>
                </div>
              </template>
              <input
                v-if="checkDriverPayTemplateType(item)"
                type="number"
                step="any"
                placeholder="Rate"
                v-model="item.rate"
                class="custom-input"
              />

              <input
                v-else
                type="number"
                step="any"
                placeholder="Percentage"
                v-model="item.percentage"
                class="custom-input"
              />
            </vx-input-group>
            <div v-if="showOnStopPay(item)">after</div>
            <input
              v-if="showOnStopPay(item)"
              type="number"
              step="any"
              placeholder="Pay Start After"
              style="border-radius: 5px; width: 50px"
              v-model="item.payStartAfter"
              class="custom-input"
            />
            <div v-if="showOnStopPay(item)">stops</div>
          </div>

          <vx-tooltip text="Edit Custom Payment Field">
            <vs-button
              color="primary"
              type="border"
              size="small"
              icon="edit"
              radius
              @click="editCustomField(item)"
              :disabled="!userCreatedCustomFields.loads.length"
            ></vs-button>
          </vx-tooltip>
          <vs-button
            color="danger"
            type="border"
            size="small"
            icon-pack="feather"
            icon="icon-trash"
            radius
            @click="removeLoadSelection(index)"
          ></vs-button>
        </div>
        <vs-button
          color="primary"
          class="mt-4"
          type="border"
          size="small"
          @click="addNewLoad"
          >Add New Per Load Payment</vs-button
        >
      </div>
      <!-- Trip Load  -->
      <div class="mt-5">
        <div class="flex items-center justify-between">
          <h4>Recurring</h4>

          <vs-button
            color="primary"
            type="filled"
            size="small"
            @click="addNewCustomFieldOption('trip')"
            >New Recurring Custom Payment Field</vs-button
          >
        </div>
        <div
          class="flex items-center gap-5 mt-3"
          v-for="(item, index) in templates.tripDetails"
          :key="index"
        >
          <v-select
            :options="userCreatedCustomFields.trips"
            :getOptionLabel="(loads) => loads.fieldName"
            :value="templates.tripDetails[index]"
            placeholder="Select an option"
            :clearable="false"
            style="width: 250px"
            @input="handleDefaultValues($event, index, 'trip')"
          >
          </v-select>
          <vx-input-group>
            <template slot="prepend">
              <div class="prepend-text bg-primary">
                <span>$</span>
              </div>
            </template>

            <input
              type="number"
              step="any"
              placeholder="Rate"
              v-model="item.rate"
              class="custom-input"
            />
          </vx-input-group>
          <vx-tooltip text="Edit Custom Payment Field">
            <vs-button
              color="primary"
              type="border"
              size="small"
              icon="edit"
              radius
              :disabled="!userCreatedCustomFields.trips.length"
              @click="editCustomField(item)"
            ></vs-button>
          </vx-tooltip>
          <vs-button
            color="danger"
            type="border"
            size="small"
            icon-pack="feather"
            icon="icon-trash"
            radius
            @click="removeTripSelection(index)"
          ></vs-button>
        </div>
        <vs-button
          color="primary"
          type="border"
          size="small"
          class="mt-4"
          @click="addNewTrip"
          >Add New Recurring Payment</vs-button
        >
      </div>
    </div>
    <CustomFields
      :togglePopup="toggleAddCustomFieldPopup"
      :tripOptions="driverPayTripOption"
      :loadOptions="driverPayLoadOptions"
      :selectedTarget="target"
      :editCustomFieldData="editCustomFieldData"
      @closePopup="closePopup"
      @getCustomFields="getCustomFields"
    ></CustomFields>
  </section>
</template>

<script>
import CustomFields from "./CustomFields.vue";

export default {
  name: "DriverPayTemplateBlock",

  props: {
    data: {
      type: Object,
      default: () => null,
    },
    hideName: {
      type: Boolean,
      default: false,
    },
    hideHeader: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Object,
      default: () => null,
    },
  },

  components: {
    CustomFields,
  },

  data() {
    return {
      driverPayRate: null,
      toggleAddCustomFieldPopup: false,
      driverPayLoadOptions: [
        {
          text: "By Loaded Miles",
          value: "byLoadedMiles",
        },
        {
          text: "By Empty Miles",
          value: "byEmptyMiles",
        },
        {
          text: "Flat Pay",
          value: "flatPay",
        },
        {
          text: "Stop Pay",
          value: "stopPay",
        },
        {
          text: "By Hour",
          value: "byHour",
        },
        {
          text: "By Percentage Of Hauling Fee",
          value: "byPercentageOfHaulingFee",
        },
        {
          text: "By Percentage Of Fuel Surcharge",
          value: "byPercentageOfFuelSurcharge",
        },
        {
          text: "By Percentage Of Total Income",
          value: "byPercentageOfTotalIncome",
        },
        {
          text: "Formula Loaded Miles",
          value: "formulaLoadedMiles",
        },
        {
          text: "Formula Empty Miles",
          value: "formulaEmptyMiles",
        },
      ],
      driverPayTripOption: [{ text: "Flat Pay", value: "flatPay" }],
      target: "",
      templates: {
        name: "",
        loadDetails: [],
        tripDetails: [],
      },
      userCreatedCustomFields: {
        loads: [],
        trips: [],
      },
      editCustomFieldData: {},
    };
  },

  watch: {
    value: {
      handler(val, oldVal) {
        if (val) {
          let oldValParsed = oldVal ? JSON.stringify(oldVal) : null;
          let valParsed = val ? JSON.stringify(val) : null;
          if (oldValParsed !== valParsed) {
            this.templates = { ...val };
            this.setTemplateData();
          }
          const { loadDetails, tripDetails } = val;
          if (!loadDetails) this.templates.loadDetails = [];
          if (!tripDetails) this.templates.tripDetails = [];
        } else if (!this.data) {
          this.initValues();
        }
      },
      immediate: true,
      deep: true,
    },
    templates: {
      handler(val) {
        this.$emit("input", val);
      },
      immediate: true,
      deep: true,
    },
  },

  computed: {
    userCreatedCustomFieldsMap() {
      const { loads, trips } = this.userCreatedCustomFields || {};
      const loadDetailsMap = (loads || []).reduce((acc, load) => {
        acc[load.id] = load;
        return acc;
      }, {});
      const tripDetailsMap = (trips || []).reduce((acc, trip) => {
        acc[trip.id] = trip;
        return acc;
      }, {});
      return {
        loads: loadDetailsMap,
        trips: tripDetailsMap,
      };
    },
    templateId() {
      return this.data ? this.data.id : null;
    },
  },

  async mounted() {
    await this.getCustomFields();
    this.setTemplateData();
  },

  methods: {
    setTemplateData() {
      const { loadDetails, tripDetails } = this.value || {};
      const { loads, trips } = this.userCreatedCustomFieldsMap || {};
      this.templates.loadDetails = (loadDetails || []).map((load) => ({
        ...load,
        ...((loads || {})[load.fieldId] || {}),
      }));
      this.templates.tripDetails = (tripDetails || []).map((trip) => ({
        ...trip,
        ...((trips || {})[trip.fieldId] || {}),
      }));
    },
    showOnStopPay(item) {
      if (item.type === "stopPay" || item.fieldType === "stopPay") {
        return true;
      }
      return false;
    },
    checkDriverPayTemplateType(item) {
      if (item && item.type && item.type.includes("byPercentage")) return false;
      if (item && item.fieldType && item.fieldType.includes("byPercentage"))
        return false;
      if (
        item &&
        (item.type === "formulaLoadedMiles" ||
          item.type === "formulaEmptyMiles")
      )
        return false;
      return true;
    },
    handleDefaultValues(item, i, type) {
      if (!item) return;
      if (type === "trip") {
        this.$set(this.templates.tripDetails, i, { ...item });
        this.$set(
          this.templates.tripDetails[i],
          "rate",
          parseFloat(item.defaultRate).toFixed(2)
        );
      } else {
        this.$set(this.templates.loadDetails, i, { ...item });
        if (item.type.includes("byPercentage")) {
          this.$set(
            this.templates.loadDetails[i],
            "percentage",
            parseFloat(item.defaultPercentage).toFixed(2)
          );
          this.$set(this.templates.loadDetails[i], "rate", null);
        }  else if (
          item.type === "formulaEmptyMiles" ||
          item.type === "formulaLoadedMiles"
        ) {
          this.$set(
            this.templates.loadDetails[i],
            "v2",
            item.defaultV2
          );
          this.$set(
            this.templates.loadDetails[i],
            "v3",
            item.defaultV3
          );
        }
          else {
          if (item.type === "stopPay") {
            this.$set(
              this.templates.loadDetails[i],
              "payStartAfter",
              item.defaultPayStartAfter
            );
          }
          this.$set(this.templates.loadDetails[i], "percentage", null);
          this.$set(
            this.templates.loadDetails[i],
            "rate",
            parseFloat(item.defaultRate).toFixed(2)
          );
        }
      }
    },
    submitDriverPayTemplateForm() {
      if (this.templateId) {
        this.editTemplateData();
      } else {
        this.createTemplateData();
      }
    },
    initValues() {
      this.templates = {
        name: "",
        loadDetails: [],
        tripDetails: [],
      };
      this.loadRate = [];
      this.tripRate = [];
    },
    modifyPayload(item, i) {
      const payload = {
        fieldId: item.id ? String(item.id) : String(item.fieldId),
      };
      if (
        (item.type && item.type.includes("byPercentage")) ||
        (item.fieldType && item.fieldType.includes("byPercentage"))
      ) {
        payload.percentage = item.percentage;
      } else if (
        item.type &&
        (item.type === "formulaEmptyMiles" ||
          item.type === "formulaLoadedMiles")
      ) {
        // TODO: why we are setting defaultV2 and defaultV3 here?
        // Other code do not set defaultPercentage or defaultPayStartAfter.
        // Is this code really being used?
        payload.defaultV2 = Number(item.defaultV2);
        payload.defaultV3 = Number(item.defaultV3);
        payload.v2 = Number(item.v2);
        payload.v3 = Number(item.v3);
      } else {
        if (
          (item.type && item.type === "stopPay") ||
          (item.fieldType && item.fieldType === "stopPay")
        ) {
          payload.payStartAfter = Number(item.payStartAfter);
        }
        payload.rate = item.rate;
      }
      if (payload.id) payload.fieldId = payload.id;

      return payload;
    },
    generatedTemplatePayload() {
      const loadDetailsPayload = this.templates.loadDetails.map((item, i) =>
        this.modifyPayload(item, i)
      );
      const tripDetailsPayload = this.templates.tripDetails.map((item, i) =>
        this.modifyPayload(item, i)
      );
      const payload = {
        id: this.templateId,
        name: this.templates.name,
        loadDetails: loadDetailsPayload,
        tripDetails: tripDetailsPayload,
      };

      return payload;
    },
    async createTemplateData() {
      this.$vs.loading();
      try {
        const res = await this.$store.dispatch(
          "driverPayTemplates/createTemplateData",
          this.generatedTemplatePayload()
        );
        this.$vs.notify({
          color: "primary",
          title: "Create Template",
          text: "Create template successfully.",
        });
        return res;
      } catch (error) {
        const { message } = ((error || {}).response || {}).data || {};
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: message || "Something went wrong",
        });
        throw error;
      } finally {
        this.$vs.loading.close();
      }
    },
    async editTemplateData() {
      this.$vs.loading();
      try {
        const res = await this.$store.dispatch(
          "driverPayTemplates/editTemplateData",
          this.generatedTemplatePayload()
        );
        this.$vs.notify({
          color: "primary",
          title: "Edit Template",
          text: "Edit template successfully.",
        });
        return res;
      } catch (error) {
        const { message } = ((error || {}).response || {}).data || {};
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: message || "Something went wrong",
        });
        throw error;
      } finally {
        this.$vs.loading.close();
      }
    },
    editCustomField(item) {
      this.target = item.fieldTarget;
      if (!item.hasOwnProperty("id")) {
        let getDefaultFields = [];
        if (item.fieldTarget === "load") {
          getDefaultFields = this.userCreatedCustomFields.loads.filter(
            (x) => x.id === item.fieldId
          );
        } else {
          getDefaultFields = this.userCreatedCustomFields.trips.filter(
            (x) => x.id === item.fieldId
          );
        }
        this.editCustomFieldData =
          getDefaultFields.length > 0 ? getDefaultFields[0] : {};
      } else {
        this.editCustomFieldData = item;
      }
      this.toggleAddCustomFieldPopup = true;
    },
    getTemplateData() {
      if (this.templateId) {
        this.$vs.loading();
        this.$store
          .dispatch("driverPayTemplates/getTemplateDataById", this.templateId)
          .then((data) => {
            this.templates = data;
            // data.loadDetails.forEach((item) => {
            //   if (item.fieldType.includes("byPercentage")) {
            //     this.loadPercentage.push(item.percentage);
            //   } else {
            //     this.loadRate.push(item.rate);
            //   }
            // });
            // data.tripDetails.forEach((item) => {
            //   this.tripRate.push(item.rate);
            // });
          })
          .finally(() => {
            this.$vs.loading.close();
          });
      }
    },
    async getCustomFields() {
      try {
        const data = await this.$store.dispatch(
          "driverPayTemplates/getCustomFields"
        );
        this.userCreatedCustomFields = {
          loads: [],
          trips: [],
        };
        this.userCreatedCustomFields.loads = data.loadFields.map((item) => {
          return {
            fieldName: item.name,
            ...item,
          };
        });
        this.userCreatedCustomFields.trips = data.tripFields.map((item) => {
          return {
            fieldName: item.name,
            ...item,
          };
        });
        this.getTemplateData();
        return;
      } catch (e) {
        console.error(e);
      }
    },
    addNewLoad() {
      this.templates.loadDetails.push({});
    },
    addNewTrip() {
      this.templates.tripDetails.push({});
    },
    removeLoadSelection(index) {
      this.templates.loadDetails.splice(index, 1);
    },
    removeTripSelection(index) {
      this.templates.tripDetails.splice(index, 1);
    },
    closePopup() {
      this.toggleAddCustomFieldPopup = false;
      this.editCustomFieldData = {};
      this.target = "";
    },
    addNewCustomFieldOption(target) {
      this.target = target;
      this.toggleAddCustomFieldPopup = true;
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .bill-chips {
    width: 100%;
  }
}

::v-deep .con-chips {
  border: 1px solid rgba(0, 0, 0, 0.2) !important;
  box-shadow: none !important;
}
.custom-input {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 0.7rem !important;
  color: inherit;
  position: relative;
  padding: 0.4rem;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  box-shadow: 0 0 0 0 rgb(0 0 0 / 15%);
  transition: all 0.3s ease;
  width: 100%;
}

::v-deep .vs__dropdown-menu {
  max-height: 180px !important;
}

.w-100px {
  width: 100px !important;
}
</style>
