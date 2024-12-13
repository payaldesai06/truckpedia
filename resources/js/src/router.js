/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import config from '@/config/constants';
import Vue from 'vue';
import Router from 'vue-router';

import store from './store/store';

const roles = config.roles;

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: '/',
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
  routes: [
    {
      path: '/invite',
      name: 'referral-invite',
      component: () =>
        import(
          './views/pages/account-settings/company/referrals/components/AcceptReferral.vue'
        ),
    },
    {
      path: '/share/load-tracking/:id',
      name: 'share',
      component: () => import('./views/pages/calender/components/LoadInfo.vue'),
    },
    {
      path: '/share/loads-matching/:id',
      name: 'share-loads-matching',
      component: () => import('./views/pages/loads-matching/LoadsMatching.vue'),
    },
    {
      path: '/publicIncidentFiles/:id',
      name: 'publicIncidentFiles',
      component: () =>
        import('./views/pages/safety/components/IncidentFilesTab.vue'),
    },
    {
      path: '/quote/viewRequestsViaLink',
      name: 'CarrierViewQuoteRequests',
      component: () =>
        import('./views/pages/quotes/CarrierViewQuoteRequests.vue'),
    },
    {
      path: '/q/v',
      name: 'CarrierViewQuoteRequestsViaShortenLink',
      component: () =>
        import('./views/pages/quotes/CarrierViewQuoteRequests.vue'),
    },
    {
      // =============================================================================
      // MAIN LAYOUT ROUTES
      // =============================================================================
      path: '',
      component: () => import('./layouts/main/Main.vue'),
      children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
        {
          path: '/',
          name: 'home',
          component: () => import('./views/pages/dashboard/Dashboard'),
          meta: {
            needAuth: true,
            roles: [
              roles.super_admin,
              roles.admin,
              roles.dispatcher,
              roles.warehouse_operator,
              roles.tag_operator,
            ],
          },
        },
        {
          path: '/quotes',
          name: 'quote',
          component: () => import('./views/pages/quotes/Index'),
          meta: {
            needAuth: true,
            roles: [roles.admin, roles.dispatcher],
          },
        },
        {
          path: '/quotes/email',
          name: 'QuotesEmail',
          component: () => import('./views/pages/quotes/SendQuoteEmail.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin, roles.dispatcher],
          },
        },
        // {
        //   path: '/quote/viewRequestsViaLink',
        //   name: 'CarrierViewQuoteRequests',
        //   component: () =>
        //     import('./views/pages/quotes/CarrierViewQuoteRequests.vue'),
        //   meta: {
        //     needAuth: true,
        //     roles: [roles.admin, roles.dispatcher],
        //   },
        // },
        {
          path: '/dispatch',
          name: 'dispatch',
          component: () => import('./views/pages/dispatch/Dispatch'),
          meta: {
            needAuth: true,
            roles: [
              roles.admin,
              roles.dispatcher,
              roles.warehouse_operator,
              roles.tag_operator,
            ],
          },
        },
        {
          path: '/locate-drivers',
          name: 'locate-drivers',
          component: () => import('./views/pages/locate-driver/LocateDriver'),
          meta: { needAuth: true, roles: [roles.admin, roles.dispatcher] },
        },
        {
          path: '/quickbooks/auth_callback',
          name: 'quickbooks-auth-callback',
          component: () =>
            import(
              './views/pages/account-settings/company/integration/QuickbooksCallback.vue'
            ),
          meta: { needAuth: true, roles: [roles.admin] },
        },
        {
          path: '/samsara/auth_callback',
          name: 'samsara-auth-callback',
          component: () =>
            import(
              './views/pages/account-settings/company/integration/SamsaraCallback.vue'
            ),
          meta: { needAuth: true, roles: [roles.admin] },
        },
        {
          path: '/keepTruckin/auth_callback',
          name: 'keepTruckin-auth-callback',
          component: () =>
            import(
              './views/pages/account-settings/company/integration/KeepTruckinCallback.vue'
            ),
          meta: { needAuth: true, roles: [roles.admin] },
        },
        {
          path: '/melio/auth-callback',
          name: 'melio-auth-callback',
          component: () =>
            import(
              './views/pages/account-settings/company/integration/MelioCallback.vue'
            ),
          meta: { needAuth: true, roles: [roles.admin] },
        },
        {
          path: '/account-setting',
          name: 'account-setting',
          component: () =>
            import('./views/pages/account-settings/AccountSettings.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Account Settings', active: true },
            ],
            pageTitle: 'Account Settings',
            needAuth: true,
            roles: [roles.super_admin, roles.admin, roles.dispatcher],
          },
        },
        {
          path: '/calendar',
          name: 'calendar',
          component: () => import('./views/pages/calender/Calendar.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin, roles.dispatcher],
            no_scroll: true,
          },
        },
        {
          path: '/loads-matching',
          name: 'loads-matching',
          component: () =>
            import('./views/pages/loads-matching/LoadsMatching.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin, roles.dispatcher],
            no_scroll: true,
          },
        },
        {
          path: '/maintenance-v2',
          name: 'maintenance-v2',
          component: () =>
            import('./views/pages/maintenance-v2/MaintenanceIssueList.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin, roles.dispatcher, roles.maintenance],
          },
        },
        {
          path: '/maintenance-v2/add',
          name: 'maintenance-add',
          component: () =>
            import('./views/pages/maintenance-v2/MaintenanceForm.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin, roles.dispatcher, roles.maintenance],
          },
        },
        {
          path: '/maintenance-v2/edit/:id',
          name: 'maintenance-edit',
          component: () =>
            import('./views/pages/maintenance-v2/MaintenanceForm.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin, roles.dispatcher, roles.maintenance],
          },
        },
        {
          path: '/reports',
          name: 'report',
          component: () => import('./views/pages/report/Report.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin, roles.dispatcher], //
          },
        },
        // {
        //   path: '/reports/revenue',
        //   name: 'report-revenue',
        //   component: () => import('./views/pages/report/Revenue.vue'),
        //   meta: {
        //     needAuth: true,
        //     roles: [roles.admin, roles.dispatcher]
        //   }
        // },
        // {
        //   path: '/reports/driver-pay',
        //   name: 'report-driver-pay',
        //   component: () => import('./views/pages/report/DriverPay.vue'),
        //   meta: {
        //     needAuth: true,
        //     roles: [roles.admin, roles.dispatcher]
        //   }
        // },
        /*{
          path: '/reports/trip-revenue-report',
          name: 'report-trip-revenue-report',
          component: () => import('./views/pages/report/TripRevenueReport.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin]  // , roles.dispatcher
          }
        },*/
        {
          path: '/reports/customer-revenue',
          name: 'report-customer-revenue',
          component: () =>
            import('./views/pages/report/RevenueByCustomerReport.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin], // , roles.dispatcher
          },
        },
        {
          path: '/reports/dispatcher-sales-revenue',
          name: 'report-dispatcher-sales-revenue',
          component: () =>
            import('./views/pages/report/RevenueByDispatcherSalesReport.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin], // , roles.dispatcher
          },
        },
        {
          path: '/reports/dispatcher-commission-revenue',
          name: 'report-dispatcher-commission-revenue',
          component: () =>
            import(
              './views/pages/report/RevenueByDispatcherCommissionReport.vue'
            ),
          meta: {
            needAuth: true,
            roles: [roles.admin], // , roles.dispatcher
          },
        },
        {
          path: '/reports/driver-payment-report',
          name: 'report-driver-payment-report',
          component: () =>
            import('./views/pages/report/DriverPaymentReport.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin], // , roles.dispatcher
          },
        },
        {
          path: '/reports/load-driver-report',
          name: 'load-driver-report',
          component: () => import('./views/pages/report/LoadDriverReport.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin], // , roles.dispatcher
          },
        },
        /*{
          path: '/reports/equipment-maintenance-report',
          name: 'report-equipment-maintenance-report',
          component: () =>
              import('./views/pages/report/EquipmentMaintenanceReport.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin]  // , roles.dispatcher
          }
        },
        {
          path: '/reports/equipment-list-report',
          name: 'report-equipment-list-report',
          component: () =>
              import('./views/pages/report/EquipmentListReport.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin]  // , roles.dispatcher
          }
        },*/
        {
          path: '/reports/drop-trailers-report',
          name: 'report-drop-trailers-report',
          component: () => import('./views/pages/report/DropTrailerReport.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin, roles.dispatcher], // , roles.dispatcher
          },
        },
        {
          path: '/reports/ifta-report',
          name: 'ifta-report',
          component: () => import('./views/pages/report/IftaReport.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin, roles.dispatcher], // , roles.dispatcher
          },
        },
        /*{
          path: '/reports/truck-report',
          name: 'report-truck-report',
          component: () => import('./views/pages/report/TruckReport.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin]  // , roles.dispatcher
          }
        },
        {
          path: '/reports/trailer-report',
          name: 'report-trailer-report',
          component: () => import('./views/pages/report/TrailerReport.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin]  // , roles.dispatcher
          }
        },*/
        {
          path: '/companies',
          name: 'companies',
          component: () =>
            import('./views/pages/admin-company/AdminCompanyDatatable.vue'),
          meta: { needAuth: true, roles: [roles.super_admin] },
        },
        {
          path: '/companies/:id',
          name: 'companies-view',
          component: () =>
            import('./views/pages/admin-company/CompanyDetailsTab.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Companies', url: '/companies' },
              { title: 'View', active: true },
            ],
            pageTitle: 'Company Details',
            needAuth: true,
            roles: [roles.super_admin],
          },
        },
        {
          path: '/payment-history',
          name: 'payment-history',
          component: () =>
            import('./views/pages/payment-history/PaymentHistoryDatatable.vue'),
          meta: { needAuth: true, roles: [roles.super_admin] },
        },
        {
          path: '/campaign-templates',
          name: 'campaign-templates',
          component: () =>
            import('./views/pages/campaign-templates/CampaignTemplates.vue'),
          meta: { needAuth: true, roles: [roles.super_admin] },
        },
        {
          path: '/campaign-templates/add',
          name: 'campaign-templates-add',
          component: () =>
            import(
              './views/pages/campaign-templates/add-campaign-template/Index.vue'
            ),
          meta: { needAuth: true, roles: [roles.super_admin] },
        },
        {
          path: '/campaign-templates/edit/:id',
          name: 'campaign-templates-edit',
          component: () =>
            import(
              './views/pages/campaign-templates/add-campaign-template/Index.vue'
            ),
          meta: { needAuth: true, roles: [roles.super_admin] },
        },
        {
          path: '/drivers',
          name: 'drivers',
          component: () => import('./views/pages/drivers/DriverList.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin, roles.dispatcher, roles.maintenance],
          },
        },
        {
          path: '/drivers/add',
          name: 'drivers-add',
          component: () => import('./views/pages/drivers/DriverDetails.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin, roles.dispatcher, roles.maintenance],
          },
        },
        {
          path: '/drivers/edit/:id',
          name: 'drivers-edit',
          component: () => import('./views/pages/drivers/DriverDetails.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin, roles.dispatcher, roles.maintenance],
          },
        },
        {
          path: '/trucks',
          name: 'Trucks',
          component: () => import('./views/pages/trucks/TrucksList.vue'),
          meta: {
            needAuth: true,
            roles: [
              roles.super_admin,
              roles.admin,
              roles.dispatcher,
              roles.maintenance,
            ],
          },
        },
        {
          path: '/trucks/add',
          name: 'CreateTrucks',
          component: () => import('./views/pages/trucks/TruckInfo.vue'),
          meta: {
            needAuth: true,
            roles: [
              roles.super_admin,
              roles.admin,
              roles.dispatcher,
              roles.maintenance,
            ],
          },
        },
        {
          path: '/trucks/:id',
          name: 'UpdateTrucks',
          component: () => import('./views/pages/trucks/TruckInfo.vue'),
          meta: {
            needAuth: true,
            roles: [
              roles.super_admin,
              roles.admin,
              roles.dispatcher,
              roles.maintenance,
            ],
          },
          props: true,
        },
        {
          path: '/trailers',
          name: 'Trailers',
          component: () => import('./views/pages/trailers/TrailersList.vue'),
          meta: {
            needAuth: true,
            roles: [
              roles.super_admin,
              roles.admin,
              roles.dispatcher,
              roles.maintenance,
            ],
          },
        },
        {
          path: '/trailers/add',
          name: 'CreateTrailer',
          component: () => import('./views/pages/trailers/TrailerInfo.vue'),
          meta: {
            needAuth: true,
            roles: [
              roles.super_admin,
              roles.admin,
              roles.dispatcher,
              roles.maintenance,
            ],
          },
        },
        {
          path: '/trailers/:id',
          name: 'UpdateTrailer',
          component: () => import('./views/pages/trailers/TrailerInfo.vue'),
          meta: {
            needAuth: true,
            roles: [
              roles.super_admin,
              roles.admin,
              roles.dispatcher,
              roles.maintenance,
            ],
          },
          props: true,
        },
        {
          path: '/menu-view/:menuId/:submenuId',
          name: 'MenuView',
          component: () => import('./views/pages/menu/MenuView.vue'),
          meta: {
            needAuth: true,
            roles: [
              roles.super_admin,
              roles.admin,
              roles.dispatcher,
              roles.tag_operator,
              roles.warehouse_operator,
              roles.maintenance,
            ],
          },
          props: true,
        },
        {
          path: '/invoices',
          name: 'Accounting',
          component: () => import('./views/pages/tripV2/InvoicesView.vue'),
          meta: {
            needAuth: true,
            roles: [roles.super_admin, roles.admin, roles.dispatcher],
          },
        },
        {
          path: '/planning',
          name: 'planning',
          component: () => import('./views/pages/tripV2/planning'),
          meta: {
            needAuth: true,
            roles: [roles.super_admin, roles.admin, roles.dispatcher],
          },
        },
        {
          path: '/safety',
          name: 'Safety',
          component: () => import('@/views/pages/safety'),
          meta: {
            needAuth: true,
            roles: [roles.super_admin, roles.admin, roles.dispatcher],
          },
        },
        {
          path: '/safety/add',
          name: 'CreateSafety',
          component: () => import('@/views/pages/safety/IncidentsInfo.vue'),
          meta: {
            needAuth: true,
            roles: [roles.super_admin, roles.admin, roles.dispatcher],
          },
        },
        {
          path: '/safety/edit/:id',
          name: 'UpdateSafety',
          component: () => import('@/views/pages/safety/IncidentsInfo.vue'),
          meta: {
            needAuth: true,
            roles: [roles.super_admin, roles.admin, roles.dispatcher],
          },
        },
        {
          path: '/chat',
          name: 'chat',
          component: () => import('./views/pages/chat/Index.vue'),
          meta: {
            needAuth: true,
            roles: [
              roles.super_admin,
              roles.admin,
              roles.dispatcher,
              roles.warehouse_operator,
              roles.tag_operator,
              roles.maintenance,
            ],
          },
        },
        {
          path: '/review/load/:id',
          name: 'review',
          component: () => import('./views/pages/load-review/Index.vue'),
          meta: {
            needAuth: true,
            roles: [
              roles.super_admin,
              roles.admin,
              roles.dispatcher,
              roles.warehouse_operator,
              roles.tag_operator,
            ],
          },
        },
        {
          path: '/customers',
          name: 'customers',
          component: () => import('./views/pages/customers/CustomersList.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin, roles.dispatcher],
          },
        },
        {
          path: '/customers/add',
          name: 'customers-add',
          component: () =>
            import('./views/pages/customers/CustomerDetails.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin, roles.dispatcher],
          },
        },
        {
          path: '/customers/edit/:id',
          name: 'customers-edit',
          component: () =>
            import('./views/pages/customers/CustomerDetails.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin, roles.dispatcher],
          },
        },
        {
          path: '/carriers',
          name: 'carriers',
          component: () => import('./views/pages/carriers/CustomersList.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin, roles.dispatcher],
          },
        },
        {
          path: '/carriers/add',
          name: 'carriers-add',
          component: () => import('./views/pages/carriers/CustomerDetails.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin, roles.dispatcher],
          },
        },
        {
          path: '/carriers/edit/:id',
          name: 'carriers-edit',
          component: () => import('./views/pages/carriers/CustomerDetails.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin, roles.dispatcher],
          },
        },
        {
          path: '/rates',
          name: 'carriers-lane-rates',
          component: () => import('./views/pages/rates/LaneRates.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin, roles.dispatcher],
          },
        },
        {
          path: '/marketing/email-accounts',
          name: 'marketing-email-accounts',
          component: () => import('./views/pages/marketing/EmailAccounts.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin, roles.dispatcher],
          },
        },
        {
          path: '/marketing/campaigns',
          name: 'marketing-campaigns',
          component: () => import('./views/pages/marketing/Campaigns.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin, roles.dispatcher],
          },
        },
        {
          path: '/marketing/campaigns/:id',
          name: 'campaign-overview',
          component: () =>
            import('./views/pages/marketing/CampaignOverview.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin, roles.dispatcher],
          },
        },
        {
          path: '/marketing/email-inbox',
          name: 'marketing-emailInbox',
          component: () => import('./views/pages/marketing/EmailInbox.vue'),
          meta: {
            needAuth: true,
            roles: [roles.admin, roles.dispatcher],
          },
        },
        // {
        //   path: '/marketing/analytics',
        //   name: 'marketing-analytics',
        //   component: () => import('./views/pages/marketing/Analytics.vue'),
        //   meta: {
        //     needAuth: true,
        //     roles: [roles.admin, roles.dispatcher],
        //   },
        // },
        {
          path: '/marketing/gmail/authCallback',
          name: 'marketing-gmail-authCallback',
          component: () =>
            import(
              './views/pages/marketing/components/EmailAccounts/GmailCallback.vue'
            ),
          meta: { needAuth: true, roles: [roles.admin, roles.dispatcher] },
        },
        {
          path: '/marketing/outlook/authCallback',
          name: 'marketing-outlook-authCallback',
          component: () =>
            import(
              './views/pages/marketing/components/EmailAccounts/OutlookCallback.vue'
            ),
          meta: { needAuth: true, roles: [roles.admin, roles.dispatcher] },
        },
        {
          path: '/marketing/crm',
          name: 'marketing-crm',
          component: () => import('./views/pages/marketing/crm'),
          meta: {
            needAuth: true,
            roles: [roles.admin, roles.dispatcher],
          },
        },
        {
          path: '/marketing/crm/deal-information/:id',
          name: 'marketing-crm-deal-information',
          component: () =>
            import('./views/pages/marketing/crm/deal-information'),
          meta: {
            needAuth: true,
            roles: [roles.admin, roles.dispatcher],
          },
        },
      ],
    },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    {
      path: '',
      component: () => import('@/layouts/full-page/FullPage.vue'),
      children: [
        // =============================================================================
        // PAGES
        // =============================================================================
        {
          path: '/login',
          name: 'page-login',
          component: () => import('@/views/pages/login/Login.vue'),
          meta: { authRoute: true },
        },
        {
          path: '/error-404',
          name: 'page-error-404',
          component: () => import('@/views/pages/Error404.vue'),
        },
        {
          path: '/register',
          name: 'page-register',
          component: () => import('@/views/pages/register/Register.vue'),
          meta: { authRoute: true },
        },
        {
          path: '/waiting-list/register',
          name: 'page-waiting-list-register',
          component: () =>
            import('@/views/pages/waitinglist/WaitingListRegister.vue'),
          meta: { authRoute: true },
        },
        {
          path: '/free-trial',
          name: 'free-trial',
          component: () => import('@/views/pages/free-trial/FreeTrial.vue'),
          meta: { setupPage: true, needAuth: true, roles: [roles.admin] },
        },
        {
          path: '/setup-profile',
          name: 'setup-profile',
          component: () =>
            import('@/views/pages/profile-setup/ProfileSetup.vue'),
          meta: { setupPage: true, needAuth: true, roles: [roles.admin] },
        },
        {
          path: '/forgot-password',
          name: 'page-forgot-password',
          component: () => import('@/views/pages/ForgotPassword.vue'),
          meta: { authRoute: true },
        },
        {
          path: '/pay-invoice/authorize-net/:id',
          name: 'invoice-payment',
          component: () => import('@/views/pages/InvoicePayment.vue'),
        },
      ],
    },
    // Redirect to 404 page, if no match found
    { path: '*', redirect: '/error-404' },
  ],
});

