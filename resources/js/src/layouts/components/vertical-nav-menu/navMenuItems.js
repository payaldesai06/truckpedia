/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

const navItemSuperAdmin = [
  { url: '/', name: 'Home', slug: 'home', icon: 'HomeIcon' },
  {
    url: '/companies',
    name: 'Companies',
    slug: 'companies',
    icon: 'GlobeIcon',
  },
  {
    url: '/payment-history',
    name: 'Payment History',
    slug: 'payments',
    icon: 'CreditCardIcon',
  },
  {
    url: '/campaign-templates',
    name: 'Campaign Templates',
    slug: 'compaignTemplates',
    customIcon: 'marketingIcon',
  },
];

const navItemAdmin = [
  { url: '/', name: 'Home', slug: 'home', icon: 'HomeIcon' },
  { url: '/dispatch', name: 'Dispatch', slug: 'dispatch', icon: 'TruckIcon' },
  // { url: '/quotes', name: 'Quotes', slug: 'quotes', icon: 'ArchiveIcon' },
  {
    url: '/calendar',
    name: 'Calendar',
    slug: 'calendar',
    icon: 'CalendarIcon',
  },
  // {
  //   url: "/loads-matching",
  //   name: "Load Matching",
  //   slug: "load-matching",
  //   icon: "CalendarIcon",
  // },
  {
    url: '/invoices',
    name: 'Accounting',
    slug: 'invoices',
    icon: 'CreditCardIcon',
  },
  {
    url: '/planning',
    name: 'Planning',
    slug: 'planning',
    icon: 'PackageIcon',
  },
  { url: '/reports', name: 'Reports', slug: 'report', icon: 'PieChartIcon' },
  // {
  //   url: '/',
  //   name: 'Reports',
  //   slug: 'report',
  //   icon: 'PieChartIcon',
  //   submenu: [
  //     {
  //       url: '/reports',
  //       name: 'Reports',
  //       slug: 'report'
  //     },
  //     {
  //       url: '/reports/revenue',
  //       name: 'Revenue',
  //       slug: 'report-revenue'
  //     },
  //     {
  //       url: '/reports/driver-pay',
  //       name: 'Driver Pay',
  //       slug: 'report-driver-pay'
  //     }
  //   ]
  // },
  {
    url: '/maintenance-v2',
    name: 'Maintenance',
    slug: 'maintenance',
    icon: 'ToolIcon',
  },
  {
    url: '/drivers',
    name: 'Drivers',
    slug: 'driver',
    icon: 'UserIcon',
  },
  { url: '/trucks', name: 'Trucks', slug: 'truck', icon: 'TruckIcon' },
  {
    url: '/trailers',
    name: 'Trailers',
    slug: 'trailer',
    customIcon: 'trailer',
  },
  {
    url: '/customers',
    name: 'Customers',
    slug: 'customer',
    customIcon: 'customer',
  },
  {
    url: '/carriers',
    name: 'Carriers',
    slug: 'carrier',
    customIcon: 'carriersIcon',
  },
  {
    url: '/marketing',
    name: 'Marketing',
    slug: 'marketing',
    customIcon: 'marketingIcon',
    children: [
      {
        url: '/marketing/email-accounts',
        name: 'Email Accounts',
        slug: 'marketing-email-accounts',
        icon: 'MailIcon',
      },
      {
        url: '/marketing/campaigns',
        name: 'Campaigns',
        slug: 'marketing-campaigns',
        icon: 'SendIcon',
      },
      {
        url: '/marketing/email-inbox',
        name: 'Inbox',
        slug: 'marketing-emailInbox',
        icon: 'MessageCircleIcon',
      },
      {
        url: '/marketing/crm',
        name: 'CRM',
        slug: 'marketing-crm',
        customIcon: 'chartInfoGraphicIcon',
      },
      // {
      //   url: '/marketing/analytics',
      //   name: 'Analytics',
      //   slug: 'marketing-analytics',
      //   icon: 'PieChartIcon',
      // },
    ],
  },
  {
    url: '/safety',
    name: 'Safety',
    slug: 'safety',
    customIcon: 'safety',
  },
  /*{
    url: '/locate-drivers',
    name: 'Locate Drivers',
    slug: 'locate-drivers',
    icon: 'CompassIcon'
  }*/
  {
    url: '/quotes',
    name: 'Bookings',
    slug: 'quotes',
    icon: 'ClipboardIcon',
  },
  { url: '/rates', name: 'Rates', slug: 'rates', customIcon: 'ratesListIcon' },
];

