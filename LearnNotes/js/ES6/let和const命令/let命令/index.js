/*
 * @Author: BianYu
 * @Date: 2022-01-06 10:16:02
 * @LastEditTime: 2022-01-06 10:32:42
 * @LastEditors: BianYu
 * @Description: 
 * @FilePath: \Note\LearnNotes\js\ES6\let和const命令\index.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
// {
//   let a = 10;
//   var b = 1;
// }
// a // ReferenceError: a is not defined.
// b // 1


var tmp = 123;
if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
