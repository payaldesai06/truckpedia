<template>
  <div>
    <div class="mt-8">
      <label class="text-xs">
        Email
        <field-required-sign />
      </label>

      <vs-input
        v-validate="'required|email|min:3'"
        data-vv-validate-on="blur"
        name="email"
        icon-no-border
        icon="icon icon-user"
        icon-pack="feather"
        v-model="email"
        class="w-full"
      />
      <span class="text-danger text-sm">{{ errors.first('email') }}</span>
    </div>

    <div class="mt-4">
      <label class="text-xs">
        Password
        <field-required-sign />
      </label>

      <vs-input
        data-vv-validate-on="blur"
        v-validate="'required|min:6'"
        type="password"
        name="password"
        icon-no-border
        icon="icon icon-lock"
        icon-pack="feather"
        v-model="password"
        class="w-full"
      />
      <span class="text-danger text-sm">{{ errors.first('password') }}</span>
    </div>

    <div class="flex flex-wrap justify-between my-5">
      <vs-checkbox v-model="remember_me" class="mb-3">Remember Me</vs-checkbox>
      <router-link to="/forgot-password">Forgot Password?</router-link>
    </div>

    <div class="flex flex-wrap justify-between mb-3">
      <vs-button type="border" to="/register">Register</vs-button>
      <vs-button @click="loginJWT" :disabled="!validateForm">Login</vs-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import config from '@/config/constants';

export default {
  data() {
    return {
      email: '',
      password: '',
      remember_me: false,
    };
  },

  mounted() {
    this.email = localStorage.getItem('rememberLoginEmail');
    this.loginWithAccessToken();
  },

  computed: {
    ...mapGetters('auth', [
      'isBusinessProfileSetup',
      'userRole',
      'user',
      'companyFeatureAccess',
      'isUserBrokerOrShipper',
    ]),

    validateForm() {
      return !this.errors.any() && this.email !== '' && this.password !== '';
    },
  },

  methods: {
    loginWithAccessToken() {
      if (this.$route.query.access_token) {
        this.$vs.loading();
        const { access_token, otherCompanyId, type } = this.$route.query;
        this.token = access_token.replaceAll("'", '');
        this.$store.commit('auth/SET_BEARER', this.token);
        this.$store
          .dispatch('auth/getLoggedInUserProfile')
          .then(() => {
            localStorage.setItem('access_token', this.token);

            this.$vs.notify({
              title: 'Welcome back.',
              text: 'You logged in successfully.',
              color: 'success',
            });

            if (otherCompanyId && type) {
              this.$router.push({
                name: 'chat',
                query: { otherCompanyId, type },
              });
            } else {
              this.$router.push({ name: 'home' }).catch(() => true);
            }
          })
          .catch((error) => {
            this.$vs.notify({
              title: 'Auth failed',
              text: error.message,
              color: 'danger',
            });
          })
          .finally(() => {
            this.$vs.loading.close();
          });
      }
    },
    loginJWT() {
      this.$vs.loading();

      const userdata = {
        email: this.email,
        password: this.password,
        remember_me: this.remember_me,
      };

      this.$store
        .dispatch('auth/loginJWT', userdata)
        .then(() => {
          const { source, id, i, scid, s, token, t } = this.$route.query;
          if (source === 'viaCarrierViewQuoteRequestLink') {
            if (id && scid && token) {
              this.navigateToViewQuoteRequests('CarrierViewQuoteRequests', {
                id,
                scid,
                token,
              });
            } else if (i && s && t) {
              this.navigateToViewQuoteRequests(
                'CarrierViewQuoteRequestsViaShortenLink',
                { i, s, t }
              );
            }
          } else {
            //  userRole ['super_admin', 'admin', 'dispatcher', 'warehouse_operator', 'tag_operator']
            if (this.isBusinessProfileSetup) {
              // TODO: comment out this code when you want to directed to dispatch when role is broker
              // if(this.user.admin_company_detail_id.companyType === "broker"){
              //    this.$router.push({ name: "dispatch" })
              //  }
              // TODO: shipper/broker's admin is sa or br, so they go to dispatch in default.
              if (this.companyFeatureAccess.includes('noTms')) {
                if (this.companyFeatureAccess.includes('crm')) {
                  this.$router.push({ name: 'marketing-crm' });
                } else if (this.companyFeatureAccess.includes('marketing')) {
                  this.$router.push({ name: 'marketing-campaigns' });
                } else {
                  this.$router.push({ name: 'customers' });
                }
              } else if (this.isUserBrokerOrShipper) {
                this.$router.push({ name: 'dispatch' });
              } else if (
                this.userRole === 'admin' ||
                this.userRole === 'super_admin'
              ) {
                if (
                  this.user.admin_company_detail_id ===
                  config.hidefunctionalitiesForSpecificCompanyIds
                ) {
                  this.$router.push({ name: 'Accounting' });
                } else {
                  this.$router.push({ name: 'home' });
                }
              } else if (this.userRole === 'maintenance') {
                this.$router.push({ name: 'maintenance-v2' });
              } else {
                if (
                  this.user.admin_company_detail_id ===
                  config.hidefunctionalitiesForSpecificCompanyIds
                ) {
                  this.$router.push({ name: 'Accounting' });
                } else {
                  this.$router.push({ name: 'dispatch' });
                }
              }
            } else {
              this.$router.push({ name: 'setup-profile' });
            }
          }

          if (this.remember_me) {
            localStorage.setItem('rememberLoginEmail', this.email);
          }

          this.$vs.notify({
            title: 'Welcome back.',
            text: 'You logged in successfully.',
            color: 'success',
          });
        })
        .catch((error) => {
          this.$vs.notify({
            title: 'Auth failed',
            text: error.message,
            color: 'danger',
          });
        })
        .finally(() => {
          this.$vs.loading.close();
        });
    },

    navigateToViewQuoteRequests(routeName, queryParams) {
      this.$router.push({
        name: routeName,
        query: queryParams,
      });
    },
  },
};
</script>
