<template>
  <div
    class="border-solid bg-primary-light border-radius-10 border-color-primary flex flex-row p-4"
  >
    <div class="flex flex-row w-full border-right-primary">
      <vs-icon icon="person" size="70px" bg="#aca7f7" round />
      <div class="ml-4 mr-2 w-full flex flex-wrap justify-between flex-col">
        <div>
          <h5
            v-if="!isEditable"
            v-text="`${formData.firstName} ${formData.lastName}`"
          />
          <div class="flex" v-else>
            <vs-input
              v-model="formData.firstName"
              placeholder="Enter First Name"
              @input="handleInput('firstName')"
            />
            <vs-input
              v-model="formData.lastName"
              class="ml-1"
              placeholder="Enter Last Name"
              @input="handleInput('lastName')"
            />
          </div>
          <Dropdown
            class="mt-1"
            v-model="formData.status"
            :options="status"
            :disabled="!isEditable"
            dataKey="uniqueId"
            optionLabel="label"
            optionValue="value"
            placeholder="Select Status"
            @input="handleInput('status')"
          />
          <Dropdown
            class="mt-1"
            v-model="formData.approvalStatus"
            :options="approvalStatuses"
            :disabled="!isEditable"
            showClear
            dataKey="uniqueId"
            optionLabel="label"
            optionValue="value"
            @input="handleInput('approvalStatus')"
            placeholder="Select Approval Status"
          />
        </div>
        <div class="mt-1">
          <div class="flex items-center" v-if="!isEditable">
            <vs-icon icon="call" />
            <span class="ml-3" v-text="formData.phone" />
          </div>
          <vs-input
            v-else
            v-model="formData.phone"
            placeholder="Enter Phone Number"
            @input="handleInput('phone')"
          />
        </div>
      </div>
    </div>
    <div class="w-full mx-5">
      <div class="flex flex-row w-2/3">
        <div class="flex flex-col w-1/3 mr-5">
          <label class="text-xs">Driver Type</label>
          <Dropdown
            v-model="formData.driverType"
            :options="driverTypes"
            :disabled="!isEditable"
            dataKey="uniqueId"
            optionLabel="label"
            optionValue="value"
            @input="handleInput('driverType')"
          />
        </div>
        <!-- <div class="flex flex-col w-1/3">
          <label class="text-xs">Tags</label>
          <v-select
            data-vv-name="tags"
            name="tags"
            :options="allTags"
            :clearable="true"
            v-model="tags"
            label="business_name"
            class="mb-4 md:mb-0"
            multiple
            style="background: #fff"
            @input="handleInput('tags')"
          />
        </div> -->
      </div>

      <div class="mt-5 flex">
        <div class="w-1/4">
          <label class="text-xs">Team Driver</label>
          <vs-switch
            v-model="formData.isTeamDriver"
            :disabled="!isEditable"
            @input="handleInput('isTeamDriver')"
          />
        </div>
        <div class="w-1/4">
          <label class="text-xs">Local Driver</label>
          <vs-switch
            v-model="formData.isLocalDriver"
            :disabled="!isEditable"
            @input="handleInput('isLocalDriver')"
          />
        </div>
        <div class="w-1/4">
          <label class="text-xs">Regional Driver</label>
          <vs-switch
            v-model="formData.isRegionalDriver"
            :disabled="!isEditable"
            @input="handleInput('isRegionalDriver')"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import config from "@/config/constants";

export default {
  name: "OverviewCard",
  props: {
    isEditable: {
      type: Boolean,
      default: false,
    },
    dataObj: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters("tag", ["allTags"]),

    isEditMode() {
      return this.$route.name === "drivers-edit";
    },
  },
  data() {
    return {
      formData: {
        firstName: "",
        lastName: "",
        status: "active",
        phone: "",
        driverType: "employee",
        isTeamDriver: false,
        isLocalDriver: false,
        isRegionalDriver: false,
        approvalStatus: "",
        tags: [],
      },
      driverTypes: config.driverTypes,
      status: [
        { id: 1, label: "Active", value: "active" },
        { id: 2, label: "Inactive", value: "inactive" },
      ],
      approvalStatuses: [
        /*{
          id: 1,
          label: "Approved",
          value: "approved",
        },*/
        {
          id: 3,
          label: "Approved CDL",
          value: "approvedCdl",
        },
        {
          id: 4,
          label: "Approved CMV",
          value: "approvedCmv",
        },
        {
          id: 5,
          label: "Approved Non-CMV",
          value: "approvedNonCmv",
        },
        {
          id: 2,
          label: "Not approved",
          value: "notApproved",
        },
      ],
      tags: [],
    };
  },
  methods: {
    handleInput(field) {
      // if (field === "tags") {
      //   this.formData[field] = this.tags.map((x) => {
      //     return { id: x.tag_id || x.id };
      //   });
      // }
      this.$emit("cardInput", { [field]: this.formData[field] });
    },
    // assignTags(data) {
    //   const { tags: tagsData } = data || {};
    //   const selectedTags = [];
    //   (tagsData || []).forEach((tag) => {
    //     const tagInfo = this.allTags.find((x) => x.tag_id === tag.id);
    //     if (tagInfo) {
    //       selectedTags.push(tagInfo);
    //     }
    //   });
    //   this.tags = selectedTags;
    // },
  },
  watch: {
    dataObj: {
      handler(newVal) {
        this.formData = {
          ...this.formData,
          ...newVal,
        };
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
<style lang="scss" scoped>
// Utilities
.min-height-100 {
  min-height: 100px;
}
.bg-primary-light {
  background-color: #f1f4ff;
}
.border-radius-10 {
  border-radius: 10px !important;
}
.border-color-primary {
  border-color: #aca7f7 !important;
}
.border-right-primary {
  border-right: 2px solid #aca7f7 !important;
}
::v-deep .v-select {
  background: #ffffff;
}
</style>
