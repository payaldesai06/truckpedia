<template>
  <vs-prompt
    title="New Admin User"
    accept-text="Save"
    @accept="acceptAddAdminPrompt"
    @cancel="closeAddAdminPrompt"
    @close="closeAddAdminPrompt"
    :is-valid="validateForm"
    :active.sync="isOpen"
    style="z-index: 52015"
  >
    <div class="con-exemple-prompt space-y-4">
      <vs-input
        v-validate="{
          required: true,
          regex: /^[a-zA-Z0-9._%+-]+@(truckpedia\.io)$/,
        }"
        label="Email"
        name="email"
        data-vv-name="email"
        v-model="email"
        class="w-full"
        id="addAdminEmailInput"
      />
      <span class="text-danger text-sm">{{ errors.first('email') }}</span>

      <vs-input
        v-validate="'required|min:6|max:255'"
        type="password"
        label="Password"
        name="password"
        data-vv-name="password"
        v-model="password"
        class="mt-4 w-full"
        id="addAdminPasswordInput"
      />
      <span class="text-danger text-sm">{{ errors.first('password') }}</span>

      <vs-input
        v-validate="'required|min:1|max:255'"
        type="text"
        label="First Name"
        name="firstName"
        data-vv-name="firstName"
        v-model="firstName"
        class="mt-4 w-full"
        id="addAdminFirstNameInput"
      />
      <span class="text-danger text-sm">{{ errors.first('firstName') }}</span>

      <vs-input
        v-validate="'required|min:1|max:255'"
        type="text"
        label="Last Name"
        name="lastName"
        data-vv-name="lastName"
        v-model="lastName"
        class="mt-4 w-full"
        id="addAdminLastNameInput"
      />
      <span class="text-danger text-sm">{{ errors.first('lastName') }}</span>
    </div>
  </vs-prompt>
</template>

<script>
import globalMixins from '@/mixins/globalMixins';
import { mapGetters } from 'vuex';

export default {
  name: 'AddAdminPrompt',

  props: {
    active: {
      required: true,
      default: false,
    },
  },

  mixins: [globalMixins],

  data() {
    return {
      isOpen: this.active,
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    };
  },

  computed: {
    ...mapGetters('auth', ['user']),
    validateForm() {
      return (
        !this.errors.any() &&
        this.email !== '' &&
        this.password !== '' &&
        this.firstName !== '' &&
        this.lastName !== ''
      );
    },
  },

  watch: {
    active(newVal) {
      this.isOpen = newVal;
    },
  },

  methods: {
    initialVal() {
      this.email = '';
      this.password = '';
      this.firstName = '';
      this.lastName = '';
    },

    closeAddAdminPrompt() {
      this.initialVal();
      this.$emit('close');
    },

    acceptAddAdminPrompt() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$vs.loading();

          const payload = {
            id: this.$route.params.id,
            email: this.email,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
          };

          this.$store
            .dispatch('admin-company/createUserAsAdmin', payload)
            .then(() => {
              this.showSuccessMessage('New admin user added successfully.');
              this.closeAddAdminPrompt();
            })
            .catch((error) => {
              this.showErrorMessage(error.response.data.message);
              this.closeAddAdminPrompt();
            })
            .finally(() => this.$vs.loading.close());
        }
      });
    },
  },
};
</script>

<style scoped></style>
