/*
 * @Author: BianYu
 * @Date: 2022-01-10 15:01:27
 * @LastEditTime: 2022-01-10 15:13:23
 * @LastEditors: BianYu
 * @Description: 
 * @FilePath: \Note\LearnNotes\js\ES6\变量的解构赋值\数值和布尔值的解构赋值\index.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
let {toString: s} = 123;
s === Number.prototype.toString // true
let {toString: s1} = true;
s1 === Boolean.prototype.toString // true

let { prop: x } = undefined; // TypeError
let { prop: y } = null; // TypeError