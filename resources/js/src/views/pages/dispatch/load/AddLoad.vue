<template>
  <VuePerfectScrollbar>
    <div class="w-full add-scroll">
      <div class="mt-6 w-full">
        <div class="flex items-center justify-between px-6">
          <h4>Add New Load</h4>
          <feather-icon
            icon="XIcon"
            @click="$emit('closeSidebar')"
            class="cursor-pointer"
          ></feather-icon>
        </div>
        <vs-divider class="mb-0"></vs-divider>
      </div>

      <div class="p-6 cb-padding">
        <!-- tab 1 content -->
        <div class="my-4 flex items-center">
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
              :reduce="(option) => option.value"
              :clearable="false"
              placeholer="Load Type"
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

          <div class="vx-col w-full mt-6" id="company-details">
            <div class="flex items-end justify-between space-x-2 md:space-x-4">
              <template v-if="!isUserBrokerOrShipper">
                <div class="w-8/12">
                  <label class="text-xs"
                    >Company Name
                    <field-required-sign v-if="userIsCarrier" />
                  </label>
                  <v-select
                    :options="companyOptions"
                    label="company_name"
                    :clearable="false"
                    :dir="$vs.rtl ? 'rtl' : 'ltr'"
                    v-model="selected_company"
                    @option:selected="onCustomerSelection()"
                    class="mb-4 md:mb-0"
                  />
                </div>

                <div class="w-4/12 ml-auto">
                  <vs-button
                    color="primary"
                    type="border"
                    icon-pack="feather"
                    icon="icon-plus"
                    @click.stop="toggleAddNewCustomerDialog()"
                  >
                    Add Customer
                  </vs-button>
                </div>
              </template>

              <div class="w-1/2">
                <label class="text-xs">Tag</label>
                <v-select
                  :options="tagOptions"
                  label="business_name"
                  :reduce="(option) => option.tag_id"
                  :clearable="true"
                  :dir="$vs.rtl ? 'rtl' : 'ltr'"
                  v-model="selected_tag"
                  @input="onTagChange(selected_tag)"
                  class="mb-4 md:mb-0"
                />
              </div>
            </div>
            <div class="flex justify-between space-x-2 md:space-x-4">
              <div class="w-8/12">
                <template v-if="!isUserBrokerOrShipper && selected_company">
                  <table class="mt-4">
                    <tr>
                      <div class="flex items-center">
                        <div>
                          <td class="font-semibold whitespace-no-wrap">
                            Account Payable Email
                          </td>
                          <td>{{ selected_company.billing_email }}</td>
                        </div>
                        <div
                          v-if="
                            selected_company.bill_to_code ||
                            roundTripButtonForSpecificCompany
                          "
                        >
                          <td class="font-semibold pt-4 whitespace-no-wrap">
                            <!-- Variable from accessMixin -->
                            {{
                              showBillToCodeAsJobCode ? 'Job #' : 'Bill To Code'
                            }}
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
                      </div>
                    </tr>
                  </table>
                </template>
              </div>
              <div class="w-4/12" v-if="customerLanes.length">
                <label class="text-xs">Customer Lanes</label>
                <v-select
                  :options="customerLanes"
                  :dir="$vs.rtl ? 'rtl' : 'ltr'"
                  @option:selected="onCustomerLaneSelection()"
                  v-model="selectedLane"
                  class="mb-4 md:mb-0"
                  label="label"
                  appendTo="body"
                >
                </v-select>
              </div>
            </div>
          </div>
        </div>

        <div class="vx-row">
          <div class="vx-col w-full">
            <vs-divider />
            <div class="vx-row vx-row-flex">
              <div class="vx-col">
                <label class="text-xs"
                  >Load #
                  <field-required-sign />
                </label>
                <vs-input
                  v-model="load_number"
                  :disabled="false"
                  type="number"
                  class="w-full disabled"
                />
              </div>

              <div class="vx-col">
                <label class="text-xs">Reference ID</label>
                <vs-input v-model="refrence_id" class="w-full" />
              </div>
              <div
                class="vx-col"
                v-if="showCompanyInternalReferenceForCompanies"
              >
                <label class="text-xs">Internal Reference</label>
                <vs-input v-model="companyInternalReference" class="w-full" />
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
                  v-model="collaboratorEmails"
                  @keypress.space.prevent
                ></vs-input>
                <p class="small text-xs">
                  Separate multiple emails with commas
                </p>
              </div>

              <div class="vx-col-container vx-col w-1/3">
                <div class="vx-col-item" v-if="showCostCode">
                  <label class="text-xs">Cost Code</label>
                  <v-select
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
                  <vs-input v-model="orderType" class="w-full" />
                </div>
                <div
                  class="vx-col-item"
                  v-if="isUserBrokerOrShipper || brokerModeForSpecificCompany"
                >
                  <label class="text-xs">Service Type</label>
                  <vs-input v-model="serviceType" class="w-full" />
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
                  <vs-input v-model="vessel" class="w-full" />
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
                  <flat-pickr class="w-full" v-model="arrivalDate" />
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
                  <flat-pickr class="w-full" v-model="lastFreeDate" />
                </div>
                <div class="vx-col w-1/6">
                  <label class="text-xs"> BOL Number </label>
                  <vs-input v-model="bolNumber" class="w-full" />
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
                      />
                    </div>
                    <div class="vx-col w-1/3">
                      <label class="text-xs"> Size </label>
                      <vs-input
                        v-model="pickedUpEquipment.size"
                        class="w-full"
                      />
                    </div>
                    <div class="vx-col w-1/3">
                      <label class="text-xs"> Type </label>
                      <vs-input
                        v-model="pickedUpEquipment.type"
                        class="w-full"
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
                      />
                    </div>
                    <div class="vx-col w-1/3">
                      <label class="text-xs"> Size </label>
                      <vs-input
                        v-model="droppedOffEquipment.size"
                        class="w-full"
                      />
                    </div>
                    <div class="vx-col w-1/3">
                      <label class="text-xs"> Type </label>
                      <vs-input
                        v-model="droppedOffEquipment.type"
                        class="w-full"
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
        <div
          class="vx-row mt-6 vs-con-loading__container"
          id="loading-rate-confirmation-file-upload"
        >
          <div v-if="rateConPdf.s3Url">
            <div class="pdf-preview-wrapper mt-8" style="width: 330px">
              <span class="preview-close-icon" @click="clearRateConPdf">
                <vs-icon icon="cancel" size="small" color="#dd3439"></vs-icon>
              </span>
              <iframe :src="rateConPdf.s3Url" class="pdf-preview-iframe">
                Oops! an error has occurred.
              </iframe>

              <div class="flex items-center space-x-3" style="width: 320px">
                <img
                  :src="pdfPlaceHolderImage"
                  :alt="rateConPdf.file.name"
                  style="width: 22px"
                />
                <p class="opacity-75 mr-3 whitespace-no-wrap truncate">
                  {{ rateConPdf.file.name }}
                </p>
              </div>
            </div>
          </div>
          <div class="vx-col w-full" v-else>
            <vs-upload
              text="Drag 'n' drop files here, or click to select file"
              class="w-full"
              ref="rate-confirmation-file-upload"
              :limit="1"
              :multiple="false"
              :single-upload="true"
              :show-upload-button="false"
              @change="handleOnRateConfirmationFileChange"
            />
          </div>
        </div>

        <div>
          <vs-checkbox v-model="rateConVisibleToDriver"
            >Rate con visible to driver?</vs-checkbox
          >
        </div>

        <vs-divider />

        <div class="my-4 mt-8">
          <div class="flex items-center">
            <b class="font-bold h4">{{
              isUserBrokerOrShipper
                ? 'Step 2: Shipper/Receiver'
                : 'Step 2: Shipper/Leg/Receiver'
            }}</b>
          </div>
          <div class="">
            <vs-divider />
          </div>
        </div>

        <!-- start tab 2 content -->
        <div class="w-full space-y-10">
          <draggable
            tag="ul"
            :list="shipperReceiverLegList"
            class="list-group"
            handle=".handle"
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
                    v-if="!isUserBrokerOrShipper && !isLegAdded"
                    color="primary"
                    type="border"
                    class="px-3"
                    style="font-size: 12px"
                    @click.stop="addNewLeg(idx)"
                  >
                    Add Leg
                  </vs-button>
                </div>
                <div v-if="!isUserBrokerOrShipper">
                  <vs-button
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
                  :showDragIcon="true"
                  :trailerOptions="trailer_options"
                  :dropHookTrailerVisible="!isUserBrokerOrShipper"
                  @remove="removeReceiver(idx)"
                  @saveAddress="addToSavedAddressConfirm('receiver', idx)"
                  @toggleMap="toggleMap(idx)"
                />
                <LegAddressCard
                  v-else-if="element.renderAddressType === 'leg'"
                  v-model="shipperReceiverLegList[idx]"
                  :showDragIcon="true"
                  :trailerOptions="trailer_options"
                  :dropHookTrailerVisible="!isUserBrokerOrShipper"
                  @remove="removeLeg(idx)"
                  @saveAddress="addToSavedAddressConfirm('leg', idx)"
                  @toggleMap="toggleMap(idx)"
                />
                <terminal-address-card
                  v-else-if="element.renderAddressType === 'terminal'"
                  v-model="shipperReceiverLegList[idx]"
                  :showDragIcon="true"
                  :trailerOptions="trailer_options"
                  :dropHookTrailerVisible="!isUserBrokerOrShipper"
                  @remove="removeTerminal(idx)"
                  @saveAddress="addToSavedAddressConfirm('terminal', idx)"
                  @toggleMap="toggleMap(idx)"
                />
                <ShipperAddressCard
                  v-else-if="element.renderAddressType === 'shipper'"
                  v-model="shipperReceiverLegList[idx]"
                  :showDragIcon="true"
                  :trailerOptions="trailer_options"
                  :dropHookTrailerVisible="!isUserBrokerOrShipper"
                  :hasT3Access="hasT3Access"
                  :t3Statuses="t3Statuses"
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
                v-if="!isUserBrokerOrShipper && !isLegAdded"
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
              v-if="!isUserBrokerOrShipper"
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
          <div class="my-4 mt-8">
            <b class="font-bold h4">Step 3: Load Charge</b>
            <vs-divider />
          </div>
          <div class="w-full space-y-6 mt-5">
            <div class="vx-row">
              <div class="vx-col w-3/4" v-if="showLoadChargesSection">
                <div class="flex items-center">
                  <h4 class="text-xl text-black">Charges</h4>
                </div>
                <vs-divider />
                <div class="px-6">
                  <div class="flex mt-3">
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
                            v-model.number="hauling_fee_rate"
                            :disabled="selected_hauling_fee === 'qty_var_rate'"
                          />
                        </vx-input-group>
                      </div>

                      <div class="w-3/12 text-lg text-right">
                        {{ hauling_fee_amount | currencyFormat }}
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
                            type="number"
                            step="any"
                            v-model.number="fuel_surcharge_rate"
                          />
                        </vx-input-group>
                      </div>

                      <div class="w-3/12 text-lg text-right">
                        {{ fuel_surcharge_amount | currencyFormat }}
                      </div>
                    </div>
                    <div
                      class="flex"
                      v-if="selected_fuel_surcharge === 'formulaPerMile'"
                    >
                      <div class="w-6/12">
                        <div class="flex justify-end items-center">
                          <label class="mr-2 text-sm"
                            >Formula: Per Mile (</label
                          >
                          <div class="flex flex-col">
                            <vs-input
                              type="number"
                              step="any"
                              style="width: 80px"
                              v-model.number="fuelSurchargeV1"
                              disabled="true"
                              @input="
                                getFuelPriceBasedOnShippingDate(
                                  'formulaPerMile'
                                )
                              "
                            />
                          </div>
                        </div>
                      </div>
                      <p class="m-2">-</p>
                      <vs-input
                        type="number"
                        step="any"
                        style="width: 80px"
                        v-model.number="fuelSurchargeV2"
                        @input="
                          getFuelPriceBasedOnShippingDate('formulaPerMile')
                        "
                      />
                      <p class="ml-2 mt-2 mr-2">) /</p>
                      <div>
                        <vs-input
                          data-vv-name="MPG"
                          type="number"
                          step="any"
                          style="width: 80px"
                          v-model.number="fuelSurchargeV3"
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
                                :reduce="(option) => option.id"
                                v-model="
                                  accessorial_fee.selected_accessorial_fee
                                "
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
                            v-model.number="accessorial_fee.amount"
                          />
                        </vx-input-group>
                      </div>

                      <div class="w-3/12 text-lg text-right">
                        {{ accessorial_fee.amount | currencyFormat }}
                      </div>
                    </div>

                    <!-- Add accessorial_fee button-->
                    <div class="pt-2 pb-4 flex gap-4 justify-between">
                      <div class="w-6/12">
                        <vs-button
                          color="primary"
                          type="border"
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
                                :reduce="
                                  (option) => option.id
                                "
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
                            v-model.number="accessorial_deduction.amount"
                          />
                          <!--                          @input="(value) => (accessorial_deduction.amount = value)"-->
                        </vx-input-group>
                      </div>

                      <div class="w-3/12 text-lg text-right">
                        {{ accessorial_deduction.amount | currencyFormat }}
                      </div>
                    </div>

                    <!-- Add accessorial_deduction button-->
                    <div class="pt-2 flex gap-4 justify-between">
                      <div class="w-6/12">
                        <vs-button
                          color="primary"
                          type="border"
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
                              v-model.number="discount"
                              class="w-32"
                            />
                          </div>
                        </div>

                        <vs-divider />
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

                        <vs-divider />
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
                      'text-xl opacity-75',
                      { 'mt-3': Object.keys(ratePredictions).length },
                    ]"
                  >
                    Miles
                  </h4>
                  <vs-divider />
                </div>

                <div>
                  <h5 class="mb-4 text-lg opacity-75">Calculated Using:</h5>
                  <ul class="flex space-x-4 mb-4">
                    <li>
                      <vs-radio
                        v-model="mile_type"
                        vs-value="manual"
                        vs-name="mileType"
                        >Manual</vs-radio
                      >
                    </li>
                    <li>
                      <vs-radio
                        v-model="mile_type"
                        vs-value="google_maps"
                        vs-name="mileType"
                        >Google Maps</vs-radio
                      >
                    </li>
                    <li>
                      <vs-radio
                        v-model="mile_type"
                        vs-name="mileType"
                        :disabled="!pcmiler.apiKey"
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
        <div class="my-4 mt-8">
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

            <div class="mt-5 vx-col w-full">
              <ul class="flex space-x-8">
                <li>
                  <vs-radio
                    v-model="load_truck_direction"
                    :vs-value="load_truck_direction_options.inbound.value"
                  >
                    {{ load_truck_direction_options.inbound.label }}
                  </vs-radio>
                </li>
                <li>
                  <vs-radio
                    v-model="load_truck_direction"
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
              <!-- <vs-divider /> -->
            </div>

            <div class="mt-5 vx-col w-full space-y-4">
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
                      class="w-full"
                    />
                  </div>
                </div>

                <div class="vx-col w-1/5">
                  <div>
                    <label class="text-sm opacity-75">Truck</label>
                    <v-select
                      :options="filteredTruckOptions"
                      label="truck_number"
                      :clearable="true"
                      v-model="assign_driver_and_equipment.selected_truck"
                      class="w-full"
                      @option:selected="onTruckChange(deIdx, 'assignSegment')"
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
                    <!-- :reduce="(option) => option.trailer_id" -->
                    <v-select
                      v-if="
                        !assign_driver_and_equipment.showExternalTrailerNumber
                      "
                      :options="filteredTrailerOptions"
                      label="trailer_number"
                      :clearable="true"
                      v-model="assign_driver_and_equipment.selected_trailer"
                      class="w-full"
                    />
                    <vs-input
                      v-model="
                        assign_driver_and_equipment.externalTrailerNumber
                      "
                      class="w-full"
                      v-else
                    />
                  </div>

                  <div class="text-sm mt-2">
                    <vs-checkbox
                      v-model="assign_driver_and_equipment.is_drop_trailer"
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
                    <vs-textarea v-model="assign_driver_and_equipment.notes" />
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
                      </div>
                    </span>
                    <vs-button
                      color="danger"
                      type="border"
                      class="px-3"
                      style="font-size: 11px"
                      @click="removeAssignDriverAndEquipment(deIdx)"
                      >Remove
                    </vs-button>
                  </div>
                </div>
              </div>

              <!-- <vs-divider /> -->

              <div>
                <vs-button
                  color="primary"
                  type="border"
                  @click="addNewAssignDriverAndEquipment"
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
              <h4 class="text-xl opacity-75">
                {{
                  legsList[legIdx + 1]
                    ? `From leg ${legIdx + 1} to leg ${legIdx + 2}`
                    : `From leg ${legIdx + 1} to receiver`
                }}
              </h4>
              <!-- <vs-divider /> -->
            </div>

            <div class="px-4 vx-col w-full space-y-4">
              <div
                class="vx-row"
                v-for="(assign_driver_and_equipment, deIdx) in paramLegs[
                  legIdx
                ]"
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
                      class="w-full"
                    />
                  </div>
                </div>

                <div class="vx-col w-1/5">
                  <div>
                    <label class="text-sm opacity-75">Truck</label>
                    <!-- :reduce="(option) => option.truck_id" -->
                    <v-select
                      :options="filteredTruckOptionsLeg[legIdx]"
                      label="truck_number"
                      :clearable="true"
                      v-model="assign_driver_and_equipment.selected_truck"
                      class="w-full"
                    />
                  </div>
                </div>
                <!-- @option:selected="onTruckChange(legIdx, 'legSegment')" -->

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
                    <!-- :reduce="(option) => option.trailer_id" -->
                    <v-select
                      v-if="
                        !assign_driver_and_equipment.showExternalTrailerNumber
                      "
                      :options="filteredTrailerOptionsLeg[legIdx]"
                      label="trailer_number"
                      :clearable="true"
                      v-model="assign_driver_and_equipment.selected_trailer"
                      class="w-full"
                    />
                    <vs-input
                      v-model="
                        assign_driver_and_equipment.externalTrailerNumber
                      "
                      class="w-full"
                      v-else
                    />
                  </div>

                  <div class="text-sm mt-2">
                    <vs-checkbox
                      v-model="assign_driver_and_equipment.is_drop_trailer"
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
                    <vs-textarea v-model="assign_driver_and_equipment.notes" />
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
                      @click="removeAssignDriverAndEquipmentLeg(deIdx, legIdx)"
                      >Remove
                    </vs-button>
                  </div>
                </div>
              </div>
              <!-- <vs-divider /> -->

              <div>
                <vs-button
                  color="primary"
                  type="border"
                  @click="addNewAssignDriverAndEquipmentLeg(legIdx)"
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
            @toggleAccessorialDeductionPrompt="
              toggleAccessorialDeductionPrompt
            "
          ></third-party-carrier>
          <!--:assignDriverAndEquipments="assign_driver_and_equipments"
          :allDriverTruckTrailerForLoadDriver="allDriverTruckTrailerForLoadDriver" -->
          <div class="vx-col w-1/4" v-if="isUserBrokerOrShipper">
            <div>
              <target-rate-card
                v-if="showRatePrediction"
                :ratePredictions="ratePredictions"
                :distance="Number(calculatedLoadMiles)"
              />
              <h4
                :class="[
                  'text-xl opacity-75',
                  { 'mt-3': Object.keys(ratePredictions).length },
                ]"
              >
                Miles
              </h4>
              <vs-divider />
            </div>

            <div>
              <h5 class="mb-4 text-lg opacity-75">Calculated Using:</h5>
              <ul class="flex space-x-4 mb-4">
                <li>
                  <vs-radio v-model="mile_type" vs-value="google_maps"
                    >Google Maps</vs-radio
                  >
                </li>
                <li>
                  <vs-radio
                    v-model="mile_type"
                    :disabled="!pcmiler.apiKey"
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

        <div class="mt-8 text-right">
          <vs-button color="primary" type="filled" @click="formSubmitted"
            >Submit</vs-button
          >
        </div>
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

      <!--
    **********************************
      PROMPT
    *********************************
    -->
      <AccessorialFeePrompt
        :active.sync="accessorialFeePrompt.isActive"
        @accessorial-fee::added="addedNewAccessorialFee"
        @accessorial-fee::updated="updatedAccessorialFee"
        :data="accessorialFeePrompt.data"
        @close="toggleAccessorialFeePrompt"
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
import GoogleMapMixin from '@/mixins/googleMapMixin';
import config from '@/config/constants.js';
import AccessorialDeductionPrompt from '../components/AccessorialDeductionPrompt';
import AccessorialFeePrompt from '../components/AccessorialFeePrompt';
import { mapGetters } from 'vuex';
import pdfPlaceHolder from '@assets/images/custom/pdf_images.png';
import { validateEmail, isValidInputValue } from '@/helpers/helper';
import ReceiverAddressCard from './components/ReceiverAddressCard';
import ShipperAddressCard from './components/shipperAddressCard';
import LegAddressCard from './components/LegAddressCard';
import Draggable from 'vuedraggable';
import dayjs from 'dayjs';
import ThirdPartyCarrier from './components/ThirdPartyCarrier.vue';
import TerminalAddressCard from './components/TerminalAddressCard.vue';
import IsMaintananceWarningDialog from './components/IsMaintananceWarningDialog.vue';
import loadHelperMixin from './components/loadHelperMixin';
import LoadNotes from './components/LoadNotes';
import {
  testCase1,
  testCase2,
  testCase3,
  testRawText,
} from './fakeApiResponses';
import TargetRateCard from './components/TargetRateCard.vue';
import { EventBus } from '@/helpers/eventBus';

