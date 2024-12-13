<template>
  <div class="mt-4">
    <vx-card>
      <div class="vx-row justify-end">
        <div class="vx-col">
          <vs-button
            color="primary"
            type="border"
            size="small"
            icon="add"
            @click.stop="toggleNotePrompt()"
          >
            ADD NOTE
          </vs-button>
        </div>
      </div>
      <vs-divider />
      <div class="vx-row mx-auto">
        <DataTable
          class="w-full"
          :value="notes"
          :key="defaultKey"
          filterDisplay="row"
          :loading="loading"
          responsiveLayout="scroll"
          :lazy="true"
        >
          <Column header="" :headerStyle="{ width: '0.5rem' }">
            <template #body="{ data }">
              <div class="flex items-center gap-1">
                <vs-icon
                  class="cursor-pointer"
                  icon="delete"
                  size="small"
                  @click.prevent="deleteNote(data.noteId)"
                />
                <vs-icon
                  class="cursor-pointer"
                  icon="edit"
                  size="small"
                  @click.prevent="editNote(data.noteId)"
                />
              </div>
            </template>
          </Column>
          <Column
            field=""
            header="Date"
            :headerStyle="{ minWidth: '140px' }"
            :showFilterMenu="false"
            :sortable="false"
          >
            <template #body="{ data: { localDate, localTime } }">
              <div>
                <span>
                  {{ getDateTime(localDate, localTime) }}
                </span>
              </div>
            </template>
          </Column>
          <Column
            field="contactType"
            header="Contact Type"
            :headerStyle="{ minWidth: '140px' }"
            :showFilterMenu="false"
            :sortable="false"
          >
            <template #body="{ data: { contactType } }">
              <div>
                <span>
                  {{ getLabel(contactType) }}
                </span>
              </div>
            </template>
          </Column>
          <Column
            field="name"
            header="Name"
            :headerStyle="{ minWidth: '140px' }"
            :showFilterMenu="false"
            :sortable="false"
          >
          </Column>
          <Column
            field="phone"
            header="Phone"
            :headerStyle="{ minWidth: '140px' }"
            :showFilterMenu="false"
            :sortable="false"
          >
          </Column>
          <Column
            field="email"
            header="Email"
            :headerStyle="{ minWidth: '140px' }"
            :showFilterMenu="false"
            :sortable="false"
          >
          </Column>
          <Column
            field="note"
            header="Note"
            :showFilterMenu="false"
            :sortable="false"
            :bodyStyle="{}"
          >
            <template #body="{ data: { note } }">
              <div>
                <span>
                  {{ note }}
                </span>
              </div>
            </template>
          </Column>
          <template #empty><b>No records found</b></template>
        </DataTable>
      </div>
    </vx-card>

    <incident-note-prompt
      :isPromptActive="notePrompt.isPromptActive"
      :noteData="notePrompt.data"
      @onClose="toggleNotePrompt"
      @onAccept="addNote"
      @onAccept:Update="updateNote"
    />
  </div>
</template>

<script>
import { getUniqueIdV4, getApiErrorMsg } from '@/helpers/helper';
import config from '@/config/constants.js';

export default {
  name: 'IncidentNoteTab',
  components: {
    IncidentNotePrompt: () => import('./IncidentNotePrompt.vue'),
  },
  props: {
    value: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    notes() {
      return this.value.notesArray || [];
    },
  },
  data() {
    return {
      loading: false,
      notePrompt: {
        isPromptActive: false,
        data: null,
      },
      defaultKey: 0,
    };
  },
  methods: {
    getDateTime(date, time) {
      return `${date || ''} ${time || ''}`.trim();
    },
    getLabel(value) {
      const contactTypeOptions = config.safetyModule.contactType;
      const type = contactTypeOptions.find((item) => item.value === value);
      return type ? type.label : '';
    },
    toggleNotePrompt(data = null) {
      this.notePrompt = {
        isPromptActive: !this.notePrompt.isPromptActive,
        data,
      };
    },
    async addNote(noteData) {
      try {
        if (this.isEdit) {
          const payload = {
            incidentId: this.value.incidentId || null,
            localDate: noteData.localDate || null,
            localTime: noteData.localTime || null,
            note: noteData.note || null,
            contactType: noteData.contactType || null,
            name: noteData.name || null,
            phone: noteData.phone || null,
            email: noteData.email || null,
          };

          const { data } = await this.$store.dispatch(
            'incidents/createNote',
            payload
          );

          if (data.payload && data.payload.noteId) {
            this.value.notesArray = [
              ...this.value.notesArray,
              {
                noteId: data.payload.noteId,
                localDate: noteData.localDate || null,
                localTime: noteData.localTime || null,
                contactType: noteData.contactType || null,
                note: noteData.note || null,
                name: noteData.name || null,
                phone: noteData.phone || null,
                email: noteData.email || null,
              },
            ];
          }
        } else {
          this.value.notesArray = [
            ...(this.value.notesArray || []),
            {
              noteId: getUniqueIdV4(),
              localDate: noteData.localDate || null,
              localTime: noteData.localTime || null,
              note: noteData.note || null,
              contactType: noteData.contactType || null,
              name: noteData.name || null,
              phone: noteData.phone || null,
              email: noteData.email || null,
            },
          ];
        }

        this.toggleNotePrompt();
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
      }
    },
    async editNote(noteId) {
      const noteData = ((this.value || {}).notesArray || []).find(
        (note) => note.noteId === noteId
      );

      if (noteData) {
        this.toggleNotePrompt(noteData);
      }
    },
    async updateNote(noteData) {
      try {
        if (this.isEdit) {
          const payload = {
            incidentId: this.value.incidentId || null,
            noteId: noteData.noteId,
            localDate: noteData.localDate,
            localTime: noteData.localTime,
            note: noteData.note,
            contactType: noteData.contactType || null,
            name: noteData.name,
            phone: noteData.phone,
            email: noteData.email,
          };

          await this.$store.dispatch('incidents/updateNote', payload);

          this.value.notesArray = this.value.notesArray.map((note) => {
            if (note.noteId === noteData.noteId) {
              return {
                ...note,
                localDate: noteData.localDate,
                localTime: noteData.localTime,
                note: noteData.note,
                contactType: noteData.contactType || null,
                name: noteData.name,
                phone: noteData.phone,
                email: noteData.email,
              };
            }

            return note;
          });
        } else {
          this.value.notesArray = this.value.notesArray.map((note) => {
            if (note.noteId === noteData.noteId) {
              return {
                ...note,
                localDate: noteData.localDate,
                localTime: noteData.localTime,
                note: noteData.note,
                contactType: noteData.contactType || null,
                name: noteData.name,
                phone: noteData.phone,
                email: noteData.email,
              };
            }

            return note;
          });
        }

        this.toggleNotePrompt();
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
      }
    },
    deleteNote(noteId) {
      this.$vs.dialog({
        color: 'danger',
        title: 'Delete Note',
        text: 'Are you sure you want to delete this note?',
        accept: this.deleteNoteFromIncident.bind(this, noteId),
      });
    },
    async deleteNoteFromIncident(noteId) {
      try {
        if (this.isEdit) {
          const payload = {
            incidentId: this.value.incidentId || null,
            noteId,
          };

          await this.$store.dispatch('incidents/deleteNote', payload);

          this.value.notesArray = this.value.notesArray.filter(
            (note) => note.noteId !== noteId
          );
        } else {
          this.value.notesArray = this.value.notesArray.filter(
            (note) => note.noteId !== noteId
          );
        }
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
