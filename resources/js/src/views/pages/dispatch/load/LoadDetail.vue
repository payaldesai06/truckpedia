<template>
  <VuePerfectScrollbar>
    <div class="p-6" style="max-height: 78vh; margin-bottom: 0rem">
      <div class="my-4 items-center flex" ref="step1">
        <b class="font-bold h4">Step 1: Load Information</b>
        <div class="flex mx-5 items-center">
          <label
            class="text-sm opacity-75 mr-2 flex items-center"
            style="min-width: 75px"
            >Load Type</label
          >
          <v-select
            :options="rateConTypeOptions"
            label="label"
            placeholer="Load Type"
            :reduce="(option) => option.value"
            :clearable="false"
            v-model="thirdPartyCarrier.rateConType"
            class="w-full"
            style="min-width: 120px"
          />
        </div>
      </div>

      <div class="vx-row">
        <div v-if="!isUserBrokerOrShipper" class="vx-col w-full mt-6">
          <h3 class="text-lg font-semibold text-black">Customer Details</h3>
        </div>

        <div
          class="vx-col w-1/2 mt-6"
          id="company-details"
          v-if="!isUserBrokerOrShipper"
        >
          <div class="">
            <label class="text-xs"
              >Company Name
              <field-required-sign v-if="userIsCarrier" />
            </label>

            <v-select
              :options="companyOptions"
              label="company_name"
              :clearable="!userIsCarrier"
              :disabled="!canAccess(roleModify)"
              @option:selected="onCustomerSelection()"
              :dir="$vs.rtl ? 'rtl' : 'ltr'"
              v-model="selected_company"
              class="mb-4 md:mb-0"
            />
          </div>
        </div>

        <!-- tag details -->
        <div class="vx-col w-1/2 mt-6" id="tag-details">
          <div class="">
            <label class="text-xs">Tag </label>

            <v-select
              :options="tagOptions"
              v-on:input="changeLoadId"
              label="business_name"
              :reduce="(option) => option.tag_id"
              :clearable="true"
              :disabled="!canAccess(roleModify)"
              :dir="$vs.rtl ? 'rtl' : 'ltr'"
              v-model="selected_tag"
              class="mb-4 md:mb-0"
            />
          </div>
        </div>
      </div>
      <div class="vx-row">
        <div
          :class="
            selected_company && selected_company.bill_to_code
              ? 'vx-col xl:w-1/2 lg:w-8/12  md:w-9/12 w-10/12'
              : 'vx-col w-1/2'
          "
        >
          <template v-if="selected_company">
            <table class="mt-4" id="company-details">
              <tr>
                <div class="flex items-center">
                  <div>
                    <td class="font-semibold whitespace-no-wrap">
                      Account Payable Email
                    </td>
                    <td>{{ selected_company.billing_email }}</td>
                  </div>
                </div>
              </tr>

              <tr>
                <div class="flex items-center">
                  <td class="font-semibold">Billing Address</td>
                  <td>
                    {{ selected_company.billing_address
                    }}{{ selected_company.billing_city ? ',' : '' }}
                    {{ selected_company.billing_city
                    }}{{
                      selected_company.billing_state ||
                      selected_company.billing_zip_code
                        ? ','
                        : ''
                    }}
                    {{ selected_company.billing_state }}
                    {{ selected_company.billing_zip_code }}
                  </td>
                  <div
                    v-if="
                      selected_company.bill_to_code ||
                      roundTripButtonForSpecificCompany
                    "
                  >
                    <td class="font-semibold pt-4 whitespace-no-wrap">
                      <!-- Variable from accessMixin -->
                      {{ showBillToCodeAsJobCode ? 'Job #' : 'Bill To Code' }}
                    </td>
                    <!-- <td>{{ selected_company.bill_to_code }}</td> -->
                    <td>
                      <input
                        class="custom-input w-32"
                        v-model="selected_company.bill_to_code"
                      />
                    </td>
                  </div>
                </div>
              </tr>
            </table>
          </template>
        </div>
        <div
          :class="
            selected_company && selected_company.bill_to_code
              ? 'vx-col xl:w-1/2 lg:w-4/12 md:w-3/12 w-2/12'
              : 'vx-col w-1/2'
          "
        >
          <div v-if="customerLanes.length">
            <label class="text-xs">Customer Lanes</label>
            <v-select
              :options="customerLanes"
              :dir="$vs.rtl ? 'rtl' : 'ltr'"
              @option:selected="onCustomerLaneSelection()"
              v-model="selectedLane"
              class="mb-4 md:mb-0"
              label="label"
            >
            </v-select>
          </div>
        </div>
      </div>

      <vs-divider />

      <div class="vx-row">
        <div class="vx-col w-full">
          <div class="vx-row vx-row-flex">
            <div class="vx-col">
              <label class="text-xs"
                >Load #
                <field-required-sign />
              </label>

              <vs-input
                v-model="load_number"
                :disabled="!canAccess(roleModify)"
                type="number"
                class="w-full disabled"
              />
            </div>

            <div class="vx-col">
              <label class="text-xs">Reference ID</label>

              <vs-input
                v-model="refrence_id"
                :disabled="!canAccess(roleModify)"
                class="w-full"
              />
            </div>
            <div class="vx-col" v-if="showCompanyInternalReferenceForCompanies">
              <label class="text-xs">Internal Reference</label>

              <vs-input
                v-model="companyInternalReference"
                :disabled="!canAccess(roleModify)"
                class="w-full"
              />
            </div>
            <div class="vx-col">
              <label class="text-xs"
                >Dispatcher
                <!-- <field-required-sign /> -->
              </label>

              <v-select
                :options="dispatcher_options"
                label="full_name"
                :reduce="(option) => option.user_id"
                :clearable="true"
                :disabled="!canAccess(roleModify)"
                :dir="$vs.rtl ? 'rtl' : 'ltr'"
                v-model="selected_dispatcher"
                class="w-full"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-1/3">
              <label class="text-xs">Dispatcher Notes </label>
              <vs-textarea
                class="w-full"
                :disabled="!canAccess(roleModify)"
                v-model="dispatcher_notes"
              ></vs-textarea>
            </div>

            <div class="vx-col w-1/3">
              <label class="text-xs flex pt-2"
                >Collaborator Emails
                <div class="collaborator-tooltip-dropdown">
                  <a href="javascript:void(0)" class="ml-1">
                    <vs-icon icon="error_outline" color="primary"></vs-icon>
                  </a>
                  <div class="collaborator-tooltip-dropdown-menu">
                    <p>
                      Customer or broker emails to send automatic tracking
                      updates.
                    </p>
                  </div>
                </div>
              </label>
              <vs-input
                class="w-full"
                :disabled="isLoadDeleted || !canAccess(roleModify)"
                v-model="collaboratorEmails"
                @keypress.space.prevent
              ></vs-input>
              <p class="small text-xs">Separate multiple emails with commas</p>
            </div>

            <div class="vx-col-container vx-col w-1/3">
              <div class="vx-col-item" v-if="showCostCode">
                <label class="text-xs">Cost Code</label>
                <v-select
                  :disabled="!canAccess(roleModify)"
                  :options="costCodeOption"
                  label="code"
                  :reduce="(codes) => codes.code"
                  v-model="costCode"
                  class="w-full"
                >
                  <template #selected-option="{ code, description }">
                    {{ code }} - {{ description }}
                  </template>
                  <template v-slot:option="option">
                    {{ option.code }} - {{ option.description }}
                  </template>
                </v-select>
              </div>
              <div
                class="vx-col-item"
                v-if="isUserBrokerOrShipper || brokerModeForSpecificCompany"
              >
                <label class="text-xs">Order Type</label>
                <vs-input
                  v-model="orderType"
                  :disabled="!canAccess(roleModify)"
                  class="w-full"
                />
              </div>
              <div
                class="vx-col-item"
                v-if="isUserBrokerOrShipper || brokerModeForSpecificCompany"
              >
                <label class="text-xs">Service Type</label>
                <vs-input
                  v-model="serviceType"
                  :disabled="!canAccess(roleModify)"
                  class="w-full"
                />
              </div>
            </div>
          </div>
          <template v-if="thirdPartyCarrier.rateConType === 'intermodal'">
            <div class="vx-row">
              <div class="vx-col w-1/6">
                <label class="text-xs">Container Status</label>
                <v-select
                  class="w-full"
                  v-model="containerStatus"
                  :options="containerStatusOptions"
                  :reduce="(option) => option.value"
                  :searchable="false"
                  :clearable="true"
                  label="label"
                />
              </div>
              <div class="vx-col w-1/6">
                <label class="text-xs">Container Location</label>
                <v-select
                  class="w-full"
                  v-model="containerLocationStopKey"
                  :options="containerLocationOptions"
                  :reduce="(option) => option.value"
                  :clearable="true"
                  label="label"
                />
              </div>
              <div class="vx-col w-1/6">
                <label class="text-xs"> Vessel </label>
                <vs-input
                  v-model="vessel"
                  class="w-full"
                  :disabled="!canAccess(roleModify)"
                />
              </div>
              <div class="vx-col w-1/6">
                <label class="text-xs">
                  Arrival Date
                  <vs-button
                    color="warning"
                    type="flat"
                    size="small"
                    style="padding: 0; margin-left: 1rem"
                    :disabled="!arrivalDate"
                    @click="arrivalDate = ''"
                  >
                    Clear
                  </vs-button>
                </label>
                <flat-pickr
                  class="w-full"
                  v-model="arrivalDate"
                  :disabled="!canAccess(roleModify)"
                />
              </div>
              <div class="vx-col w-1/6">
                <label class="text-xs">
                  Last Free Day
                  <vs-button
                    color="warning"
                    type="flat"
                    size="small"
                    style="padding: 0; margin-left: 1rem"
                    :disabled="!lastFreeDate"
                    @click="lastFreeDate = ''"
                  >
                    Clear
                  </vs-button>
                </label>
                <flat-pickr
                  class="w-full"
                  v-model="lastFreeDate"
                  :disabled="!canAccess(roleModify)"
                />
              </div>
              <div class="vx-col w-1/6">
                <label class="text-xs"> BOL Number </label>
                <vs-input
                  v-model="bolNumber"
                  class="w-full"
                  :disabled="!canAccess(roleModify)"
                />
              </div>
            </div>
            <div class="vx-row mt-4">
              <div class="vx-col w-1/2">
                <div class="vx-row">
                  <div class="vx-col">
                    <h4 class="text-xl text-black">Picked Up Equipment</h4>
                  </div>
                </div>
                <div class="vx-row">
                  <div class="vx-col w-1/3">
                    <label class="text-xs"> Name </label>
                    <vs-input
                      v-model="pickedUpEquipment.number"
                      class="w-full"
                      :disabled="!canAccess(roleModify)"
                    />
                  </div>
                  <div class="vx-col w-1/3">
                    <label class="text-xs"> Size </label>
                    <vs-input
                      v-model="pickedUpEquipment.size"
                      class="w-full"
                      :disabled="!canAccess(roleModify)"
                    />
                  </div>
                  <div class="vx-col w-1/3">
                    <label class="text-xs"> Type </label>
                    <vs-input
                      v-model="pickedUpEquipment.type"
                      class="w-full"
                      :disabled="!canAccess(roleModify)"
                    />
                  </div>
                </div>
              </div>
              <div class="vx-col w-1/2">
                <div class="vx-row">
                  <div class="vx-col">
                    <h4 class="text-xl text-black">Dropped Off Equipment</h4>
                  </div>
                </div>
                <div class="vx-row">
                  <div class="vx-col w-1/3">
                    <label class="text-xs"> Name </label>
                    <vs-input
                      v-model="droppedOffEquipment.number"
                      class="w-full"
                      :disabled="!canAccess(roleModify)"
                    />
                  </div>
                  <div class="vx-col w-1/3">
                    <label class="text-xs"> Size </label>
                    <vs-input
                      v-model="droppedOffEquipment.size"
                      class="w-full"
                      :disabled="!canAccess(roleModify)"
                    />
                  </div>
                  <div class="vx-col w-1/3">
                    <label class="text-xs"> Type </label>
                    <vs-input
                      v-model="droppedOffEquipment.type"
                      class="w-full"
                      :disabled="!canAccess(roleModify)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-else-if="allowStageTrailerLocation">
            <div class="vx-row">
              <div class="vx-col w-1/3 mb-5">
                <label class="text-xs">Stage Trailer Location</label>
                <v-select
                  v-model="containerLocationStopKey"
                  :options="containerLocationOptions"
                  :reduce="(option) => option.value"
                  :clearable="true"
                  label="label"
                  class="w-full"
                />
              </div>
            </div>
          </template>
        </div>
      </div>

      <LoadNotes v-model="loadNotes" />
      <vs-divider />

      <div class="my-4 mt-8" ref="step2">
        <b class="font-bold h4">{{
          isUserBrokerOrShipper
            ? 'Step 2: Shipper/Receiver'
            : 'Step 2: Shipper/Leg/Receiver'
        }}</b>
      </div>

      <!-- start tab 2 content -->
      <div class="w-full space-y-10">
        <div class="">
          <vs-divider />
        </div>
        <draggable
          tag="ul"
          :list="shipperReceiverLegList"
          class="list-group"
          handle=".handle"
          style="margin-top: 0px !important"
          item-key="key"
        >
          <li
            class="list-group-item flex flex-col"
            v-for="(element, idx) in shipperReceiverLegList"
            :key="`${element.key}-${element.renderAddressType}`"
          >
            <section class="flex gap-4">
              <div>
                <vs-button
                  v-if="canAccess(roleModify)"
                  color="primary"
                  type="border"
                  class="px-3"
                  style="font-size: 12px"
                  @click.stop="addNewShipperAndFreightDetail(idx)"
                >
                  Add Shipper
                </vs-button>
              </div>
              <div>
                <vs-button
                  v-if="
                    !isUserBrokerOrShipper &&
                    !isLegAdded &&
                    canAccess(roleModify)
                  "
                  color="primary"
                  type="border"
                  class="px-3"
                  style="font-size: 12px"
                  @click.stop="addNewLeg(idx)"
                >
                  Add Leg
                </vs-button>
              </div>
              <div v-if="!isUserBrokerOrShipper && canAccess(roleModify)">
                <vs-button
                  v-if="canAccess(roleModify)"
                  color="primary"
                  type="border"
                  class="px-3"
                  style="font-size: 12px"
                  @click.stop="addNewTerminal(idx)"
                >
                  Add Terminal
                </vs-button>
              </div>
              <div>
                <vs-button
                  v-if="canAccess(roleModify)"
                  color="primary"
                  type="border"
                  class="px-3"
                  style="font-size: 12px"
                  @click.stop="addNewReceiver(idx)"
                >
                  Add Receiver
                </vs-button>
              </div>
              <div v-if="idx === 0 && roundTripButtonForSpecificCompany">
                <vs-button
                  color="primary"
                  type="border"
                  class="px-3"
                  style="font-size: 12px"
                  @click.stop="addRoundTripStops(idx)"
                >
                  Add Round Trip Stops
                </vs-button>
              </div>
            </section>
            <vs-divider />
            <section class="flex">
              <!-- <vs-icon
            class="cursor-pointer handle mt-4"
            size="small"
            icon="drag_indicator"
          /> -->
              <ReceiverAddressCard
                v-if="element.renderAddressType === 'receiver'"
                v-model="shipperReceiverLegList[idx]"
                :accessPermission="canAccess(roleModify)"
                :showDragIcon="true"
                :trailerOptions="trailer_options"
                :dropHookTrailerVisible="!isUserBrokerOrShipper"
                :isEditMode="true"
                :showEmptyTimeWarning="showEmptyTimeWarning"
                @remove="removeReceiver(idx)"
                @saveAddress="addToSavedAddressConfirm('receiver', idx)"
                @toggleMap="toggleMap(idx)"
              />
              <LegAddressCard
                v-else-if="element.renderAddressType === 'leg'"
                v-model="shipperReceiverLegList[idx]"
                :accessPermission="canAccess(roleModify)"
                :showDragIcon="true"
                :trailerOptions="trailer_options"
                :dropHookTrailerVisible="!isUserBrokerOrShipper"
                :isEditMode="true"
                @remove="removeLeg(idx)"
                @saveAddress="addToSavedAddressConfirm('leg', idx)"
                @toggleMap="toggleMap(idx)"
              />
              <terminal-address-card
                v-else-if="element.renderAddressType === 'terminal'"
                v-model="shipperReceiverLegList[idx]"
                :accessPermission="canAccess(roleModify)"
                :showDragIcon="true"
                :trailerOptions="trailer_options"
                :dropHookTrailerVisible="!isUserBrokerOrShipper"
                :isEditMode="true"
                @remove="removeTerminal(idx)"
                @saveAddress="addToSavedAddressConfirm('terminal', idx)"
                @toggleMap="toggleMap(idx)"
              />
              <ShipperAddressCard
                v-else-if="element.renderAddressType === 'shipper'"
                v-model="shipperReceiverLegList[idx]"
                :accessPermission="canAccess(roleModify)"
                :showDragIcon="true"
                :trailerOptions="trailer_options"
                :dropHookTrailerVisible="!isUserBrokerOrShipper"
                :hasT3Access="hasT3Access"
                :t3Statuses="t3Statuses"
                :isEditMode="true"
                :showEmptyTimeWarning="showEmptyTimeWarning"
                @onShippingDateChange="onShippingDateChange(idx)"
                @remove="removeShipperAndFreightDetail(idx)"
                @saveAddress="addToSavedAddressConfirm('shipper', idx)"
                @toggleMap="
                  (data, isClickable) => toggleMap(idx, data, isClickable)
                "
                @useFreightAddress="useFreightAddress(idx, $event)"
              />
            </section>
          </li>
        </draggable>
        <section class="flex gap-4" style="margin-top: 0px !important">
          <div>
            <vs-button
              v-if="canAccess(roleModify)"
              color="primary"
              type="border"
              class="px-3"
              style="font-size: 12px"
              @click.stop="addNewShipperAndFreightDetail(null)"
            >
              Add Shipper
            </vs-button>
          </div>
          <div>
            <vs-button
              v-if="
                !isUserBrokerOrShipper && !isLegAdded && canAccess(roleModify)
              "
              color="primary"
              type="border"
              class="px-3"
              style="font-size: 12px"
              @click.stop="addNewLeg(null)"
            >
              Add Leg
            </vs-button>
          </div>
          <vs-button
            v-if="!isUserBrokerOrShipper && canAccess(roleModify)"
            color="primary"
            type="border"
            class="px-3"
            style="font-size: 12px"
            @click.stop="addNewTerminal(null)"
          >
            Add Terminal
          </vs-button>
          <div>
            <vs-button
              v-if="canAccess(roleModify)"
              color="primary"
              type="border"
              class="px-3"
              style="font-size: 12px"
              @click.stop="addNewReceiver(null)"
            >
              Add Receiver
            </vs-button>
          </div>
        </section>
      </div>

      <!-- start tab 3 content -->
      <template v-if="!isUserBrokerOrShipper">
        <vs-divider />

        <div class="my-4 mt-8" ref="step3">
          <b class="font-bold h4">Step 3: Load Charge</b>
          <vs-divider />
        </div>

        <div class="w-full space-y-6">
          <div class="vx-row">
            <div class="vx-col w-3/4" v-if="showLoadChargesSection">
              <div>
                <div class="flex items-center">
                  <h4 class="text-xl text-black">Charges</h4>
                </div>

                <vs-divider />
              </div>

              <div class="px-6">
                <div class="flex">
                  <h5 class="w-6/12 text-base font-semibold">Fee Method</h5>
                  <h5 class="w-3/12 text-base font-semibold">Rate</h5>
                  <h5 class="w-3/12 text-right text-base font-semibold">
                    Amount
                  </h5>
                </div>

                <vs-divider />

                <div class="space-y-4">
                  <div class="flex gap-4">
                    <div class="w-6/12">
                      <div class="flex justify-end items-center">
                        <label class="mr-2 text-sm"
                          >Hauling Fees:
                          <field-required-sign />
                        </label>
                        <v-select
                          :disabled="!canAccess(roleModify)"
                          :options="hauling_fee_options"
                          label="label"
                          :reduce="(option) => option.value"
                          :clearable="false"
                          v-model="selected_hauling_fee"
                          class="w-66"
                          @input="hauling_fee_rate = 0"
                        />
                      </div>
                    </div>

                    <div class="w-3/12 text-lg">
                      <vx-input-group>
                        <template slot="prepend">
                          <div class="prepend-text bg-primary">
                            <span>$</span>
                          </div>
                        </template>

                        <vs-input
                          name="hauling_fee_rate"
                          type="number"
                          step="any"
                          :disabled="
                            !canAccess(roleModify) ||
                            selected_hauling_fee === 'qty_var_rate'
                          "
                          v-model.number="hauling_fee_rate"
                        />
                      </vx-input-group>
                    </div>

                    <div class="w-3/12 text-lg text-right">
                      <p>
                        {{ hauling_fee_amount | currencyFormat }}
                      </p>
                    </div>
                  </div>
                  <div
                    class="flex gap-4"
                    v-if="selected_hauling_fee === 'truck_hour'"
                  >
                    <div class="w-6/12">
                      <div class="flex items-center justify-end ml-4">
                        <label class="mr-6 text-sm"
                          >Truck Hour:
                          <field-required-sign />
                        </label>
                        <vs-input
                          type="number"
                          step="any"
                          class="w-66 mt-5 mr-4"
                          v-model.number="haulingFeeQty"
                        />
                      </div>
                    </div>
                  </div>
                  <template v-if="selected_hauling_fee === 'qty_var_rate'">
                    <div
                      class="border border-solid p-2 w-10/12 m-auto"
                      style="max-width: 600px; border-color: green"
                    >
                      <div
                        v-for="(element, idx) in shipperReceiverLegList"
                        :key="`${element.key}-${element.renderAddressType}-freight`"
                      >
                        <quantity-variable-rate-form
                          v-if="element.renderAddressType === 'shipper'"
                          v-model="shipperReceiverLegList[idx]"
                        />
                        <template
                          v-if="
                            (
                              (element.additionalFreightDetails || {})
                                .details || []
                            ).length
                          "
                        >
                          <quantity-variable-rate-form
                            v-for="(freight, index) in element
                              .additionalFreightDetails.details"
                            :key="`${freight.id}-additional-freight`"
                            v-model="
                              shipperReceiverLegList[idx]
                                .additionalFreightDetails.details[index]
                            "
                          />
                        </template>
                      </div>
                    </div>
                  </template>
                  <div class="flex gap-4">
                    <div class="w-6/12">
                      <div class="flex justify-end items-center">
                        <label class="mr-2 text-sm">Fuel Surcharge:</label>
                        <div class="flex flex-col">
                          <v-select
                            :options="fuel_surcharge_options"
                            :disabled="!canAccess(roleModify)"
                            label="label"
                            :clearable="false"
                            :reduce="(option) => option.value"
                            v-model="selected_fuel_surcharge"
                            class="w-66"
                            @input="getFuelPriceBasedOnShippingDate"
                          />
                          <label
                            class="text-danger"
                            v-if="validation.fuelSurchargeHasError"
                            v-text="'Please select fee type'"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="w-3/12 text-lg">
                      <vx-input-group>
                        <template slot="prepend">
                          <div class="prepend-text bg-primary">
                            <span
                              v-if="selected_fuel_surcharge == 'percentage'"
                              class="font-semibold"
                              >%</span
                            >
                            <span v-else>$</span>
                          </div>
                        </template>

                        <vs-input
                          name="fuel_surcharge_rate"
                          :disabled="!canAccess(roleModify)"
                          type="number"
                          step="any"
                          v-model.number="fuel_surcharge_rate"
                        />
                      </vx-input-group>
                    </div>

                    <div class="w-3/12 text-lg text-right">
                      <p>
                        {{ fuel_surcharge_amount | currencyFormat }}
                      </p>
                    </div>
                  </div>

                  <div
                    class="flex"
                    v-if="selected_fuel_surcharge === 'formulaPerMile'"
                  >
                    <div class="w-6/12">
                      <div class="flex justify-end items-center">
                        <label class="mr-2 text-sm">Formula: Per Mile (</label>
                        <div class="flex flex-col">
                          <vs-input
                            disabled="true"
                            type="number"
                            step="any"
                            style="width: 80px"
                            v-model.number="fuelSurchargeV1"
                            @input="
                              getFuelPriceBasedOnShippingDate('formulaPerMile')
                            "
                          />
                        </div>
                      </div>
                    </div>
                    <p class="m-2">-</p>
                    <vs-input
                      :disabled="!canAccess(roleModify)"
                      type="number"
                      step="any"
                      style="width: 80px"
                      v-model.number="fuelSurchargeV2"
                      @input="getFuelPriceBasedOnShippingDate('formulaPerMile')"
                    />
                    <p class="ml-2 mt-2 mr-2">) /</p>
                    <div>
                      <vs-input
                        :disabled="!canAccess(roleModify)"
                        type="number"
                        step="any"
                        style="width: 80px"
                        v-model.number="fuelSurchargeV3"
                        data-vv-name="MPG"
                        data-vv-validate-on="blur"
                        v-validate="'between:1,99.99'"
                        @input="
                          getFuelPriceBasedOnShippingDate('formulaPerMile')
                        "
                      />
                      <span
                        style="width: 100px"
                        class="text-danger text-sm flex justify-end pl-1"
                      >
                        {{ errors.first('MPG') }}
                      </span>
                    </div>
                  </div>
                  <!-- accessorial_fees -->
                  <div
                    class="flex gap-4"
                    v-for="(accessorial_fee, afIdx) in accessorial_fees"
                    :key="accessorial_fee.uuid"
                  >
                    <div class="w-6/12">
                      <div class="flex items-center justify-between">
                        <div class="flex justify-start">
                          <vs-button
                            color="danger"
                            type="border"
                            size="small"
                            icon-pack="feather"
                            icon="icon-trash"
                            radius
                            :disabled="!canAccess(roleModify)"
                            :class="afIdx <= 0 && 'hidden'"
                            @click="removeAccessorialFee(afIdx)"
                          ></vs-button>
                        </div>

                        <div class="flex justify-end items-center">
                          <label class="mr-2 text-sm">Accessorial Fee:</label>
                          <div class="flex flex-col">
                            <v-select
                              :options="accessorial_fee_options"
                              label="name"
                              :clearable="true"
                              :disabled="!canAccess(roleModify)"
                              :reduce="(option) => option.id"
                              v-model="accessorial_fee.selected_accessorial_fee"
                              @input="accessorialFeesChange(accessorial_fee)"
                              class="w-66 accessorial-selector"
                            >
                              <template v-slot:option="option">
                                <div class="flex justify-between">
                                  <span>
                                    {{ option.name }}
                                  </span>
                                  <span v-if="option.name !== 'Add New'">
                                    <vs-icon
                                      class="cursor-pointer m-0"
                                      color="#1877F2"
                                      size="small"
                                      icon="edit"
                                      @click.stop="
                                        toggleAccessorialFeePrompt(null, option)
                                      "
                                    />
                                  </span>
                                </div>
                              </template>
                            </v-select>
                            <label
                              class="text-danger"
                              v-if="accessorial_fee.hasError"
                              v-text="'Please select fee type'"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="w-3/12 text-lg">
                      <vx-input-group>
                        <template slot="prepend">
                          <div class="prepend-text bg-primary">
                            <span>$</span>
                          </div>
                        </template>

                        <vs-input
                          type="number"
                          step="any"
                          :disabled="!canAccess(roleModify)"
                          v-model.number="accessorial_fee.amount"
                        />
                      </vx-input-group>
                    </div>

                    <div class="w-3/12 text-lg text-right">
                      <p>
                        {{ accessorial_fee.amount | currencyFormat }}
                      </p>
                    </div>
                  </div>

                  <!-- Add accessorial_fee button-->
                  <div class="pt-2 pb-4 flex gap-4 justify-between">
                    <div class="w-6/12">
                      <vs-button
                        color="primary"
                        type="border"
                        v-if="canAccess(roleModify)"
                        @click="addNewAccessorialFee"
                      >
                        Add Accessorial Fee
                      </vs-button>
                    </div>

                    <div class="w-3/12">
                      <vs-divider />
                    </div>
                  </div>

                  <!-- accessorial_deduction -->
                  <div
                    class="flex gap-4"
                    v-for="(
                      accessorial_deduction, adIdx
                    ) in accessorial_deduction_fees"
                    :key="accessorial_deduction.uuid"
                  >
                    <div class="w-6/12">
                      <div class="flex items-center justify-between">
                        <div class="flex justify-start">
                          <vs-button
                            color="danger"
                            type="border"
                            size="small"
                            icon-pack="feather"
                            icon="icon-trash"
                            radius
                            :class="adIdx <= 0 && 'hidden'"
                            v-if="canAccess(roleModify)"
                            @click="removeAccessorialdeductionFee(adIdx)"
                          ></vs-button>
                        </div>

                        <div class="flex justify-end items-center">
                          <label class="mr-2 pl-1 text-sm"
                            >Accessorial Deduction:</label
                          >
                          <div class="flex flex-col">
                            <v-select
                              :options="accessorial_deduction_options"
                              label="name"
                              :clearable="true"
                              :reduce="(option) => option.id"
                              :disabled="!canAccess(roleModify)"
                              v-model="
                                accessorial_deduction.selected_accessorial_deduction
                              "
                              @input="
                                accessorialDeductionFeesChange(
                                  accessorial_deduction
                                )
                              "
                              class="w-66 accessorial-selector"
                            >
                              <template v-slot:option="option">
                                <div class="flex justify-between">
                                  <span>
                                    {{ option.name }}
                                  </span>
                                  <span v-if="option.name !== 'Add New'">
                                    <vs-icon
                                      class="cursor-pointer m-0"
                                      color="#1877F2"
                                      size="small"
                                      icon="edit"
                                      @click.stop="
                                        toggleAccessorialDeductionPrompt(
                                          null,
                                          option
                                        )
                                      "
                                    />
                                  </span>
                                </div>
                              </template>
                            </v-select>
                            <label
                              class="text-danger"
                              v-if="accessorial_deduction.hasError"
                              v-text="'Please select fee type'"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="w-3/12 text-lg">
                      <vx-input-group>
                        <template slot="prepend">
                          <div class="prepend-text bg-primary">
                            <span>$</span>
                          </div>
                        </template>

                        <vs-input
                          type="number"
                          step="any"
                          :disabled="!canAccess(roleModify)"
                          v-model.number="accessorial_deduction.amount"
                        />
                      </vx-input-group>
                    </div>

                    <div class="w-3/12 text-lg text-right">
                      <p>
                        {{ accessorial_deduction.amount | currencyFormat }}
                      </p>
                    </div>
                  </div>

                  <!-- Add accessorial_deduction button-->
                  <div class="pt-2 flex gap-4 justify-between">
                    <div class="w-6/12">
                      <vs-button
                        color="primary"
                        type="border"
                        v-if="canAccess(roleModify)"
                        @click="addNewAccessorialdeductionFee"
                      >
                        Add Accessorial Deduction
                      </vs-button>
                    </div>

                    <div class="w-3/12">
                      <vs-divider />
                    </div>
                  </div>

                  <!-- subtotal -->
                  <div class="pt-2 flex gap-4 items-center justify-end">
                    <div class="w-3/12">
                      <div class="flex items-center justify-between">
                        <h5 class="text-base font-semibold">Sub Total:</h5>
                        <p>
                          {{ subTotal | currencyFormat }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- discount -->
                  <div class="pt-2 flex gap-4 items-center justify-end">
                    <div class="w-3/12">
                      <div class="flex items-center justify-between">
                        <h5 class="text-base font-semibold">
                          Discount:
                          <field-required-sign class="text-xs" />
                        </h5>
                        <div>
                          <vs-input
                            type="number"
                            step="any"
                            :disabled="!canAccess(roleModify)"
                            v-model.number="discount"
                            class="w-32"
                          />
                        </div>
                      </div>

                      <!-- <vs-divider /> -->
                    </div>
                  </div>

                  <!-- total amount -->
                  <div class="pt-2 flex gap-4 items-center justify-end">
                    <div class="w-3/12">
                      <div class="flex items-center justify-between">
                        <h5 class="text-base font-semibold">Total Amount:</h5>
                        <p>
                          {{ totalAmount | currencyFormat }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    class="pt-2 flex gap-4 items-center justify-end"
                    v-if="paidAmount != null"
                  >
                    <div class="w-3/12">
                      <div class="flex items-center justify-between">
                        <h5 class="text-base font-semibold">Paid Amount:</h5>
                        <p>
                          {{ paidAmount | currencyFormat }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- dispatcher fee  -->
                  <div
                    class="pt-2 flex gap-4 items-center justify-end"
                    v-if="taskAutomation.show_dispatcher_fee_on_invoice"
                  >
                    <div class="w-3/12">
                      <div class="flex items-center justify-between">
                        <div class="text-base font-semibold">
                          Dispatcher Fee:
                        </div>
                        <p>- {{ dispatcherFee | currencyFormat }}</p>
                      </div>
                    </div>
                  </div>
                  <!-- dispatcher fee end here  -->

                  <!-- factoring fee  -->
                  <div
                    class="pt-2 flex gap-4 items-center justify-end"
                    v-if="taskAutomation.show_factoring_fee_on_invoice"
                  >
                    <div class="w-3/12">
                      <div class="flex items-center justify-between">
                        <div class="text-base font-semibold">
                          Factoring Fee:
                        </div>
                        <p>- {{ factoringFee | currencyFormat }}</p>
                      </div>
                    </div>
                  </div>
                  <!-- factoring fee end here  -->
                </div>
              </div>
            </div>

            <div class="vx-col w-1/4">
              <div>
                <target-rate-card
                  v-if="showRatePrediction"
                  :ratePredictions="ratePredictions"
                  :distance="Number(calculatedLoadMiles)"
                />
                <h4
                  :class="[
                    'text-xl text-black',
                    { 'mt-3': Object.keys(ratePredictions).length },
                  ]"
                >
                  Miles
                </h4>
                <vs-divider />
              </div>

              <div>
                <h5 class="mb-4 text-lg text-black">Calculated Using:</h5>
                <ul class="flex flex-wrap mb-4">
                  <li>
                    <vs-radio
                      v-model="mile_type"
                      vs-value="manual"
                      vs-name="mileType"
                      class="mr-3"
                      :disabled="!canAccess(roleModify)"
                      >Manual</vs-radio
                    >
                  </li>
                  <li>
                    <vs-radio
                      v-model="mile_type"
                      vs-value="google_maps"
                      vs-name="mileType"
                      class="mr-3"
                      :disabled="!canAccess(roleModify)"
                      >Google Maps</vs-radio
                    >
                  </li>
                  <li>
                    <vs-radio
                      v-model="mile_type"
                      vs-name="mileType"
                      :disabled="!canAccess(roleModify) || !pcmiler.apiKey"
                      vs-value="p"
                      >PC MILER</vs-radio
                    >
                  </li>
                </ul>

                <div
                  class="w-full vs-con-loading__container"
                  id="miles-input-loading"
                >
                  <label class="text-xs"
                    >Total Miles
                    <field-required-sign />
                  </label>
                  <template v-if="mile_type == 'manual'">
                    <vs-input
                      type="number"
                      step="any"
                      :disabled="!canAccess(roleModify)"
                      v-model.number="calculatedLoadMiles"
                      @change="calculateLoadDistances()"
                      class="w-full"
                    />
                  </template>
                  <template v-else>
                    <vs-input
                      class="w-full"
                      type="number"
                      step="any"
                      :value="calculatedLoadMiles"
                      :disabled="true"
                    />
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- start tab 4 content -->
      <vs-divider />
      <div class="my-4 mt-8" ref="step4">
        <b class="font-bold h4">{{
          isUserBrokerOrShipper
            ? 'Step 3: Find Carriers'
            : 'Step 4: Assign Driver & Equipment'
        }}</b>
      </div>
      <div
        v-if="brokerModeForSpecificCompany && !isUserBrokerOrShipper"
        class="mt-5 vx-col w-full"
      >
        <ul class="flex space-x-8">
          <li>
            <vs-radio v-model="carrierType" :vs-value="0">
              Company Carrier
            </vs-radio>
          </li>
          <li>
            <vs-radio v-model="carrierType" :vs-value="1">
              Third Party Carrier
            </vs-radio>
          </li>
        </ul>
      </div>

      <div v-if="!carrierType" class="w-full space-y-8">
        <div class="vx-row">
          <div class="vx-col w-full mt-4">
            <h4 class="text-xl text-black">Direction</h4>
          </div>

          <div class="px-8 vx-col w-full mt-5">
            <ul class="flex space-x-8">
              <li>
                <vs-radio
                  v-model="load_truck_direction"
                  :disabled="!canAccess(roleModify)"
                  :vs-value="load_truck_direction_options.inbound.value"
                >
                  {{ load_truck_direction_options.inbound.label }}
                </vs-radio>
              </li>
              <li>
                <vs-radio
                  v-model="load_truck_direction"
                  :disabled="!canAccess(roleModify)"
                  :vs-value="load_truck_direction_options.outbound.value"
                >
                  {{ load_truck_direction_options.outbound.label }}
                </vs-radio>
              </li>
            </ul>
          </div>

          <div class="vx-col vx-row w-full mt-4">
            <div class="vx-col w-3/4">
              <h4 class="text-xl text-black">Equipment Type</h4>
              <div class="mt-5">
                <label class="text-sm opacity-75">Truck Type</label>
                <v-select
                  :options="equipment_type_options"
                  label="title"
                  :disabled="!canAccess(roleModify)"
                  :reduce="(option) => option.value"
                  :clearable="true"
                  v-model="selected_equipment_type"
                  style="width: 31%"
                />
              </div>
            </div>
            <div class="vx-col w-1/4 miles-radio">
              <h5 class="mb-4 text-lg opacity-75">Driver Miles By:</h5>
              <ul class="flex space-x-4 mb-4">
                <li v-if="driverMileEngineCanBeManual">
                  <vs-radio
                    v-model="driverMileType"
                    vs-value="manual"
                    vs-name="driverMileType"
                    >Manual</vs-radio
                  >
                </li>
                <li>
                  <vs-radio
                    v-model="driverMileType"
                    vs-value="google_maps"
                    vs-name="driverMileType"
                    >Google Maps</vs-radio
                  >
                </li>
                <li>
                  <vs-radio
                    v-model="driverMileType"
                    vs-name="driverMileType"
                    :disabled="!pcmiler.apiKey"
                    vs-value="p"
                    >PC MILER</vs-radio
                  >
                </li>
              </ul>
            </div>
            <!-- <vs-divider /> -->
          </div>

          <div v-if="user.admin_company_detail_id == 56" class="vx-col w-1/4">
            <label class="text-sm opacity-75">Trailer Type</label>
            <v-select
              :options="trailer_type_options"
              label="title"
              :disabled="!canAccess(roleModify)"
              :reduce="(option) => option.value"
              :clearable="true"
              v-model="selected_trailer_type"
              class="w-full"
            />
          </div>
        </div>

        <div class="vx-row">
          <div class="vx-col w-full mt-4">
            <h4 class="text-xl text-black">
              {{
                legsList.length == 0
                  ? 'Assign Driver & Equipment'
                  : 'From shipper to leg 1'
              }}
            </h4>
          </div>

          <div class="mt-8 vx-col w-full space-y-4">
            <div
              class="vx-row"
              v-for="(
                assign_driver_and_equipment, deIdx
              ) in assign_driver_and_equipments"
              :key="deIdx"
            >
              <div class="vx-col w-1/5">
                <div>
                  <label class="text-sm opacity-75">Driver</label>
                  <span class="ml-1 text-sm">
                    <input
                      type="checkbox"
                      v-model="assign_driver_and_equipment.sendBolToDriver"
                    />
                    <label>Email BOL</label>
                  </span>
                  <v-select
                    :options="filteredDriverOptions"
                    multiple
                    label="full_name"
                    :clearable="true"
                    v-model="assign_driver_and_equipment.selected_drivers"
                    @input="handleMultipleDriver($event, deIdx)"
                    :disabled="
                      isLoadDeleted ||
                      assign_driver_and_equipment.is_driver_disabled ||
                      !canAccess(roleModify)
                    "
                    class="w-full"
                  />
                </div>
                <div class="text-sm mt-2 flex">
                  <div
                    v-if="
                      assign_driver_and_equipment.load_driver_status ==
                        'handed_over' &&
                      assign_driver_and_equipment.reassign !== true
                    "
                  >
                    Driver handed over
                  </div>
                  <div
                    v-if="
                      canAccess(roleModify) &&
                      assign_driver_and_equipment.load_driver_status ==
                        'handed_over'
                    "
                  >
                    <vs-button
                      v-if="!assign_driver_and_equipment.reassign"
                      color="primary"
                      type="flat"
                      style="padding: 0; margin-left: 1rem"
                      @click.stop="
                        onConfirmReassignHandedOver(assign_driver_and_equipment)
                      "
                      :disabled="isLoadDeleted"
                      >Reassign</vs-button
                    >
                    <div v-else style="color: red">Driver to be reassigned</div>
                  </div>
                </div>
              </div>

              <div class="vx-col w-1/5">
                <div>
                  <label class="text-sm opacity-75">Truck</label>
                  <v-select
                    :options="filteredTruckOptions"
                    label="truck_number"
                    :clearable="true"
                    :disabled="isLoadDeleted || !canAccess(roleModify)"
                    v-model="assign_driver_and_equipment.selected_truck"
                    @option:selected="onTruckChange(deIdx, 'assignSegment')"
                    class="w-full"
                  />
                </div>
              </div>

              <div
                class="vx-col w-1/5"
                v-show="thirdPartyCarrier.rateConType !== 'intermodal'"
              >
                <div>
                  <label class="text-sm opacity-75">Trailer </label>
                  <vs-button
                    color="primary"
                    type="flat"
                    style="padding: 0; margin-left: 1rem"
                    size="small"
                    @click="
                      toggleExternalTrailerNumber(assign_driver_and_equipment)
                    "
                  >
                    {{
                      assign_driver_and_equipment.showExternalTrailerNumber
                        ? 'Choose company trailer'
                        : 'Input external trailer'
                    }}
                  </vs-button>
                  <v-select
                    v-if="
                      !assign_driver_and_equipment.showExternalTrailerNumber
                    "
                    :options="filteredTrailerOptions"
                    label="trailer_number"
                    :clearable="true"
                    :disabled="isLoadDeleted || !canAccess(roleModify)"
                    v-model="assign_driver_and_equipment.selected_trailer"
                    class="w-full"
                  />
                  <vs-input
                    v-model="assign_driver_and_equipment.externalTrailerNumber"
                    class="w-full"
                    v-else
                  />
                </div>

                <div class="text-sm mt-2">
                  <vs-checkbox
                    v-model="assign_driver_and_equipment.is_drop_trailer"
                    :disabled="isLoadDeleted || !canAccess(roleModify)"
                    class="h-full inline-flex"
                  >
                    Drop Trailer
                  </vs-checkbox>
                </div>
              </div>

              <div
                class="vx-col w-1/5"
                v-show="thirdPartyCarrier.rateConType === 'intermodal'"
              >
                <div>
                  <label class="text-sm opacity-75">Chassis</label>
                  <vs-input v-model="assign_driver_and_equipment.chassis" />
                </div>
              </div>

              <div class="vx-col w-1/5">
                <div>
                  <label class="text-sm opacity-75">Notes</label>
                  <vs-textarea
                    v-model="assign_driver_and_equipment.notes"
                    :disabled="!canAccess(roleModify)"
                  />
                </div>
              </div>

              <div class="vx-col w-1/5">
                <div class="h-full flex items-center">
                  <span class="text-sm mr-6">
                    <div class="vx-col mr-6">
                      <div class="vx-row">
                        <label class="text-sm opacity-75">Miles</label>
                      </div>
                      <div class="vx-row">
                        Loaded:
                        {{ assign_driver_and_equipment.loadedDistance }}
                      </div>
                      <div class="vx-row">
                        Empty :
                        {{ assign_driver_and_equipment.emptyDistance }}
                      </div>
                    </div></span
                  >
                  <vs-button
                    color="danger"
                    type="border"
                    class="px-3"
                    style="font-size: 11px"
                    v-if="canAccess(roleModify)"
                    @click="removeAssignDriverAndEquipment(deIdx)"
                  >
                    Remove
                  </vs-button>
                </div>
              </div>
            </div>

            <div>
              <vs-button
                color="primary"
                type="border"
                v-if="canAccess(roleModify)"
                @click="addNewAssignDriverAndEquipment({ id: null })"
                :disabled="isLoadDeleted"
                >Add</vs-button
              >
            </div>
          </div>
        </div>

        <!-- 4 leg start From shipper connecting location to receiver-->
        <div
          class="vx-row"
          v-show="legsList.length > 0"
          v-for="(leg, legIdx) in legsList"
          :key="legIdx"
        >
          <div class="vx-col w-full mt-4">
            <h4 class="text-xl text-black">
              {{
                legsList[legIdx + 1]
                  ? `From leg ${legIdx + 1} to leg ${legIdx + 2}`
                  : `From leg ${legIdx + 1} to receiver`
              }}
            </h4>
          </div>

          <div class="mt-8 vx-col w-full space-y-4">
            <div
              class="vx-row"
              v-for="(assign_driver_and_equipment, deIdx) in paramLegs[legIdx]"
              :key="deIdx"
            >
              <div class="vx-col w-1/5">
                <div>
                  <label class="text-sm opacity-75">Driver</label>
                  <span class="ml-1 text-sm">
                    <input
                      type="checkbox"
                      v-model="assign_driver_and_equipment.sendBolToDriver"
                    />
                    <label>Email BOL</label>
                  </span>
                  <v-select
                    :options="filteredDriverOptions"
                    multiple
                    label="full_name"
                    :clearable="true"
                    v-model="assign_driver_and_equipment.selected_drivers"
                    @input="handleMultipleLeg($event, deIdx, legIdx)"
                    :disabled="
                      isLoadDeleted ||
                      assign_driver_and_equipment.is_driver_disabled ||
                      !canAccess(roleModify)
                    "
                    class="w-full"
                  />
                </div>
                <div class="text-sm mt-2 flex">
                  <div
                    v-if="
                      assign_driver_and_equipment.load_driver_status ==
                        'handed_over' &&
                      assign_driver_and_equipment.reassign !== true
                    "
                  >
                    Driver handed over
                  </div>
                  <div
                    v-if="
                      canAccess(roleModify) &&
                      assign_driver_and_equipment.load_driver_status ==
                        'handed_over'
                    "
                  >
                    <vs-button
                      v-if="!assign_driver_and_equipment.reassign"
                      color="primary"
                      type="flat"
                      style="padding: 0; margin-left: 1rem"
                      @click.stop="
                        onConfirmReassignHandedOver(assign_driver_and_equipment)
                      "
                      :disabled="isLoadDeleted"
                      >Reassign</vs-button
                    >
                    <div v-else style="color: red">Driver to be reassigned</div>
                  </div>
                </div>
              </div>

              <div class="vx-col w-1/5">
                <div>
                  <label class="text-sm opacity-75">Truck</label>
                  <v-select
                    :options="filteredTruckOptionsLeg[legIdx]"
                    label="truck_number"
                    :clearable="true"
                    :disabled="isLoadDeleted || !canAccess(roleModify)"
                    v-model="assign_driver_and_equipment.selected_truck"
                    class="w-full"
                  />
                </div>
              </div>

              <div
                class="vx-col w-1/5"
                v-show="thirdPartyCarrier.rateConType !== 'intermodal'"
              >
                <div>
                  <label class="text-sm opacity-75">Trailer</label>
                  <vs-button
                    color="primary"
                    type="flat"
                    style="padding: 0; margin-left: 1rem"
                    size="small"
                    @click="
                      toggleExternalTrailerNumber(assign_driver_and_equipment)
                    "
                  >
                    {{
                      assign_driver_and_equipment.showExternalTrailerNumber
                        ? 'Choose company trailer'
                        : 'Input external trailer'
                    }}
                  </vs-button>
                  <v-select
                    v-if="
                      !assign_driver_and_equipment.showExternalTrailerNumber
                    "
                    :options="filteredTrailerOptionsLeg[legIdx]"
                    label="trailer_number"
                    :clearable="true"
                    :disabled="isLoadDeleted || !canAccess(roleModify)"
                    v-model="assign_driver_and_equipment.selected_trailer"
                    class="w-full"
                  />
                  <vs-input
                    v-model="assign_driver_and_equipment.externalTrailerNumber"
                    class="w-full"
                    v-else
                  />
                </div>

                <div class="text-sm mt-2">
                  <vs-checkbox
                    v-model="assign_driver_and_equipment.is_drop_trailer"
                    :disabled="isLoadDeleted || !canAccess(roleModify)"
                    class="h-full inline-flex"
                  >
                    Drop Trailer
                  </vs-checkbox>
                </div>
              </div>

              <div
                class="vx-col w-1/5"
                v-show="thirdPartyCarrier.rateConType === 'intermodal'"
              >
                <div>
                  <label class="text-sm opacity-75">Chassis</label>
                  <vs-input v-model="assign_driver_and_equipment.chassis" />
                </div>
              </div>

              <div class="vx-col w-1/5">
                <div>
                  <label class="text-sm opacity-75">Notes</label>
                  <vs-textarea
                    v-model="assign_driver_and_equipment.notes"
                    :disabled="!canAccess(roleModify)"
                  />
                </div>
              </div>

              <div class="vx-col w-1/5">
                <div class="h-full flex items-center">
                  <span class="text-sm mr-6">
                    <div class="vx-col mr-6">
                      <div class="vx-row">
                        <label class="text-sm opacity-75">Miles</label>
                      </div>
                      <div class="vx-row">
                        Loaded:
                        {{ assign_driver_and_equipment.loadedDistance }}
                      </div>
                      <div class="vx-row">
                        Empty :
                        {{ assign_driver_and_equipment.emptyDistance }}
                      </div>
                    </div></span
                  >
                  <vs-button
                    color="danger"
                    type="border"
                    class="px-3"
                    style="font-size: 11px"
                    v-if="canAccess(roleModify)"
                    @click="removeAssignDriverAndEquipmentLeg(deIdx, legIdx)"
                    >Remove
                  </vs-button>
                </div>
              </div>
            </div>

            <div>
              <vs-button
                color="primary"
                type="border"
                v-if="canAccess(roleModify)"
                @click="addNewAssignDriverAndEquipmentLeg(legIdx)"
                :disabled="isLoadDeleted"
                >Add</vs-button
              >
            </div>
          </div>
        </div>
        <!-- 4 leg end -->
      </div>

      <div class="vx-row" v-else>
        <third-party-carrier
          class="vx-col w-3/4"
          :value="thirdPartyCarrier"
          :disabled="!canAccess(roleModify)"
          :carriersList="carriersList"
          :haulingFeeOptions="hauling_fee_options"
          :fuelSurchargeOptions="fuel_surcharge_options"
          :accessorialFeeOptions="accessorial_fee_options"
          :accessorialDeductionOptions="accessorial_deduction_options"
          :mileType="mile_type"
          :calculatedMiles="calculatedLoadMiles"
          :shipperReceiverLegList="shipperReceiverLegList"
          :orderType="orderType"
          :serviceType="serviceType"
          :loadNumber="load_number"
          :referenceNumber="refrence_id"
          :companyInfo="companyInfo"
          :interModalBodyContent="interModalBodyContent"
          @toggleAddNewCustomerDialog="
            toggleAddNewCustomerDialog({ type: 'carrier' })
          "
          @toggleAccessorialFeePrompt="toggleAccessorialFeePrompt"
          @toggleAccessorialDeductionPrompt="toggleAccessorialDeductionPrompt"
        />

        <div class="vx-col w-1/4" v-if="isUserBrokerOrShipper">
          <div>
            <target-rate-card
              v-if="showRatePrediction"
              :ratePredictions="ratePredictions"
              :distance="Number(calculatedLoadMiles)"
            />
            <h4
              :class="[
                'text-xl text-black',
                { 'mt-3': Object.keys(ratePredictions).length },
              ]"
            >
              Miles
            </h4>
            <vs-divider />
          </div>
          <div>
            <h5 class="mb-4 text-lg text-black mt-3">Calculated Using:</h5>
            <ul class="flex flex-wrap mb-4">
              <li>
                <vs-radio
                  v-model="mile_type"
                  vs-value="google_maps"
                  class="mr-3"
                  :disabled="!canAccess(roleModify)"
                  >Google Maps</vs-radio
                >
              </li>
              <li>
                <vs-radio
                  v-model="mile_type"
                  :disabled="!canAccess(roleModify) || !pcmiler.apiKey"
                  vs-value="p"
                  >PC MILER</vs-radio
                >
              </li>
            </ul>

            <div
              class="w-full vs-con-loading__container"
              id="miles-input-loading"
            >
              <label class="text-xs"
                >Total Miles
                <field-required-sign />
              </label>
              <template v-if="mile_type == 'manual'">
                <vs-input
                  type="number"
                  step="any"
                  :disabled="!canAccess(roleModify)"
                  v-model.number="calculatedLoadMiles"
                  class="w-full"
                />
              </template>
              <template v-else>
                <vs-input
                  class="w-full"
                  type="number"
                  step="any"
                  :value="calculatedLoadMiles"
                  :disabled="true"
                />
              </template>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-8 text-right mb-20 cb-padding"
        v-if="canAccess(roleModify) && this.loadStatus != 'deleted'"
      >
        <vs-button
          color="primary"
          type="filled"
          @click="formSubmitted"
          :disabled="this.callingApi"
          >Submit</vs-button
        >
      </div>
      <IsMaintananceWarningDialog
        ref="handleIsMaintenanceRef"
        :activePrompt="localActivePrompt"
        :assignDriverAndEquipments="assign_driver_and_equipments"
        :paramLegs="paramLegs[0]"
        @handleIsMaintenance="handleIsMaintenanceFunc"
        @activePrompt="activePromptFunc"
        @formSubmitted="formSubmitted"
      />

      <!-- end tab 4 content -->

      <!--
    **********************************
            PROMPT
    *********************************
    -->
      <AccessorialFeePrompt
        :active.sync="accessorialFeePrompt.isActive"
        @accessorial-fee::added="addedNewAccessorialFee"
        @accessorial-fee::updated="updatedAccessorialFee"
        @close="toggleAccessorialFeePrompt"
        :data="accessorialFeePrompt.data"
      />

      <AccessorialDeductionPrompt
        :active.sync="accessorialDeductionPrompt.isActive"
        @accessorial-deduction::added="addedNewAccessorialDeduction"
        @accessorial-deduction::updated="updateAccessorialDeduction"
        :data="accessorialDeductionPrompt.data"
        @close="toggleAccessorialDeductionPrompt"
      />

      <!-- Map Dialog -->
      <LoadMapDialog
        v-if="mapDialog.isActive"
        :isDialogActive="mapDialog.isActive"
        :defaultCenter="getDefaultMapCenterCoordinates"
        :markers="mapDialog.markers"
        :zoomInBasedOnMarkers="true"
        @close="closeMap"
        @update:address="updateAddress"
      />
    </div>
  </VuePerfectScrollbar>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
