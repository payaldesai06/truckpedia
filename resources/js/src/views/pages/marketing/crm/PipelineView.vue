<template>
  <div>
    <div
      class="flex items-center mb-4"
      :class="pipelines.length ? 'justify-between' : 'justify-end'"
    >
      <template v-if="pipelines.length">
        <div class="flex gap-3 items-center">
          <v-select
            :options="pipelines"
            v-model="localSelectedPipeline"
            label="name"
            :clearable="false"
            :reduce="(option) => option"
            class="select-pipeline"
          />
          <div
            class="flex items-center cursor-pointer gap-2"
            @click="togglePiplinePopup(selectedPipeline)"
          >
            <!-- Rename Edit Icon -->
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                class="pt-1"
              >
                <path
                  d="M3.24829 3.62769H2.49886C2.10134 3.62769 1.7201 3.7856 1.439 4.06669C1.15791 4.34778 1 4.72902 1 5.12654V11.8714C1 12.2689 1.15791 12.6502 1.439 12.9312C1.7201 13.2123 2.10134 13.3703 2.49886 13.3703H9.24371C9.64123 13.3703 10.0225 13.2123 10.3036 12.9312C10.5847 12.6502 10.7426 12.2689 10.7426 11.8714V11.122"
                  stroke="#45454A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.2793 3.31666C13.5745 3.0215 13.7403 2.62118 13.7403 2.20376C13.7403 1.78634 13.5745 1.38602 13.2793 1.09086C12.9842 0.795702 12.5838 0.629883 12.1664 0.629883C11.749 0.629883 11.3487 0.795702 11.0535 1.09086L4.74707 7.37482V9.6231H6.99536L13.2793 3.31666Z"
                  stroke="#45454A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.99316 2.12891L12.2414 4.37719"
                  stroke="#45454A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span class="rename-pipeline">Rename Pipeline</span>
          </div>
        </div>
        <v-select
          v-model="selectedUsers"
          :options="modifiedUserList"
          :reduce="(option) => option.id"
          id="usersDropdown"
          class="users-dropdown ml-auto mr-4"
          label="fullName"
          multiple
          placeholder="Select Deal Owners"
          @input="handleUsersSelection"
        />
      </template>
      <vs-dropdown vs-trigger-click vs-custom-content>
        <vs-button icon-pack="feather" icon="icon-plus"> New </vs-button>
        <vs-dropdown-menu class="spreadsheet-list-dropdown-items w-48">
          <vs-dropdown-item>
            <p class="mb-0 text-base" @click="togglePiplinePopup">
              New Pipeline
            </p>
          </vs-dropdown-item>
          <vs-dropdown-item v-if="pipelines.length">
            <p class="mb-3 text-base" @click.stop="toggleDealSidebar(true)">
              New Deal
            </p>
          </vs-dropdown-item>
        </vs-dropdown-menu>
      </vs-dropdown>
    </div>
    <template v-if="pipelines.length">
      <div class="flex">
        <PipelineCols
          @toggleNamePopup="toggleNamePopup"
          @dealUpdated="getDealsForPipeline(selectedUsers)"
          :deals="deals"
        />
        <div class="add-stage-btn">
          <button type="button" @click.stop="toggleNamePopup(null)">
            + Add Stage
          </button>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="no-stages">
        <p>No Pipelines yet. Click + New button to create one.</p>
      </div>
    </template>

    <stage-name-popup
      :isActive="pipelineNamePopup.isActive"
      :data="pipelineNamePopup.data"
      @closePopup="toggleNamePopup(null)"
    />
    <pipeline-deal-sidebar
      :dealSidebar="dealSidebar"
      :isActive="dealSidebar.isActive"
      @dealAdded="getDealsForPipeline(selectedUsers)"
      @closeSidebar="toggleDealSidebar(false)"
    />

    <CreateEditNewPipelinePopup
      :isActive="createEditNewPipelinePopup.isActive"
      :data="createEditNewPipelinePopup.data"
      @closePopup="togglePiplinePopup"
    />
  </div>
