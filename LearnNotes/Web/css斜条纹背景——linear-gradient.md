```
body{
  background: #243960;
}
.container{
  margin: 200px auto;
  width: 500px;
  height: 500px;
  background: linear-gradient(
        45deg, 
        rgba(0, 153, 68, .5) 0, rgba(0, 153, 68, .5) 25%, transparent 25%, transparent 50%, 
        rgba(0, 153, 68, .5) 50%, rgba(0, 153, 68, .5) 75%, transparent 75%, transparent
      );
  background-size: 50px 50px;
}
```
接下来一个一个解析：

margin, width, height 这块自己随意定义，关键属性有两个——background中的linear-gradient 和 background-size。

先来linear-gradient,分析其属性，总共有9个属性

45deg外加8个后接百分比的颜色值。

45deg表示条纹倾斜角度，这个好理解。如果不加这个属性，就成了横条纹了，以此90deg就是竖条纹，可以组成花格条纹。

分析后面8个属性，总结出是由一个rgba颜色值和transparent外加百分比组成。

rgba颜色值是条纹的颜色，transparent其实也是颜色，不过是继承自父级的，而这里的父级颜色就是body的背景色（在这块代码里可以理解为无色透明≈rgba(0,0,0,0)）。

而百分比也比较好理解，不过需要串起来读：

```
0-25% 是 条纹色
25%-50% 是 父级颜色
50%-75% 是 条纹色
75%-100% 是 父级颜色
```

这里的细节最后一个transparent后没接百分比其实是表示transparent 1，也就是100%了。注：如果没有写角度属性，渲染是从top开始的，如果写的是0deg是从bottom开始的，角度值增加多少，则渲染开始点顺时针旋转多少。

怎么成了第一张图的模样了？其实关键点是在后面一个属性background-size，以及默认值为repeat的background-repeat。

使用background-size: 50px 50px;就把上图的样式缩小到了50*50的方格子中。然后这样是无法铺满500*500的容器，另外background-repeat的默认repeat发挥作用，把渲染好的50*50方格子平铺重复渲染到500*500的容器里面。就做成了第一张图的效果。

了解到每个属性的作用，拓展起来就方便多了，如果要改变斜条纹线条的大小，只需要改变background-size的大小就行了。颜色也不一定要用rgba格式，另外如果要做双色条纹也只需要把transparent改成另外一个颜色就ok。三色条纹也简单

50% ÷ 3 ≈ 16.66%

所以代码是：
```
.container{
  margin: 200px auto;
  width: 500px;
  height: 500px;
  background: linear-gradient(
        45deg, 
        red 0, red 16.66%, #fff000 16.66%, #fff000 33.33%, rgb(0, 0, 255) 33.33%, rgb(0, 0, 255) 50%,
        red 50%, red 66.66%, #fff000 66.66%, #fff000 83.33%, rgb(0, 0, 255) 83.33%, rgb(0, 0, 255)
      );
  background-size: 50px 50px;
}
```