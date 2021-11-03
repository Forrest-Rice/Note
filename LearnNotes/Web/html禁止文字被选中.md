```
user-select：none |text| all | element
```
取值：

none:文本不能被选择

text:可以选择文本

all :当所有内容作为一个整体时可以被选择。如果双击或者在上下文上点击子元素，那么被选择的部分将是以该子元素向上回溯的最高祖先元素。

element:可以选择文本，但选择范围受元素边界的约束

说明：

1.IE6-9不支持该属性，但支持使用标签属性 onselectstart="return false;" 来达到 user-select:none 的效果；Safari和Chrome也支持该标签属性；

2.直到Opera12.5仍然不支持该属性，但和IE6-9一样，也支持使用私有的标签属性 unselectable="on" 来达到 user-select:none 的效果；unselectable 的另一个值是 off；

3.除Chrome和Safari外，在其它浏览器中，如果将文本设置为 -ms-user-select:none;，则用户将无法在该文本块中开始选择文本。不过，如果用户在页面的其他区域开始选择文本，则用户仍然可以继续选择将文本设置为 -ms-user-select:none; 的区域文本；

4.对应的脚本特性为userSelect。