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