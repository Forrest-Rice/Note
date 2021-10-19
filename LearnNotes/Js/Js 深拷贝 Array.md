### Js 深拷贝 Array
#### 实现方法
（1）for循环实现数组的深拷贝
````
var arr1 = [1, 2, 3];
var arr2 = [];
for (var i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i]);
}
arr1[0] = 4;
console.log(arr1); //4, 2, 3
console.log(arr2); //1, 2, 3
````
（2）concat 方法实现数组的深拷贝,concat() 方法用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
````
var arr1 = [1, 2, 3];
var arr2 = arr1.concat();
arr1[0] = 4;
console.log(arr1); //4, 2, 3
console.log(arr2); //1, 2, 3
````
(3) slice 方法实现数组的深拷贝,slice() 方法可从已有的数组中返回选定的元素。arrayObject.slice(start,end),该方法返回一个新的数组，包含从 start 到 end （不包括该元素，数学上来讲是左闭右开，即包含左，不含右）的 arrayObject 中的元素。
````
var arr1 = [1, 2, 3];
var arr2 = arr1.slice(0);
arr1[0] = 4;
console.log(arr1); //4, 2, 3
console.log(arr2); //1, 2, 3
````
（4）ES6扩展运算符实现数组的深拷贝
　　...扩展运算符是ES6的语法，使用起来非常的方便简洁，相信在写ES6的时候也是备受欢迎的。但是需要注意的是：用扩展运算符对数组或者对象进行拷贝时，只能扩展和深拷贝第一层的值，对于第二层极其以后的值，扩展运算符将不能对其进行打散扩展，也不能对其进行深拷贝，即拷贝后和拷贝前第二层中的对象或者数组仍然引用的是同一个地址，其中一方改变，另一方也跟着改变。
````
var arr1 = [1, 2, 3];
var [...arr2] = arr1;
arr1[0] = 4;
console.log(arr1); //4, 2, 3
console.log(arr2); //1, 2, 3
````


