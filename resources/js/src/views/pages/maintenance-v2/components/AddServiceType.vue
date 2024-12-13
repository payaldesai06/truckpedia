<template>
  <vs-prompt
    title="Add New Service Type"
    accept-text="Save"
    @accept="acceptServiceTypePrompt"
    @cancel="closeServiceTypePrompt"
    @close="closeServiceTypePrompt"
    :is-valid="validateForm"
    :active.sync="isOpen"
    style="z-index: 52015"
  >
    <div class="con-exemple-prompt space-y-4">
      <vs-input
        v-validate="'required'"
        label="Service Name"
        name="service_name"
        v-model="name"
        class="w-full"
      />
    </div>
  </vs-prompt>
</template>

<script>
export default {
  name: 'AddNewServiceType',

  props: {
    active: {
      required: true,
      default: false,
    },
  },

  data() {
    return {
      isOpen: this.active,
      name: '',
    };
  },

  computed: {
    validateForm() {
      return !this.errors.any() && this.name !== '';
    },
  },

  watch: {
    active(val) {
      this.isOpen = val;
      if (val){
        this.resetValue();
      }
    },
  },

  methods: {
    resetValue(){
      this.name = '';
    },
    closeServiceTypePrompt() {
      this.$emit('close');
      this.$validator.reset();
    },

    async acceptServiceTypePrompt() {
      try {
        this.$vs.loading();
        const payload = {
          serviceType: this.name,
        };
        const { data } = await this.$store.dispatch(
          'maintenanceV2/addServiceType',
          payload
        );
        this.$emit('serviceAdded', data.payload);
        this.closeServiceTypePrompt();
        this.$vs.notify({
          color: 'primary',
          title: 'Success',
          text: 'Service type added successfully.',
        });
      } catch (error) {
        this.$vs.notify({
          title: 'Error',
          text: error.response.data.message,
          color: 'danger',
        });
      } finally {
        this.$vs.loading.close();
      }
    },
  },
};
</script>

<style scoped></style>
