/*
 * @Author: BianYu
 * @Date: 2022-01-10 15:20:04
 * @LastEditTime: 2022-01-10 15:25:02
 * @LastEditors: BianYu
 * @Description: 
 * @FilePath: \Note\LearnNotes\js\ES6\变量的解构赋值\函数参数的解构赋值\index.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
function add([x, y]){
  return x + y;
}
add([1, 2]); // 3

[[1, 2], [3, 4]].map(([a, b]) => a + b);
// [ 3, 7 ]

function move({x = 0, y = 0} = {}) {
  return [x, y];
}
move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]


function move2({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}
move2({x: 3, y: 8}); // [3, 8]
move2({x: 3}); // [3, undefined]
move2({}); // [undefined, undefined]
move2(); // [0, 0]

[1, undefined, 3].map((x = 'yes') => x);
// [ 1, 'yes', 3 ]