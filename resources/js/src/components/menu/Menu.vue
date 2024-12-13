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
        <vs-icon
          v-show="currentStep > 1"
          class="cursor-pointer"
          icon="arrow_back_ios"
          size="small"
          @click="navigateBackward"
        />
        <h3 v-text="promptTitle" />
        <vs-icon
          class="cursor-pointer"
          icon="close"
          size="small"
          @click="onClose"
        />
      </div>
    </template>

    <!-- Step 1: Menu Name -->
    <div v-show="currentStep === 1">
      <div class="vx-row">
        <div class="vx-col w-full">
          <vs-input
            class="w-full"
            v-model="menuData.name"
            label="Menu Name"
            placeholder="Enter menu name"
          />
        </div>
      </div>
    </div>

    <!-- Step 2: Menu Color, Avatar -->
    <div v-show="currentStep === 2">
      <div class="vx-row">
        <div class="vx-col w-1/3">
          <vs-avatar
            class="rounded-lg mt-0 menu-avatar"
            size="140px"
            :color="menuData.color"
            :icon="menuData.avatarIcon"
            :text="menuData.avatarIcon ? '' : getFirstLetter(menuData.name)"
          />
        </div>
        <div class="vx-col w-2/3">
          <div class="vx-col w-full">
            <label class="font-semibold">Menu Color</label>
            <div class="mt-2 flex flex-wrap gap-1 color-list">
              <vs-icon
                class="size-24 icon-color icon-color--black cursor-pointer"
                icon="block"
                @click="changeMenuAvatarColor('primary')"
              />
              <vs-icon
                v-for="(color, index) in colorOptions"
                :key="index"
                class="size-24 icon-color cursor-pointer"
                :bg="color"
                :icon="menuData.color === color ? 'check' : ''"
                @click="changeMenuAvatarColor(color)"
              />
            </div>
          </div>
          <!-- <div class="vx-col w-full mt-2">
            <label class="font-semibold">Avatars</label>
            <div class="mt-2 flex flex-wrap gap-1">
              <vs-avatar
                class="rounded-lg mt-0"
                size="24px"
                :color="menuData.color"
                :text="getFirstLetter(menuData.name)"
                @click="changeMenuAvatar(null)"
              />
              <vs-icon
                v-for="(icon, index) in avatarIcons"
                :key="index"
                class="rounded-lg mt-0 cursor-pointer"
                size="24px"
                :icon="icon"
                @click="changeMenuAvatar(icon)"
              />
            </div>
          </div> -->
        </div>
      </div>
    </div>

    <!-- Step 3: Share -->
    <div v-show="currentStep === 3">
      <div class="vx-row flex justify-evenly">
        <!-- <div
          class="mx-2 w-2/5 flex flex-col items-center cursor-not-allowed border-2 rounded border-solid"
        >
          <vs-icon icon="people" size="100px" />
          <label class="my-5">Workspace</label>
        </div> -->
        <div
          class="mx-2 w-2/5 flex flex-col items-center cursor-pointer border-2 rounded border-solid border-primary"
        >
          <vs-icon icon="lock" size="100px" color="primary" />
          <label class="my-5 text-primary">Private</label>
        </div>
      </div>
      <div class="vx-row mt-5 min-height-100">
        <menu-share
          class="vx-col"
          :sharedWith="menuData.sharedWith"
          :accessLevels="accessLevels"
          :allUsers="allUsers"
          @change="
            ({ sharedPermissions }) => (menuData.sharedWith = sharedPermissions)
          "
        />
      </div>
    </div>

    <!-- Step 4: Views -->
    <div v-show="currentStep === 4">
      <div class="vx-row m-auto grid gap-4 grid-cols-2">
        <div
          :class="[
            'flex items-center justify-between p-5 border-2 rounded border-solid border-primary',
            { 'bg-primary-light': view.isActive },
          ]"
          v-for="(view, index) in views"
          :key="index"
        >
          <div class="flex items-center">
            <vs-icon :icon="view.icon" size="20px" />
            <label class="mx-2" v-text="view.title" />
          </div>
          <div class="flex items-center justify-between">
            <span class="flex items-center" v-if="view.isDefaultView">
              <vs-icon icon="home" size="10px" />
              <label class="mx-2 text-xs" v-text="'Default View'" />
            </span>
            <vs-switch v-model="view.isActive" :disabled="view.isDefaultView" />
          </div>
        </div>
      </div>
    </div>

    <!-- Step 5: Review -->
    <div v-show="currentStep === 5">
      <div class="vx-row flex justify-center">
        <div class="vx-col w-full flex items-center justify-between height-40">
          <label class="w-1/2 font-semibold" v-text="'Menu name'" />
          <label class="w-1/2 text-right" v-text="menuData.name" />
        </div>
        <div
          class="vx-col w-full flex items-center justify-between mt-2 height-40"
        >
          <label class="w-1/2 font-semibold" v-text="'Avatar'" />
          <div class="w-1/2 text-right">
            <vs-avatar
              class="rounded-lg mt-0 cursor-default"
              size="28px"
              :color="menuData.color"
              :icon="menuData.avatarIcon"
              :text="menuData.avatarIcon ? '' : getFirstLetter(menuData.name)"
            />
          </div>
        </div>
        <div
          class="vx-col w-full flex items-center justify-between mt-2 height-40"
        >
          <label class="w-1/2 font-semibold" v-text="'Shared with'" />
          <div>
            <vs-dropdown vs-trigger-click>
              <a class="a-icon flex items-center" href.prevent>
                {{ menuData.sharedWith.length }} users
                <vs-icon class="" icon="expand_more" />
              </a>
              <vs-dropdown-menu>
                <vs-dropdown-item
                  v-for="(user, index) in menuData.sharedWith"
                  :key="index"
                  v-text="user.fullName"
                />
              </vs-dropdown-menu>
            </vs-dropdown>
          </div>
        </div>
        <div
          class="vx-col w-full flex items-center justify-between mt-2 height-40"
        >
          <label class="font-semibold" v-text="'Default settings for views'" />
          <div class="text-right flex gap-2">
            <vs-icon
              size="28px"
              v-for="(view, index) in activeViews"
              :key="index"
              :icon="view.icon"
            />
          </div>
        </div>
      </div>
    </div>

    <template #footer>
      <!-- Navigation -->
      <div class="w-full">
        <vs-button
          class="w-full"
          color="primary"
          @click="onNextClick"
          :disabled="isNextBtnDisabled"
        >
          {{ nextNavText }}
        </vs-button>
      </div>
    </template>
  </Dialog>
