/*
 * @Descripttion:
 * @version:
 * @Author: guanxiaoxin
 * @Date: 2021-02-20 17:13:52
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-02-21 22:29:32
 * @FilePath: /ams_pc/src/config/defaultSettings.js
 */

export default {
    navTheme: 'dark', // theme for nav menu
    primaryColor: '#F5222D', // primary color of ant design
    layout: 'sidemenu', // nav menu position: `sidemenu` or `topmenu`
    contentWidth: 'Fixed', // layout of content: `Fluid` or `Fixed`, only works when layout is topmenu
    fixedHeader: false, // sticky header
    fixSiderbar: false, // sticky siderbar
    colorWeak: false,
    menu: {
        locale: true
    },
    title: '后台管理系统',
    pwa: false,
    iconfontUrl: '',
    production: process.env.NODE_ENV === 'production' && process.env.VUE_APP_PREVIEW !== 'true'
}
