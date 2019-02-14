import VueRouter from 'vue-router';

import DashboardPage from './components/pages/dashboard-page/dashboard-page.component.vue'
import ListPage from './components/pages/list-page/list-page.component.vue'

const routes = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/dashboard',
          },
          {
            path: '/dashboard',
            component: DashboardPage
          },
          {
            path: '/list',
            component: ListPage
          }
    ]
});

export default routes;