<template>
  <!-- Issues Section -->
  <vx-card class="mt-4">
    <div class="vx-row" v-if="header">
      <div class="vx-col">
        <h4 class="title" v-text="header" />
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col w-full mt-4">
        <DataTable :value="tableValues" responsiveLayout="scroll">
          <Column header="Actions">
            <template #body="{ data: { id } }">
              <vs-icon
                class="cursor-pointer"
                size="small"
                icon="edit"
                @click.stop="$emit('edit', id)"
              />
              <vs-icon
                class="cursor-pointer"
                size="small"
                icon="delete"
                @click.stop="$emit('delete', id)"
              />
            </template>
          </Column>
          <Column
            v-for="({ header, field, action }, index) of tableColumns"
            :key="index"
            :field="field"
            :header="header"
          >
            <template #body="{ data: { [field]: value } }">
              <span v-if="!action" v-text="value" />
              <span v-else v-text="tableAction(action, value)" />
            </template>
          </Column>
          <template #empty><b>No records found</b></template>
          <template #footer>
            Displaying {{ tableValues.length }} records
          </template>
        </DataTable>
      </div>
    </div>
  </vx-card>
</template>

<script>
// Constants
import config from '@/config/constants'

export default {
  name: 'IssueList',
  props: {
    header: {
      type: String,
      default: null
    },
    tableColumns: {
      type: Array,
      default: () => []
    },
    tableValues: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      prioritiesList: config.PRIORITIES_LIST
    }
  },
  methods: {
    tableAction (method, payload) {
      return this[method](payload)
    },
    getPriorityLabel (priority) {
      const priorityItem = this.prioritiesList.find(
        (item) => item.value === priority
      )

      return priorityItem ? priorityItem.label : ''
    },
    trimSeconds (date) {
      // Return yyyy-mm-dd hh:mm
      return date ? date.substring(0, 16) : ''
    },
    trimText (text) {
      if (!text) return ''
      // Return first 20 characters with ellipsis
      if (text.length > 20) return `${text.substring(0, 20)}...`

      return text
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  td {
    min-width: 100px;
  }
}
</style>
