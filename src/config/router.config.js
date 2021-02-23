// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts'
// import { bxAnaalyse } from '@/core/icons'

const RouteView = {
    name: 'RouteView',
    render: h => h('router-view')
}

const Index = resolve => require(['@/views/userManage/index.vue'], resolve);


// const routes = [
//     {
//         path: '/',
//         name: 'Home',
//         component: Home
//     },
//     {
//         path: '/about',
//         name: 'About',
//         // route level code-splitting
//         // this generates a separate chunk (about.[hash].js) for this route
//         // which is lazy-loaded when the route is visited.
//         component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//     }
// ]

export const asyncRouterMap = [
    {
        path: '/',
        name: 'index',
        component: BasicLayout,
        redirect: '/demo/index',
        children: [
            // demo
            {
                path: '/demo',
                name: 'demo',
                component: RouteView,
                meta: { title: 'demo管理', keepAlive: true, icon: 'dashboard', permission: ['dashboard'] },
                children: [
                    {
                        path: '/demo/index',
                        name: 'demo',
                        component: () => import('@/views/demo/index.vue'),
                        meta: { title: 'demo', keepAlive: false, permission: ['dashboard'] }
                    },
                    // 外部链接
                    {
                        path: 'https://www.baidu.com/',
                        name: 'Monitor',
                        meta: { title: '外部地址百度', target: '_blank' }
                    },
                    {
                        path: '/demo2/index',
                        name: 'demo2',
                        component: () => import('@/views/demo2/index.vue'),
                        meta: { title: 'demo2', keepAlive: true, permission: ['dashboard'] }
                    }
                ]
            },
            // user
            {
                path: '/userManage/index',
                name: 'index',
                component: () => import('@/views/userManage/index.vue'),
                meta: { title: '用户管理', keepAlive: false, icon: 'table', permission: ['table'], hiddenHeaderContent: true, },
            },
        ]
    },

    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
]


// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     asyncRouterMap
// })

// export default router


/**
 * 基础路由
 * @type { *[] }
 */
// export const constantRouterMap = [
//     {
//         path: '/user',
//         component: UserLayout,
//         redirect: '/user/login',
//         hidden: true,
//         children: [
//             {
//                 path: 'login',
//                 name: 'login',
//                 component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
//             },
//             {
//                 path: 'register',
//                 name: 'register',
//                 component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
//             },
//             {
//                 path: 'register-result',
//                 name: 'registerResult',
//                 component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
//             },
//             {
//                 path: 'recover',
//                 name: 'recover',
//                 component: undefined
//             }
//         ]
//     },

//     {
//         path: '/404',
//         component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
//     }
// ]
