export default {
  data () {
    return {
      rows: 10,
      rowsPerPageOptions: [5, 10, 15],
      eventForServer: null,
      loading: false,
      dynamicSortField: 'name',
      dynamicSortOrder: 1,
      filters: {}
    }
  },

  computed: {
    totalRecords () {
      return this.items.meta ? this.items.meta.total : 0
    }
  },

  methods: {
    onPage (event) {
      this.eventForServer = event
      this.commonApiCall(this.filters)
    },

    onSort (event) {
      this.eventForServer = event
      this.commonApiCall(this.filters)
    },

    onInputFilter () {
      this.commonApiCall(this.filters)
    }
  }
}
