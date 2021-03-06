### 基本使用

#### 父类选择器

Sass 允许将一套 CSS 样式嵌套进另一套样式中，内层的样式将它外层的选择器作为父选择器，例如：

```a {
  font-weight: bold;
  text-decoration: none;
  &:hover { text-decoration: underline; }
  body.firefox & { font-weight: normal; }
}
```

编译为

```
a {
  font-weight: bold;
  text-decoration: none; }
  a:hover {
    text-decoration: underline; }
  body.firefox a {
    font-weight: normal; }
```

编译后的 CSS 文件中 & 将被替换成嵌套外层的父选择器，如果含有多层嵌套，最外层的父选择器会一层一层向下传递
& 必须作为选择器的第一个字符，其后可以跟随后缀生成复合的选择器

####属性嵌套 (Nested Properties)
有些 CSS 属性遵循相同的命名空间 (namespace)，比如 font-family, font-size, font-weight 都以 font 作为属性的命名空间。为了便于管理这样的属性，同时也为了避免了重复输入，Sass 允许将属性嵌套在命名空间中，例如：

`````.funky {
  font: {
    family: fantasy;
    size: 30em;
    weight: bold;
  }
}````
编译为
````.funky {
  font-family: fantasy;
  font-size: 30em;
  font-weight: bold; }
`````

#### 占位符选择器 %foo (Placeholder Selectors: %foo)

```
?????????????????????????????????????????????????????
```
