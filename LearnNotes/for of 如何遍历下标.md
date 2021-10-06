### for of 如何遍历下标
#### keys 遍历每一项的接口，使用for of 遍历
````
    let aryKeys = [1,2,3,4,5];
    for(let item of aryKeys.keys()){
        console.log('可以遍历for of的下标', item);
    }
````
#### entries 遍历接口，可以遍历到索引的每一项，每一次遍历得到一个数组【索引，当前项】
````
    for(let e of aryKeys.entries()){
        console.log('entries【索引，当前项】',e);
    }
````
#### 默认使用for of 遍历数组，默认遍历的就是每一个项
````
    for(let it of aryKeys){
        console.log('for of每一个项',it);
    }
````