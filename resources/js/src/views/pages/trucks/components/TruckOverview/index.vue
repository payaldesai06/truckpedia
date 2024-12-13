<template>
  <div>
    <!-- Overview Details -->
    <div class="vx-row w-full md:mb-base mt-4">
      <!-- First Column -->
      <div class="vx-col w-full md:w-1/3 mb-8 md:mb-0">
        <!-- Truck Info Form -->
        <TruckInfoForm v-model="truckInfo" ref="infoForm" />

        <!-- Specs Form -->
        <TruckSpecsForm v-model="specData" ref="specsForm" />

        <!-- Dash Cam Section -->
        <!-- <TruckDashCamForm /> -->
      </div>

      <!-- Second Column -->
      <div class="vx-col w-full md:w-1/3 mb-8 md:mb-0">
        <!-- Expiration Dates Form -->
        <TruckExpirationDateForm
          v-model="expirationData"
          ref="expirationForm"
        />

        <!-- Company IFTA Form -->
        <CompanyIFTAForm v-model="IFTAData" ref="iftaForm" />

        <!-- Target / useful life -->
        <!-- <TargetUseFullLifeForm /> -->

        <!-- Financial Form -->
        <FinancialForm v-model="financeData" ref="financeForm" />
      </div>

      <!-- Third Column -->
      <div class="vx-col w-full md:w-1/3 mb-8 md:mb-0">
        <!-- Notes Section -->
        <NotesSection v-model="notes" ref="notesForm" />

        <!-- Logs Section -->
        <!-- <LogsSection /> -->

        <!-- Driver Assignments/Transponder Assignments Section -->
        <DriverTransponderAssignment
          v-model="driverAssignments"
          :driversList="driversList"
          ref="driverAssignment"
        />
        <FuelCard v-model="fuelCardNumber" ref="fuelCardNumber" />
      </div>
    </div>
    <vx-card class="mt-4">
      <div class="vx-row">
        <div class="vx-col ml-auto">
          <vs-button @click.stop="$emit('submit')">
            {{ isEdit ? 'Update' : 'Create' }}
          </vs-button>
          <vs-button type="border" @click.stop="$emit('cancel')">
            Cancel
          </vs-button>
        </div>
      </div>
    </vx-card>
  </div>
</template>

