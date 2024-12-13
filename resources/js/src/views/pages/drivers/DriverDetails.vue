<template>
  <div class="dashboard">
    <!-- Header Section -->
    <vx-card class="dashboard-header">
      <div class="vx-row">
        <div class="vx-col flex-wrap flex justify-between w-full">
          <div class="flex">
            <h3 class="self-center">Drivers</h3>
            <!-- <div class="flex ml-4">
              <vs-button color="primary" type="border" icon="arrow_back_ios" />
              <vs-input
                class="w-full mx-2"
                :value="'##8920 - WANDER BATISTA'"
              />
              <vs-button
                color="primary"
                type="border"
                icon="arrow_forward_ios"
              />
            </div> -->
          </div>
          <!-- <vs-input
            class="w-1/4"
            icon="search"
            icon-after="true"
            placeholder="Search for anything"
          /> -->
        </div>
      </div>
      <vs-divider />
      <div class="vx-row">
        <div class="vx-col flex-wrap flex justify-between w-full">
          <div class="flex overflow-x-auto">
            <vs-chip
              class="cursor-pointer mx-2 min-w-max"
              v-for="{ id, label, isActive } in tabList"
              :key="id"
              :color="isActive ? 'primary' : ''"
              @click.native="changeTab(id)"
            >
              {{ label }}
            </vs-chip>
          </div>
          <span>
            <vs-button
              color="primary"
              icon="format_list_bulleted"
              @click.stop="redirectToDriverList"
            >
              Drivers
            </vs-button>
          </span>
        </div>
      </div>
    </vx-card>
    <!-- Overview Card Component -->
    <OverviewCard
      class="mt-4"
      v-if="showOverviewCard"
      :isEditable="getSelectedTabComponent === 'OverviewTab'"
      :dataObj="overviewCardData"
      @cardInput="updateOverviewCardData"
    />
    <!-- Tab Component -->
    <div class="mt-4">
      <component
        :is="getSelectedTabComponent"
        :dataObj="formData"
        @update:Overview="updateFormData"
        @update:Files="updateFormData"
        @update:Accounting="updateFormData"
        @submit:Overview="submitOverview"
        @submit:Accounting="submitAccounting"
      />
    </div>
  </div>
</template>
<!-- eslint-disable multiline-ternary -->
<script>
import { mapGetters } from 'vuex'
import { cloneDeep } from 'lodash'

