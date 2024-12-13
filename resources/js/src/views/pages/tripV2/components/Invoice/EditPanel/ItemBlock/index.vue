<template>
  <div>
    <vx-card class="mt-2">
      <header>
        <div class="vx-row flex justify-between items-end">
          <div class="vx-col">
            <h5 class="font-bold">Items</h5>
          </div>
          <div class="vx-col flex">
            <vs-button
              v-if="hasRecordLinkAccess && !showAddItemCard"
              class="mr-2"
              color="primary"
              size="small"
              type="filled"
              @click="toggleRecordDialog"
            >
              ADD ITEM FROM INVENTORY
            </vs-button>
            <vs-button
              v-if="!showAddItemCard"
              color="primary"
              size="small"
              type="filled"
              @click="showAddItemCardItems"
            >
              ADD ITEM
            </vs-button>
            <strong v-else> {{ formatRate(itemTotal) }} </strong>
          </div>
        </div>
        <vs-divider />
      </header>
      <section v-if="items.length">
        <section v-for="(item, index) in items" :key="index">
          <div class="vx-row flex justify-between items-center">
            <div class="vx-col w-1/2">
              <h5>{{ item.name }} x {{ formatRate(item.qty) }}</h5>
            </div>
            <div class="vx-col w-1/2 flex justify-end items-baseline">
              <h5 class="mr-4">
                {{ formatAmountValue(formatRate(item.qty * item.rate)) }}
              </h5>
              <vs-button
                color="primary"
                size="small"
                type="border"
                icon="edit"
                @click.stop="editItem(index)"
              />
              <vs-button
                class="ml-1"
                color="danger"
                size="small"
                type="border"
                icon="delete"
                @click.stop="deleteItem(index)"
              />
            </div>
          </div>
          <vs-divider />
        </section>
        <div class="vx-row flex justify-between items-end">
          <div class="vx-col">
            <h5 class="font-bold"></h5>
          </div>
          <div class="vx-col flex">
            <strong> {{ formatRate(itemTotal) }} </strong>
          </div>
        </div>
      </section>
      <section v-else>
        <div class="vx-row flex justify-centre">
          <div class="vx-col">
            <h5 class="font-italic">No items added yet</h5>
          </div>
        </div>
      </section>
      <section v-if="showAddItemCard" class="mt-3">
        <AddItemCard
          ref="addItemCard"
          :itemValue="itemToEdit"
          :warehouseOptions="warehouseOptions"
          :recordList="recordList"
          @cancel="showAddItemCard = false"
          @save="addItem"
          @toggleRecordDialog="toggleRecordDialog"
        />
      </section>
    </vx-card>

    <!-- Record Dialog -->
    <RecordDialog
      v-if="recordDialogActive"
      :isDialogActive="recordDialogActive"
      :recordList="recordList"
      :priceFieldId="priceFieldId"
      :selectedFieldId="selectedFieldId"
      @onClose="closeRecordDialog"
      @onSelect="linkRecord"
      @searchLinkedRecords="searchLinkedRecords"
    />
  </div>
</template>
<!-- eslint-disable multiline-ternary implicit-arrow-linebreak -->
<script>
import { formatAmount } from "@/helpers/helper";
import { isEmpty } from "lodash";
import { mapGetters } from "vuex";

import config from "@/config/constants";

