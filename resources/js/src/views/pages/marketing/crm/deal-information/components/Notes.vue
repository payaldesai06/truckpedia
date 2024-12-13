<template>
  <div class="notes">
    <template v-if="notes && notes.length">
      <div class="mb-4 flex justify-end">
        <AddBtn text="New Note" @onClick="toggleShowBox(true)" />
      </div>

      <!-- Accordion -->
      <div class="accordions flex flex-col gap-2">
        <div
          v-for="(note, index) in notes"
          :key="index"
          class="accordion-item flex justify-between p-3 bg-white rounded-md w-full"
        >
          <div
            class="flex w-full cursor-pointer"
            @click="toggleDescription(index)"
          >
            <!-- <vs-icon
              size="30px"
              :icon="
                !note.content.length
                  ? 'keyboard_arrow_down'
                  : 'keyboard_arrow_right'
              "
              class="mr-3 accordion-toggle"
            /> -->
            <div class="note-item-content flex-1">
              <div class="flex justify-between">
                <h6>Note by {{ note.createdBy.name }}</h6>
                <small>
                  Created at {{ convertUtcToLocal(note.createdAt) }}
                </small>
              </div>
              <div :class="['note-description']">
                <small v-html="note.content"></small>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <vs-dropdown
                class="cursor-pointer ml-2"
                vs-custom-content
                vs-trigger-click
              >
                <vs-icon icon="more_horiz" class="rotate-90-degree" />
                <vs-dropdown-menu>
                  <vs-dropdown-item @click="editNote(note)">
                    <div class="m-2 cursor-pointer hover:text-primary">
                      <span class="cursor-pointer ml-2"
                        >Edit
                      </span>
                    </div>
                  </vs-dropdown-item>
                  <!-- <vs-dropdown-item>
                    <div class="m-2 cursor-pointer hover:text-primary">
                      <span class="cursor-pointer ml-2" @click="deleteNote">Delete</span>
                    </div>
                  </vs-dropdown-item> -->
                </vs-dropdown-menu>
              </vs-dropdown>
            </div>
          </div>
        </div>

        <template v-show="totalNotes.length > 0">
          <div class="flex justify-between items-center">
            <div v-if="footerText">
              <div class="whitespace-no-wrap">{{ footerText }}</div>
            </div>
            <vs-pagination
              :total="totalNotes"
              v-model="currentpage"
              :page-size="pageSize"
            ></vs-pagination>
          </div>
        </template>
      </div>
    </template>
    <template v-else>
      <div class="flex justify-center no-data-found py-10">
        <div class="flex flex-col">
          <h6 class="font-bold mb-3">No Notes Created</h6>
          <AddBtn text="New Note" @onClick="toggleShowBox(true)" />
        </div>
      </div>
    </template>

    <!-- Add Notes -->
    <AddNotes
      :isShow="isAddBoxShowing"
      :noteDetails="selectedNoteDetails"
      @getDealNotes="getDealNotes"
      @toggleShowBox="toggleShowBox(false)"
    />
  </div>
</template>

<script>
import AddBtn from './AddBtn.vue';
import AddNotes from './notes/AddNotes.vue';
export default {
  name: 'Notes',
  components: { AddNotes, AddBtn },
  data() {
    return {
      isAddBoxShowing: false,
      notes: [],
      dealId: null,
      selectedNoteDetails: {},
      currentpage: 1,
      pageSize: 10,
      totalNotes: 0,
      paginationMetaData: null,
    };
  },
  created() {
    this.dealId = Number(this.$route.params.id);
    this.getDealNotes();
  },
  computed: {
    footerText() {
      const { currentPage, totalPage, totalItems } =
        this.paginationMetaData || {};
      if (totalPage && totalItems) {
        return `Displaying ${
          Number(currentPage) 
        } to ${totalPage} of ${totalItems} records`;
      }
      return '';
    },
    convertUtcToLocal() {
      return (utc) => {
        return this.$dayjs.utc(utc).local().format('MM/DD/YYYY hh:mm A');
      };
    },
  },
  watch: {
    currentpage: 'getDealNotes',
  },
  methods: {
    async getDealNotes() {
      const payload = {
        id: this.dealId,
        fields: ['type', 'createdBy', 'content', 'createdAt'],
        page: this.currentpage,
        pageSize: this.pageSize,
      };
      const { data } = await this.$store.dispatch(
        'marketing/getMarketingDealNotes',
        payload
      );
      if (data.result) {
        this.isAddBoxShowing = false;
        this.notes = data.payload.notes;
        this.selectedNoteDetails = {};
        this.totalNotes = data.payload.meta.totalPage;
        this.paginationMetaData = data.payload.meta;
      }
    },
    toggleShowBox(val) {
      this.selectedNoteDetails = {};
      this.isAddBoxShowing = val;
    },
    toggleDescription(index) {
      this.notes[index].showDescription = !this.notes[index].showDescription;
    },
    editNote(note) {
      this.selectedNoteDetails = note;
      this.isAddBoxShowing = true;
    },
  },
};
</script>

<style lang="scss" scoped>
$light-color: rgba(0, 0, 0, 0.1);
.notes {
  .down-angle,
  .vs-collapse-item.open-item .icon-scale {
    transform: rotate(90deg);
  }
  .vs-collapse-item .icon-scale {
    transition: 0.5s ease;
  }
  .accordions {
    .accordion-item {
      border: 1px solid $light-color;

      .accordion-toggle {
        cursor: pointer;
      }

      .note-description {
        overflow: hidden;
      }
    }
  }

  .rotate-90-degree {
    transform: rotate(90deg);
  }
  .note-collapse {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .note-item-content {
    min-width: 80%;
    h6{
      color: rgba(var(--vs-primary),1);
      font-size: 16px;
      font-weight: 500;
    }
    small{
      color: var(--Black-Black-400, #45454A);
      font-size: 12px;
      font-weight: 400;
    }
    .note-description{
      small{
        p{
          color: var(--Black-Black-400, #45454A);
          font-size: 14px;
          font-weight: 400;
          padding-top: 10px;
        }
      }
    }
  }
  .vs-button-primary.vs-button-border{
    background-color: rgba(var(--vs-primary),1) !important;
    border: 1px solid rgba(var(--vs-primary),1) !important;
    color: #FFFFFF !important;
    &:hover{
      background-color: rgba(var(--vs-primary),1) !important;
      color: #FFFFFF !important;
      border: 1px solid rgba(var(--vs-primary),1) !important;
    }
  }
}

</style>
