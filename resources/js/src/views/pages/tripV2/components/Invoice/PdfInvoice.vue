<template>
  <div>
    <div
      style="
        color: #000000;
        font-size: 12px;
        line-height: 150%;
        font-weight: 400;
        border: 0 !important;
        margin: 0 !important;
        outline: 0 !important;
        text-decoration: none !important;
      "
    >
      <div
        style="
          margin-left: 40px;
          margin-right: 40px;
          overflow: hidden;
          min-height: 400px;
        "
      >
        <div
          class="mb20 flex-horizontal flex-justify flex-align-start width-100"
          style="
            width: 100%;
            margin-bottom: 20px;
            display: -webkit-box;
            -webkit-box-orient: horizontal;
            -webkit-box-pack: justify;
            -webkit-box-align: start;
          "
        >
          <div>
            <div
              class="h1 mb20"
              style="
                font-weight: 600;
                font-size: 24px;
                line-height: 130%;
                margin-bottom: 20px;
              "
            >
              Invoice
            </div>

            <div class="mb20" style="margin-bottom: 20px">
              <table
                cellpadding="0"
                cellspacing="0"
                class="metadata"
                style="border-collapse: separate"
              >
                <tbody>
                  <tr>
                    <td
                      style="
                        white-space: nowrap;
                        font-weight: 500;
                        padding-right: 8px;
                        -webkit-font-smoothing: antialiased !important;
                      "
                    >
                      Invoice number
                    </td>
                    <td
                      style="
                        white-space: nowrap;
                        font-weight: 500;
                        -webkit-font-smoothing: antialiased !important;
                      "
                    >
                      {{ invoice.invoiceNumber }}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        white-space: nowrap;
                        font-weight: 500;
                        padding-right: 8px;
                        -webkit-font-smoothing: antialiased !important;
                      "
                    >
                      Date due
                    </td>
                    <td
                      style="
                        white-space: nowrap;
                        font-weight: 500;
                        -webkit-font-smoothing: antialiased !important;
                      "
                    >
                      {{
                        invoice.dueDate
                          ? convertToMonthFormat(invoice.dueDate)
                          : ""
                      }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="brand-logo-container" v-if="companyLogo">
            <img
              class="logo-img brand-logo-img"
              :src="companyLogo"
              style="object-fit: contain; height: 75px; width: 75px"
            />
            <!-- <img
              class="logo-img brand-logo-img"
              style="max-width: 168px; max-height: 54px"
              src="https://picsum.photos/id/237/200/300"
            /> -->
          </div>

          <div class="brand-logo-fallback-container" v-else>
            <div
              class="h1 logo-gray"
              style="
                color: RGB(128, 128, 128);
                font-weight: 600;
                font-size: 24px;
                line-height: 130%;
              "
            >
              {{ user.admin_company_details.business_name }}
            </div>
          </div>
        </div>

        <div
          class="flex-horizontal flex-align-start mb30 break-word"
          style="
            word-wrap: break-word;
            word-break: break-word;
            margin-bottom: 30px;
            display: -webkit-box;
            -webkit-box-orient: horizontal;
            -webkit-box-align: start;
          "
        >
          <div class="width-50" style="width: 50%">
            <div class="address-merchant-name bold" style="font-weight: 600">
              {{ user.admin_company_details.business_name }}
            </div>
            <div class="address-lines">
              <div>
                {{ user.admin_company_details.address }}
              </div>
              <div>
                {{ user.admin_company_details.city }},
                {{ user.admin_company_details.state }}
                {{ user.admin_company_details.zipcode }}
              </div>
            </div>

            <div>
              {{ user.admin_company_details.email || "" }}
            </div>

            <div class="address-phone">
              {{ user.admin_company_details.phone_number }}
            </div>

            <div></div>
          </div>

          <div
            class="flex-horizontal width-50"
            style="
              width: 50%;
              display: -webkit-box;
              -webkit-box-orient: horizontal;
            "
          >
            <div class="pr15 width-100">
              <div class="bold" style="font-weight: 600">Bill to</div>
              <div>
                {{
                  invoice.customer && invoice.customer.company_name
                    ? invoice.customer.company_name
                    : ""
                }}
              </div>
              <div>
                {{
                  invoice.customer && invoice.customer.billing_contact
                    ? invoice.customer.billing_contact
                    : ""
                }}
              </div>
              <div class="address-lines">
                <div>
                  {{
                    invoice.customer && invoice.customer.billing_address
                      ? invoice.customer.billing_address
                      : ""
                  }}
                </div>
                {{
                  invoice.customer && invoice.customer.billing_city
                    ? invoice.customer.billing_city + ","
                    : ""
                }}
                {{
                  invoice.customer && invoice.customer.billing_state
                    ? invoice.customer.billing_state
                    : ""
                }}
                {{
                  invoice.customer && invoice.customer.billing_zip_code
                    ? invoice.customer.billing_zip_code
                    : ""
                }}
              </div>
              <div>
                {{
                  invoice.customer && invoice.customer.billing_email
                    ? invoice.customer.billing_email
                    : ""
                }}
              </div>
              <div>
                {{
                  invoice.customer && invoice.customer.billing_phone_number
                    ? invoice.customer.billing_phone_number
                    : ""
                }}
              </div>
              <template v-if="invoice.customer">
                <div v-if="invoice.customer.salesRep ">
                  Sales Rep: {{ invoice.customer.salesRep }}
                </div>
                <div v-if="invoice.customer.shippingCarrierAcct">
                  Shipping Carrier Account: {{ invoice.customer.shippingCarrierAcct }}
                </div>
              </template>
            </div>
          </div>
        </div>

        <div
          class="flex-horizontal flex-align-start mb30 break-word"
          style="
            word-wrap: break-word;
            word-break: break-word;
            margin-bottom: 30px;
            display: -webkit-box;
            -webkit-box-orient: horizontal;
            -webkit-box-align: start;
          "
          v-if="invoice && invoice.shippingAddress"
        >
          <div class="width-50" style="width: 50%">
            <div class="address-merchant-name bold" style="font-weight: 600">
              Shipping address
            </div>
            <div class="address-lines">
              <div>
                {{ invoice.shippingAddress }}
              </div>
            </div>
            <div></div>
          </div>
        </div>

        <!-- <div class="mb30" style="margin-bottom: 30px">
          <div
            class="h2"
            style="font-weight: 600; font-size: 18px; line-height: 130%"
          >
            $0.00 due March 4, 2023
          </div>
        </div> -->

        <table
          cellpadding="0"
          cellspacing="0"
          class="line-item-table mb30"
          style="
            border-collapse: separate;
            margin-bottom: 15px;
            width: 100%;
            overflow: hidden;
            table-layout: fixed;
          "
        >
          <thead>
            <tr class="table-headers">
              <th
                class="width-50 center-valign p-0"
                style="
                  width: 50%;
                  vertical-align: center;
                  padding-bottom: 5px;
                  font-size: 10px;
                  -webkit-font-smoothing: antialiased !important;
                "
              >
                Product
              </th>
              <th
                class="width-16point7 center-valign p-0"
                style="
                  width: 16.7%;
                  vertical-align: center;
                  padding-bottom: 5px;
                  font-size: 10px;
                  -webkit-font-smoothing: antialiased !important;
                "
              >
                Qty
              </th>
              <th
                class="width-16point7 center-valign p-0"
                style="
                  width: 16.7%;
                  vertical-align: center;
                  padding-bottom: 5px;
                  font-size: 10px;
                  -webkit-font-smoothing: antialiased !important;
                "
              >
                <div class="line-height-1point3" style="line-height: 1.3">
                  Unit price
                </div>
              </th>

              <th
                class="width-16point7 center-valign align-right p-0"
                style="
                  width: 16.7%;
                  text-align: right;
                  vertical-align: center;
                  padding-bottom: 5px;
                  font-size: 10px;
                  -webkit-font-smoothing: antialiased !important;
                "
              >
                <div class="line-height-1point3" style="line-height: 1.3">
                  Amount
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr
              class="line-item-row"
              v-for="(item, index) in invoiceData.items"
              :key="uniqueId(index, 'items')"
            >
              <td>
                <div>
                  <div class="bold">
                    {{ item.name }}
                  </div>
                </div>
              </td>

              <td>
                {{ formatRate(item.qty) }}
              </td>

              <td class="break-word">
                <div>${{ minTwoDecimal(formatRate(item.rate)) }}</div>
              </td>

              <td class="text-right">
                {{ handleAmount(item.rate, item.qty) }}
              </td>
            </tr>
            <tr>
              <td
                colspan="5"
                height="15"
                style="
                  border: 0;
                  border-collapse: collapse;
                  margin: 0;
                  padding: 0;
                  height: 15px;
                  font-size: 1px;
                  line-height: 1px;
                  mso-line-height-rule: exactly;
                  -webkit-font-smoothing: antialiased !important;
                "
              >
                 
              </td>
            </tr>

            <tr class="summary-amount-border">
              <td></td>
              <td
                colspan="4"
                style="
                  border-top: 1px solid #ebebeb;
                  -webkit-font-smoothing: antialiased !important;
                "
              ></td>
            </tr>
            <tr class="summary-amount">
              <td></td>

              <td
                colspan="2"
                style="
                  padding-top: 5px;
                  padding-bottom: 5px;
                  -webkit-font-smoothing: antialiased !important;
                "
              >
                Subtotal
              </td>

              <td
                class="align-right"
                style="
                  text-align: right;
                  padding-top: 5px;
                  padding-bottom: 5px;
                  -webkit-font-smoothing: antialiased !important;
                "
              >
                {{ formatRate(subTotalAmount()) }}
              </td>
            </tr>
            <tr
              class="summary-amount"
              v-for="(item, index) in invoiceData.customFields"
              :key="uniqueId(`${index}_${item.fieldId}`, 'customField')"
            >
              <td></td>

              <td
                colspan="2"
                style="
                  padding-top: 5px;
                  padding-bottom: 5px;
                  -webkit-font-smoothing: antialiased !important;
                "
              >
                {{ getOptionNameFromFieldId(item.fieldId) }}
                {{
                  item.percentage != null && item.percentage != "" ? "(" : ""
                }}
                {{
                  item.percentage != null && item.percentage != ""
                    ? item.percentage
                    : ""
                }}
                {{
                  item.percentage != null && item.percentage != ""
                    ? "% of Subtotal"
                    : ""
                }}{{
                  item.percentage != null && item.percentage != "" ? ")" : ""
                }}
              </td>

              <td
                class="align-right"
                style="
                  text-align: right;
                  padding-top: 5px;
                  padding-bottom: 5px;
                  -webkit-font-smoothing: antialiased !important;
                "
              >
                {{ "$" }}
                {{ minTwoDecimal(formatRate(item.payment)) }}
              </td>
            </tr>
            <tr class="summary-amount-border">
              <td></td>
              <td
                colspan="4"
                style="
                  border-top: 1px solid #ebebeb;
                  -webkit-font-smoothing: antialiased !important;
                "
              ></td>
            </tr>
            <!-- <tr class="summary-amount">
              <td></td>

              <td
                colspan="2"
                style="
                  padding-top: 5px;
                  padding-bottom: 5px;
                  -webkit-font-smoothing: antialiased !important;
                "
              >
                Total
              </td>

              <td
                class="align-right"
                style="
                  text-align: right;
                  padding-top: 5px;
                  padding-bottom: 5px;
                  -webkit-font-smoothing: antialiased !important;
                "
              >
                ${{ amountTotal }}
              </td>
            </tr> -->

            <tr class="summary-amount-border">
              <td></td>
              <td
                colspan="4"
                style="
                  border-top: 1px solid #ebebeb;
                  -webkit-font-smoothing: antialiased !important;
                "
              ></td>
            </tr>
            <tr class="summary-amount bold" style="font-weight: 600">
              <td></td>

              <td
                colspan="2"
                style="
                  padding-top: 5px;
                  padding-bottom: 5px;
                  -webkit-font-smoothing: antialiased !important;
                "
              >
                Amount due
              </td>

              <td
                style="
                  text-align: right;
                  padding-top: 5px;
                  padding-bottom: 5px;
                  -webkit-font-smoothing: antialiased !important;
                "
              >
                <!-- {{ formatRate(amountTotal()) }} -->
                {{ totalAmount }}
              </td>
            </tr>
          </tbody>
        </table>

        <div v-if="invoice && invoice.notes">
          <div class="mb-2">
            <div class="font-semibold mb-2">Notes</div>
            <div>
              <span class="break-all" v-html="invoice.notes" />
            </div>
          </div>
        </div>

        <div
          class="pb30 avoid-page-break"
          style="padding-bottom: 30px; page-break-inside: avoid"
        ></div>

        <div class="fs-10" style="font-size: 10px"></div>

        <table
          cellpadding="0"
          cellspacing="0"
          class="line-item-table mb30"
          style="
            border-collapse: separate;
            margin-bottom: 15px;
            width: 100%;
            overflow: hidden;
            table-layout: fixed;
          "
          v-if="invoiceData && (invoiceData.invoicePayments || []).length"
        >
          <thead>
            <tr class="table-headers">
              <th
                class="width-16point7 center-valign p-0"
                style="
                  width: 16.7%;
                  vertical-align: center;
                  padding-bottom: 5px;
                  font-size: 10px;
                  -webkit-font-smoothing: antialiased !important;
                "
              >
              Transaction #
              </th>
              <th
                class="width-16point7 center-valign p-0"
                style="
                  width: 16.7%;
                  vertical-align: center;
                  padding-bottom: 5px;
                  font-size: 10px;
                  -webkit-font-smoothing: antialiased !important;
                "
              >
                Amount Paid
              </th>
              <th
                class="width-16point7 center-valign p-0"
                style="
                  width: 16.7%;
                  vertical-align: center;
                  padding-bottom: 5px;
                  font-size: 10px;
                  -webkit-font-smoothing: antialiased !important;
                "
              >
              Status
              </th>
              <th
                class="width-16point7 center-valign p-0"
                style="
                  width: 16.7%;
                  vertical-align: center;
                  padding-bottom: 5px;
                  font-size: 10px;
                  -webkit-font-smoothing: antialiased !important;
                "
              >
                <div class="line-height-1point3" style="line-height: 1.3">
                  Card
                </div>
              </th>
              <th
                class="width-16point7 center-valign p-0"
                style="
                  width: 16.7%;
                  vertical-align: center;
                  padding-bottom: 5px;
                  font-size: 10px;
                  -webkit-font-smoothing: antialiased !important;
                "
              >
                <div class="line-height-1point3" style="line-height: 1.3">
                  Date
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr
              class="line-item-row"
              v-for="(item, index) in invoiceData.invoicePayments"
              :key="uniqueId(index, 'invoicePayments')"
            >

              <td>
                {{ item.transactionId }}
              </td>

              <td class="break-word">
                <div>${{ minTwoDecimal(formatRate(item.amountPaid)) }}</div>
              </td>

              <td>
                {{ item.status }}
              </td>

              <td>
                {{ item.last4Digits }}
              </td>

              <td>
                {{ item.utcDatetime ? convertToLocalDateTime(item.utcDatetime) : "" }}
              </td>
            </tr>
            <tr>
              <td
                colspan="5"
                height="15"
                style="
                  border: 0;
                  border-collapse: collapse;
                  margin: 0;
                  padding: 0;
                  height: 15px;
                  font-size: 1px;
                  line-height: 1px;
                  mso-line-height-rule: exactly;
                  -webkit-font-smoothing: antialiased !important;
                "
              >
              </td>
            </tr>
          </tbody>
        </table>

      </div>
      <!-- <div
        class="mt20 pt20 light-gray-border-top fs-10 line-height-140"
        style="
          padding-bottom: 40px;
          margin-left: 40px;
          margin-right: 40px;
          overflow: hidden;
          font-size: 10px;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #ebebeb;
          line-height: 140%;
        "
      >
        <div class="mt20" style="margin-top: 20px">
          <div
            class="flex-horizontal flex-justify"
            style="
              display: -webkit-box;
              -webkit-box-orient: horizontal;
              -webkit-box-pack: justify;
            "
          >
            <div class="nowrap" style="white-space: nowrap">
              1B17154B-DRAFT · $0.00 due March 4, 2023
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { formatAmount } from "@/helpers/helper";
export default {
  name: "PdfInvoice",

  props: {
    invoice: {
      type: Object,
      required: true,
    },
    editInvoiceData: {
      type: Object,
      default: () => {},
    },
    customFieldsPaymentOptions: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      total: 0,
      totalAmount: null,
      invoiceData: {},
    };
  },
  created() {
    this.invoiceData = this.invoice;
    this.amountTotal();
    const dayjsUtc = require("dayjs/plugin/utc");
    this.$dayjs.extend(dayjsUtc);
  },

  computed: {
    ...mapGetters("auth", ["user"]),
    companyLogo() {
      if (
        this.user &&
        this.user.admin_company_details &&
        this.user.admin_company_details.company_image_url
      ) {
        return this.user.admin_company_details.company_image_url;
      }
      return null;
    },
  },
  watch: {
    invoice: {
      handler(val) {
        this.invoiceData = val;
        this.amountTotal();
      },
      deep: true,
    },
    editInvoiceData: {
      handler(val) {
        console.log(val);
        console.log(this.invoice);
      },
    },
  },

  methods: {
    calculatePercentage(percentage) {
      if (percentage) {
        return Number(this.subTotalAmount().split("$")[1]) * (percentage / 100);
      }
      return null;
    },
    subTotalAmount() {
      if (this.invoiceData) {
        let total = 0;
        if (this.invoiceData.items && this.invoiceData.items.length > 0) {
          this.invoiceData.items.forEach((item) => {
            total += Number(item.rate) * Number(item.qty) || 0;
          });
        }
        return formatAmount(Number(total).toFixed(2));
      }
    },
    amountTotal() {
      if (this.invoiceData) {
        let total = 0;
        if (
          this.invoiceData &&
          this.invoiceData.items &&
          this.invoiceData.items.length > 0
        ) {
          this.invoiceData.items.forEach((item) => {
            total += Number(item.rate) * this.formatRate(item.qty) || 0;
          });
        }
        if (
          this.invoiceData &&
          this.invoiceData.customFields &&
          this.invoiceData.customFields.length > 0
        ) {
          this.invoiceData.customFields.forEach((item) => {
            // if(item.percentage != null || item.isPercentage){
            //   total = total + this.calculatePercentage(Number(item.percentage));
            // }else{
            total = total + Number(item.payment) || 0;
            // }
          });
        }
        this.totalAmount = formatAmount(Number(total).toFixed(2));
      }
    },
    // TODO: this is very wrong!!!
    /*
    I said this on Slack:
    For qty:
“1.0000” -> should be “1" in email/pdf.
“1.1000” -> should be “1.1" in email/pdf.
“1.1200” -> should be “1.12" in email/pdf.
“1.1230” -> should be “1.123" in email/pdf.
For rate:
“1.0000” -> should be “1.00" in email/pdf.
“1.1000” -> should be “1.10" in email/pdf.
“1.1200” -> should be “1.12" in email/pdf.
“1.1230” -> should be “1.123" in email/pdf.
For custom payments’ payment or invoice item’s amount or invoice’s balance_due or subtotal:
“1.0000” -> should be “1.00" in email/pdf.
“1.1000” -> should be “1.10" in email/pdf.
“1.1200” -> should be “1.12" in email/pdf.
“1.1230” -> should be “1.12" in email/pdf.
    */
    formatRate(rate) {
      let decimals;
      if (isNaN(rate)) {
        decimals = rate.toString().split(".")[1];
      } else {
        decimals = rate;
      }

      return decimals && decimals.length > 2 ? parseFloat(rate) : rate;
    },
    convertToMonthFormat(dueDate) {
      const date = new Date(
        new Date(dueDate).setDate(new Date(dueDate).getDate() + 1)
      );
      const month = date.toLocaleString("default", { month: "long" });
      const day = date.toLocaleString("default", { day: "2-digit" });
      const year = date.toLocaleString("default", { year: "numeric" });
      return `${month} ${day}, ${year}`;
    },
    convertToLocalDateTime(dateTimeString) {
      return this.$dayjs.utc(dateTimeString).local().format("YYYY-MM-DD HH:mm");
    },
    uniqueId(i, uniqueId) {
      return `${i}_${uniqueId}`;
    },
    handleAmount(unitPrice, quantity) {
      return formatAmount(this.formatRate(Number(unitPrice) * quantity));
    },
    getOptionNameFromFieldId(fieldId) {
      const option = this.customFieldsPaymentOptions.filter((ele) => {
        if (ele.fieldId === fieldId) {
          return ele;
        }
      });
      if (option.length > 0) {
        return option[0].name;
      }
      return "";
    },
    minTwoDecimal(val) {
      return Number(val).toLocaleString("en-US", {
        minimumFractionDigits: 2,
      });
    },
  },
};
</script>
