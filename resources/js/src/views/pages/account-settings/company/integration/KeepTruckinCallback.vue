<template>
  <div class="vx-row">
    <div class="vx-col w-full mb-8">Finalizing Motive Connection...</div>
  </div>
</template>

<script>
export default {
  name: 'KeepTruckinIntegration',

  created() {
    // var currentUrl = window.location.pathname
    this.pass_keep_truckin_callback(this.$route.query);
  },

  methods: {
    async pass_keep_truckin_callback(query) {
      try {
        await this.$store
          .dispatch('keepTruckin/processKeepTruckinResponse', query)
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
