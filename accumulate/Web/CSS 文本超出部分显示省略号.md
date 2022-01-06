## 单行超出显示省略号

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>desktop demo</title>
  <style>
    .app {
      width: 400px;
      height: 28px;
      line-height: 28px;
      margin: 50px 0 0 50px;
      border: 1px solid red;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  </style>
</head>
<body>
  <div class="app">
    <span class="content">你问我为何时常沉默，有的人无话可说，有的话无人可说.你问我为何时常沉默，有的人无话可说，有的话无人可说.</span>
  </div>
</body>
</html>

```
### 关键点
```
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;

```

## 多行超出显示省略号

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>desktop demo</title>
  <style>
    .content {
      display: -webkit-box;
      width: 400px;
      line-height: 1.5;
      margin: 50px 0 0 50px;
      border: 1px solid red;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  </style>
</head>
<body>
  <div class="app">
    <span class="content">你问我为何时常沉默，有的人无话可说，有的话无人可说.你问我为何时常沉默，有的人无话可说，有的话无人可说.
    </span>
  </div>
</body>
</html>

```
### 关键点：

```
display: -webkit-box;
overflow: hidden;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;

```