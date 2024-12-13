<template>
  <div>
    <div class="flex items-center justify-between">
      <div>
        <ul class="flex space-x-4 ml-2 mr-4" style="margin-bottom: 7px">
          <li
            v-for="item in items"
            :key="item.title"
            @click="changeComponent(item.componentName)"
            class="font-medium text-md cursor-pointer invisible-border"
            :class="{ active: activeComponent == item.componentName }"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>
      <vs-button icon="add" @click="newAccountType = 'email'">
        Add Email Account
      </vs-button>
    </div>
    <link-email-account-popup
      :popupActive="newAccountType === 'email'"
      @closePopup="closePopup"
    />
  </div>
</template>

<script>
import SplitButton from 'primevue/splitbutton';
import LinkEmailAccountPopup from './LinkEmailAccountPopup.vue';

export default {
  name: 'Headers',
  components: {
    SplitButton,
    LinkEmailAccountPopup,
  },
  data() {
    return {
      search: '',
      searchFilters: '',
      filterState: false,
      activeComponent: 'email',
      items: [
        {
          title: 'Email',
          componentName: 'email',
        },
      ],
      newAccountType: '',
    };
  },
  methods: {
    changeComponent(newComponent) {
      this.activeComponent = newComponent;
      this.$emit('changeComponent', newComponent);
    },
    closePopup() {
      this.newAccountType = '';
    },
    toggleFilterInput() {
      this.filterState = !this.filterState;
    },
  },
};
</script>

<style scoped lang="scss">
.active {
  border-bottom: 2px solid rgba(var(--vs-primary), 1);
  color: rgba(var(--vs-primary), 1) !important;
}
.position-absolute {
  position: absolute;
}
</style>
<style>
.customBtn button {
  border-color: rgba(var(--vs-primary), 1) !important;
  background: rgba(var(--vs-primary), 1) !important;
}
</style>
