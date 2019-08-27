import HelloWorld from '@/components/HelloWorld.vue';
import index from '@/components/Rpg.vue';
import Cadastro from '@/components/Cadastro.vue';
import UsuarioCadastro from '@/components/LoginCadastro.vue';

export default [
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
    },
    {
        path: '/login/cadastro',
        name: 'usuarioCadastro',
        component: UsuarioCadastro
    }
];