const navItemDispatcher = [
  { url: '/dispatch', name: 'Dispatch', slug: 'dispatch', icon: 'TruckIcon' },
  // { url: '/quotes', name: 'Quotes', slug: 'quotes', icon: 'ArchiveIcon' },
  {
    url: '/calendar',
    name: 'Calendar',
    slug: 'calendar',
    icon: 'CalendarIcon',
  },
  // {
  //   url: "/loads-matching",
  //   name: "Load Matching",
  //   slug: "load-matching",
  //   icon: "CalendarIcon",
  // },
  {
    url: '/invoices',
    name: 'Accounting',
    slug: 'invoices',
    icon: 'CreditCardIcon',
  },
  {
    url: '/planning',
    name: 'Planning',
    slug: 'planning',
    icon: 'PackageIcon',
  },
  { url: '/reports', name: 'Reports', slug: 'report', icon: 'PieChartIcon' },
  {
    url: '/maintenance-v2',
    name: 'Maintenance',
    slug: 'maintenance',
    icon: 'ToolIcon',
  },
  {
    url: '/drivers',
    name: 'Drivers',
    slug: 'driver',
    icon: 'UserIcon',
  },
  { url: '/trucks', name: 'Trucks', slug: 'truck', icon: 'TruckIcon' },
  {
    url: '/trailers',
    name: 'Trailers',
    slug: 'trailer',
    customIcon: 'trailer',
  },
  {
    url: '/customers',
    name: 'Customers',
    slug: 'customer',
    customIcon: 'customer',
  },
  {
    url: '/carriers',
    name: 'Carriers',
    slug: 'carrier',
    customIcon: 'carriersIcon',
  },
  {
    url: '/safety',
    name: 'Safety',
    slug: 'safety',
    customIcon: 'safety',
  },
  {
    url: '/quotes',
    name: 'Bookings',
    slug: 'quotes',
    icon: 'ClipboardIcon',
  },
  {
    url: '/marketing',
    name: 'Marketing',
    slug: 'marketing',
    customIcon: 'marketingIcon',
    children: [
      {
        url: '/marketing/email-accounts',
        name: 'Email Accounts',
        slug: 'marketing-email-accounts',
        icon: 'MailIcon',
      },
      {
        url: '/marketing/campaigns',
        name: 'Campaigns',
        slug: 'marketing-campaigns',
        icon: 'SendIcon',
      },
      {
        url: '/marketing/email-inbox',
        name: 'Inbox',
        slug: 'marketing-emailInbox',
        icon: 'MessageCircleIcon',
      },
      {
        url: '/marketing/crm',
        name: 'CRM',
        slug: 'marketing-crm',
        icon: 'MessageCircleIcon',
      },
      // {
      //   url: '/marketing/analytics',
      //   name: 'Analytics',
      //   slug: 'marketing-analytics',
      //   icon: 'PieChartIcon',
      // },
    ],
  },
  { url: '/rates', name: 'Rates', slug: 'rates', customIcon: 'ratesListIcon' },
];

const navItemWarehouseOperator = [
  { url: '/dispatch', name: 'Dispatch', slug: 'dispatch', icon: 'TruckIcon' },
];

const navItemTagOperator = [
  { url: '/dispatch', name: 'Dispatch', slug: 'dispatch', icon: 'TruckIcon' },
];

const navItemShipperBroker = [
  // { url: '/', name: 'Home', slug: 'home', icon: 'HomeIcon' },
  { url: '/dispatch', name: 'Dispatch', slug: 'dispatch', icon: 'TruckIcon' },
  // { url: '/quotes', name: 'Quotes', slug: 'quotes', icon: 'ArchiveIcon' },
  {
    url: '/calendar',
    name: 'Calendar',
    slug: 'calendar',
    icon: 'CalendarIcon',
  },
  {
    url: '/invoices',
    name: 'Accounting',
    slug: 'invoices',
    icon: 'CreditCardIcon',
  },
  {
    url: '/carriers',
    name: 'Carriers',
    slug: 'carriers',
    customIcon: 'carriersIcon',
  },
  {
    url: '/quotes',
    name: 'Bookings',
    slug: 'quotes',
    icon: 'ClipboardIcon',
  },
  {
    url: '/marketing',
    name: 'Marketing',
    slug: 'marketing',
    customIcon: 'marketingIcon',
    children: [
      {
        url: '/marketing/email-accounts',
        name: 'Email Accounts',
        slug: 'marketing-email-accounts',
        icon: 'MailIcon',
      },
      {
        url: '/marketing/campaigns',
        name: 'Campaigns',
        slug: 'marketing-campaigns',
        icon: 'SendIcon',
      },
      {
        url: '/marketing/email-inbox',
        name: 'Inbox',
        slug: 'marketing-emailInbox',
        icon: 'MessageCircleIcon',
      },
      {
        url: '/marketing/crm',
        name: 'CRM',
        slug: 'marketing-crm',
        icon: 'MessageCircleIcon',
      },
      // {
      //   url: '/marketing/analytics',
      //   name: 'Analytics',
      //   slug: 'marketing-analytics',
      //   icon: 'PieChartIcon',
      // },
    ],
  },
];

const navItemMaintenance = [
  {
    url: '/maintenance-v2',
    name: 'Maintenance',
    slug: 'maintenance',
    icon: 'ToolIcon',
  },
  {
    url: '/drivers',
    name: 'Drivers',
    slug: 'driver',
    icon: 'UserIcon',
  },
  { url: '/trucks', name: 'Trucks', slug: 'truck', icon: 'TruckIcon' },
  {
    url: '/trailers',
    name: 'Trailers',
    slug: 'trailer',
    customIcon: 'trailer',
  },
];

/*
 * TODO : return navbar based on user role
 */
export default {
  super_admin: navItemSuperAdmin,
  admin: navItemAdmin,
  dispatcher: navItemDispatcher,
  warehouse_operator: navItemWarehouseOperator,
  tag_operator: navItemTagOperator,
  shipperBroker: navItemShipperBroker,
  maintenance: navItemMaintenance,
};
