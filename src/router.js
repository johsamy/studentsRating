import VueRouter from 'vue-router'

import Dashboard from './pages/Dashboard'
import Results from './pages/Results'
import Error from './pages/Error'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Dashboard,
        },
        {
            path: '/results',
            component: Results
        },
        {
            path: '/register',
            component: null
        },
        {
            path: '*',
            component: Error
        }
    ]
})

export default router;