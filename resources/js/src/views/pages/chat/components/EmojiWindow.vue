<template>
  <emoji-picker @emoji="insert" :search="search" class="position-relative">
    <div
      slot="emoji-invoker"
      slot-scope="{ events: { click: clickEvent } }"
      @click.stop="clickEvent"
    >
      <div class="p-1 input-icon-box">
        <feather-icon icon="SmileIcon" style="color: #7c72e9" />
      </div>
    </div>
    <div
      class="emoji-picker"
      slot="emoji-picker"
      slot-scope="{ emojis, insert, display }"
    >
      <div>
        <vs-input v-model="search" placeholder="Search Emoji" class="w-full" />
        <div class="mt-2">
          <div v-for="(emojiGroup, category) in emojis" :key="category">
            <p>{{ category }}</p>
            <div class="mb-2 flex flex-wrap">
              <span
                class="text-2xl p-1 cursor-pointer"
                v-for="(emoji, emojiName) in emojiGroup"
                :key="emojiName"
                @click="insert(emoji)"
                :title="emojiName"
                >{{ emoji }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </emoji-picker>
</template>

<script>
import EmojiPicker from 'vue-emoji-picker';

export default {
  name: 'EmojiWindow',
  components: {
    EmojiPicker,
  },
  data() {
    return {
      search: '',
    };
  },
  methods: {
    insert(emoji) {
      //   this.input += emoji;
      this.$emit('addEmoji', emoji);
    },
  },
};
</script>

<style scoped lang="scss">
.input-icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e4e3fa;
  border-radius: 5px;
}
.emoji-picker {
  position: absolute;
  width: 300px;
  max-height: 300px;
  overflow: auto;
  right: 140px;
  box-shadow: 0px 1px 1px 1px lightgray;
  // top: -278px;
  bottom: 82px;
  background-color: #fff;
  padding: 10px;
}
</style>
