<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <footer class="the-footer flex-wrap justify-between" :class="classes">
    <p>
      <span>COPYRIGHT &copy;</span>
      <span>{{ currentYear }} </span>
      <a :href="appURL" target="_blank" rel="nofollow">{{ appName }}</a>
      <span class="hidden sm:inline-block">, All rights Reserved</span>
    </p>
    <!-- <span class="md:flex hidden items-center">
            <span>Hand-crafted & Made with</span>
            <feather-icon icon="HeartIcon" svgClasses="stroke-current text-danger w-6 h-6" class="ml-2"/>
        </span> -->
  </footer>
</template>

<script>
import config from '@/config/constants'

export default {
  name: 'the-footer',

  props: {
    classes: {
      type: String
    }
  },

  data () {
    return {
      appName: config.appName,
      appURL: config.appURL
    }
  },

  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
}
</script>
