<template>
  <div>
    <!-- Accounting Section -->
    <!-- <vx-card class="mt-4">
      <div class="vx-row flex justify-between items-end">
        <div class="vx-col self-center">
          <h5 class="font-bold">Accounting</h5>
        </div>
        <div class="vx-col flex gap-2">
          <vs-input class="w-full" :value="'Custom'" />
          <vs-input class="w-full" :value="'01/01/2022 to 09/27/2022'" />
        </div>
      </div>
    </vx-card> -->

    <!-- Compensation, Payment Info, Tax Container -->
    <div>
      <div class="accounting-container">
        <div class="left-block block mt-4">
          <!-- Compensation Section -->
          <vx-card class="w-full">
            <div class="vx-row">
              <div class="vx-col">
                <h5 class="font-bold">Compensation</h5>
              </div>
            </div>
            <vs-divider />
            <div class="vx-row">
              <div class="vx-col w-full">
                <!-- <label class="text-xs">Pay Type <field-required-sign /> </label> -->
                <div class="mt-1 flex w-full">
                  <div class="vx-row w-full">
                    <div class="vx-col w-3/4" style="display: flex-root">
                      <template v-if="showAllDriverPayTypes">
                        <vs-radio
                          v-model="formData.driverPayType"
                          vs-value="per_mile"
                          class="vx-col ml-2"
                        >
                          Per Mile
                        </vs-radio>
                        <vs-radio
                          v-model="formData.driverPayType"
                          vs-value="hourly"
                          class="vx-col ml-2"
                        >
                          Hourly
                        </vs-radio>
                        <vs-radio
                          v-model="formData.driverPayType"
                          vs-value="percentage"
                          class="vx-col ml-2"
                        >
                          Percentage
                        </vs-radio>
                        <vs-radio
                          v-model="formData.driverPayType"
                          vs-value="flat"
                          class="vx-col ml-2"
                        >
                          Flatpay
                        </vs-radio>
                      </template>
                      <vs-radio
                        v-model="formData.driverPayType"
                        vs-value="template"
                        class="vx-col ml-2"
                      >
                        Customize
                      </vs-radio>
                      <span></span>
                    </div>
                    <div class="vx-col w-1/4">
                      <label
                        v-if="formData.driverPayType"
                        class="text-xs font-semibold mt-1 ml-4 cursor-pointer text-primary flex justify-end"
                        @click="formData.driverPayType = ''"
                      >
                        Clear
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <!-- Per Mile Form -->
              <template v-if="formData.driverPayType === 'per_mile'">
                <div class="vx-row mt-4 min-height-80">
                  <div class="vx-col w-full">
                    <label class="text-xs">Per Mile</label>
                    <vs-input
                      class="w-full"
                      type="number"
                      v-model.number="formData.perMileCharge"
                      @blur="
                        validateField('perMileCharge', [
                          'required',
                          'int',
                          'float',
                        ])
                      "
                    />
                    <label
                      class="text-danger"
                      v-if="validationMsg.perMileCharge"
                      v-text="validationMsg.perMileCharge"
                    />
                  </div>
                </div>
                <div class="vx-row min-height-80">
                  <div class="vx-col w-1/2">
                    <label class="text-xs">Pay Per Stop</label>
                    <vs-input
                      class="w-full"
                      type="number"
                      v-model.number="formData.payPerStopRate"
                      @blur="
                        validateField('payPerStopRate', [
                          'required',
                          'int',
                          'float',
                        ])
                      "
                    />
                    <label
                      class="text-danger"
                      v-if="validationMsg.payPerStopRate"
                      v-text="validationMsg.payPerStopRate"
                    />
                  </div>
                  <div class="vx-col w-1/2">
                    <label class="text-xs">Start After (Stops)</label>
                    <vs-input
                      class="w-full"
                      type="number"
                      v-model.number="formData.payPerStopStartAfter"
                      @blur="
                        validateField('payPerStopStartAfter', [
                          'required',
                          'int',
                        ])
                      "
                    />
                    <label
                      class="text-danger"
                      v-if="validationMsg.payPerStopStartAfter"
                      v-text="validationMsg.payPerStopStartAfter"
                    />
                  </div>
                </div>
                <div class="vx-row min-height-80">
                  <div class="vx-col w-1/2">
                    <label class="text-xs">Detention</label>
                    <vs-input
                      class="w-full"
                      type="number"
                      v-model.number="formData.detentionRate"
                      @blur="
                        validateField('detentionRate', [
                          'required',
                          'int',
                          'float',
                        ])
                      "
                    />
                    <label
                      class="text-danger"
                      v-if="validationMsg.detentionRate"
                      v-text="validationMsg.detentionRate"
                    />
                  </div>
                  <div class="vx-col w-1/2">
                    <label class="text-xs">Start After (Hours)</label>
                    <vs-input
                      class="w-full"
                      type="number"
                      v-model.number="formData.detentionStartAfter"
                      @blur="
                        validateField('detentionStartAfter', [
                          'required',
                          'int',
                        ])
                      "
                    />
                    <label
                      class="text-danger"
                      v-if="validationMsg.detentionStartAfter"
                      v-text="validationMsg.detentionStartAfter"
                    />
                  </div>
                </div>
                <div class="vx-row min-height-80">
                  <div class="vx-col w-1/2">
                    <label class="text-xs">Layover</label>
                    <vs-input
                      class="w-full"
                      type="number"
                      v-model.number="formData.layoverRate"
                      @blur="
                        validateField('layoverRate', [
                          'required',
                          'int',
                          'float',
                        ])
                      "
                    />
                    <label
                      class="text-danger"
                      v-if="validationMsg.layoverRate"
                      v-text="validationMsg.layoverRate"
                    />
                  </div>
                  <div class="vx-col w-1/2">
                    <label class="text-xs">Start After (Hours)</label>
                    <vs-input
                      class="w-full"
                      type="number"
                      v-model.number="formData.layoverStartAfter"
                      @blur="
                        validateField('layoverStartAfter', ['required', 'int'])
                      "
                    />
                    <label
                      class="text-danger"
                      v-if="validationMsg.layoverStartAfter"
                      v-text="validationMsg.layoverStartAfter"
                    />
                  </div>
                </div>
              </template>
              <!-- Hourly Form -->
              <template v-if="formData.driverPayType === 'hourly'">
                <div class="vx-row mt-4">
                  <div class="vx-col w-full">
                    <label class="text-xs">Rate</label>
                    <vx-input-group>
                      <template slot="prepend">
                        <div class="prepend-text bg-primary">
                          <span>$</span>
                        </div>
                      </template>
                      <vs-input
                        type="number"
                        v-model.number="formData.hourlyRate"
                        @blur="
                          validateField('hourlyRate', [
                            'required',
                            'int',
                            'float',
                          ])
                        "
                      />
                      <label
                        class="text-danger"
                        v-if="validationMsg.hourlyRate"
                        v-text="validationMsg.hourlyRate"
                      />
                    </vx-input-group>
                  </div>
                </div>
              </template>
              <!-- Percentage Form -->
              <template v-if="formData.driverPayType === 'percentage'">
                <div class="mt-4 w-full">
                  <label class="text-xs">Load Pay Percentage</label>
                  <div class="flex w-full">
                    <div class="vx-col w-1/2">
                      <vs-input
                        class="w-full"
                        type="number"
                        v-model.number="formData.loadPayPercentage"
                        @blur="
                          validateField('loadPayPercentage', [
                            'required',
                            'min',
                            'max',
                          ])
                        "
                      />
                      <label
                        class="text-danger"
                        v-if="validationMsg.loadPayPercentage"
                        v-text="validationMsg.loadPayPercentage"
                      />
                    </div>
                    <label class="ml-2 mt-2 font-semibold w-12">% of</label>
                    <div class="vx-col w-1/2">
                      <v-select
                        :options="loadPayPercentOptions"
                        label="title"
                        :reduce="(option) => option.value"
                        :clearable="false"
                        v-model="formData.loadPayPercentageOf"
                        class="w-full"
                      />
                    </div>
                  </div>
                </div>
              </template>

              <template v-if="formData.driverPayType === 'flat'">
                <div class="vx-row mt-4">
                  <div class="vx-col w-1/2 flex flex-col">
                    <label class="text-xs">Frequency</label>
                    <!-- <label class="text-xs font-bold">-</label> -->
                    <v-select
                      :options="frequencyOptions"
                      label="title"
                      :reduce="(option) => option.value"
                      :clearable="false"
                      v-model="formData.flatPayFrequency"
                      class="w-full"
                      @change="validateField('flatPayFrequency', ['required'])"
                    />
                    <label
                      class="text-danger"
                      v-if="validationMsg.flatPayFrequency"
                      v-text="validationMsg.flatPayFrequency"
                    />
                  </div>
                  <div class="vx-col w-1/2 flex flex-col">
                    <label class="text-xs">Flat Pay Rate</label>
                    <!-- <label class="text-xs font-bold">-</label> -->
                    <vs-input
                      class="w-full"
                      v-model.number="formData.flatPayRate"
                      type="number"
                      @blur="
                        validateField('flatPayRate', [
                          'required',
                          'int',
                          'float',
                        ])
                      "
                    />
                    <label
                      class="text-danger"
                      v-if="validationMsg.flatPayRate"
                      v-text="validationMsg.flatPayRate"
                    />
                  </div>
                </div>
              </template>
            </div>
          </vx-card>
          <vx-card
            class="mt-2 driver-pay-template-incolum-block"
            v-if="formData.driverPayType === 'template'"
          >
            <DriverPayTemplateBlock
              v-model="formData.driverPayTemplate"
              :hideName="true"
            />
          </vx-card>
        </div>

        <div class="center-block mt-4">
          <!-- Payment Info Section -->
          <vx-card class="w-full">
            <div class="vx-row flex justify-between items-end">
              <div class="vx-col">
                <h5 class="font-bold">Payment Info</h5>
              </div>
              <!-- <div class="vx-col">
                <vs-icon size="small" icon="edit" />
              </div> -->
            </div>
            <vs-divider />
            <div class="vx-row">
              <!-- <div class="vx-col w-1/3 flex flex-col">
                <label class="text-xs">Trucks#</label>
                <label class="text-xs font-bold">Unusual Carriers</label>
              </div> -->
              <div class="vx-col w-1/2 flex flex-col gap-1">
                <div class="vx-row p-2">
                  <vs-radio
                    class="text-xs m-3"
                    vs-name="paymentMethod"
                    vs-value="check"
                    v-model="formData.paymentMethod"
                  >
                    Check
                  </vs-radio>
                  <vs-radio
                    class="text-xs"
                    vs-name="paymentMethod"
                    vs-value="directDeposit"
                    v-model="formData.paymentMethod"
                  >
                    Direct Deposit
                  </vs-radio>
                </div>
              </div>
              <div class="vx-col w-1/2 flex flex-col">
                <label class="text-xs">Financial Institution Name</label>
                <vs-input
                  class="w-full"
                  v-model="formData.financialInstitutionName"
                />
              </div>
            </div>
            <div class="vx-row mt-5">
              <div class="vx-col w-1/2 flex flex-col">
                <label class="text-xs">Account Number</label>
                <vs-input class="w-full" v-model="formData.accountNumber" />
              </div>
              <div class="vx-col w-1/2 flex flex-col">
                <label class="text-xs">Routing Number</label>
                <vs-input class="w-full" v-model="formData.routingNumber" />
              </div>
            </div>
          </vx-card>
        </div>

        <div class="right-block mt-4">
          <!-- Tax Section -->
          <vx-card class="w-full">
            <div class="vx-row flex justify-between items-end">
              <div class="vx-col">
                <h5 class="font-bold">Tax</h5>
              </div>
              <!-- <div class="vx-col">
                <vs-icon size="small" icon="edit" />
              </div> -->
            </div>
            <vs-divider />
            <div class="flex">
              <div class="vx-col">
                <div class="vx-row">
                  <div class="vx-col w-1/2 flex flex-col mt-4">
                    <vs-radio
                      class="text-xs"
                      vs-name="taxForm"
                      vs-value="w2"
                      v-model="formData.taxForm"
                    >
                      Employee (W2)
                    </vs-radio>
                    <vs-radio
                      class="text-xs mt-2"
                      vs-name="taxForm"
                      vs-value="1099"
                      v-model="formData.taxForm"
                    >
                      Contractor (1099)
                    </vs-radio>
                  </div>
                  <div class="vx-col w-1/2 flex flex-col">
                    <label class="text-xs">Pay Frequency</label>
                    <!-- <label class="text-xs font-bold">-</label> -->
                    <v-select
                      :options="frequencyOptions"
                      label="title"
                      :reduce="(option) => option.value"
                      :clearable="true"
                      v-model="formData.payFrequency"
                      class="w-full"
                    />
                  </div>
                </div>
                <div class="vx-row mt-4">
                  <!-- <div class="vx-col w-1/2 flex flex-col">
                    <label class="text-xs">Allowances</label>
                    <vs-input
                      type="number"
                      min="0"
                      max="100"
                      class="w-full"
                      v-model.number="formData.allowances"
                      @input="validateField('allowances', ['max', 'min'])"
                    />
                    <label
                      class="text-danger"
                      v-if="validationMsg.allowances"
                      v-text="validationMsg.allowances"
                    />
                  </div> -->
                  <div class="vx-col w-1/2 flex flex-col">
                    <label class="text-xs">Dependents and Credits</label>
                    <vx-input-group>
                      <template slot="prepend">
                        <div class="prepend-text bg-primary">
                          <span>$</span>
                        </div>
                      </template>
                      <vs-input
                        type="number"
                        min="0"
                        max="999999"
                        class="w-full"
                        v-model.number="formData.taxFederalCredits"
                        @input="validateField('allowances', ['max', 'min'])"
                      />
                    </vx-input-group>
                    <label
                      class="text-danger"
                      v-if="validationMsg.taxFederalCredits"
                      v-text="validationMsg.taxFederalCredits"
                    />
                  </div>
                  <div class="vx-col w-1/2 flex flex-col">
                    <label class="text-xs">Withholding</label>
                    <vx-input-group>
                      <template slot="prepend">
                        <div class="prepend-text bg-primary">
                          <span>$</span>
                        </div>
                      </template>
                      <vs-input
                        class="w-full"
                        v-model.number="formData.withholding"
                        @input="validateField('withholding', ['min'])"
                      />
                    </vx-input-group>
                    <label
                      class="text-danger"
                      v-if="validationMsg.withholding"
                      v-text="validationMsg.withholding"
                    />
                  </div>
                </div>
                <div class="vx-row ml-2 mt-4">
                  <label class="text-xs">Filing Status</label>
                  <!-- <label class="text-xs font-bold">-</label> -->
                  <v-select
                    :options="filingStatusOptions"
                    label="title"
                    :reduce="(option) => option.value"
                    :clearable="true"
                    v-model="formData.filingStatus"
                    class="w-full"
                  />
                </div>
              </div>
              <div class="vx-col ml-20">
                <div class="vx-row">
                  <vs-checkbox class="text-xs" v-model="formData.taxMedicare"
                    >Medicare</vs-checkbox
                  >
                </div>
                <div class="vx-row">
                  <vs-checkbox
                    class="text-xs mt-3"
                    v-model="formData.taxAdvanceEarnedIncomeCredit"
                  >
                    Advance Earned Income Credit
                  </vs-checkbox>
                </div>
                <div class="vx-row">
                  <vs-checkbox
                    class="text-xs mt-3"
                    v-model="formData.taxSocialSecurity"
                    >Social Security</vs-checkbox
                  >
                </div>
                <div class="vx-row">
                  <vs-checkbox
                    class="text-xs mt-3"
                    v-model="formData.taxFederalTax"
                  >
                    Federal Tax
                  </vs-checkbox>
                </div>
              </div>
            </div>
          </vx-card>
        </div>
      </div>
      <div class="driver-pay-template-multi-colum-block">
        <div class="vx-row" style="padding-right: 4rem">
          <div class="vx-col w-2/3">
            <vx-card class="mt-2" v-if="formData.driverPayType === 'template'">
              <DriverPayTemplateBlock
                v-model="formData.driverPayTemplate"
                :hideName="true"
              />
            </vx-card>
          </div>
          <div class="vx-col w-2/3"></div>
        </div>
      </div>
    </div>
    <vx-card class="mt-4" v-if="showButtonsData">
      <div class="vx-row">
        <div class="vx-col ml-auto">
          <vs-button @click.stop="submitForm">SAVE</vs-button>
          <vs-button type="border" @click.stop="restoreData">
            CANCEL
          </vs-button>
        </div>
      </div>
    </vx-card>
    <!-- Recurring Deductions and Adjustments Section -->
    <!-- <vx-card class="mt-4">
      <div class="vx-row flex justify-between items-end">
        <div class="vx-col self-center">
          <h5 class="font-bold">Recurring Deductions and Adjustments</h5>
        </div>
        <div class="vx-col flex gap-2">
          <vs-button color="primary" size="small" icon="add">ADD </vs-button>
          <vs-input class="w-full" :value="'25 rows'" />
        </div>
      </div>
      <vs-divider />
      <div class="vx-row">
        <div class="vx-col w-full">
          <DataTable :value="[]" responsiveLayout="scroll">
            <Column field="id" header="Description" />
            <Column field="startDate" header="Start Date" />
            <Column field="endDate" header="End Date" />
            <Column field="frequency" header="Frequency" />
            <Column field="amount" header="Amount" />
            <Column field="iif" header="IIF" />
            <Column field="actions" header="Actions" />
            <template #empty><b>No matching records found</b></template>
            <template #footer>
              <div class="vx-row">
                <div class="vx-col w-full text-center">
                  <label class="text-xs">Total</label>
                  <label class="text-xs text-red">2000.00</label>
                </div>
              </div>
              <div class="vx-row flex justify-between">
                <div class="vx-col">1-25 of 51</div>
                <div class="vx-col">
                  <vs-pagination :total="3" :value="1" />
                </div>
              </div>
            </template>
          </DataTable>
        </div>
      </div>
    </vx-card> -->

    <!-- One-Time Deductions and Adjustment -->
    <!-- <vx-card class="mt-4">
      <div class="vx-row flex justify-between items-end">
        <div class="vx-col self-center">
          <h5 class="font-bold">One-Time Deductions and Adjustment</h5>
        </div>
        <div class="vx-col flex gap-2">
          <vs-button color="primary" size="small" icon="add">ADD</vs-button>
          <vs-input class="w-full" :value="'25 rows'" />
        </div>
      </div>
      <vs-divider />
      <div class="vx-row">
        <div class="vx-col w-full">
          <DataTable :value="deductions" responsiveLayout="scroll">
            <Column field="description" header="Description" />
            <Column field="startDate" header="Start Date" />
            <Column field="endDate" header="End Date" />
            <Column field="frequency" header="Frequency" />
            <Column field="amount" header="Amount">
              <template #body="{ data }">
                <vs-chip
                  color="success"
                  v-if="!isNaN(data.amount) && data.amount > 0"
                >
                  {{ data.amount.toFixed(1) }}
                </vs-chip>
                <vs-chip
                  color="danger"
                  v-else-if="!isNaN(data.amount) && data.amount < 0"
                >
                  {{ data.amount.toFixed(1) }}
                </vs-chip>
                <label class="text-xs text-red" v-else>{{ data.amount }}</label>
              </template>
            </Column>
            <Column field="iif" header="IIF" />
            <Column field="actions" header="Actions">
              <template>
                <vs-icon size="small" icon="edit" />
                <vs-icon size="small" icon="delete" />
              </template>
            </Column>
            <template #empty><b>No matching records found</b></template>
            <template #footer>
              <div class="vx-row flex justify-between">
                <div class="vx-col">1-25 of 51</div>
                <div class="vx-col">
                  <vs-pagination :total="3" :value="1" />
                </div>
              </div>
            </template>
          </DataTable>
        </div>
      </div>
    </vx-card> -->
  </div>
