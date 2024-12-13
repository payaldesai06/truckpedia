<template>
  <vs-prompt
    accept-text="Yes"
    cancel-text="No"
    color="warning"
    title="Warning"
    @cancel="handleCancel"
    @accept="handleAccept"
    @close="handleClose"
    :active.sync="localActivePrompt"
  >
    <div>
      <p>
        {{ computedIsMaintenanceTruckTrailer }}
      </p>
    </div>
  </vs-prompt>
</template>

<script>
export default {
  props: {
    handleIsMaintenance: {
      type: Boolean,
      default: false,
    },
    paramLegs: {
      type: Array,
      default: () => [],
    },
    assignDriverAndEquipments: {
      type: Array,
      default: () => [],
    },
    activePrompt: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      handleIsMaintenanceVariable: false,
      selectedIsMaintenanceTruckTrailer: '',
      localActivePrompt: false,
    };
  },
  watch: {
    activePrompt(newValue) {
      this.localActivePrompt = newValue;
    },
    localActivePrompt(newValue) {
      this.$emit('activePrompt', newValue);
    },
  },
  computed: {
    computedIsMaintenanceTruckTrailer() {
      const selectedItems = this.selectedIsMaintenanceTruckTrailer.split(',');
      const numberOfItems = selectedItems.length;
      if (numberOfItems) {
        let maintenanceMessage = `${selectedItems.join(', ')}`;

        if (numberOfItems > 1) {
          const lastItem = selectedItems.pop();
          maintenanceMessage = `${selectedItems.join(', ')} and ${lastItem}`;
        }

        return `${maintenanceMessage} ${
          numberOfItems > 1 ? 'are' : 'is'
        } currently in maintenance. Please confirm if you'd like to dispatch ${
          numberOfItems > 1 ? 'them.' : 'it.'
        }`;
      }

      return this.selectedIsMaintenanceTruckTrailer;
    },
  },
  methods: {
    handleCancel() {
      this.localActivePrompt = false;
      this.$emit('handleIsMaintenance', false);
    },

    handleAccept() {
      this.localActivePrompt = false;
      this.$emit('handleIsMaintenance', true);
      this.$emit('formSubmitted');
    },

    handleClose() {
      this.localActivePrompt = false;
      this.$emit('handleIsMaintenance', false);
    },
    handleTruckChange() {
      const isInMaintenanceTrucksTrailerNumberForAssignDrivers =
        this.getIsInMaintenanceTrucksTrailerNumber(
          this.assignDriverAndEquipments
        );
      const isInMaintenanceTrucksTrailerNumberForParamLegs =
        this.getIsInMaintenanceTrucksTrailerNumber(this.paramLegs);

      const isInMaintenanceTrucksTrailersArray = [
        ...isInMaintenanceTrucksTrailerNumberForAssignDrivers,
        ...isInMaintenanceTrucksTrailerNumberForParamLegs,
      ];
      const filteredData = isInMaintenanceTrucksTrailersArray.filter(Boolean);

      this.selectedIsMaintenanceTruckTrailer = filteredData.join(', ');
      return filteredData;
    },

    getIsInMaintenanceTrucksTrailerNumber(items) {
      if (!Array.isArray(items)) {
        return [];
      }
      return items.map((item) => {
        let number = '';

        if (item.selected_truck && item.selected_truck.isInMaintenance) {
          number += item.selected_truck.truck_number;
        }

        if (item.selected_trailer && item.selected_trailer.isInMaintenance) {
          if (number !== '') {
            number += ',';
          }
          number += item.selected_trailer.trailer_number;
        }

        return number;
      });
    },
  },
};
</script>
