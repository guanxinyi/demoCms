/*
 * @Descripttion: 
 * @version: 
 * @Author: guanxiaoxin
 * @Date: 2020-11-25 11:45:03
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-02-09 16:11:44
 * @FilePath: /ams-weuser-web/src/util/index.js
 */

import md5 from 'js-md5'
import Vue from 'vue'



/**
 * CSRF获取签名
 * @param APIPATH 请求API地址去掉域名和？参数的
 * @returns {string} 签名
 */
export const getxsign = (APIPATH) => {

    let accountId = sessionStorage.getItem('ams_accountId');

    if (!accountId) return '';
    let ts = (new Date().getTime() + parseInt(Math.random() * 1000)).toString();
    if (sessionStorage.ts) {
        ts = (sessionStorage.ts === ts) ? (new Date().getTime()).toString() : ts;
    }
    sessionStorage.setItem("ts", ts);
    let first = 9 - parseInt(accountId.substring(0, 1));
    let second = 9 - parseInt(ts.substr(ts.length - 1, 1));
    let xsign = accountId + first.toString() + second.toString() + ts;
    if (APIPATH) {
        var newPath = '';
        if (APIPATH.indexOf('.cn') != -1) {
            // 测试环境
            let path = APIPATH.split('.cn')[1];
            newPath = path.split('?')[0];

        }
        else if (APIPATH.indexOf('.com') != -1) {
            // 生产环境
            let path = APIPATH.split('.com')[1];
            newPath = path.split('?')[0];

        } else {
            newPath = APIPATH.split('?')[0];
        }
    }
    let newXsign = md5(newPath + xsign) + xsign;
    return newXsign;
}

