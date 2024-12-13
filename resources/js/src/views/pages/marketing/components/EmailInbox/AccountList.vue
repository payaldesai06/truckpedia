<template>
  <div>
    <div class="overflow-auto" style="height: calc(100vh - 28px)">
      <div id="email-treads">
        <div class="index-box" @click="onViewChange('viewByAllInboxes')">
          <span> All Inboxes </span>
          <span class="p-accordion-toggle-icon pi pi-chevron-right"></span>
        </div>
        <Accordion
          class="accordion-custom"
          @click.native="onViewChange('viewByAccount')"
        >
          <AccordionTab header="All Email Accounts">
            <div>
              <!-- <div class="search-input">
                <input placeholder="Search" type="text" v-model="search" />
              </div> -->
              <div
                class="overflow-auto"
                style="max-height: calc(100vh - 106px)"
              >
                <div
                  v-for="(item, index) in calcInboxes"
                  :key="index"
                  class="flex items-center mb-3 cursor-pointer px-3"
                  style="min-height: 30px"
                  @click.stop="handleEmailClick(item)"
                  :class="{
                    selected: selectedItem && item.id === selectedItem.id,
                  }"
                >
                  <span class="text-ellipsis">{{ item.email }}</span>
                </div>
              </div>
            </div>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

export default {
  name: 'AccountList',
  components: {
    Accordion,
    AccordionTab,
  },
  props: {
    viewMode: {
      type: String,
      default: 'viewByAllInboxes',
    },
  },
  data() {
    return {
      search: '',
      inboxes: [],
      selectedItem: null,
    };
  },
  created() {
    this.getEmailAccounts();
  },
  methods: {
    async getEmailAccounts() {
      try {
        this.loading = true;
        const { data } = await this.$store.dispatch(
          'marketing/getEmailAccountList',
          {}
        );
        this.inboxes = data.payload.emailAccounts;
        this.$emit('onViewChange', {
          view: 'viewByAllInboxes',
          accountList: this.inboxes,
        });
        this.$emit('updateEmailAccounts', this.inboxes);
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
        this.loading = false;
      }
    },
    handleEmailClick(item) {
      this.selectedItem = item;
      this.$emit('email-clicked', item);
      if (this.viewMode !== 'viewByAccount') {
        this.$emit('onViewChange', {
          view: 'viewByAccount',
          accountList: [item],
        });
      }
    },
    onViewChange(view) {
      if (view === 'viewByAllInboxes' && this.viewMode !== 'viewByAllInboxes') {
        this.selectedItem = null;
        this.$emit('onViewChange', {
          view: 'viewByAllInboxes',
          accountList: this.inboxes,
        });
      } else if (
        view === 'viewByAccount' &&
        this.viewMode !== 'viewByAccount'
      ) {
        this.$emit('onViewChange', { view: 'viewByAccount' });
      }
    },
  },
  computed: {
    calcInboxes() {
      if (!this.search) {
        return this.inboxes;
      }
      return this.inboxes.filter((item) =>
        item.email.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>

<style scoped lang="scss">
.index-box {
  padding: 0.6rem 0.9rem;
  color: #495057;
  background: rgb(237, 247, 255);
  font-weight: 600;
  border-radius: 12px;
  border: 0px;
  margin-bottom: 8px;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.receierBox {
  h4 {
    font-size: 14px;
    font-weight: 700;
  }

  p {
    color: var(--gray-400, #9ca3af);
    font-size: 14px;
    font-weight: 500;
  }
}

.selected {
  background-color: #edf7ff;
  border-radius: 12px;

  h4 {
    color: #4f46e5;
  }
}

.status-wrap {
  min-height: 50px;
  cursor: pointer;
  padding: 0px 10px;
}

.more-item-wrap {
  align-items: center;
  border-radius: 3px;
  display: flex;
  padding: 12px 20px;
  width: 244px;
}

.more-item-wrap:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

.status-wrap:hover {
  background-color: rgb(237, 247, 255);
  border-radius: 12px;
}

.search-input {
  border-bottom: 0.5px solid #e2e2e2;
  padding-bottom: 5px;
  margin-bottom: 15px;

  input {
    width: 100%;
    border: 0;
    height: 1.1876em;
    margin: 0;
    display: block;
    padding: 6px 0 7px;
    min-width: 0;
    background: none;
  }
}

::v-deep {
  .vs-con-dropdown {
    width: 100%;
  }
}
.text-ellipsis {
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

<style>
#email-treads
  .p-accordion
  .p-accordion-header:not(.p-disabled).p-highlight
  .p-accordion-header-link,
#email-treads
  .p-accordion
  .p-accordion-header:not(.p-highlight):not(.p-disabled):hover
  .p-accordion-header-link,
#email-treads .p-accordion .p-accordion-header .p-accordion-header-link {
  background-color: rgb(237, 247, 255);
  border-radius: 12px;
  margin-bottom: 8px;
  padding-right: 0px;
  border: 0px;
}

#email-treads
  .p-accordion
  .p-accordion-header:not(.p-disabled)
  .p-accordion-header-link {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}

#email-treads .p-accordion .p-accordion-content {
  border: 0px;
  padding-left: 0px;
  padding-right: 0px;
}

#email-treads
  .p-accordion
  .p-accordion-header:not(.p-disabled)
  .p-accordion-header-link:focus {
  box-shadow: none;
}
</style>
