<template>
  <Dialog
    :visible="isPromptActive"
    :closable="false"
    :modal="true"
    :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
    :style="{ width: '40vw' }"
  >
    <template #header>
      <div class="w-full flex items-center justify-between">
        <h3 v-text="'Share with'" />
        <vs-icon
          class="cursor-pointer"
          icon="close"
          size="small"
          @click="onClose"
        />
      </div>
    </template>

    <div class="vx-row">
      <menu-share
        class="vx-col min-height-180"
        :sharedWith="sharedUsersList"
        :accessLevels="accessLevels"
        :allUsers="allUsers"
        :showPrivateCheckbox="isRecordSubmenu"
        :isPrivate="isPrivate"
        @change="onSharedUsersChange"
      />
    </div>

    <template #footer>
      <div class="w-full flex justify-end">
        <vs-button color="primary" @click="onSubmit"> Save </vs-button>
        <vs-button color="primary" type="border" @click="onClose">
          Cancel
        </vs-button>
      </div>
    </template>
  </Dialog>
</template>

<script>
export default {
  name: 'MenuShareDialog',
  components: {
    MenuShare: () => import('@/components/menu/components/MenuShare.vue')
  },
  props: {
    isPromptActive: {
      type: Boolean,
      default: false
    },
    sharedWith: {
      type: Array,
      default: () => []
    },
    accessLevels: {
      type: Array,
      default: () => []
    },
    allUsers: {
      type: Array,
      default: () => []
    },
    recordType: {
      type: String,
      default: null
    },
    isPrivate: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isRecordSubmenu () {
      return this.recordType === 'subMenu'
    }
  },
  data () {
    return {
      sharedUsersList: [],
      isRecordPrivate: false
    }
  },
  methods: {
    onClose () {
      this.$emit('onClose')
    },
    onSharedUsersChange ({ isPrivate, sharedPermissions }) {
      this.sharedUsersList = sharedPermissions
      this.isRecordPrivate = isPrivate
    },
    onSubmit () {
      this.$emit('onSubmit', {
        isPrivate: this.isRecordPrivate,
        sharedPermissions: this.sharedUsersList
      })
    }
  },
  watch: {
    sharedWith: {
      handler () {
        this.sharedUsersList = this.sharedWith
      },
      immediate: true
    },
    isPrivate: {
      handler () {
        this.isRecordPrivate = this.isPrivate
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .p-dialog-content {
    overflow-y: unset;
  }
}
// Utility classes
.min-height-180 {
  min-height: 180px;
}
</style>
