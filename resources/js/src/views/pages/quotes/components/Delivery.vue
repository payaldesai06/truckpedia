<template>
  <div>
    <div class="vx-row">
      <div class="vx-col w-1/4">
        <label class="text-xs">Delivery Address <field-required-sign /></label>
        <vx-input-group>
          <template slot="prepend">
            <div class="prepend-text" style="background-color: #3975eb1a">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M15.3033 14.4703L10 19.7736L4.6967 14.4703C1.76777 11.5413 1.76777 6.79263 4.6967 3.86369C7.62563 0.934759 12.3743 0.934759 15.3033 3.86369C18.2323 6.79263 18.2323 11.5413 15.3033 14.4703ZM10 10.8337C10.9205 10.8337 11.6667 10.0875 11.6667 9.16699C11.6667 8.24652 10.9205 7.50033 10 7.50033C9.0795 7.50033 8.33333 8.24652 8.33333 9.16699C8.33333 10.0875 9.0795 10.8337 10 10.8337Z"
                  fill="#3975EB"
                />
              </svg>
            </div>
          </template>
          <div class="vs-con-input">
            <gmap-autocomplete
              class="vs-inputx vs-input--input"
              :value="formattedAddress"
              placeholder=""
              @place_changed="setPlace($event)"
              :options="googleMapAutoCompleteOptions"
              :select-first-on-enter="true"
            >
            </gmap-autocomplete>
          </div>
        </vx-input-group>
        <span class="text-danger text-sm" v-if="validationErrors.address">
          {{ validationErrors.address }}
        </span>
      </div>

      <div class="vx-col w-1/8">
        <div>
          <label class="text-xs">Date</label>
        </div>
        <div class="relative">
          <flat-pickr
            class="w-full"
            v-model="value.date"
            :config="configDateFlatPickr"
            placeholder="Select a date"
            label="Date"
          />
          <!-- Add the calendar icon here -->
          <span
            class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M14.501 2.49967H17.8343C18.2946 2.49967 18.6676 2.87277 18.6676 3.33301V16.6663C18.6676 17.1266 18.2946 17.4997 17.8343 17.4997H2.83431C2.37408 17.4997 2.00098 17.1266 2.00098 16.6663V3.33301C2.00098 2.87277 2.37408 2.49967 2.83431 2.49967H6.16764V0.833008H7.83431V2.49967H12.8343V0.833008H14.501V2.49967ZM3.66764 7.49967V15.833H17.001V7.49967H3.66764ZM5.33431 9.16634H7.00098V10.833H5.33431V9.16634ZM9.50098 9.16634H11.1676V10.833H9.50098V9.16634ZM13.6676 9.16634H15.3343V10.833H13.6676V9.16634Z"
                fill="#3975EB"
              />
            </svg>
          </span>
        </div>
      </div>

      <div class="vx-col w-1/8">
        <div>
          <label class="text-xs">
            Time
            <vs-button
              color="warning"
              type="flat"
              size="small"
              style="padding: 0; margin-left: 1rem"
              @click="value.time = ''"
            >
              Clear
            </vs-button>
          </label>
        </div>
        <div class="relative">
          <flat-pickr
            v-model="value.time"
            :config="configTimeFlatPickr"
            class="w-full"
          />
        </div>
      </div>

      <div class="vx-col w-1/8">
        <div>
          <label class="text-xs">
            End Date
            <vs-button
              color="warning"
              type="flat"
              size="small"
              style="padding: 0; margin-left: 1rem"
              @click="value.endDate = ''"
            >
              Clear
            </vs-button>
          </label>
        </div>
        <div class="relative">
          <flat-pickr
            class="w-full"
            v-model="value.endDate"
            :config="configDateFlatPickr"
            placeholder="Select a date"
            label="Date"
          />
          <!-- Add the calendar icon here -->
          <span
            class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M14.501 2.49967H17.8343C18.2946 2.49967 18.6676 2.87277 18.6676 3.33301V16.6663C18.6676 17.1266 18.2946 17.4997 17.8343 17.4997H2.83431C2.37408 17.4997 2.00098 17.1266 2.00098 16.6663V3.33301C2.00098 2.87277 2.37408 2.49967 2.83431 2.49967H6.16764V0.833008H7.83431V2.49967H12.8343V0.833008H14.501V2.49967ZM3.66764 7.49967V15.833H17.001V7.49967H3.66764ZM5.33431 9.16634H7.00098V10.833H5.33431V9.16634ZM9.50098 9.16634H11.1676V10.833H9.50098V9.16634ZM13.6676 9.16634H15.3343V10.833H13.6676V9.16634Z"
                fill="#3975EB"
              />
            </svg>
          </span>
        </div>
      </div>

      <div class="vx-col w-1/8">
        <div>
          <label class="text-xs">
            End Time
            <vs-button
              color="warning"
              type="flat"
              size="small"
              style="padding: 0; margin-left: 1rem"
              @click="value.time = ''"
            >
              Clear
            </vs-button>
          </label>
        </div>
        <div class="relative">
          <flat-pickr
            v-model="value.endTime"
            :config="configTimeFlatPickr"
            class="w-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from '@/config/constants.js';
import quoteCommonFunctions from '../mixins/quoteCommonFunctions';

export default {
  name: 'Delivery',
  mixins: [quoteCommonFunctions],
  props: {
    value: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      configDateFlatPickr: {
        enableTime: false,
        dateFormat: 'Y-m-d',
      },
      configTimeFlatPickr: {
        enableTime: true,
        noCalendar: true,
        time_24hr: true,
      },
      // google map autocomplete options
      googleMapAutoCompleteOptions: config.googleMapAutoCompleteOptions,
      validationErrors: {
        address: null,
      },
    };
  },

  methods: {
    // Call this method to validate the form from parent component using ref
    validateForm() {
      this.validateAddress();

      return !this.validationErrors.address;
    },
  },
};
</script>

<style scoped>
label {
  color: #343434;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
}
h4 {
  color: #343434;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
}
</style>
