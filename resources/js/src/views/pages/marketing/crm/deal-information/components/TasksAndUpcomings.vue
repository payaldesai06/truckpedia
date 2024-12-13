<template>
  <div class="info-box task-card">
    <h5>Tasks</h5>
    <template v-if="getDealTasks.length">
      <div class="overdue mt-5" v-if="completedTasks.length">
        <h5 class="uppercase tracking-widest mb-5 completed-status">
          Completed
        </h5>
        <div
          class="flex items-center mb-3"
          v-for="task in completedTasks"
          :key="task.id"
        >
          <img
            v-if="task.type === 'todo'"
            src="@assets/images/crm/book-filled-icon.svg"
            height="40px"
            width="40px"
            style="margin: 5px"
          />
          <img
            v-else-if="task.type === 'call'"
            src="@assets/images/crm/crm-call-icon.svg"
            height="40px"
            width="40px"
            style="margin: 5px"
          />
          <img
            v-else-if="task.type === 'email'"
            src="@assets/images/crm/crm-email-icon.svg"
            height="40px"
            width="40px"
            style="margin: 5px"
          />
          <div class="description ml-2">
            <h6>{{ task.name }}</h6>
            <small>{{ getAssigneeName(task.assignees) }}</small>
          </div>
        </div>
        <vs-divider />
      </div>

      <div class="overdue mt-5" v-if="overdueTasks.length">
        <h5 class="uppercase tracking-widest mb-5">Overdue</h5>
        <div
          class="flex items-center mb-3"
          v-for="task in overdueTasks"
          :key="task.id"
        >
        <img
            v-if="task.type === 'todo'"
            src="@assets/images/crm/book-filled-icon.svg"
            height="40px"
            width="40px"
            style="margin: 5px"
          />
          <img
            v-else-if="task.type === 'call'"
            src="@assets/images/crm/crm-call-icon.svg"
            height="40px"
            width="40px"
            style="margin: 5px"
          />
          <img
            v-else-if="task.type === 'email'"
            src="@assets/images/crm/crm-email-icon.svg"
            height="40px"
            width="40px"
            style="margin: 5px"
          />
          <div class="description ml-2">
            <h6>{{ task.name }}</h6>
            <small>{{ getAssigneeName(task.assignees) }}</small>
          </div>
        </div>
        <vs-divider />
      </div>

      <div class="overdue mt-5" v-if="upcomingTasks.length">
        <h5 class="uppercase tracking-widest mb-5 upcoming-status">Upcoming</h5>
        <div
          class="flex items-center mb-3"
          v-for="task in upcomingTasks"
          :key="task.id"
        >
        <img
            v-if="task.type === 'todo'"
            src="@assets/images/crm/book-filled-icon.svg"
            height="40px"
            width="40px"
            style="margin: 5px"
          />
          <img
            v-else-if="task.type === 'call'"
            src="@assets/images/crm/crm-call-icon.svg"
            height="40px"
            width="40px"
            style="margin: 5px"
          />
          <img
            v-else-if="task.type === 'email'"
            src="@assets/images/crm/crm-email-icon.svg"
            height="40px"
            width="40px"
            style="margin: 5px"
          />
          <div class="description ml-2">
            <h6>{{ task.name }}</h6>
            <small>{{ getAssigneeName(task.assignees) }}</small>
          </div>
        </div>
        <vs-divider />
      </div>

      <div class="overdue mt-5" v-if="dueTodayTasks.length">
        <h5 class="uppercase tracking-widest mb-5 dueToday-status">
          Due Today
        </h5>
        <div
          class="flex items-center mb-3"
          v-for="task in dueTodayTasks"
          :key="task.id"
        >
        <img
            v-if="task.type === 'todo'"
            src="@assets/images/crm/book-filled-icon.svg"
            height="40px"
            width="40px"
            style="margin: 5px"
          />
          <img
            v-else-if="task.type === 'call'"
            src="@assets/images/crm/crm-call-icon.svg"
            height="40px"
            width="40px"
            style="margin: 5px"
          />
          <img
            v-else-if="task.type === 'email'"
            src="@assets/images/crm/crm-email-icon.svg"
            height="40px"
            width="40px"
            style="margin: 5px"
          />
          <div class="description ml-2">
            <h6>{{ task.name }}</h6>
            <small>{{ getAssigneeName(task.assignees) }}</small>
          </div>
        </div>
        <vs-divider />
      </div>
    </template>
    <template v-else>
      <div class="mt-16 mb-12 text-center">
        <h5 class="font-bold">No Tasks</h5>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'tasks',
  async mounted() {
    await this.getTasks();
  },
  computed: {
    ...mapGetters('marketing', ['selectedDeal', 'getDealTasks']),
    ...mapGetters('auth', ['user']),

    completedTasks() {
      return this.getDealTasks.filter(({ status }) => status === 'completed');
    },
    overdueTasks() {
      return this.getDealTasks.filter(
        ({ status, dueDate }) =>
          status === null && this.$dayjs(dueDate).isBefore(this.$dayjs(), 'day')
      );
    },
    upcomingTasks() {
      return this.getDealTasks.filter(
        ({ status, dueDate }) =>
          status === null && this.$dayjs(dueDate).isAfter(this.$dayjs(), 'day')
      );
    },
    dueTodayTasks() {
      return this.getDealTasks.filter(
        ({ status, dueDate }) =>
          status === null && this.$dayjs(dueDate).isSame(this.$dayjs(), 'day')
      );
    },
  },
  methods: {
    async getTasks() {
      try {
        const payload = {
          dealId: this.selectedDeal.id,
          fields: ['type', 'status', 'dueDate', 'assignees'],
        };
        const { data } = await this.$store.dispatch(
          'marketing/getTasks',
          payload
        );
        this.$store.commit('marketing/setDealTasks', data.payload.tasks);
      } catch (error) {
        console.log(error, 'error');
      }
    },
    getAssigneeName(assignees) {
      if (assignees && assignees.length) {
        return assignees
          .map((assignee) => {
            return assignee.id === this.user.user_id ? 'You' : assignee.name;
          })
          .join(', ');
      }

      return '';
    },
  },
};
</script>

<style lang="scss" scoped>
.info-box.task-card {
  border-radius: 4px;
  background: var(--White, #fffefe);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.08),
    0px 1px 4px 0px rgba(0, 0, 0, 0.04);
  h5 {
    color: var(--Black-Black-Base, #18181a);
    font-size: 18px;
    font-weight: 600;
  }
  .overdue {
    h5 {
      font-size: 16px;
      font-weight: 400;
      &.completed-status {
        color: var(--Green-Green-Base, #208d28);
      }
      &.overdue-status {
        color: var(--Orange-Orange-800, #7a060b);
      }
      &.upcoming-status {
        color: var(--Orange-Orange-Base, #db3918);
      }
      &.dueToday-status {
        color: var(--Primary-Primary-Base, #1877f2);
      }
    }
  }
}
</style>
