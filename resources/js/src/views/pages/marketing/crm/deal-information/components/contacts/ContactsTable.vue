<template>
  <div>
    <div class="mt-10">
      <DataTable
        :value="contacts"
        :selection.sync="selectedContactsList"
        :lazy="true"
        :paginator="true"
        :rows="rows"
        :rowHover="true"
        :totalRecords="totalRecords"
        :loading="loading"
        filterDisplay="row"
        responsiveLayout="scroll"
        columnResizeMode="expand"
        @sort="onSort($event)"
        @page="onPage($event)"
        :rowsPerPageOptions="[10, 25, 50]"
      >
        <Column
          :hidden="contacts.length ? false : true"
          selectionMode="multiple"
          :headerStyle="{ width: '3em' }"
        ></Column>
        <Column :showFilterMenu="false" field="firstName" header="First Name">
          <template #filter>
            <InputText
              type="text"
              v-model="filters['firstName']"
              @input="onInputFilter"
              class="p-column-filter input-filter"
            /> </template
        ></Column>
        <Column :showFilterMenu="false" field="lastName" header="Last Name">
          <template #filter="">
            <InputText
              type="text"
              v-model="filters['lastName']"
              @input="onInputFilter"
              class="p-column-filter input-filter"
            /> </template
        ></Column>
        <Column
          :showFilterMenu="false"
          field="phone"
          header="Phone"
          :sortable="false"
        >
          <template #filter="">
            <InputText
              type="text"
              v-model="filters['phone']"
              @input="onInputFilter"
              class="p-column-filter input-filter"
            /> </template
        ></Column>
        <Column :showFilterMenu="false" field="email" header="Email">
          <template #filter="">
            <InputText
              type="text"
              v-model="filters['email']"
              @input="onInputFilter"
              class="p-column-filter input-filter"
            /> </template
        ></Column>
        <Column :showFilterMenu="false" field="customer" header="Company">
          <template #body="{ data: { customer } }">
            {{ customer ? customer.name : '' }}
          </template>
          <template #filter="">
            <InputText
              type="text"
              v-model="filters['companyName']"
              @input="onInputFilter"
              class="p-column-filter input-filter"
            />
          </template>
        </Column>
        <Column
          :showFilterMenu="false"
          field="address"
          header="Address"
          :sortable="false"
        >
          <template #filter="">
            <InputText
              type="text"
              v-model="filters['address']"
              @input="onInputFilter"
              class="p-column-filter input-filter"
            />
          </template>
        </Column>
        <Column :showFilterMenu="false" field="assignees" header="Assign To">
          <template #body="{ data: { assignees } }">
            {{ assignees.map((user) => user.name).join(', ') }}
          </template>
          <template #filter="{}">
            <Dropdown
              v-model="filters['assigneeId']"
              @change="onInputFilter('assigneeId')"
              :options="userList"
              optionLabel="fullName"
              optionValue="id"
              class="p-column-filter"
              :showClear="true"
              appendTo="body"
            />
          </template>
        </Column>
        <Column
          :showFilterMenu="false"
          field="status"
          header="Status"
          :sortable="false"
        >
          <template #body="{ data: { status } }">
            <span class="deal-status" :class="getStatusColor(status)">
              {{ getStatus(status) }}
            </span>
          </template>
          <template #filter="{}">
            <Dropdown
              v-model="filters['status']"
              @change="onInputFilter('status')"
              :options="statuses"
              optionLabel="label"
              optionValue="value"
              class="p-column-filter"
              :showClear="true"
              appendTo="body"
            />
          </template>
        </Column>
        <Column header="Actions" :headerStyle="{ width: '0.5rem' }">
          <template #body="{ data: { id } }">
            <!-- <vs-icon
              class="cursor-pointer"
              size="small"
              icon="edit"
              @click.stop="handleEditContact(id)"
            /> -->
            <div @click.stop="handleEditContact(id)">
              <img
                src="@assets/images/crm/editIcon.svg"
                class="cursor-pointer"
              />
            </div>
          </template>
        </Column>

        <template #empty><b>No records found</b></template>
        <template #footer v-if="footerText">
          <div class="vx-row flex justify-between items-center">
            <div class="vx-col">{{ footerText }}</div>
          </div>
        </template>
      </DataTable>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactsTable',

  props: {
    contacts: {
      required: true,
      type: Array,
    },
    totalRecords: {
      required: true,
      type: Number,
    },
    paginationMetaData: {
      required: true,
      type: Object,
    },
    selectedContacts: {
      required: true,
      type: Array,
    },
    userList: {
      TypeError: Array,
      default: () => [],
    },
  },
  data() {
    return {
      loading: false,
      rows: 25,
      filters: {
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        companyName: '',
        status: null,
        assigneeId: null,
      },
      sortBy: {
        field: null,
        order: null,
      },
      statuses: [
        { id: 1, label: 'Active', value: 'active' },
        { id: 2, label: 'Inactive', value: 'inactive' },
      ],
      selectedContactsList: [],
    };
  },
  computed: {
    footerText() {
      const { from, to, total } = this.paginationMetaData || {};
      if (from && to && total) {
        return `Displaying ${from} to ${to} of ${total} records`;
      }
      return '';
    },
  },
  methods: {
    onSort({ sortField, sortOrder }) {
      this.sortBy = {
        field: sortField,
        order: sortOrder && sortOrder === 1 ? 'asc' : 'desc',
      };
    },
    onPage({ page, rows }) {
      this.$emit('fetchContacts', {
        pageSize: rows,
        currentPage: page + 1,
        filters: this.filters,
      });
    },
    getStatus(status) {
      if (!status) return '';
      return this.statuses.find((item) => item.value === status).label;
    },
    handleEditContact(id) {
      this.$emit('editContactModal', id);
    },
    getStatusColor(status) {
      if (status === 'active') {
        return 'active-status';
      } else if (status === 'inactive') {
        return 'inactive-status';
      } else {
        return '';
      }
    },
    // formatDate(date) {
    //   return date ? this.$dayjs(date).format('MM-DD-YYYY') : '';
    // },
    onInputFilter(key) {
      if (
        this.filters[key] === null &&
        key !== 'status' &&
        key !== 'assigneeId'
      ) {
        this.filters[key] = '';
      }
      this.$emit('fetchContacts', { filters: this.filters });
    },
  },
  watch: {
    selectedContactsList(val) {
      this.$emit('getSelectedContacts', val);
    },
    selectedContacts(val) {
      this.selectedContactsList = val;
    },
  },
};
</script>
<style scoped lang="scss">
::v-deep {
  .p-column-filter-clear-button {
    display: none;
  }
}

#button-delete-email:hover {
  color: #fff !important;
}
.input-filter {
  width: 75% !important;
}
</style>
