import { createRouter, createWebHistory } from 'vue-router';

import Characters from '../pages/Characters.vue';


const routes = [
  { path: '/', component: Characters },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router