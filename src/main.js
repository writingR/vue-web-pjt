import Vue from 'vue';
import App from '@/App.vue';
import router from '@/routes/index';
import store from '@/store/index';
import { formatDate } from '@/utils/filters';

Vue.filter('formatDate', formatDate);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
