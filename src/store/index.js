/*
 * @Descripttion: 
 * @version: 
 * @Author: guanxiaoxin
 * @Date: 2020-11-25 15:31:12
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-02-21 10:13:31
 * @FilePath: /ams_pc/src/store/index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import getters from './getters'
import permission from './modules/permission'



Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        app,
        user,
        permission
    },
    state: {

    },
    mutations: {

    },
    getters
})