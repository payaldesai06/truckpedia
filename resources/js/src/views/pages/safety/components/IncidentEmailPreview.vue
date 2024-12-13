<template>
  <div>
    <div class="flex justify-end">
      <vs-icon
        class="cursor-pointer"
        icon="close"
        size="small"
        @click="$emit('close-preview')"
      />
    </div>

    <div class="vx-col py-2 mt-2 flex flex-col gap-2 rounded border-gray">
      <div class="px-4 flex">
        <p class="font-semibold">Date:</p>
        <p class="ml-2">{{ getLocalDateTime(value.createdAt) }}</p>
      </div>
      <div class="px-4 flex">
        <p class="font-semibold">Type:</p>
        <p class="ml-2">{{ getType(value.type) }}</p>
      </div>
      <div class="px-4 flex">
        <p class="font-semibold">From:</p>
        <p class="ml-2">{{ value.from }}</p>
      </div>
      <div class="px-4 flex">
        <p class="font-semibold">To:</p>
        <p class="ml-2">{{ getEmails(value.to) }}</p>
      </div>
      <div class="px-4 flex">
        <p class="font-semibold">CC:</p>
        <p class="ml-2">{{ getEmails(value.cc) }}</p>
      </div>
      <div class="px-4 flex">
        <p class="font-semibold">BCC:</p>
        <p class="ml-2">{{ getEmails(value.bcc) }}</p>
      </div>
      <div class="px-4 flex">
        <p class="font-semibold">From name:</p>
        <p class="ml-2">{{ value.fromName }}</p>
      </div>
      <div class="px-4 flex">
        <p class="font-semibold">Reply to:</p>
        <p class="ml-2">{{ getEmails(value.replyTo) }}</p>
      </div>
      <div class="px-4 flex">
        <p class="font-semibold">Subject:</p>
        <p class="ml-2">{{ value.subject }}</p>
      </div>
    </div>
    <div class="vx-col mt-4 py-2 rounded border-gray min-h-278">
      <div class="px-4">
        <p v-html="value.content" />
      </div>
    </div>
  </div>
</template>

<script>
import { arrayToCommaSeparatedString } from '@/helpers/helper';

export default {
  name: 'IncidentEmailPreview',
  props: {
    value: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      types: [
        {
          id: 1,
          label: 'Send Out From Truckpedia',
          value: 'sendOutFromEzpapel',
        },
        { id: 2, label: 'Record Only', value: 'recordOnly' },
      ],
    };
  },
  methods: {
    getType(type) {
      return this.types.find((t) => t.value === type).label;
    },
    getLocalDateTime(dateTimeString) {
      const utcDateTimeString = dateTimeString.replace(' ', 'T').concat('Z');
      return this.$dayjs(utcDateTimeString).format('YYYY-MM-DD HH:mm');
    },
    getEmails(emails) {
      return arrayToCommaSeparatedString(emails);
    },
  },
};
</script>

<style lang="scss" scoped>
// Utility classes
.border-gray {
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.min-h-278 {
  min-height: 278px;
}
</style>
