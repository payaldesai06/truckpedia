<template>
  <div
    class="the-navbar__user-meta flex items-center"
    v-if="activeUserInfo.displayName"
  >
    <!--    <div class="text-right leading-tight hidden sm:block">-->
    <!--      <p class="font-semibold">{{ activeUserInfo.displayName }}</p>-->
    <!--      &lt;!&ndash;      <small>Available</small>&ndash;&gt;-->
    <!--    </div>-->

    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
      <div class="con-img">
        <vs-avatar
          class="ml-0"
          size="24px"
          alt="profile image"
          :src="activeUserInfo.photoURL"
        />
      </div>

      <vs-dropdown-menu class="vx-navbar-dropdown">
        <ul>
          <!--          <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"-->
          <!--              @click="$router.push({name:'account-setting'}).catch(err => {})">-->
          <!--            <feather-icon icon="UserIcon" svgClasses="w-4 h-4"/>-->
          <!--            <span class="ml-2 text-sm">User Profile</span>-->
          <!--          </li>-->

          <!--          <vs-divider class="m-1"/>-->

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="logout"
          >
            <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
            <span class="ml-2 text-sm">Logout</span>
          </li>
        </ul>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import config from '@/config/constants'

export default {
  data () {
    return {
      userRoles: config.roles
    }
  },

  computed: {
    ...mapGetters('auth', ['user']),

    activeUserInfo () {
      return this.getUserFormattedDetail(this.user)
    }
  },

  methods: {
    /*
     * Format data based on user role
     */
    getUserFormattedDetail (user) {
      const userDetails = {
        displayName: 'John Doe',
        photoURL: ''
      }

      if (user) {
        if (this.userRoles.super_admin == user.role) {
          userDetails.displayName = `${user.super_admin_details.first_name} ${user.super_admin_details.last_name}`
          userDetails.photoURL = user.super_admin_details.profile_image_url
        }

        if (this.userRoles.admin == user.role) {
          userDetails.displayName = `${user.admin_details.first_name} ${user.admin_details.last_name}`
          userDetails.photoURL = user.admin_details.profile_image_url
        }

        if (this.userRoles.dispatcher == user.role) {
          userDetails.displayName = `${user.dispacher_details.first_name} ${user.dispacher_details.last_name}`
          userDetails.photoURL = user.dispacher_details.profile_image
        }
      }

      return userDetails
    },

    logout () {
      this.$vs.loading()

      this.$store
        .dispatch('auth/logout')
        .then(() => {
          this.$router.push({ name: 'page-login' })

          this.$vs.notify({
            title: 'Logout.',
            text: 'You logout successfully.',
            color: 'success'
          })
        })
        .catch((error) => console.log(error))
        .finally(() => this.$vs.loading.close())
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .vs-avatar--con-img img {
    @apply object-cover;
  }
}

.vx-navbar-dropdown > ul {
  min-width: 9rem;
}
</style>
