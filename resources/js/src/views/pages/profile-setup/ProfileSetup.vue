<!-- =========================================================================================
    File Name: Register.vue
    Description: Register Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div
      class="flex w-full vx-row no-gutter items-center justify-center bg-light-blue"
      style="height: 100vh"
    >
        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
            <vx-card>
<!--                <div slot="no-body" class="full-page-bg-color">-->
                <div slot="no-body" class="">

                  <div class="pt-4 text-center">
                    <Logo class="mx-auto w-16"/>
                  </div>

                    <div class="vx-row no-gutter">
<!--                        <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">-->
<!--                            <img src="@assets/images/pages/register.jpg" alt="register" class="mx-auto">-->
<!--                        </div>-->
                        <div class="vx-col sm:w-full md:w-full  mx-auto self-center  d-theme-dark-bg">
                            <div class="px-8 pt-8 register-tabs-container">
<!--                                <div class="vx-card__title mb-4">-->
<!--                                    <h4 class="mb-4">Create Account</h4>-->
<!--                                    <p>Fill the below form to create a new account.</p>-->
<!--                                </div>-->
                                <profile-setup-component></profile-setup-component>
                            </div>
                        </div>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script>
import Logo from '@/layouts/components/Logo'
import ProfileSetupComponent from './ProfileSetupComponent.vue'
// import RegisterFirebase from './RegisterFirebase.vue'
// import RegisterAuth0 from './RegisterAuth0.vue'

export default {
  components: {
    Logo,
    ProfileSetupComponent
    // RegisterFirebase,
    // RegisterAuth0
  }
}
</script>

<style lang="scss">
.register-tabs-container {
  min-height: 517px;

  .con-tab {
    padding-bottom: 23px;
  }
}
</style>
