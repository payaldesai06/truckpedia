<template>
  <vs-popup :active.sync="togglePopup" title="">
    <template>
      <div>
        <div class="w-full">
          <template v-if="currentStep === 1">
            <div class="vs-row w-full" @click="setCurrentStep(2)">
              <div class="option-wrap">
                <div class="flex items-center">
                  <div class="iconType pr-4">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 384 512"
                      color="#65d9a5"
                      height="40px"
                      width="40px"
                      xmlns="http://www.w3.org/2000/svg"
                      style="color: rgb(101, 217, 165)"
                    >
                      <path
                        d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm-96 144c0 4.42-3.58 8-8 8h-8c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h8c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8h-8c-26.51 0-48-21.49-48-48v-32c0-26.51 21.49-48 48-48h8c4.42 0 8 3.58 8 8v16zm44.27 104H160c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h12.27c5.95 0 10.41-3.5 10.41-6.62 0-1.3-.75-2.66-2.12-3.84l-21.89-18.77c-8.47-7.22-13.33-17.48-13.33-28.14 0-21.3 19.02-38.62 42.41-38.62H200c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8h-12.27c-5.95 0-10.41 3.5-10.41 6.62 0 1.3.75 2.66 2.12 3.84l21.89 18.77c8.47 7.22 13.33 17.48 13.33 28.14.01 21.29-19 38.62-42.39 38.62zM256 264v20.8c0 20.27 5.7 40.17 16 56.88 10.3-16.7 16-36.61 16-56.88V264c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v20.8c0 35.48-12.88 68.89-36.28 94.09-3.02 3.25-7.27 5.11-11.72 5.11s-8.7-1.86-11.72-5.11c-23.4-25.2-36.28-58.61-36.28-94.09V264c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8zm121-159L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"
                      ></path>
                    </svg>
                  </div>
                  <div class="txtType">
                    <p>UPLOAD</p>
                    <h3>Excel/CSV</h3>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-if="currentStep === 2">
            <div
              class="flex items-center mt-2 mb-4 header"
              @click="setCurrentStep(1)"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-left fea text-dark icon-xs cursor-pointer"
                style="stroke-width: 3px; margin-top: -2px"
              >
                <g><polyline points="15 18 9 12 15 6"></polyline></g>
              </svg>
              <span class="text-muted pb-1 cursor-pointer"> Back </span>
            </div>
            <vs-divider />
            <CsvUpload
              :colTypes="csvColTypes"
              :maxRows="500"
              checkDuplicates
              @updateCsvData="updateSelectedFuelSurcharges"
            />
          </template>
        </div>
      </div>
    </template>
    <div class="flex items-center justify-between mt-5 footer">
      <vs-button type="border" @click="closePopup()"> Cancel </vs-button>
      <vs-button
        v-if="currentStep === 2"
        :disabled="isImportFcBtnDisabled"
        @click="handleSubmit"
      >
        Import Fuel Surcharges
      </vs-button>
    </div>
  </vs-popup>
</template>

