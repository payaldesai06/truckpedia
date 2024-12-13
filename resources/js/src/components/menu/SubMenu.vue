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

    <!-- Step 1: SubMenu Name -->
    <div v-show="currentStep === 1">
      <div class="vx-row">
        <div class="vx-col w-full">
          <vs-input
            class="w-full"
            v-model="subMenuData.name"
            label="SubMenu Name"
            placeholder="Enter submenu name"
          />
        </div>
      </div>
    </div>

    <!-- Step 2: Views -->
    <div v-show="currentStep === 2">
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
            <label class="mx-2" v-text="view.name" />
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

    <!-- Step 3: Review -->
    <div v-show="currentStep === 3">
      <div class="vx-row flex justify-center">
        <div class="vx-col w-full flex items-center justify-between height-40">
          <label class="w-1/2 font-semibold" v-text="'Menu name'" />
          <label class="w-1/2 text-right" v-text="subMenuData.name" />
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

<!-- eslint-disable multiline-ternary -->
<script>
export default {
  name: 'SubMenu',
  props: {
    isPromptActive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    promptTitle () {
      const title = this.menuSteps.find(
        (step) => step.id === this.currentStep
      ).title

      return title
    },
    nextNavText () {
      return (
        this.menuSteps.find((step) => step.id === this.currentStep)
          .nextBtnText || 'Next'
      )
    },
    isNextBtnDisabled () {
      return this.currentStep === 1 && !this.subMenuData.name.trim()
    },
    activeViews () {
      return this.views.filter((view) => view.isActive)
    }
  },
  data: () => ({
    menuSteps: [
      {
        id: 1,
        title: 'Create new submenu',
        nextBtnText: 'Next',
        onNextAction: 'navigateForward'
      },
      {
        id: 2,
        title: 'Default settings for views',
        nextBtnText: 'Review SubMenu',
        onNextAction: 'navigateForward'
      },
      {
        id: 3,
        title: 'Review SubMenu',
        nextBtnText: 'Create SubMenu',
        onNextAction: 'submitSubMenu'
      }
    ],
    subMenuData: {
      name: '',
      predefinedData: '',
      views: []
    },
    currentStep: 1,
    views: [
      {
        id: 1,
        icon: 'view_stream',
        name: 'Table',
        type: 'table',
        isActive: true,
        isDefaultView: true
      },
      {
        id: 2,
        icon: 'format_list_bulleted',
        name: 'List',
        type: 'list',
        isActive: false,
        isDefaultView: false
      },
      {
        id: 3,
        icon: 'dashboard',
        name: 'Board',
        type: 'board',
        isActive: false,
        isDefaultView: false
      },
      {
        id: 4,
        icon: 'assessment',
        name: 'Gantt',
        type: 'gantt',
        isActive: false,
        isDefaultView: false
      }
    ]
  }),
  methods: {
    resetMenu () {
      this.subMenuData = {
        name: '',
        predefinedData: '',
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
      if (this.currentStep === 2) this.addViewsToMenu()

      if (this.currentStep < this.menuSteps.length) {
        this.currentStep++
      }
    },
    addViewsToMenu () {
      this.subMenuData.views = this.activeViews.map(({ name, type }) => {
        return {
          name,
          type
        }
      })
    },
    submitSubMenu () {
      this.$emit('submit', this.subMenuData)
      this.resetMenu()
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .p-dialog-content {
    overflow-y: visible;
  }
}

// Utility classes

.bg-primary-light {
  background-color: #f1f4ff;
}

.height-40 {
  height: 40px;
}
</style>
