<template>
  <div class="mt-2 pb-6">
    <header>
      <div class="vx-row flex justify-between items-end">
        <div class="vx-col">
          <h5 class="font-bold">Invoice generator</h5>
        </div>
        <div class="vx-col flex">
          <vs-button
            color="primary"
            type="filled"
            v-if="checkStatus()"
            @click.stop="saveAsDraft"
          >
            Save
          </vs-button>
          <vs-button
            class="ml-2"
            color="primary"
            type="filled"
            v-if="checkStatus()"
            @click.stop="issueInvoice"
          >
            Issue invoice
          </vs-button>
          <vs-button
            v-else
            class="ml-2"
            color="primary"
            type="filled"
            @click.stop="saveInvoice"
          >
            Save
          </vs-button>
        </div>
      </div>
      <vs-divider />
    </header>
    <CustomerSelector
      v-model="customerInfo"
      :editInvoiceDetails="editInvoiceDetails"
    ></CustomerSelector>
    <ItemBlock v-model="items"></ItemBlock>
    <CustomFieldBlock
      :customFieldsData="customFields"
      :items="items"
      @customFieldsUpdate="customFieldsUpdate"
      @customFieldsOptions="customFieldsOptions"
      :toggleAddNewInvoicePopup="toggleAddNewInvoicePopup"
    ></CustomFieldBlock>

    <!-- Notes -->
    <vx-card class="mt-2">
      <div>
        <div class="vx-row flex justify-between items-end">
          <div class="vx-col">
            <h5 class="font-bold">Notes</h5>
          </div>
        </div>
        <vs-divider />
      </div>
      <div>
        <vue-editor
          id="invoice-vue-editor-style"
          :editorOptions="editorOptions"
          v-model="notes"
        />
      </div>
    </vx-card>

    <!-- Invoice Payments -->
    <vx-card class="mt-2" v-if="(invoicePayments || []).length">
      <div>
        <div class="vx-row flex justify-between items-end">
          <div class="vx-col">
            <h5 class="font-bold">Invoice Payments</h5>
          </div>
        </div>
        <vs-divider />
      </div>
      <div>
        <DataTable :value="invoicePayments">
          <Column field="transactionId" header="Transaction #"></Column>
          <Column field="amountPaid" header="Amount Paid">
            <template #body="{ data: { amountPaid } }">
              {{ `${formatAmountValue(amountPaid)}` }}
            </template>
          </Column>
          <Column field="status" header="Status">
            <template #body="{ data: { status } }">
              {{ `${sentenceCase(status)}` }}
            </template>
          </Column>
          <Column field="last4Digits" header="Card"></Column>
          <Column field="utcDatetime" header="Created Date">
            <template #body="{ data: { utcDatetime } }">
              {{ `${utcToLocalDateTime(utcDatetime)}` }}
            </template>
          </Column>
        </DataTable>
      </div>
    </vx-card>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

import { isEmpty } from "lodash";
import { formatAmount, sentenceCase } from "@/helpers/helper";

