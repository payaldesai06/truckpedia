<template>
  <vs-prompt
    :title="title"
    :accept-text="acceptText"
    @cancel="onClose"
    @accept="onAccept"
    @close="onClose"
    :is-valid="menuName !== ''"
    :active="isPromptActive"
  >
    <div>
      Enter a name
      <vs-input class="w-full" placeholder="Name" v-model="menuName" />
    </div>
    <div class="vx-row mt-4">
      <div class="vx-col w-1/3" v-if="isAvatarVisible">
        <vs-avatar
          class="rounded-lg mt-0 ml-0 menu-avatar"
          size="100px"
          :color="menuColor || defaultColor"
          :text="getFirstLetter(menuName)"
        />
      </div>
      <div :class="['vx-col', isAvatarVisible ? 'w-2/3' : 'w-full']">
        <div class="vx-col w-full">
          <label class="font-semibold">Color</label>
          <div class="mt-2 flex flex-wrap gap-1 color-list">
            <vs-icon
              class="size-24 icon-color icon-color--black cursor-pointer"
              icon="block"
              @click="changeMenuAvatarColor(defaultColor)"
            />
            <vs-icon
              v-for="(color, index) in colorOptions"
              :key="index"
              class="size-24 icon-color cursor-pointer"
              :bg="color"
              :icon="menuColor === color ? 'check' : ''"
              @click="changeMenuAvatarColor(color)"
            />
          </div>
        </div>
      </div>
    </div>
  </vs-prompt>
</template>
<script>
import config from '@/config/constants'

export default {
  name: 'MenuNamePrompt',
  props: {
    isPromptActive: {
      type: Boolean,
      default: false
    },
    currentName: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    isAvatarVisible: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    acceptText () {
      return 'Rename'
    },
    colorOptions () {
      return config.spreadSheetColorPickerPallet.filter(
        (color) => color !== '#ffffff'
      )
    }
  },
  data () {
    return {
      menuName: '',
      menuColor: '',
      defaultColor: '#c3c3c3' // default light gray color
    }
  },
  methods: {
    clearMenuName () {
      this.menuName = ''
    },
    onAccept () {
      this.$emit('onAccept', { name: this.menuName, color: this.menuColor })
      this.clearMenuName()
    },
    onClose () {
      this.$emit('onClose')
      this.clearMenuName()
    },
    getFirstLetter (name) {
      return name.trim().charAt(0)
    },
    changeMenuAvatarColor (color) {
      this.menuColor = color
    }
  },
  watch: {
    currentName (val) {
      if (val) {
        this.menuName = val
      }
    },
    color (val) {
      if (val) {
        this.menuColor = val
      } else this.menuColor = ''
    }
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
</style>
