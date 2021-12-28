# Vue resize监听窗口变化
## 一、在Vue单个页面运用
通过监听器监听窗口大小来更新视图操作
```
<template>
    <div id="divId">

    </div>
</template>
<script>

    export default {
        data() {
            return {
                screenWidth: document.documentElement.clientWidth,//屏幕宽度
                screenHeight: document.documentElement.clientHeight,//屏幕高度
            }
        },
        watch:{
            'screenWidth':function(val){ //监听屏幕宽度变化
                var oIframe = document.getElementById(divId);
                oIframe.style.width = (Number(val)-120) + 'px'; //'120'是页面布局调整，可去除

            },
            'screenHeight':function(){ //监听屏幕高度变化
                var oIframe = document.getElementById(divId);
                oIframe.style.height = (Number(val)-120) + 'px'; //'120'是页面布局调整，可去除
            }
        },
        mounted() {
            var _this = this;
            window.onresize = function(){ // 定义窗口大小变更通知事件
                _this.screenWidth = document.documentElement.clientWidth; //窗口宽度
                _this.screenHeight = document.documentElement.clientHeight; //窗口高度
            };
        }
    }
</script>
```

## 二、在项目中全局运用
1、在store.js里定义
```
let state = {
    screenWidth:document.documentElement.clientWidth, //屏幕宽度
    screenHeight:document.documentElement.clientHeight, //屏幕高度
}
```
2、在main.vue里挂载window.onresize
```
mounted() {
  var _this = this;
  window.onresize = function(){ // 定义窗口大小变更通知事件
    _this.$store.state.screenWidth = document.documentElement.clientWidth; //窗口宽度
    _this.$store.state.screenHeight = document.documentElement.clientHeight; //窗口高度
  };
}
```
3、在Vue页面中监听
```
<template>
    <div id="divId">

    </div>
</template>
<script>

    export default {
        data() {
            return {
                screenWidth: document.documentElement.clientWidth,//屏幕宽度
                screenHeight: document.documentElement.clientHeight,//屏幕高度
            }
        },
        watch:{
            '$store.state.screenWidth':function(val){ //监听屏幕宽度变化
                var oIframe = document.getElementById(divId);
                oIframe.style.width = (Number(val)-120) + 'px'; //'120'是页面布局调整，可去除

            },
            '$store.state.screenHeight':function(){ //监听屏幕高度变化
                var oIframe = document.getElementById(divId);
                oIframe.style.height = (Number(val)-120) + 'px'; //'120'是页面布局调整，可去除
            }
        }
    }
</script>
```
1、在项目中 window.onresize只能挂载一次，在多个页面中同时挂载 window.onresize时，只有其中一个 window.onresize会起作用

2、避免 window.onresize频繁挂载（待续）