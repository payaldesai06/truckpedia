<template>
  <div class="vs-row w-full" v-if="!isLoading">
    <div class="vx-col w-full mb-base">
      <vx-card>
        <div>
          <h2>
            Trip No. <span>{{ tripNumber }}</span>
          </h2>
        </div>
      </vx-card>
    </div>

    <!-- START : Load Information -->
    <div class="vx-col w-full mb-base">
      <vx-card title="Load Information" collapse-action>
        <div class="space-y-4">
          <!-- :title="`#${load_id}-${load.company_name}` -->
          <vx-card
            v-for="load in loads"
            :key="load.load_id"
            :title="`#${load.load_id}-${load.customer.company_name}`"
            no-shadow
            card-border
          >
            <div class="vx-row">
              <div class="vx-col flex-1">
                <table>
                  <tr>
                    <td class="font-semibold">Shipper Name</td>
                    <td>{{ load.shippers.shipper_name }}</td>
                  </tr>
                  <tr>
                    <td class="font-semibold">Shipper's Address</td>
                    <td>{{ load.shippers.address }}</td>
                  </tr>
                  <tr>
                    <td class="font-semibold">Contact Person</td>
                    <td>{{ load.shippers.contact_person }}</td>
                  </tr>
                  <tr>
                    <td class="font-semibold">Pickup Time</td>
                    <td>
                      {{ load.shippers.shipping_date }}
                      {{ load.shippers.shipping_time }}
                    </td>
                  </tr>
                </table>
              </div>

              <div class="vx-col flex-1">
                <table>
                  <tr>
                    <td class="font-semibold">Receiver Name</td>
                    <td>{{ load.receivers.receiver_name }}</td>
                  </tr>
                  <tr>
                    <td class="font-semibold">Receiver's Address</td>
                    <td>{{ load.receivers.address }}</td>
                  </tr>
                  <tr>
                    <td class="font-semibold">Contact Person</td>
                    <td>{{ load.receivers.contact_person }}</td>
                  </tr>
                  <tr>
                    <td class="font-semibold">Delivery Time</td>
                    <td>
                      {{ load.receivers.delivery_date }}
                      {{ load.receivers.delivery_time }}
                    </td>
                  </tr>
                </table>
              </div>

              <div class="vx-col">
                <vx-tooltip text="Load Images">
                  <feather-icon
                    icon="CameraIcon"
                    svgClasses="w-6 h-6 hover:text-primary stroke-current cursor-pointer"
                    @click.stop="handlePopup(load)"
                  />
                </vx-tooltip>
              </div>
            </div>
          </vx-card>
        </div>
      </vx-card>
    </div>
    <!-- END : Load Information -->

    <!-- START : Notes -->
    <div class="vx-col w-full mb-base" id="notes">
      <vx-card title="Notes">
        <vs-textarea v-model="notes" height="120px" />
      </vx-card>
    </div>
    <!-- END : Notes -->

    <!-- START : Reimbursement -->
    <div class="vx-col w-full mb-base" v-if="tripExpenses.length > 0">
      <vx-card title="Reimbursement" collapse-action>
        <div class="vx-row px-4 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
          <vx-card
            v-for="(expense, expIdx) in tripExpenses"
            :key="expense.trip_expense_id"
            no-shadow
            card-border
          >
            <div class="vx-col">
              <table>
                <tr>
                  <td class="font-semibold">Expense Type</td>
                  <!--                  <td class="font-semibold">{{ expense.expense_type }}</td>-->
                  <td>
                    <div class="w-full">
                      <label class="text-xs">
                        Total Cost
                        <field-required-sign />
                      </label>

                      <vs-input
                        v-validate="'required|min_value:0'"
                        data-vv-validate-on="blur"
                        :data-vv-name="`total_cost-${expIdx}`"
                        type="number"
                        v-model.number.lazy="expense.approve_cost"
                        class="w-full"
                      />

                      <span
                        class="text-danger text-sm"
                        v-if="
                          errors.first(`total_cost-${expIdx}`) &&
                          expense.approve_cost < 0
                        "
                      >
                        Please enter cost.
                      </span>
                      <!-- <span class="text-danger text-sm">{{ errors.first(`total_cost-${expIdx}`) }}</span> -->
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="font-semibold">Qty/Description</td>
                  <td>
                    <div class="w-full">
                      <label class="text-xs">
                        Qty/Description
                        <field-required-sign />
                      </label>

                      <vs-input
                        v-validate="'required'"
                        data-vv-validate-on="blur"
                        :data-vv-name="`qty_description-${expIdx}`"
                        v-model="expense.approve_quantity_description"
                        class="w-full"
                      />

                      <span class="text-danger text-sm">{{
                        errors.first(`qty_description-${expIdx}`)
                      }}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="font-semibold">Date</td>
                  <td>{{ expense.date }}</td>
                </tr>
                <tr>
                  <td class="font-semibold">Vendor</td>
                  <td>{{ expense.vendor_address }}</td>
                </tr>
              </table>
            </div>
          </vx-card>
        </div>

        <vs-divider></vs-divider>
        <div class="flex justify-between flex-wrap">
          <h5 class="text-primary font-semibold">
            Total Reimbursement :<span class="ml-2 text-dark opacity-75"
              ><span class="mr-1">&dollar;</span
              >{{ totalReimbursementCost }}</span
            >
          </h5>
        </div>
      </vx-card>
    </div>
    <!-- END : Reimbursement -->

    <!-- START : Driver Detail -->
    <div class="vx-col w-full mb-base" id="driver-detail">
      <vx-card title="Driver Details">
        <div class="vx-row px-4 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          <vx-card no-shadow card-border>
            <div class="vx-col">
              <table>
                <tr>
                  <td class="font-semibold">Name</td>
                  <td>{{ driver1.driver_details.name }}</td>
                </tr>
                <!--                <tr>-->
                <!--                  <td class="font-semibold">Truck</td>-->
                <!--                  <td>{{ driver1.truck }}</td>-->
                <!--                </tr>-->
                <tr>
                  <td class="font-semibold">Payrate</td>

                  <td
                    v-if="driver1.driver_details.driver_pay_types == 'hourly'"
                  >
                    {{ `$${driver1.driver_details.hourly_rate} /hour` }}
                  </td>

                  <td
                    v-if="driver1.driver_details.driver_pay_types == 'per_mile'"
                  >
                    {{ `$${driver1.driver_details.per_mail_charges} /mile` }}
                  </td>

                  <td
                    v-if="
                      driver1.driver_details.driver_pay_types == 'percentage'
                    "
                  >
                    {{ `${driver1.driver_details.load_pay_percentage}`
                    }}<span class="mx-1">&percnt; of</span
                    >{{ `${driver1.driver_details.load_pay_percentage_of}` }}
                  </td>
                </tr>
              </table>

              <div class="w-full lg:w-1/2 space-y-2">
                <!--                  <td class="font-semibold">Total Hours</td>-->
                <template
                  v-if="driver1.driver_details.driver_pay_types == 'hourly'"
                >
                  <div class="w-full">
                    <label class="text-xs">
                      Total Hours
                      <field-required-sign />
                    </label>

                    <vs-input
                      v-validate="'required'"
                      data-vv-validate-on="blur"
                      name="driver1_total_cost"
                      type="number"
                      v-model.number="driver1Payment.total_hours"
                      class="w-full"
                    />

                    <!--                      <span class="text-danger text-sm">{{ errors.first('total_cost') }}</span>-->
                  </div>
                </template>

                <template
                  v-if="driver1.driver_details.driver_pay_types == 'per_mile'"
                >
                  <div class="w-full">
                    <label class="text-xs">
                      Total Miles
                      <field-required-sign />
                    </label>

                    <vs-input
                      v-validate="'required'"
                      data-vv-validate-on="blur"
                      name="driver1_total_miles"
                      type="number"
                      v-model.number="driver1Payment.total_miles"
                      @input="
                        (value) => calculateDriver1Payment(value, 'total_miles')
                      "
                      class="w-full"
                    />
                  </div>

                  <div class="w-full flex items-center space-x-4">
                    <div>
                      <label class="text-xs">
                        No. of Stops
                        <field-required-sign />
                      </label>

                      <vs-input
                        v-validate="'required'"
                        data-vv-validate-on="blur"
                        name="driver1_no_of_stops"
                        type="number"
                        v-model.number="driver1Payment.no_of_stops"
                        @input="
                          (value) =>
                            calculateDriver1Payment(value, 'no_of_stops')
                        "
                        class="w-full"
                      />
                    </div>

                    <div>
                      <p class="mt-5 font-semibold opacity-75">
                        <span class="mr-1">&dollar;</span
                        >{{ driver1Payment.stop_charge }}
                      </p>
                    </div>

                    <!--                    <vs-input v-validate="'required'"-->
                    <!--                              data-vv-validate-on="blur"-->
                    <!--                              name="driver1_pay_per_stop_rate"-->
                    <!--                              label="Stop Charges ($)"-->
                    <!--                              v-model.number="driver1Payment.stope_charge"-->
                    <!--                              class="w-full"/>-->

                    <!--                      <span class="text-danger text-sm">{{ errors.first('total_cost') }}</span>-->
                  </div>

                  <div class="w-full flex items-center space-x-4">
                    <div>
                      <label class="text-xs">
                        Detention (in Hours)
                        <field-required-sign />
                      </label>

                      <vs-input
                        v-validate="'required'"
                        data-vv-validate-on="blur"
                        name="driver1_detention"
                        type="number"
                        v-model.number="driver1Payment.detention"
                        @input="
                          (value) => calculateDriver1Payment(value, 'detention')
                        "
                        class="w-full"
                      />
                    </div>

                    <div>
                      <p class="mt-5 font-semibold opacity-75">
                        <span class="mr-1">&dollar;</span
                        >{{
                          !isNaN(driver1Payment.detention_charge)
                            ? driver1Payment.detention_charge
                            : 0
                        }}
                      </p>
                    </div>

                    <!--                    <vs-input v-validate="'required'"-->
                    <!--                              data-vv-validate-on="blur"-->
                    <!--                              name="driver1_detention_rate"-->
                    <!--                              label="Detention Charges ($)"-->
                    <!--                              v-model.number="driver1Payment.detention_charge"-->
                    <!--                              class="w-full"/>-->

                    <!--                      <span class="text-danger text-sm">{{ errors.first('total_cost') }}</span>-->
                  </div>

                  <div class="w-full flex items-center space-x-4">
                    <div>
                      <label class="text-xs">
                        Layover (in Hours)
                        <field-required-sign />
                      </label>

                      <vs-input
                        v-validate="'required'"
                        data-vv-validate-on="blur"
                        name="driver1_layover"
                        type="number"
                        v-model.number="driver1Payment.layover"
                        @input="
                          (value) => calculateDriver1Payment(value, 'layover')
                        "
                        class="w-full"
                      />
                    </div>

                    <div>
                      <p class="mt-5 font-semibold opacity-75">
                        <span class="mr-1">&dollar;</span
                        >{{
                          !isNaN(driver1Payment.layover_charge)
                            ? driver1Payment.layover_charge
                            : 0
                        }}
                      </p>
                    </div>

                    <!--                    <vs-input v-validate="'required'"-->
                    <!--                              data-vv-validate-on="blur"-->
                    <!--                              name="driver1_Layover_rate"-->
                    <!--                              label="Layover Charges ($)"-->
                    <!--                              v-model.number="driver1Payment.layover_charge"-->
                    <!--                              class="w-full"/>-->

                    <!--                      <span class="text-danger text-sm">{{ errors.first('total_cost') }}</span>-->
                  </div>
                </template>

                <div class="w-full">
                  <label class="text-xs">
                    Total Reimbursement ($)
                    <field-required-sign />
                  </label>

                  <vs-input
                    v-validate="'required'"
                    data-vv-validate-on="blur"
                    name="driver1_reimbursement"
                    type="number"
                    v-model.number="trip.reimbursement"
                    class="w-full"
                  />

                  <!--                      <span class="text-danger text-sm">{{ errors.first('total_cost') }}</span>-->
                </div>

                <div class="w-full">
                  <label class="text-xs">
                    Total Payment ($)
                    <field-required-sign />
                  </label>

                  <vs-input
                    v-validate="'required'"
                    data-vv-validate-on="blur"
                    name="driver1_total_payment"
                    type="number"
                    v-model.number="driver1Payment.total_payment"
                    class="w-full"
                  />
                  <!--                      <span class="text-danger text-sm">{{ errors.first('total_cost') }}</span>-->
                </div>
              </div>
            </div>

            <vs-divider></vs-divider>
            <div class="flex justify-between flex-wrap">
              <h5 class="text-primary font-semibold">
                Grand Total :<span class="ml-2 text-dark opacity-75">
                  <span class="mr-1">&dollar;</span>
                  {{ driver1grandTotal }}
                </span>
              </h5>
            </div>
          </vx-card>

          <vx-card v-if="hasCoDriver" no-shadow card-border>
            <div class="vx-col">
              <table>
                <tr>
                  <td class="font-semibold">Name</td>
                  <td>{{ driver2.driver_details.name }}</td>
                </tr>
                <!--                <tr>-->
                <!--                  <td class="font-semibold">Truck</td>-->
                <!--                  <td>{{ driver2.truck }}</td>-->
                <!--                </tr>-->
                <tr>
                  <td class="font-semibold">Payrate</td>

                  <td
                    v-if="driver2.driver_details.driver_pay_types == 'hourly'"
                  >
                    {{ `$${driver2.driver_details.hourly_rate} /hour` }}
                  </td>

                  <td
                    v-if="driver2.driver_details.driver_pay_types == 'per_mile'"
                  >
                    {{ `$${driver2.driver_details.per_mail_charges} /mile` }}
                  </td>

                  <td
                    v-if="
                      driver2.driver_details.driver_pay_types == 'percentage'
                    "
                  >
                    {{ `${driver2.driver_details.load_pay_percentage}`
                    }}<span class="mx-1">&percnt; of</span
                    >{{ `${driver2.driver_details.load_pay_percentage_of}` }}
                  </td>
                </tr>
              </table>

              <div class="w-full lg:w-1/2 space-y-2">
                <!--                  <td class="font-semibold">Total Hours</td>-->
                <template
                  v-if="driver2.driver_details.driver_pay_types == 'hourly'"
                >
                  <div class="w-full">
                    <label class="text-xs">
                      Total Hours
                      <field-required-sign />
                    </label>

                    <vs-input
                      v-validate="'required'"
                      data-vv-validate-on="blur"
                      name="driver2_total_hours"
                      type="number"
                      v-model.number="driver2Payment.total_hours"
                      class="w-full"
                    />

                    <!--                      <span class="text-danger text-sm">{{ errors.first('total_cost') }}</span>-->
                  </div>
                </template>

                <template
                  v-if="driver2.driver_details.driver_pay_types == 'per_mile'"
                >
                  <div class="w-full">
                    <label class="text-xs">
                      Total Miles
                      <field-required-sign />
                    </label>

                    <vs-input
                      v-validate="'required'"
                      data-vv-validate-on="blur"
                      name="driver2_total_miles"
                      type="number"
                      v-model.number.lazy="driver2Payment.total_miles"
                      @input="
                        (value) => calculateDriver2Payment(value, 'total_miles')
                      "
                      class="w-full"
                    />
                  </div>

                  <div class="w-full flex items-center space-x-4">
                    <div>
                      <label class="text-xs">
                        No. of Stops
                        <field-required-sign />
                      </label>

                      <vs-input
                        v-validate="'required'"
                        data-vv-validate-on="blur"
                        name="driver2_no_of_stops"
                        type="number"
                        v-model.number="driver2Payment.no_of_stops"
                        @input="
                          (value) =>
                            calculateDriver2Payment(value, 'no_of_stops')
                        "
                        class="w-full"
                      />
                    </div>

                    <div>
                      <p class="mt-5 font-semibold opacity-75">
                        <span class="mr-1">&dollar;</span
                        >{{ driver2Payment.stop_charge }}
                      </p>
                    </div>

                    <!--                    <vs-input v-validate="'required'"-->
                    <!--                              data-vv-validate-on="blur"-->
                    <!--                              name="driver2_pay_per_stop_rate"-->
                    <!--                              label="Stop Charges ($)"-->
                    <!--                              v-model.number="driver2Payment.stope_charge"-->
                    <!--                              class="w-full"/>-->

                    <!--                      <span class="text-danger text-sm">{{ errors.first('total_cost') }}</span>-->
                  </div>

                  <div class="w-full flex items-center space-x-4">
                    <div>
                      <label class="text-xs">
                        Detention (in Hours)
                        <field-required-sign />
                      </label>

                      <vs-input
                        v-validate="'required'"
                        data-vv-validate-on="blur"
                        name="driver2_detention"
                        type="number"
                        v-model.number="driver2Payment.detention"
                        @input="
                          (value) => calculateDriver2Payment(value, 'detention')
                        "
                        class="w-full"
                      />
                    </div>

                    <div>
                      <p class="mt-5 font-semibold opacity-75">
                        <span class="mr-1">&dollar;</span
                        >{{ driver2Payment.detention_charge }}
                      </p>
                    </div>

                    <!--                    <vs-input v-validate="'required'"-->
                    <!--                              data-vv-validate-on="blur"-->
                    <!--                              name="driver2_detention_rate"-->
                    <!--                              label="Detention Charges ($)"-->
                    <!--                              v-model.number="driver2Payment.detention_charge"-->
                    <!--                              class="w-full"/>-->

                    <!--                      <span class="text-danger text-sm">{{ errors.first('total_cost') }}</span>-->
                  </div>

                  <div class="w-full flex items-center space-x-4">
                    <div>
                      <label class="text-xs">
                        Layover (in Hours)
                        <field-required-sign />
                      </label>

                      <vs-input
                        v-validate="'required'"
                        data-vv-validate-on="blur"
                        name="driver2_layover"
                        type="number"
                        v-model.number="driver2Payment.layover"
                        @input="
                          (value) => calculateDriver2Payment(value, 'layover')
                        "
                        class="w-full"
                      />
                    </div>

                    <div>
                      <p class="mt-5 font-semibold opacity-75">
                        <span class="mr-1">&dollar;</span
                        >{{ driver2Payment.layover_charge }}
                      </p>
                    </div>

                    <!--                    <vs-input v-validate="'required'"-->
                    <!--                              data-vv-validate-on="blur"-->
                    <!--                              name="driver2_Layover_rate"-->
                    <!--                              label="Layover Charges ($)"-->
                    <!--                              v-model.number="driver2Payment.layover_charge"-->
                    <!--                              class="w-full"/>-->

                    <!--                      <span class="text-danger text-sm">{{ errors.first('total_cost') }}</span>-->
                  </div>
                </template>

                <div class="w-full">
                  <label class="text-xs">
                    Total Reimbursement ($)
                    <field-required-sign />
                  </label>

                  <vs-input
                    v-validate="'required'"
                    data-vv-validate-on="blur"
                    name="driver2_reimbursement"
                    type="number"
                    v-model.number="driver2Payment.reimbursement"
                    class="w-full"
                  />

                  <!--                      <span class="text-danger text-sm">{{ errors.first('total_cost') }}</span>-->
                </div>

                <div class="w-full">
                  <label class="text-xs">
                    Total Payment ($)
                    <field-required-sign />
                  </label>

                  <vs-input
                    v-validate="'required'"
                    data-vv-validate-on="blur"
                    name="driver2_total_payment"
                    type="number"
                    v-model.number="driver2Payment.total_payment"
                    class="w-full"
                  />

                  <!--                      <span class="text-danger text-sm">{{ errors.first('total_cost') }}</span>-->
                </div>
              </div>
            </div>

            <vs-divider></vs-divider>
            <div class="flex justify-between flex-wrap">
              <h5 class="text-primary font-semibold">
                Grand Total :<span class="ml-2 text-dark opacity-75"
                  ><span class="mr-1">&dollar;</span
                  >{{ driver2grandTotal }}</span
                >
              </h5>
            </div>
          </vx-card>
        </div>
      </vx-card>
    </div>
    <!-- END : Driver Detail -->

    <!--    START : BUTTONS-->
    <div class="vx-col w-full">
      <div class="space-x-2">
        <vs-button color="success" type="filled" @click="submit"
          >Approve</vs-button
        >

        <vs-button
          color="warning"
          type="border"
          :to="{ name: 'driver-pay-manager' }"
          >Cancel</vs-button
        >
      </div>
    </div>
    <!--    END : BUTTONS-->

    <!--  START : MODEL -->
    <vs-popup
      title="Load Documents"
      :active.sync="popupActive"
      @update:active="(state) => handleUpdateAction(state)"
    >
      <swiper :options="swiperOption" v-if="selected_load_for_slider">
        <swiper-slide
          v-for="image in selected_load_for_slider.load_images"
          :key="image.load_image_id"
        >
          <!-- Loader -->
          <img
            class="bg-grey swiper-lazy responsive"
            :data-src="image.image_url"
            style="min-height: 375px"
          />
          <div class="swiper-lazy-preloader swiper-lazy-preloader-dark"></div>
          <!--          <img :data-src="image.image_url" class="swiper-lazy" :alt="image.image_name"/>-->

          <div class="text" data-swiper-parallax="-300">
            <p class="font-medium">{{ image.purpose }}</p>
          </div>
          <!-- <p class="font-semibold text-lg" v-if="">{{ image.purpose }}</p> -->
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
        <div
          class="swiper-button-next swiper-button-white"
          slot="button-next"
        ></div>
        <div
          class="swiper-button-prev swiper-button-white"
          slot="button-prev"
        ></div>
      </swiper>
    </vs-popup>
    <!--  END : MODEL -->
  </div>