router.afterEach((_, from) => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg');
  if (appLoading) {
    appLoading.style.display = 'none';
  }
  // Save previous route name in store
  store.commit('UPDATE_PREVIOUS_ROUTE_NAME', from.name);
  // hide popups of previous route
  hideElementsIfVisible('.vs-popup-primary');
  hideElementsIfVisible('.vs-content-sidebar');
  hideElementsIfVisible('.con-vs-dialog');
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.needAuth)) {
    if (
      store.getters['auth/isLoggedIn'] === 0 &&
      localStorage.getItem('access_token') === null
    ) {
      next({ name: 'page-login' });
    } else if (
      store.getters['auth/isLoggedIn'] === 0 &&
      localStorage.getItem('access_token') !== null
    ) {
      try {
        await store.dispatch('auth/getLoggedInUserProfile');

        if (
          store.getters['auth/isLoggedIn'] === 1 &&
          !store.getters['auth/isBusinessProfileSetup']
        ) {
          next({ name: 'setup-profile' });
        } else if (to.matched.some((record) => record.meta.setupPage)) {
          // console.log(store.getters['auth/isLoggedIn'])
          // console.log(store.getters['auth/isBusinessProfileSetup'])
          // console.log(to.matched.some(record => record.meta.setupPage))

          if (
            store.getters['auth/isLoggedIn'] === 1 &&
            !store.getters['auth/isBusinessProfileSetup']
          ) {
            next({ name: 'setup-profile' });
          } else if (
            store.getters['auth/isLoggedIn'] === 1 &&
            store.getters['auth/isBusinessProfileSetup']
          ) {
            next({ name: 'home' });
          } else {
            next();
          }
        } else {
          if (
            to.matched.some(
              (record) =>
                record.meta.roles &&
                record.meta.roles.includes(store.getters['auth/userRole'])
            )
          ) {
            if (
              to.name == 'home' &&
              store.getters['auth/isUserBrokerOrShipper']
            ) {
              next({ name: 'dispatch' });
            } else {
              next();
            }
          } else {
            next({ name: 'home' });
          }
        }
      } catch (e) {
        // If for some reason, auth/user API failed, then the code will log current user out.
        // Is this correct? I doubt.
        await store.dispatch('auth/logoutLocally');
        next({ name: 'page-login' });
      }
    } else {
      if (
        to.matched.some(
          (record) =>
            record.meta.roles &&
            record.meta.roles.includes(store.getters['auth/userRole'])
        )
      ) {
        next();
      } else {
        // next({name: 'home'})
        // TODO: what's the purpose of this change? Explain, thanks.
        !to || to.name !== 'home' ? next({ name: 'home' }) : next();
      }
    }
  } else if (to.matched.some((record) => record.meta.authRoute)) {
    const { otherCompanyId, type } = to.query;

    if (
      store.getters['auth/isLoggedIn'] === 1 &&
      store.getters['auth/isBusinessProfileSetup']
    ) {
      next({ name: 'home' });
    } else if (localStorage.getItem('access_token') !== null) {
      try {
        await store.dispatch('auth/getLoggedInUserProfile');

        // next({name: 'home'})

        if (
          store.getters['auth/isLoggedIn'] === 1 &&
          !store.getters['auth/isBusinessProfileSetup']
        ) {
          next({ name: 'setup-profile' });
        } else if (otherCompanyId && type) {
          // Redirect to chat page if otherCompanyId and type are present in query
          next({ name: 'chat', query: { otherCompanyId, type } });
        } else {
          next({ name: 'home' });
        }
      } catch (e) {
        await store.dispatch('auth/logoutLocally');
        next();
      }
    } else {
      next();
    }
  } else {
    next();
  }
});

const hideElementsIfVisible = (selector) => {
  // Get all elements matching the selector
  const elements = document.querySelectorAll(selector);

  // Check if any elements are found
  if (elements.length > 0) {
    // Iterate through each element
    elements.forEach(element => {
      // Check if the element is visible
      if (window.getComputedStyle(element).display !== 'none') {
        // Add the 'hidden' class
        element.classList.add('hidden');
      }
    });
  }
}

export default router;
