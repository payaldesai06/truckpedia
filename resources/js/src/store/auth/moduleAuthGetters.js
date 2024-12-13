/*=========================================================================================
  File Name: moduleAuthGetters.js
  Description: Auth Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default {
  user: (state) => state.user,

  isLoggedIn: (state) => {
    if (state.user === null || state.user === '') {
      return 0;
    }
    return 1;
  },

  isBusinessProfileSetup: (state) => {
    if (!state.user) return 0;

    return !!state.user.is_business_profile_setup;
  },

  userRole: (state) => state.user.role,

  // Check User has assigned card
  hasCard: (state) => {
    if (!state.user) return 0;

    return !!state.user.admin_company_details.stripe_payment_method_id;
  },

  /*
   * Trail Plan
   */
  trialRemainingDays: (state) => {
    const today = new Date();
    const trialValidTill = new Date(
      state.user.admin_company_details.trial_valid_till
    );

    const differenceInDays = Math.round(
      (trialValidTill - today) / (1000 * 60 * 60 * 24)
    );

    if (differenceInDays < 0) {
      return -1;
    }

    return differenceInDays;
  },

  isFreeTrialActive: (state, getters) => !(getters.trialRemainingDays < 0),

  userCustomization: (state) => state.user.userCustomization,
  getUserLatLang: (state) => state.userLatLang,

  isUserBrokerOrShipper: ({ user }) => {
    return (
      user &&
      user.admin_company_details &&
      (user.admin_company_details.companyType === 'broker' ||
        user.admin_company_details.companyType === 'shipper')
    );
  },
  companyFeatureAccess: ({ user }) => {
    if (
      user &&
      user.admin_company_details &&
      user.admin_company_details.featureAccess
    ) {
      return user.admin_company_details.featureAccess;
    }
    return [];
  },
  isTruckpediaUser({ user }) {
    if (user && user.role !== 'super_admin') {
      return (
        user &&
        user.admin_company_details &&
        (user.admin_company_details.companyType === 'broker' ||
          user.admin_company_details.companyType === 'shipper')
      );
    }
    return false;
  },
};
