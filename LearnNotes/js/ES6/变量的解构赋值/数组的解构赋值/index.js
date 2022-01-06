/*
 * @Author: BianYu
 * @Date: 2022-01-06 11:33:35
 * @LastEditTime: 2022-01-06 15:22:41
 * @LastEditors: BianYu
 * @Description: 
 * @FilePath: \Note\LearnNotes\js\ES6\变量的解构赋值\数组的解构赋值\index.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
let [a, b, c] = [1, 2, 3];

let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3
let [ , , third] = ["foo", "bar", "baz"];
third // "baz"
let [x, , y] = [1, 2, 3];
x // 1
y // 3
let [head, ...tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]
let [x1, y1, ...z] = ['a'];
x1 // "a"
y1 // undefined
z // []


let [x2, y2] = [1, 2, 3];
x2 // 1
y2 // 2
let [a2, [b2], d2] = [1, [2, 3], 4];
a2 // 1
b2 // 2
d2 // 4


// 报错
// let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};\

function* fibs() {
  let a4 = 0;
  let b4 = 1;
  while (true) {
    yield a4;
    [a4, b4] = [b4, a4 + b4];
  }
}
let [first4, second4, third4, fourth4, fifth4, sixth4] = fibs();
sixth4

let [foo5 = true] = [];
foo // true
let [x5, y5 = 'b'] = ['a']; // x='a', y='b'
x5
y5
let [x6, y6 = 'b'] = ['a', undefined]; // x='a', y='b'
x6
y6

let [x7 = 1] = [undefined];
x7 // 1
let [x8 = 1] = [null];
x7 // null

40324

function f9() {
  console.log('aaa');
}
let [x9 = f9()] = [1];


let x10;
if ([1][0] === undefined) {
  x10 = f10();
} else {
  x10 = [1][0];
}