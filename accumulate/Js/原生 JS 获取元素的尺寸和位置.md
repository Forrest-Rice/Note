# 原生 JS 获取元素的尺寸和位置
通过 getComputedStyle （IE 下 currentStyle）
getComputedStyle 这个函数主要提供给我们元素 border 和 padding 宽度在内的一系列值（仍然不要妄想通过 element.style.border-width 获得），加上原先的 offsetHeight，就可以减去 border 和 padding 的值获得元素的真实尺寸。

```
// 考虑 IE 的兼容性
function getStyle(el) { 
  if(window.getComputedStyle) { 
    return window.getComputedStyle(el, null); 
  }else{ 
    return el.currentStyle; 
  } 
} 
function getWH(el, name) { 
  var val = name === "width" ? el.offsetWidth : el.offsetHeight, 
  which = name === "width" ? ['Left', 'Right'] : ['Top', 'Bottom']; 
  // display is none 
  if(val === 0) { 
    return 0; 
  } 
  var style = getStyle(el);
  // 左右或上下两边的都减去
  for(var i = 0, a; a = which[i++];) { 
    val -= parseFloat( style["border" + a + "Width"]) || 0; 
    val -= parseFloat( style["padding" + a ] ) || 0; 
  } 
  return val; 
}
// 测试，正确
getWH(test, 'width'); // 76
```