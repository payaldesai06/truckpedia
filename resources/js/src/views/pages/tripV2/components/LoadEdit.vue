<template>
  <div class="vs-row w-full" v-if="!isLoading">
    <div class="vx-col w-full mb-3">
      <vx-card>
        <div class="flex items-center justify-between">
          <div>
            <h2>
              Trip No. <span>{{ tripNumber }}</span>
            </h2>
          </div>
          <feather-icon
            v-show="showCloseButton"
            icon="XIcon"
            @click="$emit('closeSidebar')"
            class="cursor-pointer"
          />
        </div>
      </vx-card>
    </div>

    <!-- START : Load Information -->
    <div class="vx-col w-full mb-3" v-if="driverPayType !== 'template'">
      <vx-card title="Load Information" collapse-action>
        <div class="space-y-4">
          <vx-card no-shadow card-border>
            <div
              class="overflow-auto p-2"
              style="background-color: #f7f8f9"
              v-for="(load, index) in loads"
              :key="`load_${load.loadId}_${index}`"
            >
              <h4
                class="cursor-pointer"
                :style="
                  !load.isCollapsed ? `box-shadow: 1px 2px 1px #f0f0f1` : ''
                "
                @click.stop="load.isCollapsed = !load.isCollapsed"
              >
                #{{ load.loadNumber }}
              </h4>
              <table
                class="overflow-auto w-full load-table"
                v-click-outside="removeCellFocus"
                v-show="!load.isCollapsed"
              >
                <table-header :headers="getHeaders" />
                <tbody>
                  <tr v-for="(stop, index) in load.stops" :key="index">
                    <td
                      v-for="(currentStop, idx) in stop"
                      :key="`key_${load.loadId}_${idx}_${index}`"
                      :cellId="`cellId_${load.loadId}_${idx}_${index}`"
                      class="td-children"
                      @click.stop="
                        handleOnCellFocus(
                          `cellId_${load.loadId}_${idx}_${index}`
                        )
                      "
                    >
                      <div class="table-td">
                        <p
                          v-text="currentStop.textValue"
                          class="cells__input cell-export"
                        ></p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </vx-card>
        </div>
      </vx-card>
    </div>
    <!-- END : Load Information -->

    <!-- START : Driver Pay template Block : Present only when driverPayType is 'template' -->
    <div
      class="vx-col w-full mb-3"
      id="payment-template"
      v-if="driverPayType === 'template'"
    >
      <vx-card title="Load Payments" collapse-action>
        <div class="space-y-1">
          <vx-card no-shadow card-border class="card">
            <div
              class="mb-5"
              v-for="(load, index) in loads"
              :key="`load_${load.loadId}_${index}`"
            >
              <h4
                class="cursor-pointer p-3"
                style="background-color: #f7f8f9"
                :style="
                  !load.isCollapsed ? `box-shadow: 1px 2px 1px #f0f0f1` : ''
                "
                @click.stop="load.isCollapsed = !load.isCollapsed"
              >
                Load #{{ load.loadNumber }}
              </h4>
              <div style="background-color: #f7f8f9" class="overflow-auto">
                <table
                  class="w-full load-table"
                  v-click-outside="removeCellFocus"
                  v-show="!load.isCollapsed"
                >
                  <table-header :headers="getHeaders" />
                  <tbody>
                    <tr v-for="(stop, index) in load.stops" :key="index">
                      <td
                        v-for="(currentStop, idx) in stop"
                        :key="`key_${load.loadId}_${idx}_${index}`"
                        :cellId="`cellId_${load.loadId}_${idx}_${index}`"
                        class="td-children"
                        @click.stop="
                          handleOnCellFocus(
                            `cellId_${load.loadId}_${idx}_${index}`
                          )
                        "
                      >
                        <div class="table-td">
                          <p
                            v-text="currentStop.textValue"
                            class="cells__input cell-export"
                          ></p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="w-full px-6 mt-5">
                <load-template
                  v-model="load.loadTemplate"
                  :load="load"
                  :customFields="payTemplateCustomFields"
                  :initLoadTemplateData="initLoadTemplateData[load.loadId]"
                  :isApproved="isApproved"
                  @loadPaymentTotal="loadPaymentTotal"
                  @isCustomFieldPopupOpenOrNot="isCustomFieldPopupOpenOrNot"
                  @updateCustomFields="getCustomFields"
                  @loadTemplateFields="loadTemplateFields"
                />
              </div>
            </div>
          </vx-card>
        </div>

        <div class="mt-4">
          <vx-card no-shadow card-border class="card">
            <trip-template
              v-model="tripTemplate"
              :tripsTemplateFields="tripsTemplateFields"
              :initTripTemplateData="initTripTemplateData"
              :customFields="payTemplateCustomFields"
              :isApproved="isApproved"
              @tripPaymentTotal="tripPaymentTotal"
              @isCustomFieldPopupOpenOrNot="isCustomFieldPopupOpenOrNot"
              @updateCustomFields="getCustomFields"
            />

            <!-- <div class="flex justify-between flex-wrap">
              <h5 class="text-primary font-semibold">
                Total Payment :<span class="ml-2 text-dark opacity-75">
                  <span class="mr-1">&dollar;</span>
                  {{ loadPayment }}
                </span>
              </h5>
            </div> -->
          </vx-card>
        </div>
      </vx-card>
    </div>
    <!-- END : Driver Pay template Block -->

    <!-- START : Driver Pay template : Total payment Block : Present only when driverPayType is 'template' -->
    <div
      class="vx-col w-full mb-3"
      id="template-payment-total"
      v-if="driverPayType === 'template'"
    >
      <vx-card>
        <div class="flex justify-between flex-wrap">
          <h5 class="text-primary font-semibold">
            Trip Total Payment:<span class="ml-2 text-dark opacity-75">
              <span class="mr-1">&dollar;</span>
              {{ totalPayment() }}
            </span>
          </h5>
        </div>
      </vx-card>
    </div>

    <!-- END : Driver Pay template : Total payment Block -->

    <!-- START : Profit and Loss -->
    <div
      class="vx-col w-full mb-3"
      id="driver-detail"
      v-if="payeeType === 'companyDriver'"
    >
      <vx-card title="Profit and Loss">
        <div class="vx-row px-4 grid grid-cols-1 gap-4 lg:gap-8">
          <vx-card no-shadow card-border>
            <div class="vx-col">
              <table>
                <tr>
                  <td class="font-semibold">Total Miles:</td>
                  <td>
                    {{ totalLoadedMiles.toLocaleString() }}
                  </td>
                </tr>
                <tr>
                  <td class="font-semibold">Revenue:</td>
                  <td>
                    <span class="mr-1">&dollar;</span
                    >{{ this.totalLoadTotalRate.toLocaleString() }} (${{
                      ratePerMile.toLocaleString()
                    }}/mi)
                  </td>
                </tr>
                <tr>
                  <td class="font-semibold">Driver Pay:</td>
                  <td>
                    <span class="mr-1">&dollar;</span>{{ totalPayment() }}
                  </td>
                </tr>
                <tr
                  v-for="(item, index) in profitLossData.fuelExpenses"
                  :key="index"
                >
                  <td class="font-semibold">{{ item.product }}:</td>
                  <td><span class="mr-1">&dollar;</span>{{ item.amount }}</td>
                </tr>
              </table>
            </div>
            <vs-divider></vs-divider>
            <div class="flex justify-between flex-wrap">
              <h5 class="text-primary font-semibold">
                Profit :<span class="ml-2 text-dark opacity-75">
                  <span class="mr-1">&dollar;</span
                  >{{ calculateProfit().toLocaleString() }} (${{
                    profitPerMile.toLocaleString()
                  }}/mi)
                </span>
              </h5>
            </div>
          </vx-card>
        </div>
      </vx-card>
    </div>
    <!-- END : Profit and Loss -->

    <!-- START : Notes -->
    <div class="vx-col w-full mb-3" id="notes">
      <vx-card title="Notes">
        <vs-textarea v-model="trip.notes" height="120px" />
      </vx-card>
    </div>
    <!-- END : Notes -->

    <!-- START : Driver Detail -->
    <div
      class="vx-col w-full mb-3"
      id="driver-detail"
      v-if="driverPayType != 'template'"
    >
      <vx-card title="Driver Details">
        <div class="vx-row px-4 grid grid-cols-1 gap-4 lg:gap-8">
          <vx-card no-shadow card-border>
            <div class="vx-col">
              <table>
                <tr>
                  <td class="font-semibold">Name</td>
                  <td>{{ trip.driverName }}</td>
                </tr>
                <tr v-if="driverDetails.payType">
                  <td class="font-semibold">Payrate</td>
                  <td v-if="driverDetails.payType == 'hourly'">
                    {{ `$${driverDetails.hourlyRate}/hour` }}
                  </td>
                  <td v-if="driverDetails.payType == 'perMile'">
                    {{ `$${driverDetails.perMileCharge}/mile` }}
                  </td>
                  <td v-if="driverDetails.payType == 'percentage'">
                    {{ `${driverDetails.payPercentage}` }}
                    <span class="mx-1">&percnt; of</span>
                    {{ sentenceCase(driverDetails.payPercentageOf) }}
                  </td>
                  <td v-if="driverDetails.payType == 'flat'">
                    {{
                      `$${
                        driverDetails.flatPayRate ||
                        driverDetails.basePayment ||
                        0
                      }`
                    }}
                  </td>
                </tr>
              </table>

              <div class="w-full space-y-2">
                <template v-if="driverDetails.payType == 'hourly'">
                  <div class="w-full flex items-center space-x-4">
                    <div>
                      <label class="text-xs">
                        Total Hours
                        <field-required-sign />
                      </label>
                      <div class="flex flex-col">
                        <vs-input
                          v-validate="{
                            required: true,
                            regex: regexNumber,
                          }"
                          step="any"
                          name="totalHours"
                          type="number"
                          v-model.number="driverDetails.totalHours"
                          class="w-full"
                        />
                        <span class="text-danger text-sm">
                          {{ errors.first('totalHours') }}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p class="mt-5 font-semibold opacity-75">
                        <span class="mr-1">&dollar;</span>
                        {{ hourlyPayment }}
                      </p>
                    </div>
                  </div>
                </template>
                <template v-if="driverDetails.payType == 'perMile'">
                  <div class="w-full flex items-center space-x-4">
                    <div>
                      <label class="text-xs">
                        Total Miles
                        <field-required-sign />
                      </label>
                      <div class="flex flex-col">
                        <vs-input
                          v-validate="{
                            required: true,
                            regex: regexNumber,
                          }"
                          step="any"
                          name="totalMiles"
                          type="number"
                          v-model.number="driverDetails.totalMiles"
                          class="w-full"
                        />
                        <span class="text-danger text-sm">
                          {{ errors.first('totalMiles') }}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p class="mt-5 font-semibold opacity-75">
                        <span class="mr-1">&dollar;</span>
                        {{ loadPayment }}
                      </p>
                    </div>
                  </div>
                  <div class="w-full flex items-center space-x-4">
                    <div>
                      <label class="text-xs"> No. of Stops </label>
                      <div class="flex flex-col">
                        <vs-input
                          v-validate="{
                            regex: regexNumber,
                          }"
                          step="any"
                          name="totalStops"
                          type="number"
                          v-model.number="driverDetails.totalStops"
                          class="w-full"
                        />
                        <span class="text-danger text-sm">
                          {{ errors.first('totalStops') }}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p class="mt-5 font-semibold opacity-75">
                        <span class="mr-1">&dollar;</span>
                        {{ stopPayment }}
                      </p>
                    </div>
                  </div>
                  <div class="w-full flex items-center space-x-4">
                    <div>
                      <label class="text-xs"> Detention (in Hours) </label>
                      <div class="flex flex-col">
                        <vs-input
                          v-validate="{
                            regex: regexNumber,
                          }"
                          step="any"
                          name="detentionHours"
                          type="number"
                          v-model.number="driverDetails.detentionHours"
                          class="w-full"
                        />
                        <span class="text-danger text-sm">
                          {{ errors.first('detentionHours') }}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p class="mt-5 font-semibold opacity-75">
                        <span class="mr-1">&dollar;</span>
                        {{ detentionPayment }}
                      </p>
                    </div>
                  </div>
                  <div class="w-full flex items-center space-x-4">
                    <div>
                      <label class="text-xs"> Layover (in Hours) </label>
                      <div class="flex flex-col">
                        <vs-input
                          v-validate="{
                            regex: regexNumber,
                          }"
                          step="any"
                          name="layoverHours"
                          type="number"
                          v-model.number="driverDetails.layoverHours"
                          class="w-full"
                        />
                        <span class="text-danger text-sm">
                          {{ errors.first('layoverHours') }}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p class="mt-5 font-semibold opacity-75">
                        <span class="mr-1">&dollar;</span>
                        {{ layoverPayment }}
                      </p>
                    </div>
                  </div>
                </template>
                <template
                  v-if="
                    driverDetails.payType == 'percentage' ||
                    driverDetails.payType == 'flat' ||
                    driverDetails.payType == null
                  "
                >
                  <div class="w-1/2">
                    <label class="text-xs">
                      Base Payment
                      <field-required-sign />
                    </label>
                    <div class="flex flex-col">
                      <vs-input
                        v-validate="{
                          required: true,
                          regex: regexNumber,
                        }"
                        step="any"
                        name="basePayment"
                        type="number"
                        v-model.number="driverDetails.basePayment"
                        class="w-full"
                      />
                      <span class="text-danger text-sm">
                        {{ errors.first('basePayment') }}
                      </span>
                    </div>
                  </div>
                </template>
                <div class="w-1/2">
                  <label class="text-xs"> Reimbursement ($) </label>
                  <div class="flex flex-col">
                    <vs-input
                      v-validate="{
                        regex: regexNumber,
                      }"
                      step="any"
                      name="reimbursement"
                      type="number"
                      v-model.number="driverDetails.reimbursement"
                      class="w-full"
                    />
                    <span class="text-danger text-sm">
                      {{ errors.first('reimbursement') }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="flex gap-2 mt-3 items-center"
              v-for="(item, index) in customPayment"
              :key="index"
            >
              <label class="mr-2 text-sm">Custom Payment:</label>
              <v-select
                :options="customPaymentOption"
                label="name"
                :clearable="false"
                v-model="item.fieldId"
                :reduce="(option) => option.fieldId"
                @input="handleCustomPayment"
                class="w-64"
              />
              <vx-input-group>
                <template slot="prepend">
                  <div class="prepend-text bg-primary">
                    <span>$</span>
                  </div>
                </template>

                <vs-input
                  type="number"
                  step="any"
                  v-model.number="item.payment"
                />
              </vx-input-group>
              <vs-button
                color="danger"
                type="border"
                size="small"
                icon-pack="feather"
                icon="icon-trash"
                radius
                @click="removeCustomPayment(index)"
              ></vs-button>
            </div>
            <vs-button
              color="primary"
              type="border"
              class="mt-4"
              @click="addCustomPayment()"
              >Add custom payment</vs-button
            >

            <vs-divider></vs-divider>
            <div class="flex justify-between flex-wrap py-5">
              <h5 class="text-primary font-semibold">
                Total Payment :<span class="ml-2 text-dark opacity-75">
                  <span class="mr-1">&dollar;</span>
                  {{ totalPayment() }}
                </span>
              </h5>
            </div>
          </vx-card>
        </div>
      </vx-card>
    </div>
    <!-- END : Driver Detail -->

    <!-- START : File Upload -->
    <div class="vx-col w-full mb-3" id="file-upload">
      <vx-card title="File Upload">
        <template #actions>
          <div class="vx-row">
            <div class="vx-col flex gap-1 items-center">
              <vs-icon
                class="cursor-pointer"
                size="small"
                icon="file_upload"
                @click="toggleFileUploadPrompt(tripId)"
              />
            </div>
          </div>
        </template>
        <div>
          <span :id="tripId" class="drag-box">
            <input
              type="file"
              multiple
              @change="(event) => dragNdrop(event, tripId)"
              @dragleave="dragLeave(tripId)"
              @dragenter="dragEnter(tripId)"
              @drop="drop(tripId)"
            />
            <template v-if="trip.files.length > 0">
              <Files
                :imagePreview="false"
                :isDownloadAllowed="true"
                :fileList="trip.files"
                @deleteFile="deleteFile"
              />
            </template>
            <template v-else>
              <div class="vx-row justify-center">
                <div class="vx-col">
                  <span class="text-gray-500"
                    >Drag and drop files to upload or click here to upload</span
                  >
                </div>
              </div>
            </template>
          </span>
          <!-- <div id="preview" /> -->
        </div>
      </vx-card>
    </div>
    <!-- END : FileUpload -->

    <!--    START : BUTTONS-->
    <div class="vx-col w-full mb-3">
      <div class="space-x-2 flex justify-center">
        <vs-button color="warning" type="border" @click="$emit('closeSidebar')">
          Cancel
        </vs-button>
        <vs-button color="success" type="filled" @click="submit">
          {{ submitButtonText }}
        </vs-button>
      </div>
    </div>
    <!--    END : BUTTONS-->
    <vs-prompt
      title="Add New Custom Payment"
      accept-text="Save"
      @accept="acceptCustomPaymentPrompt"
      @cancel="closeCustomPaymentPrompt"
      @close="closeCustomPaymentPrompt"
      :active.sync="addNewCustomPaymentOptionPopup"
      style="z-index: 52015"
    >
      <div>
        <label class="text-xs">
          Name
          <field-required-sign />
        </label>
        <div class="flex flex-col">
          <vs-input type="text" v-model="customFeildName" class="w-full" />
        </div>
      </div>
      <div>
        <label class="text-xs"> Description </label>
        <div class="flex flex-col">
          <vs-input
            type="text"
            v-model="customFeildDescription"
            class="w-full"
          />
        </div>
      </div>
    </vs-prompt>
    <!-- File Upload Prompt -->
    <FileUploadPrompt
      id="trip-edit-file-prompt"
      :isPromptActive="isFileUploadPromptVisible"
      @onClose="toggleFileUploadPrompt"
      @onAccept="uploadFiles"
    />
  </div>
</template>
<!-- eslint-disable multiline-ternary no-mixed-operators nonblock-statement-body-position nonblock-statement-body-position -->
<script>
import { isEmpty, isArray } from 'lodash';
import { Validator } from 'vee-validate';
import $ from 'jquery';
import { mapGetters } from 'vuex';
const dict = {
  custom: {
    totalHours: {
      required: 'Total hours is required',
      regex: 'Not a valid value',
    },
    totalMiles: {
      required: 'Total miles is required',
      regex: 'Not a valid value',
    },
    totalStops: {
      regex: 'Not a valid value',
    },
    detentionHours: {
      regex: 'Not a valid value',
    },
    layoverHours: {
      regex: 'Not a valid value',
    },
    basePayment: {
      required: 'Base payment is required',
      regex: 'Not a valid value',
    },
    reimbursement: {
      regex: 'Not a valid value',
    },
  },
};
// Register custom messages
Validator.localize('en', dict);

export default {
  name: 'LoadEdit',
  components: {
    Files: () => import('@/components/files/Files'),
    TableHeader: () => import('./TableView/TableHeader.vue'),
    FileUploadPrompt: () => import('@/components/files/FileUploadPrompt'),
    LoadTemplate: () => import('./LoadTemplate'),
    TripTemplate: () => import('./TripTemplate'),
  },
  props: {
    recordId: {
      type: Number,
      default: null,
    },
    showCloseButton: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapGetters('load', ['getFuelPrice']),
    tripId() {
      return this.trip.tripId;
    },
    tripNumber() {
      return `#${this.trip.tripNumber}`;
    },
    isApproved() {
      return this.trip.status === 'approved' || this.trip.status === 'paid';
    },
    loadPayment() {
      let total = 0;

      if (this.driverPayType === 'template') {
        this.loads.forEach((load) => {
          ((load || {}).loadTemplate || []).forEach((template) => {
            if (template.payment) {
              total += parseFloat(template.payment);
            }
          });
        });
      } else {
        if (this.tripPaymentTotalAmount || this.loadPaymentTotalAmount) {
          return parseFloat(
            Number(this.loadPaymentTotalAmount) +
              Number(this.tripPaymentTotalAmount)
          ).toFixed(2);
        }
        if (this.driverDetails) {
          total =
            parseFloat(this.driverDetails.perMileCharge) *
              parseFloat(this.driverDetails.totalMiles) ||
            0 + parseFloat(this.driverDetails.emptyDistanceRate) ||
            0 * parseFloat(this.driverDetails.totalEmptyDistance) ||
            0;
        }
        total = total >= 0 ? total : 0;
      }
      return parseFloat(total).toFixed(2);
    },
    stopPayment() {
      let total = 0;

      if (
        this.driverDetails &&
        this.driverDetails.totalStops &&
        this.driverDetails.totalStops > 0
      ) {
        total =
          this.driverDetails.stopRate *
          (parseFloat(this.driverDetails.totalStops).toFixed(0) -
            this.driverDetails.stopPayStartAfter);
      }
      total = total >= 0 ? total : 0;

      return parseFloat(total).toFixed(2);
    },
    detentionPayment() {
      let total = 0;

      if (
        this.driverDetails &&
        this.driverDetails.detentionHours &&
        this.driverDetails.detentionHours > 0
      ) {
        total =
          this.driverDetails.detentionRate *
          (this.driverDetails.detentionHours -
            this.driverDetails.detentionPayStartAfter);
      }
      total = total >= 0 ? total : 0;

      return parseFloat(total).toFixed(2);
    },
    layoverPayment() {
      let total = 0;

      if (
        this.driverDetails &&
        this.driverDetails.layoverHours &&
        this.driverDetails.layoverHours > 0
      ) {
        total =
          this.driverDetails.layoverRate *
          (this.driverDetails.layoverHours -
            this.driverDetails.layoverPayStartAfter);
      }
      total = total >= 0 ? total : 0;

      return parseFloat(total).toFixed(2);
    },
    hourlyPayment() {
      let total = 0;

      if (
        this.driverDetails &&
        this.driverDetails.totalHours &&
        this.driverDetails.totalHours > 0
      ) {
        total = this.driverDetails.hourlyRate * this.driverDetails.totalHours;
      }
      total = total >= 0 ? total : 0;

      return parseFloat(total).toFixed(2);
    },
    getHeaders() {
      return this.headers
        .map((header) => {
          const checkForValues = [
            'driverArrivalDateTime2',
            'driverDepartureDateTime2',
          ];
          if (header.isVisible && header.type === 'dateTime') {
            header.name = header.name.replace('Time', '');
          }
          header.keys.forEach((key) => {
            header.isVisible = checkForValues.includes(key)
              ? this.loads.some((load) => load.stops.find((item) => item[key]))
              : true;
          });
          return header;
        })
        .filter((header) => header.isVisible);
    },
    driverPayType() {
      return this.isApproved
        ? (this.trip || {}).driverPayType || 'flat'
        : (this.driverDefaultPayType || {}).defaultPayType || 'flat';
      // flat is to be the fall back pay type
    },
    submitButtonText() {
      return this.trip.status === 'approved'
        ? 'Re-Approve'
        : this.trip.status === 'paid'
        ? 'Re-Approve Paid Trip'
        : 'Approve';
    },
    ratePerMile() {
      if (!this.totalLoadedMiles) {
        return 0;
      }
      return (this.totalLoadTotalRate / this.totalLoadedMiles).toFixed(2) || 0;
    },
    profitPerMile() {
      if (!this.totalLoadedMiles) {
        return 0;
      }
      return (
        (this.calculateProfit() / this.totalLoadedMiles || 0).toFixed(2) || 0
      );
    },
  },
  data() {
    return {
      loadTemplate: [],
      tripTemplate: [],
      tripsTemplateFields: [],
      isLoading: false,
      trip: null,
      payeeType: null,
      earliestStartDate: null,
      latestEndDate: null,
      tripDriverName: null,
      profitLossData: [],
      totalLoadTotalRate: 0,
      totalLoadedMiles: 0,
      loads: [],
      driverDefaultPayType: null,
      driverDetails: null,
      regexNumber: /^\d*\.?\d*$/,
      payTypeKeys: {
        hauling_fees: 'haulingFees',
        total_income: 'totalIncome',
        hauling_plus_fuel_surcharge: 'haulingPlusFuelSurcharge',
      },
      customPayment: [],
      addNewCustomPaymentOptionPopup: false,
      customFeildName: '',
      customFeildDescription: '',
      customPaymentOption: [
        { fieldId: null, name: 'Add new', description: '' },
      ],
      isFileUploadPromptVisible: false,
      fileInput: null,
      isAnyPromptsActive: false,
      headers: [
        { id: 1, name: 'Name', type: 'text', keys: ['name'], isVisible: true },
        {
          id: 2,
          name: 'Type',
          type: 'singleSelect',
          keys: ['type'],
          isVisible: true,
        },
        {
          id: 3,
          name: 'Appointment Time',
          type: 'dateTime',
          keys: ['date', 'time'],
          isVisible: true,
        },
        {
          id: 4,
          name: 'Address',
          type: 'text',
          keys: ['address', 'city', 'state'],
          isVisible: true,
        },
        {
          id: 5,
          name: 'Arrival Time',
          type: 'dateTime',
          keys: ['driverArrivalDateTime'],
          isVisible: true,
        },
        {
          id: 6,
          name: 'Departure Time',
          type: 'dateTime',
          keys: ['driverDepartureDateTime'],
          isVisible: true,
        },
        {
          id: 7,
          name: 'Arrival Time 2',
          type: 'dateTime',
          keys: ['driverArrivalDateTime2'],
          isVisible: true,
        },
        {
          id: 8,
          name: 'Departure Time 2',
          type: 'dateTime',
          keys: ['driverDepartureDateTime2'],
          isVisible: true,
        },
      ],
      tripPaymentTotalAmount: null,
      loadPaymentTotalAmount: null,
      payTemplateCustomFields: null,
      initLoadTemplateData: {},
      initTripTemplateData: [],
      loadTemplateFieldsOptions: [],
    };
  },
  created() {
    this.init();
    this.getPublicWeeklyFuelPrices();
  },
  // mounted() {
  //   this.getCustomFields();
  // },
  methods: {
    loadTemplateFields(options) {
      this.loadTemplateFieldsOptions = options;
    },
    getPublicWeeklyFuelPrices() {
      this.$store.dispatch('load/getPublicWeeklyFuelPrices');
    },
    isCustomFieldPopupOpenOrNot(val) {
      setTimeout(() => {
        // Necessary to avoid the Sidebar from closing when the popup is opened
        this.isAnyPromptsActive = val;
      }, 100);
    },
    getCustomFields() {
      this.$store
        .dispatch('driverPayTemplates/getCustomFields')
        .then((data) => {
          this.payTemplateCustomFields = data;
          this.tripsTemplateFields = data.tripFields;
        });
    },
    totalPayment() {
      let grandTotal = 0;

      if (this.driverPayType === 'template') {
        this.loads.forEach((load) => {
          ((load || {}).loadTemplate || []).forEach((template) => {
            if (template.payment) {
              grandTotal += parseFloat(template.payment);
            }
          });
        });
        this.tripTemplate.forEach((template) => {
          if (template.payment) {
            grandTotal += parseFloat(template.payment);
          }
        });
      } else {
        const reimbursement = this.driverDetails.reimbursement
          ? this.driverDetails.reimbursement
          : 0;
        if (this.driverDetails.payType === 'perMile') {
          grandTotal =
            Number(this.loadPayment) +
            Number(this.stopPayment) +
            Number(this.detentionPayment) +
            Number(this.layoverPayment) +
            Number(reimbursement);
        } else if (this.driverDetails.payType === 'hourly') {
          grandTotal = Number(this.hourlyPayment) + Number(reimbursement);
        } else if (this.driverDetails.payType === 'percentage') {
          const loadKeys = {
            haulingFees: 'loadHaulingFees',
            totalIncome: 'loadTotalRate',
            haulingPlusFuelSurcharge: ['loadHaulingFees', 'loadFuelSurcharge'],
          };

          const loadAmount = {
            total: 0,
          };

          const total = this.trip.loads.reduce((acc, load) => {
            if (loadKeys[this.driverDetails.payPercentageOf]) {
              const keys = loadKeys[this.driverDetails.payPercentageOf];

              if (isArray(keys)) {
                const total = (load[keys[0]] || 0) + (load[keys[1]] || 0);
                loadAmount.total += total;

                return (
                  acc +
                  (total * parseFloat(this.driverDetails.payPercentage)) / 100
                );
              }

              loadAmount.total += load[keys] || 0;

              return (
                acc +
                (parseFloat(load[keys]) *
                  parseFloat(this.driverDetails.payPercentage)) /
                  100
              );
            }
          }, 0);

          grandTotal =
            this.driverDetails.basePayment === null
              ? total
              : this.driverDetails.basePayment;

          if (
            this.driverDetails.basePayment === null &&
            this.driverDetails.basePayment !== grandTotal
          )
            this.assignBasePayment(grandTotal);

          this.assignPercentageLoadAmount(loadAmount.total);

          grandTotal = Number(grandTotal) + Number(reimbursement);
        } else {
          if (
            this.driverDetails.payType === 'flat' &&
            this.driverDetails.basePayment === null
          ) {
            this.assignBasePayment(parseFloat(this.driverDetails.flatPayRate));
          }
          grandTotal =
            Number(this.driverDetails.basePayment) + Number(reimbursement);
        }
        if (this.customPayment.length > 0) {
          const total = this.customPayment.reduce(
            (acc, curr) => acc + Number(curr.payment),
            0
          );
          if (!isNaN(total)) {
            grandTotal = grandTotal + total;
          }
        }
      }
      return !isNaN(grandTotal) ? Number(grandTotal).toFixed(2) : 0;
    },
    acceptCustomPaymentPrompt() {
      this.$vs.loading();
      const payload = {
        name: this.customFeildName,
        description: this.customFeildDescription,
      };
      this.$store
        .dispatch('tripV2/customPaymentFieldCreate', payload)
        .then(() => {
          this.customPaymentOption = [
            { fieldId: null, name: 'Add new', description: '' },
          ];
          this.getCustomPaymentOptions();

          this.$vs.notify({
            color: 'primary',
            title: 'Add custom payment',
            text: 'Add custom payment successfully.',
          });
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: this.getErrorMsg(error),
          });
        })
        .finally(() => {
          this.$vs.loading.close();
        });
    },
    closeCustomPaymentPrompt() {
      this.addNewCustomPaymentOptionPopup = false;
    },
    handleCustomPayment(id) {
      if (id === null) {
        this.addNewCustomPaymentOptionPopup = true;
      }
    },
    removeCustomPayment(index) {
      this.customPayment.splice(index, 1);
    },
    addCustomPayment() {
      this.customPayment.push({});
    },
    async init() {
      try {
        this.isLoading = true;
        this.$vs.loading();
        await this.getCustomFields();
        await this.getTrip();
        this.getCustomPaymentOptions();
      } catch (error) {
      } finally {
        this.isLoading = false;
        this.$vs.loading.close();
      }
    },
    getCustomPaymentOptions() {
      this.$store.dispatch('tripV2/customPaymentGetField').then(({ data }) => {
        data.payload.fields.forEach((item) => {
          this.customPaymentOption.unshift(item);
        });
      });
    },
    async isFormValid() {
      await this.$validator.validateAll();

      return this.errors.items.length === 0;
    },
    // Form Submit
    async submit() {
      const formValid = await this.isFormValid();
      if (!formValid) return;

      const {
        payType,
        reimbursement,
        payPercentage,
        payPercentageOf,
        payPercentageLoadAmount,
        basePayment,
        hourlyRate,
        totalHours,
        stopRate,
        totalStops,
        layoverRate,
        layoverHours,
        detentionRate,
        totalMiles,
        detentionHours,
        emptyDistanceRate,
        stopPayStartAfter,
        perMileCharge,
        totalEmptyDistance,
        layoverPayStartAfter,
        detentionPayStartAfter,
      } = this.driverDetails;

      const payload = {
        tripId: this.recordId,
        driverPayType: payType,
        loadPayment: this.loadPayment,
        reimbursement: reimbursement
          ? parseFloat(reimbursement).toFixed(2)
          : null,
        additionalCustomPayments: null,
        totalPayment: this.totalPayment(),
        notes: this.trip.notes,
      };

      const objName = {
        perMile: 'payMileDetails',
        hourly: 'payHourlyDetails',
        percentage: 'payPercentageDetails',
        template: 'payTemplateDetails',
      };

      if (payload.driverPayType === 'percentage') {
        payload[objName[payload.driverPayType]] = {
          payPercentage,
          payPercentageOf,
          payPercentageLoadAmount,
        };

        payload.loadPayment = basePayment;
      } else if (payload.driverPayType === 'hourly') {
        payload[objName[payload.driverPayType]] = {
          hourlyRate,
          totalHours: parseFloat(totalHours).toFixed(2),
        };

        payload.loadPayment = this.hourlyPayment;
      } else if (payload.driverPayType === 'perMile') {
        payload[objName[payload.driverPayType]] = {
          stopRate,
          stopCount: totalStops ? parseFloat(totalStops).toFixed(0) : null,
          layoverRate,
          stopPayment: this.stopPayment,
          layoverInHours: layoverHours
            ? parseFloat(layoverHours).toFixed(2)
            : null,
          detentionRate,
          layoverPayment: this.layoverPayment,
          totalLoadedDistance: parseFloat(totalMiles).toFixed(2),
          detentionInHours: detentionHours
            ? parseFloat(detentionHours).toFixed(2)
            : null,
          detentionPayment: this.detentionPayment,
          emptyDistanceRate,
          stopPayStartAfter,
          loadedDistanceRate: perMileCharge,
          totalEmptyDistance,
          layoverPayStartAfter,
          detentionPayStartAfter,
        };
      } else if (
        payload.driverPayType === 'flat' ||
        payload.driverPayType === null
      ) {
        payload.loadPayment = basePayment;
      } else if (payload.driverPayType === 'template') {
        let loadDetails = [];
        let firstStopDatePrice = null;
        this.loads.forEach((load, index) => {
          if (index === 0) {
            console.log(this.getFuelPrice(load.stops[0][0].date));
            const fuelPrice = this.getFuelPrice(load.stops[0][0].date);
            firstStopDatePrice = fuelPrice !== null ? fuelPrice : null;
          }

          load.loadTemplate.forEach((item) => {
            const obj = {
              loadId: load.loadId,
              fieldId: item.fieldId,
              payment: item.payment,
              qty: item.quantity,
              type: item.type,
              comment: item.comment,
              tripTemplatePayDetailId: item.tripTemplatePayDetailId || null,
            };
            if (item.hasOwnProperty('rate') && item.rate !== null) {
              obj.rate = item.rate;
            }
            if (
              item.hasOwnProperty('payStartAfter') &&
              item.payStartAfter !== null
            ) {
              obj.payStartAfter = item.payStartAfter;
            }
            if (item.hasOwnProperty('percentage') && item.percentage !== null) {
              obj.percentage = item.percentage;
            }
            if (
              item.type === 'formulaLoadedMiles' ||
              item.type === 'formulaEmptyMiles'
            ) {
              obj.v1 =
                item.v1 === firstStopDatePrice || !item.v1
                  ? firstStopDatePrice
                  : item.v1;
              obj.v2 = item.v2;
              obj.v3 = item.v3;
              console.log('v1', item.v1);
              console.log('v2', item.v2);
              console.log('v3', item.v3);
            }
            loadDetails.push(obj);
          });
        });
        const tripDetails = this.tripTemplate.map((item) => {
          return {
            fieldId: item.fieldId,
            payment: item.payment,
            qty: item.quantity,
            rate: item.rate,
            type: item.type,
            comment: item.comment,
            tripTemplatePayDetailId: item.tripTemplatePayDetailId || null,
          };
        });
        payload[objName[payload.driverPayType]] = {
          loadDetails: loadDetails,
          tripDetails: tripDetails,
        };
      }
      payload.additionalCustomPayments = this.customPayment.map((x) => {
        return {
          ...x,
          customPaymentId: x.id || null,
        };
      });

      this.$vs.loading();

      try {
        await this.$store.dispatch('tripV2/approveTrip', payload);
        this.$emit('closeSidebar', true);

        this.$vs.notify({
          color: 'primary',
          title: 'Trip Payment Approved',
          text: 'Trip payment approved successfully.',
        });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: this.getErrorMsg(error),
        });
      } finally {
        this.$vs.loading.close();
      }
    },
    getPayType(type) {
      return this.payTypeKeys[type] || type;
    },
    initDriverDetailsObject() {
      this.driverDetails = {
        id: this.trip.driverUserId,
        payType: this.isApproved
          ? this.trip.driverPayType || 'flat'
          : this.driverDefaultPayType.defaultPayType || 'flat',
        hourlyRate:
          this.isApproved && this.trip.hourlyRate
            ? parseFloat(this.trip.hourlyRate).toFixed(2) || null
            : this.driverDefaultPayType.hourlyRate || null,
        totalHours: parseFloat(this.trip.totalHours) || null,
        reimbursement: this.trip.reimbursement || null,
        totalPayment: this.trip.totalPayment || null,
        totalStops: this.isApproved ? this.trip.stopCount : null,
        stopPayment: this.trip.stopPayment || null,
        stopRate: this.isApproved
          ? parseFloat(this.trip.stopRate) || null
          : parseFloat(this.driverDefaultPayType.payPerStopRate) || null,
        stopPayStartAfter: this.isApproved
          ? this.trip.stopPayStartAfter || null
          : this.driverDefaultPayType.payPerStopStartAfter || null,
        detentionHours: this.isApproved ? this.trip.detentionInHours : null,
        detentionPayment: this.trip.detentionPayment || null,
        detentionPayStartAfter: this.isApproved
          ? this.trip.detentionPayStartAfter || null
          : this.driverDefaultPayType.detentionStartAfter || null,
        detentionRate: this.isApproved
          ? parseFloat(this.trip.detentionRate) || null
          : parseFloat(this.driverDefaultPayType.detentionRate) || null,
        layoverHours: this.isApproved ? this.trip.layoverInHours : null,
        layoverPayment: this.trip.layoverPayment || null,
        layoverPayStartAfter: this.isApproved
          ? this.trip.layoverPayStartAfter || null
          : this.driverDefaultPayType.layoverStartAfter || null,
        layoverRate: this.isApproved
          ? parseFloat(this.trip.layoverRate) || null
          : parseFloat(this.driverDefaultPayType.layoverRate) || null,
        payPercentageOf: this.isApproved
          ? this.getPayType(this.trip.payPercentageOf)
          : this.getPayType(this.driverDefaultPayType.loadPayPercentageOf),
        payPercentage:
          this.isApproved && this.trip.payPercentage
            ? parseFloat(this.trip.payPercentage).toFixed(2) || null
            : this.driverDefaultPayType.loadPayPercentage || null,
        payPercentageLoadAmount: this.isApproved
          ? this.trip.payPercentageLoadAmount || 0
          : 0,
        perMileCharge:
          this.isApproved && this.trip.loadedDistanceRate
            ? parseFloat(this.trip.loadedDistanceRate).toFixed(2) || null
            : this.driverDefaultPayType.perMileCharge || null,
        totalMiles: this.trip.totalLoadedDistance
          ? parseFloat(this.trip.totalLoadedDistance).toFixed(2)
          : null,
        loadPayment: this.isApproved ? this.trip.loadPayment || null : 0,
        loadedDistanceRate: this.trip.loadedDistanceRate
          ? this.trip.loadedDistanceRate
          : null,
        emptyDistanceRate: this.trip.emptyDistanceRate
          ? this.trip.emptyDistanceRate
          : null,
        totalEmptyDistance: this.trip.totalEmptyDistance
          ? parseFloat(this.trip.totalEmptyDistance)
          : null,
        flatPayRate:
          this.driverDefaultPayType && this.driverDefaultPayType.flatPayRate
            ? parseFloat(this.driverDefaultPayType.flatPayRate).toFixed(2)
            : null,
        basePayment: this.isApproved ? this.trip.loadPayment || null : null,
        driverPayTemplate:
          this.isApproved && this.trip.driverPayType === 'template'
            ? this.trip.payTemplateDetails
            : this.driverDefaultPayType.defaultPayType === 'template'
            ? this.driverDefaultPayType.driverPayTemplate
            : null,
      };
      if (this.driverDetails.payType === 'template') {
        this.initLoadTemplateData = {};
        this.loads.forEach((load) => {
          this.initLoadTemplateData[load.loadId] =
            this.driverDetails.driverPayTemplate.loadDetails;
          if (
            this.trip.payTemplateDetails &&
            this.trip.payTemplateDetails.loadDetails &&
            this.trip.payTemplateDetails.loadDetails.length > 0
          ) {
            const loadDetails = this.trip.payTemplateDetails.loadDetails.filter(
              (e) => e.loadId === load.loadId
            );
            if (loadDetails.length > 0) {
              this.initLoadTemplateData[load.loadId] = loadDetails;
            }
          }
        });

        /*
        this.initLoadTemplateData = (this.trip.payTemplateDetails && this.trip.payTemplateDetails.loadDetails && this.trip.payTemplateDetails.loadDetails.length > 0)
          ? this.trip.payTemplateDetails.loadDetails
          : this.driverDetails.driverPayTemplate.loadDetails;
        */
        this.initTripTemplateData =
          this.driverDetails.driverPayTemplate.tripDetails;
      }
    },
    async getTrip() {
      try {
        this.$vs.loading();
        const {
          data: { payload },
        } = await this.$store.dispatch('tripV2/fetchTripById', this.recordId);

        if (!payload) return;

        if (payload && !isEmpty(payload.trip)) {
          this.trip = payload.trip;
          this.driverDefaultPayType = payload.driverDefaultPayType || {};
          const loads = payload.trip.loads.map((load) => {
            return {
              ...load,
              isCollapsed: false,
            };
          });
          this.loads =
            loads && loads.length > 1 ? this.sortLoadsByDateTime(loads) : loads;
          this.customPayment = payload.trip.additionalCustomPayments;
          this.loads = this.loads.map((load) => {
            const stops = this.getFormattedStops(load.stops);
            return {
              ...load,
              stops,
            };
          });
          this.initDriverDetailsObject();
          if (payload.type == 'companyDriver') {
            const dates = payload.trip.loads.map((load) => {
              return {
                loadStartDate: load.loadStartDate,
                loadEndDate: load.loadEndDate,
              };
            });
            const allDates = [];
            dates.forEach((date) => {
              allDates.push(date.loadStartDate, date.loadEndDate);
            });
            allDates.sort((a, b) => a - b);
            this.earliestStartDate = allDates[0];
            this.latestEndDate = allDates[allDates.length - 1];
            this.tripDriverName = payload.trip.driverName;
            this.payeeType = payload.type;
            this.totalLoadTotalRate = this.trip.loads.reduce(
              (total, load) =>
                parseFloat(total) + parseFloat(load.loadTotalRate),
              0
            );

            this.totalLoadedMiles = this.trip.loads.reduce(
              (total, load) =>
                parseFloat(total) +
                (parseFloat(load.loadedDistance) +
                  parseFloat(load.emptyDistance)),
              0
            );
            this.fetchData();
          }
        }
      } catch (e) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: this.getErrorMsg(e),
        });

        this.$emit('closeSidebar');
      } finally {
        this.$vs.loading.close();
      }
    },
    async fetchData(pageSize = 50, currentPage = 1) {
      try {
        const filterParams = {
          page: currentPage,
          pageSize: pageSize,
          fields: ['date', 'amount', 'product'],
          startDate: this.earliestStartDate,
          endDate: this.latestEndDate,
          driverName: this.tripDriverName,
        };
        const res = await this.$store.dispatch(
          'accounting/getFuelExpenses',
          filterParams
        );
        this.profitLossData = res.data.payload;
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: this.getErrorMsg(error),
        });
      }
    },
    calculateProfit() {
      const revenue = this.totalLoadTotalRate || 0;
      const driverPayment = this.totalPayment() || 0;
      const fuelExpenses = (this.profitLossData.fuelExpenses || []).reduce(
        (total, expense) => parseFloat(total) + parseFloat(expense.amount || 0),
        0
      );

      const profit = revenue - driverPayment - fuelExpenses;
      return profit || 0;
    },
    assignBasePayment(value) {
      if (value) this.driverDetails.basePayment = parseFloat(value).toFixed(2);
    },
    assignPercentageLoadAmount(value) {
      if (value)
        this.driverDetails.payPercentageLoadAmount =
          parseFloat(value).toFixed(2);
    },
    sentenceCase(str) {
      const message = {
        haulingFees: 'hauling fees',
        totalIncome: 'total amount',
        haulingPlusFuelSurcharge: 'hauling fee and fuel surcharge',
      };

      return (
        `${message[str]} $${this.driverDetails.payPercentageLoadAmount}` ||
        `${str} $${this.driverDetails.payPercentageLoadAmount}`
      );
    },
    dragNdrop(event, tripId) {
      const files = event.target.files;
      const filesHolder = [];
      for (let i = 0; i < files.length; i++) {
        filesHolder.push(files[i]);
      }
      this.uploadFiles(filesHolder);
    },
    drop(tripId) {
      document.getElementById(tripId).classList = 'drag-box';
    },
    dragLeave(tripId) {
      document.getElementById(tripId).classList = 'drag-box';
    },
    dragEnter(tripId) {
      document.getElementById(tripId).classList = 'drag-box draging';
    },
    toggleFileUploadPrompt() {
      this.isFileUploadPromptVisible = !this.isFileUploadPromptVisible;
    },
    async deleteFile(data) {
      try {
        const fileId = ((data || {}).file || {}).fileId;
        await this.$store.dispatch('tripV2/deleteFile', {
          tripId: this.tripId,
          files: [
            {
              fileId,
            },
          ],
        });
        this.removeFileData(fileId);
        this.$vs.notify({
          time: 2000,
          color: 'success',
          title: 'File Deleted',
          text: 'File deleted successfully',
        });
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: this.getErrorMsg(error),
        });
      }
    },
    getFileExtension(files) {
      const fileExtension = files.map((file) => {
        const extension = file.name.split('.').pop();
        return { extension };
      });
      return fileExtension;
    },
    async generateS3NameAndURL(files) {
      try {
        if (files.length === 0) return;
        const allFiles = await this.getFileExtension(files);
        const {
          data: { result, payload },
        } = await this.$store.dispatch('tripV2/getUploadUrl', {
          tripId: this.tripId,
          files: allFiles,
        });

        return result && payload ? payload : [];
      } catch (error) {}
    },
    async uploadAttachmentsToS3(s3FileNameAndURL, files) {
      this.$vs.loading();
      try {
        if (s3FileNameAndURL) {
          const attachments = [];
          for (let i = 0; i < s3FileNameAndURL.length; i++) {
            const { storageFileName, url } = s3FileNameAndURL[i];
            const file = files[i];
            const { status } = await this.$store.dispatch(
              'uploadFileToS3ViaPresignedUrl',
              {
                url,
                file,
                extension: storageFileName.split('.').pop(),
              }
            );
            if (status === 200)
              attachments.push({
                storageFileName,
                originalFileName: file.name,
              });
          }
          return attachments;
        }
      } catch (error) {
      } finally {
        this.$vs.loading.close();
      }
    },
    async uploadFiles(files) {
      if (!(files && files.length > 0)) {
        return;
      }
      this.isFileUploadPromptVisible = false;
      try {
        // Process attachments
        const s3FileNameAndURL = await this.generateS3NameAndURL(files);
        const attachments =
          (await this.uploadAttachmentsToS3(s3FileNameAndURL, files)) || [];
        const payload = {
          tripId: parseInt(this.tripId),
          files: attachments,
        };
        await this.$store.dispatch('tripV2/uploadFiles', payload);

        const {
          data: {
            payload: { trip },
          },
        } = await this.$store.dispatch('tripV2/fetchTripById', this.recordId);

        if (trip !== undefined) {
          this.trip.files = trip.files;
        }
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: this.getErrorMsg(error),
        });
      }
    },
    getErrorMsg(error) {
      return error &&
        error.response &&
        error.response.data &&
        error.response.data.message
        ? error.response.data.message
        : 'Something went wrong';
    },
    removeFileData(fileId) {
      const files = this.trip.files.filter((file) => file.fileId !== fileId);
      this.$set(this.trip, 'files', files);
    },
    sortLoadsByDateTime(loads) {
      return loads.sort((a, b) => {
        const aDate = new Date(
          `${a.loadStartDate} ${a.loadStartTime || '00:00:00'}`
        ).getTime();
        const bDate = new Date(
          `${b.loadStartDate} ${b.loadStartTime || '00:00:00'}`
        ).getTime();
        return aDate - bDate;
      });
    },
    trimSeconds(dateTime) {
      if (this.$dayjs(dateTime).isValid()) {
        const date = dateTime.split(' ')[0];
        dateTime = `${this.$dayjs(date).format('MM/DD/YY')} ${
          dateTime.split(' ')[1]
        }`;
      }
      return dateTime.split(':').slice(0, 2).join(':');
    },
    getFormattedStops(stops) {
      const result = [];
      stops.forEach((stop) => {
        const acc = [];
        this.getHeaders.forEach((header) => {
          const textValue = header.keys.reduce((acc, key) => {
            const separateByComma = ['address', 'city'];
            return `${acc}${
              stop[key]
                ? `${stop[key]}${separateByComma.includes(key) ? ', ' : ' '}`
                : ''
            }`;
          }, '');
          acc.push({
            columnId: header.id,
            keys: header.keys,
            type: header.type,
            date: stop.date,
            textValue:
              header.type === 'dateTime'
                ? this.trimSeconds(textValue)
                : textValue,
          });
        });
        result.push(acc);
      });
      return result;
    },
    handleOnCellFocus(cellId) {
      this.removeCellFocus();
      $(`[cellId=${cellId}]`).addClass('cell-focus');
    },
    removeCellFocus() {
      $('td').removeClass('cell-focus');
    },
    tripPaymentTotal(val) {
      this.tripPaymentTotalAmount = val;
    },
    loadPaymentTotal(val) {
      this.loadPaymentTotalAmount = val;
    },
  },
  watch: {
    addNewCustomPaymentOptionPopup(val) {
      setTimeout(() => {
        // Necessary to avoid the Sidebar from closing when the popup is opened
        this.isAnyPromptsActive = val;
      }, 100);
    },
    isFileUploadPromptVisible(val) {
      setTimeout(() => {
        // Necessary to avoid the Sidebar from closing when the popup is opened
        this.isAnyPromptsActive = val;
      }, 100);
    },
  },
};
</script>

