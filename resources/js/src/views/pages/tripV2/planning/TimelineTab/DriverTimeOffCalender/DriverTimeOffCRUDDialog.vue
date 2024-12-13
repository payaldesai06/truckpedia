<template>
  <Dialog
    class="dialog driver-time-off-form"
    :visible="isDialogActive"
    :closable="false"
    :modal="true"
    :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
    :style="{ width: '40vw' }"
  >
    <!-- Header Section -->
    <template #header>
      <div class="w-full flex items-center justify-between">
        <div class="w-full flex justify-between border-right">
          <div class="flex self-center">
            <strong> 
              <span v-if="formData.id"> Update </span>
              <span v-else>Add new </span>
              driver time off
            </strong>
          </div>
        </div>
        <div class="ml-4 self-end">
          <vs-icon
            v-if="formData.id"
            class="cursor-pointer"
            icon="delete"
            size="small"
            color="danger"
            @click="showDeletePrompt = true"
          />
        </div>
      </div>
    </template>
    <!-- Body Section -->
    <div class="w-full mt-4">
      <div class="w-full flex vx-row">
        <div class="mt-4 vx-col w-1/3">
          <label class="text-xs" for="startDate">
            Start Date
            <field-required-sign />
          </label>
          <flat-pickr
            name="startDate"
            v-model="formData.start.date"
            :config="configDateFlatPickr"
            class="w-full"
            v-validate="'required'"
          />
          <span class="text-danger text-sm">
            {{ errors.first("startDate") }}
          </span>
        </div>

        <div class="mt-4 vx-col w-1/3">
          <label class="text-xs flex">
            Start Time
            <vs-button
              color="warning"
              type="flat"
              size="small"
              style="padding: 0; margin-left: 1rem"
              @click.native="formData.start.time = ''"
            >
              Clear
            </vs-button>
          </label>
          <flat-pickr
            v-model="formData.start.time"
            :config="configTimeFlatPickr"
            class="w-full"
          />
        </div>
      </div>
      <div class="w-full flex vx-row">
        <div class="mt-4 vx-col w-1/3">
          <label class="text-xs" for="endDate">
            End Date
            <field-required-sign />
          </label>
          <flat-pickr
            name="endDate"
            v-model="formData.end.date"
            :config="configDateFlatPickr"
            class="w-full"
            v-validate="'required'"
          />
          <span class="text-danger text-sm">
            {{ errors.first("endDate") }}
          </span>
        </div>

        <div class="mt-4 vx-col w-1/3">
          <label class="text-xs flex">
            End Time
            <vs-button
              color="warning"
              type="flat"
              size="small"
              style="padding: 0; margin-left: 1rem"
              @click.native="formData.end.time = ''"
            >
              Clear
            </vs-button>
          </label>
          <flat-pickr
            v-model="formData.end.time"
            :config="configTimeFlatPickr"
            class="w-full"
          />
        </div>
      </div>
    </div>
    <!-- Footer Section -->
    <template #footer>
      <div class="w-full mt-4">
        <div class="w-1/3 flex ml-auto">
          <vs-button class="w-full" color="primary" @click="submit"> Save </vs-button>
          <vs-button
            class="w-full mr-0"
            color="primary"
            type="border"
            @click.stop="close"
          >
            Cancel
          </vs-button>
        </div>
      </div>
    </template>
    <DeletePrompt
      id="delete-prompt"
      v-if="showDeletePrompt"
      :isPromptActive="showDeletePrompt"
      :label="'Do you want to delete this record ?'"
      @onAccept="deleteRecord"
      @onClose="showDeletePrompt = false"
    >
    </DeletePrompt>
  </Dialog>
</template>

<script>
import { Validator } from "vee-validate";
const dict = {
  custom: {
    startDate: {
      required: "The start date is required",
    },
    endDate: {
      required: "The end date is required",
    },
  },
};
Validator.localize("en", dict);

export default {
  name: "DriverTimeOffForm",
  components: {
    DeletePrompt: () => import("./DeletePrompt.vue"),
  },
  props: {
    isDialogActive: {
      type: Boolean,
      default: false,
    },
    selectedData: {
      type: Object | Boolean,
      default: () => ({}),
    },
  },
  data() {
    return {
      configTimeFlatPickr: {
        enableTime: true,
        noCalendar: true,
        time_24hr: true,
      },
      configDateFlatPickr: {
        enableTime: false,
        dateFormat: "Y-m-d",
      },
      formData: {
        start: {
          date: "",
          time: "",
          timezone: "",
        },
        end: {
          date: "",
          time: "",
          timezone: "",
        },
      },
      showDeletePrompt: false,
    };
  },
  watch : {
    selectedData: {
      handler: function (newVal, oldVal) {
        if (typeof newVal === "object" && newVal !== null) {
          const { start, end, id } = newVal || {};
          if (start && end) {
            this.formData = {
              id,
              start: start,
              end: end,
            };
          }
        }
      },
      deep: true,
      immediate: true,
    },
    isDialogActive: {
      handler: function (newVal, oldVal) {
        if (newVal === false) {
          this.$nextTick(() => {
            this.$validator.reset();
            this.formData = {
              start: {
                date: "",
                time: "",
                timezone: "",
              },
              end: {
                date: "",
                time: "",
                timezone: "",
              },
            };
          });
        }
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    submit(){
      this.$validator.validateAll().then(async (result) => {
        if (result) {
          this.$emit("submit", this.formData);
        }
      });
    },
    deleteRecord() {
      this.$emit("delete", this.formData);
    },
  },
};
</script>

<style lang="scss">
  .flatpickr-calendar.open {
    z-index: 100000 !important;
  }
  .driver-time-off-form {
    .vx-row {
      align-items: baseline;
    }
  }
  #delete-prompt {
    z-index: 100002 !important;
    .vs-dialog-dark,
    .vs-dialog {
      z-index: 100001 !important;
    }
  }

</style>