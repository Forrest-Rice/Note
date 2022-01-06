# VUE嵌套iFrame传参
## 父传子
### vue组件（父页面）

```
<iframe src="static/iframe.html" ref="iframe" width="100%" height="667px" frameborder="0" scrolling="auto" @load="loaded"></iframe>
```

```
export default {
  data(){
    return {
      content: null
    }
  },
  methods:{
    loaded(){
      this.$refs.iframe.contentWindow.postMessage({
        content: this.content,
      }, '*');
    }
  }
}
```
#### 注意：在 iframe 的 load 事件中向子页面传递数据，就不会报找不到contentWindow属性

### iframe页面（子页面）

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <div id="content"></div>

  <script>
    window.addEventListener('message', (messageEvent) => {
      document.getElementById('content').innerHTML = messageEvent.data.content;
    }, false)
  </script>
</body>
</html>
```

总结：
- 父页面通过调用iframe的contentWindow.postMessage传值给子页面
- 子页面通过addEventListener监听接收值

## 子传父
### iframe页面（子页面）

```
<script>
  var contentHeight = document.getElementById('content').clientHeight;
</script>

```
### vue组件（父页面）
```
this.$refs.iframe.contentWindow.contentHeight
```
总结
- 子页面定义全局变量
- 父页面通过iframe的contentWindow直接就可以接收变量值