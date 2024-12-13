<template>
  <vs-sidebar position-right parent="body" default-index="1" color="primary"
              class="add-new-data-sidebar items-no-padding" spacer
              v-model="isSidebarActiveLocal">

    <div class="mt-6 flex items-center justify-between px-6">
      <h4>{{ Object.entries(this.data).length === 0 ? 'Add New' : 'Edit' }} Language Label</h4>
      <feather-icon icon="XIcon" @click.stop="closeSidebar" class="cursor-pointer"></feather-icon>
    </div>

    <vs-divider class="mb-0"></vs-divider>

    <component :is="scrollbarTag" class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">
      <div class="p-6 space-y-4">
        <div class="w-full">
          <label class="text-xs">
            Label Name
            <field-required-sign/>
          </label>

          <vs-input v-validate="'required'"
                    data-vv-validate-on="blur"
                    name="label_name"
                    v-model="label_name"
                    :disabled="!isCreateMode"
                    class="w-full"/>

          <span class="text-danger text-sm">{{ errors.first('label_name') }}</span>
        </div>

        <div class="w-full">
          <label class="text-xs">
            Label English
            <field-required-sign/>
          </label>

          <vs-input v-validate="'required'"
                    data-vv-validate-on="blur"
                    name="label_english"
                    v-model="label_english"
                    class="w-full"/>

          <span class="text-danger text-sm">{{ errors.first('label_english') }}</span>
        </div>

        <div class="w-full">
          <label class="text-xs">
            Label Chinese
            <field-required-sign/>
          </label>

          <vs-input v-validate="'required'"
                    data-vv-validate-on="blur"
                    name="label_chinese"
                    v-model="label_chinese"
                    class="w-full"/>

          <span class="text-danger text-sm">{{ errors.first('label_chinese') }}</span>
        </div>
      </div>
    </component>

    <div class="flex flex-wrap items-center p-6 space-x-2" slot="footer">
      <vs-button type="filled" color="primary" @click="submit" :disabled="!validateForm">
        {{ Object.entries(this.data).length === 0 ? 'Submit' : 'Update' }}
      </vs-button>

      <vs-button type="border" color="danger" @click="closeSidebar">Cancel</vs-button>
    </div>
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import CloseSidebarMixin from '@/mixins/closeSidebarMixin'

// For custom error message
import { Validator } from 'vee-validate'

const dict = {
  custom: {
    label_name: {
      required: 'The label name field is required.'
    },
    label_english: {
      required: 'The english label field is required.'
    },
    label_chinese: {
      required: 'The chinese label field is required.'
    }
  }
}

// register custom messages
Validator.localize('en', dict)

export default {
  name: 'LanguageLabelSidebar',

  mixins: [CloseSidebarMixin],

  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },

    data: {
      type: Object,
      default: () => {
      }
    }
  },

  components: {
    VuePerfectScrollbar
  },

  data () {
    return {
      label_id: null,
      label_name: '',
      label_english: '',
      label_chinese: '',

      // perfectscrollbar settings
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: .60
      }
    }
  },

  watch: {
    isSidebarActive (val) {
      if (!val) return

      if (Object.entries(this.data).length === 0) {
        this.initValues()
        this.$validator.reset()
      } else {
        this.initValues()
        this.$validator.reset()
      }
    }
  },

  computed: {
    isSidebarActiveLocal: {
      get () {
        return this.isSidebarActive
      },
      set (val) {
        if (!val) {
          // this.$emit('closeSidebar')
          // this.$validator.reset()
          // this.initValues()
        }
      }
    },

    scrollbarTag () {
      return this.$store.getters.scrollbarTag
    },

    validateForm () {
      return !this.errors.any()
        && this.label_name !== ''
        && this.label_english !== ''
        && this.label_chinese !== ''
    },

    isCreateMode () {
      return !!(Object.entries(this.data).length === 0)
    }
  },

  methods: {
    initValues (data = null) {
      const languageLabel = this.data.label_id ? this.data : data

      this.label_id = languageLabel ? languageLabel.label_id : null
      this.label_name = languageLabel ? languageLabel.label_name : ''
      this.label_english = languageLabel ? languageLabel.label_english : ''
      this.label_chinese = languageLabel ? languageLabel.label_chinese : ''
    },

    closeSidebar () {
      this.$emit('closeSidebar')
      this.initValues()
    },

    submit () {
      this.isCreateMode ? this.createLanguageLabel() : this.updateLanguageLabel()
    },

    createLanguageLabel () {
      this.$vs.loading()

      const payload = {
        label_name: this.label_name,
        label_english: this.label_english,
        label_chinese: this.label_chinese
      }

      this.$store.dispatch('language-label/createLanguageLabel', payload)
        .then(() => {
          this.closeSidebar()

          this.$vs.notify({
            color: 'primary',
            title: 'Language label Added',
            text: 'Language label added successfully.'
          })
        })
        .catch(error => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message
          })
        })
        .finally(() => this.$vs.loading.close())
    },

    updateLanguageLabel () {
      this.$vs.loading()

      const payload = {
        id: this.label_id,
        label_name: this.label_name,
        label_english: this.label_english,
        label_chinese: this.label_chinese
      }

      this.$store.dispatch('language-label/updateLanguageLabel', payload)
        .then(() => {
          this.closeSidebar()

          this.$vs.notify({
            color: 'primary',
            title: 'Language Label Updated',
            text: 'Language label updated successfully.'
          })
        })
        .catch(error => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message
          })
        })
        .finally(() => this.$vs.loading.close())
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@sass/custom/sidebar.scss';
</style>
