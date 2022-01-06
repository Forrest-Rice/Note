/*
 * @Author: BianYu
 * @Date: 2022-01-06 11:27:22
 * @LastEditTime: 2022-01-06 11:30:30
 * @LastEditors: BianYu
 * @Description: 
 * @FilePath: \Note\LearnNotes\js\ES6\globalThis 对象\index.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
// 方法一
(typeof window !== 'undefined'
   ? window
   : (typeof process === 'object' &&
      typeof require === 'function' &&
      typeof global === 'object')
     ? global
     : this);
// 方法二
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};
getGlobal()