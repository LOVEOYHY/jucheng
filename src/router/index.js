import Vue from 'vue'

import VueRouter from 'vue-router'
import auth from '@util/auth'
Vue.use(VueRouter)

import AppHome from '@pages/home/AppHome'
import AppList from '@pages/list/AppList'
import AppLogin from '@pages/login/AppLogin'
import AppRegister from '@pages/register/AppRegister'
import AppUserInfo from '@pages/user-info/AppUserInfo'
import AppDetails from '@pages/details/AppDetails'
import AppCities from '@pages/cities/AppCities'
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
        component: AppList,
        // props: true
    },
    {
        path: '/user-info',
        name: 'user-info',
        component: AppUserInfo,
        beforeEnter:  (to, from ,next) => {
            let result = auth.authLogin()
            next(result.id ? true : {name: 'login'})
        }
    },
    {
        path: '/login',
        name: 'login',
        component: AppLogin
    },
    {
        path: '/register',
        name: 'register',
        component: AppRegister
    },
    {
        path: '/details/:id',
        name: 'details',
        component: AppDetails,
        porps: true
    },
    {
        path: '/notfound',
        name: 'notfound',
        component: AppNotFound
    },
    {
        path: '/cities',
        name: 'cities',
        component: AppCities
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