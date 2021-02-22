/*
 * @Descripttion: 
 * @version: 
 * @Author: guanxiaoxin
 * @Date: 2021-02-21 10:03:28
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-02-22 09:34:29
 * @FilePath: /ams_pc/src/store/modules/permission.js
 */
import { asyncRouterMap } from '@/config/router.config'

/**
 * 过滤账户是否拥有某一个权限，并将菜单从加载列表移除
 *
 * @param permission
 * @param route
 * @returns {boolean}
 */
function hasPermission(permission, route) {
    if (route.meta && route.meta.permission) {
        let flag = false
        for (let i = 0, len = permission.length; i < len; i++) {
            flag = route.meta.permission.includes(permission[i])
            if (flag) {
                return true
            }
        }
        return false
    }
    return true
}

/**
 * 单账户多角色时，使用该方法可过滤角色不存在的菜单
 *
 * @param roles
 * @param route
 * @returns {*}
 */
// eslint-disable-next-line
function hasRole(roles, route) {
    if (route.meta && route.meta.roles) {
        return route.meta.roles.includes(roles.id)
    } else {
        return true
    }
}

function filterAsyncRouter(routerMap, roles) {
    const accessedRouters = routerMap.filter(route => {
        if (hasPermission(roles.permissionList, route)) {
            if (route.children && route.children.length) {
                route.children = filterAsyncRouter(route.children, roles)
            }
            return true
        }
        return false
    })
    return accessedRouters
}

const permission = {
    state: {
        routers: asyncRouterMap,
        addRouters: asyncRouterMap //这部分因为没有后端接口 也没用mock数据，所以先写死前端路由，后面有了接口后再根据具体内容修改吧
    },
    mutations: {
        SET_ROUTERS: (state, routers) => {
            state.addRouters = routers
            state.routers = asyncRouterMap.concat(routers)
        }
    },
    actions: {
        GenerateRoutes({ commit }, data) {
            return new Promise(resolve => {
                const { roles } = data
                const accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
                commit('SET_ROUTERS', accessedRouters)
                resolve()
            })
        }
    }
}

export default permission
