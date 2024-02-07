import { createRouter, createWebHashHistory } from "vue-router";
import Home from './viwes/homePage.vue';
import NewBookmark from './viwes/newBookmark.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/new',
    name: 'new',
    component: NewBookmark,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