export default {
  name: 'DriverDetails',
  components: {
    AccountingTab: () => import('./components/AccountingTab'),
    OverviewCard: () => import('./components/OverviewCard'),
    OverviewTab: () => import('./components/OverviewTab'),
    FilesTab: () => import('./components/FilesTab')
  },
  data () {
    return {
      chips: [
        {
          id: 1,
          label: 'Overview',
          isActive: true,
          component: 'OverviewTab'
        },
        {
          id: 2,
          label: 'Files',
          isActive: false,
          component: 'FilesTab'
        },
        {
          id: 3,
          label: 'Accounting',
          isActive: false,
          component: 'AccountingTab'
        }
        // {
        //   id: 4,
        //   label: 'Loads',
        //   isActive: false,
        //   component: ''
        // },
        // {
        //   id: 5,
        //   label: 'Statements',
        //   isActive: false,
        //   component: ''
        // },
        // {
        //   id: 6,
        //   label: 'Stats',
        //   isActive: false,
        //   component: ''
        // },
        // {
        //   id: 7,
        //   label: 'Tolls',
        //   isActive: false,
        //   component: ''
        // },
        // {
        //   id: 8,
        //   label: 'Fuel',
        //   isActive: false,
        //   component: ''
        // },
        // {
        //   id: 9,
        //   label: 'Accidents',
        //   isActive: false,
        //   component: ''
        // },
        // {
        //   id: 10,
        //   label: 'HOS',
        //   isActive: false,
        //   component: ''
        // }
      ],
      formData: {},
      overviewCardData: {
        firstName: "",
        lastName: "",
        status: "active",
        phone: "",
        driverType: "",
        isTeamDriver: false,
        isLocalDriver: false,
        isRegionalDriver: false,
        approvalStatus: ""
      },
      dragStartFile: null,
    }
  },
  async created () {
    await this.getAllTags()
    this.init()
  },
  computed: {
    ...mapGetters('driverV2', ['getSelectedDriver', 'getAccountingInfo']),
    ...mapGetters('tag', ['allTags']),
    ...mapGetters('auth', ['userRole', 'companyFeatureAccess']),

    tabList() {
      if (this.companyFeatureAccess.includes('basic')) {
        return this.chips.filter((chip) => chip.label === 'Overview');
      }
      if (this.userRole === 'maintenance') {
        return this.chips.filter((chip) => chip.label !== 'Accounting');
      }

      return this.chips;
    },
    getSelectedTabComponent () {
      return this.chips.find((tab) => tab.isActive).component || null
    },
    isEditMode () {
      return this.$route.name === 'drivers-edit'
    },
    showOverviewCard () {
      return this.getSelectedTabComponent !== 'FilesTab'
    },
    selectedDriver () {
      return this.getSelectedDriver
    }
  },
  methods: {
    changeTab (id) {
      this.chips.forEach((chip) => {
        if (chip.id === id) {
          chip.isActive = true
        } else {
          chip.isActive = false
        }
      })
    },
    redirectToDriverList () {
      this.$router.push({ name: 'drivers' }).catch(() => true)
    },
    getErrorMsg (error) {
      return error &&
        error.response &&
        error.response.data &&
        error.response.data.message
        ? error.response.data.message
        : 'Something went wrong'
    },
    async init () {
      try {
        if (this.isEditMode) this.$vs.loading()

        if (this.isEditMode) {
          const { id } = this.$route.params
          await this.$store.dispatch('driverV2/fetchDriver', id)
          this.formData = {
            ...this.formData,
            ...cloneDeep(this.selectedDriver)
          }
          const {
            firstName,
            lastName,
            status,
            phone,
            driverType,
            isTeamDriver,
            isLocalDriver,
            approvalStatus,
            isRegionalDriver
          } = this.formData;
          this.overviewCardData = {
            ...this.overviewCardData,
            firstName,
            lastName,
            status,
            phone,
            driverType,
            isTeamDriver,
            isLocalDriver,
            isRegionalDriver,
            approvalStatus
          }
          const selectedTags = []
          this.formData.tags.forEach((item) => {
            this.allTags.forEach((tags) => {
              if (item.id === tags.tag_id) {
                selectedTags.push(tags)
              }
            })
          })
          this.formData.tags = selectedTags
          this.formData.tags.map(() => {})

          await this.$store.dispatch('driverV2/fetchAccountingInfo', id)

          this.formData = {
            ...this.formData,
            ...this.getAccountingInfo
          }
        }
      } catch (error) {
      } finally {
        this.$vs.loading.close()
      }
    },
    async getAllTags () {
      return await this.$store.dispatch('tag/getAllTags')
    },
    updateFormData (data) {
      if (!data) return
      this.formData = { ...this.formData, ...data }
    },
    generatedDriverPayTemplatePayload(payTemplateData) {
      const modifyPayload = (item, i) =>  {
        const payload = {
          fieldId: item.id ? String(item.id) : String(item.fieldId),
        };
        if (
          (item.type && item.type.includes("byPercentage")) ||
          (item.fieldType && item.fieldType.includes("byPercentage"))
        ) {
          payload.percentage = item.percentage;
        } else if (
          item.type &&
          (item.type === 'formulaEmptyMiles' ||
            item.type === 'formulaLoadedMiles')
        ) {
          payload.v2 = Number(item.v2).toFixed(3);
          payload.v3 = Number(item.v3).toFixed(3);
        } else {
          if (
            (item.type && item.type === "stopPay") ||
            (item.fieldType && item.fieldType === "stopPay")
          ) {
            payload.payStartAfter = Number(item.payStartAfter);
          }
          payload.rate = item.rate;
        }

        return payload;
      };
      const loadDetailsPayload = (payTemplateData.loadDetails || []).map(
        (item, i) => modifyPayload(item, i)
      );
      const tripDetailsPayload = (payTemplateData.tripDetails || []).map(
        (item, i) => modifyPayload(item, i)
      );
      const payload = {
        loadDetails: loadDetailsPayload,
        tripDetails: tripDetailsPayload,
      };
      return payload;
    },
    async submitOverview (formData) {
      try {
        this.$vs.loading()
        this.updateFormData(formData)
        // if (this.formData.tags.length > 0) this.formData.tags = this.formData.tags.map((x) => {
        //   return { id: x.tag_id || x.id }
        // })

        const { driverPayType, driverPayTemplate } = this.formData || {};
        if(driverPayType === 'template'){
          this.formData.driverPayTemplate = this.generatedDriverPayTemplatePayload(driverPayTemplate);
        }

        const formDataPayload = {
          ...this.formData,
          ...this.overviewCardData,
          tags:
            this.formData.tags.map((x) => {
              return { id: x.tag_id || x.id }
            }) || []
        }

        if (this.isEditMode) {
          await this.$store.dispatch('driverV2/updateDriver', {
            id: this.formData.id,
            payload: formDataPayload
          })
        } else {
          await this.$store.dispatch('driverV2/createDriver', formDataPayload)
        }
        this.redirectToDriverList()
        this.$vs.notify({
          color: 'success',
          title: 'Overview info',
          text: 'Overview info update successfully.'
        })
      } catch (error) {
        const tagsElements = [];
        this.allTags.forEach((x) => {
            this.formData.tags.forEach((item) => {
              if(item.id === x.tag_id){
                tagsElements.push(x);
              }
            })
        })
     this.formData.tags = tagsElements;
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: this.getErrorMsg(error)
        })
      } finally {
        this.$vs.loading.close()
      }
    },
    async submitAccounting (formData) {
      try {
        this.$vs.loading()
        this.updateFormData(formData)

        await this.$store.dispatch(
          'driverV2/updateAccountingInfo',
          this.formData
        )
        this.redirectToDriverList()
        this.$vs.notify({
          color: 'success',
          title: 'Account info',
          text: 'Account info update successfully.'
        })
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: this.getErrorMsg(error)
        })
      } finally {
        this.$vs.loading.close()
      }
    },
    updateOverviewCardData (data) {
      if (!data) return
      this.overviewCardData = { ...this.overviewCardData, ...data }
    }
  }
}
</script>
<style lang="scss" scoped>
// Utility Classes
.min-w-max {
  min-width: max-content;
}
</style>
