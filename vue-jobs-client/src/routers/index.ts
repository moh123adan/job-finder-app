import { useAuthStore } from '@/stores/auth'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/auth/LoginView.vue'
import Jobs from '@/components/Jobs.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
            // meta: { requiresGuest: true }
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/auth/RegisterView.vue'),
            meta: { requiresGuest: true }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: Jobs,
            // meta: { requiresAuth: true }
        },
        {
            path: '/add/job',
            name: 'job',
            component: () => import('../views/auth/AddJobView.vue'),
            // meta: { requiresAuth: true }
        },
        {
            path: '/user',
            name: 'user',
            component: () => import('../views/auth/UserView.vue'),
            meta: { requiresAuth: true }
        }
    ]
})

router.beforeResolve(async (to, from, next) => {
    const authStore = useAuthStore()

    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        return next({ name: 'login', query: { redirect: to.fullPath } })
    } else if (to.meta.requiresGuest && authStore.isAuthenticated) {
        return next({ name: 'home' })
    } else {
        return next()
    }
})

export default router