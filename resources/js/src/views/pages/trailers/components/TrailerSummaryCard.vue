<template>
  <div
    class="mt-4 border-solid bg-primary-light border-radius-10 border-color-primary flex flex-row items-center justify-center p-4"
  >
    <div
      class="flex flex-row w-full items-center min-height-100 justify-between"
    >
      <section class="flex flex-end">
        <div
          class="flex items-center justify-center bg-primary rounded-full height-70 width-70"
        >
          <!-- <vs-icon icon="rv_hookup" size="40px" /> -->
          <img
            class="w-auto align-middle"
            height="40px"
            :src="customIcons.trailer"
            alt="trailer-icon"
          />
        </div>
        <div class="ml-4 flex items-center justify-center">
          <div>
            <h5 class="font-bold">{{ header }}</h5>
          </div>
        </div>
      </section>
      <div class="d-flex flex-end">
        <vs-button
          v-if="enableSubmit"
          color="primary"
          @click.prevent="$emit('submit')"
        >
          {{ isEdit ? "Update" : "Create" }}
        </vs-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrailerSummaryCard",
  props: {
    header: {
      type: String,
      default: "",
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
    enableSubmit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      customIcons: {
        trailer: require("@assets/images/custom/custom-trailer.svg"),
      },
    };
  },
};
</script>

<style lang="scss" scoped>
// Utilities
.min-height-100 {
  min-height: 100px;
}
.bg-primary-light {
  background-color: #f1f4ff;
}
.border-radius-10 {
  border-radius: 10px !important;
}

.border-color-primary {
  border-color: #aca7f7 !important;
}

.bg-primary {
  background-color: #aca7f7;
}

.height-70 {
  height: 70px;
}

.width-70 {
  width: 70px;
}
</style>
