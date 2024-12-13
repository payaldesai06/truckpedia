<template>
  <Dialog
    :visible="true"
    :closable="false"
    :modal="true"
    position="top"
    :style="{ width: '40vw' }"
  >
    <template #header>
      <div class="w-full flex items-center justify-end">
        <vs-icon
          class="cursor-pointer"
          icon="close"
          size="small"
          @click="$emit('close')"
        />
      </div>
    </template>

    <div>
      <Listbox
        v-model="selectedView"
        :options="views"
        :filter="false"
        optionLabel="title"
        listStyle="max-height:250px"
        style="width: 100%"
        filterPlaceholder="Search"
      >
        <template #option="slotProps">
          <div class="flex items-center">
            <vs-icon :icon="slotProps.option.icon" />
            <div class="ml-2">{{ slotProps.option.title }}</div>
          </div>
        </template>
      </Listbox>
    </div>

    <template #footer>
      <div class="flex items-center justify-end">
        <vs-button color="primary" @click="onSubmit">Add View</vs-button>
      </div>
    </template>
  </Dialog>
</template>

<script>
export default {
  name: 'ViewPrompt',
  components: {
    Listbox: () => import('primevue/listbox')
  },
  props: {},
  computed: {},
  data () {
    return {
      views: [
        {
          id: 1,
          icon: 'view_stream',
          title: 'Table',
          name: 'table'
        },
        {
          id: 2,
          icon: 'format_list_bulleted',
          title: 'List',
          name: 'list'
        },
        {
          id: 3,
          icon: 'dashboard',
          title: 'Board',
          name: 'board'
        },
        {
          id: 4,
          icon: 'assessment',
          title: 'Gantt',
          name: 'gantt'
        }
      ],
      selectedView: null
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {},
    onSubmit () {
      this.$emit('submit', this.selectedView)
    }
  }
}
</script>

<style lang="scss" scoped></style>
