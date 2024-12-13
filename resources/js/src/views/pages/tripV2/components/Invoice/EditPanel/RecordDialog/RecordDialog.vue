<template>
  <Dialog
    :visible="isDialogActive"
    :closable="false"
    :modal="true"
    :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
    :style="{ width: '40vw' }"
  >
    <!-- Header Section -->
    <template #header>
      <div class="w-full flex items-center justify-between">
        <vs-input
          v-model="searchText"
          @input="onInput"
          class="w-full"
          icon="search"
          placeholder="Find an existing record"
        />
        <vs-icon
          class="cursor-pointer ml-2"
          icon="close"
          size="small"
          @click="onClose"
        />
      </div>
    </template>

    <!-- Main Content -->
    <div class="mt-4 max-h-500 overflow-y-auto">
      <div
        v-if="
          filteredRecordList &&
          filteredRecordList.length &&
          isRecordDataAvailable
        "
        class="w-full"
      >
        <div
          v-for="record in filteredRecordList"
          :key="record.recordId"
          @click="onSelect(record)"
        >
          <div
            v-if="record.data.length"
            class="p-2 cursor-pointer border-2 rounded mb-2 flex w-full justify-between flex-wrap"
          >
            <div
              v-for="(rec, index) in record.data"
              :key="index"
              :class="[
                index === 0 || !(record.data.length > 2)
                  ? 'w-full'
                  : `w-1/${record.data.length - 1}`,
              ]"
            >
              <div class="w-full flex items-center" v-if="index === 0">
                <vs-chip
                  v-if="rec.type === 'singleSelect'"
                  class="w-max text-ellipsis cursor-pointer"
                  :color="rec.color ? rec.color : ''"
                >
                  {{ rec.value }}
                </vs-chip>
                <label
                  v-else
                  class="font-semibold text-ellipsis cursor-pointer"
                >
                  {{ rec.value }}
                </label>
              </div>
              <div class="flex flex-col w-full mt-2" v-else-if="index > 0">
                <label class="text-xs cursor-pointer">{{ rec.name }}</label>
                <vs-chip
                  v-if="rec.type === 'singleSelect'"
                  class="w-max text-ellipsis cursor-pointer"
                  :color="rec.color ? rec.color : ''"
                >
                  {{ rec.value }}
                </vs-chip>
                <label v-else class="text-ellipsis cursor-pointer">
                  {{ rec.value }}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="w-full flex items-center justify-center">
        <label class="text-lg text-gray-500">No record found</label>
      </div>
    </div>
  </Dialog>
</template>
<!-- eslint-disable multiline-ternary indent implicit-arrow-linebreak -->
<script>
import _debounce from "lodash/debounce";

export default {
  name: "RecordDialog",
  props: {
    isDialogActive: {
      type: Boolean,
      default: false,
    },
    recordList: {
      type: Array,
      default: () => [],
    },
    priceFieldId: {
      type: Number,
      default: null,
    },
    selectedFieldId: {
      type: Number,
      default: null,
    },
  },
  computed: {
    filteredRecordList() {
      return this.recordList;
    },
    isRecordDataAvailable() {
      return (this.recordList || []).some((record) => {
        return record.data.length > 0;
      });
    },
  },
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    onInput: _debounce(function () {
      this.$emit("searchLinkedRecords", {
        text: this.searchText,
        fieldId: this.selectedFieldId,
      });
    }, 500),
    onClose() {
      this.$emit("onClose");
    },
    onSelect(record) {
      const priceField = record.data.find(
        (rec) => rec.type === "currency" && rec.fieldId === this.priceFieldId
      );
      const price =
        this.priceFieldId && priceField && priceField.value
          ? parseFloat(priceField.value.substring(1))
          : null;
      const payload = {
        recordId: record.recordId,
        item: record.data.find((rec) => rec.type === "text").value || "",
        price,
      };
      this.$emit("onSelect", payload);
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .vs-input--icon {
    font-size: 1.5rem;
  }
}

// Utilities Classes
.border-2 {
  border: 2px solid rgba(0, 0, 0, 0.1);

  &:hover {
    border: 2px solid rgba(0, 0, 0, 0.2);
  }
}

.max-h-500 {
  max-height: 500px;
}

.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.w-max {
  width: max-content;
}

.text-gray-500 {
  color: #6b7280;
}
</style>
