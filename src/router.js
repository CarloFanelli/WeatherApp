import { createWebHashHistory, createRouter } from "vue-router";

import AppHome from './view/AppHome.vue';
const routes = [
    { path: '/', name: 'Home', component: AppHome },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});


export { router };