export default {
  name: 'AddLoad',

  inject: ['scrollData'],

  mixins: [GoogleMapMixin, loadHelperMixin],

  components: {
    VuePerfectScrollbar,
    FormWizard,
    TabContent,
    AccessorialFeePrompt,
    AccessorialDeductionPrompt,
    ReceiverAddressCard,
    ShipperAddressCard,
    LegAddressCard,
    Draggable,
    ThirdPartyCarrier,
    TerminalAddressCard,
    LoadMapDialog: () => import('./components/LoadMapDialog'),
    IsMaintananceWarningDialog,
    LoadNotes,
    TargetRateCard,
    QuantityVariableRateForm: () =>
      import('./components/QuantityVariableRateForm.vue'),
  },
  props: {
    showLoadChargesSection: {
      type: Boolean,
      default: true,
    },
    addLoadData: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      notes: [],
      rateConVisibleToDriver: false,
      haulingFeeQty: 0,
      costCode: '',
      activePrompt: false,
      handleIsMaintenance: false,
      carrierType: 0,
      collaboratorEmails: '',
      pdfPlaceHolderImage: pdfPlaceHolder,
      // step 1
      selected_company: null,
      selected_tag: null,
      companyOptions: [],
      tagOptions: [],
      rateConPdf: {
        file: null,
        filename: '',
        s3Url: '',
      },
      selected_dispatcher: null,
      dispatcher_options: [],
      dispatcher_notes: '',
      load_number: '',
      refrence_id: '',
      direction: '',

      // step 2
      shippers_and_freight_details: [],
      receivers: [],
      paramLegs: [],

      // step 3
      selected_hauling_fee: 'flat_fee',
      hauling_fee_rate: 0,
      // hauling_fee_amount: 0,
      selected_fuel_surcharge: '',
      fuel_surcharge_rate: '',
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

      mile_type: 'google_maps',
      calculatedLoadMiles: 0,
      discount: 0,
      taskAutomation: {
        show_dispatcher_fee_on_invoice: false,
        show_factoring_fee_on_invoice: false,
      },
      factoringCompanies: [],

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
      validation: {
        fuelSurchargeHasError: false,
      },
      shipperReceiverLegList: [],
      // Google Maps and PC Miler cannot use the same checker because PC Miler puts longitude before latitude.
      carrier_accessorial_fees: [],
      carrier_accessorial_deduction_fees: [],
      customersList: [],
      orderType: null,
      serviceType: null,
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
      parsedBy: null,
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
    // add defaults value for Repeater
    this.getPublicWeeklyFuelPrices();
    if (this.addLoadData && Object.keys(this.addLoadData).length > 0) {
      const {
        carrierCompany,
        mutualAgreedRate,
        stops,
        sendRateConAndBolToCarrier,
      } = this.addLoadData;

      if (carrierCompany.carrierAsCustomerId) {
        this.thirdPartyCarrier.carrierAsCustomerId =
          carrierCompany.carrierAsCustomerId;
      }
      this.thirdPartyCarrier.charges.hauling_fee_rate = mutualAgreedRate;
      this.thirdPartyCarrier.sendRateConAndBolToCarrier =
        sendRateConAndBolToCarrier;

      this.$nextTick(() => {
        // Add stops to shipper and receiver
        stops.forEach((stop, idx) => {
          if (stop.type === 'shipper') {
            this.addNewShipperAndFreightDetail(null);
            this.shipperReceiverLegList[idx] = {
              ...this.shipperReceiverLegList[idx],
              address: stop.address,
              city: stop.city,
              state: stop.state,
              zip_code: stop.zipCode,
              latitude: Number(stop.latitude),
              longitude: Number(stop.longitude),
              shipper_note: stop.note,
              shipping_date: stop.date,
              shipping_time: stop.time,
              shipping_end_date: stop.endDate,
              shipping_end_time: stop.endTime,
            };
          } else if (stop.type === 'receiver') {
            this.addNewReceiver(null);
            this.shipperReceiverLegList[idx] = {
              ...this.shipperReceiverLegList[idx],
              address: stop.address,
              city: stop.city,
              state: stop.state,
              zip_code: stop.zipCode,
              latitude: Number(stop.latitude),
              longitude: Number(stop.longitude),
              receiver_note: stop.note,
              delivery_date: stop.date,
              delivery_time: stop.time,
              delivery_end_date: stop.endDate,
              delivery_end_time: stop.endTime,
            };
          }
        });
      });
    } else {
      this.addNewShipperAndFreightDetail(null);
      this.addNewReceiver(null);
    }
    this.addNewAccessorialFee();
    this.addNewAccessorialdeductionFee();
    this.addNewAssignDriverAndEquipment({
      is_final_mile: false,
      // is_notified: false
    });

    try {
      // this.$vs.loading()
      if (this.isUserBrokerOrShipper) {
        this.carrierType = 1;
      }

      await this.getAllCustomers();
      await this.getLoadUniqueId();
      await this.getAllDispatchers();
      await this.getTags();
      this.getTaskAutomationDetails();
      // this.getFactoringCompanies();
      this.factoringCompanies = this.allFactoringCompanies;
      this.getAllAccessorialFees();
      this.getAllAccessorialDeductionFees();
      this.getAllDriversTrucksTrailers();
      // this.getAllDrivers();
      // this.getAllTrucks();
      // this.getAllTrailers();
      if (!this.pcmiler.getKeyApiCalled) {
        await this.getPcmilerApiKey();
      } else if (this.pcmiler.apiKey) {
        this.mile_type = 'p';
        this.driverMileType = 'p';
      }

      if (!this.getUserLatLang) this.getDefaultMapCenter();

      if (this.hasT3Access) this.getT3Statuses();

      // Test code for pdf parser to load code.
      /*
      setTimeout(() => {
        this.rateConfirmationPDFExtract(null);
      }, 3000);
      */
    } catch (error) {
      this.closeSidebar();

      this.$vs.notify({
        color: 'danger',
        title: 'Error',
        text: error.response.data.message,
      });
    } finally {
      // this.$vs.loading.close()
    }
  },

  computed: {
    ...mapGetters('auth', [
      'userRole',
      'user',
      'getUserLatLang',
      'isUserBrokerOrShipper',
    ]),
    ...mapGetters('load', {
      allDriverTruckTrailerForLoadDriver: 'allDriverTruckTrailerForLoadDriver',
      getFuelPrice: 'getFuelPrice',
    }),
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
        return (
          rates * dispatcherDetails.user_details.commission_fractional
        ).toFixed(2);
      } else {
        return 0;
      }
    },
  },

  methods: {
    getPcmilerApiKey() {
      this.$store
        .dispatch('pcmiler/getPcmiler')
        .then((data) => {
          if (data.payload.apiKey) {
            this.mile_type = 'p';
            this.driverMileType = 'p';
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

    clearRateConPdf() {
      // This refers to the local file. file.name is its name.
      this.rateConPdf.file = null;
      this.rateConPdf.storageFilename = '';
      this.rateConPdf.s3Url = '';
    },
    onCustomerLaneSelection() {
      this.shipperReceiverLegList = [];
      if (this.selectedLane.distance != null) {
        this.mile_type = 'manual';
        this.calculatedLoadMiles = this.selectedLane.distance;
      }
      this.addNewShipperAndFreightDetail();
      this.addNewReceiver();

      if (this.selectedLane.origin) {
        this.updateAddressForCustomerLanes(0, this.selectedLane.origin);
      }
      if (this.selectedLane.destination) {
        this.updateAddressForCustomerLanes(1, this.selectedLane.destination);
      }

      if (this.selectedLane.rate !== null) {
        this.selected_hauling_fee = 'flat_fee';
        this.hauling_fee_rate = this.selectedLane.rate;
      }
      if (
        isValidInputValue(this.selectedLane.fuelSurchargeV2) &&
        isValidInputValue(this.selectedLane.fuelSurchargeV3)
      ) {
        this.selected_fuel_surcharge = 'formulaPerMile';
        this.fuelSurchargeV2 = Number(this.selectedLane.fuelSurchargeV2);
        this.fuelSurchargeV3 = Number(this.selectedLane.fuelSurchargeV3);
        this.getFuelPriceBasedOnShippingDate('formulaPerMile');
      } else if (isValidInputValue(this.selectedLane.fuelSurchargeRate)) {
        this.selected_fuel_surcharge = 'flat_fee';
        this.fuel_surcharge_rate = Number(this.selectedLane.fuelSurchargeRate);
      }
      if (this.selectedLane.direction) {
        this.load_truck_direction = this.selectedLane.direction;
      }
    },

    async onTagChange(tag_id) {
      this.getLoadUniqueId(tag_id);
    },

    async handleOnRateConfirmationFileChange(selectedFileName, files) {
      this.clearRateConPdf();
      const selectedFile = files[files.length - 1];

      if (!this.isRateConfirmationFileAllowed(selectedFile)) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Please select pdf file.',
        });

        return 0;
      }

      this.rateConPdf.file = selectedFile;
      // // Upload RateConfirmation to S3
      await this.uploadRateConfirmation(this.rateConPdf.file);
    },

    // check is file is allow or not
    isRateConfirmationFileAllowed(file) {
      const allowedFileExtensions = ['pdf'];

      const extension = file.name.split('.').pop().toLowerCase();

      return allowedFileExtensions.includes(extension);
    },

    /**
     * upload image to S3
     */
    async uploadRateConfirmation(file) {
      this.$vs.loading({
        container: '#loading-rate-confirmation-file-upload',
        scale: 0.6,
      });

      try {
        const { fileName, uploadUrl } = await this.generateFileNameAndUploadUrl(
          file.name
        );

        await this.$store.dispatch('uploadFileToS3ViaPresignedUrl', {
          url: uploadUrl,
          file: this.rateConPdf.file,
          extension: 'pdf',
        });

        this.rateConPdf.storageFilename = fileName;

        // get rate confirmation s3 file path
        const data = await this.$store.dispatch('load/getRateConfirmationS3', {
          file_name: this.rateConPdf.storageFilename,
        });
        this.rateConPdf.s3Url = data.payload.file_url;
        // PDF Extraction
        try {
          await this.rateConfirmationPDFExtract(data.payload);
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        this.clearRateConPdf();
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error,
        });
      } finally {
        this.$vs.loading.close(
          '#loading-rate-confirmation-file-upload > .con-vs-loading'
        );
      }
    },
    async generateFileNameAndUploadUrl(fileName) {
      const payload = {
        files: [
          {
            extension: fileName.split('.').pop().toLowerCase(),
          },
        ],
        type: 'rc',
      };
      const { payload: s3UrlInfo } = await this.$store.dispatch(
        'load/getUploadUrlPath',
        payload
      );
      const { storageFileName, url } = s3UrlInfo[0] || {};
      return {
        fileName: storageFileName,
        uploadUrl: url,
      };
    },
    /**
     *  PDF Extract
     */
    async rateConfirmationPDFExtract(file) {
      let data, rawText;
      if (process.env.NODE_ENV === 'development') {
        data = testCase1;
        rawText = testRawText;
      } else {
        let response = await this.$store.dispatch(
          'load/getRateConfirmationPdfExtractData',
          {
            pdf_file: file.file_url,
          }
        );
        data = response.data;
        rawText = response.rawText;
        if (data) {
          // this means that our python api could extract the load tender's data from the rate con
          this.parsedBy = 'python';
        }
      }

      if (!data && rawText && rawText.length > 30) {
        const chatGptResult = await this.$store.dispatch(
          'load/extractLoadTenderDataFromTxt',
          {
            rawText: rawText,
          }
        );
        if (chatGptResult && chatGptResult.payload) {
          data = chatGptResult.payload;

          if (data) {
            // this means that our chatGpt api could extract the load tender's data from the rate con
            this.parsedBy = 'chatGpt';
          }
        }
      }
      if (!data) {
        return 0;
      }
      // Testing dropTrailerId == 0 bug.
      // let data = JSON.parse('{"load_number":"128980","payer_info":"Green Renewable of Manchester","shipper_list":[{"name":"Green Renewable of Manchester, NY, Inc.","address":"155 State Street, Manchester, NY  14504","date":"7/19/2023","time":"","end_time":"","end_date":"","description":"Bulk Midnite Black Mulch Group C","phone":"585-924-3010","pickup_number":"128980","qty":80,"qty_unit":6}],"receiver_list":[{"name":"Gasparini Landscaping","address":"5072 Smoral Road, Camillus, NY 13031","date":"7/20/2023","time":"","end_time":"","end_date":"","note":"","person":"Gary","phone":"315-488-4261"}],"total_charge":""}');
      this.shipperReceiverLegList = [];
      const {
        load_number = this.load_number,
        payer_info = '',
        total_charge = '',
        receiver_list = [],
        shipper_list = [],
        extra_references = '',
      } = data;

      // format response
      this.refrence_id = load_number;
      const pdfCustomer = payer_info.replace(/[^0-9a-z ]/gi, '').toLowerCase();
      for (const oneCustomer of this.companyOptions) {
        if (
          oneCustomer.company_name
            .replace(/[^0-9a-z ]/gi, '')
            .toLowerCase()
            .includes(pdfCustomer)
        ) {
          this.selected_company = oneCustomer;
          break;
        }
      }

      this.selected_hauling_fee = this.hauling_fee_options[0].value;
      this.hauling_fee_rate = Number(total_charge.replace(/[^0-9.-]+/g, ''));
      // this.hauling_fee_amount = Number(total_charge.replace(/[^0-9.-]+/g, ''))

      const shippers = [];
      for (const shipperKey in shipper_list) {
        const shipper = shipper_list[shipperKey];

        let containerNumber = '';
        if (
          shipperKey == 0 &&
          extra_references &&
          extra_references.equipment_number
        ) {
          containerNumber = extra_references.equipment_number;
        }

        const { results } = await this.getGeocoderLatLng(shipper.address);
        const geocoderResult = results[0];
        const location = await geocoderResult.geometry.location;

        let address = geocoderResult.formatted_address
          .split(', ')
          .slice(0, -3)
          .join(', ');

        if (!address) {
          address = geocoderResult.formatted_address.split(', ')[0];
        }

        let cityArr = geocoderResult.address_components
          .filter((address) => address.types.includes('locality'))
          .map((address) => address.long_name);

        if (cityArr.length == 0) {
          cityArr = geocoderResult.address_components
            .filter((address) => address.types.includes('neighborhood'))
            .map((address) => address.long_name);
        }
        if (cityArr.length == 0) {
          cityArr = [''];
        }

        const city = cityArr[0];

        const state = geocoderResult.address_components
          .filter((address) =>
            address.types.includes('administrative_area_level_1')
          )
          .map((address) => address.short_name)[0];

        const zipcode = geocoderResult.address_components
          .filter((address) => address.types.includes('postal_code'))
          .map((address) => address.short_name)[0];
        if (shipper.end_date || shipper.end_time) {
          shippers.push({
            shipper_name: shipper.name,
            address,
            city,
            state,
            zip_code: zipcode,
            latitude: location.lat(),
            longitude: location.lng(),
            shipper_reference: shipper.pickup_number
              ? shipper.pickup_number
              : '',
            shipper_note: shipper.note ? shipper.note : '',
            shipping_date: this.formatDateHelper(shipper.date), //new Date(shipper.date),
            shipping_time: this.formatTimeHelper(shipper.time),
            shipping_end_date: shipper.end_date
              ? this.formatDateHelper(shipper.end_date) //new Date(shipper.end_date)
              : this.formatDateHelper(shipper.date), //new Date(shipper.date),
            shipping_end_time: this.formatTimeHelper(shipper.end_time),
            contact_person: '',
            contact_number: shipper.phone ? shipper.phone : '',
            freight_description: shipper.description ? shipper.description : '',
            freightEquipmentType: shipper.freightEquipmentType
              ? shipper.freightEquipmentType
              : '',
            freight_weight: shipper.weight ? shipper.weight : '',
            freight_qty: isValidInputValue(shipper.qty) ? shipper.qty : '',
            qtyRate: isValidInputValue(shipper.qtyRate)
              ? shipper.qtyRate
              : null,
            weight_unit: shipper.weight_unit ? shipper.weight_unit : '',
            qty_unit: shipper.qty_unit ? shipper.qty_unit : '',
            freight_length: '',
            freight_width: '',
            freight_height: '',
            container: containerNumber ? containerNumber : '',
            // Question: should we use "" or [] or null?
            additionalFreightDetails: '',
            dropTrailerId: '',
            hookTrailerId: '',
            dropTrailerType: '',
            hookTrailerType: '',
          });
        } else {
          shippers.push({
            shipper_name: shipper.name,
            address,
            city,
            state,
            zip_code: zipcode,
            latitude: location.lat(),
            longitude: location.lng(),
            shipper_reference: shipper.pickup_number
              ? shipper.pickup_number
              : '',
            shipper_note: shipper.note ? shipper.note : '',
            shipping_date: this.formatDateHelper(shipper.date), //new Date(shipper.date),
            shipping_time: this.formatTimeHelper(shipper.time),
            contact_person: '',
            contact_number: shipper.phone ? shipper.phone : '',
            freight_description: shipper.description ? shipper.description : '',
            freightEquipmentType: shipper.freightEquipmentType
              ? shipper.freightEquipmentType
              : '',
            freight_weight: shipper.weight ? shipper.weight : '',
            freight_qty: isValidInputValue(shipper.qty) ? shipper.qty : '',
            qtyRate: isValidInputValue(shipper.qtyRate)
              ? shipper.qtyRate
              : null,
            weight_unit: shipper.weight_unit ? shipper.weight_unit : '',
            qty_unit: shipper.qty_unit ? shipper.qty_unit : '',
            freight_length: '',
            freight_width: '',
            freight_height: '',
            container: containerNumber ? containerNumber : '',
            // Question: should we use "" or [] or null?
            additionalFreightDetails: [],
            dropTrailerId: '',
            hookTrailerId: '',
            dropTrailerType: '',
            hookTrailerType: '',
          });
        }
      }
      shippers.forEach((item, i) => {
        this.shipperReceiverLegList.push({
          ...item,
          renderAddressType: 'shipper',
          key: 'shipper_' + uuidv4(),
          containerHere: null,
        });
      });
      // this.shippers_and_freight_details = shippers;

      const receivers = [];
      for (const receiverKey in receiver_list) {
        const receiver = receiver_list[receiverKey];

        const { results } = await this.getGeocoderLatLng(receiver.address);
        const geocoderResult = results[0];
        const location = await geocoderResult.geometry.location;

        let address = geocoderResult.formatted_address
          .split(', ')
          .slice(0, -3)
          .join(', ');

        if (!address) {
          address = geocoderResult.formatted_address.split(', ')[0];
        }

        let cityArr = geocoderResult.address_components
          .filter((address) => address.types.includes('locality'))
          .map((address) => address.long_name);

        if (cityArr.length == 0) {
          cityArr = geocoderResult.address_components
            .filter((address) => address.types.includes('neighborhood'))
            .map((address) => address.long_name);
        }
        if (cityArr.length == 0) {
          cityArr = [''];
        }

        const city = cityArr[0];

        const state = geocoderResult.address_components
          .filter((address) =>
            address.types.includes('administrative_area_level_1')
          )
          .map((address) => address.short_name)[0];

        const zipcode = geocoderResult.address_components
          .filter((address) => address.types.includes('postal_code'))
          .map((address) => address.short_name)[0];

        if (receiver.end_date || receiver.end_time) {
          receivers.push({
            receiver_name: receiver.name,
            address,
            city,
            state,
            zip_code: zipcode,
            latitude: location.lat(),
            longitude: location.lng(),
            delivery_date: this.formatDateHelper(receiver.date), //new Date(receiver.date),
            delivery_time: this.formatTimeHelper(receiver.time),
            delivery_end_date: receiver.end_date
              ? this.formatDateHelper(receiver.end_date) //new Date(receiver.end_date)
              : this.formatDateHelper(receiver.date), //new Date(receiver.date),
            delivery_end_time: this.formatTimeHelper(receiver.end_time),
            contact_person: receiver.person ? receiver.person : '',
            contact_number: receiver.phone ? receiver.phone : '',
            receiver_reference: '',
            receiver_note: receiver.note ? receiver.note : '',
            dropTrailerId: '',
            hookTrailerId: '',
            dropTrailerType: '',
            hookTrailerType: '',
          });
        } else {
          receivers.push({
            receiver_name: receiver.name,
            address,
            city,
            state,
            zip_code: zipcode,
            latitude: location.lat(),
            longitude: location.lng(),
            delivery_date: this.formatDateHelper(receiver.date), //new Date(receiver.date),
            delivery_time: this.formatTimeHelper(receiver.time),
            contact_person: receiver.person ? receiver.person : '',
            contact_number: receiver.phone ? receiver.phone : '',
            receiver_reference: '',
            receiver_note: receiver.note ? receiver.note : '',
            dropTrailerId: '',
            hookTrailerId: '',
            dropTrailerType: '',
            hookTrailerType: '',
          });
        }
      }
      receivers.forEach((item) => {
        this.shipperReceiverLegList.push({
          ...item,
          renderAddressType: 'receiver',
          key: 'receiver_' + uuidv4(),
          containerHere: null,
        });
      });
    },

    formatDateHelper(oneDate) {
      if (oneDate) {
        let formattedResult = dayjs(oneDate).format('YYYY-MM-DD');
        if (formattedResult != 'Invalid Date') {
          return formattedResult;
        }
      }
      return '';
    },

    /*
    Some test cases:
    "12:00 am",
    "12:00am",
    "12:00 pm",
    "abc",
    "1700",
    "17:00",
    "0700",
    "700",
    "06:00  14:00",

    This link provides a comparison of all solutions on the stackoverflow page.
    https://stackoverflow.com/a/53738137/5759251
    http://jsfiddle.net/jLv16ydb/4/show

    After testing, I choose the Qwertie solution for our usage
    https://stackoverflow.com/a/50769298/5759251
    */
    formatTimeHelper(t) {
      // ?: means non-capturing group and ?! is zero-width negative lookahead
      var time = t.match(
        /^\s*(\d\d?)(?::?(\d\d))?(?::(\d\d))?(?!\d)(\.\d+)?\s*(pm?|am?)?/i
      );
      if (time) {
        var hour = parseInt(time[1]),
          pm = (time[5] || ' ')[0].toUpperCase();
        var min = time[2] ? parseInt(time[2]) : 0;
        var sec = time[3] ? parseInt(time[3]) : 0;
        var ms = time[4] ? parseFloat(time[4]) * 1000 : 0;
        if (
          (pm !== ' ' && (hour == 0 || hour > 12)) ||
          hour > 24 ||
          min >= 60 ||
          sec >= 60
        )
          return null;
        if (pm === 'A' && hour === 12) hour = 0;
        if (pm === 'P' && hour !== 12) hour += 12;
        if (hour === 24) hour = 0;
        var date = new Date('2023-04-29');
        var set = date.setHours;
        set.call(date, hour, min, sec, ms);
        return date.toTimeString().slice(0, 5);
      }
      return null;
    },

    /*
     * Scroll to Top Handler
     */
    scrollToTopHandler() {
      this.scrollData.scrollToTop = true;
    },

    // Form Submit
    async formSubmitted() {
      const dialog =
        await this.$refs.handleIsMaintenanceRef.handleTruckChange();
      if (dialog.length > 0 && !this.handleIsMaintenance) {
        this.activePrompt = true;
        return;
      }
      /* ToDo: Update shipper, receiver and leg payload calculation logic */

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
      shipperPayload = shipperPayload.map((shipper) => {
        const payload = { ...shipper };

        delete payload.shipping_date;
        delete payload.shipping_time;
        delete payload.shipping_end_date;
        delete payload.shipping_end_time;
        if (this.selected_hauling_fee === 'qty_var_rate') {
          payload.qtyRate = isValidInputValue(payload.qtyRate)
            ? Number(payload.qtyRate)
            : payload.qtyRate;
        } else {
          delete payload.qtyRate;
        }

        if (shipper.shipping_date != '') {
          payload.shipping_date = shipper.shipping_date;
        }

        if (shipper.shipping_time != '') {
          payload.shipping_time = shipper.shipping_time;
        }

        if (shipper.shipping_end_date != '') {
          payload.shipping_end_date = shipper.shipping_end_date;
          if (payload.shipping_end_date instanceof Date) {
            if (payload.shipping_end_date.getDate()) {
              payload.shipping_end_date = payload.shipping_end_date
                .toJSON()
                .slice(0, 10);
            } else {
              delete payload.shipping_end_date;
            }
          }
        }

        if (shipper.shipping_end_time != '') {
          payload.shipping_end_time = shipper.shipping_end_time;
        }

        const { additionalFreightDetails } = shipper;
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
        if (detailsMap.length) {
          payload.additionalFreightDetails = {
            details: detailsMap,
            totalQty,
            totalWeight,
          };
        } else {
          payload.additionalFreightDetails = null;
        }
        return payload;
      });

      legPayload = legPayload.map((leg, k) => {
        const payload = { ...leg };

        delete payload.date;
        delete payload.time;
        delete payload.end_date;
        delete payload.end_time;

        if (leg.date != '') {
          payload.date = leg.date;
        }

        if (leg.time != '') {
          payload.time = leg.time;
        }

        if (leg.end_date != '') {
          payload.end_date = leg.end_date;
          if (payload.end_date instanceof Date) {
            if (payload.end_date.getDate()) {
              payload.end_date = payload.end_date.toJSON().slice(0, 10);
            } else {
              delete payload.end_date;
            }
          }
        }

        if (leg.end_time != '') {
          payload.end_time = leg.end_time;
        }
        payload.leg_order = k + 1;
        return payload;
      });

      receiverPayload = receiverPayload.map((receiver) => {
        const payload = { ...receiver };

        delete payload.delivery_date;
        delete payload.delivery_time;
        delete payload.delivery_end_date;
        delete payload.delivery_end_time;

        if (receiver.delivery_date != '') {
          payload.delivery_date = receiver.delivery_date;
        }

        if (receiver.delivery_time != '') {
          payload.delivery_time = receiver.delivery_time;
        }

        if (receiver.delivery_end_date != '') {
          payload.delivery_end_date = receiver.delivery_end_date;
          if (payload.delivery_end_date instanceof Date) {
            if (payload.delivery_end_date.getDate()) {
              payload.delivery_end_date = payload.delivery_end_date
                .toJSON()
                .slice(0, 10);
            } else {
              delete payload.delivery_end_date;
            }
          }
        }

        if (receiver.delivery_end_time != '') {
          payload.delivery_end_time = receiver.delivery_end_time;
        }
        return payload;
      });

      const distanceCachePayload = {
        loadDistanceCache: this.loadDistanceCache,
      };

      let driverPayload = [];
      if (this.paramLegs.length == 0) {
        driverPayload = this.assign_driver_and_equipments.map((driver) => {
          return {
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
            to_leg: null,
            from_leg: null,
            loadedDistance: driver.loadedDistance,
            emptyDistance: driver.emptyDistance,
            chassis: driver.chassis,
            sendBolToDriver: driver.sendBolToDriver ? true : null,
          };
        });
        if (this.assign_driver_and_equipments.length > 0) {
          distanceCachePayload.noLegCache = this.noLegCache;
        }
      } else {
        driverPayload = this.assign_driver_and_equipments.map((driver, k) => {
          return {
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
            to_leg: 1,
            from_leg: null,
            loadedDistance: driver.loadedDistance,
            emptyDistance: driver.emptyDistance,
            chassis: driver.chassis,
            sendBolToDriver: driver.sendBolToDriver ? true : null,
          };
        });
        if (this.assign_driver_and_equipments.length > 0) {
          distanceCachePayload.toLegCache = this.toLegCache;
        }
      }

      for (let i = 0; i < this.paramLegs.length; ++i) {
        driverPayload.push(
          ...this.paramLegs[i].map((driver) => {
            return {
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
        rate_confirmation_file: this.rateConPdf.storageFilename,
        rateConOriginalFileName: this.rateConPdf.file
          ? this.rateConPdf.file.name
          : null,
        dispatcher_notes: this.dispatcher_notes,
        equipment_type: this.selected_equipment_type,
        trailer_type: this.selected_trailer_type,
        direction: this.load_truck_direction,
        collaboratorEmails: this.collaboratorEmails
          ? this.collaboratorEmails.split(',').map((element) => {
              return element.trim();
            })
          : [],
        // Newly added note show as the first, but should be lastly created.
        notes: this.loadNotes.reverse(),
        costCode: this.costCode,
        // Step 2
        shippers: shipperPayload,
        receivers: receiverPayload,
        load_legs: legPayload,
        multiPurposeStops: terminalPayload,
        thirdPartyCarrier: this.carrierType
          ? JSON.parse(JSON.stringify(this.thirdPartyCarrier))
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
        showRateConToDriver: this.rateConVisibleToDriver,
        parsedBy: this.parsedBy,
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
          ? this.fuelSurchargeV3.toFixed(3)
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

      payload.distanceCache = distanceCachePayload;
      payload.drivers = driverPayload;
      payload.direction = this.load_truck_direction;
      payload.billToCode = (this.selected_company || {}).bill_to_code || null;

      if (this.addLoadData && Object.keys(this.addLoadData).length > 0) {
        const { id: quoteResponseId, quoteId } = this.addLoadData;
        payload.quote = {
          id: quoteId,
          responseId: quoteResponseId,
        };
      }

      this.$vs.loading();

      try {
        await this.$store.dispatch('load/createLoad', payload);

        this.closeSidebar(true);

        // fixed: overlap with other loading (Datatable/Pipeline)
        this.$vs.loading.close();

        // Start Loading For Load Datatable/Pipeline
        await this.$store.dispatch('load/startLoading');
        EventBus.$emit(config.eventBuses.loadChanged);

        this.$vs.notify({
          color: 'primary',
          title: 'Load Added',
          text: 'Load added successfully.',
        });
      } catch (error) {
        this.$vs.loading.close();

        this.$vs.notify({
          title: 'Error',
          text: error.response.data.message,
          color: 'danger',
        });
      }
    },

    /*
     * API CALL
     */

    async getLoadUniqueId(tag_id = null) {
      if (tag_id) {
        const { payload } = await this.$store.dispatch(
          'load/getLoadUniqueId',
          tag_id
        );
        this.load_number = payload.load_unique_id;
      } else {
        const { payload } = await this.$store.dispatch('load/getLoadUniqueId');
        this.load_number = payload.load_unique_id;
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
};
</script>

<style lang="scss" scoped>
::v-deep {
  div.con-input-upload {
    width: 96% !important;
  }
}

::v-deep .miles-radio {
  .con-vs-radio {
    display: inline-flex;
    align-items: flex-start;
  }
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

.pdf-preview-iframe {
  width: 100%;
  height: 300px;
  border: none;
}

.pdf-preview-wrapper {
  border: 1px solid #d9dce0;
  border-radius: 10px;
  position: relative;
  padding: 0.75rem;
}

.preview-close-icon {
  position: absolute;
  right: -10px;
  z-index: 100;
  top: -12px;
  cursor: pointer;
}

.pdf-preview {
  width: 270px;
  height: 150px;
  overflow: hidden;
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
.align-items-baseline {
  align-items: baseline;
}
.add-scroll {
  // overflow: auto;
  // padding-bottom: 75px !important;
  max-height: 96vh;
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
::v-deep .vs__dropdown-option {
  span {
    max-width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
::v-deep .accessorial-selector span.vs__selected{
    max-width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
