<template>
  <div class="contacts">
    <template v-if="contacts.length">
      <div class="flex gap-2 justify-end">
        <vs-input v-model="searchKey" placeholder="Search" />
        <v-select
          :options="statuses"
          v-model="filteredStatus"
          :clearable="true"
          :reduce="(option) => option"
          class="mb-4 md:mb-0"
        />
        <v-select
          :options="assignees"
          v-model="filteredAssignee"
          :clearable="true"
          :reduce="(option) => option"
          class="mb-4 md:mb-0"
        />
        <vs-button
          color="primary"
          type="border"
          icon-pack="feather"
          icon="icon-plus"
          id="new-note-button"
          class="vs-con-loading__container add-note-btn"
          @click="openNewContact"
        >
          New
        </vs-button>
      </div>
      <ContactTable :contacts="contacts" />
    </template>
    <template v-else>
      <div class="flex justify-center no-contacts py-10 text-center">
        <div class="flex flex-col">
          <h6 class="font-bold mb-3">Contacts</h6>
          <div class="flex gap gap-2">
            <vs-button
              color="primary"
              type="border"
              icon-pack="feather"
              icon="icon-plus"
              size="small"
              id="new-note-button"
              class="vs-con-loading__container add-note-btn"
              @click="openAddExisting"
            >
              Add Existing
            </vs-button>
            <vs-button
              color="primary"
              type="border"
              icon-pack="feather"
              icon="icon-plus"
              size="small"
              id="new-note-button"
              class="vs-con-loading__container add-note-btn"
              @click.stop="openNewContact"
            >
              New Contact
            </vs-button>
          </div>
        </div>
      </div>
    </template>
    <NewContactSidebar
      :isSidebarActive="contactSidebar.isActive"
      :data="contactSidebar.data"
      @closeSidebar="toggleContactSidebar"
    />
  </div>
</template>

<script>
import NewContactSidebar from './components/NewContactSidebar';
import ContactTable from './components/ContactTable';

export default {
  name: 'Contact',
  components: { ContactTable, NewContactSidebar },
  data() {
    return {
      contacts: [],
      statuses: [],
      assignees: [],
      filteredAssignee: null,
      filteredStatus: null,
      searchKey: '',
      contactSidebar: {
        isActive: false,
        data: {},
      },
    };
  },
  methods: {
    openNewContact() {
      this.toggleContactSidebar(true);
    },
    openAddExisting() {},
    toggleContactSidebar(flag) {
      this.contactSidebar.isActive = flag;
      // this.contactSidebar.data = flag;
    },
  },
};
</script>

<style lang="scss">
$light-color: rgba(0, 0, 0, 0.1);

.contacts {
  .no-contacts {
    background-color: $light-color;
    border-radius: 8px;
  }
}
</style>