import { FormWizard, TabContent } from 'vue-form-wizard';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';
import { mapGetters } from 'vuex';
import GoogleMapMixin from '@/mixins/googleMapMixin';
import config from '@/config/constants.js';
import AccessorialDeductionPrompt from '../components/AccessorialDeductionPrompt';
import AccessorialFeePrompt from '../components/AccessorialFeePrompt';
import ThirdPartyCarrier from './components/ThirdPartyCarrier.vue';
import { validateEmail, isValidInputValue } from '@/helpers/helper';
import ReceiverAddressCard from './components/ReceiverAddressCard';
import ShipperAddressCard from './components/shipperAddressCard';
import LegAddressCard from './components/LegAddressCard';
import { cloneDeep } from 'lodash';
import TerminalAddressCard from './components/TerminalAddressCard.vue';
import IsMaintananceWarningDialog from './components/IsMaintananceWarningDialog.vue';
import loadHelperMixin from './components/loadHelperMixin';
import LoadNotes from './components/LoadNotes';
import TargetRateCard from './components/TargetRateCard.vue';

export default {
  name: 'LoadDetail',

  inject: ['scrollData'],

  mixins: [GoogleMapMixin, loadHelperMixin],

  props: {
    loadId: {
      required: true,
      type: String | Number,
    },
    duplicateLoad: {
      required: false,
      type: Boolean,
    },
    isLoadDeleted: {
      type: Boolean,
      default: false,
    },
    showLoadChargesSection: {
      type: Boolean,
      default: true,
    },
    transformedLoadStatus: {
      type: String,
      default: '',
    },
    loadDrivers: {
      type: Object,
      default: () => ({
        assign_driver_and_equipments: [],
        paramLegs: [],
      }),
    },
  },

  components: {
    VuePerfectScrollbar,
    FormWizard,
    TabContent,
    AccessorialFeePrompt,
    AccessorialDeductionPrompt,
    ReceiverAddressCard,
    ShipperAddressCard,
    LegAddressCard,
    ThirdPartyCarrier,
    TerminalAddressCard,
    LoadMapDialog: () => import('./components/LoadMapDialog'),
    IsMaintananceWarningDialog,
    LoadNotes,
    TargetRateCard,
    QuantityVariableRateForm: () =>
      import('./components/QuantityVariableRateForm.vue'),
  },

  data() {
    return {
      haulingFeeQty: 0,
      costCode: '',
      activePrompt: false,
      handleIsMaintenance: false,
      loadStatus: null,
      paidAmount: null,
      collaboratorEmails: '',
      // step 1
      selected_company: null,
      selected_tag: null,
      companyOptions: [],
      tagOptions: [],
      selected_dispatcher: null,
      dispatcher_options: [],
      dispatcher_notes: '',
      load_number: '',
      refrence_id: '',
      direction: '',
      // step 2
      paramLegs: [],
      selectedItemId: null,
      // step 3
      selected_hauling_fee: '',
      hauling_fee_rate: '',
      // hauling_fee_amount: 0,
      selected_fuel_surcharge: '',
      fuel_surcharge_rate: '',
      // fuel_surcharge_amount: 0,
      fuel_surcharge_options: [
        {
          label: 'Flat fee',
          value: 'flat_fee',
        },
        {
          label: 'Percentage',
          value: 'percentage',
        },
        {
          label: 'Per Mile',
          value: 'per_mile',
        },
        {
          label: 'Formula: Per Mile',
          value: 'formulaPerMile',
        },
      ],
      accessorial_fees: [],
      accessorial_deduction_fees: [],
      accessorial_fee_options: [],
      accessorial_deduction_options: [],

      mile_type: 'manual',
      calculatedLoadMiles: 0,
      discount: 0,
      taskAutomation: {
        show_dispatcher_fee_on_invoice: false,
        show_factoring_fee_on_invoice: false,
      },
      factoringCompanies: [],
      other_commission_amount: null,
      override_commission_fractional: null,

      // step 4
      load_truck_direction: '',
      load_truck_direction_options: {
        inbound: {
          label: 'Inbound',
          value: config.status.load_truck_direction.inbound,
        },
        outbound: {
          label: 'Outbound',
          value: config.status.load_truck_direction.outbound,
        },
      },
      selected_trailer_type: null,
      trailer_type_options: [
        { title: 'Walking Floor', value: 1 },
        { title: 'Dump', value: 2 },
        { title: 'Belt', value: 3 },
      ],
      equipment_type_options: config.equipmentTypeOptions,
      // loadDriverStatusForDisablingOptions: [
      //   'assign',
      //   'accepted',
      //   'load_started',
      //   'picked_upload'
      // ],
      loadDriverStatusForDisablingDriverOptions: [
        config.status.load_driver.assign,
        config.status.load_driver.accepted,
        // config.status.load_driver.load_started,
        // config.status.load_driver.picked_up_load,
      ],
      loadDriverStatusForDisablingNotifyOptions: [
        config.status.load_driver.load_started,
        config.status.load_driver.picked_up_load,
        config.status.load_driver.delivered,
        config.status.load_driver.handed_over,
      ],
      loadDriverStatusForDisablingDeleteOptions: [
        config.status.load_driver.assign,
        config.status.load_driver.accepted,
      ],
      assign_driver_and_equipments: [],
      driver_options: [],
      truck_options: [],
      trailer_options: [],

      // google map autocomplete options
      googleMapAutoCompleteOptions: config.googleMapAutoCompleteOptions,

      // flatPickr Config
      configTimeFlatPickr: {
        enableTime: true,
        noCalendar: true,
        time_24hr: true,
      },
      roleModify: [config.roles.admin, config.roles.dispatcher],
      validation: {
        fuelSurchargeHasError: false,
      },
      shipperReceiverLegList: [],
      // Google Maps and PC Miler cannot use the same checker because PC Miler
      // puts longitude before latitude.
      carrier_accessorial_fees: [],
      carrier_accessorial_deduction_fees: [],
      carrierType: 0,
      customersList: [],
      thirdPartyCarrier: {
        carrierAsCustomerId: null,
        charges: {
          accessorial_deduction: [],
          accessorial_fee: [],
          fuel_surcharge: null,
          fuel_surcharge_rate: null,
          fuel_surcharge_type: null,
          hauling_fee: 0,
          hauling_fee_rate: 0,
          hauling_fee_type: 'flat_fee',
        },
        discount: 0,
        driverAssetAssignments: [
          {
            truckNumber: null,
            trailerNumber: null,
            driverName: null,
            driverPhoneNumber: null,
          },
        ],
        subTotal: 0,
        totalAmount: 0,
        sendRateConToCarrier: null,
        sendRateConAndBolToCarrier: null,
        rateConType: 'otr',
      },
      orderType: null,
      serviceType: null,
      callingApi: false,
    };
  },

  filters: {
    currencyFormat(value) {
      if (!value) return '$ 0.00';
      let retSting = '';
      if (value < 0) {
        retSting += '- ';
        value = value * -1;
      }
      retSting += `$${(+value).toFixed(2)}`;
      return retSting;
    },
  },

  async created() {
    this.getPublicWeeklyFuelPrices();
    // add defaults value for Repeater
    this.addNewShipperAndFreightDetail(null);
    this.addNewReceiver(null);
    // this.addNewAccessorialFee()
    // this.addNewAccessorialdeductionFee()
    this.addNewAssignDriverAndEquipment({ id: null });
    this.$vs.loading();

    if (!this.pcmiler.getKeyApiCalled) {
      await this.getPcmilerApiKey();
    }

    try {
      // this.$emit('loading-started')
      if (this.isUserBrokerOrShipper) {
        this.carrierType = 1;
      }

      await this.getLoad();
      if (this.hasT3Access) this.getT3Statuses();
      this.getAllCustomers();
      this.getAllDispatchers();
      this.getTags();
      this.$vs.loading.close();
      this.getTaskAutomationDetails();
      // this.getFactoringCompanies();
      this.factoringCompanies = this.allFactoringCompanies;
      this.getAllAccessorialFees();
      this.getAllAccessorialDeductionFees();
      // Using Promise.all() does not speed up, I don't know why.
      // await Promise.all([this.getLoad(), this.getAllCustomers(), this.getAllDispatchers()]);
      await this.initData(this.load);

      // this.getAllDrivers();
      this.getAllDriversTrucksTrailers();
      // this.getAllTrucks();
      // this.getAllTrailers();

      if (!this.getUserLatLang) this.getDefaultMapCenter();
    } catch (error) {
      this.closeSidebar();
      const { message } = ((error || {}).response || {}).data || {};
      this.$vs.notify({
        color: 'danger',
        title: 'Error',
        text: message || error || 'Something went wrong',
      });
    } finally {
      // this.$vs.loading.close();
      // this.$emit('loading-stopped')
    }

    if (this.duplicateLoad) {
      // The previous load’s shipper/receiver/leg/driver id are actually removed
      // before calling the createLoad API.
      // Search comment "Remove previous load's ids for duplicate load."
      this.paidAmount = undefined;
      this.loadStatus = null;
      this.selected_dispatcher = null;
      this.dispatcher_notes = '';
      this.refrence_id = null;
      this.assign_driver_and_equipments = [];
      this.paramLegs = [];
      this.companyInternalReference = '';
      this.loadNotes = [];
      this.containerStatus = null;
      if (this.legsList.length > 0) {
        this.paramLegs.push([]);
      }

      let currentList = cloneDeep(this.shipperReceiverLegList);
      currentList.forEach((stop) => {
        if (stop.renderAddressType === 'shipper') {
          stop.arrivedLocalDatetime = null;
          stop.loadedLocalDatetime = null;
          stop.shipping_date = '';
          stop.shipping_end_date = '';
          stop.shipping_end_time = '';
          stop.shipping_time = '';
          stop.shipper_reference = '';
        } else if (stop.renderAddressType === 'receiver') {
          stop.arrivedLocalDatetime = null;
          stop.unloadedLocalDatetime = null;
          stop.receiver_reference = '';
          stop.delivery_time = '';
          stop.delivery_end_time = '';
          stop.delivery_end_date = '';
          stop.delivery_date = '';
        } else if (stop.renderAddressType === 'leg') {
          stop.date = '';
          stop.end_date = '';
          stop.time = '';
          stop.end_time = '';
        } else if (stop.renderAddressType === 'terminal') {
          stop.date = '';
          stop.endDate = '';
          stop.time = '';
          stop.endTime = '';
        }
        stop.key = stop.renderAddressType + '_' + uuidv4();
        stop.dropTrailerType = null;
        stop.dropTrailerId = null;
        stop.hookTrailerType = null;
        stop.hookTrailerId = null;
        stop.containerHere = null;
      });
      this.shipperReceiverLegList = [...currentList];

      this.thirdPartyCarrier.carrierAsCustomerId = null;
      this.thirdPartyCarrier.driverAssetAssignments = [
        {
          truckNumber: null,
          trailerNumber: null,
          driverName: null,
          driverPhoneNumber: null,
        },
      ];

      this.changeLoadId(this.selected_tag);
    }
  },

  computed: {
    ...mapGetters('load', {
      load: 'load',
      allDriverTruckTrailerForLoadDriver: 'allDriverTruckTrailerForLoadDriver',
      getFuelPrice: 'getFuelPrice',
    }),
    ...mapGetters('auth', [
      'userRole',
      'user',
      'getUserLatLang',
      'isUserBrokerOrShipper',
    ]),

    ...mapGetters('pcmiler', ['pcmiler']),
    ...mapGetters('factoring-company', ['allFactoringCompanies']),
    ...mapGetters('customer', ['getCachedCustomerLanes']),

    localActivePrompt: {
      get() {
        return this.activePrompt;
      },
      set(value) {
        this.activePrompt = value;
      },
    },

    dispatcherFee() {
      if (this.selected_dispatcher) {
        const dispatcherDetails = this.dispatcher_options.find(
          (data) => data.user_id === this.selected_dispatcher
        );

        const hauling_fee_amount = Number(this.hauling_fee_amount);
        const accessorial_fees_total_amount = this.accessorial_fees
          .map((fees) => Number(fees.amount))
          .reduce((totalAmount, amount) => totalAmount + amount, 0);
        const accessorial_deduction_fees_total_amount =
          this.accessorial_deduction_fees
            .map((fees) => Number(fees.amount))
            .reduce((totalAmount, amount) => totalAmount + amount, 0);

        let rates = 0;
        let commissionFractional = 0;
        if (
          this.override_commission_fractional ||
          this.override_commission_fractional === 0
        ) {
          commissionFractional = Number(this.override_commission_fractional);
        } else {
          commissionFractional = Number(
            dispatcherDetails.user_details.commission_fractional
          );
        }
        const commissionOn = dispatcherDetails.user_details.commission_on;
        if (commissionOn === 'hauling_fee') {
          rates = hauling_fee_amount + accessorial_deduction_fees_total_amount;
        } else if (commissionOn === 'hauling_fee_with_accessorial_fee') {
          rates =
            hauling_fee_amount +
            accessorial_fees_total_amount +
            accessorial_deduction_fees_total_amount;
        } else if (commissionOn === 'total_income') {
          rates = this.totalAmount;
        }

        return Number(
          rates * commissionFractional + Number(this.other_commission_amount)
        ).toFixed(2);
      } else {
        return 0;
      }
    },
  },

  methods: {
    editRecord(id) {
      this.selectedItemId = id;
      this.selectedItem = this.itemsList.find((item) => item.id === id);
      this.showItemModal = true;
    },
    getPcmilerApiKey() {
      this.$store
        .dispatch('pcmiler/getPcmiler')
        .then((data) => {
          if (data.payload.apiKey) {
            // this.mile_type = "p";
            // This is wrong. Old loads were calcualted by other means. Should let users change, not by us.
          }
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        });
    },

    onConfirmReassignHandedOver(assign_driver_and_equipment) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'primary',
        acceptText: 'Yes',
        title: 'Reassign Driver',
        text: 'Are you sure you want to reassign load to this handed over driver? If so, please click Submit button to save the change.',
        accept: () => {
          assign_driver_and_equipment.reassign = true;
          this.$forceUpdate();
        },
      });
    },

    onCustomerLaneSelection() {
      const shippers = [],
        receivers = [];
      for (let shipperReceiver of this.shipperReceiverLegList) {
        if (shipperReceiver.renderAddressType === 'receiver') {
          receivers.push(shipperReceiver);
        } else if (shipperReceiver.renderAddressType === 'shipper') {
          shippers.push(shipperReceiver);
        }
      }
      if (
        shippers.length >= 2 &&
        receivers.length >= 2 &&
        this.isEqualAddress(shippers[0], receivers[receivers.length - 1])
      ) {
        if (this.selectedLane.roundTripDistance != null) {
          this.mile_type = 'manual';
          this.calculatedLoadMiles = this.selectedLane.roundTripDistance;
        }
        if (
          this.$dayjs(shippers[0].shipping_date).isBefore(
            this.$dayjs(this.selectedLane.effectiveDate)
          ) &&
          this.selectedLane.previousRoundTripRate != null
        ) {
          this.selected_hauling_fee = 'flat_fee';
          this.hauling_fee_rate = this.selectedLane.previousRoundTripRate;
        } else if (this.selectedLane.roundTripRate != null) {
          this.selected_hauling_fee = 'flat_fee';
          this.hauling_fee_rate = this.selectedLane.roundTripRate;
        }
      } else {
        if (this.selectedLane.distance != null) {
          this.mile_type = 'manual';
          this.calculatedLoadMiles = this.selectedLane.distance;
        }
        if (
          this.$dayjs(shippers[0].shipping_date).isBefore(
            this.$dayjs(this.selectedLane.effectiveDate)
          ) &&
          this.selectedLane.previousRate != null
        ) {
          this.selected_hauling_fee = 'flat_fee';
          this.hauling_fee_rate = this.selectedLane.previousRate;
        } else if (this.selectedLane.rate != null) {
          this.selected_hauling_fee = 'flat_fee';
          this.hauling_fee_rate = this.selectedLane.rate;
        }
      }
      if (
        isValidInputValue(this.selectedLane.fuelSurchargeV2) &&
        isValidInputValue(this.selectedLane.fuelSurchargeV3)
      ) {
        this.selected_fuel_surcharge = 'formulaPerMile';
        this.fuelSurchargeV2 = Number(this.selectedLane.fuelSurchargeV2);
        this.fuelSurchargeV3 = Number(this.selectedLane.fuelSurchargeV3);
        this.getFuelPriceBasedOnShippingDate('formulaPerMile');
      } else if (
        shippers.length >= 2 &&
        receivers.length >= 2 &&
        this.isEqualAddress(shippers[0], receivers[receivers.length - 1]) &&
        isValidInputValue(this.selectedLane.fuelSurchargeRoundTripRate)
      ) {
        this.selected_fuel_surcharge = 'flat_fee';
        this.fuel_surcharge_rate = Number(
          this.selectedLane.fuelSurchargeRoundTripRate
        );
      } else if (isValidInputValue(this.selectedLane.fuelSurchargeRate)) {
        this.selected_fuel_surcharge = 'flat_fee';
        this.fuel_surcharge_rate = Number(this.selectedLane.fuelSurchargeRate);
      }
      if (this.selectedLane.direction) {
        this.load_truck_direction = this.selectedLane.direction;
      }
    },

    isEqualAddress(shipper, receiver) {
      if (
        shipper.address != receiver.address ||
        shipper.city !== receiver.city ||
        shipper.state !== receiver.state
      ) {
        return false;
      }
      return true;
    },
    changeLoadId(tagId) {
      let originalTagIdNullable = null;
      if (this.load.tag_id) {
        originalTagIdNullable = this.load.tag_id;
      }
      if (tagId == originalTagIdNullable && !this.duplicateLoad) {
        this.load_number = this.load.load_unique_id;
      } else {
        this.getLoadUniqueId(tagId).then((newUniqueId) => {
          this.load_number = newUniqueId;
        });
      }
    },

    /*
     * Scroll to Top Handler
     */
    scrollToTopHandler() {
      this.scrollData.scrollToTop = true;
    },

    //Form Submit
    async formSubmitted() {
      const dialog =
        await this.$refs.handleIsMaintenanceRef.handleTruckChange();
      if (dialog.length > 0 && !this.handleIsMaintenance) {
        this.activePrompt = true;
        return;
      }
      if (!this.validateLoadCharges()) {
        this.$vs.notify({
          time: 4000,
          color: 'danger',
          text: 'Fee type not selected.',
        });

        return;
      }
      if (
        this.selected_hauling_fee === 'qty_var_rate' &&
        !this.validateHaulingFeeQuantityVariableRate()
      ) {
        return;
      }
      if (
        this.selected_fuel_surcharge === 'formulaPerMile' &&
        isValidInputValue(this.fuelSurchargeV3) &&
        (this.fuelSurchargeV3 < 0.0001 || this.fuelSurchargeV3 > 99.9999)
      ) {
        this.$vs.notify({
          time: 4000,
          color: 'danger',
          text: 'MPG must be between 0.0001 and 99.9999.',
        });

        return;
      }

      const accessorialFeesPayload = this.accessorial_fees
        .filter(
          (fee) => fee.selected_accessorial_fee !== '' && fee.amount !== ''
        )
        .map((fee) => {
          return {
            id: fee.selected_accessorial_fee,
            rate: fee.amount,
          };
        });

      const accessorialDeductionFeesPayload = this.accessorial_deduction_fees
        .filter(
          (fee) =>
            fee.selected_accessorial_deduction !== '' && fee.amount !== ''
        )
        .map((fee) => {
          return {
            id: fee.selected_accessorial_deduction,
            rate: fee.amount,
          };
        });

      let shipperPayload = [],
        legPayload = [],
        receiverPayload = [],
        terminalPayload = [];

      this.onSubmitContainerLocation();
      this.shipperReceiverLegList.forEach((stop, index) => {
        const payload = {
          ...stop,
          order: index + 1,
        };
        delete payload.renderAddressType;
        delete payload.key;

        if (this.isUserBrokerOrShipper) {
          delete payload.dropTrailerId;
          delete payload.dropTrailerType;
          delete payload.hookTrailerId;
          delete payload.hookTrailerType;
        }

        if (stop.renderAddressType === 'shipper') {
          if (this.selected_hauling_fee === 'qty_var_rate') {
            payload.qtyRate = isValidInputValue(payload.qtyRate)
              ? Number(payload.qtyRate)
              : payload.qtyRate;
          } else {
            delete payload.qtyRate;
          }
          shipperPayload.push(payload);
        } else if (stop.renderAddressType === 'receiver') {
          receiverPayload.push(payload);
        } else if (stop.renderAddressType === 'leg') {
          legPayload.push(payload);
        } else if (stop.renderAddressType === 'terminal') {
          // Exclude fields from payload
          if (index != this.shipperReceiverLegList.length - 1) {
            payload.segmentDistance = null;
          }
          terminalPayload.push({ ...payload, type: 'terminal' });
        }
      });
      legPayload = legPayload.map((leg, k) => ({ ...leg, leg_order: k + 1 }));
      shipperPayload = shipperPayload.map((address) => {
        const { additionalFreightDetails } = address;
        const { details, totalQty, totalWeight } =
          additionalFreightDetails || {};
        let detailsMap = (details || []).map((details) => {
          return {
            equipmentType: details.freightEquipmentType,
            description: details.freight_description,
            weight: details.freight_weight,
            weightUnit: details.weight_unit,
            qty: details.freight_qty,
            qtyUnit: details.qty_unit,
            length: details.freight_length,
            width: details.freight_width,
            height: details.freight_height,
            ...(this.selected_hauling_fee === 'qty_var_rate' && {
              qtyRate: isValidInputValue(details.qtyRate)
                ? Number(details.qtyRate)
                : details.qtyRate,
            }),
          };
        });
        const returnPayload = {
          ...address,
        };
        if (detailsMap.length) {
          returnPayload.additionalFreightDetails = {
            details: detailsMap,
            totalQty,
            totalWeight,
          };
        } else {
          returnPayload.additionalFreightDetails = null;
        }
        return returnPayload;
      });

      const distanceCachePayload = {
        loadDistanceCache: this.loadDistanceCache,
      };

      let driverPayload = this.assign_driver_and_equipments.map((driver) => {
        const ret = {
          id: driver.id,
          truck_id: driver.selected_truck
            ? driver.selected_truck.truck_id
            : null,
          trailer_id: driver.selected_trailer
            ? driver.selected_trailer.trailer_id
            : null,
          // Empty string will be converted to null by PHP.
          externalTrailerNumber: driver.externalTrailerNumber,
          is_final_mile: driver.is_final_mile ? 1 : 0,
          // direction: driver.is_final_mile ? this.load_truck_direction : null,
          direction: this.load_truck_direction
            ? this.load_truck_direction
            : null,
          drop_trailer: driver.is_drop_trailer ? 1 : 0,
          // to_notify_driver: driver.is_notified ? 1 : 0,
          notes: driver.notes,
          driver_ids: driver.selected_drivers
            .map((selectedDriver) => selectedDriver.driver_id)
            .sort()
            .join(','),
          to_leg: this.paramLegs.length == 0 ? null : 1,
          from_leg: null,
          loadedDistance: driver.loadedDistance,
          emptyDistance: driver.emptyDistance,
          chassis: driver.chassis,
          sendBolToDriver: driver.sendBolToDriver ? true : null,
        };
        if (driver.reassign) {
          ret.reassign = true;
        }
        return ret;
      });

      if (this.assign_driver_and_equipments.length > 0) {
        if (legPayload.length == 0) {
          distanceCachePayload.noLegCache = this.noLegCache;
        } else {
          distanceCachePayload.toLegCache = this.toLegCache;
        }
      }

      for (let i = 0; i < this.paramLegs.length; ++i) {
        driverPayload.push(
          ...this.paramLegs[i].map((driver) => {
            const ret = {
              id: driver.id,
              truck_id: driver.selected_truck
                ? driver.selected_truck.truck_id
                : null,
              trailer_id: driver.selected_trailer
                ? driver.selected_trailer.trailer_id
                : null,
              // Empty string will be converted to null by PHP.
              externalTrailerNumber: driver.externalTrailerNumber,
              is_final_mile: driver.is_final_mile ? 1 : 0,
              // direction: driver.is_final_mile ? this.load_truck_direction : null,
              direction: this.load_truck_direction
                ? this.load_truck_direction
                : null,
              drop_trailer: driver.is_drop_trailer ? 1 : 0,
              // to_notify_driver: driver.is_notified ? 1 : 0,
              notes: driver.notes,
              driver_ids: driver.selected_drivers
                .map((selectedDriver) => selectedDriver.driver_id)
                .sort()
                .join(','),
              to_leg: i + 1 == this.paramLegs.length ? null : i + 2,
              from_leg: i + 1,
              loadedDistance: driver.loadedDistance,
              emptyDistance: driver.emptyDistance,
              chassis: driver.chassis,
              sendBolToDriver: driver.sendBolToDriver ? true : null,
            };
            if (driver.reassign) {
              ret.reassign = true;
            }
            return ret;
          })
        );
        if (this.paramLegs[0].length > 0) {
          distanceCachePayload.fromLegCache = this.fromLegCache;
        }
      }

      /*
      driverPayload = driverPayload.filter(
        (driver) =>
          !(
            !driver.truck_id &&
            !driver.trailer_id &&
            !driver.driver_ids &&
            !driver.drop_trailer
          )
      );
      */
      if (this.collaboratorEmails) {
        for (const email of this.collaboratorEmails.split(',')) {
          const validate = await validateEmail(email);
          if (!validate) {
            this.$vs.notify({
              title: 'Error',
              text: 'You have entered an invalid email address!',
              color: 'danger',
            });
            return;
          }
        }
      }

      const thirdPartyPayload = {
        ...this.thirdPartyCarrier,
        driverAssetAssignments:
          this.thirdPartyCarrier.driverAssetAssignments.map((driver) => {
            return {
              ...driver,
              loadId: this.loadId,
            };
          }),
      };
      // PAYLOAD START
      const payload = {
        // Step 1
        customer_id: this.selected_company
          ? this.selected_company.customer_id
          : null,
        laneCode: this.selectedLaneCode ? this.selectedLaneCode : null,
        tag_id: this.selected_tag,
        load_unique_id: this.load_number,
        refrence_id: this.refrence_id,
        companyInternalReference: this.companyInternalReference,
        dispatcher_id: this.selected_dispatcher,
        dispatcher_notes: this.dispatcher_notes,
        equipment_type: this.selected_equipment_type,
        trailer_type: this.selected_trailer_type,
        direction: this.load_truck_direction,
        // Newly added note show as the first, but should be lastly created.
        notes: this.loadNotes.reverse(),
        collaboratorEmails: this.collaboratorEmails
          ? this.collaboratorEmails.split(',').map((element) => {
              return element.trim();
            })
          : [],
        costCode: this.costCode,
        // Step 2
        shippers: shipperPayload,
        receivers: receiverPayload,
        load_legs: legPayload,
        multiPurposeStops: terminalPayload,
        thirdPartyCarrier: this.carrierType
          ? JSON.parse(JSON.stringify(thirdPartyPayload))
          : null,
        thirdPartyCarrierRateConType:
          this.thirdPartyCarrier && this.thirdPartyCarrier.rateConType
            ? this.thirdPartyCarrier.rateConType
            : null,
        orderType: this.orderType,
        serviceType: this.serviceType,
        containerStatus: this.containerStatus,
        vessel: this.vessel,
        arrivalDate: this.arrivalDate,
        lastFreeDate: this.lastFreeDate,
        bolNumber: this.bolNumber,
        pickedUpEquipment: this.pickedUpEquipment,
        droppedOffEquipment: this.droppedOffEquipment,
        // haulingFeeQty: this.haulingFeeQty,
      };
      if (this.carrierType) {
        const { thirdPartyCarrier } = payload;
        const { charges } = thirdPartyCarrier || {};
        const { accessorial_deduction, accessorial_fee } = charges || {};
        if (accessorial_deduction.length) {
          let accDeductions = accessorial_deduction
            .map((x) => {
              if (x.id && x.rate) {
                return x;
              }
              return null;
            })
            .filter(Boolean);
          payload.thirdPartyCarrier.charges.accessorial_deduction =
            accDeductions;
        }
        if (accessorial_fee.length) {
          let accFee = accessorial_fee
            .map((x) => {
              if (x.id && x.rate) {
                return x;
              }
              return null;
            })
            .filter(Boolean);
          payload.thirdPartyCarrier.charges.accessorial_fee = accFee;
        }
      }

      // Step 3
      payload.hauling_fees_type = this.selected_hauling_fee;
      payload.hauling_fees_rate = this.hauling_fee_rate;
      payload.hauling_fees = this.hauling_fee_amount;
      if (this.selected_hauling_fee === 'truck_hour') {
        payload.haulingFeeQty = Number(this.haulingFeeQty);
      }

      if (
        this.selected_fuel_surcharge !== '' &&
        this.fuel_surcharge_rate !== ''
      ) {
        payload.fuel_surcharge_type = this.selected_fuel_surcharge;
        payload.fuel_surcharge_rate = this.fuel_surcharge_rate;
        payload.fuel_surcharge = this.fuel_surcharge_amount;
      }
      if (this.selected_fuel_surcharge === 'formulaPerMile') {
        payload.fuelSurchargeFormula = 1;
        payload.fuelSurchargeV1 = this.fuelSurchargeV1
          ? this.fuelSurchargeV1.toFixed(3)
          : null;
        payload.fuelSurchargeV2 = this.fuelSurchargeV2
          ? this.fuelSurchargeV2.toFixed(3)
          : null;
        payload.fuelSurchargeV3 = this.fuelSurchargeV3
          ? this.fuelSurchargeV3.toFixed(2)
          : null;
      }
      if (accessorialFeesPayload.length > 0) {
        payload.accessorial_fee = accessorialFeesPayload;
      }

      if (accessorialDeductionFeesPayload.length > 0) {
        payload.accessorial_deduction = accessorialDeductionFeesPayload;
      }

      payload.sub_total = this.subTotal;
      payload.discount = this.discount;
      payload.total_amount = this.totalAmount;

      payload.calculate_using = this.mile_type;
      payload.total_miles = this.calculatedLoadMiles;

      if (this.isUserBrokerOrShipper) {
        payload.hauling_fees = 0;
        payload.hauling_fees_type = 'flat_fee';
        payload.sub_total = 0;
        payload.discount = 0;
        payload.total_amount = 0;
      }

      // if (this.isDriverAdded) {
      // Step 4
      payload.distanceCache = distanceCachePayload;
      payload.drivers = driverPayload;
      payload.direction = this.load_truck_direction;
      // }
      payload.billToCode = (this.selected_company || {}).bill_to_code || null;

      /*if(this.isLegAdded){
        payload.drivers.concat(legDriverPayload)
      }*/
      // Remove previous load's ids for duplicate load.
      if (this.duplicateLoad) {
        payload.parsedBy = 'duplicate';
        payload.shippers.map((item) => {
          delete item.id;
        });
        payload.receivers.map((item) => {
          delete item.id;
        });
        payload.load_legs.map((item) => {
          delete item.id;
          delete item.load_id;
        });
        payload.multiPurposeStops.map((item) => {
          delete item.multiPurposeStopId;
          delete item.loadId;
        });
        payload.drivers.map((item) => {
          delete item.id;
        });
        try {
          this.callingApi = true;
          await this.$store.dispatch('load/createLoad', payload);
          this.$emit('refreshCallingUi'); // For cases when LoadSideBar is rendered on pages other than Dispatch
          this.closeSidebar();
          this.$vs.loading.close();
          // Start Loading For Load Datatable/Pipeline
          await this.$store.dispatch('load/startLoading');
          this.$vs.notify({
            color: 'primary',
            title: 'Load Added',
            text: 'Load added successfully.',
          });
          this.callingApi = false;
        } catch (error) {
          this.callingApi = false;
          this.$vs.loading.close();
          this.$vs.notify({
            title: 'Error',
            text: error.response.data.message,
            color: 'danger',
          });
        }
      } else {
        if (
          this.transformedLoadStatus &&
          this.transformedLoadStatus != this.loadStatus
        ) {
          payload.status = this.transformedLoadStatus;
        }

        const loadPayload = {
          id: this.loadId,
          payload,
        };
        this.callingApi = true;
        this.$store
          .dispatch('load/updateLoad', loadPayload)
          .then(() => {
            this.$emit('refreshCallingUi'); // For cases when LoadSideBar is rendered on pages other than Dispatch
            this.closeSidebar();

            // fixed: overlap with other loading (Datatable/Pipeline)
            this.$vs.loading.close();

            // Start Loading For Load Datatable/Pipeline
            this.$store.dispatch('load/startLoading');

            this.$vs.notify({
              color: 'primary',
              title: 'Load Updated',
              text: 'Load updated successfully.',
            });
            this.callingApi = false;
          })
          .catch((error) => {
            this.callingApi = false;
            this.$vs.loading.close();
            this.$vs.notify({
              title: 'Error',
              text: error.response.data.message,
              color: 'danger',
            });
          });
      }
    },

    /*
     * INIT DATA
     */

    async initData(load) {
      if (!load) return;

      this.loadStatus = load.status;

      /*
       * Step 1
       */
      // this.companyOptions.push(load.customer)
      const loadData = JSON.parse(JSON.stringify(load));
      this.selected_company = loadData.customer;
      if (this.selected_company && this.selected_company.customer_id) {
        await this.onCustomerSelection();
        if (loadData.laneCode) {
          this.setSelectedLane(loadData.laneCode);
        }
      }
      if (loadData.billToCode) {
        this.selected_company.company_name =
          loadData.customer.company_name + ' - ' + loadData.billToCode;
        this.selected_company.bill_to_code = loadData.billToCode;
      } else {
        this.selected_company.bill_to_code = null;
      }
      this.costCode = load.costCode;
      this.selected_tag = load.tag_id;
      this.load_number = load.load_unique_id;
      this.refrence_id = load.refrence_id;
      this.companyInternalReference = load.companyInternalReference;
      // Latest note shown as first in table.
      this.loadNotes = cloneDeep(load.notes).reverse();
      if (load.dispatcher && load.dispatcher.user_id) {
        this.selected_dispatcher = load.dispatcher.user_id;
      } else {
        this.selected_dispatcher = null;
      }

      this.dispatcher_notes = load.dispatcher_notes;
      this.collaboratorEmails = load.collaboratorEmails.join(',');
      /*
       * Step 2
       */
      const shipperAddressList = load.shippers.map((shipper) => ({
        key: 'shipper_' + shipper.load_shipper_id + '_' + uuidv4(),
        id: shipper.load_shipper_id,
        address: shipper.address,
        city: shipper.city,
        state: shipper.state,
        zip_code: shipper.zip_code,
        contact_number: shipper.contact_number,
        contact_person: shipper.contact_person,
        shipper_reference: shipper.shipper_reference,
        shipper_note: shipper.shipper_note,
        freight_description: shipper.freight_description,
        freightEquipmentType: shipper.freightEquipmentType,
        freight_height: shipper.freight_height,
        freight_length: shipper.freight_length,
        // freight_pickup_number: shipper.freight_pickup_number,
        freight_weight: shipper.freight_weight
          ? Number(shipper.freight_weight)
          : null,
        freight_qty: isValidInputValue(shipper.freight_qty)
          ? Number(shipper.freight_qty)
          : null,
        qtyRate: isValidInputValue(shipper.qtyRate)
          ? parseFloat(shipper.qtyRate)
          : null,
        weight_unit: config.weight_unit[shipper.weight_unit],
        qty_unit: config.quantity_unit[shipper.qty_unit],
        freight_width: shipper.freight_width,
        latitude: shipper.latitude,
        longitude: shipper.longitude,
        shipper_name: shipper.shipper_name,
        shipping_date: shipper.shipping_date,
        shipping_time: shipper.shipping_time,
        shipping_end_date: shipper.shipping_end_date,
        shipping_end_time: shipper.shipping_end_time,
        container: shipper.container,
        order: shipper.order,
        renderAddressType: 'shipper',
        temperature: shipper.temperature,
        hookTrailerType: shipper.hookTrailerType,
        dropTrailerType: shipper.dropTrailerType,
        hookTrailerId: shipper.hookTrailerId,
        dropTrailerId: shipper.dropTrailerId,
        additionalFreightDetails: {
          details: (
            ((shipper || {}).additionalFreightDetails || {}).details || []
          ).map((freightDetail) => {
            return {
              id: uuidv4(),
              freightEquipmentType: freightDetail.equipmentType || null,
              freight_description: freightDetail.description || null,
              freight_weight: freightDetail.weight
                ? Number(freightDetail.weight)
                : null,
              weight_unit: config.weight_unit[freightDetail.weightUnit],
              freight_qty: isValidInputValue(freightDetail.qty)
                ? Number(freightDetail.qty)
                : null,
              qtyRate: isValidInputValue(freightDetail.qtyRate)
                ? freightDetail.qtyRate
                : null,
              qty_unit: config.quantity_unit[freightDetail.qtyUnit],
              freight_length: freightDetail.length || null,
              freight_width: freightDetail.width || null,
              freight_height: freightDetail.height || null,
            };
          }),
          totalQty:
            ((shipper || {}).additionalFreightDetails || {}).totalQty || null,
          totalWeight:
            ((shipper || {}).additionalFreightDetails || {}).totalWeight ||
            null,
        },
        loadedLocalDatetime: (shipper || {}).loaded_local_datetime || null,
        arrivedLocalDatetime: (shipper || {}).arrived_local_datetime || null,
        hookTrailerType: shipper.hookTrailerType,
        dropTrailerType: shipper.dropTrailerType,
        hookTrailerId: shipper.hookTrailerId,
        dropTrailerId: shipper.dropTrailerId,
        containerHere: shipper.containerHere,
      }));

      const legsAddressList = load.load_legs.map((leg) => ({
        key: 'leg_' + leg.id + '_' + uuidv4(),
        id: leg.id,
        load_id: leg.load_id,
        location_name: leg.location_name,
        address: leg.address,
        city: leg.city,
        state: leg.state,
        zip_code: leg.zip_code,
        latitude: leg.latitude,
        longitude: leg.longitude,
        date: leg.date,
        end_date: leg.end_date,
        time: leg.time,
        end_time: leg.end_time,
        contact_person: leg.contact_person,
        contact_number: leg.contact_number,
        leg_order: leg.leg_order,
        note: leg.note,
        order: leg.order,
        renderAddressType: 'leg',
        hookTrailerType: leg.hookTrailerType,
        dropTrailerType: leg.dropTrailerType,
        hookTrailerId: leg.hookTrailerId,
        dropTrailerId: leg.dropTrailerId,
        containerHere: leg.containerHere,
      }));

      const receiverAddressList = load.receivers.map((receiver) => ({
        key: 'receiver_' + receiver.load_receiver_id + '_' + uuidv4(),
        id: receiver.load_receiver_id,
        address: receiver.address,
        city: receiver.city,
        state: receiver.state,
        zip_code: receiver.zip_code,
        contact_person: receiver.contact_person,
        contact_number: receiver.contact_number,
        delivery_date: receiver.delivery_date,
        delivery_time: receiver.delivery_time,
        delivery_end_date: receiver.delivery_end_date,
        delivery_end_time: receiver.delivery_end_time,
        latitude: receiver.latitude,
        longitude: receiver.longitude,
        receiver_name: receiver.receiver_name,
        receiver_note: receiver.receiver_note,
        receiver_reference: receiver.receiver_reference,
        order: receiver.order,
        renderAddressType: 'receiver',
        unloadedLocalDatetime: (receiver || {}).unloaded_local_datetime || null,
        arrivedLocalDatetime: (receiver || {}).arrived_local_datetime || null,
        hookTrailerType: receiver.hookTrailerType,
        dropTrailerType: receiver.dropTrailerType,
        hookTrailerId: receiver.hookTrailerId,
        dropTrailerId: receiver.dropTrailerId,
        containerHere: receiver.containerHere,
      }));
      const terminalAddressList = load.multiPurposeStops.map((terminal) => ({
        key: 'terminal_' + terminal.multiPurposeStopId + '_' + uuidv4(),
        renderAddressType: 'terminal',
        ...terminal,
      }));
      this.shipperReceiverLegList = [
        ...shipperAddressList,
        ...legsAddressList,
        ...receiverAddressList,
        ...terminalAddressList,
      ].sort((a, b) => a.order - b.order);
      this.shipperReceiverLegList.forEach((stop) => {
        if (stop.containerHere) {
          this.containerLocationStopKey = stop.key;
        }
      });

      /*
       * Step 3
       */
      this.mile_type = load.calculate_using;
      this.calculatedLoadMiles = load.total_miles;

      // Cache for loaded/empty miles of drivers are after drivers being created.

      // When open the Edit Load UI, getTotalGoogleDistance() is called 3
      // times, possibly due to the watchers, but this block of code is
      // executed before those getTotalGoogleDistance() call, so we don't
      // call Google Maps API on loading data. Same for PC Miler.

      const loadCharges = load.load_charge;

      // haouling fees
      this.selected_hauling_fee = loadCharges.hauling_fees_type;
      this.hauling_fee_rate = loadCharges.hauling_fees_rate;
      if (this.selected_hauling_fee === 'truck_hour') {
        this.haulingFeeQty = Number(loadCharges.haulingFeeQty);
      }
      // this.hauling_fee_amount = loadCharges.hauling_fees

      // fuel surcharge fees
      this.selected_fuel_surcharge = loadCharges.fuel_surcharge_type;
      this.fuel_surcharge_rate = loadCharges.fuel_surcharge_rate;
      if (this.selected_fuel_surcharge === 'formulaPerMile') {
        this.fuelSurchargeV1 = loadCharges.fuelSurchargeV1;
        this.fuelSurchargeV2 = loadCharges.fuelSurchargeV2;
        this.fuelSurchargeV3 = loadCharges.fuelSurchargeV3;
      }
      // this.fuel_surcharge_amount = loadCharges.fuel_surcharge
      // accessorial fees
      if (loadCharges.accessorial_fee.length > 0) {
        const accessorialFeeOptions = loadCharges.accessorial_fee.map((fee) => {
          return {
            ...fee,
          };
        });
        const accesorialFees = accessorialFeeOptions.map((fee) => {
          return {
            uuid: uuidv4(),
            selected_accessorial_fee: fee.id,
            // price: fee.rate,
            amount: fee.rate,
          };
        });

        // this.accessorial_fees.push(...accesorialFees);
        accesorialFees.forEach((fee) => {
          this.accessorial_fees.push({ ...fee, hasError: false });
        });
      } else {
        this.addNewAccessorialFee();
      }

      // accessorial deduction fees
      if (loadCharges.accessorial_deduction.length > 0) {
        const accessorialDeductionFeeOptions =
          loadCharges.accessorial_deduction.map((fee) => {
            return {
              ...fee,
            };
          });

        const accessorialDeductionFees = accessorialDeductionFeeOptions.map(
          (fee) => {
            return {
              uuid: uuidv4(),
              selected_accessorial_deduction: fee.id,
              // price: fee.rate,
              amount: fee.rate,
            };
          }
        );

        // this.accessorial_deduction_fees.push(...accessorialDeductionFees);
        accessorialDeductionFees.forEach((fee) => {
          this.accessorial_deduction_fees.push({ ...fee, hasError: false });
        });
      } else {
        this.addNewAccessorialdeductionFee();
      }

      this.discount = load.discount;
      this.override_commission_fractional = load.override_commission_fractional;
      this.other_commission_amount = load.other_commission_amount;

      /*
       * Step 4
       */
      const assignDriverAndEquipments = load.drivers;

      this.load_truck_direction = null;
      if (load.direction) {
        this.load_truck_direction = load.direction;
      }
      this.selected_equipment_type = load.equipment_type
        ? this.equipment_type_options.find(
            (option) => option.title === load.equipment_type
          ).value
        : null;
      this.selected_trailer_type = load.trailer_type
        ? this.trailer_type_options.find(
            (option) => option.title === load.trailer_type
          ).value
        : null;

      this.driver_options = [];

      this.truck_options = [];

      this.trailer_options = [];

      this.paramLegs = [];
      for (let i = 0; i < this.legsList.length; ++i) {
        this.paramLegs.push([]);
      }
      this.assign_driver_and_equipments = [];
      for (let i = 0; i < assignDriverAndEquipments.length; ++i) {
        if (assignDriverAndEquipments[i].from_leg) {
          const j = assignDriverAndEquipments[i].from_leg - 1;
          this.paramLegs[j].push({
            selected_drivers: assignDriverAndEquipments[i].drivers.map(
              (driver) => ({
                ...driver,
                full_name: driver.driver_details.name,
              })
            ),
            endLoadUtcDatetime: assignDriverAndEquipments[i].endLoadUtcDatetime,
            startLoadUtcDatetime:
              assignDriverAndEquipments[i].startLoadUtcDatetime,
            selected_truck: assignDriverAndEquipments[i].truck,
            selected_trailer: assignDriverAndEquipments[i].trailer,
            externalTrailerNumber:
              assignDriverAndEquipments[i].externalTrailerNumber,
            showExternalTrailerNumber: assignDriverAndEquipments[i]
              .externalTrailerNumber
              ? true
              : false,
            is_drop_trailer: assignDriverAndEquipments[i].drop_trailer,
            is_final_mile: assignDriverAndEquipments[i].is_final_mile,
            // is_notified: assignDriverAndEquipments[i].to_notify_driver,
            notes: assignDriverAndEquipments[i].notes,
            id: assignDriverAndEquipments[i].load_driver_id,
            load_driver_status: assignDriverAndEquipments[i].status,
            // is_notified_disabled: this.loadDriverStatusForDisablingNotifyOptions.includes(
            //   assignDriverAndEquipments[i].status
            // ),
            is_driver_disabled:
              !this.loadDriverStatusForDisablingDriverOptions.includes(
                assignDriverAndEquipments[i].status
              ),
            is_delete_disabled:
              !this.loadDriverStatusForDisablingDeleteOptions.includes(
                assignDriverAndEquipments[i].status
              ),
            from_leg: assignDriverAndEquipments[i].from_leg,
            to_leg: assignDriverAndEquipments[i].to_leg
              ? assignDriverAndEquipments[i].to_leg
              : null,
            emptyDistance: assignDriverAndEquipments[i].emptyDistance,
            loadedDistance: assignDriverAndEquipments[i].loadedDistance,
            chassis: assignDriverAndEquipments[i].chassis,
          });
        } else {
          this.assign_driver_and_equipments.push({
            selected_drivers: assignDriverAndEquipments[i].drivers.map(
              (driver) => ({
                ...driver,
                full_name: driver.driver_details.name,
              })
            ),
            endLoadUtcDatetime: assignDriverAndEquipments[i].endLoadUtcDatetime,
            startLoadUtcDatetime:
              assignDriverAndEquipments[i].startLoadUtcDatetime,
            selected_truck: assignDriverAndEquipments[i].truck,
            selected_trailer: assignDriverAndEquipments[i].trailer,
            externalTrailerNumber:
              assignDriverAndEquipments[i].externalTrailerNumber,
            showExternalTrailerNumber: assignDriverAndEquipments[i]
              .externalTrailerNumber
              ? true
              : false,
            is_drop_trailer: assignDriverAndEquipments[i].drop_trailer,
            is_final_mile: assignDriverAndEquipments[i].is_final_mile,
            // is_notified: assignDriverAndEquipments[i].to_notify_driver,
            notes: assignDriverAndEquipments[i].notes,
            id: assignDriverAndEquipments[i].load_driver_id,
            load_driver_status: assignDriverAndEquipments[i].status,
            // is_notified_disabled: this.loadDriverStatusForDisablingNotifyOptions.includes(
            //   assignDriverAndEquipments[i].status
            // ),
            is_driver_disabled:
              !this.loadDriverStatusForDisablingDriverOptions.includes(
                assignDriverAndEquipments[i].status
              ),
            is_delete_disabled:
              !this.loadDriverStatusForDisablingDeleteOptions.includes(
                assignDriverAndEquipments[i].status
              ),
            from_leg: null,
            to_leg: assignDriverAndEquipments[i].to_leg
              ? assignDriverAndEquipments[i].to_leg
              : null,
            emptyDistance: assignDriverAndEquipments[i].emptyDistance,
            loadedDistance: assignDriverAndEquipments[i].loadedDistance,
            chassis: assignDriverAndEquipments[i].chassis,
          });
        }
      }

      if (
        this.loadDrivers &&
        this.loadDrivers.assign_driver_and_equipments.length
      ) {
        this.assign_driver_and_equipments =
          this.loadDrivers.assign_driver_and_equipments;
      }

      if (this.loadDrivers && this.loadDrivers.paramLegs.length) {
        this.paramLegs[0] = this.loadDrivers.paramLegs;
      }

      this.resetLoadDistanceCache();
      this.resetNoLegCache();
      this.resetToLegCache();
      this.resetFromLegCache();

      // Default value is Google Maps, but we need to reset it cause we need to load from db.
      this.driverMileType = null;
      if (load.distanceCache) {
        if (load.distanceCache.loadDistanceCache) {
          this.loadDistanceCache = JSON.parse(
            JSON.stringify(load.distanceCache.loadDistanceCache)
          );
        }
        if (load.distanceCache.noLegCache) {
          this.noLegCache = JSON.parse(
            JSON.stringify(load.distanceCache.noLegCache)
          );
          if (this.noLegCache.loadedDistanceCalculatedBy) {
            this.driverMileType = this.noLegCache.loadedDistanceCalculatedBy;
          }
        }
        if (load.distanceCache.toLegCache) {
          this.toLegCache = JSON.parse(
            JSON.stringify(load.distanceCache.toLegCache)
          );
          if (this.toLegCache.loadedDistanceCalculatedBy) {
            this.driverMileType = this.toLegCache.loadedDistanceCalculatedBy;
          }
        }
        if (load.distanceCache.fromLegCache) {
          this.fromLegCache = JSON.parse(
            JSON.stringify(load.distanceCache.fromLegCache)
          );
          if (this.fromLegCache.loadedDistanceCalculatedBy) {
            this.driverMileType = this.fromLegCache.loadedDistanceCalculatedBy;
          }
        }
        console.log('Finished initiating cache from load.');
      }
      if (
        !this.driverMileType ||
        (this.driverMileType == 'manual' && !this.driverMileEngineCanBeManual)
      ) {
        if (this.mile_type != 'manual' || this.driverMileEngineCanBeManual) {
          this.driverMileType = this.mile_type;
        } else {
          // load is manual and has leg or terminal.
          this.driverMileType = this.pcMilerOrGoogleMaps();
        }
      }

      // I forgot why I originally did this, probably to prevent entering into this function multiple times
      // when opening a existing load? But I don't think we really need it for now after I change
      // the trigger for calculateLoadDistances().
      // await this.calculateLoadDistances();

      this.thirdPartyCarrier = {
        ...loadData.thirdPartyCarrier,
        charges: loadData.thirdPartyCarrier.charges
          ? loadData.thirdPartyCarrier.charges
          : {
              accessorial_deduction: [],
              accessorial_fee: [],
              fuel_surcharge: null,
              fuel_surcharge_rate: null,
              fuel_surcharge_type: null,
              hauling_fee: 0,
              hauling_fee_rate: 0,
              hauling_fee_type: null,
            },
        driverAssetAssignments: loadData.thirdPartyCarrier
          .driverAssetAssignments.length
          ? loadData.thirdPartyCarrier.driverAssetAssignments
          : [
              {
                truckNumber: null,
                trailerNumber: null,
                driverName: null,
                driverPhoneNumber: null,
              },
            ],
      };

      if (loadData.paidAmount != null) {
        this.paidAmount = loadData.paidAmount;
      }
      this.orderType = loadData.orderType || null;
      this.serviceType = loadData.serviceType || null;
      this.containerStatus = loadData.containerStatus || null;
      this.vessel = loadData.vessel || null;
      this.arrivalDate = loadData.arrivalDate || null;
      this.lastFreeDate = loadData.lastFreeDate || null;
      this.bolNumber = loadData.bolNumber || null;
      this.pickedUpEquipment = loadData.pickedUpEquipment || {
        number: null,
        type: null,
        size: null,
      };
      this.droppedOffEquipment = loadData.droppedOffEquipment || {
        number: null,
        type: null,
        size: null,
      };

      if (
        this.thirdPartyCarrier &&
        ((this.thirdPartyCarrier.driverAssetAssignments.length > 0 &&
          (this.thirdPartyCarrier.driverAssetAssignments[0].driverName ||
            this.thirdPartyCarrier.driverAssetAssignments[0]
              .driverPhoneNumber ||
            this.thirdPartyCarrier.driverAssetAssignments[0].truckNumber ||
            this.thirdPartyCarrier.driverAssetAssignments[0].trailerNumber)) ||
          this.thirdPartyCarrier.carrierAsCustomerId ||
          parseFloat(this.thirdPartyCarrier.totalAmount))
      ) {
        this.carrierType = 1;
      }
    },

    /*
     * API CALL
     */
    async getLoad() {
      await this.$store.dispatch('load/getLoad', this.loadId);
    },

    async getLoadUniqueId(tag_id = null) {
      if (tag_id) {
        const { payload } = await this.$store.dispatch(
          'load/getLoadUniqueId',
          tag_id
        );
        return payload.load_unique_id;
      } else {
        const { payload } = await this.$store.dispatch('load/getLoadUniqueId');
        return payload.load_unique_id;
      }
    },
    accessorialFeesChange(value) {
      const { selected_accessorial_fee } = value;
      if (selected_accessorial_fee === 'add-new') {
        this.toggleAccessorialFeePrompt(selected_accessorial_fee, null);
      }
      const index = this.accessorial_fees.findIndex(
        (item) => item.uuid === value.uuid
      );
      if (!value.selected_accessorial_fee) {
        value.amount = '';
      } else {
        value.hasError = false;
      }
      this.accessorial_fees[index] = value;
    },
    accessorialDeductionFeesChange(value) {
      const { selected_accessorial_deduction } = value;
      if (selected_accessorial_deduction === 'add-new') {
        this.toggleAccessorialDeductionPrompt(
          selected_accessorial_deduction,
          null
        );
      }
      const index = this.accessorial_deduction_fees.findIndex(
        (item) => item.uuid === value.uuid
      );
      if (!value.selected_accessorial_deduction) {
        value.amount = '';
      } else {
        value.hasError = false;
      }
      this.accessorial_deduction_fees[index] = value;
    },
  },
  beforeDestroy() {
    const data = {
      assign_driver_and_equipments: this.assign_driver_and_equipments,
      paramLegs: this.paramLegs[0],
    };

    this.$emit('saveLoadDrivers', data);
  },
};
</script>

