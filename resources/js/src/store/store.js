/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import Vue from 'vue';
import Vuex from 'vuex';

import moduleAccessorialFees from './accessorial-fee/moduleAccessorialFee.js';
import actions from './actions';
import moduleAdminCompany from './admin-company/moduleAdminCompany.js';
import moduleAccounting from './accounting/moduleAccounting.js';
import moduleAuth from './auth/moduleAuth.js';
import moduleAutomation from './automation/moduleAutomation.js';
import moduleCalendar from './calendar/moduleCalendar.js';
import moduleCompanyUser from './company-user/moduleCompanyUser.js';
import moduleCompanyFile from './company-file/moduleCompanyFile.js';
import moduleCustomer from './customer/moduleCustomer.js';
import moduleCustomization from './customization/moduleCustomization.js';
import moduleDashboard from './dashboard/moduleDashboard.js';
import moduleDriverPay from './driver-pay/moduleDriverPay.js';
import moduleDriver from './driver/moduleDriver.js';
import moduleCHRobinson from './external-load-boards/chrobinson/moduleCHRobinson.js';
import moduleDat from './external-load-boards/dat/moduleDat.js';
import moduleLoadboardCrawler from './external-load-boards/loadboard-crawler/moduleLoadboardCrawler.js';
import moduleTruckStop from './external-load-boards/truckstop/moduleTruckStop.js';
import modulePcMiler from './external-routing/pcmiler/modulePcMiler.js';
import moduleFactoringCompany from './factoring-company/moduleFactoringCompany.js';
import getters from './getters';
import moduleKeepTruckin from './KeepTruckin/moduleKeepTruckin';
import moduleLanguageLabel from './language-label/moduleLanguageLabel.js';
import moduleLoadCollaborator from './load-collaborator/moduleLoadCollaborator.js';
import moduleLoad from './load/moduleLoad.js';
import moduleLoadsMatching from './loads-matching/moduleLoadsMatching.js';
import moduleLocate from './locate/moduleLocate.js';
import mutations from './mutations';
import modulePaymentHistory from './payment-history/modulePaymentHistory.js';
import modulePipeline from './pipeline/modulePipeline.js';
import moduleQbd from './qbd/moduleQbd.js';
import moduleQuickbooks from './quickbooks/moduleQuickbooks.js';
import moduleReferral from './referral/moduleReferral.js';
import moduleSamsara from './samsara/moduleSamsara.js';
import moduleSavedAddresses from './saved-addresses/moduleSavedAddresses.js';
import moduleSpreadsheet from './spreadsheet/moduleSpreadsheet.js';
import state from './state';
import moduleStripe from './stripe/moduleStripe.js';
import moduleTag from './tag/moduleTag.js';
import moduleTaskAutomation from './task-automation/moduleTaskAutomation.js';
import moduleTrailer from './trailer/moduleTrailer.js';
import moduleTransaction from './transaction/moduleTransaction.js';
import moduleTrip from './trip/moduleTrip.js';
import moduleTruck from './truck/moduleTruck.js';
import moduleAuthorizeNet from './authorize-net';
import companies from './companies';
import tafs from './tafs';
import pdf from './pdf';

// Version 2
import companyUserV2 from './company-user-v2';
import maintenanceV2 from './maintenance-v2';
import vehicleV2 from './vehicle-v2';
import driverV2 from './driver-v2';
import trucksV2 from './trucks-v2';
import trailersV2 from './trailer-v2';
import menuV2 from './menu-v2';
import tripV2 from './trip-v2';
import invoiceV2 from './invoice-v2';
import moduleDriverPayTemplate from './driver-pay-templates/moduleDriverPayTemplate.js';
import planningV2 from './planning-v2';
import moduleHomeTab from './home-tab/moduleHomeTab.js';
import pipelineV2 from './pipeline-v2/index.js';
import moduleSavedEquipments from './saved-equipment/index.js';
import moduleEzpapelWebsiteVersion from './website-version/moduleEzpapelWebsiteVersion.js';
import hos from './hos/index.js';
import moduleWex from './wex/moduleWex.js';
import truckpedia from './truckpedia/index.js';
import t3 from './t3/index.js';
import moduleReport from '@/store/report/moduleReport';
import incidents from './incidents/index.js';
import moduleChat from './chat/moduleChat.js';
import loadReview from './load-review/index.js';
import moduleAuthorize from './authorizeNet/moduleAuthorizeNet.js';
import customerV2 from './customer-v2/index.js';
import quote from './quote/index.js';
import email from './email';
import marketing from './marketing';
import greenScreens from './green-screens-ai/index.js';
import marketplace from './marketplace/index.js';
import melio from './melio/index.js';
import trip2 from './trip2/index.js';
Vue.use(Vuex);

export default new Vuex.Store({
  getters,
  mutations,
  state,
  actions,
  modules: {
    auth: moduleAuth,
    accounting: moduleAccounting,
    truck: moduleTruck,
    trailer: moduleTrailer,
    customer: moduleCustomer,
    'company-user': moduleCompanyUser,
    'company-file': moduleCompanyFile,
    driver: moduleDriver,
    'driver-pay': moduleDriverPay,
    load: moduleLoad,
    'accessorial-fees': moduleAccessorialFees,
    'language-label': moduleLanguageLabel,
    trip: moduleTrip,
    pipeline: modulePipeline,
    'admin-company': moduleAdminCompany,
    stripe: moduleStripe,
    transaction: moduleTransaction,
    dashboard: moduleDashboard,
    'payment-history': modulePaymentHistory,
    quickbooks: moduleQuickbooks,
    qbd: moduleQbd,
    samsara: moduleSamsara,
    tag: moduleTag,
    locate: moduleLocate,
    'load-collaborator': moduleLoadCollaborator,
    'factoring-company': moduleFactoringCompany,
    automation: moduleAutomation,
    'task-automation': moduleTaskAutomation,
    customization: moduleCustomization,
    'loads-matching': moduleLoadsMatching,
    calendar: moduleCalendar,
    keepTruckin: moduleKeepTruckin,
    dat: moduleDat,
    'saved-addresses': moduleSavedAddresses,
    'saved-equipment': moduleSavedEquipments,
    truckstop: moduleTruckStop,
    chrobinson: moduleCHRobinson,
    'loadboard-crawler': moduleLoadboardCrawler,
    referral: moduleReferral,
    spreadsheet: moduleSpreadsheet,
    pcmiler: modulePcMiler,
    companyUserV2,
    maintenanceV2,
    vehicleV2,
    driverV2,
    trucksV2,
    trailersV2,
    menuV2,
    tripV2,
    invoiceV2,
    planningV2,
    driverPayTemplates: moduleDriverPayTemplate,
    homeTab: moduleHomeTab,
    pipelineV2,
    ezpapelWebsiteVersion: moduleEzpapelWebsiteVersion,
    hos,
    wex: moduleWex,
    truckpedia,
    t3,
    report: moduleReport,
    incidents,
    chat: moduleChat,
    authorizeNet: moduleAuthorizeNet,
    loadReview,
    authorize: moduleAuthorize,
    customerV2,
    quote,
    email,
    marketing,
    marketplace,
    companies,
    greenScreens,
    melio,
    tafs,
    pdf,
    trip2,
  },
  strict: process.env.NODE_ENV !== 'production',
});
