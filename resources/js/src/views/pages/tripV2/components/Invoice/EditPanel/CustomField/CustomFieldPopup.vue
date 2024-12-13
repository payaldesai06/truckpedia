<template>
  <vs-prompt
    title="Add New Custom payment"
    accept-text="Save"
    @accept="acceptCustomFieldPopupPrompt"
    @cancel="closeCustomFieldPopupPrompt"
    @close="closeCustomFieldPopupPrompt"
    :is-valid="validateForm"
    :active.sync="isOpen"
    style="z-index: 52015"
  >
    <div class="con-exemple-prompt space-y-4">
      <vs-input
        v-validate="'required'"
        name="name"
        label="Name"
        v-model="name"
        class="w-full"
      />

      <vs-input
        label="Description"
        name="description"
        v-model="description"
        class="w-full"
      />
      <div>
        <Checkbox v-model="isPercentageOf" value="subtotal" />
        <label>Percentage of Subtotal</label>
      </div>
    
    </div>
  </vs-prompt>
</template>
<!-- eslint-disable multiline-ternary -->
<script>

export default {
  name: "CustomFieldPopup",
  props: {
    active: {
      required: true,
      default: false,
    },
  },

  data() {
    return {
      isOpen: this.active,
      name: "",
      description: "",
      isPercentageOf: [],
    };
  },

  computed: {
    validateForm() {
      return !this.errors.any() && this.name !== "";
    },
  },

  watch: {
    active(newVal) {
      this.isOpen = newVal;
    },
  },

  methods: {
    initialVal() {
      this.name = "";
      this.description = "";
      this.isPercentageOf = [];
    },

    closeCustomFieldPopupPrompt() {
      // this.active = false

      this.initialVal();

      this.$emit("close");
    },

    acceptCustomFieldPopupPrompt() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$vs.loading();

          const payload = {
            name: this.name,
            description: this.description,
            percentageOf:
              this.isPercentageOf && this.isPercentageOf[0]
                ? this.isPercentageOf[0]
                : null,
          };

          this.$store
            .dispatch("invoiceV2/createNewCustomFieldPayment", payload)
            .then(({ payload }) => {
              // add fees in local array
              this.$emit("customFieldPayment::added", payload);

              this.closeCustomFieldPopupPrompt();
              this.$vs.notify({
                color: "primary",
                title: "Custom Field Payment",
                text: "Custom field payment successfully.",
              });
            })
            .catch((error) => {
              console.log(error);
              this.$vs.notify({
                title: "Error",
                text: error.message,
                color: "danger",
              });
            })
            .finally(() => this.$vs.loading.close());
        }
      });
    },
  },
};
</script>

<style scoped></style>
