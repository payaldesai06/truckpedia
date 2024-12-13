<template>
  <Dialog
    class="dialog"
    :visible="isDialogActive"
    :closable="false"
    :modal="true"
    :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
  >
    <!-- Header Section -->
    <template #header>
      <div class="w-full flex items-center justify-end">
        <!-- <vs-button color="primary" type="flat" @click="downloadPdf">Download</vs-button> -->
        <vs-icon
          class="cursor-pointer ml-2"
          icon="close"
          size="small"
          @click="onClose"
        />
      </div>
    </template>

    <!-- Main Content -->
    <template>
      <div
        style="
          max-width: 800px;
          margin: auto;
          font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        "
      >
        <!-- Header Section -->
        <table cellpadding="0" cellspacing="0" style="width: 100%">
          <tr style="width: 100%">
            <td width="25%">
              <!-- Logo -->
              <!-- Company Image / Logo Variable -->
              <div>
                <img
                  :src="
                    companyInfo && companyInfo.companyLogo
                      ? companyInfo.companyLogo
                      : ''
                  "
                  style="
                    object-fit: contain;
                    max-height: 100px;
                    max-width: 100px;
                  "
                />
              </div>
            </td>
            <td width="35%" style="text-align: center; vertical-align: middle">
              <table style="width: 100%">
                <!-- Rate -->
                <tr
                  style="
                    font-size: 16px;
                    font-weight: 600;
                    padding: 5px;
                    width: 100%;
                  "
                >
                  <td
                    width="100%;"
                    style="text-align: center; vertical-align: middle"
                  >
                    <span v-if="dialogMode === 'rateConfirmation'">
                      Rate Confirmation
                    </span>
                    <span v-else-if="dialogMode === 'bol'">
                      Bill of Landing
                    </span>
                  </td>
                </tr>
              </table>
            </td>
            <td
              width="35%"
              style="
                text-align: center;
                vertical-align: middle;
                padding-left: 25px;
              "
            >
              <table style="width: 100%">
                <!-- Date -->
                <tr width="100%">
                  <td width="20%;" style="margin-left: 10px">Date:</td>
                  <td
                    width="80%;"
                    style="
                      border-bottom: 1px solid #000;
                      margin-left: 5px;
                      font-weight: 400;
                      margin-bottom: -1px;
                    "
                  >
                    {{ currentDate }}
                    <!-- Date : Variable -->
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr style="color: #000; font-weight: 400; width: 100%">
            <td width="30%">
              <!-- Address, Contact -->
              <div style="font-size: 12px">
                <p v-if="companyInfo && companyInfo.companyName">
                  {{ companyInfo.companyName }}
                </p>
                <p v-if="companyInfo && companyInfo.addressLine1">
                  {{ companyInfo.addressLine1 }}
                </p>
                <!-- AddressLine 1 : Variable -->
                <p v-if="companyInfo && companyInfo.addressLine2">
                  {{ companyInfo.addressLine2 }}
                </p>
                <!-- AddressLine 3 : Variable -->
                <p v-if="false && companyInfo && companyInfo.businessUrl">
                  {{ companyInfo.businessUrl }}
                </p>
                <!-- Company Web Link : Variable -->
                <p v-if="companyInfo && companyInfo.businessEmail">
                  {{ companyInfo.businessEmail }}
                </p>
                <!-- Company Mail Id : Variable -->
              </div>
            </td>
            <td width="35%" style="height: fit-content">
              <!-- Carrier Info -->
              <div
                style="border: 1px solid #000; border-radius: 5px; padding: 5px"
              >
                <span style="font-size: 16px; font-weight: 600">
                  Carrier:
                </span>
                <p style="font-size: 12px">
                  <!-- Carrier Info : Variable -->
                  <span
                    style="display: block"
                    v-if="carrierInfo && carrierInfo.carrierName"
                  >
                    {{ carrierInfo.carrierName }}
                  </span>
                  <!-- Carrier Name : Sub Variable -->
                  <span
                    style="display: block"
                    v-if="carrierInfo && carrierInfo.carrierAddressLine1"
                  >
                    {{ carrierInfo.carrierAddressLine1 }}</span
                  >
                  <span
                    style="display: block"
                    v-if="carrierInfo && carrierInfo.carrierAddressLine2"
                  >
                    {{ carrierInfo.carrierAddressLine2 }}</span
                  >
                  <!-- Address line 1 : Sub Variable -->
                  <span
                    style="display: block"
                    v-if="carrierInfo && carrierInfo.carrierContact"
                    >{{ carrierInfo.carrierContact }}</span
                  >
                  <!-- Phone Number : Sub Variable -->
                  <span
                    style="display: block"
                    v-if="carrierInfo && carrierInfo.carrierEmail"
                    >{{ carrierInfo.carrierEmail }}</span
                  >
                  <!-- Email : Sub Variable -->
                </p>
              </div>
            </td>
            <td width="35%" style="padding-left: 25px">
              <!-- Details -->
              <table
                cellpadding="0"
                cellspacing="0"
                border="1"
                style="
                  border-radius: 5px;
                  border-collapse: separate;
                  width: 100%;
                  overflow: hidden;
                  table-layout: fixed;
                "
              >
                <tr>
                  <td style="font-size: 16px; font-weight: 600; padding: 2px">
                    Load
                  </td>
                  <td style="padding-left: 10px">
                    {{ loadNumber ? `${loadNumber}` : '' }}
                  </td>
                  <!-- Load Number : Variable -->
                </tr>
                <tr>
                  <td style="font-size: 16px; font-weight: 600; padding: 2px">
                    Reference
                  </td>
                  <td style="padding-left: 10px">
                    {{ referenceNumber || '' }}
                  </td>
                </tr>
                <tr>
                  <td style="font-size: 16px; font-weight: 600; padding: 2px">
                    Order Type
                  </td>
                  <td style="padding-left: 10px">{{ orderType || '' }}</td>
                  <!-- Order Type - Import, Export, or Reposition : Variable -->
                </tr>
                <tr>
                  <td style="font-size: 16px; font-weight: 600; padding: 2px">
                    Service Type
                  </td>
                  <td style="padding-left: 10px">{{ serviceType || '' }}</td>
                  <!-- Service Type - Live, No touch, Drop & Hook : Variable -->
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- Body Section -->
        <div style="color: #000; font-weight: 400; margin-top: 10px">
          <!-- Service Notice -->
          <div
            style="
              border-right: 1px solid #000;
              border-top: 1px solid #000;
              border-left: 1px solid #000;
              border-radius: 5px;
              padding: 5px;
            "
          >
            <p style="font-size: 16px; font-weight: 600">Service Notice:</p>
            <p style="font-size: 14px">
              <!-- Service Notice : Variable -->
              <span v-if="serviceNoticeNoPodForTopTier"
                >All invoices and accessorial charge requests must be submitted
                to
              </span>
              <span v-else
                >All PODs, invoices, and accessorial charge requests must be
                submitted to
              </span>
              <b v-if="companyInfo && companyInfo.companyName">{{
                companyInfo.companyName
              }}</b>
              within 24 hours after completing a job.
              <span v-if="onlyVisibleServiceNoticeForHiway">
                For payment, the driver is required to submit pictures after
                loading at the shipper with the carrier name on the side of the
                truck and have the load visible.
              </span>
            </p>
          </div>
        </div>

        <!-- Pickups and Deliveries  -->
        <table
          style="
            width: 100%;
            border: 1px solid #000;
            border-bottom: none;
            border-radius: 5px;
          "
          cellpadding="0"
          cellspacing="0"
        >
          <tr
            style="
              color: rgb(0, 0, 0);
              width: 100%;
              display: flex;
              flex-direction: row;
            "
          >
            <!-- Pickups  -->
            <td
              style="
                display: flex;
                flex-direction: column;
                width: 50%;
                border-right: 1px solid #000;
              "
            >
              <p
                style="
                  font-size: 16px;
                  font-weight: 600;
                  padding: 5px 5px 0 5px;
                  border-bottom: 1px solid #000;
                "
              >
                Pickup(s):
              </p>
            </td>
            <!-- Deliveries -->
            <td style="display: flex; flex-direction: column; width: 50%">
              <p
                style="
                  font-size: 16px;
                  font-weight: 600;
                  padding: 5px 5px 0 5px;
                  border-bottom: 1px solid #000;
                "
              >
                Delivery(ies):
              </p>
            </td>
          </tr>
          <template v-if="checkRateConType">
            <tr
              style="
                color: rgb(0, 0, 0);
                width: 100%;
                display: flex;
                flex-direction: row;
              "
            >
              <!-- Pickups  -->
              <td
                style="
                  display: flex;
                  flex-direction: column;
                  width: 50%;
                  border-right: 1px solid #000;
                  border-bottom: 1px solid #000;
                "
              >
                <ol style="list-style: auto; padding-left: 25px">
                  <li
                    v-for="(item, index) in shippersList"
                    :key="`shipper_${index}`"
                    style="padding: 10px 5px"
                  >
                    <div v-if="item">
                      <span style="display: block">{{
                        item.shipper_name +
                        ', ' +
                        item.address +
                        ', ' +
                        item.city +
                        ', ' +
                        item.state +
                        ' ' +
                        item.zip_code
                      }}</span>
                      <span style="display: block" v-if="item.dateTimeString"
                        >Date: {{ item.dateTimeString }}</span
                      >
                      <span
                        style="display: block"
                        v-if="item.contact_number || item.contact_person"
                      >
                        <span style="display: block" v-if="item.contact_person">
                          Contact: {{ item.contact_person }}
                        </span>
                        <span v-if="item.contact_number">
                          Phone: {{ item.contact_number }}
                        </span>
                      </span>
                      <span style="display: block">
                        <span v-if="item.freight_weight" style="display: block">
                          Weight: {{ item.freight_weight }}
                          <span v-if="item.weight_unit">
                            {{
                              Object.keys(weight_units).find(
                                (k) => weight_units[k] === item.weight_unit
                              )
                            }}
                          </span>
                        </span>
                        <span v-if="item.freight_qty">
                          Qty: {{ item.freight_qty }}
                          <span v-if="item.qty_unit">
                            {{
                              Object.keys(qty_units).find(
                                (k) => qty_units[k] === item.qty_unit
                              )
                            }}
                          </span>
                        </span>
                        <span style="display: block">
                          <span v-if="item.freightEquipmentType">
                            Equipment #: {{ item.freightEquipmentType }}
                          </span>
                          <span
                            v-if="item.freight_description"
                            :class="{ 'ml-3': item.freightEquipmentType }"
                          >
                            Description: {{ item.freight_description }}
                          </span>
                        </span>
                      </span>
                      <span
                        v-if="
                          item.additionalFreightDetails &&
                          item.additionalFreightDetails.details
                        "
                      >
                        <span
                          v-for="(detail, index) in item
                            .additionalFreightDetails.details"
                          :key="`detail_${index}`"
                        >
                          <span
                            style="display: block"
                            v-if="
                              detail.freightEquipmentType ||
                              detail.freight_description ||
                              detail.freight_weight ||
                              detail.freight_qty
                            "
                          >
                            <span v-if="detail.freight_weight">
                              Weight: {{ detail.freight_weight }}
                              <span v-if="detail.weight_unit">
                                {{
                                  Object.keys(weight_units).find(
                                    (k) =>
                                      weight_units[k] === detail.weight_unit
                                  )
                                }}
                              </span>
                            </span>
                            <span
                              v-if="detail.freight_qty"
                              :class="{ 'ml-3': detail.freight_weight }"
                            >
                              Qty: {{ detail.freight_qty }}
                              <span v-if="detail.qty_unit">
                                {{
                                  Object.keys(qty_units).find(
                                    (k) => qty_units[k] === detail.qty_unit
                                  )
                                }}
                              </span>
                            </span>
                            <span style="display: block">
                              <span v-if="detail.freightEquipmentType">
                                Equipment #: {{ detail.freightEquipmentType }}
                              </span>
                              <span
                                v-if="detail.freight_description"
                                class="ml-3"
                              >
                                Description: {{ detail.freight_description }}
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                      <span
                        style="display: block"
                        v-if="item.shipper_reference || item.container"
                      >
                        <span v-if="item.shipper_reference">
                          PU#: {{ item.shipper_reference }}
                        </span>
                        <span v-if="item.container" class="ml-3">
                          Container #: {{ item.container }}
                        </span>
                      </span>
                      <span style="display: block" v-if="item.temperature">
                        Temperature: {{ item.temperature }}
                      </span>
                      <span style="display: block" v-if="item.shipper_note">
                        Note: {{ item.shipper_note }}
                      </span>
                    </div>
                  </li>
                </ol>
              </td>
              <!-- Deliveries -->
              <td
                style="
                  display: flex;
                  flex-direction: column;
                  width: 50%;
                  border-bottom: 1px solid #000;
                "
              >
                <ol style="list-style: auto; padding-left: 25px">
                  <li
                    style="padding: 10px 5px"
                    :key="`receiver_${index}`"
                    v-for="(item, index) in receiversList"
                  >
                    <div v-if="item">
                      <span style="display: block">{{
                        item.receiver_name +
                        ', ' +
                        item.address +
                        ', ' +
                        item.city +
                        ', ' +
                        item.state +
                        ' ' +
                        item.zip_code
                      }}</span>
                      <span style="display: block" v-if="item.dateTimeString">
                        Date: {{ item.dateTimeString }}
                      </span>
                      <span
                        style="display: block"
                        v-if="item.contact_number || item.contact_person"
                      >
                        <span style="display: block" v-if="item.contact_person">
                          Contact: {{ item.contact_person }}
                        </span>
                        <span v-if="item.contact_number">
                          Phone: {{ item.contact_number }}
                        </span>
                      </span>
                      <span
                        style="display: block"
                        v-if="item.receiver_reference"
                      >
                        Delivery #: {{ item.receiver_reference }}
                      </span>
                      <span style="display: block" v-if="item.receiver_note">
                        Note: {{ item.receiver_note }}
                      </span>
                    </div>
                  </li>
                </ol>
              </td>
            </tr>
          </template>
          <template v-else>
            <tr
              v-for="index in highestLengthFromShipperOrReceiver"
              :key="`pickup_delivery${index}`"
              style="
                color: rgb(0, 0, 0);
                width: 100%;
                display: flex;
                flex-direction: row;
              "
            >
              <!-- Pickups  -->
              <td
                style="
                  display: flex;
                  flex-direction: column;
                  width: 50%;
                  border-right: 1px solid #000;
                  border-bottom: 1px solid #000;
                "
              >
                <ol style="list-style: none">
                  <li style="padding: 10px 5px" :key="`shipper_${index}`">
                    <div v-if="shippersList[index - 1]">
                      <span style="display: block">{{
                        shippersList[index - 1].shipper_name +
                        ', ' +
                        shippersList[index - 1].address +
                        ', ' +
                        shippersList[index - 1].city +
                        ', ' +
                        shippersList[index - 1].state +
                        ' ' +
                        shippersList[index - 1].zip_code
                      }}</span>
                      <span
                        style="display: block"
                        v-if="shippersList[index - 1].dateTimeString"
                        >Date:
                        {{ shippersList[index - 1].dateTimeString }}</span
                      >
                      <span
                        style="display: block"
                        v-if="
                          shippersList[index - 1].contact_number ||
                          shippersList[index - 1].contact_person
                        "
                      >
                        <span v-if="shippersList[index - 1].contact_person">
                          Contact:
                          {{ shippersList[index - 1].contact_person }}
                        </span>
                        <span
                          v-if="shippersList[index - 1].contact_number"
                          class="ml-3"
                        >
                          Phone: {{ shippersList[index - 1].contact_number }}
                        </span>
                      </span>
                      <span
                        style="display: block"
                        v-if="
                          (shippersList[index - 1].freightEquipmentType ||
                            shippersList[index - 1].freight_description ||
                            shippersList[index - 1].freight_weight ||
                            shippersList[index - 1].freight_qty) &&
                          !checkRateConType
                        "
                      >
                        <span v-if="shippersList[index - 1].freight_weight">
                          Weight: {{ shippersList[index - 1].freight_weight }}
                          <span v-if="shippersList[index - 1].weight_unit">
                            {{
                              Object.keys(weight_units).find(
                                (k) =>
                                  weight_units[k] ===
                                  shippersList[index - 1].weight_unit
                              )
                            }}
                          </span>
                        </span>
                        <span
                          v-if="shippersList[index - 1].freight_qty"
                          class="ml-3"
                        >
                          Qty: {{ shippersList[index - 1].freight_qty }}
                          <span v-if="shippersList[index - 1].qty_unit">
                            {{
                              Object.keys(qty_units).find(
                                (k) =>
                                  qty_units[k] ===
                                  shippersList[index - 1].qty_unit
                              )
                            }}
                          </span>
                        </span>
                        <span style="display: block">
                          <span
                            v-if="shippersList[index - 1].freightEquipmentType"
                          >
                            Equipment #:
                            {{ shippersList[index - 1].freightEquipmentType }}
                          </span>
                          <span
                            v-if="shippersList[index - 1].freight_description"
                            class="ml-3"
                          >
                            Description:
                            {{ shippersList[index - 1].freight_description }}
                          </span>
                        </span>
                      </span>
                      <span
                        v-if="
                          shippersList[index - 1].additionalFreightDetails &&
                          shippersList[index - 1].additionalFreightDetails
                            .details &&
                          !checkRateConType
                        "
                      >
                        <span
                          v-for="(detail, index) in shippersList[index - 1]
                            .additionalFreightDetails.details"
                          :key="`detail_${index}`"
                        >
                          <span
                            style="display: block"
                            v-if="
                              detail.freightEquipmentType ||
                              detail.freight_description ||
                              detail.freight_weight ||
                              detail.freight_qty
                            "
                          >
                            <span v-if="detail.freight_weight">
                              Weight: {{ detail.freight_weight }}
                              <span v-if="detail.weight_unit">
                                {{
                                  Object.keys(weight_units).find(
                                    (k) =>
                                      weight_units[k] === detail.weight_unit
                                  )
                                }}
                              </span>
                            </span>
                            <span v-if="detail.freight_qty" class="ml-3">
                              Qty: {{ detail.freight_qty }}
                              <span v-if="detail.qty_unit">
                                {{
                                  Object.keys(qty_units).find(
                                    (k) => qty_units[k] === detail.qty_unit
                                  )
                                }}
                              </span>
                            </span>
                            <span style="display: block">
                              <span v-if="detail.freightEquipmentType">
                                Equipment #: {{ detail.freightEquipmentType }}
                              </span>
                              <span>
                                Description:
                                <span
                                  v-if="detail.freight_description"
                                  class="ml-3"
                                  >{{ detail.freight_description }}</span
                                >
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                      <span
                        style="display: block"
                        v-if="
                          (shippersList[index - 1].shipper_reference ||
                            shippersList[index - 1].container) &&
                          !checkRateConType
                        "
                      >
                        <span v-if="shippersList[index - 1].shipper_reference">
                          PU#: {{ shippersList[index - 1].shipper_reference }}
                        </span>
                        <span
                          v-if="shippersList[index - 1].container"
                          class="ml-3"
                        >
                          Container #: {{ shippersList[index - 1].container }}
                        </span>
                      </span>
                      <span
                        style="display: block"
                        v-if="shippersList[index - 1].temperature"
                      >
                        Temperature: {{ shippersList[index - 1].temperature }}
                      </span>
                      <span
                        style="display: block"
                        v-if="shippersList[index - 1].shipper_note"
                      >
                        Note: {{ shippersList[index - 1].shipper_note }}
                      </span>
                    </div>
                  </li>
                </ol>
              </td>
              <!-- Deliveries -->
              <td
                style="
                  display: flex;
                  flex-direction: column;
                  width: 50%;
                  border-bottom: 1px solid #000;
                "
              >
                <ol style="list-style: none">
                  <li style="padding: 10px 5px" :key="`receiver_${index}`">
                    <div v-if="receiversList[index - 1]">
                      <span style="display: block">{{
                        receiversList[index - 1].receiver_name +
                        ', ' +
                        receiversList[index - 1].address +
                        ', ' +
                        receiversList[index - 1].city +
                        ', ' +
                        receiversList[index - 1].state +
                        ' ' +
                        receiversList[index - 1].zip_code
                      }}</span>
                      <span
                        style="display: block"
                        v-if="receiversList[index - 1].dateTimeString"
                      >
                        Date:
                        {{ receiversList[index - 1].dateTimeString }}
                      </span>
                      <span
                        style="display: block"
                        v-if="
                          receiversList[index - 1].contact_number ||
                          receiversList[index - 1].contact_person
                        "
                      >
                        <span
                          style="display: block"
                          v-if="receiversList[index - 1].contact_person"
                        >
                          Contact: {{ receiversList[index - 1].contact_person }}
                        </span>
                        <span v-if="receiversList[index - 1].contact_number">
                          Phone: {{ receiversList[index - 1].contact_number }}
                        </span>
                      </span>
                      <span
                        style="display: block"
                        v-if="receiversList[index - 1].receiver_reference"
                      >
                        Delivery #:
                        {{ receiversList[index - 1].receiver_reference }}
                      </span>
                      <span
                        style="display: block"
                        v-if="receiversList[index - 1].receiver_note"
                      >
                        Note: {{ receiversList[index - 1].receiver_note }}
                      </span>
                    </div>
                  </li>
                </ol>
              </td>
            </tr>
          </template>
        </table>

        <!-- Body Block  -->
        <section v-if="checkRateConType">
          <!-- Row 1 : 3 Block  -->
          <table
            style="
              border: 1px solid #000;
              border-top: 0.5px solid #000;
              border-bottom: none;
              border-top-left-radius: 5px;
              border-top-right-radius: 5px;
              min-height: 65px;
              color: rgb(0, 0, 0);
              width: 100%;
            "
            cellpadding="0"
            cellspacing="0"
            border="0"
          >
            <tr>
              <!-- P. O. or P/U Number (s)  -->
              <th
                width="50%"
                style="padding: 5px; border-right: 1px solid #000"
              >
                <p style="font-size: 16px; font-weight: 600">
                  P. O. or P/U Number (s)
                </p>
              </th>
              <!-- Count -->
              <th
                width="50%"
                style="padding: 5px; border-right: 1px solid #000"
              >
                <p style="font-size: 16px; font-weight: 600">Count</p>
              </th>
            </tr>
            <tr>
              <!-- P. O. or P/U Number (s)  -->
              <td
                width="50%"
                style="
                  padding: 5px;
                  border-right: 1px solid #000;
                  text-align: left;
                  vertical-align: middle;
                "
              >
                <p>
                  {{ interModalPOPsuNumberList }}
                  <!-- P. O. or P/U Number (s) : Variable  -->
                </p>
              </td>
              <!-- Count -->
              <td
                width="50%"
                style="
                  padding: 5px;
                  border-right: 1px solid #000;
                  text-align: left;
                  vertical-align: middle;
                "
              >
                <p>
                  {{ interModalCountsList }}
                  <!-- Count : Variable  -->
                </p>
              </td>
            </tr>
          </table>

          <!-- Row 2 : 3 Block  -->
          <table
            style="
              border: 1px solid #000;
              min-height: 65px;
              border-bottom: none;
              color: rgb(0, 0, 0);
              width: 100%;
            "
            cellpadding="0"
            cellspacing="0"
            border="0"
          >
            <tr>
              <!-- Weight  -->
              <th
                width="50%"
                style="padding: 5px; border-right: 1px solid #000"
              >
                <p style="font-size: 16px; font-weight: 600">Weight</p>
              </th>
              <!-- Temperature -->
              <th
                width="50%"
                style="padding: 5px; border-right: 1px solid #000"
              >
                <p style="font-size: 16px; font-weight: 600">Temperature</p>
              </th>
            </tr>
            <tr>
              <!-- Loaded Weight  -->
              <td
                width="50%"
                style="
                  padding: 5px;
                  border-right: 1px solid #000;
                  text-align: left;
                  vertical-align: middle;
                "
              >
                <p>
                  {{ interModalLoadedWeightsList }}
                  <!-- Loaded Weight : Variable  -->
                </p>
              </td>
              <!-- Temperature -->
              <td
                width="50%"
                style="
                  padding: 5px;
                  border-right: 1px solid #000;
                  text-align: left;
                  vertical-align: middle;
                "
              >
                <p>
                  {{ interModalTemperaturesList }}
                  <!-- Temperature : Variable  -->
                </p>
              </td>
            </tr>
          </table>

          <!-- Row 3 : 4 Block  -->
          <table
            style="
              border: 1px solid #000;
              min-height: 65px;
              border-bottom: none;
              color: rgb(0, 0, 0);
              width: 100%;
            "
            cellpadding="0"
            cellspacing="0"
            border="0"
          >
            <tr>
              <!-- Vessel  -->
              <th
                width="25%"
                style="padding: 5px; border-right: 1px solid #000"
              >
                <p style="font-size: 16px; font-weight: 600">Vessel</p>
              </th>
              <!-- Arrival Date -->
              <th
                width="25%"
                style="padding: 5px; border-right: 1px solid #000"
              >
                <p style="font-size: 16px; font-weight: 600">Arrival Date</p>
              </th>
              <!-- Last Free Day -->
              <th
                width="25%"
                style="padding: 5px; border-right: 1px solid #000"
              >
                <p style="font-size: 16px; font-weight: 600">Last Free Day</p>
              </th>
              <!-- BOL Number -->
              <th width="25%" style="padding: 5px">
                <p style="font-size: 16px; font-weight: 600">BOL Number</p>
              </th>
            </tr>
            <tr>
              <!-- Vessel  -->
              <td
                style="
                  padding: 5px;
                  min-width: 25%;
                  border-right: 1px solid #000;
                  text-align: left;
                  vertical-align: middle;
                "
              >
                <p>
                  {{ interModalBodyContent.vessel }}
                  <!-- Vessel : Variable  -->
                </p>
              </td>
              <!-- Arrival Date -->
              <td
                style="
                  padding: 5px;
                  min-width: 25%;
                  border-right: 1px solid #000;
                  text-align: left;
                  vertical-align: middle;
                "
              >
                <p>
                  {{
                    ($dayjs(interModalBodyContent.arrivalDate).isValid() &&
                      $dayjs(interModalBodyContent.arrivalDate).format(
                        'MM/DD/YYYY'
                      )) ||
                    ''
                  }}
                  <!-- Arrival Date : Variable  -->
                </p>
              </td>
              <!-- Last Free Day -->
              <td
                style="
                  padding: 5px;
                  min-width: 25%;
                  border-right: 1px solid #000;
                  text-align: left;
                  vertical-align: middle;
                "
              >
                <p>
                  {{
                    ($dayjs(interModalBodyContent.lastFreeDate).isValid() &&
                      $dayjs(interModalBodyContent.lastFreeDate).format(
                        'MM/DD/YYYY'
                      )) ||
                    ''
                  }}
                  <!-- Last Free Day : Variable  -->
                </p>
              </td>
              <!-- BOL Number -->
              <td
                style="
                  padding: 5px;
                  min-width: 25%;
                  text-align: left;
                  vertical-align: middle;
                "
              >
                <p>
                  {{ interModalBodyContent.bolNumber }}
                  <!-- BOL Number : Variable  -->
                </p>
              </td>
            </tr>
          </table>

          <!-- Row 4 : Picked up and dropped of equipment  -->
          <table
            style="
              border: 1px solid #000;
              border-bottom: 0.5px solid #000;
              min-height: 90px;
              border-bottom-left-radius: 5px;
              border-bottom-right-radius: 5px;
              border-bottom: none;
              color: rgb(0, 0, 0);
              width: 100%;
            "
            cellpadding="0"
            cellspacing="0"
            border="0"
          >
            <tr style="width: 100%">
              <!-- Picked Up Equipment  -->
              <td width="50%" style="border-right: 1px solid #000">
                <table style="width: 100%">
                  <tr>
                    <th
                      width="100%"
                      style="
                        font-size: 16px;
                        font-weight: 600;
                        margin-left: 3px;
                        padding-top: 0px;
                        padding-bottom: 0px;
                      "
                    >
                      Picked Up Equipment
                    </th>
                  </tr>
                </table>
                <table style="width: 100%; margin-top: 3px">
                  <tr>
                    <th
                      width="33.33%"
                      style="text-align: center; vertical-align: middle"
                    >
                      <p style="font-size: 15px; font-weight: 600">Number</p>
                    </th>
                    <th
                      width="33.33%"
                      style="text-align: center; vertical-align: middle"
                    >
                      <p style="font-size: 15px; font-weight: 600">Size</p>
                    </th>
                    <th
                      width="33.33%"
                      style="text-align: center; vertical-align: middle"
                    >
                      <p style="font-size: 15px; font-weight: 600">Type</p>
                    </th>
                  </tr>
                </table>
                <table style="width: 100%; margin-top: 1px">
                  <tr>
                    <td
                      width="33.33%"
                      style="text-align: center; vertical-align: middle"
                    >
                      <p>
                        <!-- Number : Variable  -->
                        {{ interModalBodyContent.pickedUpEquipment.number }}
                      </p>
                    </td>
                    <td
                      width="33.33%"
                      style="text-align: center; vertical-align: middle"
                    >
                      <p>
                        <!-- Size : Variable  -->
                        {{ interModalBodyContent.pickedUpEquipment.size }}
                      </p>
                    </td>
                    <td
                      width="33.33%"
                      style="text-align: center; vertical-align: middle"
                    >
                      <p>
                        <!-- Type : Variable  -->
                        {{ interModalBodyContent.pickedUpEquipment.type }}
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
              <!-- Dropped Off Equipment  -->
              <td width="50%" style="border-right: 1px solid #000">
                <table style="width: 100%">
                  <tr>
                    <th
                      width="100%"
                      style="
                        font-size: 16px;
                        font-weight: 600;
                        margin-left: 3px;
                        padding-top: 0px;
                        padding-bottom: 0px;
                      "
                    >
                      Dropped Off Equipment
                    </th>
                  </tr>
                </table>
                <table style="width: 100%; margin-top: 3px">
                  <tr>
                    <th
                      width="33.33%"
                      style="text-align: center; vertical-align: middle"
                    >
                      <p style="font-size: 15px; font-weight: 600">Number</p>
                    </th>
                    <th
                      width="33.33%"
                      style="text-align: center; vertical-align: middle"
                    >
                      <p style="font-size: 15px; font-weight: 600">Size</p>
                    </th>
                    <th
                      width="33.33%"
                      style="text-align: center; vertical-align: middle"
                    >
                      <p style="font-size: 15px; font-weight: 600">Type</p>
                    </th>
                  </tr>
                </table>
                <table style="width: 100%; margin-top: 1px">
                  <tr>
                    <td
                      width="33.33%"
                      style="text-align: center; vertical-align: middle"
                    >
                      <p>
                        <!-- Number : Variable  -->
                        {{ interModalBodyContent.droppedOffEquipment.number }}
                      </p>
                    </td>
                    <td
                      width="33.33%"
                      style="text-align: center; vertical-align: middle"
                    >
                      <p>
                        <!-- Size : Variable  -->
                        {{ interModalBodyContent.droppedOffEquipment.size }}
                      </p>
                    </td>
                    <td
                      width="33.33%"
                      style="text-align: center; vertical-align: middle"
                    >
                      <p>
                        <!-- Type : Variable  -->
                        {{ interModalBodyContent.droppedOffEquipment.type }}
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </section>

        <!-- Amount  -->
        <div
          style="
            color: #000;
            border: 1px solid #000;
            border-bottom: 0.5px solid #000;
            border-top: 0.5px solid #000;
            border-radius: 5px;
            padding: 5px;
          "
          v-if="dialogMode === 'rateConfirmation'"
        >
          <table style="width: 100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <th style="padding: 0">
                <p style="font-weight: 600; font-size: 14px">Rate Details</p>
              </th>
              <th style="padding: 0">
                <p style="font-weight: 600; font-size: 14px">Amount</p>
              </th>
              <th style="padding: 0">
                <p style="font-weight: 600; font-size: 14px">Notes</p>
              </th>
            </tr>
            <tr>
              <td style="border-bottom: 1px solid #ccc">
                <p style="font-size: 13px">Base Cost</p>
              </td>
              <td style="border-bottom: 1px solid #ccc">
                <span v-if="baseCost > 0">&nbsp;</span>
                {{ baseCost | currencyFormat }}
                <!-- Base Cost - Amount : Variable  -->
              </td>
              <td style="border-bottom: 1px solid #ccc; width: 50%">
                <!-- TODO: DEcide whether a dynamic note generation for base cost is needed  -->
                <!-- Base Cost - Notes : Variable  -->
                <!-- {{ baseCostNotes }} -->
                Hauling Fees
                <!-- Flat Rate, Special Rate -->
              </td>
            </tr>
            <tr
              v-for="(surcharge, i) in surChargesRenderList"
              :key="`surcharge_${i}`"
            >
              <td style="border-bottom: 1px solid #ccc">
                <p style="font-size: 13px">{{ surcharge.label }}</p>
              </td>
              <td style="border-bottom: 1px solid #ccc">
                <span v-if="surcharge.rate > 0">&nbsp;</span>
                {{ surcharge.rate | currencyFormat }}
              </td>
              <td style="border-bottom: 1px solid #ccc; width: 50%">
                {{ surcharge.note }}
              </td>
            </tr>
            <tr
              v-for="(deduction, i) in deductionsRenderList"
              :key="`deduction_${i}`"
            >
              <td style="border-bottom: 1px solid #ccc">
                <p style="font-size: 13px">{{ deduction.label }}</p>
              </td>
              <td
                style="border-bottom: 1px solid #ccc"
                v-if="deduction.id === 'manual_discount'"
              >
                {{ `- ` }}{{ deduction.rate | currencyFormat }}
              </td>
              <td style="border-bottom: 1px solid #ccc" v-else>
                <span v-if="deduction.rate > 0">&nbsp;</span>
                {{ deduction.rate | currencyFormat }}
              </td>
              <td style="border-bottom: 1px solid #ccc; width: 50%">
                {{ deduction.note }}
              </td>
            </tr>
            <tfoot>
              <tr>
                <td>
                  <p style="font-size: 13px; font-weight: 600">Total</p>
                </td>
                <td>
                  <p style="font-size: 13px; font-weight: 600">
                    <!-- Total - Amount : Variable  -->
                    <span v-if="totalAmount > 0">&nbsp;</span>
                    {{ totalAmount | currencyFormat }}
                  </p>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <!-- Footer  -->
        <div style="color: #000; font-weight: 400">
          <!-- Special instructions -->
          <div
            style="
              border-right: 1px solid #000;
              border-left: 1px solid #000;
              border-top: 0.5px solid #000;
              border-radius: 5px;
              padding: 5px;
            "
          >
            <p style="font-weight: 700">Instructions:</p>
            <p>
              {{ thirdPartyCarrier.instructions }}
            </p>
          </div>

          <!-- Disclaimers Block  -->
          <div
            style="
              border: 1px solid #000;
              border-radius: 5px;
              padding: 15px 10px;
              border-bottom: none;
            "
          >
            <p style="font-size: 18px; font-weight: 700; margin-bottom: 2px">
              Disclaimers:
            </p>
            <table
              style="width: 100%"
              cellpadding="0"
              cellspacing="0"
              border="0"
            >
              <tr v-if="showAnotherAdditionalDisclaimerForSpecificCompanies">
                <td class="text-justify">
                  Driver must call Flamekeeper to be dispatched. Driver or
                  carrier's dispatch must call each day during transit to
                  provide a tracking update/driver location report. The Carrier
                  or Driver must be informed prior to entering detention.
                  Time-stamped BOL is required for detention pay within 48 hours
                  of delivery. Carrier must immediately notify Flamekeeper if
                  shipper's instructions do NOT match this Rate Confirmation.
                  Carrier agrees that it will be the sole Carrier for the entire
                  shipment and there will be no brokering of said load to
                  another Carrier. Co-Brokering will result in non-payment of
                  the load. Missed pickup and/or delivery date(s)/times will
                  result in rate reduction up to 20% per day. Mechanical failure
                  delay with supporting receipt will not penalized. Accurate
                  tracking updates must be provided daily. Flamekeeper's terms
                  for payment are (30) days from the date of receipt of Invoice,
                  Rate Confirmation and Proof of Delivery. Proof of Delivery
                  must be signed by Consignee. Please email invoice, rate
                  confirmation and proof of delivery to bids@shipwithflame.com
                  for payment. Quick Pay and/or Fuel Advance must be approved
                  prior to loading. POD due within 2hrs of delivery; Rate
                  reduction of 1% per day each day thereafter. Carrier may not
                  break any seal. Proper load temperature is the
                  Driver/Carrier's responsibility. Driver must verify at the
                  time of pickup that the Bill of Lading matches the temperature
                  on this load confirmation. By accepting this load, you are
                  guaranteeing compliance with the Food Safety Modernize on Act
                  (21 U.S.C. ?? 2201, et seq.), the Food, Drug and Cosmec Act
                  (21 U.S.C. ?? 341, et seq.) ("FD&C Act"), the Sanitary Food
                  Transportation Act (49 USC 5701 et seq.), and the U.S. Food
                  and Drug Administration's Final Rule on the Sanitary
                  Transportation of Human and Animal Food (21 C.F.R. ?? 1.900 et
                  seq.), that any operang Transport Refrigera on Units (TRU's)
                  are compliant with the California Air Resources Board's (CARB)
                  TRU Airborne Toxic Control Measure (ATCM) requirements and
                  regulations for the transportation of freight at any point in
                  the State of California.Carrier agrees to the terms and
                  conditions of the Flamekeeper Broker/Carrier Agreement between
                  Flamekeeper and the Motor Carriers, and such Agreement governs
                  this Carrier Rate Confirmation between the parties even in the
                  event the carrier does not sign this Carrier Rate
                  Confirmation, but provides the transportation as described
                  herein. In the event of any conflict between the Agreement or
                  the Carrier Rate Confirmation, the Agreement shall govern and
                  then any terms as set forth in this Carrier Rate Confirmation
                  shall apply. The Carrier agrees to and must comply with all
                  Department of Transportation and other governmental
                  regulations when transporting hazard materials. No secondary
                  bills will be accepted after 30 days from delivery date.
                  Carrier is not an employee of Flamekeeper. Carrier is
                  responsible for determining the correct route for transporting
                  the shipments it accepts. Carrier understand and acknowledges
                  that any instruction or information given to it by Flamekeeper
                  are merely for the Carrier's convenience and not to be
                  construed as Falamekeeper's attempt to control the manner,
                  method, or means by which Carrier or its employees performs
                  the work hereunder. This Rate Confirmation Sheet is a legally
                  binding agreement between Flamekeeper and Carrier. No
                  signature is required to enforce provision of this agreement;
                  rather both parties accept the terms and conditions contained
                  herein upon Carrier's partial or full performance of the
                  shipment. Driver must call Flamekeeper to be dispatched.
                  Driver or carrier's dispatch must call Flamekeeper each day
                  during transit to provide a tracking update/driver location
                  report. The Carrier or Driver must call Flamekeeper prior to
                  entering detention. Carrier must immediately notify
                  Flamekeeper if shipper's instructions do NOT match this Rate
                  Confirmation. Carrier agrees that it will be the sole Carrier
                  for the entire shipment and there will be no brokering of said
                  load to another Carrier. Co-Brokering will result in
                  non-payment of the load. Right to Offset: In the event that
                  Carrier fails to perform services agreed or becomes liable to
                  Flamekeeper for any reason under the Broker/Carrier Agreement,
                  Flamekeeper shall have the right to deduct the amount of the
                  damages that Flamekeeper incurs as a result of Carrier's
                  actions, including actual damages, consequential damages, and
                  attorney fees, due to such failure or on account of such
                  liability, from any monies that Carrier is owed by
                  Flamekeeper. The right of offset provided for in this Section
                  shall not be Flamekeeper exclusive remedy, but rather it shall
                  be in addition to any other legal or equitable remedies that
                  Flamekeeper may be entitled to pursue against Carrier. In the
                  event of a claim for delay in delivery of freight (â€œa delay
                  claim"), Carrier shall pay to Flamekeeper, Flamekeeper's
                  customer, the shipper/consignor, and/or the consignee, as the
                  case may be, the greater of the actual damages caused by such
                  a delay claim or $100.00 per day, or any portion of a day, by
                  which the delivery was late. The provisions of this Agreement
                  shall supersede and prevail over any terms or provisions to
                  the contrary contained in Carrier's tariff(s), pricing
                  agreements, publications, schedules, rules, policies,
                  regulations, practices, other agreements, or other documents
                  or statements. Any attempts to limit Carrier's liability for
                  loss, damage, shortage, or delay claims as set forth in this
                  Agreement shall be ineffective and are hereby deemed and
                  agreed to be null and void. Carrier agrees that Flamekeeper
                  reserves the right to withhold payment on any load on which
                  there is a pending claim arising out of Carrier's failure to
                  provide agree upon services. Carrier's failure to provide
                  equipment and/or services as agreed upon may result in
                  additional line haul deductions. Accurate tracking updates
                  must be provided daily. Carrier agrees to accept Flamekeeper's
                  request for tracking and tracing and will comply with any such
                  request. Flamekeeper 's terms for payment are (30) days from
                  the date of receipt of the Invoice, Rate Confirmation, and
                  Proof of Delivery. Proof of Delivery must be signed by
                  Consignee. Please email invoice, rate confirmation and proof
                  of delivery to bids@shipwithflame.com for payment. Quick Pay
                  and/or Fuel Advance must be approved prior to loading. POD due
                  within 2hrs of delivery; Rate reduction of 1% per day each day
                  thereafter. Carrier may not break any seal. Any refer
                  temperature set point instructions given to Carrier from
                  Flamekeeper shall be subordinate to any set point instructions
                  on the Bill of Lading. In the event of conflicting refer
                  temperature set point instructions, it is the Carrier's
                  responsibility to confirm the refer temperature set point with
                  the shipper before departure. Driver must verify at the me of
                  pickup that the Bill of Lading matches the temperature on this
                  load confirm on. By accepting this load, you are guaranteeing
                  compliance with the Food Safety Modernize on Act (21 U.S.C. ??
                  2201, et seq.), the Food, Drug and Cosmo c Act (21 U.S.C. ??
                  341, et seq.) ("FD&C Act"), the Sanitary Food Transport on Act
                  (49 USC 5701 et seq.), and the U.S. Food and Drug
                  Administraon's Final Rule on the Sanitary Transport on of
                  Human and Animal Food (21 C.F.R. ?? 1.900 et seq.), that any
                  operating Transport Refrigerater Units (TRU's) are compliant
                  with the California Air Resources Board's (CARB) TRU Airborne
                  Toxic Control Measure (ATCM) requirements and regulations for
                  the transportation of freight at any point in the State of
                  California. Carrier agrees to notify Flamekeeper immediately
                  if any problems or claims concerning the freight arise.
                  Carrier is responsible for any damage to product, damage to
                  the products container and overages/shortages of freight
                  Carrier is responsible for the wholesomeness, temperature, and
                  quality of food products at all times after leaving loading
                  facility. Carrier is responsible for the inspection of the
                  cargo prior to or at loading of the cargo on trailer. Unless
                  otherwise noted on the Bill of Lading, Carrier agrees that the
                  cargo was tendered to Carrier in good condition and Carrier is
                  liable for any loss or damage to the cargo in transit, subject
                  to the Carmack defenses, including (1) the act of God (2) the
                  public enemy (3) the act of the shipper himself; (4) public
                  authority; or (5) the inherent vic or nature of the goods.
                  Carrier is also responsible for the safety and security if the
                  cargo while in transit. Carrier agrees to the terms and
                  conditions of the Flamekeeper Broker/Carrier Agreement between
                  Flamekeeper and the Motor Carriers, and such Agreement governs
                  this Carrier Rate Confirmation between the parties even in the
                  event the carrier does not sign this Carrier Rate Confirmation
                  but provides the transportation as described herein. In the
                  event of any conflict between the Agreement or the Carrier
                  Rate Confirmation, the Agreement shall govern and then any
                  terms as set forth in this Carrier Rate Confirmation shall
                  apply. The Carrier agrees to and must comply with all
                  Department of Transportation and other governmental
                  regulations when transporting hazard materials. No secondary
                  bills will be accepted after 30 days from delivery date.
                  Flamekeeper does not authorize hand written or verbal changes
                  to this rate confirmation. If this rate confirmation does not
                  accurately reflect the load terms,carrier must obtain a
                  revised rate confirmation from Flamekeeper. Lumper
                  reimbursement (for exact amount): Receipt required from the
                  lumper service Detention: Carrier must be on time for pick
                  up/delivery. Detention accrual begins 3 hours after
                  appointment time at shipper/receiver. Carrier agrees to a
                  detention rate of $25/hr. with a maximum amount of $150.00,
                  including layover. Partial hours will be prorated. For
                  detention approval,; CARRIER must notify Flamekeeper via phone
                  at the time detention will start accruing and provide proof of
                  timely arrival. Time stamped BOL required for detention pay
                  within 48 hours of delivery. Truck Ordered Not Used (TONU): In
                  the event Carrier's equipment is ordered but is not utilized,
                  Carrier agrees to a TONU rate of $75.Submission of POD &
                  reimbursement receipts due within 48HRS, unless Carrier is
                  otherwise notified by Flamekeeper.It is the Carrier's
                  responsibility to inspect the condition and security of all
                  cargo prior to departing the loading area. If the driver is
                  not allowed on the loading dock, a signature from the shipper
                  must be obtained, verifying the condition and security of the
                  loaded Cargo. Carrier hereby authorizes Flamekeeper to
                  directly invoice shippers, consignees, consignors, or
                  receivers or their designated agent for all freight,
                  accessorial or other charges claimed due from such entities as
                  agent for and on behalf of Carrier. Carrier's sole remedy
                  shall be to seek payment from Flamekeeper and waives all
                  rights to invoice shipper. Carrier agrees that Flamekeeper
                  reserves the right to withhold payment on any load on which
                  there is a pending claims arising out of Carrier's failure to
                  provided agreed upon services. Carrier agrees that any
                  bulkhead information provided to Flamekeeper does not limit
                  carrier's liability for ??cargo damage. Carrier must inspect
                  the installation and integrity of the installed bulkhead and
                  agrees prior to leaving the loading facility the bulkhead
                  meets all required specifications Carrier must verify the
                  bulkhead allows for the shipper required temperature in each
                  segment of the trailer. As between Broker and Carrier, any
                  damage to cargo resulting from a faulty bulkhead is the sole
                  responsibly of the carrier, subject to the Carmack defenses
                  including (1) the act of God; (2) the public enemy; (3) the
                  act of the shipper himself; (4) public authority; or (5) the
                  inherent vic or nature of the goods. All shipments are
                  dedicated unless prior authorized by us. We will not honor any
                  payment if the truck is not dedicated. Carrier Do not accept
                  live tracking or messing around with the tracking app will not
                  get paid for the entire load. If Shipment delivers late
                  without valid proof reason Flamekeeper is not liable to pay
                  any $ amount. Any Delays on delivery Flamekeeper Needs to
                  notify at the same time or will not honor any payment on load
                  for late delivery. Carriers/Drivers Need to Notify Us of any
                  Cash or Fuel Advance before booking / Picking up the Freight.
                  We do not do any advances of Cash/Fuel. If we have t for any
                  reason we Charge 15% of the Total Freight Cost to
                  Carrier/Driver PLEASE EMAIL A COPY OF POD AND INVOICE TO:
                  Billing (accounting@flamekeeperlogistics.com)
                </td>
              </tr>
              <tr v-else-if="checkRateConType" width="100%">
                <td
                  width="50%"
                  style="font-size: 12px; font-weight: 400; padding-right: 10px"
                >
                  Carrier agrees to provide final charges within 24 hours of
                  completion of shipment. No additional fees shall be charged by
                  carrier without previous written notification and approval by
                  <span
                    style="font-weight: 600"
                    v-if="companyInfo && companyInfo.companyName"
                    >{{ companyInfo.companyName }}</span
                  >.
                </td>
                <td
                  width="50%"
                  style="font-size: 12px; font-weight: 400; padding-left: 10px"
                >
                  Invoices must contain: Rate Confirmation, Bill Of Lading,
                  Proof Of Delivery, Equipment Interchange Receipts (if
                  Inter-modal); and proof of any accessorial charge, including
                  but not limited to lumper, chassis, etc, in connection with
                  the shipment and with prior approval by
                  <span
                    style="font-weight: 600"
                    v-if="companyInfo && companyInfo.companyName"
                    >{{ companyInfo.companyName }}</span
                  >.
                </td>
              </tr>
              <tr v-else>
                <td
                  width="50%"
                  style="font-size: 12px; font-weight: 400; padding-right: 10px"
                >
                  Carrier agrees to provide final charges within 24 hours of
                  completion of shipment. No additional fees shall be charged by
                  carrier without previous written notification and approval by
                  <span
                    style="font-weight: 600"
                    v-if="companyInfo && companyInfo.companyName"
                    >{{ companyInfo.companyName }}</span
                  >
                  please refer to carrier package for details.
                </td>
                <td
                  width="50%"
                  style="font-size: 12px; font-weight: 400; padding-left: 10px"
                >
                  Invoices must contain: Rate Confirmation, Bill Of Lading,
                  Proof Of Delivery; Accessorial charge, including but not
                  limited to lumper, chassis, etc, in connection with the
                  shipment and with prior approval by
                  <span
                    style="font-weight: 600"
                    v-if="companyInfo && companyInfo.companyName"
                    >{{ companyInfo.companyName }}</span
                  >.
                  <span
                    style="font-size: 12px; font-weight: 400; margin-top: 10px"
                    v-if="showAdditionalDisclaimerForSpecificCompanies"
                  >
                    Send invoice, BOL, and rate con to billing.pleco@gmail.com
                    within 24 hours of delivery.
                  </span>
                </td>
              </tr>
            </table>
          </div>

          <!-- Signature Block  -->
          <table
            style="
              border: 1px solid #000;
              border-radius: 5px;
              width: 100%;
              margin-bottom: 20px;
              padding: 5px;
            "
            cellpadding="0"
            cellspacing="0"
            border="0"
          >
            <tr width="100%" style="padding: 5px; margin-top: 5px">
              <td width="50%" style="font-size: 18px; font-weight: 700">
                Signature(s):
              </td>
              <td width="50%" style="">
                <table style="width: 100%">
                  <tr width="100%" style="display: flex">
                    <td style="">Driver's Name:</td>
                    <td
                      style="
                        border-bottom: 1px solid #000;
                        margin-bottom: -1px;
                        text-align: center;
                        vertical-align: middle;
                        width: calc(100% - 100px);
                      "
                    >
                      {{
                        driverInfo && driverInfo.driverName
                          ? driverInfo.driverName
                          : ''
                      }}
                      <!-- Driver's Name : Variable  -->
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr width="100%" style="padding: 5px; margin-top: 5px">
              <td width="50%" style="">
                <table style="width: 100%">
                  <tr width="100%" style="display: flex">
                    <td style="">Carrier Signature:</td>
                    <td
                      style="
                        border-bottom: 1px solid #000;
                        margin-bottom: -1px;
                        text-align: center;
                        vertical-align: middle;
                        width: calc(100% - 120px);
                      "
                    ></td>
                  </tr>
                </table>
              </td>
              <td width="50%" style="">
                <table style="width: 100%">
                  <tr width="100%" style="display: flex">
                    <td style="">Truck Number:</td>
                    <td
                      style="
                        border-bottom: 1px solid #000;
                        margin-bottom: -1px;
                        text-align: center;
                        vertical-align: middle;
                        width: calc(100% - 100px);
                      "
                    >
                      {{
                        driverInfo && driverInfo.truckNumber
                          ? driverInfo.truckNumber
                          : ''
                      }}
                      <!-- Truck Number : Variable  -->
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr width="100%" style="padding: 5px; margin-top: 5px">
              <td width="50%" style="">
                <table style="width: 100%">
                  <tr width="100%" style="display: flex">
                    <td style="">Carrier Name:</td>
                    <td
                      style="
                        border-bottom: 1px solid #000;
                        margin-bottom: -1px;
                        text-align: center;
                        vertical-align: middle;
                        width: calc(100% - 97px);
                      "
                    >
                      {{
                        carrierInfo && carrierInfo.carrierName
                          ? carrierInfo.carrierName
                          : ''
                      }}
                    </td>
                  </tr>
                </table>
              </td>
              <td width="50%" style="">
                <table style="width: 100%">
                  <tr width="100%" style="display: flex">
                    <td style="">Driver Phone:</td>
                    <td
                      style="
                        border-bottom: 1px solid #000;
                        margin-bottom: -1px;
                        text-align: center;
                        vertical-align: middle;
                        width: calc(100% - 100px);
                      "
                    >
                      {{
                        driverInfo && driverInfo.driverPhoneNumber
                          ? driverInfo.driverPhoneNumber
                          : ''
                      }}
                      <!-- Driver's Phone : Variable  -->
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </template>
  </Dialog>
</template>

<script>
import dayjs from 'dayjs';
import config from '@/config/constants.js';
import { mapGetters } from 'vuex';

export default {
  name: 'RateConfirmationDialog',
  props: {
    dialogMode: {
      type: String,
      default: 'rateConfirmation',
    },
    isDialogActive: {
      type: Boolean,
      default: false,
    },
    shipperReceiverLegList: {
      type: Array,
      default: [],
    },
    temperature: {
      type: String,
      default: null,
    },
    orderType: {
      type: String,
      default: null,
    },
    serviceType: {
      type: String,
      default: null,
    },
    loadNumber: {
      type: [String, Number],
      default: null,
    },
    referenceNumber: {
      type: [String, Number],
      default: null,
    },
    carrierInfo: {
      type: Object,
      default: null,
    },
    companyInfo: {
      type: Object,
      default: () => ({}),
    },
    driverInfo: {
      type: Object,
      default: () => ({}),
    },
    rateConType: {
      type: String,
    },
    thirdPartyCarrier: {
      type: Object,
      default: {},
    },
    accessorialFeeOptions: {
      type: Array,
      default: [],
    },
    accessorialDeductionOptions: {
      type: Array,
      default: [],
    },
    fuelSurchargeAmount: {
      type: [String, Number],
      default: null,
    },
    haulingFeeAmount: {
      type: [String, Number],
      default: null,
    },
    interModalBodyContent: {
      type: Object,
      default: {},
    },
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
  data() {
    return {
      weight_units: config.weight_unit,
      qty_units: config.quantity_unit,
    };
  },
  computed: {
    ...mapGetters('auth', ['user']),
    onlyVisibleServiceNoticeForHiway() {
      return this.user.admin_company_details.admin_company_detail_id == 118;
    },
    serviceNoticeNoPodForTopTier() {
      return this.user.admin_company_details.admin_company_detail_id == 160;
    },
    showAdditionalDisclaimerForSpecificCompanies() {
      return config.additionalDisclaimerForCompanies.some(
        (item) =>
          item === this.user.admin_company_details.admin_company_detail_id
      );
    },
    // This disclaimer applies to the production company with ID 315
    showAnotherAdditionalDisclaimerForSpecificCompanies() {
      return config.anotherAdditionalDisclaimerForCompanies.some(
        (item) =>
          item === this.user.admin_company_details.admin_company_detail_id
      );
    },
    baseCostNotes() {
      // const type = this.thirdPartyCarrier.charges.hauling_fee_type || "";
      // const type = "Hauling Fee";
      // const formattedType = this.formatValue(type) + ",";
      // return this.manageComma(formattedType);
      const { hauling_fee_type, hauling_fee_rate } =
        this.thirdPartyCarrier.charges || {};
      const fuelSurchargeNoteOptions = (type, rate) => {
        switch (type) {
          case 'weight':
            return `$ ${rate} per Weight`;
          case 'flat_fee':
            return `Flat fee $ ${rate}`;
          case 'qty':
            return `$ ${rate} per Quantity`;
          default:
            return 'Hauling Fee';
        }
      };
      return fuelSurchargeNoteOptions(hauling_fee_type, hauling_fee_rate);
    },
    baseCost() {
      return parseFloat(this.haulingFeeAmount).toFixed(2);
    },
    surcharges() {
      const accessorialFeesTotalAmount =
        this.thirdPartyCarrier.charges.accessorial_fee
          .map((fees) => Number(fees.rate))
          .reduce((totalAmount, rate) => totalAmount + Number(rate), 0);
      return parseFloat(
        this.fuelSurchargeAmount + accessorialFeesTotalAmount
      ).toFixed(2);
    },
    deduction() {
      const accessorialDeductionFeesTotalAmount =
        this.thirdPartyCarrier.charges.accessorial_deduction
          .map((fees) => Number(fees.rate))
          .reduce((totalAmount, rate) => totalAmount + rate, 0);
      return parseFloat(accessorialDeductionFeesTotalAmount).toFixed(2);
    },
    discount() {
      return parseFloat(this.thirdPartyCarrier.discount).toFixed(2);
    },
    totalAmount() {
      const totalAmount =
        Number(this.baseCost) +
        Number(this.surcharges) +
        Number(this.deduction);
      let result =
        totalAmount < this.discount ? totalAmount : totalAmount - this.discount;
      return parseFloat(result).toFixed(2);
    },
    checkRateConType() {
      return this.rateConType === 'intermodal';
    },

    accessorialFeeOptionsIdMap() {
      return this.accessorialFeeOptions.reduce((acc, fee) => {
        acc[fee.accessorial_fee_id] = {
          ...fee,
        };
        return acc;
      }, {});
    },
    accessorialDeductionOptionsIdMap() {
      return this.accessorialDeductionOptions.reduce((acc, fee) => {
        acc[fee.accessorial_deduction_id] = {
          ...fee,
        };
        return acc;
      }, {});
    },
    surChargesRenderList() {
      const accessorialFeeList = this.thirdPartyCarrier.charges.accessorial_fee
        .filter((x) => x.id)
        .map((fee) => {
          const { name, description } =
            this.accessorialFeeOptionsIdMap[fee.id] || {};
          return {
            id: fee.id,
            rate: fee.rate,
            label: name || '',
            note: 'Accessorial Fee' || description || '',
            // TODO: decide whether this use case of using accessorial fees description as note is needed or not
          };
        });
      const fuelSurchargeNoteOptions = (type, rate) => {
        switch (type) {
          case 'percentage':
            return `${rate}% of Base Cost`;
          case 'flat_fee':
            return `Flat fee $ ${rate}`;
          case 'per_mile':
            return `$ ${rate} per mile`;
          default:
            return '';
        }
      };
      const { fuel_surcharge, fuel_surcharge_rate, fuel_surcharge_type } =
        this.thirdPartyCarrier.charges || {};

      const res = [...accessorialFeeList];
      if (fuel_surcharge_rate && fuel_surcharge_type) {
        res.unshift({
          label: 'Fuel Surcharge',
          note:
            'Fuel Surcharge' ||
            fuelSurchargeNoteOptions(fuel_surcharge_type, fuel_surcharge_rate),
          rate: fuel_surcharge,
          id: 'manual_fuelSurchargeAmount',
          /* TODO: decide whether this dynamic calculation fo fuel surcharge notes is needed or not*/
        });
      }
      return res;
    },
    deductionsRenderList() {
      const accessorialDeductionsList =
        this.thirdPartyCarrier.charges.accessorial_deduction
          .filter((x) => x.id)
          .map((fee) => {
            const { name, description } =
              this.accessorialDeductionOptionsIdMap[fee.id] || {};
            return {
              id: fee.id,
              rate: fee.rate,
              label: name || '',
              note: 'Accessorial Deduction' || description || '',
              // TODO: decide whether accessorial deduction description should be used as note
            };
          });
      const res = [...accessorialDeductionsList];
      if (this.thirdPartyCarrier.discount) {
        res.push({
          label: 'Discount',
          rate: this.thirdPartyCarrier.discount,
          note: '',
          id: 'manual_discount',
        });
      }
      return res;
    },

    interModalLoadedWeightsList() {
      const arrayList = (this.shipperReceiverLegList || [])
        .map((address) => {
          let str = '';
          if (address.freight_weight) {
            const weightUnit = address.weight_unit
              ? Object.entries(this.weight_units).find(
                  ([_, value]) => value === address.weight_unit
                )[0]
              : '';
            str = `${address.freight_weight} ${weightUnit}`.trim();
          }

          if (
            address.additionalFreightDetails &&
            address.additionalFreightDetails.details.length
          ) {
            const details = address.additionalFreightDetails.details.map(
              (detail) => {
                let str = '';
                if (detail.freight_weight) {
                  const weightUnit = detail.weight_unit
                    ? Object.entries(this.weight_units).find(
                        ([_, value]) => value === detail.weight_unit
                      )[0]
                    : '';
                  str = `${detail.freight_weight} ${weightUnit}`.trim();
                }
                return str;
              }
            );
            str = `${str}, ${details.join(', ')}`.trim();
            // Remove trailing comma
            if (str.charAt(str.length - 1) === ',') {
              str = str.slice(0, -1);
            }
          }

          return str;
        })
        .filter(Boolean);
      return arrayList.join(', ');
    },
    interModalCountsList() {
      const arrayList = (this.shipperReceiverLegList || [])
        .map((address) => {
          let str = '';
          if (address.freight_qty) {
            const qtyUnit = address.qty_unit
              ? Object.entries(this.qty_units).find(
                  ([_, value]) => value === address.qty_unit
                )[0]
              : '';

            str = `${address.freight_qty} ${qtyUnit}`.trim();
          }

          if (
            address.additionalFreightDetails &&
            address.additionalFreightDetails.details.length
          ) {
            const details = address.additionalFreightDetails.details.map(
              (detail) => {
                let str = '';
                if (detail.freight_qty) {
                  const qtyUnit = detail.qty_unit
                    ? Object.entries(this.qty_units).find(
                        ([_, value]) => value === detail.qty_unit
                      )[0]
                    : '';

                  str = `${detail.freight_qty} ${qtyUnit}`.trim();
                }
                return str;
              }
            );
            str = `${str}, ${details.join(', ')}`.trim();
          }

          return str;
        })
        .filter(Boolean);
      return arrayList.join(', ');
    },
    interModalTemperaturesList() {
      const arrayList = (this.shipperReceiverLegList || [])
        .map((address) => address.temperature)
        .filter(Boolean);
      return arrayList.join(', ');
    },
    interModalPOPsuNumberList() {
      const arrayList = (this.shipperReceiverLegList || [])
        .map((address) => address.shipper_reference)
        .filter(Boolean);
      return arrayList.join(', ');
    },

    shippersList() {
      return this.shipperReceiverLegList
        .filter((x) => x.renderAddressType === 'shipper')
        .map((x) => {
          return {
            ...x,
            dateTimeString: this.createDateTimeString(
              x.shipping_date,
              x.shipping_time,
              x.shipping_end_date,
              x.shipping_end_time
            ),
          };
        });
    },
    receiversList() {
      return this.shipperReceiverLegList
        .filter((x) => x.renderAddressType === 'receiver')
        .map((x) => {
          return {
            ...x,
            dateTimeString: this.createDateTimeString(
              x.delivery_date,
              x.delivery_time,
              x.delivery_end_date,
              x.delivery_end_time
            ),
          };
        });
    },
    highestLengthFromShipperOrReceiver() {
      const shipperLength = this.shippersList.length;
      const receiverLength = this.receiversList.length;
      return shipperLength > receiverLength ? shipperLength : receiverLength;
    },
    currentDate() {
      return dayjs(new Date()).format('MM/DD/YYYY');
    },
  },
  methods: {
    // Function to capitalize the first letter of a string
    capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },

    // Function to remove underscores and add a comma
    formatValue(value) {
      if (value && value.includes('_')) {
        value = value.replace('_', ' ');
      }
      return this.capitalizeFirstLetter(value);
    },

    // Function to handle commas and trailing comma removal
    manageComma(type) {
      if (type && type.charAt(type.length - 1) === ',') {
        type = type.slice(0, -1);
      }
      return type.replace(/,/g, ', ');
    },

    onClose() {
      this.$emit('close');
    },
    showTime(time, endTime) {
      if (time && !endTime) {
        return `Time: ${time}`;
      }
      if (time && endTime) {
        return `Time: ${time} - ${endTime}`;
      }
    },

    createDateTimeString(startDate, startTime, endDate, endTime) {
      startDate = dayjs(startDate).format('MM/DD/YYYY');
      let dateTimeString = `${startDate}`;
      if (startTime) dateTimeString += ` ${startTime}`;
      if (endDate && startDate !== endDate) {
        endDate = dayjs(endDate).format('MM/DD/YYYY');
        dateTimeString += ` - ${endDate} ${endTime}`;
      } else if (endTime) {
        dateTimeString += ` - ${endTime}`;
      }
      return dateTimeString;
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog {
  ::v-deep {
    .p-dialog-header {
      // padding-bottom: 0px !important;
    }
  }
}
</style>
