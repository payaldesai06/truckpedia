export default {
  methods: {
    showErrorMessage(message, time = 8000) {
      this.$vs.notify({
        time,
        color: 'danger',
        title: 'Error',
        text: message,
      });
    },
    showSuccessMessage(message, time = 5000) {
      this.$vs.notify({
        time,
        color: 'primary',
        title: 'Success',
        text: message,
      });
    },
  },
};
