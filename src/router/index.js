import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/screens/Home.vue'
import MainLayout from '../layouts/MainLayout.vue'
import WriteArticle from '../screens/WriteArticle.vue'
import ArticlePage from '../screens/ArticlePage.vue'
import Register from '../screens/Register.vue'
import Login from '../screens/Login.vue'
import Profile from '../screens/Details.vue'
import MyArticles from '../screens/MyArticles.vue'
import Password from '../screens/Password.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            layout: 'MainLayout',
        },
    },
    {
        path: '/write',
        name: 'WriteArtcile',
        component: WriteArticle,
        meta: {
            layout: 'MainLayout',
        },
    },
    {
        path: '/article',
        name: 'ArticlePage',
        component: ArticlePage,
        meta: {
            layout: 'MainLayout',
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            layout: 'MainLayout',
        },
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            layout: 'MainLayout',
        },
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: {
            layout: 'MainLayout',
        },
    },
    {
        path: '/my_articles',
        name: 'MyArticles',
        component: MyArticles,
        meta: {
            layout: 'MainLayout',
        },
    },
    {
        path: '/change_password',
        name: 'Password',
        component: Password,
        meta: {
            layout: 'MainLayout',
        },
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