<script>
export default {
  name: 'TruckOverview',
  components: {
    TruckInfoForm: () => import('./InfoForm'),
    TruckSpecsForm: () => import('./SpecsForm'),
    // TruckDashCamForm: () => import('./DashCamForm'),
    TruckExpirationDateForm: () => import('./ExpirationDateForm'),
    CompanyIFTAForm: () => import('./CompanyIFTAForm'),
    // TargetUseFullLifeForm: () => import('./TargetUseFullLifeForm'),
    FinancialForm: () => import('./FinancialForm'),
    NotesSection: () => import('./NotesSection'),
    // LogsSection: () => import('./LogsSection'),
    DriverTransponderAssignment: () => import('./DriverAssignment'),
    FuelCard: () => import('./FuelCard'),
  },
  props: {
    truckData: {
      required: false,
      type: Object,
      default: null,
    },
    driversList: {
      required: false,
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      truckInfo: null,
      specData: null,
      expirationData: null,
      IFTAData: null,
      financeData: null,
      notes: null,
      driverAssignments: null,
      fuelCardNumber: '',
    };
  },
  computed: {
    truckPayload() {
      let { interestRate } = this.financeData || {};
      if (interestRate || interestRate === 0) {
        interestRate = interestRate / 100;
      } else {
        interestRate = null;
      }
      return {
        ...this.truckInfo,
        ...this.specData,
        ...this.expirationData,
        ...this.IFTAData,
        ...this.financeData,
        notes: this.notes,
        driverAssignments: this.driverAssignments,
        fuelCardNumber: this.fuelCardNumber,
        tags: (this.truckInfo.tags || []).map((tag) => {
          return {
            id: tag.tag_id,
          };
        }),
        interestRate,
      };
    },
    isEdit() {
      return !!this.truckData;
    },
  },
  created() {
    this.bindTruckData();
  },
  watch: {
    truckData: {
      handler(newVal) {
        this.bindTruckData(newVal);
      },
      immediate: true,
    },
  },
  methods: {
    bindTruckData(truckData) {
      if (truckData) {
        const {
          status,
          tags,
          truckNumber,
          year,
          make,
          model,
          color,
          vin,
          licensePlate,
          licenseState,
          hourlyCost,
          insuranceValue,
          monthlyInsuranceCost,
          totalInsuranceCost,
        } = truckData;
        this.truckInfo = {
          status,
          tags,
          truckNumber,
          year,
          make,
          model,
          color,
          vin,
          licensePlate,
          licenseState,
          hourlyCost,
          insuranceValue,
          monthlyInsuranceCost,
          totalInsuranceCost,
        };
        const {
          odometerAtPurchase,
          brakeTypeFront,
          brakeTypeRear,
          speedLimitPedal,
          speedLimitCruise,
          fuelTankCapacity,
          tireSize,
          idleShutoff,
          apuUnit,
        } = truckData;
        this.specData = {
          odometerAtPurchase,
          brakeTypeFront,
          brakeTypeRear,
          speedLimitPedal,
          speedLimitCruise,
          fuelTankCapacity,
          tireSize,
          idleShutoff,
          apuUnit,
        };
        const {
          irpExpirationDate,
          annualInspExpireDate,
          insuranceExpireDate,
          registrationExpireDate,
          annualPermitExpireDate,
        } = truckData;
        this.expirationData = {
          irpExpirationDate,
          annualInspExpireDate,
          insuranceExpireDate,
          registrationExpireDate,
          annualPermitExpireDate,
        };

        const { iftaDecalNumber } = truckData;
        this.IFTAData = {
          iftaDecalNumber,
        };

        const {
          ownershipType,
          dateAcquired,
          acquireCost,
          paymentStartDate,
          paymentEndDate,
          interestRate,
          lender,
          monthlyPayment,
          contractNumber,
          priceSold,
          dateSold,
        } = truckData;
        this.financeData = {
          ownershipType,
          dateAcquired,
          acquireCost,
          paymentStartDate,
          paymentEndDate,
          interestRate,
          lender,
          monthlyPayment,
          contractNumber,
          priceSold,
          dateSold,
        };

        const { notes } = truckData;
        this.notes = notes;

        const { driverAssignments } = truckData;
        this.driverAssignments = driverAssignments;

        const { fuelCardNumber } = truckData;
        this.fuelCardNumber = fuelCardNumber;
      }
    },
    async validate() {
      const { validate: infoValidator } = (this.$refs || {}).infoForm || {};
      let infoFormValidation = true;
      if (infoValidator) {
        infoFormValidation = await this.$refs.infoForm.validate();
      }
      if (!infoFormValidation) return false;

      const { validate: specsValidator } = (this.$refs || {}).specsForm || {};
      let specsFormValidation = true;
      if (specsValidator) {
        specsFormValidation = await this.$refs.specsForm.validate();
      }
      if (!specsFormValidation) return false;

      const { validate: driverAssignmentValidator } =
        (this.$refs || {}).driverAssignment || {};
      let driverAssignmentValidation = true;
      if (driverAssignmentValidator) {
        driverAssignmentValidation =
          await this.$refs.driverAssignment.validate();
      }
      if (!driverAssignmentValidation) return false;

      // const { validate : expirationValidator } = (this.$refs || {}).expirationForm || {};
      // let expirationFormValidation = true;
      // if (expirationValidator) {
      //   expirationFormValidation = await this.$refs.expirationForm.validate();
      // }
      // if(!expirationFormValidation) return false;

      // const { validate : iftaValidator } = (this.$refs || {}).iftaForm || {};
      // let iftaFormValidator = true;
      // if (iftaValidator) {
      //   iftaFormValidator = await this.$refs.iftaForm.validate();
      // }
      // if(!iftaFormValidator) return false;

      const { validate: financeValidator } =
        (this.$refs || {}).financeForm || {};
      let financeFormValidator = true;
      if (financeValidator) {
        financeFormValidator = await this.$refs.financeForm.validate();
      }
      if (!financeFormValidator) return false;

      return true;
    },
  },
};
</script>
