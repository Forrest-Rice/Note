### 通过拓展运算符 和 filter 来达到不改变原数组的情况下，添加和删除元素

#### 添加元素

```
var numList = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 第一种方案
function add (newList, num) {
  return [...newList, num]
}

 // 第二种方案
function add (arr, num) {
  const newArr = [...arr] // copy arr to then new array
  newArr.push(num) // Add num parameter to the end of the new array.
  return newArr // Return the new array.
}
// 输出
var newNumList = add(numList, 10)
console.log('newNumList', newNumList) // newNumList , [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('numList', numList) // numList ,[1, 2, 3, 4, 5, 6, 7, 8, 9]

```

#### 删除元素

```
var numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 第一种方案
function remove (list, num) {
  return list.filter(e => e !== num)
}

// 第二种方案
function remove (arr, num) {
  const newArr = [...arr] // Copy the numlist array to a new array.
  if (newArr.indexOf(num) >= 0) {
    newArr.splice(newArr.indexOf(num), 1) // Remove the given paramater from the new array.
    return newArr // Return the new array.
  }
}
// 输出
var removeNumList = remove(numList, 10)
console.log('newNumList', removeNumList) // newNumList , [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('numList', numList) // numList ,[1, 2, 3, 4, 5, 6, 7, 8, 9,10]
```
