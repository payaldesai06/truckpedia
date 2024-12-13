<template>
  <div class="pc-miller-popup">
    <vs-input
      type="text"
      label="API Key"
      class="w-full mb-5"
      v-model="pcMillerApiKey"
    />
    <label class="mt-10 text-sm">Data Version</label>
    <multiselect
      v-model="pcMilerVersion"
      placeholder=""
      tag-position="bottom"
      :allow-empty="false"
      :options="pcMilerVersionOptions"
      :show-labels="false"
      openDirection="bottom"
      :maxHeight="300"
    >
    </multiselect>
    <div class="mt-4">
      <vs-button
        color="primary"
        type="filled"
        @click.prevent="submitPcmilerApiKey"
        autocomplete="off"
      >
        Submit
      </vs-button>
      <vs-button
        color="danger"
        class="ml-1"
        type="filled"
        @click="deletePcmilerApiKey"
        autocomplete="off"
      >
        Delete
      </vs-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      carrierCode: "",
      pcMillerApiKey: "",
      pcMilerVersionOptions: [
        "Current",
        "PCM36",
        "PCM35",
        "PCM34",
        "PCM33",
        "PCM32",
        "PCM31",
        "PCM30",
        "PCM29",
        "PCM28",
        "PCM27",
        "PCM26",
        "PCM25",
        "PCM24",
      ],
      pcMilerVersion: "Current",
    };
  },


  created() {
    if (!this.pcmiler.getKeyApiCalled) {
      this.getPcmilerApiKey();
    } else {
      this.pcMillerApiKey = this.pcmiler.apiKey;
      this.pcMilerVersion = this.pcmiler.dataVersion;
    }
  },

  computed: {
    ...mapGetters("pcmiler", ["pcmiler"]),
  },

  methods: {
    deletePcmilerApiKey() {
      this.pcMillerApiKey = null;
      this.pcMilerVersion = "Current";
      this.submitPcmilerApiKey();
    },

    getPcmilerApiKey() {
      this.$store
        .dispatch("pcmiler/getPcmiler")
        .then((data) => {
          this.pcMillerApiKey = data.payload.apiKey;
          this.dataVersion = data.payload.dataVersion;
        })
        .catch((error) => {
          this.$vs.notify({
            color: "danger",
            title: "Error",
            text: error.response.data.message,
          });
        });
    },

    submitPcmilerApiKey() {
      const payload = {
        apiKey: this.pcMillerApiKey != "" ? this.pcMillerApiKey : null,
        dataVersion: this.pcMilerVersion,
      };
      this.$store
        .dispatch("pcmiler/postPcmiler", payload)
        .then(() => {
          this.$vs.notify({
            color: "success",
            title: "Successfully",
            text: "PC MILER api key updated successfully",
          });
          if (payload.apiKey) {
            this.$emit("pcmStatus", true);
          } else {
            this.$emit("pcmStatus", false);
          }
        })
        .catch((error) => {
          this.$vs.notify({
            color: "danger",
            title: "Error",
            text: error.response.data.message,
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.pc-miller-popup {
  ::v-deep .multiselect__content-wrapper {
    position: inherit;
  }
}
</style>