</template>
<script>
import PipelineCols from './components/PipelineCols.vue';
import { mapGetters } from 'vuex';
import $ from 'jquery';
export default {
  name: 'PipelineView',
  components: {
    PipelineCols,
    stageNamePopup: () => import('./components/StageNamePopup.vue'),
    PipelineDealSidebar: () => import('./components/PipelineDealSidebar.vue'),
    CreateEditNewPipelinePopup: () =>
      import('./components/CreateEditNewPipelinePopup.vue'),
  },
  computed: {
    ...mapGetters('marketing', [
      'pipelines',
      'selectedPipeline',
      'getSelectedUsersForDealsFilter',
    ]),
    ...mapGetters('companyUserV2', ['getUsersList']),
    localSelectedPipeline: {
      get() {
        return this.selectedPipeline;
      },
      set(val) {
        this.$store.commit('marketing/setSelectedPipeline', val);
      },
    },
    modifiedUserList() {
      const usersPayload = {
        roles: ['admin', 'dispatcher'],
        fields: ['firstName', 'lastName'],
      };
      return (this.getUsersList[JSON.stringify(usersPayload)] || []).map(
        (user) => ({
          id: user.id,
          fullName: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
        })
      );
    },
  },
  data() {
    return {
      deals: [],
      pipelineNamePopup: {
        isActive: false,
        data: {},
      },
      createEditNewPipelinePopup: {
        isActive: false,
        data: {},
      },
      dealSidebar: {
        data: {},
        isActive: false,
      },
      selectedUsers: [],
    };
  },
  async created() {
    await this.init();
  },
  methods: {
    async init() {
      if (!this.pipelines.length) {
        await this.getPipelines();
      }
      if (!this.selectedPipeline) {
        this.$store.commit('marketing/setSelectedPipeline', this.pipelines[0]);
      } else {
        this.getDealsForPipeline(this.getSelectedUsersForDealsFilter);
      }
      if (this.getSelectedUsersForDealsFilter.length) {
        this.selectedUsers = this.getSelectedUsersForDealsFilter;
      }
    },
    async getPipelines() {
      try {
        this.$vs.loading();
        await this.$store.dispatch('marketing/setMarketingPipelines');
      } catch (error) {
        console.error(error);
      } finally {
        this.$vs.loading.close();
      }
    },
    toggleNamePopup(col) {
      this.pipelineNamePopup.isActive = !this.pipelineNamePopup.isActive;
      this.pipelineNamePopup.data = col || {};
    },
    togglePiplinePopup(col) {
      this.createEditNewPipelinePopup.isActive =
        !this.createEditNewPipelinePopup.isActive;
      this.createEditNewPipelinePopup.data = col && col.stages ? col : {};
    },
    toggleDealSidebar(isActive = false, data) {
      this.dealSidebar.isActive = isActive;
      this.dealSidebar.data = data || {};
    },
    async getDealsForPipeline(assigneeIds = []) {
      if (!this.selectedPipeline) {
        return;
      }
      try {
        const payload = {
          pipelineIds: [this.selectedPipeline.id],
          fields: ['stage', 'assignees', 'customer'],
          ...(assigneeIds.length && { assigneeIds }),
        };
        const { data } = await this.$store.dispatch(
          'marketing/getDeals',
          payload
        );
        this.deals = data.payload.deals;
        this.$store.commit('marketing/setAllDeals', this.deals);
      } catch (error) {
        console.log(error, 'error');
      }
    },
    handleUsersSelection() {
      this.getDealsForPipeline(this.selectedUsers);
      this.$store.commit(
        'marketing/setSelectedUsersForDealsFilter',
        this.selectedUsers
      );
    },
  },
  watch: {
    localSelectedPipeline() {
      this.getDealsForPipeline(this.selectedUsers);
    },
    selectedUsers(newVal, oldVal) {
      if (newVal.length > oldVal.length) {
        // Scrolling down to the last element of the list, so that user can get to know about the scroll
        $('#usersDropdown .vs__selected-options').scrollTop(
          $('#usersDropdown .vs__selected-options').scrollTop() +
            $('#usersDropdown .vs__selected-options').height()
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.users-dropdown {
  width: 250px;
}

::v-deep .users-dropdown .vs__selected-options {
  max-height: 60px;
  overflow: auto;
}
</style>
