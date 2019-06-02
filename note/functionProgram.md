1. [Functor](#Functor)
1. [Monad](#Monad)



### Functor([详细](../src/Functor.js))
#### 含义 ####
    将值包裹起来的一种设计模式，就像给值一个虚拟屏障一样，不能直接获取或转化
#### 属性 ####
* 必须是无副作用的。wrap(2).fmap(R.identity)//Wrapper(2)
* 必须是可组合的。 wrap(2).fmap(R.compose(plus3, R.tap(infoLogger))).map(R.identity) //5
#### 步骤
1. 定义一个wrap：``const wrap = (val) => new Wrapper(val)``
1. 将值放入wrapper中：``const two = wrap(2)``
    1. 对于two中原值2的提取，不能直接**获取或转化**。可以通过two.map(R.identity)获得原值
1. map::(A -> B)-> A -> B
    ```
    const plus = R.curry((a, b) => a + b)
    const plus3 = plus(3)
    two.map(plus3) //5
    ```
1. fmap::(A -> B) -> Wrapper(A) -> Wrapper(B)
    ```
    two.fmap(plus3).fmap(plus10) //Wrapper(15)
    ```
<a id = "Functor"></a>

### Monad ([详细](../src/Monad.js))
#### 含义
    Functor的进化版。其可以扁平化嵌套结构，同时旨在安全地传送错误，使其在应用时有较好的容错性
#### 接口定义
1. 构造函数
1. of函数，创建Monadic结构的实例
1. map函数，可链式操作
1. **join函数**，将两层Monadic结构合并成一层,用于扁平化嵌套结构

### Maybe Monad 和 Either Monad 处理异常
两个类的作用
1. 隔离不纯
1. 合并判空逻辑
1. 避免异常
1. 支持函数组合
1. 中心化逻辑，用于提供默认值

### Maybe Monad（[详细](../src/Maybe.js)）
##### 内容：包含两个具体的子标记类型
1. ``Just(value)``  表示值的容器（详细）
1. ``Nothing()``    表示没有值或者没有失败的附加信息

#### 例子：（在不确定的调用使用，比如查询数据库、在集合中查找值，从服务器请求数据等）
##### 例子1（步骤）
1. safeFindObject :: DB -> String -> Maybe
    ```
    const safeFindObject = R.curry(function(db, id){
        return Maybe.fromNullable(find(db, id))
    })
    ```
1. safeFindStudent :: String -> Maybe(Student)
    ```
    const safeFindStudent = safeFindObject(DB('student'))
    const address = safeFindStudent('444-44-444').map(R.prop('address'))
    address;//-> Just(Address(...)) or Nothing
    ```

##### 例子2（对比）
1. 面向对象、反模式的null判断
    ```
    function getCountry(student){
        let school = student.school()
        let addr = school.address()
        if(school!==null){            
            return addr.country()
        }
        return 'Country does not exist!'
    }
    ```
1. 使用MaybeMonad
    ```
    const country = R.compose(getCountry, safeFindStudent)
    const getCountry = (student) => student
        .map(R.prop('school'))
        .map(R.prop('address'))
        .map(R.prop('country'))
            .getOrElse('Country does not exist')
    ```
#### 优缺点
1. 优点：善于几种管理无效数据的检查
1. 缺点：没有提供关于什么地方出了错的信息


### IO Monad（[详细](../src/IOMonad.js)）
DOM操作都会有副作用，违反引用透明性。应精良从应用的角度考虑，把IO操作当作不可变的，可将IO操作提升到Monadic的链式调用中，让Monad主导数据流
