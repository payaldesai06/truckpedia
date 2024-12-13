<template>
  <div class="vs-row w-full" id="account-settings">
    <div class="vs-col flex gap-8 w-full">
      <div class="w-1/6">
        <div
          class="w-full mb-4"
          v-for="item in accountSettingItems"
          :key="item.header"
        >
          <h3
            class="text-base cursor-pointer"
            @click="changeComponent(item.links[0].componentName)"
          >
            {{ item.header }}
          </h3>
          <ul class="ml-4">
            <li
              v-for="subheader in item.links"
              :key="subheader.label"
              @click="changeComponent(subheader.componentName)"
              class="mt-2 text-sm cursor-pointer"
              :class="{ active: activeComponent == subheader.componentName }"
              v-show="hidefunctionalitiesForSpecificUserId(subheader)"
            >
              {{ subheader.label }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Content -->
      <div class="w-full z-10">
        <vx-card class="px-4" :class="cardClasses">
          <transition name="fade" mode="out-in">
            <!-- <keep-alive> -->
            <component v-bind:is="activeComponent"></component>
            <!-- </keep-alive> -->
          </transition>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import config from '@/config/constants';
import UserProfile from './user/UserProfile';
import ChangePassword from './user/ChangePassword';
import GeneralInformation from './company/general/GeneralInformation';
import Tags from './company/tag/Tags';
import Files from './company/file/Files';
import Integration from './company/integration/Integration';
import Customization from './company/customization/Customization';
import UserDatatable from './company/user/UserDatatable';
import FactoringCompany from './company/factoring-company/FactoringCompany.vue';
import Bill from './company/billing/Bill';
import TransactionDatatable from './company/transaction/TransactionDatatable';
import FactoringCompanyDatatable from './admin/factoring-company/FactoringCompanyDatatable';
import LanguageLabelDatatable from './admin/language-label/LanguageLabelDatatable';
import TaskAutomation from './company/task-automation/TaskAutomation';
import savedAddressesDatatable from './admin/saved-addresses/SavedAddressesDatatable';
import savedEquipmentsDatatable from './admin/saved-equipments/SavedEquipmentDatatable.vue';
import Referrals from './company/referrals/Referrals.vue';
import EditCompanyWebsite from './company/edit-company-website/EditCompanyWebsite.vue';
import Marketplace from './company/marketplace';

export default {
  name: 'AccountSettings',

  components: {
    UserProfile,
    ChangePassword,
    GeneralInformation,
    Integration,
    Customization,
    Tags,
    Files,
    UserDatatable,
    FactoringCompany,
    Bill,
    TransactionDatatable,
    FactoringCompanyDatatable,
    LanguageLabelDatatable,
    TaskAutomation,
    savedAddressesDatatable,
    Referrals,
    EditCompanyWebsite,
    savedEquipmentsDatatable,
    Marketplace,
  },

  data() {
    return {
      userRoles: config.roles,
      activeComponent: 'user-profile',
      accountSettingItems: [],
    };
  },

  created() {
    this.accountSettingItems = {
      [this.userRoles.super_admin]: this.getSuperAdminAccountSetting(),
      [this.userRoles.admin]: this.getAdminAccountSetting(),
      [this.userRoles.dispatcher]: this.getDispatcherAccountSetting(),
    }[this.userRole];
    if (this.isUserBrokerOrShipper) {
      this.accountSettingItems = this.accountSettingItems.map((item) => {
        return {
          ...item,
          links: item.links.filter((link) => link.componentName !== 'files'),
        };
      });
    }
  },

  computed: {
    ...mapGetters('auth', [
      'userRole',
      'user',
      'isUserBrokerOrShipper',
      'companyFeatureAccess',
    ]),
    cardClasses() {
      if (this.activeComponent == 'referrals') {
        return 'card';
      }
      return 'px-4';
    },
    isCarrierUser() {
      const { admin_company_details } = this.user || {};
      const { companyType } = admin_company_details || {};
      return companyType === null || companyType === 'carrier';
    },
  },

  mounted() {},

  methods: {
    hidefunctionalitiesForSpecificUserId(item) {
      if (this.user.role !== 'super_admin') {
        if (
          this.user.admin_company_details.admin_company_detail_id ===
          config.hidefunctionalitiesForSpecificCompanyIds
        ) {
          const componentName = [
            'expense-type-datatable',
            'task-automation',
            'factoring-company',
            'customization',
          ];
          if (componentName.includes(item.componentName)) {
            return false;
          }
        }
      }
      return true;
    },
    changeComponent(newComponent) {
      this.activeComponent = newComponent;
    },

    /*
     * Get Auth User's Account Setting Menu
     */
    getSuperAdminAccountSetting() {
      return [
        {
          header: 'Personal',
          links: [
            {
              label: 'User Profile',
              componentName: 'user-profile',
            },
            {
              label: 'Password & Login',
              componentName: 'change-password',
            },
          ],
        },
        {
          header: 'Admin',
          links: [
            {
              label: 'Language Label',
              componentName: 'language-label-datatable',
            },
          ],
        },
      ];
    },

    getAdminAccountSetting() {
      const options = [
        {
          header: 'Personal',
          links: [
            {
              label: 'User Profile',
              componentName: 'user-profile',
            },
            {
              label: 'Password & Login',
              componentName: 'change-password',
            },
            {
              label: 'Referrals',
              componentName: 'referrals',
            },
          ],
        },
        {
          header: 'Company',
          links: [
            {
              label: 'General',
              componentName: 'general-information',
            },
            {
              label: 'Files',
              componentName: 'files',
            },
            {
              label: 'Tags',
              componentName: 'tags',
            },
            {
              label: 'Manage User',
              componentName: 'user-datatable',
            },
            {
              label: 'Task Automation',
              componentName: 'task-automation',
            },
            {
              label: 'Factoring Company',
              componentName: 'factoring-company',
            },
            {
              label: 'Billing',
              componentName: 'bill',
            },
            {
              label: 'Payments',
              componentName: 'transaction-datatable',
            },
            {
              label: 'Integration',
              componentName: 'integration',
            },
            {
              label: 'Customizations',
              componentName: 'customization',
            },
          ],
        },
        {
          header: 'Admin',
          links: [
            {
              label: 'Saved Addresses',
              componentName: 'saved-addresses-datatable',
            },
            {
              label: 'Saved Equipments',
              componentName: 'saved-equipments-datatable',
            },
            // {
            //   label: 'Language Label',
            //   componentName: 'language-label-datatable'
            // },
          ],
        },
        {
          header: 'Website',
          links: [
            {
              label: 'Edit Company Website',
              componentName: 'EditCompanyWebsite',
            },
          ],
        },
      ];

      if (
        this.isCarrierUser &&
        this.companyFeatureAccess.includes('marketplace')
      ) {
        const carrierMarketplacePage = {
          label: 'Marketplace',
          componentName: 'marketplace',
        };
        // Insert Marketplace page between General and Files
        options[1].links.splice(1, 0, carrierMarketplacePage);
      }

      return options;
    },

    getDispatcherAccountSetting() {
      return [
        {
          header: 'Personal',
          links: [
            {
              label: 'User Profile',
              componentName: 'user-profile',
            },
            {
              label: 'Password & Login',
              componentName: 'change-password',
            },
          ],
        },
        /*{
          header: "Company",
          links: [
            {
              label: "Integration",
              componentName: "integration",
            },
          ],
        },*/
        {
          header: 'Admin',
          links: [
            {
              label: 'Saved Addresses',
              componentName: 'saved-addresses-datatable',
            },
            {
              label: 'Saved Equipments',
              componentName: 'saved-equipments-datatable',
            },
          ],
        },
      ];
    },
  },
};
</script>

<style scoped>
.active {
  border-right: 2px solid rgba(var(--vs-primary), 1);
  color: rgba(var(--vs-primary), 1) !important;
  font-weight: 600;
}

li:hover {
  color: rgba(var(--vs-primary), 1) !important;
}

/*Tarnsition Effect*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.card {
  background: transparent;
  box-shadow: none;
}
</style>
