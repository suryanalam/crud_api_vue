import { createRouter, createWebHistory } from 'vue-router';
import UsersList from '../views/UsersList.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'users_list',
      component: UsersList
    },
    {
      path: '/add',
      name: 'add_user',
      component: () => import('../views/AddUser.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit_user',
      component: () => import('../views/EditUser.vue')
    }
  ]
})

export default router
