<template>
  <div>
    <Dialog
      class="dialog"
      :visible="showVideoPlayer"
      :closable="false"
      :modal="true"
      :breakpoints="{ '960px': '50vw', '640px': '80vw' }"
      :style="{ width: '50vw' }"
    >
      <!-- Header Section -->
      <template #header>
        <div class="w-full flex items-center justify-end">
          <vs-icon
            class="cursor-pointer ml-2"
            icon="close"
            size="small"
            @click="closeVideoPlayer"
          />
        </div>
      </template>
      <template v-if="video.url">
        <div class="w-full mt-4">
          <video :src="video.url" class="w-full h-full" controls autoplay />
        </div>
      </template>
    </Dialog>
  </div>
</template>
<script>
export default {
  name: 'VideoPlayer',
  props: {
    showVideoPlayer: {
      default: false,
      type: Boolean,
    },
    video: {
      default: {},
      type: Object,
    },
  },
  watch: {
    video(val) {
      this.options.video = val;
    },
  },
  data() {
    return {
      options: {
        autoplay: true,
      },
    };
  },
  methods: {
    closeVideoPlayer() {
      this.$emit('closePlayer');
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep {
  video {
    aspect-ratio: 16/9;
  }
}
</style>
