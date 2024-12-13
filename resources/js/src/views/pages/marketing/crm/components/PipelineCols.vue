<template>
  <div class="gap-4 draggable-row">
    <div
      class="vx-col draggable-col"
      v-for="col in pipelineCols"
      :key="col.id"
      :style="getColumnWidth"
    >
      <div class="getRandomColor" :style="randomColor(col.id)"></div>
      <div class="px-2">
        <div class="flex items-center justify-between">
          <h3>{{ col.name }}</h3>
          <vs-dropdown
            class="cursor-pointer"
            vs-custom-content
            vs-trigger-click
          >
            <vs-icon icon="more_horiz" />
            <vs-dropdown-menu class="w-48">
              <vs-dropdown-item @click.stop="toggleNamePopup(col)">
                <div class="cursor-pointer hover:text-primary">
                  <label class="cursor-pointer text-base" v-text="'Rename'" />
                </div>
              </vs-dropdown-item>
              <vs-dropdown-item
                @click="handleDeleteStage(col)"
                :disabled="
                  (allSelectedColsDictionary[col.id] &&
                    allSelectedColsDictionary[col.id].length) ||
                  selectedPipeline.stages.length <= 1
                    ? true
                    : false
                "
              >
                <div class="mt-1 cursor-pointer hover:text-primary">
                  <label class="cursor-pointer text-base" v-text="'Delete'" />
                </div>
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>
      </div>

      <div class="draggable-list">
        <draggable
          :list="allSelectedColsDictionary[col.id]"
          group="items"
          class="p-2 space-y-4 overflow-y-auto draggable-item"
          @change="changeStatus(col.id, $event)"
          :data-status="col.id"
        >
          <draggable-card
            v-for="item in allSelectedColsDictionary[col.id]"
            :deal="item"
            :key="item.id"
          />
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DraggableCard from './pipelinedraggablecard.vue';
import { getApiErrorMsg, getRandomColorById } from '@/helpers/helper';
export default {
  components: {
    DraggableCard,
  },
  props: {
    deals: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      allSelectedColsDictionary: {},
    };
  },
  computed: {
    ...mapGetters('marketing', ['selectedPipeline']),
    pipelineCols() {
      if (this.selectedPipeline) {
        return this.selectedPipeline.stages;
      } else {
        return [];
      }
    },

    getColumnWidth() {
      const columnWidth = 100 / this.pipelineCols.length;
      return `width: calc(${columnWidth}% - 1rem)`;
    },
    randomColor() {
      return (colId) => {
        return getRandomColorById(colId);
      };
    },
  },
  methods: {
    async changeStatus(status, event) {
      if (event.added) {
        let stageId = null;
        this.pipelineCols.forEach((item) => {
          if (item.id === status) {
            stageId = item.id;
          }
        });
        const payload = {
          id: event.added.element.id,
          stageId,
        };
        try {
          await this.$store.dispatch('marketing/editDeal', payload);
          this.showNotification('Deal Updated Successfully', 'primary');
        } catch (error) {
          this.showNotification(error);
        } finally {
          this.$emit('dealUpdated');
        }
      }
    },
    toggleNamePopup(stage) {
      this.$emit('toggleNamePopup', stage);
    },
    showNotification(message, type) {
      this.$vs.notify({
        color: type,
        title: type == 'danger' ? 'Error' : 'Success',
        text: getApiErrorMsg(message),
      });
    },
    handleDeleteStage(col) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Delete Stage',
        text: 'Would you like to delete this Stage?',
        accept: () => this.deleteStage(col),
      });
    },
    async deleteStage(col) {
      const clonnedPipeline = structuredClone(this.selectedPipeline);
      const index = clonnedPipeline.stages.findIndex(
        (item) => item.id === col.id
      );
      clonnedPipeline.stages.splice(index, 1);
      delete clonnedPipeline.name;
      try {
        const { data } = await this.$store.dispatch(
          'marketing/editPipeline',
          clonnedPipeline
        );
        this.$store.dispatch(
          'marketing/updateMarketingPipelines',
          data.payload.pipeline
        );
        this.showNotification('Stage Deleted Successfully', 'primary');
      } catch (error) {
        this.showNotification(error, 'danger');
      }
    },
    updateDeals() {
      const allStagesObj = this.selectedPipeline.stages.reduce((obj, item) => {
        obj[item.id] = [];
        return obj;
      }, {});
      if (this.deals.length) {
        this.deals.forEach((deal) => {
          allStagesObj[deal.stage.id].push(deal);
        });
      }
      this.allSelectedColsDictionary = allStagesObj;
    },
  },
  watch: {
    deals: {
      handler(val) {
        this.updateDeals();
      },
      deep: true,
    },
  },
};
</script>
