import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import VueRouter from 'vue-router';
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
