import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Flexboxgrid from 'flexboxgrid';
import HelloWorld from '@/components/HelloWorld.vue';
import index from '@/components/Rpg.vue';
import Cadastro from '@/components/Cadastro.vue';

const router = new VueRouter({
  routes: [
    {
      path: '',
      name: 'index',
      component: HelloWorld
    },
    {
      path: '/rpg',
      name: 'rpg',
      component: index
    },
    {
      path: '/rpg/cadastro',
      name: 'cadastro',
      component: Cadastro
    }
  ]
});

Vue.use(VueRouter);
Vue.use(Flexboxgrid);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