</template>

<!-- eslint-disable multiline-ternary nonblock-statement-body-position -->
<script>
// Constants
import config from '@/config/constants'
import { materialIcons } from './helpers/constants'
import { mapGetters } from 'vuex'

export default {
  name: 'Menu',
  components: {
    MenuShare: () => import('./components/MenuShare.vue')
  },
  props: {
    isPromptActive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters('companyUserV2', ['getAllWebUsersList']),
    ...mapGetters("auth", ["user"]),

    allUsers () {
      const userList = this.getAllWebUsersList

      return userList.map((user) => {
        return {
          id: user.id,
          fullName: user.fullName,
          accessLevel: this.accessLevels[0].value
        }
      })
    },
    promptTitle () {
      const title = this.menuSteps.find(
        (step) => step.id === this.currentStep
      ).title

      return this.currentStep === 3 ? `${title} ${this.menuData.name}` : title
    },
    nextNavText () {
      return (
        this.menuSteps.find((step) => step.id === this.currentStep)
          .nextBtnText || 'Next'
      )
    },
    isNextBtnDisabled () {
      return this.currentStep === 1 && !this.menuData.name.trim()
    },
    colorOptions () {
      return config.spreadSheetColorPickerPallet.filter(
        (color) => color !== '#ffffff'
      )
    },
    activeViews () {
      return this.views.filter((view) => view.isActive)
    },
    accessLevels () {
      return config.menuAccessLevels || []
    }
  },
  data: () => ({
    menuSteps: [
      {
        id: 1,
        title: 'Create new menu',
        nextBtnText: 'Next',
        onNextAction: 'navigateForward'
      },
      {
        id: 2,
        title: 'Menu color or avatar',
        nextBtnText: 'Next',
        onNextAction: 'navigateForward'
      },
      {
        id: 3,
        title: 'Share',
        nextBtnText: 'Next',
        onNextAction: 'navigateForward'
      },
      {
        id: 4,
        title: 'Default settings for views',
        nextBtnText: 'Review Menu',
        onNextAction: 'navigateForward'
      },
      {
        id: 5,
        title: 'Review Menu',
        nextBtnText: 'Create Menu',
        onNextAction: 'submitMenu'
      }
    ],
    menuData: {
      name: '',
      color: 'primary',
      avatar: '',
      avatarIcon: null,
      isShared: true,
      sharedWith: [],
      views: []
    },
    currentStep: 1,
    avatarIcons: materialIcons,
    views: [
      {
        id: 1,
        icon: 'view_stream',
        title: 'Table',
        isActive: true,
        isDefaultView: true
      },
      {
        id: 2,
        icon: 'format_list_bulleted',
        title: 'List',
        isActive: false,
        isDefaultView: false
      },
      {
        id: 3,
        icon: 'dashboard',
        title: 'Board',
        isActive: false,
        isDefaultView: false
      },
      {
        id: 4,
        icon: 'assessment',
        title: 'Gantt',
        isActive: false,
        isDefaultView: false
      }
    ]
  }),
  created () {
    this.init()
  },
  methods: {
    async init () {
      try {
        await this.$store.dispatch('companyUserV2/fetchAllWebUsers')
      } catch (error) {}
    },
    resetMenu () {
      this.menuData = {
        name: '',
        color: 'primary',
        avatar: '',
        avatarIcon: null,
        isShared: true,
        sharedWith: [],
        views: []
      }
      this.views.forEach((view) => {
        if (!view.isDefaultView) view.isActive = false
      })
      this.currentStep = 1
    },
    onClose () {
      this.resetMenu()
      this.$emit('closePrompt')
    },
    onAccept () {
      this.$emit('closePrompt')
    },
    onNextClick () {
      const action = this.menuSteps[this.currentStep - 1].onNextAction
      if (action) this[action]()
    },
    navigateBackward () {
      if (this.currentStep > 1) {
        this.currentStep--
      }
    },
    navigateForward () {
      if (this.currentStep === 4) this.addViewsToMenu()

      if (this.currentStep < this.menuSteps.length) {
        this.currentStep++
      }
    },
    changeMenuAvatarColor (color) {
      this.menuData.color = color
    },
    getFirstLetter (name) {
      return name.trim().charAt(0)
    },
    changeMenuAvatar (icon) {
      this.menuData.avatarIcon = icon
    },
    addViewsToMenu () {
      this.menuData.views = this.activeViews.map((view) => view.title)
    },
    submitMenu() {
      const payload = {
        ...this.menuData
      }

      if (this.menuData.sharedWith.length)
        payload.sharedPermissions = this.menuData.sharedWith.map(
          (user) => {
            return {
              userId: user.id,
              accessLevel: user.accessLevel
            }
          }
        )

      this.$emit("submit", payload)
      this.resetMenu()
    },
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .menu-avatar {
    .vs-avatar--text {
      font-size: 2.5rem;
      font-weight: 500;
      text-shadow: 0 0 1px #000;
    }
  }

  .p-dialog-content {
    overflow-y: visible;
  }
}

.con-vs-dropdown--menu {
  z-index: 100000;

  ::v-deep .vs-dropdown--menu {
    overflow-x: hidden !important;
    overflow-y: auto !important;
    max-height: 360px !important;
  }

  .vs-dropdown--item {
    margin: 10px;
  }
}

.color-list {
  max-height: 120px;
  overflow-x: auto;
}

// Utility
.size-24 {
  width: 24px !important;
  height: 24px !important;
}

.icon-color {
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
  text-shadow: 0 0 1px #000;

  &--black {
    color: #000;
  }
}

.min-height-100 {
  min-height: 100px;
}

.min-height-37 {
  min-height: 37px;
}

.bg-primary-light {
  background-color: #f1f4ff;
}

.height-40 {
  height: 40px;
}
</style>