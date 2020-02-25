// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import MdButton from 'vue-material/dist/components/MdButton';
import MdCard from 'vue-material/dist/components/MdCard';
import MdRipple from 'vue-material/dist/components/MdRipple';
import MdTabs from 'vue-material/dist/components/MdTabs';
import MdChips from 'vue-material/dist/components/MdChips';
import MdElevation from 'vue-material/dist/components/MdElevation';
import MdToolbar from 'vue-material/dist/components/MdToolbar';
import MdDialog from 'vue-material/dist/components/MdDialog';
import MdSwitch from 'vue-material/dist/components/MdSwitch';
import MdContent from 'vue-material/dist/components/MdContent';
import MdLayout from 'vue-material/dist/components/MdLayout';
import MdAvatar from 'vue-material/dist/components/MdAvatar';
import MdProgress from 'vue-material/dist/components/MdProgress';
import MdIcon from 'vue-material/dist/components/MdIcon';
import MdEmptyState from 'vue-material/dist/components/MdEmptyState';


import 'vue-material/dist/vue-material.min.css';
// import 'vue-material/dist/theme/default-dark.css'; // This line here
// import 'vue-material/dist/theme/default.css'; // This line here
import VueTimeago from 'vue-timeago';

import VueAnalytics from 'vue-analytics';

import VueProgressiveImage from 'vue-progressive-image';

import VueMasonry from 'vue-masonry-css';

import Vue from 'vue';
import App from './App';
import router from './router';

Vue.use(VueAnalytics, {
  id: 'UA-120604653-1',
  router,
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production',
  },
});

Vue.use(VueMasonry);

Vue.use(VueProgressiveImage, {
  blur: 2,
  // delay: 2000,
});

Vue.use(VueTimeago, {
  name: 'Timeago', // Component name, `Timeago` by default
  locale: undefined, // Default locale
  /* locales: {
    'zh-CN': require('date-fns/locale/zh_cn'),
    'ja': require('date-fns/locale/ja'),
  } */
});


Vue.use(MdButton);
Vue.use(MdCard);
Vue.use(MdRipple);
// Vue.use(MdAnimation);
Vue.use(MdTabs);
Vue.use(MdChips);
Vue.use(MdElevation);
Vue.use(MdToolbar);
Vue.use(MdDialog);
Vue.use(MdSwitch);
Vue.use(MdContent);
Vue.use(MdLayout);
Vue.use(MdAvatar);
Vue.use(MdProgress);
Vue.use(MdIcon);
Vue.use(MdEmptyState);

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  render: (h) => h(App),
}).$mount('#app');
