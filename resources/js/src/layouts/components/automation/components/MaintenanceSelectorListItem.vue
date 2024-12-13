<template>
  <div class="vx-row">
    <div class="mt-5 vx-col w-full space-y-4">
      <div class="vx-row">
        <div class="vx-col w-1/3">
          <span> {{ asset.number }} </span>
        </div>
        <div class="vx-col w-1/3">
          <flat-pickr v-model="startingDate" :config="configTimeFlatPickr"/>
        </div>
        <div class="vx-col w-1/3">
          <div class="h-full flex items-center justify-end">
            <vs-button
              color="danger"
              type="border"
              @click.prevent="removeItem"
              >Remove
            </vs-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MaintenanceSelectorListItem",
  props: {
    asset: {
      required: true,
      type: Object,
      default: null
    }
  },
  components: {
    
  },
  created () {
    const { nextServiceAt } = this.asset || {};
    if(nextServiceAt) {
      this.startingDate = nextServiceAt;
    }
  },
  data() {
    return {
      startingDate: '',
      configTimeFlatPickr: {
        minDate: new Date().setDate(new Date().getDate() + 1),
        allowInvalidPreload: true
      },
    }
  },
  watch :{
    startingDate: {
      handler (val) {
        this.$emit('setDate', {
          assetData: this.asset,
          date: val
        })
      }
    }
  },
  methods : {
    removeItem () {
      this.$emit('remove', this.asset)
    }
  }
}
</script>