<script>
import { getApiErrorMsg } from '@/helpers/helper';
import globalMixins from '@/mixins/globalMixins';
import config from '@/config/constants';
export default {
  props: {
    popupActive: {
      type: Boolean,
      default: () => false,
    },
  },
  components: {
    CsvUpload: () => import('@/components/custom/CsvUpload.vue'),
  },
  data() {
    return {
      currentStep: 1,
      csvColTypes: [
        { label: 'Reference Number', value: 'reference' },
        { label: 'Fuel Surcharge', value: 'fuelSurcharge' },
      ],
      uploadedFuelSurcharges: [],
    };
  },
  mixins: [globalMixins],
  computed: {
    togglePopup: {
      get() {
        return this.popupActive;
      },
      set(val) {
        if (!val) {
          this.closePopup();
        }
      },
    },
    isImportFcBtnDisabled() {
      return !this.uploadedFuelSurcharges.length;
    },
  },
  methods: {
    setCurrentStep(step) {
      this.currentStep = step;
    },
    closePopup() {
      this.$emit('onClose');
      this.setCurrentStep(1);
      this.resetForm();
    },
    resetForm() {
      this.uploadedFuelSurcharges = [];
    },
    updateSelectedFuelSurcharges(fuelSurcharges) {
      if (fuelSurcharges) {
        const clonnedFuelSurcharges = structuredClone(fuelSurcharges);
        // checking if fuel surcharge and load reference has multiple values
        const allowedColTypes = this.csvColTypes.map(({ value }) => value);
        this.uploadedFuelSurcharges = this.uploadedFuelSurcharges.filter(
          ({ id }) => id !== clonnedFuelSurcharges.id
        );

        if (allowedColTypes.includes(fuelSurcharges.colType)) {
          this.uploadedFuelSurcharges.push(clonnedFuelSurcharges);
        }
      } else {
        this.uploadedFuelSurcharges = [];
      }
    },
    async handleSubmit() {
      try {
        const references = this.uploadedFuelSurcharges.find(
          (item) => item.colType === 'reference'
        );

        const fuelSurcharges = this.uploadedFuelSurcharges.find(
          (item) => item.colType === 'fuelSurcharge'
        );

        if (!references || !fuelSurcharges) {
          this.showErrorMessage(
            `Please select column for ${
              !references ? 'Reference Number' : 'Fuel Surcharges'
            }.`
          );
          return;
        }

        // convert amount in to number
        fuelSurcharges.colData = fuelSurcharges.colData.map((value) => {
          return value;
        });

        const hasErrorInReference = references.colData.some(
          (item) => (!item && item != 0) || (item && item.includes(','))
        );
        const hasErrorInFc = fuelSurcharges.colData.some(
          (item) =>
            (!item && item != 0) ||
            (typeof item === 'string' && item.includes(',')) ||
            isNaN(item)
        );
        if (hasErrorInReference || hasErrorInFc) {
          this.showErrorMessage(
            `Invalid values found in ${
              hasErrorInReference ? 'Reference Number' : 'Fuel Surcharges'
            }. Make sure all values are valid in ${
              hasErrorInReference ? 'Reference Number' : 'Fuel Surcharges'
            }`
          );
          return;
        }
        // checking if fuelSurcharge has greater value than 9999.99 or less than -9999.99;
        const hasInvalidValue = fuelSurcharges.colData.some(
          (item) => Number(item) < -9999.99 || item > 9999.99
        );
        if (hasInvalidValue) {
          this.showErrorMessage(
            'Fuel surcharge should be less than 9999.99 and greater than -9999.99.'
          );
          return;
        }
        const loads = references.colData.map((reference, index) => {
          return {
            reference,
            fuelSurcharge: fuelSurcharges.colData[index],
          };
        });
        const payload = {
          customerId: this.user.admin_company_detail_id == 286 ? 35151 : 2167,
          loads,
        };
        this.$vs.loading();
        const response = await this.$store.dispatch(
          'report/importFuelSurcharge',
          payload
        );
        let notFoundLoads = [];
        let failedUploadedLoads = [];
        response.loads.filter((load, index) => {
          if (!load.id) {
            notFoundLoads.push(loads[index].reference);
          } else if (!load.result) {
            failedUploadedLoads.push(loads[index].reference);
          }
        });
        if (failedUploadedLoads.length || notFoundLoads.length) {
          this.$emit(
            'showFailedLoadsPopup',
            notFoundLoads,
            failedUploadedLoads
          );
        } else {
          this.showSuccessMessage('Fuel surcharges imported successfully');
        }
        this.closePopup();
      } catch (error) {
        this.showErrorMessage(getApiErrorMsg(error));
      } finally {
        this.$vs.loading.close();
      }
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep {
  .vs-popup--header {
    display: none;
  }
}

.option-wrap {
  cursor: pointer;
  transition: box-shadow 0.5s ease 0s;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px, rgba(0, 0, 0, 0.06) 0px 2px 12px;
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 25px;
  .txtType {
    border-left: 1px solid rgb(189, 189, 189);
    padding-left: 15px;
    p {
      text-transform: uppercase;
      font-size: 14px;
      margin-bottom: 7px;
    }
    h3 {
      color: rgb(60, 60, 60);
      margin: 0px;
      font-size: 1.7rem;
      font-weight: 600;
    }
  }
}

.option-wrap:hover {
  box-shadow: rgba(0, 0, 0, 0.176) 0px 1rem 3rem;
  border: 2px solid rgb(60, 60, 60);
}

.footer{
  position: sticky;
  bottom: 0;
  background-color: #fff;
  z-index: 1;
}
</style>
