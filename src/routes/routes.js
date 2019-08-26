import VueRouter from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: HelloWorld
        }
    ]
});

module.exports = router;