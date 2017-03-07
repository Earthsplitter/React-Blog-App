#JavaScript 模块化: CommonJS, AMD and CMD

###1. 为什么需要模块化

1. 防止变量名称空间污染
2. 复杂的业务逻辑需要更好的分解/包装

###2. 没有规范的原始模块化

1. 对象包裹模块(所有内容暴露在外)

```javascript
var module1 = new Object({
    _count : 0,
    m1 : function (){
        //...
    },
    m2 : function (){
        //...
    }
});
```

2. 闭包实现私有变量

```javascript
var module1 = (function(){
    var _count = 0;
    var m1 = function(){
        //...
    };
    var m2 = function(){
        //...
    };
    return {
        m1 : m1,
        m2 : m2
    };
})();
```

###3. CommonJS规范

因为服务器端的庞大代码和复杂业务逻辑的需求，相比浏览器端，模块化更加重要。Node.JS遵循了CommonJS的规范，并做出了一些取舍。

CommonJS主要内容：

1. 每个文件是一个模块，全局变量必须通过 `global.variable` 进行声明
2. `module.exports` 属性是模组暴露的接口，在上面添加变量/函数
3. `require` 加载模块，实际上加载的就是 `module.exports`

对于更多的技术细节不再具体探讨，网上有着更多的资料

###4. AMD规范

对于服务器端，CommonJS采用了同步加载的方法，类似于其他语言，其加载延迟取决于硬盘速度，但是在前端浏览器中，因为网络带宽的原因，多个文件加载会导致：
1. JavaScript文件加载会阻塞网页渲染，导致未响应
2. 依赖关系导致了复杂的加载顺序，容易出错

AMD规范定义了异步加载，加载完相应模块后，再调用依赖这些模块的回调函数。简单来说，AMD就是这一个接口：

```javascript
define(['dep1','dep2'],function(dep1,dep2){ ... });
```

RequireJS实现了AMD规范，首先需要加载requireJS文件：

```html
<script src="js/require.js" data-main="js/main"></script>
```

之后采用AMD规范编写/加载模块:

```javascript
//定义模块
define(function (){
    var add = function (x,y){
        return x+y;
    };
    return {
        add: add
    };
});
//加载模块
require(['jquery', 'underscore', 'backbone'], function ($, _, Backbone){
    // some code here
});
```
###5. CMD规范

与AMD规范的RequireJS最大区别：
1. AMD依赖前置：RequireJS预加载所有模块，并且执行顺序不一定。
2. CMD就近依赖：SeaJS(CMD规范)按需加载，更符合代码顺序。但是牺牲了性能（可以忽略不计）。
