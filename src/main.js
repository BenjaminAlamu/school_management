import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import VueRouter from 'vue-router';
import VueElementLoading from 'vue-element-loading'
Vue.component('VueElementLoading', VueElementLoading)
import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'
import VueSwal from 'vue-swal'
Vue.use(VueSwal)
import router from './router';
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
