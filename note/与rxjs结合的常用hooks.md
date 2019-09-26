1. [rxjs-hooks](#ch1)
1. [useStateStream, useReducerStream](#ch2)
<br/><a id="ch1"></a>
### rxjs-hooks的使用
其模块主要有两个api：
1. useObservable
2. useEventCallback，

具体内容可见[官方文档](https://github.com/LeetCode-OpenSource/rxjs-hooks)

<br/><a id="ch1"></a>
### useStateStream, useReducerStream
主要是分别基于useState、useStream两个钩子，再配合useEffect、useMemo进行改造的，流基于BehaviorSubject创建

其用处主要是为两个钩子提供了可监听的流，使其可以运用在rxjs中
代码如下：
1. [useStateStream](/src/hooks/useStateStream.jsx)
1. [useReducerStream](/src/hooks.useReducerStream.jsx)
