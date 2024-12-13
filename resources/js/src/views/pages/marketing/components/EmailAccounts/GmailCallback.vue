<template>
  <div class="vx-row">
    <div class="vx-col w-full mb-8">Finalizing Gmail Connection...</div>
  </div>
</template>

<script>
export default {
  name: 'GmailCallback',

  created() {
    this.pass_gmail_callback(this.$route.query);
  },

  methods: {
    async pass_gmail_callback(query) {
      try {
        const { status } = await this.$store.dispatch(
          'marketing/gmailAuthCallback',
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