export default {
  name: "ItemCreator",
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    AddItemCard: () => import("./AddItemCard"),
    RecordDialog: () => import("../RecordDialog"),
  },
  data() {
    return {
      items: [],
      showAddItemCard: false,
      itemToEdit: null,
      recordList: [],
      recordDialogActive: false,
      submenuId: null,
      priceFieldId: null,
      selectedFieldId: null,
      selectedRecordIDX: null,
      warehouseOptions: [],
    };
  },
  mounted() {
    this.init();
  },
  watch: {
    value: {
      handler: function (val) {
        this.items = val;
      },
      deep: true,
    },
    items: {
      handler: function (val) {
        this.$emit("input", val);
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters("auth", ["user"]),

    itemTotal() {
      const total = this.items.reduce((acc, item) => {
        return acc + item.qty * item.rate;
      }, 0);

      return this.formatAmountValue(Number(total).toFixed(2));
    },
    hasRecordLinkAccess() {
      return (
        this.user &&
        this.user.admin_company_details &&
        this.user.admin_company_details.admin_company_detail_id &&
        config.companiesWithInvoiceRecordPopupAccess.includes(
          Number(this.user.admin_company_details.admin_company_detail_id)
        )
      );
    },
  },
  methods: {
    showAddItemCardItems() {
      this.showAddItemCard = true;
      this.itemToEdit = null;
    },
    formatRate(rate) {
      const decimals = rate.toString().split(".")[1];

      return decimals && decimals.length > 2 ? parseFloat(rate) : rate;
    },
    addItem(item) {
      const { index } = item;
      if (index !== null && index >= 0) {
        delete item.index;
        this.$set(this.items, index, item);
      } else {
        this.items.push(item);
      }
      this.showAddItemCard = false;
      this.itemToEdit = null;
      this.selectedRecordIDX = null;
    },
    deleteItem(index) {
      if (this.itemToEdit && this.itemToEdit.index === index) {
        this.itemToEdit = null;
        this.showAddItemCard = false;
        this.selectedRecordIDX = null;
      }
      this.items.splice(index, 1);
    },
    editItem(index) {
      this.itemToEdit = {
        ...this.items[index],
        qty: this.items[index].qty ? Number(this.items[index].qty) : "",
        rate: this.items[index].rate ? Number(this.items[index].rate) : "",
        index,
      };
      this.showAddItemCard = true;
      this.selectedRecordIDX = index;

      if (this.showAddItemCard && this.$refs.addItemCard) {
        this.$refs.addItemCard.updateCurrentItem({
          ...this.itemToEdit,
        });
      }
    },
    formatAmountValue(amount) {
      return formatAmount(amount);
    },
    async searchLinkedRecords(searchObj) {
      let records = await this.fetchTargetRecords(
        this.submenuId,
        searchObj.fieldId,
        searchObj.text
      );

      if (!isEmpty(records)) {
        records = this.formatTargetRecords(records);
        this.recordList = records[searchObj.fieldId];
      }
    },
    formatTargetRecords(records) {
      const customFields = records.recordCustomFields; //.slice(0, 4)
      const customFieldsData = records.recordData.map((record) => {
        record.customFieldsData = record.customFieldsData.filter((field) =>
          customFields.find((customField) => customField.id === field.fieldId)
        );

        return record;
      });
      const fieldValueTypes = [
        "textValue",
        "userValue",
        "singleSelectValue",
        "numberValue",
        "currencyValue",
        "multiSelectValue",
      ];

      const formattedRecords = customFieldsData.map((record) => {
        const data = record.customFieldsData
          .map((field) => {
            const customField = customFields.find(
              (customField) =>
                customField.id === field.fieldId &&
                fieldValueTypes.some((type) => field[type])
            );

            if (customField) {
              let fieldValue = "";
              let fieldColor = "";

              if (field.textValue) fieldValue = field.textValue;
              if (field.userValue)
                fieldValue = field.userValue
                  .map((user) => this.allUsersMap[user.userId].fullName)
                  .join(", ");
              if (field.singleSelectValue) {
                fieldValue = customField.singleSelectOptions.find(
                  (option) => option.optionId === field.singleSelectValue
                ).optionName;

                fieldColor = customField.singleSelectOptions.find(
                  (option) => option.optionId === field.singleSelectValue
                ).color;
              }
              if (field.hasOwnProperty("numberValue"))
                fieldValue = field.numberValue;
              if (field.currencyValue)
                fieldValue = field.currencyValue
                  ? `$${parseFloat(field.currencyValue).toFixed(2)}`
                  : "";
              if (field.multiSelectValue) {
                fieldValue = customField.multiSelectOptions
                  .filter((option) =>
                    field.multiSelectValue.includes(option.optionId)
                  )
                  .map((option) => option.optionName)
                  .join(", ");
              }

              const values = {
                fieldId: customField.id,
                name: customField.name,
                value: fieldValue,
                color: fieldColor,
                type: customField.type,
              };

              return values;
            }
          })
          .filter((field) => field);

        return {
          recordId: record.id,
          data,
        };
      });

      return { [records.fieldId]: formattedRecords };
    },
    async fetchTargetRecords(submenuId, fieldId, searchKeyWords = null) {
      try {
        const {
          status,
          data: {
            result,
            payload: { recordCustomFields, recordData },
          },
        } = await this.$store.dispatch("menuV2/getTargetRecords", {
          submenuId,
          fieldId,
          searchKeyWords,
        });

        if (status === 200 && result) {
          return {
            fieldId,
            recordCustomFields,
            recordData,
          };
        }
      } catch (error) {
        console.log(error);
      }
    },
    async init() {
      try {
        if (this.hasRecordLinkAccess) {
          const { fieldId, submenuId, priceFieldId, warehouseOptions } =
            config.invoiceRecordPopup.filter(
              (field) =>
                field.companyId ===
                Number(this.user.admin_company_details.admin_company_detail_id)
            )[0] || {};

          if (fieldId && submenuId) {
            let records = await this.fetchTargetRecords(submenuId, fieldId);

            if (!isEmpty(records)) {
              records = this.formatTargetRecords(records);
              this.recordList = records[fieldId];
            }
          }

          this.submenuId = submenuId || null;
          this.priceFieldId = priceFieldId || null;
          this.selectedFieldId = fieldId || null;
          this.warehouseOptions = warehouseOptions || [];
        }
      } catch (error) {
        console.log(error);
      }
    },
    toggleRecordDialog() {
      this.recordDialogActive = true;
    },
    closeRecordDialog() {
      this.recordDialogActive = false;
    },
    linkRecord(record) {
      this.itemToEdit = {
        name: record.item,
        qty: 1,
        rate: record.price,
        syncToMenu: {
          recordLinkValues: [
            {
              recordId: record.recordId,
            },
          ],
          singleSelectValue: null,
        },
        index: this.selectedRecordIDX,
      };
      this.showAddItemCard = true;

      if (this.$refs.addItemCard) {
        this.$refs.addItemCard.updateCurrentItem({
          ...this.itemToEdit,
        });
      }

      this.closeRecordDialog();
    },
  },
};
</script>
