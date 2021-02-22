
import axios from 'axios'
import store from '../store'
import { getxsign } from '@/utils/index.js'
// import message from 'ant-design-vue/es/message'
import notification from 'ant-design-vue/es/notification'
import jsonlint from '@/util/jsonlint.js' // number类型的id过长，浏览器解决数据，超过2的53次方的数据全部省略后面的内容，导致id不一致
import dataDB from 'amx-indexeddb';
const MTF_Alpha_1 = new dataDB.db('MTF_Alpha_1');

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    timeout: 60000,
    transformResponse: [
        function (data) {
            return jsonlint.parse(data)
        }
    ]
})

const err = (error) => {
    if (error.response) {
        const token = sessionStorage.getItem('ACCESS_TOKEN')
        if (error.response.status === 500) {
            notification.error({
                message: '服务器错误',
                description: '请联系管理员或稍后重试'
            })
        }

        if (error.response.status === 403) {
            notification.error({
                message: '禁止访问',
                description: '您没有权限'
            })
            // setTimeout(() => {
            //  router.push({name:"index"})
            // }, 3000);
        }
        if (error.response.status == 401) {

            notification.error({
                message: '身份信息已过期',
                description: '请重新登入'
            })
            setTimeout(() => {
                // 处理token过期
                store.dispatch('Logout').then((res) => {
                })
            }, 3000);

        }
    }
    let config = error.config
    if (!config || !config.retry) {
        if (error.message.includes('timeout')) {
            notification.error({
                message: '数据请求超时',
                description: '请联系管理员或稍后重试'
            })
        }
        return Promise.reject(error);
    }
    config.__retryCount = config.__retryCount || 0;
    if (config.__retryCount > config.retry) {
        if (error.message.includes('timeout')) {
            notification.error({
                message: '数据请求超时',
                description: '请联系管理员或稍后重试'
            })
        }
        return Promise.reject(error);
    }

    config.__retryCount += 1;
    var backoff = new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, config.retryDelay || 1);
    });
    return backoff.then(function () {
        return instance(config);
    });
}

instance.interceptors.request.use(function (config) {
    const token = sessionStorage.getItem('ACCESS_TOKEN')
    const ams_corpId = sessionStorage.getItem('ams_corpId')
    config.headers['corpId'] = ams_corpId ? ams_corpId : process.env.VUE_APP_CORP_ID
    config.headers['x-token'] = token
    config.headers['x-sign'] = getxsign(process.env.VUE_APP_API_BASE_URL + config.url)

    return config
}, err)

instance.interceptors.response.use((response) => {
    return response.data
}, err)


export {
    instance as axios,
}


