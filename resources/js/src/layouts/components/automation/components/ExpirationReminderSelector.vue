<template>
  <div class="expiration-reminder-selector">
    <div class="d-flex">
      <div class="vx-col w-full mt-4">
        <div class="vx-row ml-1">
          <strong>
            Expiration reminder
          </strong>
        </div>
        <div class="vx-row">
          <div class="flex vx-col w-full mt-2" style="align-items: center;">
            <span class="mr-2">
              Expiration reminder
            </span>
            <div class="day-selector mr-2">
              <multiselect
                v-model="inAdvanceDays"
                :multiple="true"
                :options="expirationDateOptions"
                label="text"
                trackBy="value"
                :showLabels="false"
                placeholder="Select days"
                :closeOnSelect="false"
                data-vv-validate-on="change"
                v-validate="'required'"
                data-vv-as="selected"
                name="inAdvanceDays"
              >
              </multiselect>
            </div>
            <span>
              day(s) in advance,
            </span>
          </div>
        </div>
        <div class="vx-row w-full ml-2" v-if="!inAdvanceDays || !inAdvanceDays.length">
          <span class="text-danger text-sm">
            Please select at least one in advance days
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExpirationReminderSelector',
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      inAdvanceDays: [],
    }
  },
  computed: {
    expirationDateOptions() {
      return [
        {
          value: 1,
          text: 1
        },
        {
          value: 7,
          text: 7
        },
        {
          value: 10,
          text: 10
        },
        {
          value: 15,
          text: 15
        },
        {
          value: 20,
          text: 20
        },
        {
          value: 30,
          text: 30
        },
        {
          value: 45,
          text: 45
        },
        {
          value: 60,
          text: 60
        },
        {
          value: 90,
          text: 90
        },
      ]
    },
  },
  watch: {
    inAdvanceDays: {
      handler (val) {
        this.$emit('input', val)
      },
      deep: true
    }
  },
  mounted () {
    this.inAdvanceDays = this.value
  },
  methods: {
    async validate () {
      return this.inAdvanceDays
    }
  }
};
</script>
