<template>
  <div>
    <div class="mt-10">
      <DataTable
        :value="tasks"
        :lazy="true"
        :paginator="true"
        :rows="rows"
        :rowHover="true"
        :totalRecords="totalRecords"
        :loading="loading"
        filterDisplay="row"
        responsiveLayout="scroll"
        @sort="onSort($event)"
        @page="onPage($event)"
        :rowsPerPageOptions="[10, 25, 50]"
      >
        <Column :showFilterMenu="false" field="name" header="Task Title">
          <template #filter>
            <InputText
              type="text"
              v-model="filters['name']"
              @input="onInputFilter"
              class="p-column-filter input-filter"
            /> </template
        ></Column>
        <Column :showFilterMenu="false" field="type" header="Type">
          <template #filter="{}">
            <Dropdown
              v-model="filters['type']"
              @change="onInputFilter('type')"
              :options="types"
              optionLabel="label"
              optionValue="value"
              class="p-column-filter filter-dropdown"
              :showClear="true"
              appendTo="body"
            />
          </template>
          <template #body="{ data: { type } }">
            {{ types.filter((item) => item.value === type)[0].label }}
          </template>
        </Column>
        <!-- <Column field="deals" header="Deal" :sortable="false"> </Column>
        <Column field="assignees" header="Contact name">
        </Column> -->
        <Column
          :showFilterMenu="false"
          field="reminderDate"
          header="Reminder Date"
        >
          <template #body="{ data: { reminderDate } }">
            {{ formatDate(reminderDate) }}
          </template>
          <template #filter>
            <div class="clearable-date-picker p-column-filter w-full">
              <flat-pickr
                v-model="filters['reminderDate']"
                class="date-picker input-filter"
                @on-change="onInputFilter"
              />
              <vs-icon
                v-if="filters['reminderDate']"
                class="close-icon"
                icon="close"
                size="small"
                @click="filters['reminderDate'] = ''"
              />
            </div>
          </template>
        </Column>
        <Column :showFilterMenu="false" field="dueDate" header="Due Date">
          <template #body="{ data: { dueDate } }">
            {{ formatDate(dueDate) }}
          </template>
          <template #filter>
            <div class="clearable-date-picker p-column-filter w-full">
              <flat-pickr
                v-model="filters['dueDate']"
                class="date-picker input-filter"
                @on-change="onInputFilter"
              />
              <vs-icon
                v-if="filters['dueDate']"
                class="close-icon"
                icon="close"
                size="small"
                @click="filters['dueDate'] = ''"
              />
            </div>
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
              class="p-column-filter filter-dropdown"
              :showClear="true"
              appendTo="body"
            />
          </template>
        </Column>
        <Column :showFilterMenu="false" field="status" header="Status">
          <template #body="{ data: { status, dueDate } }">
            <span
              :class="getStatusValue(status, dueDate) + '-status'"
              class="status-container"
            >
              {{ getStatus(status, dueDate) }}
            </span>
          </template>
          <template #filter="{}">
            <Dropdown
              v-model="filters['status']"
              @change="onInputFilter('status')"
              :options="statuses"
              optionLabel="label"
              optionValue="value"
              class="p-column-filter filter-dropdown"
              :showClear="true"
              appendTo="body"
            />
          </template>
        </Column>
        <Column
          :showFilterMenu="false"
          field="note"
          header="Note"
          :sortable="false"
        >
          <template #filter>
            <InputText
              type="text"
              v-model="filters['note']"
              @input="onInputFilter"
              class="p-column-filter input-filter"
            /> </template
        ></Column>
        <Column header="Actions" :headerStyle="{ width: '0.5rem' }">
          <template #body="{ data: { id } }">
            <!-- <vs-icon
              class="cursor-pointer"
              size="small"
              icon="edit"
              @click.stop="handleEditTask(id)"
            /> -->
            <div @click.stop="handleEditTask(id)" class="cursor-pointer">
              <img src="@assets/images/crm/editIcon.svg" />
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
  name: 'TasksTable',

  props: {
    tasks: {
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
        name: '',
        type: null,
        status: null,
        reminderDate: '',
        dueDate: '',
        note: '',
        localDate: '',
        assigneeId: null,
      },
      sortBy: {
        field: null,
        order: null,
      },
      types: [
        { label: 'To-do', value: 'todo' },
        { label: 'Call', value: 'call' },
        { label: 'Email', value: 'email' },
      ],
      statuses: [
        { id: 1, label: 'Overdue', value: 'overdue' },
        { id: 2, label: 'Due Today', value: 'dueToday' },
        { id: 3, label: 'Upcoming', value: 'upcoming' },
        { id: 4, label: 'Completed', value: 'completed' },
      ],
      cssForStatusCell: {
        active: 'active-status',
        paused: 'paused-status',
        completed: 'completed-status',
        draft: 'draft-status',
      },
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
      this.$emit('fetchTasks', {
        pageSize: rows,
        currentPage: page + 1,
        filters: this.filters,
      });
    },
    getStatus(status, dueDate) {
      status = this.getStatusValue(status, dueDate);
      return this.statuses.find((item) => item.value === status).label;
    },
    handleEditTask(id) {
      this.$emit('editTaskModal', id);
    },
    getStatusValue(status, dueDate) {
      if (status !== 'completed') {
        const now = this.$dayjs().format('YYYY-MM-DD');
        if (now > dueDate) {
          status = 'overdue';
        } else if (now < dueDate) {
          status = 'upcoming';
        } else if (now == dueDate) {
          status = 'dueToday';
        }
      }
      return status;
    },
    formatDate(date) {
      return date ? this.$dayjs(date).format('MM/DD/YY') : '';
    },
    onInputFilter(key) {
      if (
        this.filters[key] === null &&
        key !== 'type' &&
        key !== 'status' &&
        key !== 'assigneeId'
      ) {
        this.filters[key] = '';
      }
      if (key === 'status') {
        if (this.filters[key] !== null)
          this.filters.localDate = this.$dayjs().format('YYYY-MM-DD');
        else this.filters.localDate = '';
      }
      this.$emit('fetchTasks', { filters: this.filters });
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

.clearable-date-picker {
  position: relative;
  .close-icon {
    position: absolute;
    right: 30%;
    top: 25%;
    cursor: pointer;
  }
}

.input-filter {
  width: 75% !important;
}

.filter-dropdown {
  min-width: 150px;
  width: 75%;
}

// .upcoming-status {
//   background: var(--blue-600, #2563eb);
// }
// .completed-status {
//   background: var(--green-600, #16a34a);
// }
// .dueToday-status {
//   background: var(--gray-600, #4b5563);
// }
// .overdue-status {
//   background: var(--red-600, #b7552b);
// }

// .task-status {
//   border-radius: 4px;
//   padding: 2px 6px;
//   color: #fff;
// }
</style>
