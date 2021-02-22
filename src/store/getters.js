/*
 * @Descripttion: 
 * @version: 
 * @Author: guanxiaoxin
 * @Date: 2020-11-26 09:50:30
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-02-20 23:33:56
 * @FilePath: /ams_pc/src/store/getters.js
 */
const getters = {
    device: state => state.app.device,
    collapsed: state => state.app.collapsed,
    menu: state => state.user.menu,
    token: state => state.user.token,
    addRouters: state => state.permission.addRouters,

}

export default getters