<style lang="scss" scoped>
div.con-input-upload {
  width: 100% !important;
}

td {
  vertical-align: top;
}

#company-details {
  td {
    vertical-align: top;
    /* min-width: 190px; */
    /* padding-bottom: 0.8rem; */
    min-width: auto;
    padding: 5px;
  }
}

.text-area {
  border: 1px solid rgb(221, 221, 221);
  display: block;
}

::v-deep .hide-scroll textarea {
  overflow: hidden !important;
}

.collaborator-tooltip-dropdown {
  position: relative;
}
.collaborator-tooltip-dropdown-menu {
  display: none;
  position: absolute;
  z-index: 1000;
  background: #fff;
  padding: 10px;
  box-shadow: 0px 4px 24px #22292f1a;
  width: 170px;
  p {
    font-size: 10px;
    color: #6e6b7b;
  }
}
.collaborator-tooltip-dropdown:hover .collaborator-tooltip-dropdown-menu {
  display: block;
}

.custom-input {
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0.7rem !important;
  color: inherit;
  position: relative;
  padding: 0.4rem;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  box-shadow: 0 0 0 0 rgb(0 0 0 / 15%);
  transition: all 0.3s ease;
  width: 100%;
}

.vx-col-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.vx-col-item {
  flex: 1;
  min-width: 0;
  width: calc(33.333% - 2rem);
}

.vx-row-flex {
  .vx-col {
    flex: 1;
  }
}

.cb-padding {
  padding-bottom: 5cm !important;
}

.charges-header {
  div {
    min-width: 100px;
    gap: 24px;
  }
}
::v-deep .v-select .vs__dropdown-menu .vs__dropdown-option--highlight:hover,
::v-deep .v-select .vs__dropdown-menu .vs__dropdown-option--highlight {
  color: #fff !important;
  .vs-icon {
    color: #fff !important;
  }
}
::v-deep .vs__dropdown-option {
  span {
    max-width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
::v-deep .accessorial-selector span.vs__selected {
  max-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
