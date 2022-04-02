/*
 * @Author: By
 * @Date: 2022-04-01 14:47:28
 * @LastEditTime: 2022-04-01 15:55:41
 * @LastEditors: By
 * @Description: 前端分页类
 * @FilePath: \vue3-admin\src\utils\pagination.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */

/**
 * @description: 分页通用方法
 * @param {*} data 源数据
 * @param {number} pageSize 每页条数
 * @param {number} pageNo 当前页数
 * @return {*} 分页后数据
 */
export function pagination(data: [], pageSize: number, pageNo: number) {
    if (!data || !(data instanceof Array)) return
    if (isNaN(pageSize) || pageSize <= 0 || isNaN(pageNo) || pageNo <= 0) return
    // 起始index
    const start: number = pageSize * (pageNo - 1) + 1
    // 结束index
    const end: number = pageSize * pageNo
    // 总条数
    const total = data.length

    if (start > total) return []
    if (start < total && end > total) return data.slice(start - 1, total)
    if (start < total && end <= total) return data.slice(start - 1, end)
}