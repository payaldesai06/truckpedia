<template>
  <div class="vx-row">
    <div class="vx-col w-full mb-8">Finalizing Outlook Connection...</div>
  </div>
</template>

<script>
export default {
  name: 'OutlookCallback',

  created() {
    this.passOutlookCallback(this.$route.query);
  },

  methods: {
    async passOutlookCallback(query) {
      try {
        const { status } = await this.$store.dispatch(
          'marketing/outlookAuthCallback',
          query
        );
        if (status === 200) {
          window.close();
        }
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
