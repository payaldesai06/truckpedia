<template>
  <div class="vx-row">
    <div class="vx-col w-full mb-8">
      <h2 class="text-2xl opacity-75">User Profile</h2>
    </div>

    <div class="vx-col w-full">
      <div class="flex items-center flex-col sm:flex-row">
        <vs-avatar :src="profile_image"
                   size="64px"
                   class="mb-4 sm:mb-0 sm:mr-4"/>

        <div>
          <input type="file" class="hidden"
                 ref="update_profile_image_input"
                 @change="update_profile_image"
                 accept="image/*">

          <vs-button type="border"
                     class="mr-4"
                     @click="$refs.update_profile_image_input.click()">
            Upload Photo
          </vs-button>

          <vs-button type="flat" color="danger"
                     @click="reset_profile_image">Remove
          </vs-button>
        </div>
      </div>
    </div>

    <div class="mt-8 vx-col w-full space-y-4">
      <div class="w-full">
        <label class="text-xs">First Name <field-required-sign/></label>

        <vs-input v-model="first_name"
                  class="w-full"/>
      </div>

      <div class="w-full">
        <label class="text-xs">Last Name <field-required-sign/></label>

        <vs-input v-model="last_name"
                  class="w-full"/>
      </div>
    </div>

    <div class="mt-8 vx-col w-full space-x-2">
      <vs-button type="filled" @click="submit">Save Changes</vs-button>
      <vs-button type="border" color="danger" :to="{name: 'home'}">Cancel</vs-button>
    </div>
  </div>
</template>

<script>
// import image from '@assets/images/portrait/small/avatar-s-15.jpg'
import { mapGetters } from 'vuex'
import config from '@/config/constants'
import { resizeImage } from '@/helpers/helper'

export default {
  name: 'UserProfile',

  data () {
    return {
      userRoles: config.roles,
      first_name: '',
      last_name: '',
      profile_image_file: '',
      profile_image: '',
      profile_image_name: ''
    }
  },

  created () {
    if (this.userRole == this.userRoles.super_admin) {
      const {first_name, last_name, profile_image, profile_image_name} = this.getSuperAdminDetail()

      this.first_name = first_name
      this.last_name = last_name
      this.profile_image = profile_image
      this.profile_image_name = profile_image_name
    }

    if (this.userRole == this.userRoles.admin) {
      const {first_name, last_name, profile_image, profile_image_name} = this.getAdminDetail()

      this.first_name = first_name
      this.last_name = last_name
      this.profile_image = profile_image
      this.profile_image_name = profile_image_name
    }

    if (this.userRole == this.userRoles.dispatcher) {
      const {first_name, last_name, profile_image, profile_image_name} = this.getDispatcherDetail()

      this.first_name = first_name
      this.last_name = last_name
      this.profile_image = profile_image
      this.profile_image_name = profile_image_name
    }
  },

  computed: {
    ...mapGetters('auth', {
      authUser: 'user',
      userRole: 'userRole'
    })
  },

  methods: {
    reset_profile_image () {
      this.profile_image_file = ''
      this.profile_image = ''
      this.profile_image_name = ''
      this.$refs.update_profile_image_input.value = ''
    },

    update_profile_image (input) {
      if (input.target.files && input.target.files[0]) {
        const reader = new FileReader()
        reader.onload = e => {
          this.profile_image = e.target.result
        }
        reader.readAsDataURL(input.target.files[0])
        resizeImage(input.target.files[0], (result) => {
          this.profile_image_file = result
        })
      }
    },

    async submit () {
      this.$vs.loading()

      const payload = {
        first_name: this.first_name,
        last_name: this.last_name,
        profile_image: this.profile_image_name
      }
      // console.log(payload)
      try {
        if (this.profile_image_file) {
          const extension = this.profile_image_file.name.split(".").pop();
          const {
            data: {
              payload: { storageFileName, url },
            },
          } = await this.$store.dispatch("company-user/getUserProfileImagePreSignedS3Url", {
            userId: this.authUser.user_id,
            extension,
            type: "profile",
          })
          
          if (storageFileName && url) {
            const { status } = await this.$store.dispatch("uploadFileToS3", {
              url,
              file: this.profile_image_file,
            });
            if (status === 200) {
              payload.profile_image = storageFileName;
            }
          }
          this.profile_image_file = ''
        }

        await this.$store.dispatch('auth/updateAdminProfile', payload)

        this.$vs.notify({
          title: 'Profile Updated',
          text: 'Profile updated successfully.',
          color: 'primary'
        })
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        })
      } finally {
        this.$vs.loading.close()
      }
    },

    /*
     * Get User Data
     */
    getSuperAdminDetail () {
      return {
        first_name: this.authUser.super_admin_details.first_name,
        last_name: this.authUser.super_admin_details.last_name,
        profile_image: this.authUser.super_admin_details.profile_image_url,
        profile_image_name: this.authUser.super_admin_details.profile_image
      }
    },

    getAdminDetail () {
      return {
        first_name: this.authUser.admin_details.first_name,
        last_name: this.authUser.admin_details.last_name,
        profile_image: this.authUser.admin_details.profile_image_url,
        profile_image_name: this.authUser.admin_details.profile_image
      }
    },

    getDispatcherDetail () {
      return {
        first_name: this.authUser.dispacher_details.first_name,
        last_name: this.authUser.dispacher_details.last_name,
        profile_image: this.authUser.dispacher_details.profile_image,
        profile_image_name: this.authUser.dispacher_details.image
      }
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  img {
    @apply object-cover
  }
}
</style>
