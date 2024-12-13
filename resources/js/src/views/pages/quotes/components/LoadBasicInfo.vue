<template>
  <div>
    <div class="vx-row top-nav">
      <div class="vx-col flex w-full">
        <div
          :class="[
            'top-nav-item',
            { 'btn--active': value.loadType === 'drayage' },
          ]"
          @click="setLoadType('drayage')"
        >
          <p>Drayage</p>
        </div>
        <div
          :class="['top-nav-item', { 'btn--active': value.loadType === 'ftl' }]"
          @click="setLoadType('ftl')"
        >
          <p>FTL</p>
        </div>
        <div
          :class="['top-nav-item', { 'btn--active': value.loadType === 'ltl' }]"
          @click="setLoadType('ltl')"
        >
          <p>LTL</p>
        </div>
      </div>
    </div>
    <div class="vx-row my-8">
      <div class="vx-col w-full">
        <!-- <h4>Load Details</h4> -->
        <div class="vx-row">
          <div class="vx-col w-full flex gap-10">
            <div class="">
              <label class="text-xs">PO/Reference No. (Optional)</label>
              <vs-input
                placeholder="Set Reference No"
                v-model="value.referenceNumber"
              />
            </div>
            <div>
              <label class="text-xs">Urgency</label>
              <vx-input-group>
                <template slot="prepend">
                  <div class="prepend-text" style="background-color: #3975eb1a">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M4.00098 20V14C4.00098 9.58172 7.5827 6 12.001 6C16.4193 6 20.001 9.58172 20.001 14V20H21.001V22H3.00098V20H4.00098ZM6.00098 14H8.00098C8.00098 11.7909 9.79184 10 12.001 10V8C8.68727 8 6.00098 10.6863 6.00098 14ZM11.001 2H13.001V5H11.001V2ZM19.7792 4.80761L21.1934 6.22183L19.0721 8.34315L17.6578 6.92893L19.7792 4.80761ZM2.80859 6.22183L4.22281 4.80761L6.34413 6.92893L4.92991 8.34315L2.80859 6.22183Z"
                          fill="#3975EB"
                        />
                      </svg>
                    </span>
                  </div>
                </template>
                <flat-pickr
                  class="w-full"
                  v-model="value.urgencyDate"
                  :config="configDateFlatPickr"
                  placeholder="Select a date"
                  label="Date"
                />
              </vx-input-group>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="vx-row my-8" ref="trucks">
      <div class="vx-col w-full">
        <!-- <h4>Trucks</h4> -->
        <div class="vx-row items-center">
          <div class="vx-col">
            <div>
              <label class="text-xs">
                Number of Trucks
                <field-required-sign />
              </label>
              <vx-input-group>
                <template slot="prepend">
                  <div class="prepend-text" style="background-color: #3975eb1a">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M17 8H20L23 12.0557V18H20.9646C20.7219 19.6961 19.2632 21 17.5 21C15.7368 21 14.2781 19.6961 14.0354 18H8.96456C8.72194 19.6961 7.26324 21 5.5 21C3.73676 21 2.27806 19.6961 2.03544 18H1V6C1 5.44772 1.44772 5 2 5H16C16.5523 5 17 5.44772 17 6V8ZM17 10V13H21V12.715L18.9917 10H17Z"
                          fill="#3975EB"
                        />
                      </svg>
                    </span>
                  </div>
                </template>
                <vs-input
                  type="number"
                  min="1"
                  max="32767"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  v-model.number="value.numberOfTrucks"
                  data-vv-validate-on="blur"
                  v-validate="'required|numeric|min_value:1|max_value:32767'"
                  name="numberOfTrucks"
                />
              </vx-input-group>
            </div>
          </div>
          <div class="vx-col">
            <div>
              <label class="text-xs">Driver Preference</label>
              <div class="flex gap-3 items-center my-3">
                <vs-radio
                  v-model="value.driverPreference"
                  name="driver-preference"
                  :vs-value="null"
                >
                  N/A
                </vs-radio>
                <vs-radio
                  v-model="value.driverPreference"
                  name="driver-preference"
                  vs-value="solo"
                >
                  Solo
                </vs-radio>
                <vs-radio
                  v-model="value.driverPreference"
                  name="driver-preference"
                  vs-value="team"
                >
                  Team
                </vs-radio>
              </div>
            </div>
          </div>
          <div class="vx-col">
            <div>
              <label class="text-xs">Equipment Type</label>
              <v-select
                :options="equipmentTypeOptions"
                v-model="value.equipmentType"
                placeholder="Equipment Type"
                label="title"
                :clearable="true"
                :reduce="(option) => option.value"
                class="equipment-dropdown"
              />
            </div>
          </div>
        </div>
        <span class="text-danger text-sm">
          {{ errors.first('numberOfTrucks') }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import config from '@/config/constants.js';
export default {
  name: 'LoadBasicInfo',
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      configDateFlatPickr: {
        enableTime: false,
        dateFormat: 'Y-m-d',
      },
      equipmentTypeOptions: config.planning.equipmentTypes,
      validationDict: {
        custom: {
          numberOfTrucks: {
            required: 'Number of trucks is required',
            numeric: 'The field must be numeric with no decimal',
            max_value: 'Number of trucks must be less than 32767',
            min_value: 'Number of trucks must be greater than 0',
          },
        },
      },
    };
  },
  created() {
    this.$validator.localize('en', this.validationDict);
  },
  methods: {
    setLoadType(type) {
      if (type && type !== this.value.loadType) {
        this.$emit('input', { ...this.value, loadType: type });
      }
    },
    async validateForm() {
      await this.$validator.validateAll();
      if (this.errors.items.length) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
h4 {
  color: #343434;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
}
label {
  color: #343434;
  font-weight: 500;
}
.top-nav-item {
  width: 200px;
  margin: 0px 4px;
  padding: 8px;
  border: 1px solid #d8d8d8;
  cursor: pointer;

  p {
    text-align: center;
  }
}
.btn--active {
  background-color: rgb(0, 82, 204) !important;
  border: 1px solid rgb(0, 82, 204) !important;
  color: #fff;
}
.equipment-dropdown{
  min-width: 200px;
}
</style>
