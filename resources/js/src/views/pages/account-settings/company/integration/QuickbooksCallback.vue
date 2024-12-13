<template>
  <div class="vx-row">
    <div class="vx-col w-full mb-8">Finalizing Quickbooks Connection...</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
//<vs-button type="filled" @click="disconnect">Disconnect</vs-button>
export default {
  name: 'QuickbooksIntegration',

  created() {
    var currentUrl = window.location.pathname;
    this.pass_quickbooks_callback(this.$route.query);
  },

  methods: {
    async pass_quickbooks_callback(query) {
      try {
        await this.$store
          .dispatch('quickbooks/processQuickbooksResponse', query)
          .then(
            (data) => {
              window.location.href = data; // https://www.google.com/
            },
            (error) => {
              console.log('Error: ', error);
            }
          );
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  img {
    @apply object-cover;
  }
}
</style>
