<template>
  <!-- Notes Section -->
  <div>
    <div class="vx-row flex justify-between items-end">
      <div class="vx-col">
        <h5 class="font-bold">Notes</h5>
      </div>
      <div class="vx-col flex">
        <vs-button
          v-show="!addNewNote"
          color="primary"
          size="small"
          type="border"
          @click="addNewNote = true"
        >
          ADD NOTE
        </vs-button>
        <vs-button
          v-show="addNewNote"
          color="primary"
          size="small"
          type="border"
          icon="done"
          @click="addNote"
        />
        <vs-button
          v-show="addNewNote"
          class="ml-1"
          color="danger"
          size="small"
          type="border"
          icon="close"
          @click="addNewNote = false"
        />
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col w-full" v-show="addNewNote">
        <vs-textarea
          class="w-full"
          v-model="note"
          placeholder="Enter Note"
          name="note"
          v-validate="'required'"
          data-vv-validate-on="change"
        />
        <span class="text-danger text-sm" v-if="errorMessage">
          {{ errorMessage }}
        </span>
      </div>
    </div>
    <div
      class="mt-1 vx-row max-height-120 overflow-auto"
      v-if="notes.length > 0"
    >
      <DataTable
        :value="notes"
        :rows="5"
        :paginator="false"
        class="p-datatable-sm w-full"
        responsiveLayout="scroll"
      >
        <Column field="lastModifiedByUserName" header="Name"></Column>
        <Column field="utcUpdatedAt" header="Last modified">
          <template #body="slotProps">
            {{ utcToLocalTime(slotProps.data.utcUpdatedAt) }}
          </template>
        </Column>
        <Column field="note" header="Note"></Column>
      </DataTable>
    </div>
    <div class="vx-row" v-else>
      <div class="vx-col w-full">
        <label class="text-xs break-words">There are no notes yet</label>
      </div>
    </div>
  </div>
</template>

<script>
import { Validator } from 'vee-validate';
const dict = {
  custom: {
    note: {
      required: 'Cannot submit an empty value as note.',
    },
  },
};
// Register custom messages
Validator.localize('en', dict);

export default {
  name: 'LoadNotes',
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    value: {
      handler(newVal) {
        this.notes = newVal || [];
      },
      deep: true,
      immediate: true,
    },
    notes: {
      handler(newVal) {
        this.$emit('input', newVal);
      },
      deep: true,
      immediate: true,
    },
    hasErrorInNotes(newVal) {
      if (newVal) {
        this.errorMessage = newVal;
        setTimeout(() => {
          this.errorMessage = null;
        }, 3000);
        this.errors.remove('note');
      }
    },
  },
  data() {
    return {
      notes: [],
      note: null,
      addNewNote: false,
      errorMessage: null,
    };
  },
  computed: {
    hasErrorInNotes() {
      return this.errors.first('note');
    },
    utcToLocalTime() {
      return (utcTime) => {
        if (!utcTime) return '';
        return this.$dayjs.utc(utcTime).local().format('YYYY-MM-DD HH:mm z');
      };
    },
  },
  methods: {
    async addNote() {
      await this.$validator.validateAll();
      if (this.note) {
        this.notes.unshift({ id: null, note: this.note });
        this.note = '';
        this.addNewNote = false;
      }
    },
  },
};
</script>
