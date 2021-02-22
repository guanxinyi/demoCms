/*
 * @Descripttion: 
 * @version: 
 * @Author: guanxiaoxin
 * @Date: 2021-02-20 16:07:03
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-02-21 09:50:12
 * @FilePath: /ams_pc/src/store/modules/app.js
 */

import storage from 'store'
import {
    APP_DEVICE,
    APP_COLLAPSED,
    SIDEBAR_TYPE,
    TOGGLE_MOBILE_TYPE,
    TOGGLE_NAV_THEME,
    TOGGLE_LAYOUT,
    TOGGLE_FIXED_HEADER,
    TOGGLE_FIXED_SIDEBAR,
    TOGGLE_CONTENT_WIDTH,
    TOGGLE_HIDE_HEADER,
    TOGGLE_COLOR,
    TOGGLE_WEAK,
    TOGGLE_MULTI_TAB,
    // i18n
    APP_LANGUAGE
} from '@/store/mutation_types'

const app = {
    state: {
        device: 'desktop',
        collapsed: false,
        sideCollapsed: false,
        isMobile: false,
        theme: 'dark',
        layout: '',
        contentWidth: '',
        fixedHeader: false,
        fixedSidebar: false,
        autoHideHeader: false,
        color: '',
        weak: false,
        multiTab: true,
        lang: 'en-US',
        _antLocale: {}
    },
    actions: {
        Device({ commit }, device) {
            // store.dispatch 触发 分发到mutations
            commit(APP_DEVICE, device)
        },
        Collapsed({ commit }, collapsed) {
            commit(APP_COLLAPSED, collapsed)
        }
    },
    mutations: {
        Device: (state, device) => {
            // store.commit 触发
            state.device = device
            if (device !== 'desktop') {
                state.collapsed = true
            } else {
                state.collapsed = false
            }
        },
        Collapsed: (state, collapsed) => {
            // store.commit 触发
            state.collapsed = collapsed
        },
        [SIDEBAR_TYPE]: (state, type) => {
            state.sideCollapsed = type
            storage.set(SIDEBAR_TYPE, type)
        },
        [TOGGLE_MOBILE_TYPE]: (state, isMobile) => {
            state.isMobile = isMobile
        },
        [TOGGLE_NAV_THEME]: (state, theme) => {
            state.theme = theme
            storage.set(TOGGLE_NAV_THEME, theme)
        },
        [TOGGLE_LAYOUT]: (state, mode) => {
            state.layout = mode
            storage.set(TOGGLE_LAYOUT, mode)
        },
        [TOGGLE_FIXED_HEADER]: (state, mode) => {
            state.fixedHeader = mode
            storage.set(TOGGLE_FIXED_HEADER, mode)
        },
        [TOGGLE_FIXED_SIDEBAR]: (state, mode) => {
            state.fixedSidebar = mode
            storage.set(TOGGLE_FIXED_SIDEBAR, mode)
        },
        [TOGGLE_CONTENT_WIDTH]: (state, type) => {
            state.contentWidth = type
            storage.set(TOGGLE_CONTENT_WIDTH, type)
        },
        [TOGGLE_HIDE_HEADER]: (state, type) => {
            state.autoHideHeader = type
            storage.set(TOGGLE_HIDE_HEADER, type)
        },
        [TOGGLE_COLOR]: (state, color) => {
            state.color = color
            storage.set(TOGGLE_COLOR, color)
        },
        [TOGGLE_WEAK]: (state, mode) => {
            state.weak = mode
            storage.set(TOGGLE_WEAK, mode)
        },
        [APP_LANGUAGE]: (state, lang, antd = {}) => {
            state.lang = lang
            state._antLocale = antd
            storage.set(APP_LANGUAGE, lang)
        },
        [TOGGLE_MULTI_TAB]: (state, bool) => {
            storage.set(TOGGLE_MULTI_TAB, bool)
            state.multiTab = bool
        }
    }
}
export default app
