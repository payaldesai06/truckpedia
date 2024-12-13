<template>
  <img :src="logo" class="fill-current text-primary" alt="logo"/>
</template>

<script>
import truckpediaLogo from '@assets/images/logo/truckpedia-intial-logo.svg'

export default {
  name: 'Logo',

  data () {
    return {
      logo: truckpediaLogo
    }
  }
}
</script>
