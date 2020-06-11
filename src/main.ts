import Vue from 'vue'
import App from './App.vue'
import router from './router'
import image from './assets/images/nlogs.jpg'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
