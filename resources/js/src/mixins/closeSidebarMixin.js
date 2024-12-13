import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('auth', ['user'])
  },

  watch: {
    user (user) {
      if (!user) {
        this.closeSidebar()
      }
    }
  }
}
