/*
 * @Author: BianYu
 * @Date: 2021-10-14 09:32:35
 * @LastEditTime: 2021-11-17 15:46:57
 * @LastEditors: BianYu
 * @Description: 组件通用方法
 * @FilePath: \Note\common\until.js
 * @可以输入预定的版权声明、个性签名、空行等
 */

// 数字处理方法
let NumUtil = {

  /******* 
   * @description: 金额格式化方法 -- 对数字进行三位分割 -- 小数部分只显示两位小数
   * @param {Number} value 待处理金额
   * @return {String}
   */
  amountFormat: function (value) {
    if (!value) return '0'
    var intPart = Number(value).toFixed(0) // 获取整数部分
    var intPartFormat = intPart.toString()
      .replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断
    var floatPart = '.00' // 预定义小数部分
    var value2Array = value.toString().split('.')
    // =2表示数据有小数位
    if (value2Array.length === 2) {
      floatPart = value2Array[1].toString() // 拿到小数部分
      if (floatPart.length === 1) {
        // 补0
        return intPartFormat + '.' + floatPart + '0'
      } else {
        return intPartFormat + '.' + floatPart
      }
    } else {
      return intPartFormat
    }
  },

  /******* 
   * @description: 百分比计算方法
   * @param {Number} num  分子
   * @param {Number} total 分母
   * @return {Number}
   */
  percentage: function (num, total) {
    if (num == 0 || total == 0) {
      return 0;
    }
    return (Math.round(num / total * 10000) / 100.00); // 小数点后两位百分比
  },

  /******* 
   * @description: 金额单位转换方法
   * @param {number} value 待处理金额
   * @return {Object}
   */
  numberFormat: function (value) {
    var param = {};
    var k = 10000,
      sizes = ['', '万', '亿', '万亿'],
      i;
    if (value < k) {
      param.value = value
      param.unit = '元'
    } else {
      i = Math.floor(Math.log(value) / Math.log(k));
      param.value = ((value / Math.pow(k, i))).toFixed(2);
      param.unit = sizes[i] + '元';
    }
    return param;
  },

  /******* 
   * @description: 获取两数之间的随机数 包含边界值
   * @param {Number} min 最小值
   * @param {Number} max 最大值
   * @return {Number}
   */
  getRandomArbitrary: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
  },

  /******* 
   * @description: 获取两数之间的随机整数
   * @param {Number} min 最小值
   * @param {Number} max 最大值
   * @return {Number}
   */
  getRandomInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
  }
}

let StrUtil = {
  /******* 
   * @description: 文字超长处理方法
   * @param {String} val 待处理文本
   * @param {Number} txtLength 保留长度
   * @return {*}
   */  
  tableTextDisposeFun:function (val, txtLength) {
    let txtSourceLength = val.length
    if (txtSourceLength < txtLength) {
      return val
    } else {
      return `${val.substr(0,txtLength)}...`
    }
  }
}


