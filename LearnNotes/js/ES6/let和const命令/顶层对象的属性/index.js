/*
 * @Author: BianYu
 * @Date: 2022-01-06 11:07:30
 * @LastEditTime: 2022-01-06 11:25:39
 * @LastEditors: BianYu
 * @Description: 
 * @FilePath: \Note\LearnNotes\js\ES6\顶层对象的属性\index.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
var a = 1;
// 如果在 Node 的 REPL 环境，可以写成 global.a
// 或者采用通用方法，写成 this.a
console.log( global.a );
let b = 1;
global.b // undefined