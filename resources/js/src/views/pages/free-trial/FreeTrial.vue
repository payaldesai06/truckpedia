<template>
  <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center">
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">

      <vx-card>
        <div slot="no-body" class="">
          <div class="px-8 bg-primary py-4">
            <h2 class="text-white">Welcome to Truckpedia</h2>
          </div>

          <div class="px-8 pt-8 pb-2 vx-row no-gutter">
            <div class="vx-col sm:w-full md:w-full mx-auto self-center d-theme-dark-bg">
              <div class="">
                <div class="vx-card__title mb-4">
                  <!--                  <h4 class="mb-4">Create Account</h4>-->
                  <p class="text-xl font-medium">
                    <strong class="text-success">Congratulations,</strong> you're in!
                  </p>
                </div>
              </div>
            </div>

            <div class="vx-col sm:w-full md:w-full mx-auto self-center d-theme-dark-bg">
              <div class="">
                <div class="vx-card__title mb-4">
                  <h4 class="mb-4">Truckpedia Features:</h4>
                </div>

                <ul class="pl-4 mt-4 space-y-2">
                  <li class="flex items-center" v-for="feature in features" :key="feature">
                    <!--                    <feather-icon icon="CheckCircleIcon"-->
                    <!--                                  svgClasses="w-5 h-5 mr-3 stroke-current"/>-->
                    <span class="flex items-center text-primary mr-3">
                      <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                           stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    </span>
                    {{ feature }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <template slot="footer">
          <vs-divider/>

          <div class="flex justify-end">
            <vs-button class="mt-4" type="filled" color="primary" @click="submit">Get Started</vs-button>
          </div>
        </template>
      </vx-card>

    </div>
  </div>
</template>

<script>
import config from '@/config/constants'

export default {
  name: 'FreeTrial',

  data () {
    return {
      trialDays: config.trialDays,
      features: [
        'AI Dispatch',
        'Calendar Optimizer',
        'Smart Sheet',
        'Mobile Driver App',
        'Integration',
        'Billing Automation',
        'Data Analytics',
        'Digital Documents',
        'Trucking Maintenance',
        'And More.'
      ]
    }
  },

  methods: {
    submit () {
      const referralCode = this.$route.query.referralCode;
      this.$router.push({name: 'setup-profile', query: { referralCode }})
        .catch(() => {
        })
    }
  }
}
</script>

<style scoped>

</style>