</template>

<script>
import "swiper/dist/css/swiper.min.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import config from "@/config/constants";

export default {
  name: "EditDriverPayManager",

  components: {
    swiper,
    swiperSlide,
  },

  data() {
    return {
      isLoading: false,
      popupActive: false,

      trip: null,

      selected_load_for_slider: null,
      loads: [],
      tripExpenses: [],
      notes: "",

      driver1: null,
      driver1Payment: {
        driver_id: "",
        trip_id: "",
        driver_pay_types: "",
        total_hours: 0,
        reimbursement: 0,
        total_payment: 0, // load payment = total payment
        // load_payment: '',

        // driver_pay_type == 'per_mile'
        no_of_stops: 0,
        stop_charge: 0,
        detention: 0,
        detention_charge: 0,
        layover: 0,
        layover_charge: 0,
      },
      driver2: null,
      driver2Payment: {
        driver_id: "",
        trip_id: "",
        driver_pay_types: "",
        total_hours: 0,
        reimbursement: 0,
        total_payment: 0, // load payment = total payment
        // load_payment: '',

        // driver_pay_type == 'per_mile'
        no_of_stops: 0,
        stop_charge: 0,
        detention: 0,
        detention_charge: 0,
        layover: 0,
        layover_charge: 0,
      },

      // slider option
      swiperOption: {
        lazy: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },

  async created() {
    this.isLoading = true;
    this.$vs.loading();

    try {
      await this.getTrip();
    } catch (error) {
      await this.$router.push({ name: "driver-pay-manager" });

      this.$vs.notify({
        color: "danger",
        title: "Error",
        text: error.response.data.message,
      });
    } finally {
      this.isLoading = false;
      this.$vs.loading.close();
    }

    // if (this.$route.params.id == 3) {
    //   this.driver1 = {
    //     truck: 1234,
    //     name: 'Gerta Fooks',
    //     driver_pay_types: 'percentage',
    //     load_pay_percentage: 10,
    //     load_pay_percentage_of: 'total_income',
    //     reimbursement: 300,
    //     total_payment: 2300
    //   }
    //
    //   this.driver2 = {
    //     truck: 1234,
    //     name: 'Larry Clemont',
    //     driver_pay_types: 'percentage',
    //     load_pay_percentage: 12,
    //     load_pay_percentage_of: 'hauling_fees',
    //     reimbursement: 400,
    //     total_payment: 2900
    //   }
    // }
  },

  computed: {
    tripNumber() {
      return `#${this.trip.trip_id}`;
    },

    totalReimbursementCost() {
      if (this.tripExpenses.length <= 0) {
        return 0;
      }

      return this.tripExpenses
        .map((expense) => parseFloat(expense.approve_cost))
        .reduce((total, expense) => total + expense);
    },

    hasCoDriver() {
      return !!this.trip.driver_two;
    },

    driver1grandTotal() {
      const totalPayment = isNaN(this.driver1Payment.total_payment)
        ? 0
        : Number(this.driver1Payment.total_payment);
      const grandTotal = totalPayment + Number(this.trip.reimbursement);
      return !isNaN(grandTotal) ? Number(grandTotal).toFixed(2) : 0;
    },

    driver2grandTotal() {
      const totalPayment = isNaN(this.driver2Payment.total_payment)
        ? 0
        : Number(this.driver2Payment.total_payment);
      const grandTotal =
        totalPayment + Number(this.driver2Payment.reimbursement);
      return !isNaN(grandTotal) ? Number(grandTotal).toFixed(2) : 0;
    },
  },

  methods: {
    handlePopup(load) {
      this.selected_load_for_slider = load;
      this.popupActive = true;
    },

    handleUpdateAction(state) {
      this.selected_load_for_slider = null;
      this.popupActive = state;
    },

    // Form Submit
    async submit() {
      // const totalReimbursementCost = this.driver1Payment.reimbursement + this.driver2Payment.reimbursement
      //
      // if (this.totalReimbursementCost != totalReimbursementCost) {
      //   this.$vs.notify({
      //     color: 'danger',
      //     title: 'Error',
      //     text: 'Please check reimbursement amount.'
      //   })
      //
      //   return 0
      // }

      const tripExpensePayload = this.tripExpenses.map((expense) => {
        return {
          id: expense.trip_expense_id,
          approve_quantity_description: expense.approve_quantity_description,
          approve_cost: expense.approve_cost,
        };
      });

      this.driver1Payment.reimbursement = this.trip.reimbursement;

      const driverPaymentPayload = [
        {
          ...this.driver1Payment,
          load_payment: this.driver1Payment.total_payment,
          total_payment: this.driver1grandTotal,
          notes: this.notes,
        },
      ];

      this.driver2Payment.reimbursement = this.driver2Payment.reimbursement;

      if (this.hasCoDriver) {
        driverPaymentPayload.push({
          ...this.driver2Payment,
          load_payment: this.driver2Payment.total_payment,
          total_payment: this.driver2grandTotal,
          notes: this.notes,
        });
      }

      const payload = {
        id: this.trip.trip_id,
        payload: {
          trip_payments: driverPaymentPayload,
          trip_expenses: tripExpensePayload,
        },
      };

      this.$vs.loading();

      try {
        await this.$store.dispatch("trip/tripPayment", payload);

        await this.$router.push({ name: "driver-pay-manager" });

        this.$vs.notify({
          color: "primary",
          title: "Payment Request Approved",
          text: "Payment request approved successfully.",
        });
      } catch (error) {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message,
        });
      } finally {
        this.$vs.loading.close();
      }
    },

    // calculate driver payment
    getDriverPayment(driver) {
      const driverPayType = driver.driver_details.driver_pay_types;

      // const DriverPaymentPayload = {
      //   driver_id: '',
      //   trip_id: '',
      //   total_hours: '',
      //   reimbursement: '',
      //   total_payment: '', // load payment = total payment
      //   // load_payment: '',
      //
      //   // driver_pay_type == 'per_mile'
      //   no_of_stops
      //   stope_charge: '',
      //
      //   detention // hour
      //   detention_charge: '',
      //
      //   layover // hour
      //   layover_charge: ''
      // }

      const payload = {
        driver_id: driver.user_id,
        trip_id: this.trip.trip_id,
        driver_pay_types: driver.driver_details.driver_pay_types,
        total_hours: parseFloat(this.trip.total_hours),
        total_miles: parseFloat(this.trip.total_miles),
        total_payment: 0,
        reimbursement: 0,
      };

      // Hourly
      if (driverPayType == config.driver_pay_type.hourly) {
        payload.total_payment = parseFloat(
          this.trip.total_hours * driver.driver_details.hourly_rate
        );
      }

      // Per Mile
      if (driverPayType == config.driver_pay_type.per_mile) {
        // stop charges
        const stopCharge = this.getStopCharges(
          this.trip.number_of_stop,
          driver
        );
        payload.no_of_stops = parseFloat(this.trip.number_of_stop);
        payload.stop_charge = stopCharge;

        // detention charges
        const detentionCharge = this.getDetentionCharges(
          parseFloat(this.trip.detention),
          driver
        );
        payload.detention = parseFloat(this.trip.detention);
        payload.detention_charge = detentionCharge;

        // layover charges
        const layoverCharge = this.getLayoverCharges(
          parseFloat(this.trip.layover),
          driver
        );
        payload.layover = parseFloat(this.trip.layover);
        payload.layover_charge = layoverCharge;

        // total payment
        payload.total_payment =
          this.getPerMileDriverTotalPayment(driver) +
          stopCharge +
          detentionCharge +
          layoverCharge;
      }

      // Percentage
      if (driverPayType == config.driver_pay_type.percentage) {
        const load_pay_percentage_of =
          driver.driver_details.load_pay_percentage_of;
        const loadPayPercentage = parseFloat(
          driver.driver_details.load_pay_percentage
        );
        const loadCharges = this.loads.map((load) => load.load_charge);

        if (
          load_pay_percentage_of == config.load_pay_percentage_of.hauling_fees
        ) {
          // Hauling Fees (Flat Fee)
          const haulingFees = loadCharges
            .map((loadCharge) => loadCharge.hauling_fees)
            .reduce((total, current) => total + current, 0);

          payload.total_payment = parseFloat(
            (loadPayPercentage * haulingFees) / 100
          );
        } else if (
          load_pay_percentage_of == config.load_pay_percentage_of.total_income
        ) {
          // total income
          const loadTotalIncome = this.loads
            .map((load) => load.total_amount)
            .reduce((total, current) => total + current, 0);

          payload.total_payment = parseFloat(
            (loadPayPercentage * loadTotalIncome) / 100
          );
        } else if (
          load_pay_percentage_of ==
          config.load_pay_percentage_of.hauling_plus_fuel_surcharge
        ) {
          // Hauling Fees + Fuel Surcharge
          const haulingFees = loadCharges
            .map((loadCharge) => loadCharge.hauling_fees)
            .reduce((total, current) => total + current, 0);

          const fuelSurcharge = this.loads
            .map((load) => {
              if (load.load_charge.fuel_surcharge_type == "per_mile") {
                return load.load_charge.fuel_surcharge * load.total_miles;
              }

              // FuelSurcharge = Flat Fee, Percentage
              return load.load_charge.fuel_surcharge;
            })
            .reduce((total, current) => total + current, 0);

          const haulingPlushFuelSurCharge = haulingFees + fuelSurcharge;

          payload.total_payment = parseFloat(
            (loadPayPercentage * haulingPlushFuelSurCharge) / 100
          );
        }
      }
      payload.total_payment = Number(payload.total_payment).toFixed(2);
      return payload;
    },

    async getTrip() {
      const { payload } = await this.$store.dispatch(
        "trip/getTrip",
        this.$route.params.id
      );

      // console.log(payload)
      this.trip = payload;

      this.loads = payload.loads;
      this.tripExpenses = payload.tripExpenses.map((expense) => ({
        ...expense,
        approve_cost: parseFloat(expense.cost),
        approve_quantity_description: expense.quantity_description,
      }));

      // Driver One
      this.driver1 = payload.driver_one;
      this.driver1Payment = this.getDriverPayment(this.driver1);
      // console.log(this.driver1Payment)

      // Driver Two
      if (this.hasCoDriver) {
        this.driver2 = payload.driver_two;
        this.driver2Payment = this.getDriverPayment(this.driver2);
        // console.log(this.driver2Payment)
      }
    },

    //
    getStopCharges(noOfStops, driver) {
      const diffrence =
        parseFloat(noOfStops) -
        parseFloat(driver.driver_details.pay_per_stop_start_after);

      if (diffrence <= 0 || typeof noOfStops !== "number") {
        return 0;
      }

      return diffrence * parseFloat(driver.driver_details.pay_per_stop_rate);
    },

    getDetentionCharges(detentionHours, driver) {
      const diffrence =
        parseFloat(detentionHours) -
        parseFloat(driver.driver_details.detention_start_after);

      if (diffrence <= 0 || typeof detentionHours !== "number") {
        return 0;
      }

      return diffrence * parseFloat(driver.driver_details.detention_rate);
    },

    getLayoverCharges(layoverHours, driver) {
      const diffrence =
        parseFloat(layoverHours) -
        parseFloat(driver.driver_details.layover_start_after);

      if (diffrence <= 0 || typeof layoverHours !== "number") {
        return 0;
      }

      return diffrence * parseFloat(driver.driver_details.layover_rate);
    },

    getPerMileDriverTotalPayment(driver, totalMiles = null) {
      totalMiles = totalMiles != null ? totalMiles : this.trip.total_miles;

      return parseFloat(totalMiles * driver.driver_details.per_mail_charges);
    },

    calculateDriver1Payment(value, calculateOn) {
      const validatedValue = isNaN(parseFloat(value)) ? 0 : parseFloat(value);

      if (calculateOn == "no_of_stops") {
        this.driver1Payment.stop_charge = this.getStopCharges(
          validatedValue,
          this.driver1
        );
      }

      if (calculateOn == "detention") {
        this.driver1Payment.detention_charge = this.getDetentionCharges(
          validatedValue,
          this.driver1
        );
      }

      if (calculateOn == "layover") {
        this.driver1Payment.layover_charge = this.getLayoverCharges(
          validatedValue,
          this.driver1
        );
      }

      const driverPayment = this.getPerMileDriverTotalPayment(
        this.driver1,
        this.driver1Payment.total_miles
      );

      this.driver1Payment.total_payment =
        driverPayment +
        this.driver1Payment.stop_charge +
        this.driver1Payment.detention_charge +
        this.driver1Payment.layover_charge;
    },

    calculateDriver2Payment(value, calculateOn) {
      const validatedValue = isNaN(parseFloat(value)) ? 0 : parseFloat(value);

      if (calculateOn == "no_of_stops") {
        this.driver2Payment.stop_charge = this.getStopCharges(
          validatedValue,
          this.driver2
        );
      }

      if (calculateOn == "detention") {
        this.driver2Payment.detention_charge = this.getDetentionCharges(
          validatedValue,
          this.driver2
        );
      }

      if (calculateOn == "layover") {
        this.driver2Payment.layover_charge = this.getLayoverCharges(
          validatedValue,
          this.driver2
        );
      }

      const driverPayment = this.getPerMileDriverTotalPayment(
        this.driver2,
        this.driver2Payment.total_miles
      );

      this.driver2Payment.total_payment =
        driverPayment +
        this.driver2Payment.stop_charge +
        this.driver2Payment.detention_charge +
        this.driver2Payment.layover_charge;
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  td {
    vertical-align: top;
    min-width: 150px;
    padding-bottom: 0.8rem;
    word-break: break-all;
  }
}

#driver-detail table {
  td {
    vertical-align: top;
    min-width: 180px;
    padding-bottom: 0.8rem;
    word-break: break-all;
  }
}

::v-deep {
  // slider
  .swiper-slide.swiper-slide-prev {
    opacity: 0 !important;
  }

  #notes {
    textarea.vs-textarea {
      resize: none !important;
    }
  }
}
</style>