// 时间处理方法
let DateUtil = {
  //日期格式部分
  yyyy_MM_dd_HH_mm_ss: "yyyy-MM-dd HH:mm:ss",
  yyyy_MM_dd_HH_mm: "yyyy-MM-dd HH:mm",
  yyyy_MM_dd: "yyyy-MM-dd",
  yyyy_MM_dd_1: "yyyy/MM/dd",
  yyyyMMdd: "yyyyMMdd",
  HH_mm_ss: "HH:mm:ss",

  /**
   * 判断数据是否为空
   * @param data
   * @returns {boolean}
   */
  isNull: function (data) {
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
  isDate: function (date) {
    if (isNaN(date) && !isNaN(Date.parse(date))) {
      return true;
    } else {
      return false;
    }
  },

  /**
   * 获取当前日期
   * @returns {Date}
   */
  getNowDate: function () {
    return new Date();
  },

  /******* 
   * @description: 获取当前年份
   * @return {*}
   */
  getNowYear: function () {
    return new Date().getFullYear()
  },

  /**
   * 获取当前时间戳
   * @returns {number}
   */
  getNowTimeStamp: function () {
    return parseInt(Math.ceil(new Date().getTime()));
  },

  /**
   * Date日期格式化
   * @param date
   * @param pattern 可为空，默认yyyy-MM-dd HH:mm:ss
   * @returns {string}
   */
  format: function (date, pattern) {
    let yy = date.getFullYear(); //年
    let mm = date.getMonth() + 1; //月
    let dd = date.getDate(); //日
    let hh = date.getHours(); //时
    let ii = date.getMinutes(); //分
    let ss = date.getSeconds(); //秒

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
   * 日期字符串转时间戳
   * @param date  不支持yyyyMMdd格式
   * @returns {number}
   */
  strDate2TimeStamp: function (date) {
    date = date.replace(/-/g, '/');
    return new Date(date).getTime();
  },
  
  /**
   * 时间戳转日期字符串(yyyy-MM-dd HH:mm:ss)
   * @param timeStamp
   * @returns {string}
   */
  timeStamp2strDate: function (timeStamp) {
    let d = new Date(timeStamp); //根据时间戳生成的时间对象
    let date = (d.getFullYear()) + "-" +
      (d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1) + "-" +
      (d.getDate() < 10 ? "0" + d.getDate() : d.getDate()) + " " +
      (d.getHours() < 10 ? "0" + d.getHours() : d.getHours()) + ":" +
      (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()) + ":" +
      (d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds());
    return date;
  },

  /**
   * 获取几天前日期(1代表明天，-1 代表前一天，-2前两天...)
   * @param date 指定日期
   * @param num
   * @param separator 连接符 如果为-,则结果为:yyyy-MM-dd
   */
  getDay: function (date, num, separator) {
    let today = new Date(date);
    let nowTime = today.getTime();
    let ms = 24 * 3600 * 1000 * num;
    today.setTime(parseInt(nowTime + ms));
    let oYear = today.getFullYear();
    let oMoth = (today.getMonth() + 1).toString();
    if (oMoth.length <= 1) oMoth = '0' + oMoth;
    let oDay = today.getDate().toString();
    if (oDay.length <= 1) oDay = '0' + oDay;
    return oYear + separator + oMoth + separator + oDay;
  },

  /**
   * 获取前几月(1代表下月，-1 代表上月，-2上两月...)
   * @param date 指定日期
   * @param num
   * @param separator 连接符 如果为-,则结果为:yyyy-MM
   */
  getMonth: function (date, num, separator) {
    let today = new Date(date);
    today.setMonth(today.getMonth() + num);
    let oYear = today.getFullYear();
    let oMoth = (today.getMonth() + 1).toString();
    if (oMoth.length <= 1) oMoth = '0' + oMoth;
    return oYear + separator + oMoth;
  },

  /**
   * 判断某一年是否是闰年
   * @param year
   * @returns {boolean}
   */
  isLeapYear: function (year) {
    return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
  },

  /**
   * 获取某年某个月的天数(西方月份)
   * @param year
   * @param month 从0开始
   */
  getDaysOfMonthEN: function (year, month) {
    return [31, (this.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
  },

  /**
   * 获取某年某个月的天数(中国月份)
   * @param year
   * @param month 从1开始
   */
  getDaysOfMonthCN: function (year, month) {
    return ['中国没有0月', 31, (this.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
  },

  /**
   * 计算一个日期是当年的第几天
   * @param date 字符串日期
   * @returns {number}
   */
  dayOfTheYear: function (date) {
    let obj = new Date(date);
    let year = obj.getFullYear();
    let month = obj.getMonth(); //从0开始
    let days = obj.getDate();
    let daysArr = [31, (this.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (var i = 0; i < month; i++) {
      days += daysArr[i];
    }
    return days;
  },

  /**
   * 比较两个时间大小(不支持yyyyMMdd格式)
   *    date1>date2 return 1
   *    date1<date2 return -1
   *    date1==date2 return 0
   * @returns {number}
   */
  compareTime: function (date1, date2) {
    if (Date.parse(date1.replace(/-/g, "/")) > Date.parse(date2.replace(/-/g, "/"))) {
      return 1;
    } else if (Date.parse(date1.replace(/-/g, "/")) < Date.parse(date2.replace(/-/g, "/"))) {
      return -1;
    } else if (Date.parse(date1.replace(/-/g, "/")) == Date.parse(date2.replace(/-/g, "/"))) {
      return 0;
    }
  },

  /**
   * 获取本周开始日期
   * @returns {*|string}
   */
  getWeekStartDay: function () {
    let now = new Date();
    let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() + 1);
    return DateUtil.format(date, DateUtil.yyyy_MM_dd);
  },

  /**
   * 获取本周结束日期
   * @returns {*|string}
   */
  getWeekEndDay: function () {
    let now = new Date();
    let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + (7 - now.getDay()));
    return DateUtil.format(date, DateUtil.yyyy_MM_dd);
  },

  /**
   * 获取上周开始日期
   * @returns {*|string}
   */
  getUpWeekStartDay: function () {
    let now = new Date();
    let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() - 6);
    return DateUtil.format(date, DateUtil.yyyy_MM_dd);
  },

  /**
   * 获取上周结束日期
   * @returns {*|string}
   */
  getUpWeekEndDay: function () {
    let now = new Date();
    let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());
    return DateUtil.format(date, DateUtil.yyyy_MM_dd);
  },

  /******* 
   * @description: 生成随机时间
   * @param {*} startDate 随机边界值
   * @param {*} endDate 随机边界值
   * @return {*}
   */
  getRandomDate: function (startDate, endDate) {
    let date = new Date(+DateUtil.strDate2TimeStamp(startDate) + Math.random() * (DateUtil.strDate2TimeStamp(endDate) - DateUtil.strDate2TimeStamp(startDate)));
    let hour = 0 + Math.random() * (23 - 0) | 0;
    let minute = 0 + Math.random() * (59 - 0) | 0;
    let second = 0 + Math.random() * (59 - 0) | 0;
    date.setHours(hour);
    date.setMinutes(minute);
    date.setSeconds(second);

    return DateUtil.format(date, DateUtil.yyyy_MM_dd);
  }
}


/**
 * @description:  分页方法
 * @param {*} awaitList 带分页数组
 * @param {*} pageNo 当前页
 * @param {*} pageSize 每页条数
 * @return {*}
 */
function paginationFun(awaitList, pageNo, pageSize) {
  let originalArrLenth = awaitList.length
  if (originalArrLenth < pageSize) {
    return {
      contentLst: awaitList,
      pageNo: 1,
      pageconunt: 1,
      pageSize: pageSize
    }
  }

  let firItem = pageNo === 1 ? 0 : (pageNo - 1) * pageSize
  let endItem = pageNo * pageSize

  if (originalArrLenth > endItem) {
    return {
      contentLst: awaitList.slice(firItem, endItem),
      pageNo: pageNo,
      pageconunt: Math.ceil(originalArrLenth / pageSize),
      pageSize: pageSize
    }
  } else if (originalArrLenth <= endItem && originalArrLenth > firItem) {
    return {
      contentLst: awaitList.slice(firItem),
      pageNo: pageNo,
      pageconunt: Math.ceil(originalArrLenth / pageSize),
      pageSize: originalArrLenth - firItem
    }
  } else {
    return {
      contentLst: [],
      pageNo: pageNo,
      pageconunt: Math.ceil(originalArrLenth / pageSize),
      pageSize: 0
    }
  }


}