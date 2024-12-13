<template>
  <div class="tasks">
    <template v-if="(tasks.length || filterFlag) && !loading">
      <div class="mb-5 task-conatiner">
        <div class="flex w-full justify-end mb-4 gap-3">
          <!-- <v-select
            :options="types"
            v-model="filteredType"
            :clearable="true"
            :reduce="(option) => option.value"
            placeholder="Task"
            class="mb-4 md:mb-0 select-type"
          />
          <v-select
            :options="statuses"
            v-model="filteredStatus"
            :clearable="true"
            :reduce="(option) => option.value"
            placeholder="Status"
            class="mb-4 md:mb-0 select-type"
          /> -->
          <AddBtn text="New Task" @onClick="handleTaskModal(true)" />
        </div>
        <TasksTable
          :tasks="tasks"
          :totalRecords="totalRecords"
          :paginationMetaData="paginationMetaData"
          :userList="modifiedUserList"
          @fetchTasks="fetchTask"
          @editTaskModal="editTaskModal"
        />
      </div>
    </template>
    <template v-else-if="!loading">
      <div class="flex justify-center no-data-found py-10">
        <div class="flex flex-col items-center">
          <h6 class="mb-3">No Tasks Created</h6>
          <AddBtn
            class="new-task"
            text="New Task"
            @onClick="handleTaskModal(true)"
          />
        </div>
      </div>
    </template>

    <!-- Add New Task -->
    <AddTask
      :is-show="showTaskModal"
      :selectedTaskId="selectedTaskId"
      :userList="modifiedUserList"
      @handleTaskModal="handleTaskModal(false)"
      @refresh="fetchTask"
    />
  </div>
</template>

<script>
import TasksTable from './tasks/TasksTable.vue';
import AddBtn from './AddBtn.vue';
import AddTask from './tasks/AddTask.vue';
import { mapGetters } from 'vuex';
import { getObjectDifference } from '../../../../../../helpers/helper';
export default {
  name: 'Tasks',
  components: { AddBtn, AddTask, TasksTable },
  props: {
    location: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      totalRecords: 0,
      paginationMetaData: {},
      tasks: [],
      showTaskModal: false,
      types: [
        { label: 'To-do', value: 'todo' },
        { label: 'Call', value: 'call' },
        { label: 'Email', value: 'email' },
      ],
      statuses: [
        { label: 'Overdue', value: 'overdue' },
        { label: 'Due Today', value: 'dueToday' },
        { label: 'Upcoming', value: 'upcoming' },
        { label: 'Completed', value: 'completed' },
      ],
      filters: {
        name: '',
        type: null,
        status: null,
        reminderDate: '',
        dueDate: '',
        note: '',
        localDate: '',
        assigneeId: '',
      },
      defaultPayloadForUsers: {
        roles: ['admin', 'dispatcher'],
        fields: ['firstName', 'lastName'],
      },
      laoding: false,
      filteredType: null,
      filteredStatus: null,
      selectedTaskId: null,
      filterFlag: false,
    };
  },
  computed: {
    ...mapGetters('marketing', ['selectedDeal']),
    ...mapGetters('companyUserV2', ['getUsersList']),
    modifiedUserList() {
      if (
        !this.getUsersList[JSON.stringify(this.defaultPayloadForUsers)].length
      ) {
        return [];
      }
      return (
        this.getUsersList[JSON.stringify(this.defaultPayloadForUsers)] || []
      ).map((user) => ({
        id: user.id,
        fullName: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
      }));
    },
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      try {
        this.$vs.loading();
        this.loading = true;
        await this.fetchTask({ pageSize: 25, currentPage: 1 });
      } catch (error) {
      } finally {
        this.$vs.loading.close();
      }
    },
    async fetchTask({
      pageSize = 25,
      currentPage = 1,
      filters = this.filters,
    }) {
      let payload = {
        ...(this.location == 'deal' && {
          dealId: Object.keys(this.selectedDeal).length
            ? this.selectedDeal.id
            : this.$route.params.id,
        }),
        page: currentPage,
        pageSize,
        fields: [
          'type',
          'reminderDate',
          'dueDate',
          'status',
          'note',
          'assignees',
        ],
      };
      const appliedFilters = getObjectDifference(this.filters, filters);
      if (Object.keys(appliedFilters).length) {
        this.filterFlag = true;
        payload = { ...payload, ...appliedFilters };
      }
      try {
        const { data } = await this.$store.dispatch(
          'marketing/getTasks',
          payload
        );

        this.loading = false;
        this.tasks = data.payload.tasks || [];
        if (this.location == 'deal') {
          this.$store.commit('marketing/setDealTasks', this.tasks);
        }
        const { meta } = (data || {}).payload || {};
        const { totalPage, totalItems } = meta || {};
        this.totalPage = totalPage || 1;
        this.totalRecords = totalItems || 0;
        this.paginationMetaData = meta;
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
        this.loading = false;
      }
    },
    handleTaskModal(val) {
      this.showTaskModal = val;
      this.selectedTaskId = null;
      if (val) {
        this.selectedTaskId = 0;
      }
    },
    editTaskModal(val) {
      this.showTaskModal = true;
      this.selectedTaskId = val;
    },
  },
};
</script>

<style lang="scss"></style>
