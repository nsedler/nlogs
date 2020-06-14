import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import NavBar from './components/NavBar.vue'

Vue.use(VueRouter)

const router = new VueRouter ({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'login',
        meta: { title: 'NLogs | Login' },
        component: Login
    },
    {
        path: '/home',
        name: 'home',
        meta: { title: 'NLogs | Home' },
        component: NavBar
    }]
});
const DEFAULT_TITLE = "Nlogs| Error";
router.afterEach((to, from) => {
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

export default router;
