<template>
  <Dialog
    class="dialog"
    :visible="isPromptActive"
    :closable="false"
    :breakpoints="{ '960px': '50vw', '640px': '75vw' }"
    :style="{ width: '50vw' }"
    :modal="true"
  >
    <!-- Body Section -->
    <div class="w-full mt-4">
      <div class="w-full flex items-center">
        <div class="w-1/4">
          <label class="font-semibold" v-text="'Name'" />
        </div>
        <div class="w-full">
          <vs-input
            class="mt-2 w-full"
            v-model="form.name"
            placeholder="Enter Name"
            type="filled"
            color="primary"
          />
        </div>
      </div>
      <div class="w-full flex items-center mt-2" v-if="!isEdit">
        <div class="w-1/4">
          <label class="font-semibold" v-text="'Type'" />
        </div>
        <div class="w-full">
          <Dropdown
            class="w-full"
            v-model="form.type"
            :options="typesList"
            optionLabel="label"
            optionValue="value"
            :filter="true"
            @change="onFieldTypeChange"
          >
            <template #value="{ value }">
              <div class="flex" v-if="value">
                <label>{{ getFieldTypeLabel(value) }}</label>
              </div>
              <label v-else class="text-gray-400">Select Type</label>
            </template>
            <template #option="{ option: { label, icon } }">
              <div class="flex">
                <vs-icon class="mr-1" size="22px" :icon="icon" />
                <label>{{ label }}</label>
              </div>
            </template>
          </Dropdown>
        </div>
      </div>
      <div class="w-full flex items-center">
        <div class="w-1/4">
          <label class="font-semibold" v-text="'Level'" />
        </div>
        <div class="w-full mt-2 flex flex-col gap-2">
          <span
            class="flex gap-2"
            v-for="option in levelOptions"
            :key="option.id"
          >
            <Checkbox
              v-model="form.level"
              :value="option.value"
              @change="onLevelChange(option.value)"
            />
            <label class="" v-text="option.label" :disable="form.level" />
          </span>
        </div>
      </div>
      <div class="w-full flex mt-2" v-if="isSingleSelect">
        <div class="w-1/4">
          <label class="font-semibold" v-text="'Options'" />
        </div>
        <div class="flex flex-col w-full">
          <div
            class="w-full border-gray rounded p-2 height-200px overflow-y-auto"
            v-if="form.singleSelectOptions.length > 0"
          >
            <div
              class="flex justify-between items-center"
              v-for="selectOption in form.singleSelectOptions"
              :key="selectOption.optionId"
            >
              <div class="w-full">
                <vs-input
                  v-if="selectedSingleSelectOptionID === selectOption.optionId"
                  class="w-full option-name-input"
                  :value="selectOption.optionName"
                  type="filled"
                  color="primary"
                  :autofocus="true"
                  @blur="setSelectedOption(null)"
                  @input="setSelectedOptionName($event)"
                />
                <vs-chip
                  v-else
                  :color="selectOption.color || ''"
                  @click.native="setSelectedOption(selectOption.optionId)"
                  :style="selectOption.color ? generateTextColor(selectOption.color) : ''"
                >
                  {{ selectOption.optionName }}
                </vs-chip>
              </div>
              <div class="flex flex-none">
                <vs-dropdown
                  class="cursor-pointer show-on-submenu-hover custom-sub-menu-dropdown"
                  vs-custom-content
                  vs-trigger-click
                >
                  <vs-icon
                    v-if="
                      selectedSingleSelectOptionID !== selectOption.optionId
                    "
                    icon="palette"
                  />
                  <vs-dropdown-menu>
                    <div class="mt-2 flex flex-wrap gap-1 color-list">
                      <vs-icon
                        class="size-24 icon-color icon-color--black cursor-pointer"
                        icon="block"
                        @click="updateOptionColor(selectOption, null)"
                      />
                      <vs-icon
                        v-for="(color, index) in colorOptions"
                        :key="index"
                        class="size-24 icon-color cursor-pointer"
                        :bg="color"
                        :icon="selectOption.color === color ? 'check' : ''"
                        @click="updateOptionColor(selectOption, color)"
                      />
                    </div>
                  </vs-dropdown-menu>
                </vs-dropdown>
                <vs-icon
                  class="cursor-pointer"
                  size="22px"
                  icon="clear"
                  @click.stop="initDeletePrompt(selectOption.optionId)"
                />
              </div>
            </div>
          </div>
          <div class="w-full" v-else>
            <label class="text-danger" v-text="'This Field Is Required'" />
          </div>
          <div class="flex justify-end">
            <label
              class="cursor-pointer text-primary"
              v-text="'Add New Option'"
              @click.stop="addNewOption"
            />
          </div>
        </div>
      </div>
      <div class="w-full flex mt-2" v-if="isMultiSelect">
        <div class="w-1/4">
          <label class="font-semibold" v-text="'Options'" />
        </div>
        <div class="flex flex-col w-full">
          <div
            class="w-full border-gray rounded p-2 height-200px overflow-y-auto"
            v-if="form.multiSelectOptions.length > 0"
          >
            <div
              class="flex justify-between items-center"
              v-for="selectOption in form.multiSelectOptions"
              :key="selectOption.optionId"
            >
              <div class="w-full">
                <vs-input
                  v-if="selectedSingleSelectOptionID === selectOption.optionId"
                  class="w-full option-name-input"
                  :value="selectOption.optionName"
                  type="filled"
                  color="primary"
                  :autofocus="true"
                  @blur="setSelectedOption(null)"
                  @input="setMultiSelectedOptionName($event)"
                />
                <vs-chip
                  v-else
                  :color="selectOption.color || ''"
                  @click.native="setSelectedOption(selectOption.optionId)"
                  :style="selectOption.color ? generateTextColor(selectOption.color) : ''"
                >
                  {{ selectOption.optionName }}
                </vs-chip>
              </div>
              <div class="flex flex-none">
                <vs-dropdown
                  class="cursor-pointer show-on-submenu-hover custom-sub-menu-dropdown"
                  vs-custom-content
                  vs-trigger-click
                >
                  <vs-icon
                    v-if="
                      selectedSingleSelectOptionID !== selectOption.optionId
                    "
                    icon="palette"
                  />
                  <vs-dropdown-menu>
                    <div class="mt-2 flex flex-wrap gap-1 color-list">
                      <vs-icon
                        class="size-24 icon-color icon-color--black cursor-pointer"
                        icon="block"
                        @click="
                          updateMultiSelectOptionColor(selectOption, null)
                        "
                      />
                      <vs-icon
                        v-for="(color, index) in colorOptions"
                        :key="index"
                        class="size-24 icon-color cursor-pointer"
                        :bg="color"
                        :icon="selectOption.color === color ? 'check' : ''"
                        @click="
                          updateMultiSelectOptionColor(selectOption, color)
                        "
                      />
                    </div>
                  </vs-dropdown-menu>
                </vs-dropdown>
                <vs-icon
                  class="cursor-pointer"
                  size="22px"
                  icon="clear"
                  @click.stop="initDeletePrompt(selectOption.optionId, 'multiSelect')"
                />
              </div>
            </div>
          </div>
          <div class="w-full" v-else>
            <label class="text-danger" v-text="'This Field Is Required'" />
          </div>
          <div class="flex justify-end">
            <label
              class="cursor-pointer text-primary"
              v-text="'Add New Option'"
              @click.stop="addNewMultiSelectOption"
            />
          </div>
        </div>
      </div>
      <div class="w-full flex items-center mt-2" v-if="isRecordLink && !isEdit">
        <div class="w-1/4">
          <label class="font-semibold" v-text="'Link to'" />
        </div>
        <div class="w-full">
          <Dropdown
            class="w-full"
            v-model="form.recordLinkMetaData.submenuId"
            :options="submenuList"
            optionLabel="name"
            optionValue="id"
            :filter="true"
            :showClear="true"
          >
          </Dropdown>
        </div>
      </div>
      <div class="w-full flex items-center mt-2" v-if="isRollUp">
        <template v-if="rollUpTargetsWithFields.length">
          <div class="w-1/4"></div>
          <div class="w-full">
            <label class="font-semibold">
              Field on this table that links to the records you want to summarize
            </label>
            <Dropdown
              class="w-full"
              v-model="form.rollUpMetaData.targetSubmenuId"
              :options="rollUpTargetsWithFields"
              optionLabel="submenuName"
              optionValue="submenuId"
              :filter="true"
              :showClear="true"
              :disabled="isEdit"
            >
            </Dropdown>
          </div>
        </template>
        <template v-else>
          <span class="flex justify-center pt-3 mx-auto" style="color: red;">
             You need a link field to create a rollup. Create the link field before configuring this rollup field.
          </span>
        </template>

      </div>
      <template v-if="isRollUp">
        <section v-if="((rollUpTargetSelected || {}).fields || []).length">
          <div
            class="w-full flex items-center mt-2"
            v-if="isRollUp && form.rollUpMetaData.targetSubmenuId"
          >
            <div class="w-1/4"></div>
            <div class="w-full">
              <label class="font-semibold">
                {{ (rollUpTargetSelected || {}).submenuName }} table field that you'd like to roll up
              </label>
              <Dropdown
                class="w-full"
                v-model="form.rollUpMetaData.targetCustomFieldId"
                :options="(rollUpTargetSelected || {}).fields || []"
                optionLabel="customFieldName"
                optionValue="customFieldId"
                :filter="true"
                :showClear="true"
                :disabled="isEdit"
              >
              </Dropdown>
            </div>
          </div>
          <div
            class="w-full flex items-center mt-2"
            v-if="isRollUp && form.rollUpMetaData.targetCustomFieldId"
          >
            <div class="w-1/4">
              <vs-switch :value="!!form.rollUpMetaData.filter" @click="toggleRollUpFilter" :disabled="isEdit"/>
            </div>
            <div class="w-full">
              <label class="font-semibold">
                Only include linked records from the Tasks table that meet certain conditions
              </label>
            </div>
          </div>
          <div
            class="w-full flex items-center mt-2"
            v-if="!!form.rollUpMetaData.filter"
          >
            <RollUpFieldFilter
              ref="rollUpFieldFilter"
              :selectedTarget="rollUpTargetSelected"
              :filters="form.rollUpMetaData.filter"
              :isEdit="this.isEdit"
            />
          </div>
        </section>
        <section v-else-if="rollUpTargetSelected">
          <span class="flex justify-center pt-3" style="color: red;">
             No record link to chosen submenu
          </span>
        </section>
      </template>
      <div class="w-full flex items-center mt-2" v-if="isFormulaField">
        <FieldFormulaCalculator
          ref="fieldFormulaCalculator"
          :isEdit="isEdit"
          :customFields="customFields"
          :formulaData="form.formulaMetaData.formula"
        />
      </div>
    </div>

    <!-- Footer Section -->
    <template #footer>
      <div class="w-full flex mt-4">
        <div class="flex ml-auto">
          <vs-button
            color="primary"
            :disabled="isSubmitDisabled"
            @click.stop="saveDetails"
          >
            Save
          </vs-button>
          <vs-button
            class="mr-0"
            color="primary"
            type="border"
            @click.stop="$emit('closeDialog')"
          >
            Cancel
          </vs-button>
        </div>
      </div>
    </template>

    <!-- Delete Prompt -->
    <DeletePrompt
      v-if="deletePrompt.isActive"
      :isPromptActive="deletePrompt.isActive"
      :label="'Do you want to delete this option?'"
      @onAccept="deleteRecord"
      @onClose="closeDeletePrompt"
    />
  </Dialog>
