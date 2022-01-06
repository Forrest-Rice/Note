/*
 * @Author: BianYu
 * @Date: 2022-01-06 11:34:13
 * @LastEditTime: 2022-01-06 17:37:00
 * @LastEditors: BianYu
 * @Description: 
 * @FilePath: \Note\LearnNotes\js\ES6\变量的解构赋值\对象的解构赋值\index.js
 * @可以输入预定的版权声明、个性签名、空行等
 */

let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
foo // "aaa"
bar // "bbb"

let { bar01, foo01 } = { foo01: 'aaa', bar01: 'bbb' };
foo01 // "aaa"
bar01 // "bbb"
let { baz01 } = { foo01: 'aaa', bar01: 'bbb' };
baz01 // undefined

// 例一
let { log02, sin02, cos02 } = Math;
// 例二
const { log } = console;
log('hello') // hello

let { foo04: baz04 } = { foo04: 'aaa', bar04: 'bbb' };
baz04 // "aaa"
let obj04 = { first04: 'hello', last04: 'world' };
let { first: f, last: l } = obj04;
f // 'hello'
l // 'world'


let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};
let { p, p: [x, { y }] } = obj;
x // "Hello"
y // "World"
p // ["Hello", {y: "World"}]
