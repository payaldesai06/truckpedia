<template>
  <div>
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="vx-row">
          <div class="vx-col w-1/4">
            <label class="text-xs">
              Pick Up Address
              <field-required-sign />
            </label>
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
                  placeholder=""
                  :value="formattedAddress"
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
              <label class="text-xs">Date<field-required-sign /></label>
            </div>
            <div class="relative">
              <flat-pickr
                class="w-full"
                v-model="value.date"
                :config="configDateFlatPickr"
                placeholder="Select a date"
                label="Date"
              />
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
            <span class="text-danger text-sm" v-if="validationErrors.date">
              {{ validationErrors.date }}
            </span>
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
                  @click="value.endTime = ''"
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
        <div class="vx-row mt-5">
          <div class="vx-col w-full">
            <label class="text-xs">Notes</label>
            <vs-textarea class="w-full" v-model="value.note"></vs-textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col w-full">
        <!-- <h4>Commodities</h4> -->
        <div class="vx-row">
          <div class="vx-col w-full flex gap-8">
            <div>
              <label class="text-xs">Goods Value</label>
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
                          d="M12.0049 22.0029C6.48204 22.0029 2.00488 17.5258 2.00488 12.0029C2.00488 6.48008 6.48204 2.00293 12.0049 2.00293C17.5277 2.00293 22.0049 6.48008 22.0049 12.0029C22.0049 17.5258 17.5277 22.0029 12.0049 22.0029ZM8.50488 14.0029V16.0029H11.0049V18.0029H13.0049V16.0029H14.0049C15.3856 16.0029 16.5049 14.8836 16.5049 13.5029C16.5049 12.1222 15.3856 11.0029 14.0049 11.0029H10.0049C9.72874 11.0029 9.50488 10.7791 9.50488 10.5029C9.50488 10.2268 9.72874 10.0029 10.0049 10.0029H15.5049V8.00293H13.0049V6.00293H11.0049V8.00293H10.0049C8.62417 8.00293 7.50488 9.12222 7.50488 10.5029C7.50488 11.8836 8.62417 13.0029 10.0049 13.0029H14.0049C14.281 13.0029 14.5049 13.2268 14.5049 13.5029C14.5049 13.7791 14.281 14.0029 14.0049 14.0029H8.50488Z"
                          fill="#3975EB"
                        />
                      </svg>
                    </span>
                  </div>
                </template>
                <vs-input
                  type="number"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  v-model.number="value.goodsValue"
                  @blur="validateGoodsValue"
                />
              </vx-input-group>
              <span
                class="text-danger text-sm"
                v-if="validationErrors.goodsValue"
              >
                {{ validationErrors.goodsValue }}
              </span>
            </div>
            <div>
              <label class="text-xs">Total Shipment Weight</label>
              <vx-input-group>
                <vs-input
                  type="number"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  v-model.number="value.weight"
                  @blur="validateWeight"
                />
              </vx-input-group>
              <span class="text-danger text-sm" v-if="validationErrors.weight">
                {{ validationErrors.weight }}
              </span>
            </div>
            <div>
              <label class="text-xs">Weight Unit</label>
              <vx-input-group>
                <v-select
                  :options="weightOptions"
                  label="label"
                  :reduce="(option) => option.value"
                  :clearable="true"
                  :dir="$vs.rtl ? 'rtl' : 'ltr'"
                  v-model="value.weightUnit"
                  style="min-width: 120px"
                />
              </vx-input-group>
            </div>
            <div>
              <label class="text-xs">Freight Details</label>
              <vs-input
                placeholder="Type your commodities"
                v-model="value.description"
              />
            </div>
            <div>
              <label class="text-xs">Hazardous Goods</label>
              <div class="my-3">
                <vs-radio
                  v-model="value.hazmat"
                  :vs-name="`hazardous-goods-${index}`"
                  vs-value="no"
                >
                  No
                </vs-radio>
                <vs-radio
                  v-model="value.hazmat"
                  :vs-name="`hazardous-goods-${index}`"
                  vs-value="yes"
                >
                  Yes
                </vs-radio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from '@/config/constants.js';
import quoteCommonFunctions from '../mixins/quoteCommonFunctions';

export default {
  name: 'Pickup',
  mixins: [quoteCommonFunctions],
  props: {
    value: {
      type: Object,
      default: () => {},
    },
    index: { type: Number, default: 0 },
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
      weightOptions: [
        { label: 'lbs', value: 'lb' },
        { label: 'tons', value: 'ton' },
        { label: 'kg', value: 'kg' },
      ],
      validationErrors: {
        address: null,
        goodsValue: null,
        weight: null,
        date: null,
      },
    };
  },

  methods: {
    validateGoodsValue() {
      /*
      if (this.value.goodsValue == null) {
        this.validationErrors.goodsValue = 'Goods value is required';
      } else
      */
      if (this.value.goodsValue < 0) {
        this.validationErrors.goodsValue =
          'Goods value must be greater than or equal to 0';
      } else {
        this.validationErrors.goodsValue = null;
      }
    },
    validateWeight() {
      /*
      if (this.value.weight == null) {
        this.validationErrors.weight = 'Weight is required';
      } else 
      */
      if (this.value.weight < 0) {
        this.validationErrors.weight =
          'Weight must be greater than or equal to 0';
      } else {
        this.validationErrors.weight = null;
      }
    },
    validateDate() {
      if (!this.value.date) {
        this.validationErrors.date = 'Please provide pickup date';
      } else {
        this.validationErrors.date = null;
      }
    },
    // Call this method to validate the form from parent component using ref
    validateForm() {
      this.validateAddress();
      this.validateGoodsValue();
      this.validateWeight();
      this.validateDate();

      return (
        !this.validationErrors.address &&
        !this.validationErrors.goodsValue &&
        !this.validationErrors.weight &&
        !this.validationErrors.date
      );
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
