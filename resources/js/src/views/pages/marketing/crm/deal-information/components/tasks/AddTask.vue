<template>
  <vs-sidebar
    parent="body"
    position-right
    default-index="1"
    color="primary"
    class="task-sidebar"
    spacer
    v-model="isModalShowing"
  >
    <div class="flex items-center justify-between vs-header-sidebar">
      <h4>{{ this.selectedTaskId ? 'Edit' : 'New' }} Task</h4>
      <feather-icon
        icon="XIcon"
        @click="onClose"
        class="cursor-pointer text-white"
      ></feather-icon>
    </div>
    <form class="vs-sidebar-form px-3 pb-5">
      <div class="vx-row w-full m-0">
        <div class="vx-col w-1/2 pb-4">
          <label>Task Title <field-required-sign /> </label>
          <vs-input
            class="w-full"
            v-model="taskData.name"
            data-vv-validate-on="blur"
            v-validate="'required'"
            name="name"
          />
          <span class="text-danger text-sm">
            {{ errors.first('name') }}
          </span>
        </div>
        <div class="vx-col w-1/2 pb-4">
          <label>Type <field-required-sign /> </label>
          <v-select
            v-model="selectedType"
            :options="taskTypeList"
            label="label"
            :reduce="(option) => option.value"
            v-validate="'required'"
            data-vv-as="selected"
            :closeOnSelect="true"
            :clearable="true"
            name="type"
          />
          <span class="text-danger text-sm">
            {{ errors.first('type') }}
          </span>
        </div>
        <div class="vx-col w-1/2 pb-4">
          <label>Deal</label>
          <v-select
            multiple
            v-model="selectedDealIds"
            data-vv-as="selected"
            :options="dealList"
            label="name"
            :reduce="(option) => option.id"
            :closeOnSelect="true"
            :clearable="true"
          />
        </div>
        <!-- <div class="vx-col w-1/2 pb-4">
          <label class="text-xs">Contact Name</label>
          <v-select
            v-model="taskData.customerId"
            :options="customers"
            option-label="label"
            option-value="value"
            :closeOnSelect="true"
            :clearable="true"
          />
        </div> -->
        <div class="vx-col w-1/2 pb-4">
          <label>Reminder Date</label>
          <div class="reminder-date">
            <flat-pickr
              placeholder=""
              class="w-full"
              name="reminderDate"
              clearable
              v-model="taskData.reminderDate"
            />
            <span
              class="clear-date"
              v-if="taskData.reminderDate"
              @click="removeValue('reminderDate')"
            >
              <vs-icon icon="close"></vs-icon>
            </span>
          </div>
        </div>
        <div class="vx-col w-1/2 pb-4">
          <label>Due Date <field-required-sign /></label>
          <flat-pickr
            class="w-full"
            name="dueDate"
            data-vv-validate-on="on-change"
            v-validate="'required'"
            v-model="taskData.dueDate"
          />
          <span class="text-danger text-sm">
            {{ errors.first('dueDate') }}
          </span>
        </div>
        <div class="vx-col w-1/2 pb-4">
          <label>Assign To </label>
          <v-select
            multiple
            data-vv-as="selected"
            v-model="selectedAssigneeIds"
            :options="userList"
            label="fullName"
            :reduce="(option) => option.id"
            :closeOnSelect="true"
            :clearable="true"
          />
        </div>
        <div class="vx-col w-1/2 pb-4">
          <label>Priority <field-required-sign /></label>
          <v-select
            v-model="selectedPriority"
            :options="priorityList"
            label="label"
            :reduce="(option) => option.value"
            v-validate="'required'"
            data-vv-as="selected"
            :closeOnSelect="true"
            :clearable="true"
            name="priority"
          />
          <span class="text-danger text-sm">
            {{ errors.first('priority') }}
          </span>
        </div>
        <div v-if="this.selectedTaskId" class="vx-col w-1/2 pb-4">
          <label class="text-xs">Status</label>
          <v-select
            v-model="selectedStatus"
            data-vv-as="selected"
            :options="statuses"
            label="label"
            :reduce="(option) => option.value"
            :closeOnSelect="true"
            :clearable="true"
            name="status"
          />
        </div>
        <div class="vx-col w-full pb-4">
          <label>Note</label>
          <vs-textarea v-model="taskData.note" class="w-full" />
        </div>
      </div>
      <div class="flex justify-end w-full mt-5">
        <vs-button class="mr-3 action-btn" type="border" @click.stop="onClose">
          Cancel
        </vs-button>
        <vs-button
          class="action-btn"
          @click.stop="saveTask"
          :disabled="isSaveDisabled"
        >
          Save
        </vs-button>
      </div>
    </form>
  </vs-sidebar>
</template>