</template>

<!-- eslint-disable multiline-ternary nonblock-statement-body-position -->
<script>
// Libraries
import { isEmpty, cloneDeep, isString, isArray } from 'lodash'
import config from '@/config/constants'
import { generateTextColor } from "@/config/helpers.js";
export default {
  name: 'FieldForm',
  components: {
    RollUpFieldFilter: () => import('./RollUpFieldFilter'),
    DeletePrompt: () => import('@/components/prompts/DeletePrompt'),
    FieldFormulaCalculator: () => import('./FormulaFieldGenerator'),
  },
  props: {
    isPromptActive: {
      type: Boolean,
      default: false
    },
    selectedItem: {
      type: Object,
      default: () => {}
    },
    typesList: {
      type: Array,
      default: () => []
    },
    selectedField: {
      type: Object,
      default: () => {}
    },
    submenuList: {
      type: Array,
      default: () => []
    },
    customFields: {
      type: Array,
      default: () => []
    },
    submenuId: {
      type: String,
      default: ''
    },
  },
  computed: {
    isSubmitDisabled () {
      const { targetSubmenuId, targetCustomFieldId } = this.form.rollUpMetaData || {};
      const isOptionFieldInvalid =
        (this.isSingleSelect && this.form.singleSelectOptions.length === 0) ||
        (this.isMultiSelect && this.form.multiSelectOptions.length === 0) ||
        (this.isRecordLink && !this.form.recordLinkMetaData.submenuId) ||
        (this.isRollUp && !(targetSubmenuId && targetCustomFieldId))
      return (
        isEmpty(this.form.name) ||
        isEmpty(this.form.type) ||
        isOptionFieldInvalid
      )
    },
    isSingleSelect () {
      return (
        (this.isEdit && this.selectedField.type === 'singleSelect') ||
        this.form.type === 'singleSelect'
      )
    },
    isEdit () {
      return !isEmpty(this.selectedField)
    },
    colorOptions () {
      return config.spreadSheetColorPickerPallet.filter(
        (color) => color !== '#ffffff'
      )
    },
    isMultiSelect () {
      return (
        (this.isEdit && this.selectedField.type === 'multiSelect') ||
        this.form.type === 'multiSelect'
      )
    },
    isRecordLink () {
      return (
        (this.isEdit && this.selectedField.type === 'recordLink') ||
        this.form.type === 'recordLink'
      )
    },
    isRollUp () {
      return (
        (this.isEdit && this.selectedField.type === 'rollup') ||
        this.form.type === 'rollup'
      )
    },
    isFormulaField () {
      return (
        (this.isEdit && this.selectedField.type === 'formula') ||
        this.form.type === 'formula'
      )
    },
    rollUpTargetSelected () {
      const target = this.rollUpTargetsWithFields.find(
        (target) => target.submenuId === (this.form.rollUpMetaData || {}).targetSubmenuId || ''
      )
      return target ? target : null
    },
    rollUpTargetsWithFields() {
      return this.rollUpTargets.filter(target => target.fields.length > 0)
    },
    rollUpTargets() {
      return this.rollUpTargetsList || [];
    }
  },
  data () {
    return {
      form: {
        name: '',
        type: 'text',
        singleSelectOptions: [],
        multiSelectOptions: [],
        recordLinkMetaData: {
          submenuId: null
        },
        rollUpMetaData: {
          targetSubmenuId: null,
          targetCustomFieldId: null,
          filter: null,
        },
        formulaMetaData: {
          formula: null,
        },
        level: []
      },
      selectedSingleSelectOptionID: null,
      rollUpTargetsList: null,
      deletePrompt: {
        isActive: false,
        optionType: null,
        selectedItemID: null
      },
      levelOptions: [
        {
          id: 1,
          label: 'Primary field of this submenu (Only one field can be primary)',
          value: 'primary'
        },
        {
          id: 2,
          label: 'Show this field in record link data selection UI',
          value: 'secondary'
        }
      ]
    }
  },
  watch: {
    rollUpTargetSelected(newVal, oldVal) {
      if(!newVal || oldVal !== null) {
        this.form.rollUpMetaData.targetCustomFieldId = null
        this.form.rollUpMetaData.filter = null
      }
    },
    isRollUp(newVal) {
      if(newVal) {
        this.setRollUpTargets();
      }
    },
  },
  created () {
    this.init()
  },
  methods: {
    async init () {
      if (this.isEdit) {
        this.form = cloneDeep(this.selectedField)
        this.form.level = this.form.level ? [this.form.level] : []
      }
      if (this.isRollUp) {
        this.setRollUpTargets();
      }
    },
    getFieldTypeLabel (value) {
      const type = this.typesList.find((type) => type.value === value) || {}
      return type.label || ''
    },
    isTempID (id) {
      return id && isString(id) && id.includes('tempID_')
    },
    saveDetails () {
      const isValidRollUpFilter = this.validateRollUpFilter();
      if(!isValidRollUpFilter) return;

      const isValidFormulaField = this.validateFieldFormula();
      if(!isValidFormulaField) return;

      if (this.isSingleSelect) {
        this.form.singleSelectOptions = this.form.singleSelectOptions.map(
          (option) => {
            return {
              optionId: this.isTempID(option.optionId) ? null : option.optionId,
              optionName: option.optionName,
              color: option.color
            }
          }
        )
      } else delete this.form.singleSelectOptions

      if (this.isMultiSelect) {
        this.form.multiSelectOptions = this.form.multiSelectOptions.map(
          (option) => {
            return {
              optionId: this.isTempID(option.optionId) ? null : option.optionId,
              optionName: option.optionName,
              color: option.color
            }
          }
        )
      } else delete this.form.multiSelectOptions

      if (!this.isRecordLink) delete this.form.recordLinkMetaData
      if(this.isRollUp) {
        if(this.form.rollUpMetaData.filter) {
         this.form.rollUpMetaData.filter = this.getRollUpFilterData();
        }
      } else {
        delete this.form.rollUpMetaData
      }
      if(this.isFormulaField) {
        this.form.formulaMetaData.formula = this.getFieldFormula();
      } else {
        delete this.form.formulaMetaData
      }

      this.form.level = isArray(this.form.level)
        ? this.form.level.length
          ? this.form.level[0]
          : null
        : this.form.level

      this.isEdit
        ? this.$emit('updateField', this.form)
        : this.$emit('addField', this.form)
    },
    setSelectedOption (optionID) {
      this.selectedSingleSelectOptionID = optionID
    },
    setSelectedOptionName (value) {
      this.form.singleSelectOptions = this.form.singleSelectOptions.map(
        (option) => {
          if (option.optionId === this.selectedSingleSelectOptionID)
            return {
              ...option,
              optionName: value
            }

          return option
        }
      )
    },
    addNewOption () {
      this.form.singleSelectOptions.push({
        optionId: `tempID_${Date.now()}`,
        optionName: `Option ${this.form.singleSelectOptions.length + 1}`,
        color: null
      })
    },
    deleteOption (optionID) {
      if (optionID === this.selectedSingleSelectOptionID)
        this.selectedSingleSelectOptionID = null

      this.form.singleSelectOptions = this.form.singleSelectOptions.filter(
        (selectOption) => selectOption.optionId !== optionID
      )
    },
    onFieldTypeChange ({ value }) {
      if (!this.isEdit && value) {
        if (value === 'singleSelect') this.form.singleSelectOptions = []
        else if (value === 'multiSelect') this.form.multiSelectOptions = []
      }
    },
    updateOptionColor (option, color) {
      this.form.singleSelectOptions.forEach((selectOption) => {
        if (selectOption.optionId === option.optionId)
          selectOption.color = color
      })
    },
    setMultiSelectedOptionName (value) {
      this.form.multiSelectOptions = this.form.multiSelectOptions.map(
        (option) => {
          if (option.optionId === this.selectedSingleSelectOptionID)
            return {
              ...option,
              optionName: value
            }

          return option
        }
      )
    },
    addNewMultiSelectOption () {
      this.form.multiSelectOptions.push({
        optionId: `tempID_${Date.now()}`,
        optionName: `Option ${this.form.multiSelectOptions.length + 1}`,
        color: null
      })
    },
    updateMultiSelectOptionColor (option, color) {
      this.form.multiSelectOptions.forEach((selectOption) => {
        if (selectOption.optionId === option.optionId)
          selectOption.color = color
      })
    },
    deleteMultiSelectOption (optionID) {
      if (optionID === this.selectedSingleSelectOptionID)
        this.selectedSingleSelectOptionID = null

      this.form.multiSelectOptions = this.form.multiSelectOptions.filter(
        (selectOption) => selectOption.optionId !== optionID
      )
    },
    toggleRollUpFilter () {
      if(this.form.rollUpMetaData.filter) {
        this.form.rollUpMetaData.filter = null
      } else {
        this.form.rollUpMetaData.filter = {}
      }
    },
    validateRollUpFilter() {
      if(this.isRollUp) {
        if(this.form.rollUpMetaData.filter) {
          if(this.$refs.rollUpFieldFilter) {
            return this.$refs.rollUpFieldFilter.isValid()
          }
        }
      }
      return true;
    },
    getRollUpFilterData () {
      if(this.isRollUp) {
        if(this.form.rollUpMetaData.filter) {
          if(this.$refs.rollUpFieldFilter) {
            const filter = this.$refs.rollUpFieldFilter.filterJson
            return Object.keys(filter).length ? filter : null
          }
        }
      }
      return null;
    },
    validateFieldFormula() {
      if(this.isFormulaField) {
        if(this.$refs.fieldFormulaCalculator) {
          return this.$refs.fieldFormulaCalculator.isValid()
        }
      }
      return true;
    },
    getFieldFormula () {
      if(this.isFormulaField) {
        if(this.$refs.fieldFormulaCalculator) {
          const formula = this.$refs.fieldFormulaCalculator.formula
          return Object.keys(formula).length ? formula : null
        }
      }
      return null;
    },
    generateTextColor(color) {
      return generateTextColor(color);
    },
    async setRollUpTargets () {
      if(!this.submenuId) {
        this.rollUpTargetsList = []
        console.error('Invalid Sub menu Id')
        return
      };
      try {
        const res = await this.$store.dispatch('menuV2/getRollupPossibleTargets', {
          submenuId: this.submenuId
        })
        this.rollUpTargetsList = (((res || {}).data || {}).payload || {}).targets || []
      } catch (e) {
        console.error(e)
      } finally {
        return
      }
    },
    initDeletePrompt (id, optionType = 'singleSelect') {
      this.deletePrompt.isActive = true
      this.deletePrompt.selectedItemID = id
      this.deletePrompt.optionType = optionType
    },
    deleteRecord () {
      this.deletePrompt.optionType &&
      this.deletePrompt.optionType === 'singleSelect'
        ? this.deleteOption(this.deletePrompt.selectedItemID)
        : this.deleteMultiSelectOption(this.deletePrompt.selectedItemID)
      this.closeDeletePrompt()
    },
    closeDeletePrompt () {
      this.deletePrompt.isActive = false
      this.deletePrompt.optionType = null
      this.deletePrompt.selectedItemID = null
    },
    onLevelChange (value) {
      if (isArray(this.form.level) && this.form.level.length > 1) {
        this.form.level = this.form.level.filter((level) => level === value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog {
  ::v-deep .p-dialog-content {
    border-bottom: 1px solid #0002;
    overflow-y: visible;
    max-height: 90vh;
    min-height: 50vh;
    overflow-x: auto;
    &::-webkit-scrollbar-thumb:horizontal {
      /*The style of the horizontal scrollbar*/
      width: 4px;
      background-color: #cccccc;
      -webkit-border-radius: 6px;
    }
    &::-webkit-scrollbar-track-piece {
      background-color: #fff; /*The background color of the scrollbar*/
      -webkit-border-radius: 0; /*Fillet width of the scrollbar*/
    }
    &::-webkit-scrollbar {
      width: 10px; /*the width of the scrollbar*/
      height: 8px; /*the height of the scroll bar*/
    }
    &::-webkit-scrollbar-thumb:vertical {
      /*The style of the vertical scrollbar*/
      height: 50px;
      background-color: #999;
      -webkit-border-radius: 4px;
      outline: 2px solid #fff;
      outline-offset: -2px;
      border: 2px solid #fff;
    }
    &::-webkit-scrollbar-thumb:hover {
      /*The hover style of the scroll bar*/
      height: 50px;
      background-color: #9f9f9f;
      -webkit-border-radius: 4px;
    }
  }

  .option-name-input {
    ::v-deep .vs-input--input.normal {
      padding: 0.4rem !important;
    }
  }

  .border-gray {
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  .height-200px {
    height: 200px;
  }
}

.con-vs-dropdown--menu {
  z-index: 100001;
}

.con-vs-dialog {
  // z-index: 100002;
  z-index: 111111 !important;
}

// Utility Classes
.color-list {
  max-height: 120px;
  max-width: 240px;
  width: 100%;
  overflow-x: auto;
}

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