export default {
  name: "EditInvoicePanel",
  components: {
    CustomerSelector: () => import("./EditPanel/CustomerSelector"),
    ItemBlock: () => import("./EditPanel/ItemBlock"),
    CustomFieldBlock: () => import("./EditPanel/CustomField"),
    VueEditor,
  },
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
    editInvoiceDetails: {
      type: Object,
      default: () => ({}),
    },
    toggleAddNewInvoicePopup: {
      type: Boolean,
    },
  },
  data() {
    return {
      customerInfo: {
        selectedCustomer: null,
        invoiceNumber: null,
        dueDate: null,
        shippingAddress: null,
      },
      items: [],
      customFields: [],
      editorOptions: {
        modules: {
          toolbar: false,
        },
      },
      notes: null,
      invoicePayments: [],
    };
  },
  watch: {
    value: {
      handler(value) {
        this.customerInfo.selectedCustomer = value.customer;
        this.items = value.items;
        this.customFields = value.customFields;
        this.notes = value.notes || null;
        this.invoicePayments = value.invoicePayments || [];
      },
      immediate: true,
      deep: true,
    },
    invoice: {
      handler(value) {
        this.$emit("input", value);
      },
      deep: true,
    },
    editInvoiceDetails: {
      handler(value) {
        if (isEmpty(value)) this.getInvoiceNumberSuggestion();
      },
    },
  },
  computed: {
    invoice() {
      return {
        customer: this.customerInfo.selectedCustomer,
        invoiceNumber: this.customerInfo.invoiceNumber || null,
        dueDate: this.customerInfo.dueDate || null,
        shippingAddress: this.customerInfo.shippingAddress || null,
        items: this.items,
        customFields: this.customFields,
        notes: this.notes || null,
        invoicePayments: this.invoicePayments || [],
      };
    },
  },
  created() {
    const dayjsUtc = require('dayjs/plugin/utc');
    this.$dayjs.extend(dayjsUtc);
  },
  methods: {
    customFieldsUpdate(val) {
      this.customFields = val;
    },
    checkStatus() {
      if (
        this.editInvoiceDetails.status != "requested" &&
        this.editInvoiceDetails.status != "paid"
      ) {
        return true;
      }
      return false;
    },
    resetEditInvoicesDetails() {
      this.customerInfo = {
        selectedCustomer: null,
        invoiceNumber: null,
        dueDate: null,
        shippingAddress: null,
      };
      this.items = [];
      this.customFields = [];
      this.notes = null;
      this.invoicePayments = [];
    },
    customFieldsOptions(options) {
      this.$emit("customFieldsOptions", options);
    },
    saveAsDraft() {
      this.$emit("submit", "draft");
    },
    async issueInvoice() {
      const isValid = await this.validateInvoice();
      if (!isValid) return;
      this.$emit("submit", "requested");
    },
    async saveInvoice() {
      const isValid = await this.validateInvoice();
      if (!isValid) return;
      this.$emit("submit", this.editInvoiceDetails.status);
    },
    async validateInvoice() {
      const { selectedCustomer, dueDate, invoiceNumber } =
        this.customerInfo || {};
      const { customer_id } = selectedCustomer || {};
      if (!customer_id) {
        this.$vs.notify({
          title: "Error",
          text: "Please select a customer",
          color: "danger",
        });
        return false;
      }
      if (!invoiceNumber) {
        this.$vs.notify({
          title: "Error",
          text: "Please enter an invoice number",
          color: "danger",
        });
        return false;
      }
      if (!dueDate) {
        this.$vs.notify({
          title: "Error",
          text: "Please select a due date",
          color: "danger",
        });
        return false;
      }

      const { items, customFields } = this.invoice;
      if (items.length === 0 && customFields.length === 0) {
        this.$vs.notify({
          title: "Error",
          text: "Please add at least one item or one custom field",
          color: "danger",
        });
        return false;
      }
      if (customFields && customFields.length > 0) {
        const invalidFields = customFields.filter(
          (field) => field.name === "" || field.value === null
        );
        if (invalidFields.length > 0) {
          this.$vs.notify({
            title: "Error",
            text: "Please fill all custom fields",
            color: "danger",
          });
          return false;
        }
      }
      return true;
    },
    async getInvoiceNumberSuggestion() {
      try {
        const { data } = await this.$store.dispatch(
          "invoiceV2/fetchInvoiceNumberSuggestion"
        );
        this.customerInfo.invoiceNumber = data.payload.invoiceNumber;
      } catch (error) {}
    },
    formatAmountValue(amount) {
      if (!amount) return '';
      return formatAmount(Number(amount));
    },
    sentenceCase(str) {
      return sentenceCase(str);
    },
    utcToLocalDateTime(utcDatetime) {
      if (!utcDatetime) return "";
      return this.$dayjs.utc(utcDatetime).local().format("YYYY-MM-DD HH:mm");
    },
  },
};
</script>

<style lang="scss" scoped>
#invoice-vue-editor-style {
  height: 100%;
}
::v-deep {
  #invoice-vue-editor-style {
    height: 100%;
  }
  .ql-editor {
    &.ql-blank {
      resize: vertical;
    }
  }
}
</style>

