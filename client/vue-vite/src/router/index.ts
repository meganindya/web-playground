import { createRouter, createWebHistory } from 'vue-router';

import PageHome from '@/views/PageHome.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'page-home',
            component: PageHome,
        },

        /*
         * dynamic component import creates route level code-splitting
         * generates a separate chunk ([name].[hash].js) for the route
         * chunk is lazy-loaded when the route is visited
         */

        {
            path: '/another',
            name: 'page-another',
            component: () => import('@/views/PageAnother.vue'),
        },
    ],
});

export default router;
