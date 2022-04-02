/*
 * @Author: By
 * @Version: 2.0
 * @Date: 2022-03-10 16:24:39
 * @LastEditors: By
 * @LastEditTime: 2022-04-01 17:17:27
 * @Description: 时间处理通用类
 * @FilePath: \vue3-admin\src\utils\DateUtil.ts
 */
const DateUtil = {
    // 日期格式化规范
    yyyy_MM_dd_HH_mm_ss: "yyyy-MM-dd HH:mm:ss",
    yyyy_MM_dd_HH_mm: "yyyy-MM-dd HH:mm",
    yyyy_MM_dd: "yyyy-MM-dd",
    yyyy_MM_dd_1: "yyyy/MM/dd",
    yyyyMMdd: "yyyyMMdd",
    HH_mm_ss: "HH:mm:ss",

    /**
     * 判断日期是否为空
     * @param data
     * @returns {boolean}
     */
    isNull: (data) => {
        if (data == null || data == undefined || data == '') {
            return true;
        } else {
            return false;
        }
    },


    /**
     * 判断是否为日期
     * @param date 不支持yyyyMMdd格式
     * @returns {boolean}
     */
    isDate: (date) => {
        if (isNaN(date) && !isNaN(Date.parse(date))) {
            return true;
        } else {
            return false;
        }
    },

    /**
     * Date日期格式化
     * @param date
     * @param pattern 可为空，默认yyyy-MM-dd HH:mm:ss
     * @returns {string}
     */
    format: (date, pattern?) => {
        const yy = date.getFullYear(); //年
        const mm = date.getMonth() + 1; //月
        const dd = date.getDate(); //日
        const hh = date.getHours(); //时
        const ii = date.getMinutes(); //分
        const ss = date.getSeconds(); //秒

        let clock = yy + "-";
        if (mm < 10) clock += "0";
        clock += mm + "-";
        if (dd < 10) clock += "0";
        clock += dd + " ";
        if (hh < 10) clock += "0";
        clock += hh + ":";
        if (ii < 10) clock += '0';
        clock += ii + ":";
        if (ss < 10) clock += '0';
        clock += ss;
        if (DateUtil.isNull(pattern) || pattern == DateUtil.yyyy_MM_dd_HH_mm_ss) {
            return clock;
        } else if (pattern == DateUtil.yyyy_MM_dd) {
            return clock.substring(0, 10);
        } else if (pattern == DateUtil.HH_mm_ss) {
            return clock.substring(11);
        } else if (pattern == DateUtil.yyyy_MM_dd_1) {
            return clock.substring(0, 10).replace(/-/g, '/');
        } else if (pattern == DateUtil.yyyyMMdd) {
            return clock.substring(0, 10).replace(/-/g, '');
        } else if (pattern == DateUtil.yyyy_MM_dd_HH_mm) {
            return clock.substring(0, 16);
        } else {
            return clock;
        }
    },

    /**
     * 获取当前日期
     * @returns {Date}
     */
    getNowDate: function () {
        return new Date();
    },

    /**
     * @description: 获取当前时间
     * @param {*}
     * @return {*} 格式化后的当前时间
     */
    getNowTime: function () {
        return DateUtil.format(new Date()).substring(10)
    },

    /**
     * 获取几天前日期(1代表明天，-1 代表前一天，-2前两天...)
     * @param date 指定日期
     * @param num
     * @param separator 连接符 如果为-,则结果为:yyyy-MM-dd
     */
    getDay: function (date, num, separator) {
        const today = new Date(date);
        const nowTime = today.getTime();
        const ms = 24 * 3600 * 1000 * num;
        today.setTime(Number(nowTime + ms));
        const oYear = today.getFullYear();
        let oMoth = (today.getMonth() + 1).toString();
        if (oMoth.length <= 1) oMoth = '0' + oMoth;
        let oDay = today.getDate().toString();
        if (oDay.length <= 1) oDay = '0' + oDay;
        return oYear + separator + oMoth + separator + oDay;
    },

    /**
     * @description: 获取前几月日期(1代表下月，-1 代表上月，-2上两月...)
     * @param {*} date 指定日期
     * @param {*} num 月跨度
     * @param {*} separator 连接符
     * @return {*} 处理后数据
     */
    getMonth: function (date, num, separator) {
        // debugger
        const today = new Date(date);
        today.setMonth(today.getMonth() + num);
        const oYear = today.getFullYear();
        let oMoth = (today.getMonth() + 1).toString();
        if (oMoth.length <= 1) oMoth = '0' + oMoth;
        const oDay = today.getDate().toString()
        return oYear + separator + oMoth + separator + oDay;
    },

    /**
     * @description: 获取几年前日期
     * @param {*} date 指定日期
     * @param {*} num 年跨度
     * @param {*} separator 连接符
     * @return {*} 处理后数据
     */
    getYear: function (date, num, separator) {
        const today = new Date(date);
        today.setFullYear(today.getFullYear() + num);
        const oMonth = today.getMonth() + 1;
        const oYear = (today.getFullYear()).toString();
        const oDay = today.getDate().toString()
        return oYear + separator + oMonth + separator + oDay;
    },

    /**
     * @description: 获取当月第一天日期
     * @return {String} 
     */
    getOneDayOfMonth: function (date, pattern = 'yyyy-MM-dd') {
        const currentTimeArr = DateUtil.format(date, pattern).split('');
        if (pattern === 'yyyyMMdd') {
            currentTimeArr[6] = '0'
            currentTimeArr[7] = '1'
        } else {
            currentTimeArr[8] = '0'
            currentTimeArr[9] = '1'
        }
        return currentTimeArr.join('')
    },

    /**
     * @description: 获取目标年份第一月第一天
     * @param {*} date 日期对象
     * @param {*} pattern 日期格式
     * @return {string}
     */
    getOneDayOfYear: function (date, pattern = 'yyyy-MM-dd') {
        const currentTimeArr = DateUtil.format(date, pattern).split('');
        if (pattern === 'yyyyMMdd') {
            currentTimeArr[4] = '0'
            currentTimeArr[5] = '1'
            currentTimeArr[6] = '0'
            currentTimeArr[7] = '1'
        } else {
            currentTimeArr[5] = '0'
            currentTimeArr[6] = '1'
            currentTimeArr[8] = '0'
            currentTimeArr[9] = '1'
        }
        return currentTimeArr.join('')
    },

    /**
     * @description: 时间字符串转标准时间
     * @param {type} date
     * @return {*}
     */
    getStandardTime: function (date: string) {
        if (DateUtil.isNull(date)) return
        const milliseconds = new Date(date).getTime();

    },

    /**
     * @description: 获取当前毫秒数
     * @param {type} 
     * @return {*}
     */
    getMilliseconds: function (date = DateUtil.getNowDate()) {
        if (DateUtil.isNull(date)) return
        return new Date(date).getTime()
    }
}

export {
    DateUtil
}