<style lang="scss" scoped>
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

.drag-box {
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
  line-height: 50px;
  color: #999;
  display: inline-block;
  transition: transform 0.3s;
  input[type='file'] {
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
    top: 0;
    left: 0;
  }
}
.draging {
  border: 2px dashed #ccc;
}
#trip-edit-file-prompt {
  z-index: 60000 !important;
}

.load-table {
  td {
    box-shadow: 1px 2px 1px #f0f0f1;
    border-block-end-color: rgb(240, 241, 243);
    background: #f7f8f9;
    padding: 5px;
    color: #666666;

    .table-td {
      display: flex;
      align-items: center;
      font-size: 13.5px;
    }
  }

  .td-children {
    background: #fff;
    max-width: 260px;
  }
}

.cells__input {
  border: none;
  padding: 0px 4px;
  width: 100%;
  overflow: hidden;
  height: 20px;
  color: #292d34;
  font-family: Arial, Montserrat, Helvetica, sans-serif;
  resize: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:disabled {
    background: #fff;
  }
}
.cells input,
.cells button {
  border: none;
  background: #fff;
  padding: 0 6px;
}
.cell-focus {
  // box-shadow: 0 0 0 3px #2d7ff9 !important;
  outline: #2d7ff9 auto 1px !important;
  .multiselect {
    flex-wrap: wrap;
  }
}

#payment-template {
  .card {
    ::v-deep .vx-card__body {
      padding: 1rem 1.5rem;
    }
  }
}
.px-table {
  ::v-deep .vx-card__body {
    padding: 1rem 0.5rem !important;
  }
}
</style>
