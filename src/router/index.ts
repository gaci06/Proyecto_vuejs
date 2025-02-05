import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ToggleMessage from '@/views/ToggleMessage.vue'
import TodoList from '@/views/TodoList.vue';
import Counter from '@/views/Counter.vue';
import Parent from '@/views/Parent.vue';
import LifecycleExample from '@/views/LifecycleExample.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    //Ejercicio_6
    {
      path: '/ToggleMessage',
      name: 'ToggleMessage.vue',
      component: ToggleMessage,
    },
    //Ejercicio_7
    {
      path: '/TodoList',
      name: 'TodoList.vue',
      component: TodoList,
    },
    //Ejercicio_8
    {
      path: '/Counter',
      name: 'Counter.vue',
      component: Counter,
    },
    //Ejercicio_9
    {
      path: '/Parent',
      name: 'Parent.vue',
      component: Parent,
    },
    //Ejercicio_10
    {
      path: '/LifecycleExample',
      name: 'LifecycleExample.vue',
      component: LifecycleExample,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
