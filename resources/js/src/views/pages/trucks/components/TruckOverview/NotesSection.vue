<template>
  <!-- Notes Section -->
  <vx-card>
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
    <vs-divider />
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
    <div class="vx-row max-height-120 overflow-auto" v-if="notes.length > 0">
      <div class="vx-col w-full" v-for="(item, index) in notes" :key="index">
        <label class="text-xs">{{ item.note }}</label>
      </div>
    </div>
    <div class="vx-row" v-else>
      <div class="vx-col w-full">
        <label class="text-xs break-words">There are no notes yet</label>
      </div>
    </div>
  </vx-card>
</template>

<script>
import { Validator } from "vee-validate";
const dict = {
  custom: {
    note: {
      required: "Cannot submit an empty value as note.",
    },
  },
};
// Register custom messages
Validator.localize("en", dict);

export default {
  name: "NotesSection",
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    value: {
      handler (newVal) {
        this.notes = newVal || []
      },
      deep: true,
      immediate: true
    },
    notes(newVal) {
      this.$emit("input", newVal);
    },
    hasErrorInNotes(newVal) {
      if (newVal) {
        this.errorMessage = newVal;
        setTimeout(() => {
          this.errorMessage = null;
        }, 3000);
        this.errors.remove("note");
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
      return this.errors.first("note");
    },
  },
  methods: {
    async addNote() {
      await this.$validator.validateAll();
      if (this.note) {
        this.notes.push({ id: null, note: this.note });
        this.note = "";
      }
    },
  },
};
</script>
