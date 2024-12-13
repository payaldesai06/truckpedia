<template>
  <div class="w-full" v-if="adminCompanyDetail">
    <add-admin-prompt
      :active.sync="isAddAdminPromptActive"
      @close="isAddAdminPromptActive = false"
    ></add-admin-prompt>
    <div class="vx-row w-full mb-base">
      <div class="vx-col w-full">
        <vx-card>
          <div class="vx-row">
            <!-- Avatar Col -->
            <div class="vx-col w-64">
              <div class="img-container mb-4">
                <img
                  :src="adminCompanyDetail.company_image_url"
                  :alt="adminCompanyDetail.business_name"
                  class="rounded w-full"
                />
              </div>
            </div>

            <div class="vx-col flex-1">
              <table>
                <tr>
                  <td class="font-semibold">Business Name</td>
                  <td>{{ adminCompanyDetail.business_name }}</td>
                </tr>
                <tr>
                  <td class="font-semibold">Address</td>
                  <td>{{ adminCompanyDetail.address }}</td>
                </tr>
                <tr>
                  <td class="font-semibold">State</td>
                  <td>{{ adminCompanyDetail.state }}</td>
                </tr>
                <tr>
                  <td class="font-semibold">Phone No.</td>
                  <td>{{ adminCompanyDetail.phone_number }}</td>
                </tr>
                <tr>
                  <td class="font-semibold">Trial Ends at</td>
                  <td>{{ adminCompanyDetail.trial_valid_till }}</td>
                </tr>
                <tr>
                  <td class="font-semibold">Subscription Ends at</td>
                  <td>{{ adminCompanyDetail.subscription_valid_till }}</td>
                </tr>
                <tr>
                  <td class="font-semibold">Subscription Renew Frequency</td>
                  <td>&nbsp;&nbsp;{{ adminCompanyDetail.subscriptionRenewFrequency }}</td>
                </tr>
              </table>
            </div>

            <div class="vx-col flex-1">
              <table>
                <tr>
                  <td class="font-semibold">USDOT #</td>
                  <td>{{ adminCompanyDetail.usdot_number }}</td>
                </tr>
                <tr>
                  <td class="font-semibold">City</td>
                  <td>{{ adminCompanyDetail.city }}</td>
                </tr>
                <tr>
                  <td class="font-semibold">Zipcode</td>
                  <td>{{ adminCompanyDetail.zipcode }}</td>
                </tr>
                <tr>
                  <td class="font-semibold">Fax No.</td>
                  <td>{{ adminCompanyDetail.fax_number }}</td>
                </tr>
                <tr>
                  <td class="font-semibold">&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td class="font-semibold">Subscription Status</td>
                  <td>
                    {{
                      getSubscriptionStatus(
                        adminCompanyDetail.subscription_status
                      )
                    }}
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="flex" style="align-items: center; margin-left: 220px">
            Active loads: &nbsp;<b>{{
              adminCompanyDetail.active_loads_count
            }}</b
            >, Active trucks: &nbsp;<b>{{
              adminCompanyDetail.active_trucks_count
            }}</b
            >, Active drivers: &nbsp;<b>{{
              adminCompanyDetail.active_drivers_count
            }}</b>
            &nbsp; in
            <flat-pickr
              v-model="selectedDateRange"
              :config="flat_pikr_config"
              ref="flat-pickr"
              style="min-width: 13.5rem"
              class="ml-2"
              placeholder="Select Date Range"
              @on-change="handleFlatPickerInput"
            />
          </div>
          <!-- Monthly fee section        -->
          <div class="vx-row mt-5">
            <!-- Avatar Col -->
            <div class="vx-col w-64"></div>
            <div class="vx-col flex-1">
              <table>
                <tr>
                  <td class="font-semibold">
                    Minimum Total (Initial) Monthly Fee
                  </td>
                  <td>
                    <vs-input
                      v-model="adminCompanyDetail.monthly_fee"
                      class="w-full ml-2"
                    />
                  </td>
                </tr>
              </table>
            </div>
            <div class="vx-col flex-1">
              <table>
                <tr>
                  <td class="font-semibold">Monthly Fee Per Driver</td>
                  <td>
                    <vs-input
                      v-model="adminCompanyDetail.monthly_fee_per_unit"
                      class="w-full ml-2"
                    />
                  </td>
                </tr>
              </table>
            </div>
            <div class="vx-col w-64"></div>
            <div class="vx-col flex-1">
              <table>
                <tr>
                  <td class="font-semibold">Subscription Renew Frequency</td>
                  <td>
                    <vs-input
                      v-model="adminCompanyDetail.subscriptionRenewFrequency"
                      type="number"
                      placeholder="In months"
                      class="w-full ml-2"
                    />
                  </td>
                </tr>
              </table>
            </div>
            <div class="vx-col w-64"></div>
            <div class="vx-col w-64"></div>
            <div class="vx-col flex-1">
              <table>
                <tr>
                  <td>
                    <vs-button
                      type="filled"
                      color="primary"
                      @click="updateMonthlyFees()"
                      >Update Monthly Fees</vs-button
                    >
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <!-- Monthly fee section end here  -->

          <!--  Trial Valid till start here        -->
          <div class="vx-row mt-2">
            <!-- Avatar Col -->
            <div class="vx-col w-64"></div>
            <div class="vx-col flex-1">
              <table>
                <tr>
                  <td class="font-semibold">Trial valid till</td>
                  <td>
                    <flat-pickr
                      v-model="adminCompanyDetail.trial_valid_till"
                      :config="flat_pickr_single_config"
                      ref="flat-pickr"
                      style="min-width: 13.5rem"
                      placeholder="Select Date"
                      @on-change="handleFlatSinglePickerInput"
                    />
                  </td>
                </tr>
              </table>
            </div>
            <div class="vx-col flex-1">
              <vs-button
                type="filled"
                color="primary"
                @click="isAddAdminPromptActive = true"
                >New Admin User</vs-button
              >
            </div>
          </div>
          <!--   Trail Valid till end here        -->

          <!--  Feature access start here        -->
          <div class="vx-row mt-2">
            <!-- Avatar Col -->
            <div class="vx-col w-64"></div>
            <div class="vx-col flex-1">
              <table>
                <tr>
                  <td class="font-semibold">Features to turn on</td>
                  <td>
                    <v-select
                      v-model="adminCompanyDetail.featureAccess"
                      :options="companyFeaturesToAccessOptions"
                      multiple
                      :reduce="(option) => option.value"
                      :clearable="true"
                      style="min-width: 270px"
                    />
                  </td>
                  <td>
                    <vs-button
                      type="filled"
                      color="primary"
                      @click="updateCompanyFeatureAccess()"
                      >Update Features</vs-button
                    >
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <!--   Feature access end here        -->
        </vx-card>
      </div>
    </div>

    <div class="vx-row w-full">
      <div
        class="vx-col w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
      >
        <vx-card v-for="asset in assetsCounter" :key="asset.name">
          <div class="flex items-baseline space-x-4 md:flex-col md:space-x-0">
            <h5 class="text-3xl font-semibold">{{ asset.total }}</h5>
            <p class="text-md text-grey">{{ asset.name }}</p>
          </div>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { formatDate } from "@/helpers/helper";
