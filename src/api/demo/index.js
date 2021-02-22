/*
 * @Descripttion:
 * @version:
 * @Author: guanxiaoxin
 * @Date: 2021-02-20 16:20:06
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-02-20 16:34:41
 * @FilePath: /ams_pc/src/api/demo/index.js
 */

// 事例仅供参考
import { axios } from '@/util/request.js'

export const API = {
    user: {
        getCamApprovalPageList,
    },
    role: {
        CamApprovalPageList
    },
    limits: {
        CamApprovalPageList,
    }
}


/**
 * 用户列表
 * @param params
 */
function getCamApprovalPageList(params) {
    return axios({
        url: 'ams-weuser/v1/users',
        method: 'get',
        params: params,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })
}



/**
 * 禁用
 * @data data
 */
function CamApprovalPageList(data) {
    return axios({
        url: 'ams-weuser/v1/users/change-state',
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    })
}


