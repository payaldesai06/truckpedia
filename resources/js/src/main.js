/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import Vue from 'vue';
import App from './App.vue';
import accessMixin from './mixins/accessMixin';

// Vuesax Component Framework
import Vuesax from 'vuesax';

Vue.use(Vuesax);

// import Vuetify from 'vuetify'
// Vue.use(Vuetify)

// axios
import axios from './axios.js';

Vue.prototype.$http = axios;

// Filters
import './filters/filters.js';

// Theme Configurations
import '../themeConfig.js';

// Globally Registered Components
import './globalComponents.js';

// Vue Router
import router from './router';

// Vuex Store
import store from './store/store';

// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer';

Vue.use(VueHammer);

// VeeValidate
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

import VueColumnsResizable from 'vue-columns-resizable';
Vue.use(VueColumnsResizable);

import VueClipboard from 'vue-clipboard2';
VueClipboard.config.autoSetContainer = true; // add this line
Vue.use(VueClipboard);

// PrismJS
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

import * as VueGoogleMaps from 'vue2-google-maps';
Vue.use(VueGoogleMaps, {
  load: {
    // Add your API key here
    key: process.env.MIX_GOOGLE_MAP_API_KEY,
    libraries: 'places', // This is required if you use the Auto complete plug-in
  },
});

import Dropdown from 'primevue/dropdown';
Vue.component('Dropdown', Dropdown);

import Checkbox from 'primevue/checkbox';
Vue.component('Checkbox', Checkbox);

import 'vue-multiselect/dist/vue-multiselect.min.css';
import Multiselect from 'vue-multiselect';
Vue.component('Multiselect', Multiselect);

import Draggable from 'vuedraggable';
Vue.component('Draggable', Draggable);

import vSelect from 'vue-select';
Vue.component('vSelect', vSelect);

import DataTable from 'primevue/datatable';
Vue.component('DataTable', DataTable);

import MultiSelect from 'primevue/multiselect';
Vue.component('MultiSelect', MultiSelect);

import Dialog from 'primevue/dialog';
Vue.component('Dialog', Dialog);

import Column from 'primevue/column';
Vue.component('Column', Column);

import ColumnGroup from 'primevue/columngroup';
Vue.component('ColumnGroup', ColumnGroup);

import Row from 'primevue/row';
Vue.component('Row', Row);

import InputText from 'primevue/inputtext';
Vue.component('InputText', InputText);

import Panel from 'primevue/panel';
Vue.component('Panel', Panel);

import Card from 'primevue/card';
Vue.component('Card', Card);

import Knob from 'primevue/knob';
Vue.component('Knob', Knob);

import Tooltip from 'primevue/tooltip';
Vue.directive('primeVueTooltip', Tooltip);

import OverlayPanel from 'primevue/overlaypanel';
Vue.component('OverlayPanel', OverlayPanel);

import AutoComplete from 'primevue/autocomplete';
Vue.component('AutoComplete', AutoComplete);

import Tag from 'primevue/tag';
Vue.component('Tag', Tag);

import dayjs from 'dayjs';
const dayjsUtc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone'); // dependent on utc plugin
const advancedFormat = require('dayjs/plugin/advancedFormat');
dayjs.extend(dayjsUtc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);
Vue.prototype.$dayjs = dayjs;

// Vue select css
// Note: In latest version you have to add it separately
// import 'vue-select/dist/vue-select.css';

/**
 * Stripe Plugin
 */
import stripePlugin from '@/plugins/stripePlugin';
Vue.use(stripePlugin);

/** Importing flatpickr global component */
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
Vue.use(flatPickr);

import vClickOutside from 'v-click-outside';
Vue.use(vClickOutside);

import PortalVue from 'portal-vue';
Vue.use(PortalVue);

/** Image Viewer **/
import 'viewerjs/dist/viewer.css';
import VueViewer from 'v-viewer';
Vue.use(VueViewer, {
  defaultOptions: {
    zIndex: 99999,
  },
});

/** Video Player **/
import VueDPlayer from 'vue-dplayer';
import 'vue-dplayer/dist/vue-dplayer.css';
Vue.use(VueDPlayer);

/** V-tooltip **/
import VTooltip from 'v-tooltip';
Vue.use(VTooltip);

// Custom Elements
import vueCustomElement from 'vue-custom-element';
import EmailPreview from './components/customElements/EmailPreview.vue';
Vue.use(vueCustomElement);
Vue.customElement('email-preview', EmailPreview, {
  shadow: true,
  beforeCreateVueInstance(root) {
    const rootNode = root.el.getRootNode();

    if (rootNode instanceof ShadowRoot) {
      root.shadowRoot = rootNode;
    } else {
      root.shadowRoot = document.head;
    }
    return root;
  },
});

Vue.config.productionTip = false;
Vue.mixin(accessMixin);

import VueGtag from 'vue-gtag';
import config from './config/constants.js';
Vue.use(
  VueGtag,
  {
    config: { id: config.googleAnalyticsMeasurementId },
  },
  router
);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
