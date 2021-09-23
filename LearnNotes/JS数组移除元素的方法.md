### JS数组移除元素的方法
#### 1. 修改Arr的length
````
let arr = [1,2,3,4,5,6,7,8,9];
arr.length = 3;
console.log('length',arr.length);
console.log('arr',arr);
````
#### 2.delete (修改Arr的内容,但length不变)
````
let arr = [1,2,3,4,5,6,7,8,9];
delete arr[2];
console.log('length',arr.length);
console.log('arr',arr);
````
#### 3.pop(栈方法,删除Arr的最后一个元素)
````
let arr = [1,2,3,4,5,6,7,8,9];
arr.pop();
console.log('length',arr.length);
console.log('arr',arr);
````
#### 4.shift(删除Arr的第一位元素)
````
let arr = [1,2,3,4,5,6,7,8,9];
arr.shift();
console.log('length',arr.length);
console.log('arr',arr);
````
#### 5.splice(可以对Arr进行增删改操作, 这里只写删除方法)
````
let arr = [1,2,3,4,5,6,7,8,9];
arr.splice(0,2);
// 第一位参数 0: 代表的是起始下标注
// 第二位参数 2: 代表的是删除的位数
console.log('length',arr.length);
console.log('arr',arr);
````
#### 6.forEach || filter (通过迭代循环,删除元素)
````
let arr = [1,2,3,4,5,6,7,8,9];
arr.forEach((item,index,arr) => {
    if(item === 3){
        arr.splice(index,1)
    }
});
console.log('length',arr.length);
console.log('arr',arr);
````
#### 7.操作原型(通过在Array原型上添加方法来完成删除)
````
let arr = [1,2,3,4,5,6,7,8,9];
Array.prototype.remove = function(v) {
    if(isNaN(v) || v > this.length){
        return false
    }
    for(let i = 0, j = 0; i < this.length; i++) {
        if(this[i] != this[v]){
            this[j++] = this[i]
        }
    }
    this.length -= 1
}
arr.remove(2) //参数为下标
console.log('length',arr.length);
console.log('arr',arr);
````