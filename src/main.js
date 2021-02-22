/*
 * @Descripttion: 
 * @version: 
 * @Author: guanxiaoxin
 * @Date: 2021-02-20 14:28:38
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-02-22 09:32:32
 * @FilePath: /ams_pc/src/main.js
 */
// import { createApp } from 'vue' 

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './permission' // 权限部分匹配后端路由，后端无接口，有了接口权限再打开并且修改permission部分
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'
import Antd from 'ant-design-vue'
Vue.use(Antd);
import ProLayout, { PageHeaderWrapper } from '@ant-design-vue/pro-layout'
Vue.component('pro-layout', ProLayout)
Vue.component('page-container', PageHeaderWrapper)
Vue.component('page-header-wrapper', PageHeaderWrapper)

new Vue({
    store,
    router,
    render: h => h(App),

}).$mount('#app')