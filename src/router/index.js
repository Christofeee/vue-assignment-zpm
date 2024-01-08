import { createRouter, createWebHistory } from "vue-router"

import Login from '../layouts/Login.vue'
import Welcome from '../layouts/Welcome.vue'
import CarList from '../layouts/CarList.vue'

const router = createRouter({
    history : createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/welcome',
            name: 'Welcome',
            component: Welcome
        },
        {
            path: '/car-list',
            name: 'Car List',
            component: CarList
        },
    ]
})

export default router