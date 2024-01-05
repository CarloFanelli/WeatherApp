import { createWebHashHistory, createRouter } from "vue-router";

import AppHome from './view/AppHome.vue';
import AppResults from './view/AppResults.vue';
const routes = [
    { path: '/', name: 'Home', component: AppHome },
    { path: '/results', name: 'Results', component: AppResults },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});


export { router };