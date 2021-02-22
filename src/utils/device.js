/*
 * @Descripttion: 
 * @version: 
 * @Author: guanxiaoxin
 * @Date: 2020-06-06 17:16:14
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2020-10-14 11:11:37
 */ 
/**
 * @description:监控屏幕宽度
 * @author: SoOnPerson
 * @create: 2019-09-03
 **/
import enquireJs from 'enquire.js' // 引入enquire.js

export const DEVICE_TYPE = {
  DESKTOP: 'desktop',
  TABLET: 'tablet',
  MOBILE: 'mobile'
}

export const deviceEnquire = function (callback) {
  const matchDesktop = {
    match: () => {
      callback && callback(DEVICE_TYPE.DESKTOP)
    }
  }

  const matchLablet = {
    match: () => {
      callback && callback(DEVICE_TYPE.TABLET)
    }
  }

  const matchMobile = {
    match: () => {
      callback && callback(DEVICE_TYPE.MOBILE)
    }
  }
  /**
   * enquireJs.register(mediaQuery, handler).
   * mediaQuery: 字符串，需要响应的媒体。
   * handler: 函数或对象。
   * handler Object:
   * match: 函数。媒体匹配时的回调。
   */
  enquireJs
    .register('screen and (max-width: 576px)', matchMobile) // mobile: 宽度小于576px时判断为mobile
    .register('screen and (min-width: 577px) and (max-width: 1299px)', matchLablet) // 宽度介于577px - 1299px 时判断为平板电脑
    .register('screen and (min-width: 1300px)', matchDesktop) // 宽度大于1300px时判断为pc电脑
}


// const px2remLoader = {
//   loader: 'px2rem-loader',
//   options: {
//     remUnit: 75,
//   }
// }
