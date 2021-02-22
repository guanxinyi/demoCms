/*
 * @Author: SoOnPerson
 * @Date: 2020-03-30 21:42:25
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-02-21 18:03:49
 * @FilePath: /ams_pc/src/store/modules/user.js
 * @Description: 用户的一些状态
 */
// import { USER_INFO, USER_TOKEN, MENU } from '../mutation_type'
import Vue from 'vue'
// import { getToken } from '@/api/index'
// import { API } from '@/api/manage'
// import { loginOut } from '@/api/index'

const user = {
    state: {
        info: {},
        token: '',
    },
    actions: {
        // Login: ({ commit }, data) => {
        //   console.info('store actions login')
        //   return new Promise((resolve, reject) => {
        //     getToken(data).then(result => {
        //       if (result.code === 200) {
        //         // 登陆成功
        //         console.info('login success')

        //         // 设置token
        //         commit(USER_TOKEN, result.result.token)
        //         Vue.ls.set(USER_TOKEN, result.result.token, 1000 * 60 * 60 * 4) // 4小时有效

        //         // 设置info
        //         commit(USER_INFO, result.result.info)
        //         Vue.ls.set(USER_INFO, result.result.info)

        //         // commit(MENU, result.result.menu)
        //         // Vue.ls.set(MENU, result.result.menu)
        //         resolve()
        //       } else {
        //         reject(result.msg)
        //       }
        //     }).catch(error => {
        //       reject(error)
        //     })
        //   })
        // },
        // 登出
        Logout({ commit }) {
            return new Promise((resolve, reject) => {
                // sessionStorage.removeItem('ACCESS_TOKEN');
                // router.push({ path: '/loginCode' })
                resolve('/loginCode')
                // loginOut().then((res) => {
                //   sessionStorage.removeItem('ACCESS_TOKEN');
                //   resolve(res)
                //   // Vue.ls.remove(ACCESS_TOKEN)
                //   // commit('SET_ROLES', [])
                // }).catch((err) => {
                //   resolve(err)
                // })
            })
        },
    },
    mutations: {
        // [USER_TOKEN]: (state, token) => {
        //   state.token = token
        // },
        // [USER_INFO]: (state, info) => {
        //   state.info = info
        // },
    }
}
export default user
