<template>
  <div class="info-box tab-list-wrapper">
    <KeepAlive>
      <vs-tabs class="tab-list">
        <vs-tab label="Activities">
          <Activities />
        </vs-tab>
        <vs-tab label="Notes">
          <Notes />
        </vs-tab>
        <vs-tab label="Email">
          <Email />
        </vs-tab>
        <vs-tab label="Contacts">
          <Contacts location="deal" />
        </vs-tab>
        <vs-tab label="Tasks">
          <Tasks location="deal" />
        </vs-tab>
      </vs-tabs>
    </KeepAlive>
  </div>
</template>

<script>
import Activities from './Activities.vue';

export default {
  name: 'tablist',
  components: {
    Activities,
    Notes: () => import('./Notes.vue'),
    Contacts: () => import('./Contacts.vue'),
    Tasks: () => import('./Tasks.vue'),
    Email: () => import('./Email.vue'),
  },
};
</script>

<style lang="scss">
$light-color: rgba(0, 0, 0, 0.1);
$black-base-color: var(--Black-Black-Base, #18181a);
.con-ul-tabs {
  margin-bottom: 20px;
  .ul-tabs {
    border-bottom: 2px solid $light-color;
  }
  .line-vs-tabs,
  .ul-tabs {
    box-shadow: none !important;
  }
}
.info-box.tab-list-wrapper{
    border-radius: 4px;
    background-color: var(--White, #FFFEFE) !important;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.08), 0px 1px 4px 0px rgba(0, 0, 0, 0.04);
  .con-ul-tabs{
    .ul-tabs{
      li{
        button {
          font-size: 16px;
          font-weight: 600;
        }
        &.activeChild{
          button{
            color: var(--Light---primary-text-color, #323338) !important;

          }
        }
      }
    }
  }
}
.contact-sidebar, .task-sidebar{
  .vs-sidebar--background {
    background: rgba(9, 11, 14, 0.34);
    backdrop-filter: blur(2.5px);
  }
  .vs-sidebar {
    .vs-sidebar--items {
      padding: 0rem;
    }
    .vs-header-sidebar {
      min-height: 50px;
      padding: 0rem 1.5rem;
      background: rgba(var(--vs-primary), 1) !important;
      & h4 {
        color: #ffffff;
        font-size: 1.25rem;
        font-weight: 500;
      }
    }
    .vs-sidebar-form {
      padding: 1.5rem;
      & label {
        color: $black-base-color;
        font-size: 1rem;
        font-weight: 400;
      }
    }
  }
}

.task-container, .contacts{
  .p-column-title {
    color: var(--Foundation-Black, #0f0f0f);
    font-size: 14px;
    font-weight: 500;
  }
  .p-datatable {
    .p-datatable-tbody {
      tr {
        td {
          color: var(--Foundation-Black, #0f0f0f);
          font-size: 14px;
          font-weight: 400;
        }
      }
    }
  }
  .add-exiting-btn {
    color: #ffffff !important;
    background: rgba(var(--vs-primary),1) !important;
    border: 1px solid rgba(var(--vs-primary),1) !important;
    &:hover {
      color: #ffffff !important;
      background: rgba(var(--vs-primary),1) !important;
      border: 1px solid rgba(var(--vs-primary),1) !important;
    }
  }
}
.new-task {
  color: #ffffff !important;
  background: rgba(var(--vs-primary),1) !important;
  border: 1px solid rgba(var(--vs-primary),1) !important;
  &:hover {
    color: #ffffff !important;
    background: rgba(var(--vs-primary),1) !important;
    border: 1px solid rgba(var(--vs-primary),1) !important;
  }
}
</style>
