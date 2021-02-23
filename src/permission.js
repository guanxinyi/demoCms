/*
 * @Descripttion: 
 * @version: 
 * @Author: guanxiaoxin
 * @Date: 2021-02-21 17:48:12
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-02-22 18:10:50
 * @FilePath: /demoCms/src/permission.js
 */
import router from './router'
import store from './store'
import storage from 'store'
import NProgress from 'nprogress' // progress bar
import '@/components/NProgress/nprogress.less' // progress bar custom style
// import notification from 'ant-design-vue/es/notification'
import { setDocumentTitle, domTitle } from '@/utils/domUtil'
import { ACCESS_TOKEN } from '@/store/mutation_types'
import { i18nRender } from '@/locales'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const allowList = ['login', 'register', 'registerResult', 'dashboard'] // no redirect allowList
const loginRoutePath = '/user/login'
const defaultRoutePath = '/dashboard/workplace'

router.beforeEach((to, from, next) => {
    NProgress.start() // start progress bar
    to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(`${i18nRender(to.meta.title)} - ${domTitle}`))

    // router.addRoutes(store.getters.addRouters)
    // 请求带有 redirect 重定向时，登录自动重定向到该地址
    const redirect = decodeURIComponent(from.query.redirect || to.path)
    if (to.path === redirect) {
        console.log('%c 🥔 redirect: ', 'font-size:20px;background-color: #FCA650;color:#fff;', redirect);
        next()
        // set the replace: true so the navigation will not leave a history record
        // next({ ...to, replace: true })
    } else {
        // 跳转到目的路由
        next({ path: redirect })
    }

    // console.log('%c 🥘 storage.get(ACCESS_TOKEN): ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', storage.get(ACCESS_TOKEN));
    // routers
    // router.addRoutes(store.getters.routers)
    // console.log('%c 🍰 store.getters.routers: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', store.getters.addRouters);

    /* has token */
    if (storage.get(ACCESS_TOKEN)) {
        if (to.path === loginRoutePath) {
            next({ path: defaultRoutePath })
            NProgress.done()
        } else {
            // router.addRoutes(store.getters.addRouters)

            // check login user.roles is null
            // if (store.getters.roles.length === 0) {
            //     // request login userInfo
            //     store
            //         .dispatch('GetInfo')
            //         .then(res => {
            //             const roles = res.result && res.result.role
            //             // generate dynamic router
            //             store.dispatch('GenerateRoutes', { roles }).then(() => {
            //                 // 根据roles权限生成可访问的路由表
            //                 // 动态添加可访问路由表
            //                 router.addRoutes(store.getters.addRouters)
            //                 // 请求带有 redirect 重定向时，登录自动重定向到该地址
            //                 const redirect = decodeURIComponent(from.query.redirect || to.path)
            //                 if (to.path === redirect) {
            //                     // set the replace: true so the navigation will not leave a history record
            //                     next({ ...to, replace: true })
            //                 } else {
            //                     // 跳转到目的路由
            //                     next({ path: redirect })
            //                 }
            //             })
            //         })
            //         .catch(() => {
            //             notification.error({
            //                 message: '错误',
            //                 description: '请求用户信息失败，请重试'
            //             })
            //             // 失败时，获取用户信息失败时，调用登出，来清空历史保留信息
            //             store.dispatch('Logout').then(() => {
            //                 next({ path: loginRoutePath, query: { redirect: to.fullPath } })
            //             })
            //         })
            // } else {
            //     next()
            // }
        }
    } else {
        if (allowList.includes(to.name)) {
            // 在免登录名单，直接进入
            next()
        } else {
            next({ path: loginRoutePath, query: { redirect: to.fullPath } })
            NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
        }
    }
})

router.afterEach(() => {
    NProgress.done() // finish progress bar
})
