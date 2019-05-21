* 文本超出时的省略
    ```
    .showEllipsis{
        /* 保证文本内容不会自动换行，如果多余的内容会在水平方向撑破单元格。 */
        white-space: nowrap;
        /* 隐藏超出单元格的部分。 */
        overflow: hidden; 
        /* 将被隐藏的那部分用省略号代替。 */
        text-overflow: ellipsis
    }
    ```
* 通过相同的类名获得第几个应用到该类的选择器(若类名为class = exerciseInfo)，则：
    * 选择第一个类名： 
        ```
        .exerciseInfo: nth-of-type(1) { ... };
        ```
    * 选择最后一个类名： 
        ```
        .exerciseInfo: last-child { ... };
        ```
    * 选择其中一个指定的类名：
        ```
        .exerciseInfo: nth-of-type(x) { ... };
        ```
* 子元素z-index值小于父元素的时候，子元素的hover不起作用，因为直接指定到父元素了
* linear-gradient(direction, color-stop1, color-stop2,...)可以用于在div中画斜线
    * background: linear-gradient(to left top, transparent 49.5%, red, transparent 50.5%);//调节百分比，间接设置斜线的宽度，位置，斜线方向 由左向上
* 外阴影：box-shadow: X轴  Y轴  Rpx  color;
    * 属性说明（顺序依次对应）： 阴影的X轴(可以使用负值)    阴影的Y轴(可以使用负值)    阴影模糊值（大小）    阴影的颜色
