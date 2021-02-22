/*
 * @Descripttion: 
 * @version: 
 * @Author: guanxiaoxin
 * @Date: 2021-02-21 18:17:08
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-02-21 18:17:11
 * @FilePath: /ams_pc/src/utils/domUtil.js
 */
import config from '@/config/defaultSettings'

export const setDocumentTitle = function (title) {
    document.title = title
    const ua = navigator.userAgent
    // eslint-disable-next-line
    const regex = /\bMicroMessenger\/([\d\.]+)/
    if (regex.test(ua) && /ip(hone|od|ad)/i.test(ua)) {
        const i = document.createElement('iframe')
        i.src = '/favicon.ico'
        i.style.display = 'none'
        i.onload = function () {
            setTimeout(function () {
                i.remove()
            }, 9)
        }
        document.body.appendChild(i)
    }
}

export const domTitle = config.title