</template>
<!-- eslint-disable multiline-ternary nonblock-statement-body-position implicit-arrow-linebreak -->
<script>
import config from "@/config/constants";
import { cloneDeep } from "lodash";
import { mapGetters } from "vuex";

export default {
  name: "AccountingTab",
  components: {
    DriverPayTemplateBlock: () =>
      import(
        "@/views/pages/account-settings/company/driver-pay-templates/components/DriverPayTemplateBlock"
      ),
  },
  props: {
    dataObj: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters("auth", ["user"]),
    getFormData() {
      return JSON.parse(JSON.stringify(this.formData));
    },
    isFormValid() {
      /*if (this.getFormData.allowances > 100 || this.getFormData.allowances < 0)
        return false;*/
      if (this.getFormData.withholding < 0) return false;
      return true;
    },
    isEditMode() {
      return this.$route.name === "drivers-edit";
    },
    showAllDriverPayTypes() {
      if (
        this.user.admin_company_detail_id >=
        config.showCustomizeDriverPayTypeOnlyForCompanyIdGreaterThanOrEqualTo
      ) {
        return false;
      }

      return true;
    },
  },
  data() {
    return {
      frequencyOptions: [
        { title: "Weekly", value: "weekly" },
        { title: "Biweekly", value: "biweekly" },
        { title: "Monthly", value: "monthly" },
      ],
      filingStatusOptions: [
        {
          title: "Single",
          value: "single",
        },
        {
          title: "Married filing jointly",
          value: "marriedFilingJointly",
        },
        {
          title: "Married filing separately",
          value: "marriedFilingSeparately",
        },
        {
          title: "Head of household",
          value: "headOfHousehold",
        },
        {
          title: "Qualifying widow(er)",
          value: "qualifyingWidow",
        },
      ],
      loadPayPercentOptions: [
        {
          title: "Hauling Fees",
          value: config.load_pay_percentage_of.hauling_fees,
        },
        {
          title: "Hauling + Fuel Surcharge",
          value: config.load_pay_percentage_of.hauling_plus_fuel_surcharge,
        },
        {
          title: "Total Income",
          value: config.load_pay_percentage_of.total_income,
        },
      ],
      formData: {
        id: parseInt(this.$route.params.id),
        driverPayType: "",
        perMileCharge: "",
        payPerStopRate: "",
        payPerStopStartAfter: "",
        detentionRate: "",
        detentionStartAfter: "",
        layoverRate: "",
        layoverStartAfter: "",
        hourlyRate: "",
        loadPayPercentage: "",
        loadPayPercentageOf: "",
        paymentMethod: "",
        financialInstitutionName: "",
        accountNumber: "",
        routingNumber: "",
        taxForm: "",
        filingStatus: "",
        taxFederalCredits: null,
        payFrequency: null,
        //allowances: null,
        withholding: null,
        taxMedicare: false,
        taxAdvanceEarnedIncomeCredit: false,
        taxSocialSecurity: false,
        taxFederalTax: false,
        flatPayFrequency: "",
        flatPayRate: null,
        // driverPayTemplateId: null, //Disabled for this Ui format
        driverPayTemplate: null,
      },
      validationMsg: {
        perMileCharge: null,
        payPerStopRate: null,
        payPerStopStartAfter: null,
        detentionRate: null,
        detentionStartAfter: null,
        layoverRate: null,
        layoverStartAfter: null,
        hourlyRate: null,
        loadPayPercentage: null,
        loadPayPercentageOf: null,
        taxFederalCredits: null,
        //allowances: null,
        withholding: null,
      },
      deductions: [
        {
          description: "Cash advance",
          startDate: "",
          endDate: "",
          frequency: "One Time",
          amount: 500,
          iif: "Deduction",
        },
      ],
      showButtonsData: false,
    };
  },
  created() {
    this.formData = {
      ...this.formData,
      ...cloneDeep(this.dataObj),
    };

    this.init();
  },
  beforeDestroy() {
    this.$emit("update:Accounting", this.formData);
  },
  methods: {
    restoreData() {
      this.formData = this.formDataBackup;
      const { driverPayTemplate, driverPayType } = this.formData || {};
      if (driverPayTemplate && driverPayType === "template") {
        const { loadDetails, tripDetails } = driverPayTemplate;
        if (
          (loadDetails && loadDetails.length) ||
          (tripDetails && tripDetails.length)
        ) {
          /** Ensure loadDetails or tripDetail has values, before setting the payType to 'template' (for custom pay template) */
          this.formData.driverPayTemplate.loadDetails = loadDetails
            ? loadDetails.map((x) => ({ ...x, id: x.fieldId || x.id }))
            : [];
          this.formData.driverPayTemplate.tripDetails = tripDetails
            ? tripDetails.map((x) => ({ ...x, id: x.fieldId || x.id }))
            : [];
        }
      }
      this.$router.push({ name: "drivers" });
    },
    init() {
      this.formDataBackup = JSON.parse(JSON.stringify(this.formData));

      const { driverPayTemplate, driverPayType } = this.formData || {};
      if (driverPayTemplate && driverPayType === "template") {
        const { loadDetails, tripDetails } = driverPayTemplate;
        if (
          (loadDetails && loadDetails.length) ||
          (tripDetails && tripDetails.length)
        ) {
          /** Ensure loadDetails or tripDetail has values, before setting the payType to 'template' (for custom pay template) */
          this.formData.driverPayTemplate.loadDetails = loadDetails
            ? loadDetails.map((x) => ({ ...x, id: x.fieldId || x.id }))
            : [];
          this.formData.driverPayTemplate.tripDetails = tripDetails
            ? tripDetails.map((x) => ({ ...x, id: x.fieldId || x.id }))
            : [];
        }
      }

      if (!this.isEditMode) return;

      this.$nextTick(() => {
        this.$watch("getFormData", this.showButtons, { deep: true });
      });
    },
    validateField(field, validationType = []) {
      const value = this.formData[field];

      this.validationMsg[field] = null;

      if (validationType.includes("required") && value !== 0 && !value) {
        this.validationMsg[field] = "This field must be a valid value";
        return;
      }

      if (validationType.includes("int") && validationType.includes("float")) {
        const regex = new RegExp("^[0-9]+(.[0-9]+)?$");

        this.validationMsg[field] = regex.test(value)
          ? null
          : "This field must be a valid number";

        return;
      }

      if (validationType.includes("int") && !Number.isInteger(value)) {
        this.validationMsg[field] = "This field must be an integer";
        return;
      }

      if (validationType.includes("float") && !Number.isFinite(value)) {
        this.validationMsg[field] = "This field must be a number";
        return;
      }

      if (validationType.includes("min") && value < 0) {
        this.validationMsg[field] = "This field must be a positive number";
        return;
      }

      if (validationType.includes("max") && value > 100) {
        this.validationMsg[field] = "This field must be less than 100";
      }
    },
    showButtons() {
      this.showButtonsData = true;
    },
    async submitForm() {
      if (!this.isFormValid) return;
      if (
        this.$refs.driverPayTemplate &&
        this.formData.driverPayType === "template"
      ) {
        let templates = this.$refs.driverPayTemplate.generatedTemplatePayload();
        delete templates.name;
        this.formData.driverPayTemplate = templates;
      }
      if (
        this.formData.driverPayTemplate &&
        this.formData.driverPayType === "template"
      ) {
        const { tripDetails, loadDetails } =
          this.formData.driverPayTemplate || {};
        if (tripDetails) {
          this.formData.driverPayTemplate.tripDetails = tripDetails.map(
            (x) => ({ ...x, fieldId: x.fieldId || x.id })
          );
        }
        if (loadDetails) {
          this.formData.driverPayTemplate.loadDetails = loadDetails.map(
            (x) => ({ ...x, fieldId: x.fieldId || x.id })
          );
        }
      }
      this.$emit("submit:Accounting", this.formData);

      this.showButtonsData = false;
      this.formDataBackup = JSON.parse(JSON.stringify(this.formData));
    },
  },
  watch: {
    dataObj: {
      handler(newVal) {
        if (newVal) {
          this.formData = {
            ...this.formData,
            ...cloneDeep(newVal),
          };
        }
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  // Hide Arrows From Input Number
  // Chrome, Safari, Edge, Opera
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  // Firefox
  input[type="number"] {
    -moz-appearance: textfield;
  }
}

// Utilities
.mt-40 {
  margin-top: 40px;
}

.min-width-220 {
  min-width: 220px;
}

.min-width-400 {
  min-width: 400px;
}

.text-red {
  color: #ea5758;
}

.min-height-80 {
  min-height: 60px;
}
.accounting-container {
  /* display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  flex-direction: row; */
  @media (min-width: 1099px) {
    display: grid;
    grid-gap: 1rem;
    width: 100%;
    grid-template-columns: auto auto auto;
  }
  .center-block {
    min-width: 200px;
  }
}

.driver-pay-template-incolum-block {
  display: block;
}
.driver-pay-template-multi-colum-block {
  display: none;
}
@media (min-width: 1099px) {
  .driver-pay-template-incolum-block {
    display: none;
  }
  .driver-pay-template-multi-colum-block {
    display: block;
  }
}
</style>
