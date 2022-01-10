/*
 * @Author: BianYu
 * @Date: 2022-01-10 15:31:35
 * @LastEditTime: 2022-01-10 15:49:16
 * @LastEditors: BianYu
 * @Description: 
 * @FilePath: \Note\LearnNotes\js\ES6\变量的解构赋值\用途\index.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
let x = 1;

let y = 2;

[x, y] = [y, x]

// 返回一个数组
function example() {
  return [1, 2, 3];
};

let [a, b, c] = example();
// 返回一个对象
function example01() {
  return {
    foo: 1,
    bar: 2
  };
}
let {
  foo,
  bar
} = example01();

// 参数是一组有次序的值
function f([x, y, z]) {
  x0 = x;
  y0 = y;
  z0 = z;
}
f([1, 2, 3]);
// 参数是一组无次序的值
function f0({x,y,z}) {
  x0 = x;
  y0 = y;
  z0 = z;
}
f0({z: 3,y: 2,x: 1});

let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};
let { id, status, data: number } = jsonData;
// console.log(id, status, number);
// 42, "OK", [867, 5309]

// jQuery.ajax = function (url, {
//   async = true,
//   beforeSend = function () {},
//   cache = true,
//   complete = function () {},
//   crossDomain = false,
//   global = true,
//   // ... more config
// } = {}) {
//   // ... do stuff
// };

const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
for (let [key, value] of map) {
  console.log(key + " is " + value);
}
// first is hello
// second is world