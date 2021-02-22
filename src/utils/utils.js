/*
 * @Descripttion:
 * @version:
 * @Author: guanxiaoxin
 * @Date: 2021-02-20 14:30:45
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-02-20 14:35:11
 * @FilePath: /ams_pc/src/utils/utils.js
 */
'use strict'
/**
 * 通用对象，封装了一些常用的方法
 * @var {Object}
 * @property {Function} deepCope
 * @property {Function} isNull
 * @property {Function} isJson
 * @property {Function} getUrlParam
 * @property {Function} push
 * @property {object} localStora
 * @property {object} cookieOpt
 * @property {object} sessionStora
 */

export const util = {
    /**
     * 深拷贝方法
     * @member: 
     * @param {*}
     * @return {*}
     */
    deepCope: (obj) => {
        const isObject = args => (typeof args === 'object' || typeof args === 'function') && typeof args !== null
        if (!isObject) throw new Error('Not Reference Types')
        let newObj = Array.isArray(obj) ? [...obj] : { ...obj }
        Reflect.ownKeys(newObj).map(key => {
            newObj[key] = isObject(obj[key]) ? util.deepCope(obj[key]) : obj[key]
        })
        return newObj
    },

    /**
       * 判断是否为空，0、false、空对象、空数组、空字符串、Nan、undefined都返回true
       * @member {Function}
       * @param {*} str
       * @returns {boolean}
       */
    isNull: (str) => {
        if (typeof str === 'object') {
            return str === null || Object.keys(str).length <= 0
        } else if (typeof str === 'string') {
            return str.replace(/(^\s*)|(\s*$)/g, '').length === 0 || Number(str) === 0
        } else {
            return typeof str === 'undefined' || isNaN(str) || !str
        }
    },

    /**
       * 判断是否json格式的字符串
       * @member {Function}
       * @param {string} str
       * @returns {boolean}
       */
    isJson: (str) => {
        if (typeof str === 'string') {
            try {
                var obj = JSON.parse(str)
                return !!(obj && typeof obj === 'object')
            } catch (e) {
                return false
            }
        }
    },

    /**
       * 获取当前地址栏里的指定get参数
       * @member {Function}
       * @param {string} name
       * @returns {string|null}
       */
    getUrlParam: (name) => {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
        var r = window.location.search.substr(1).match(reg)
        if (r != null) return decodeURI(r[2])
        return null
    },

    /**
      * 给对象添加新元素
      * @member {Function}
      * @param {object} obj
      * @param {string} str
      * @param {*|null} value
      * @returns {object}
      */
    push: (obj, str, value) => {
        obj[str] = value
        return obj
    },

    /**
       * 封装本地永久存储localStorage对象
       * @member {Object}
       * @property {Function} set
       * @property {Function} get
       * @property {Function} remove
       * @property clear
       */
    'localStora': {
        /**
             * 对value进行是否json对象的验证，如果是自动转换为字符串
             * @member {Function}
             * @param {string} key
             * @param {string} value
             * @returns {void}
             */
        set: (key, value) => {
            localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value)
        },
        /**
             * 自动对value进行json parse 字符串转化为对象
             * @member {Function}
             * @param {string} key
             * @returns {string|Object}
             */
        get: (key) => {
            return util.isJson(localStorage.getItem(key)) ? JSON.parse(localStorage.getItem(key)) : localStorage.getItem(key)
        },
        /**
             * 指定key删除本地存储
             * @member {Function}
             * @param {string} key
             * @returns {void}
             */
        remove: (key) => {
            localStorage.removeItem(key)
        },
        /**
             * 清空全部本地存储
             * @member {sessionStorage.clear()}
             */
        clear: () => localStorage.clear()
    },

    /**
         * 对value进行是否json对象的验证，如果是自动转换为字符串
         * @member {Function}
         * @param {string} key
         * @param {string} value
         * @returns {void}
         */
    'cookieOpt': {
        set: (key, value, expiredays) => {
            var exdate = new Date()
            exdate.setDate(exdate.getDate() + expiredays)
            document.cookie = key + '=' + escape(value) +
                ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
        },
        get: (key) => {
            if (document.cookie.length > 0) {
                var start = document.cookie.indexOf(key + '=')
                if (start !== -1) {
                    start = start + key.length + 1
                    var end = document.cookie.indexOf(';', start)
                    if (end === -1) end = document.cookie.length
                    return unescape(document.cookie.substring(start, end))
                }
            }
            return ''
        }
    },

    /**
      * 封装本地临时存储sessionStorage对象
      * @member {Object}
      * @property {Function} set
      * @property {Function} get
      * @property {Function} remove
      * @property clear
      */
    'sessionStora': {
        /**
             * 对value进行是否json对象的验证，如果是自动转换为字符串
             * @member {Function}
             * @param {string} key
             * @param {string} value
             * @returns {void}
             */
        set: (key, value) => {
            value = typeof value === 'object' ? JSON.stringify(value) : value
            sessionStorage.setItem(key, value)
        },
        /**
             * 自动对value进行json parse 字符串转化为对象
             * @member {Function}
             * @param {string} key
             * @returns {string|Object}
             */
        get: (key) => {
            var value = sessionStorage.getItem(key)
            return util.isJson(value) ? JSON.parse(value) : value
        },
        /**
             * 指定key删除本地存储
             * @member {Function}
             * @param {string} key
             * @returns {void}
             */
        remove: (key) => {
            sessionStorage.removeItem(key)
        },
        /**
             * 清空全部本地存储
             * @member {sessionStorage.clear()}
             */
        clear: sessionStorage.clear()
    },
}
