import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import VueRouter from 'vue-router';
import VueElementLoading from 'vue-element-loading'
Vue.component('VueElementLoading', VueElementLoading)
import VueSwal from 'vue-swal'
Vue.use(VueSwal)
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
import router from './router';
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// Vue.use(BootstrapVue)
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
