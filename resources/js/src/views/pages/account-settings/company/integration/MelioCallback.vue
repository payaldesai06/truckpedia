<template>
  <div class="vx-row">
    <div class="vx-col w-full mb-8">Finalizing Melio Connection...</div>
  </div>
</template>

<script>
import globalMixins from '@/mixins/globalMixins';
import { getApiErrorMsg } from '@/helpers/helper';
export default {
  name: 'MelioIntegration',

  created() {
    this.passMelioCallback(this.$route.query);
  },

  mixins: [globalMixins],

  methods: {
    async passMelioCallback(query) {
      try {
        await this.$store.dispatch('melio/onboardingStatus', query);
        this.$router.push({ name: 'account-setting' });
      } catch (error) {
        this.showErrorMessage(getApiErrorMsg(error));
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
