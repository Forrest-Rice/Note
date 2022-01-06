/*
 * @Author: BianYu
 * @Date: 2022-01-06 11:08:05
 * @LastEditTime: 2022-01-06 11:17:34
 * @LastEditors: BianYu
 * @Description: 
 * @FilePath: \Note\LearnNotes\js\ES6\const命令\index.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
const PI = 3.1415;
PI // 3.1415
PI = 3;
// TypeError: Assignment to constant variable.

const foo = {};
// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123
// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only