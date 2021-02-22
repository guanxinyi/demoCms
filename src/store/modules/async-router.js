/*
 * @Descripttion: 
 * @version: 
 * @Author: guanxiaoxin
 * @Date: 2021-02-21 09:51:48
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-02-21 18:49:07
 * @FilePath: /ams_pc/src/store/modules/async-router.js
 */
/**
 * 向后端请求用户的菜单，动态生成路由
 */
import { asyncRouterMap } from '@/config/router.config'
import { generatorDynamicRouter } from '@/router/generator-routers'

const permission = {
    state: {
        routers: asyncRouterMap,
        addRouters: []
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
                const { token } = data
                generatorDynamicRouter(token).then(routers => {
                    commit('SET_ROUTERS', routers)
                    resolve()
                })
            })
        }
    }
}

export default permission
