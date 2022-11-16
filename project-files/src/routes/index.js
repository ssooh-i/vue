import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
			path: '/',
			name: 'defaultLayout',
			component: () => import('@/layouts/DefaultLayout.vue'),
			children: [
                {
                    path: '/',
                    name: 'home',
                    component: ()=> import('@/Home.vue'),
                },
                {
                    path: '/bar',
                    name: 'bar',
                    component: ()=> import('@/components/Bar.vue'),
                },
            ],
        },
        {
			path: '/',
			name: 'emptyLayout',
			component: () => import('@/layouts/EmptyLayout.vue'),
			children: [
                {
                    path: '/login',
                    name: 'login',
                    component: ()=> import('@/Login.vue'),
                },
            ],
        },
    ],
});
export default router;