<template>
  <div
    class="mt-4 border-solid bg-primary-light border-radius-10 border-color-primary flex flex-row items-center justify-center p-4"
  >
    <div
      class="flex flex-row w-full items-center min-height-100 justify-between"
    >
      <section class="flex">
        <div
          class="flex items-center justify-center bg-primary rounded-full height-70 width-70"
        >
          <vs-icon icon="local_shipping" size="40px" />
        </div>
        <div class="flex flex-col">
          <div class="ml-4">
            <h5 class="font-bold">{{ header }}</h5>
          </div>
          <div class="ml-4 flex flex-col">
            <label class="text-sm opacity-75 mt-3" for="type">
              Truck Type
            </label>
            <div class="flex gap-2 flex-wrap">
              <div
                class="trucks-truck-summary-card-truck-type"
                v-for="(item, index) in truckTypeIconsName"
                :key="index"
                @click="setTruckTypeActive(item.value)"
                :class="[
                  getSelectedTruckTypes.includes(item.value) && 'active-type',
                ]"
              >
                <truck-type-icons :icon="item.icon"></truck-type-icons>
                <span>{{ item.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="d-flex flex-end">
        <vs-button
          v-if="enableSubmit"
          color="primary"
          @click.prevent="$emit('submit')"
        >
          {{ isEdit ? "Update" : "Create" }}
        </vs-button>
      </div>
    </div>
  </div>
</template>

<script>
import TruckTypeIcons from './TruckTypeIcons.vue'

export default {
  name: "TruckSummaryCard",
  components: {
    TruckTypeIcons
  },
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
    selectedTruckTypes: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    getSelectedTruckTypes () {
      return this.selectedTruckTypes
    }
  },
  data () {
    return {
      truckTypeIconsName: [
        { title: 'Van', icon: 'van', value: 'van' },
        { title: 'Reefer', icon: 'reefer', value: 'reefer' },
        { title: 'Flatbed', icon: 'flatbed', value: 'flatbed' },
        { title: 'Step Deck', icon: 'step_deck', value: 'stepDeck' },
        { title: 'Power Only', icon: 'power_only', value: 'powerOnly' },
        { title: 'Conestoga', icon: 'conestoga', value: 'conestoga' },
        { title: 'Box Truck', icon: 'box_truck', value: 'boxTruck' },
        { title: 'Sprinter', icon: 'sprinter', value: 'sprinter' },
        { title: 'Hot Shot', icon: 'hot_shot', value: 'hotShot' }
      ],
      activeType: []
    }
  },
  methods: {
    setTruckTypeActive (value) {
      if (this.getSelectedTruckTypes.includes(value)) {
        this.$emit(
          'onTruckTypeClick',
          this.getSelectedTruckTypes.filter((item) => item !== value)
        )
      } else {
        this.$emit('onTruckTypeClick', [...this.getSelectedTruckTypes, value])
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.trucks-truck-summary-card-truck-type {
  width: 65px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 6px;
  color: "#fff";
  margin: 2px;
  cursor: pointer;
  span {
    color: "#626262";
    margin-top: 2px;
    font-size: 10px;
    font-weight: 500;
    white-space: nowrap;
  }
}

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

.active-type {
  background: #1877f2;
  span {
    color: #fff;
  }
}
</style>
