/*
 * @Author: By
 * @Version: 2.0
 * @Date: 2022-03-07 20:19:00
 * @LastEditors: By
 * @LastEditTime: 2022-03-08 14:30:54
 * @Description: 通用防抖方法
 * @FilePath: \v3-admin\src\utils\useDebounce.ts
 */

/**
 * @description:
 * @param {*} fn 操作触发的函数
 * @param {*} callback 防抖结束后回调函数
 * @param {*} timeout 防抖延迟
 */
export function debounce(e, timeout = 1000 * 1) {
    if (e.disable === true) {
        return console.log('防抖作用于：' + e.fn.name)
    } else {
        e.disable === true
        const timeoutPromise = new Promise(res => {
            setTimeout(res, timeout)
        })
        Promise.all([e.fn(), timeoutPromise]).finally(() => {
            e.disable === false
            e.callback && e.callback()
        })
    }
}
