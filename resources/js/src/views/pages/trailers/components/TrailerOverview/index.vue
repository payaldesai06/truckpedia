<template>
  <div>
    <!-- Overview Details -->
    <div class="vx-row w-full md:mb-base mt-4">
      <!-- First Column -->
      <div class="vx-col w-full md:w-1/3 mb-8 md:mb-0">
        <!-- Trailer Info Form -->
        <TrailerInfoForm v-model="trailerInfo" ref="infoForm" />
      </div>

      <!-- Second Column -->
      <div class="vx-col w-full md:w-1/3 mb-8 md:mb-0">
        <!-- Expiration Dates Form -->
        <TrailerExpirationDateForm
          v-model="expirationData"
          ref="expirationForm"
        />
        <!-- Financial Form -->
        <FinancialForm v-model="financeData" ref="financeForm" />
      </div>

      <!-- Third Column -->
      <div class="vx-col w-full md:w-1/3 mb-8 md:mb-0">
        <!-- Notes Section -->
        <NotesSection v-model="notes" ref="notesForm" />
        <!-- Driver Assignment -->
        <DriverAssignment 
          v-model="driverAssignments"
          ref="driverAssignment"
          :driversList="driversList"
        />
      </div>
    </div>
    <vx-card class="mt-4">
      <div class="vx-row">
        <div class="vx-col ml-auto">
          <vs-button @click.stop="$emit('submit')">
            {{ isEdit ? "Update" : "Create" }}
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
  name: "TrailerOverview",
  components: {
    TrailerInfoForm: () => import("./InfoForm"),
    TrailerExpirationDateForm: () => import("./ExpirationDateForm"),
    FinancialForm: () => import("./FinancialForm"),
    NotesSection: () => import("./NotesSection"),
    DriverAssignment: () => import("./DriverAssignment"),
  },
  props: {
    trailerData: {
      required: false,
      type: Object,
      default: null,
    },
    driversList: {
      required: false,
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      trailerInfo: null,
      expirationData: null,
      financeData: null,
      notes: null,
      driverAssignments: null,
    };
  },
  computed: {
    trailerPayload() {
      let { interestRate } = this.financeData || {};
      if (interestRate || interestRate === 0) {
        interestRate = interestRate / 100;
      } else {
        interestRate = null;
      }
      return {
        ...this.trailerInfo,
        ...this.expirationData,
        ...this.financeData,
        notes: this.notes,
        driverAssignments: this.driverAssignments,
        tags: (this.trailerInfo.tags || []).map(tag => {
          return{
            id: tag.tag_id,
          }
        }),
        interestRate,
      };
    },
    isEdit() {
      return !!this.trailerData;
    },
  },
  created() {
    this.bindTrailerData();
  },
  watch: {
    trailerData: {
      handler(newVal) {
        this.bindTrailerData(newVal);
      },
      immediate: true,
    },
  },
  methods: {
    bindTrailerData(trailerData) {
      if (trailerData) {
        const {
          status,
          trailerNumber,
          trailerType,
          year,
          make,
          model,
          vin,
          ride,
          width,
          licensePlate,
          licenseState,
          insuranceValue,
          monthlyInsuranceCost,
          totalInsuranceCost,
          brakeType,
          tireSize,
          roof,
          platedWalls,
          vented,
          skirts,
          rentedOut,
          tags,
        } = trailerData;
        this.trailerInfo = {
          status,
          trailerNumber,
          trailerType,
          year,
          make,
          model,
          vin,
          ride,
          width,
          licensePlate,
          licenseState,
          insuranceValue,
          monthlyInsuranceCost,
          totalInsuranceCost,
          brakeType,
          tireSize,
          roof,
          platedWalls,
          vented,
          skirts,
          rentedOut,
          tags,
        };

        const {
          annualInspExpireDate,
          insuranceExpireDate,
          registrationExpireDate,
          annualPermitExpireDate,
        } = trailerData;
        this.expirationData = {
          annualInspExpireDate,
          insuranceExpireDate,
          registrationExpireDate,
          annualPermitExpireDate
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
        } = trailerData;
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

        const { notes } = trailerData;
        this.notes = notes;

        const { driverAssignments } = trailerData;
        this.driverAssignments = driverAssignments;
      }
    },
    async validate() {
      const { validate: infoValidator } = (this.$refs || {}).infoForm || {};
      let infoFormValidation = true;
      if (infoValidator) {
        infoFormValidation = await this.$refs.infoForm.validate();
      }
      if (!infoFormValidation) return false;

      // const { validate : expirationValidator } = (this.$refs || {}).expirationForm || {};
      // let expirationFormValidation = true;
      // if (expirationValidator) {
      //   expirationFormValidation = await this.$refs.expirationForm.validate();
      // }
      // if(!expirationFormValidation) return false;

      const { validate: driverAssignmentValidator } = (this.$refs || {}).driverAssignment || {};
      let driverAssignmentValidation = true;
      if (driverAssignmentValidator) {
        driverAssignmentValidation = await this.$refs.driverAssignment.validate();
      }
      if (!driverAssignmentValidation) return false;

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
