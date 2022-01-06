## 高度为百分比，line-height 不知道设置具体的数值的情况，利用伪元素进行居中
html
````
    <div class='father'>
        <div class="son">这是要居中的文字</div>
    </div>
````
css
````
        .son{
            height: 50%;
            background: blue;
            color: #fff;
        }

        .son::before{
            display: inline-block;
            content: "";
            height: 100%;
            vertical-align: middle;
        }
````

## 高度为具体的数值的情况，line-height 只需要设置具体的高度即可
html
````
    <div class='father'>
        <div class="son">这是要居中的文字</div>
    </div>
````
````
        .son{
            height: 100px;
            background: blue;
            line-height: 100px;
            color: #fff;
        }
````

## 利用表格和单元格的特性，让文字垂直居中
html
````
    <div class='father'>
        <div class="son">这是要居中的文字</div>
    </div>
````
css
````
        .son {
            display: table-cell;
            height: 100px;
            background: blue;
            color: #fff;
            vertical-align: middle;
        }
````