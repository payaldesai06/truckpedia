<template>
  <div
    class="mt-4 border-solid bg-primary-light border-radius-10 border-color-primary flex flex-row items-center justify-center p-4"
  >
    <div
      class="flex flex-row w-full items-center min-height-100 justify-between"
    >
      <section class="flex flex-end items-center">
        <div
          class="flex items-center justify-center bg-primary rounded-full height-70 width-70 flex-shrink-0"
        >
          <img
            class="w-auto align-middle"
            height="40px"
            :src="customIcons.safety"
            alt="safety-icon"
          />
        </div>
        <div class="ml-4 flex items-center justify-center gap-8">
          <div class="flex-shrink-0 width-200">
            <h5 class="font-bold">{{ header }}</h5>
          </div>
          <div v-if="isEdit">
            <h4>{{ formattedIncidentDetails }}</h4>
          </div>
        </div>
      </section>
      <div class="d-flex flex-end">
        <vs-button
          v-if="enableSubmit"
          color="primary"
          @click.prevent="$emit('submit')"
        >
          {{ isEdit ? "UPDATE" : "SAVE" }}
        </vs-button>
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/config/constants.js";
import { mapGetters } from "vuex";

export default {
  name: "IncidentSummaryCard",
  props: {
    header: {
      type: String,
      default: "",
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
    enableSubmit: {
      type: Boolean,
      default: false,
    },
    incidentDetails: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      customIcons: {
        safety: require("@assets/images/custom/safety.svg"),
      },
      incidentTypes: config.safetyModule.incidentTypes,
    };
  },
  computed: {
    ...mapGetters("tag", ["allTags"]),
    selectedIncidentType() {
      const selectedType = this.incidentTypes.find((type) => type.value === this.incidentDetails.incidentType);
      return selectedType ? selectedType.label : '';
    },
    formattedIncidentDetails() {
      const selectedTag = this.allTags.find(tag => tag.tag_id === this.incidentDetails.tagId);
      const businessName = selectedTag && selectedTag.business_name || '';
      const incidentType = this.selectedIncidentType || '';
      const claimNumber = this.incidentDetails && this.incidentDetails.incidentClaimNumber || '';
      const description = this.incidentDetails && this.incidentDetails.description || '';

      const parts = [businessName, incidentType, claimNumber, description];

      // Filter out empty values and join with " - "
      const formattedParts = parts.filter(part => part !== '').join(' - ');

      return formattedParts;
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

.bg-primary {
  background-color: #aca7f7;
}

.height-70 {
  height: 70px;
}

.width-70 {
  width: 70px;
}

.width-200 {
  width: 200px;
}
</style>
