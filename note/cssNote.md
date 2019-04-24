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