import config from "@/config/constants.js";
import AddAdminPrompt from './components/AddAdminPrompt.vue';

export default {
  name: "ShowAdminCompany",
  components: {
    AddAdminPrompt,
  },

  data() {
    return {
      adminCompanyDetail: null,
      selectedDateRange: "",
      monthly_fee: "",
      monthly_fee_per_unit: "",
      flat_pikr_config: {
        mode: "range",
        defaultDate: [
          new Date().setDate(new Date().getDate() - 30),
          new Date(),
        ],
      },
      flat_pickr_single_config: {
        mode: "single",
        defaultDate: [],
      },
      companyFeaturesToAccessOptions: config.companyFeaturesToAccessOptions,
      isAddAdminPromptActive: false,
    };
  },

  async created() {
    this.configDateFlatPickr();

    await this.getAdminCompanyDetail();
  },

  computed: {
    ...mapGetters("admin-company", {
      getFormattedSubscriptionStatus: "getFormattedSubscriptionStatus",
    }),

    assetsCounter() {
      if (!this.adminCompanyDetail) return null;

      const {
        admins_count,
        dispatchers_count,
        drivers_count,
        trucks_count,
        trailers_count,
        loads_count,
      } = this.adminCompanyDetail;

      return [
        { name: "Admins", total: admins_count },
        { name: "Dispatchers", total: dispatchers_count },
        { name: "Drivers", total: drivers_count },
        { name: "Loads", total: loads_count },
        { name: "Trucks", total: trucks_count },
        { name: "Trailers", total: trailers_count },
      ];
    },
  },

  methods: {
    async updateMonthlyFees() {
      try {
        const payload = {
          id: this.$route.params.id,
          monthly_fee: this.adminCompanyDetail.monthly_fee,
          monthly_fee_per_unit: this.adminCompanyDetail.monthly_fee_per_unit,
          subscriptionRenewFrequency: this.adminCompanyDetail.subscriptionRenewFrequency,
        };
        await this.$store.dispatch(
          "admin-company/updateCompanyMonthlyFees",
          payload
        );
        this.$vs.notify({
          color: "primary",
          title: "Monthly Fee Updated",
          text: "Monthly fee updated successfully.",
        });
      } catch (error) {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message,
        });
      }
    },

    async updateCompanyTrial(date) {
      try {
        const payload = {
          id: this.$route.params.id,
          trial_valid_till: date,
        };
        await this.$store.dispatch(
          "admin-company/updateCompanyTrialValidTill",
          payload
        );
        this.$vs.notify({
          color: "primary",
          title: "Company Trial Updated",
          text: "Company trial end date updated successfully.",
        });
      } catch (error) {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message,
        });
      }
    },

    async updateCompanyFeatureAccess() {
      try {
        const payload = {
          id: this.$route.params.id,
          featureAccess: this.adminCompanyDetail.featureAccess,
        };
        await this.$store.dispatch(
          "admin-company/updateCompanyFeatureAccess",
          payload
        );
        this.$vs.notify({
          color: "primary",
          title: "Company Feature Accesses Updated",
          text: "Company feature accesses updated successfully.",
        });
      } catch (error) {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message,
        });
      }
    },

    configDateFlatPickr() {
      const defaultDate = this.flat_pikr_config.defaultDate;
      this.selectedDateRange = `${formatDate(defaultDate[0])} to ${formatDate(
        defaultDate[1]
      )}`;
    },

    handleFlatSinglePickerInput(selectedDates, dateStr, instance) {
      this.updateCompanyTrial(dateStr);
    },

    handleFlatPickerInput(selectedDates, dateStr, instance) {
      this.selectedDateRange = dateStr;
      this.getAdminCompanyDetail();
    },

    async getAdminCompanyDetail() {
      const selectedDateRange = this.selectedDateRange.split(" to ");
      if (selectedDateRange.length < 2) {
        return;
      }

      const startDate = selectedDateRange[0];
      const endDate = selectedDateRange[1];
      try {
        const payload = {
          id: this.$route.params.id,
          startDate: startDate,
          endDate: endDate,
        };
        const { data } = await this.$store.dispatch(
          "admin-company/getAdminCompany",
          payload
        );

        this.adminCompanyDetail = data.payload;
      } catch (error) {
        await this.$router.push({ name: "companies" });

        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message,
        });
      }
    },

    // Formatted Subscription Status
    getSubscriptionStatus(status) {
      return this.getFormattedSubscriptionStatus[status];
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  td {
    vertical-align: top;
    min-width: 165px;
    padding-bottom: 0.8rem;
    word-break: break-all;
  }
}
</style>
