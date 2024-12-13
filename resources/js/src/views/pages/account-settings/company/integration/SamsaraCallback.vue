<template>
  <div class="vx-row">
    <div class="vx-col w-full mb-8">Finalizing Samsara Connection...</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
//<vs-button type="filled" @click="disconnect">Disconnect</vs-button>
export default {
  name: 'SamsaraIntegration',

  created() {
    var currentUrl = window.location.pathname;
    this.pass_samsara_callback(this.$route.query);
  },

  methods: {
    async pass_samsara_callback(query) {
      try {
        await this.$store
          .dispatch('samsara/processSamsaraResponse', query)
          .then(
            (data) => {
              window.location.href = data;
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
