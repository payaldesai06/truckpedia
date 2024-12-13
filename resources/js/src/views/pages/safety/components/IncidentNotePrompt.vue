<template>
  <vs-prompt
    :title="title"
    :accept-text="acceptText"
    @cancel="onClose"
    @accept="onAccept"
    @close="onClose"
    :active="isPromptActive"
    class="custom-prompt"
  >
    <div class="vx-row">
      <div class="vx-col w-full">
        <label class="text-xs"
          >Date
          <vs-button
            color="warning"
            type="flat"
            size="small"
            style="padding: 4px"
            @click="localDate = ''"
            >Clear</vs-button
          >
        </label>
        <flat-pickr class="w-full" v-model="localDate" />
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col w-full">
        <label class="text-xs"
          >Time
          <vs-button
            color="warning"
            type="flat"
            size="small"
            style="padding: 4px"
            @click="localTime = ''"
            >Clear</vs-button
          >
        </label>
        <flat-pickr
          class="w-full"
          :config="configTimeFlatPickr"
          v-model="localTime"
        />
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col w-full">
        <label class="text-xs">Contact Type</label>
        <v-select
          :options="contactTypeOptions"
          :clearable="true"
          v-model="contactType"
          :reduce="(option) => option.value"
        >
        </v-select>
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col w-full">
        <label class="text-xs">Name</label>
        <vs-input class="w-full" v-model="name" />
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col w-full">
        <label class="text-xs">Phone</label>
        <vs-input class="w-full" v-model="phone" />
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col w-full">
        <label class="text-xs">Email</label>
        <vs-input class="w-full" v-model="email" />
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col w-full">
        <label class="text-xs">Note</label>
        <vs-textarea class="w-full" v-model="note" height="200px" />
      </div>
    </div>
  </vs-prompt>
</template>
<script>
import config from '@/config/constants.js';
export default {
  name: 'IncidentNotePrompt',
  props: {
    isPromptActive: {
      type: Boolean,
      default: false,
    },
    noteData: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isEdit() {
      return this.noteData && Object.keys(this.noteData).length;
    },
    title() {
      return this.isEdit ? 'Edit Note' : 'Add Note';
    },
    acceptText() {
      return this.isEdit ? 'Update' : 'Save';
    },
    isFormValid() {
      return (this.note || '').length > 0;
    },
  },
  data() {
    return {
      configTimeFlatPickr: {
        enableTime: true,
        noCalendar: true,
        time_24hr: true,
      },
      localDate: null,
      localTime: null,
      note: null,
      name: null,
      phone: null,
      email: null,
      contactTypeOptions: config.safetyModule.contactType,
      contactType: null,
    };
  },
  methods: {
    onAccept() {
      if (this.isEdit) {
        this.$emit('onAccept:Update', {
          ...this.noteData,
          localDate: this.localDate,
          localTime: this.localTime,
          note: this.note,
          contactType: this.contactType,
          name: this.name,
          phone: this.phone,
          email: this.email,
        });
        return;
      }
      this.$emit('onAccept', {
        localDate: this.localDate,
        localTime: this.localTime,
        note: this.note,
        contactType: this.contactType,
        name: this.name,
        phone: this.phone,
        email: this.email,
      });
    },
    onClose() {
      this.$emit('onClose');
    },
  },
  watch: {
    isPromptActive(val) {
      if (!val) {
        this.localDate = null;
        this.localTime = null;
        this.note = null;
        this.contactType = null;
        this.name = null;
        this.phone = null;
        this.email = null;
      }
      if (this.isEdit) {
        this.localDate = this.noteData.localDate;
        this.localTime = this.noteData.localTime;
        this.note = this.noteData.note;
        this.contactType = this.noteData.contactType || null;
        this.name = this.noteData.name || null;
        this.phone = this.noteData.phone || null;
        this.email = this.noteData.email || null;
      } else if (val) {
        this.localDate = this.$dayjs().format('YYYY-MM-DD');
        this.localTime = this.$dayjs().format('HH:mm');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@sass/custom/form.scss';

// Utilities
.height-170 {
  height: 170px;
}
::v-deep .vs-dialog {
  max-width: 50% !important;
}
</style>
