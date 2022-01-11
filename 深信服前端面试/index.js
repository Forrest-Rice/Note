/*
 * @Author: BianYu
 * @Date: 2022-01-11 10:13:26
 * @LastEditTime: 2022-01-11 10:41:00
 * @LastEditors: BianYu
 * @Description: 
 * @FilePath: \Note\深信服前端面试\index.js
 * @可以输入预定的版权声明、个性签名、空行等
 */

let str = 'aabbaabbcccddd'
let b = [].filter.call(str, (s, i, o) => o.indexOf(s) == i).join('');


function formatDate(time) {
  var date = new Date(time);

  var year = date.getFullYear(),
    month = date.getMonth() + 1, //月份是从0开始的
    day = date.getDate(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();
  let formateTime = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${hour<10?'0'+hour:hour}:${min<10?'0'+min:min}:${sec<10?'0'+sec:sec}`
  return formateTime;
}

formatDate(new Date().getTime()); //2017-05-12 09:09:21

function isPort(port) {
  if (/^[1-9]\d*|0$/.test(port) && port * 1 >= 0 && port * 1 <= 65535){
      return true
  }
  return false;
}

isPort(10-10000)