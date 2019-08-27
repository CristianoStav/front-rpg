import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Routes from './routes/routes';
import Flexboxgrid from 'flexboxgrid';

Vue.use(VueRouter);
Vue.use(Flexboxgrid);

const router = new VueRouter({
  routes: Routes
});

Vue.config.productionTip = false;

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app');
