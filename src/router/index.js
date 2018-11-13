import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AppHome from '@pages/home/AppHome'
import AppList from '@pages/list/AppList'
import AppMine from '@pages/mine/AppMine'
import AppDetails from '@pages/details/AppDetails'
import AppNotFound from '@pages/notfound/AppNotFound'

const routes = [
    {
        path: '/',
        redirect: {name: 'home'}
    },
    {
        path: '/home',
        name: 'home',
        component: AppHome
    },
    {
        path: '/list',
        name: 'list',
        component: AppList
    },
    {
        path: '/mine',
        name: 'mine',
        component: AppMine
    },
    {
        path: '/details/:id',
        name: 'details',
        component: AppDetails
    },
    {
        path: '/notfound',
        name: 'notfound',
        component: AppNotFound
    },
    {
        path: '**',
        redirect: '/notfound'
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router