<script>
import { getApiErrorMsg, getObjectDifference } from '@/helpers/helper';
import { mapGetters } from 'vuex';
import AddBtn from '../AddBtn.vue';
import { Validator } from 'vee-validate';
const dict = {
  custom: {
    name: {
      required: 'The Task Name field is required.',
    },
    type: {
      required: 'The Task Type field is required.',
    },
    priority: {
      required: 'The Priority field is required.',
    },
    dueDate: {
      required: 'The Due Date field is required.',
    },
  },
};
Validator.localize('en', dict);

export default {
  name: 'add-new-task',
  components: { AddBtn },
  props: {
    isShow: {
      type: Boolean,
      default: () => false,
    },
    selectedTaskId: {
      type: Number,
      default: 0,
    },
    userList: {
      TypeError: Array,
      default: () => [],
    },
  },
  data() {
    return {
      taskData: {
        name: '',
        type: '',
        reminderDate: '',
        dueDate: '',
        assigneeIds: [],
        dealIds: [],
        priority: '',
        note: '',
        status: '',
        assignees: [],
        deals: [],
        addAssigneeIds: [],
        removeAssigneeIds: [],
      },
      priorityList: [
        { label: 'High', value: 'high' },
        { label: 'Medium', value: 'medium' },
        { label: 'Low', value: 'low' },
      ],
      taskTypeList: [
        { label: 'To-do', value: 'todo' },
        { label: 'Call', value: 'call' },
        { label: 'Email', value: 'email' },
      ],
      dealList: [],
      statuses: [{ label: 'Completed', value: 'completed' }],
      selectedDealIds: null,
      selectedType: 'todo',
      selectedAssigneeIds: null,
      selectedPriority: 'medium',
      selectedStatus: null,
      taskDataForUpdate: null,
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      try {
        const { data } = await this.$store.dispatch('marketing/getDeals', {});
        this.dealList = data.payload.deals;
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    onClose() {
      this.$emit('handleTaskModal');
    },
    async saveTask() {
      const isValidate = await this.validate();
      if (isValidate) {
        try {
          const originalAssigneeIds = this.taskData.assignees.map(
            (assignee) => assignee.id
          );
          const currentAssigneeIds = this.selectedAssigneeIds || [];

          const originalDealIds = this.taskData.deals.map((deal) => deal.id);
          const currentDealIds = this.selectedDealIds || [];

          this.taskData.type = this.selectedType;
          this.taskData.assigneeIds = this.selectedAssigneeIds;
          this.taskData.dealIds = this.selectedDealIds;
          this.taskData.priority = this.selectedPriority;
          this.taskData.status = this.selectedStatus;
          let payload = null;
          if (this.selectedTaskId) {
            const changedValues = getObjectDifference(
              this.taskDataForUpdate,
              this.taskData
            );
            if (changedValues.note === '') {
              changedValues.note = null;
            }
            payload = changedValues;
          } else {
            payload = Object.entries(this.taskData).reduce(
              (acc, [key, value]) => {
                if (
                  (!Array.isArray(value) && value) ||
                  value === false ||
                  value === 0 ||
                  (Array.isArray(value) && value.length) ||
                  this.selectedTaskId
                ) {
                  acc[key] = value !== null ? value : '';
                }
                return acc;
              },
              {}
            );
          }
          delete payload.assignees;
          delete payload.deals;
          if (this.selectedTaskId) {
            delete payload.assigneeIds;
            delete payload.dealIds;
            delete payload.id;

            const addAssigneeIds = currentAssigneeIds.filter(
              (id) => !originalAssigneeIds.includes(id)
            );

            const removeAssigneeIds = originalAssigneeIds.filter(
              (id) => !currentAssigneeIds.includes(id)
            );

            if (addAssigneeIds.length) {
              payload.addAssigneeIds = addAssigneeIds;
            }

            if (removeAssigneeIds.length) {
              payload.removeAssigneeIds = removeAssigneeIds;
            }

            const addDealIds = currentDealIds.filter(
              (id) => !originalDealIds.includes(id)
            );

            const removeDealIds = originalDealIds.filter(
              (id) => !currentDealIds.includes(id)
            );

            if (addDealIds.length) {
              payload.addDealIds = addDealIds;
            }

            if (removeDealIds.length) {
              payload.removeDealIds = removeDealIds;
            }
            if (Object.keys(payload).length) {
              const response = await this.$store.dispatch(
                'marketing/updateTasks',
                { id: this.selectedTaskId, payload }
              );
              if (response.status === 200) {
                await this.$vs.notify({
                  time: 8000,
                  color: 'primary',
                  title: 'Success',
                  text: 'Task updated successfully.',
                });
              }
            } else return;
          } else {
            const response = await this.$store.dispatch(
              'marketing/saveTasks',
              payload
            );
            if (response.status === 200) {
              await this.$vs.notify({
                time: 8000,
                color: 'primary',
                title: 'Success',
                text: 'Task created successfully.',
              });
            }
          }
          this.onClose();
          this.$emit('refresh', {});
        } catch (error) {
          await this.$vs.notify({
            time: 8000,
            color: 'danger',
            title: 'Error',
            text: getApiErrorMsg(error),
          });
        }
      }
    },
    async validate() {
      await this.$validator.validateAll();
      if (this.errors.items.length) {
        return false;
      }
      return true;
    },
    removeValue(key) {
      this.taskData[key] = null;
    },
  },
  computed: {
    ...mapGetters('companyUserV2', ['getUsersList']),
    isModalShowing: {
      get() {
        return this.isShow;
      },
      set(val) {},
    },
    validateForm() {
      return (
        !this.$validator.errors.any() &&
        this.taskData.name !== '' &&
        this.taskData.dueDate !== '' &&
        this.selectedType !== '' &&
        this.selectedPriority !== ''
      );
    },
    isSaveDisabled() {
      if (this.selectedTaskId) {
        if (!this.taskData || !this.taskDataForUpdate) return null;
        const taskDataCheck = {
          ...this.taskData,
          type: this.selectedType,
          priority: this.selectedPriority,
          status: this.selectedStatus ? this.selectedStatus : null,
          assigneeIds: this.selectedAssigneeIds,
          dealIds: this.selectedDealIds,
        };
        if (this.taskData.note === '') {
          taskDataCheck.note = null;
        }

        delete taskDataCheck.assignees;
        delete taskDataCheck.deals;

        const noChanges = getObjectDifference(
          this.taskDataForUpdate,
          taskDataCheck
        );
        const originalDealIds = structuredClone(this.taskDataForUpdate.dealIds);
        const originalAssigneeIds = structuredClone(
          this.taskDataForUpdate.assigneeIds
        );

        if (
          noChanges.dealIds &&
          noChanges.dealIds.sort().toString() ===
            originalDealIds.sort().toString()
        ) {
          delete noChanges.dealIds;
        }

        if (
          noChanges.assigneeIds &&
          noChanges.assigneeIds.sort().toString() ===
            originalAssigneeIds.sort().toString()
        ) {
          delete noChanges.assigneeIds;
        }

        return this.$validator.errors.any() || !Object.keys(noChanges).length;
      } else {
        return !this.validateForm;
      }
    },
  },
  watch: {
    isModalShowing() {
      this.$validator.reset();
    },
    async selectedTaskId(newVal, oldVal) {
      if (newVal) {
        try {
          const payload = { id: newVal };
          const response = await this.$store.dispatch(
            'marketing/getTaskDetail',
            payload
          );
          this.taskData = response.data.payload.task;
          this.taskDataForUpdate = structuredClone(this.taskData);
          this.selectedType = this.taskData.type;
          this.selectedPriority = this.taskData.priority;
          this.selectedStatus = this.taskData.status;
          this.selectedAssigneeIds = this.taskData.assignees.map(
            (assignee) => assignee.id
          );
          this.selectedDealIds = this.taskData.deals.map((deal) => deal.id);
          this.taskDataForUpdate.assigneeIds = this.selectedAssigneeIds;
          this.taskDataForUpdate.dealIds = this.selectedDealIds;
          this.taskDataForUpdate.status =
            this.selectedStatus || this.selectedStatus === ''
              ? this.selectedStatus
              : null;
          delete this.taskDataForUpdate.assignees;
          delete this.taskDataForUpdate.deals;
        } catch (error) {
          await this.$vs.notify({
            time: 8000,
            color: 'danger',
            title: 'Error',
            text: getApiErrorMsg(error),
          });
        }
      } else {
        this.taskData = {
          name: '',
          type: '',
          reminderDate: '',
          dueDate: '',
          assigneeIds: [],
          dealIds: [],
          priority: '',
          note: '',
          status: '',
          assignees: [],
          deals: [],
          addAssigneeIds: [],
          removeAssigneeIds: [],
        };
        this.selectedType = 'todo';
        this.selectedDealIds = null;
        this.selectedAssigneeIds = null;
        this.selectedPriority = 'medium';
        this.selectedStatus = null;
      }
    },
  },
};
</script>

<style lang="scss">
.task-sidebar {
  .vs-sidebar--items {
    overflow: auto;
  }
  .vs-sidebar {
    width: 45vw !important;
    max-width: 50vw !important;
  }
  .task-form textarea {
    resize: none !important;
  }
  .reminder-date {
    position: relative;
    .clear-date {
      position: absolute;
      inset: 0 0 0 auto;
      display: flex;
      align-items: center;
      cursor: pointer;
      width: 25px;
    }
  }
}
</style>
