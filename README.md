
# Wechat Mini Program GA SDK
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

一个基于mearsurement protocol 封装的微信小程序 SDK. 支持以下特性
- Axios-like API, 支持config, transferRequest, transferReponse, Interceptor, API 灵活简单
- 内置 Logger 功能, 方便调试和检查数据发送状态
- 内置一系列工具函数,例如regex table. 参数验证等
- 基于 webpack 开发,易于拓展
- 同时支持小程序和浏览器

在使用此 SDK 前需要您对 Measurement Protocol 和 GA 有一定了解. 如果您不清楚,以下示例发送的参数代表 GA 的对应指标,请参考以下链接

 * [Measurement Protocol](https://developers.google.com/analytics/devguides/collection/protocol/v1/devguide "Measurement Protocol")
 * [Measurement Protocol paramters](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters "Measurement Protocol paramters")

## Install

安装 SDK 最简单的方式是直接下载对应的 [js文件](http://https://github.com/LRENZ/Wechat-Mini-Program-GA-SDK/releases/tag/GA "js文件") 并在小程序引入,例如
```js
Const GA = require('./GA/ga.js').default;
```
或者通过 npm 安装

```sh
npm install wechat-mini-program-ga-sdk
```
### 手动编译

手动编译需要先安装以下library

```sh
yarn add webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env
```

执行 build

``` sh
yarn build
```

特别注意, 小程序和浏览器的打包规范是不一样的.小程序需要打包成commonjs, 浏览器则需要打包成umd. 手动打包需要特别修改webpack.config.js 文件的 libraryTarget. 手动编译后再重新在项目中引入

如需在浏览器中调试,请将 webpack.config.js 文件的 libraryTarget 改写成 umd 后执行

``` sh
yarn start
```


## Getting Start

引入打包文件后, 实例会挂载在default 下.
- 设置config 并实例化对象,config 在同一个实例会保持一致.
- 将声明对象并挂载在APP下方便后续使用.
- 最佳做法是只在 config 中加入所有公用的数据和配置项. 对于需要在特定页面单独发送的数据,则在后续用 get 或者 post 手动添加

```js
var GA = require('./GA/ga.js').default;

const config = {
  data: {  //common request payload
    v: 1,
    cid: 1234556,   //clientId
    tid: "UA-71412438-1",   //ga property ID
    dp: "/not_set",    // document path
    dh:'www.test.com',
    ds: "wechat",    //  data source
    t:"pageview",  //  track type
    proxyURL : "YOUR_PROXY_URL" // Wechat mini program is not allowed to send to GA server directly, you will require a middle server to forward the hits
  },
  maxLogLength:10,
  enableLogger: true,
}

const GA = new GA(config)
```

为了方便在小程序中使用,可以把对象挂载到 APP 对象中,或者是挂载到 wx 对象中

```js
App({
  ...
  GA
  ...
})

// or
wx.ga = GA
```

**Track Pageview**
追踪 pageview 需要在页面 出现的时候传入相应的参数.
```js
GA.post({
  dp: '/home'
})
```

**Track Event**
追踪 Event 需要在事件触发的时候传入相应的参数.
```js
GA.post({
  t:'event',
  dp: '/pdp',
  ec:'action',
  ea:"add to cart"
})
```

如果在之后 post 或者 get 中添加的参数与 config 中有重合,则config 中的相应字段会被覆盖.需要注意得是这个覆盖是一次性的.如果之后没有手动传相应得字段,则会从 config 中继续读取默认字段.

另外一种做法是声明两个对象, 一个实例专门用于追踪Pageview, 另外一个用于追踪 Event. 每个实例互不干扰.

```js
const config = {
  data: {  //common request payload
    v: 1,
    cid: 1234556,   //clientId
    tid: "UA-71412438-1",   //ga property ID
    dp: "not_set",    // document path
    dh:'www.test.com',
    ds: "wechat",    //  data source
    t:"pageview",  //  track type
    proxyURL : "YOUR_PROXY_URL" // Wechat mini program is not allowed to send to GA server directly, you will require a middle server to forward the hits
  },
  maxLogLength:10,
  enableLogger: true,
  LoggerName: 'pvLog'
}

const GAPvTracker = new GA(config)

const Eventconfig = {
  data: {  //common request payload
    v: 1,
    cid: 1234556,   //clientId
    tid: "UA-71412438-1",   //ga property ID
    dp: "not_set",    // document path
    dh:'www.test.com',
    ds: "wechat",    //  data source
    t:"event",  //  track type
  },
  maxLogLength:10,
  enableLogger: true,
  LoggerName: 'Event',  // Logger Name to store the log locally
  proxyURL : "YOUR_PROXY_URL" // Wechat mini program is not allowed to send to GA server directly, you will require a middle server to forward the hits
}

const GAEventTracker = new GA(Eventconfig)
```

## Custom Dimension & Custom Metrics

- ### Custom Dimension / Custom Metrics
要设置 custom dimension 最简单的方式, 就是定义在 config 中或者 手动传入, 例如

```js

const config = {
  data: {  //common request payload
    v: 1,
    cid: 1234556,   //clientId
    tid: "UA-71412438-1",   //ga property ID
    dp: "/not_set",    // document path
    dh:'www.test.com',
    ds: "wechat",    //  data source
    t:"pageview",  //  track type,
	cd1: "custom dimension 1",
	cd2: "custom dimension 2",
	cm1: "5.00"

  },
  maxLogLength:10,
  enableLogger: true,
  LoggerName: 'pvLog',
  debug:true,
}

const GAPvTracker = new GA(config)

```

或者是后续手动传入

```js

GA.post({
  t:'event',
  dp: '/pdp',
  ec:'action',
  ea:"add to cart",
  cd1: "custom dimension 1",
  cd2: "custom dimension 2",
  cm1: "5.00"
})

```

- ### Product Scope Custom Dimension
对于 hit 或者是 user scope 的 dimension / metric 可以用以上的方法传入. 对于 product scope 的 dimension 和 metric 则要通过以下的方式进行定义. Product Scope CD 只能通过以下的方式手动传入,不支持在 config 中提前定义.

```js
GA.post({
    dp: "/wechat",
    t: 'event',
    ec: "test",
    ea: "wechatSDK",
    pa: "detail",

    "products": [{
        "id": "bc823",
        "name": "Fuelworks T-Shirt",
        "price": "92.00",
        "brand": "Fuelworks",
        "category": "T-Shirts",
        "position": "4"
    }, ],
    productScopeCD: {
        '3': 'custom dimension3',  // cd Index : cd Value
        '4': "custom dimension3"
    },
    productScopeCM: {
        '2': 100,  // cm Index : cm Value
    }
})
```



## Enhance Ecommerce Tracking

Enhance Ecommerce 的功能也是遵循 Mearseurement protocol 的规范实现的. SDK 在此基础上增加了对 products/impressions/promotions 的支持, 以提高易用性. 请注意, 不要把products 相关的信息定义到 config 里, 最佳做法是在特定页面把 products/impressions/promotions 相关数据手动传入.

- **Details**
追踪 Enhance Ecommerce details 需要定义参数 pa 和对应的 products
```js
GA.post({
    dp: "/pdp",
    pa: "detail",
    products: [{
        id: "b55da",
        name: "Flexigen T-Shirt",
        price: "16.00",
        brand: "Flexigen",
        category: "T-Shirts",
    }]
})
```

- **Add to cart**
追踪 Enhance Ecommerce Add to cart 需要定义参数 pa 和对应的 products
```js
GA.post({
    dp: "/cart",
    pa: "add",
    products: [{
        id: "b55da",
        name: "Flexigen T-Shirt",
        price: "16.00",
        brand: "Flexigen",
        category: "T-Shirts",
    }]
})
```

- **Remove from cart**

追踪 Enhance Ecommerce Remove from cart 需要定义参数 pa 和对应的 products
```js
GA.post({
    dp: "/cart",
    pa: "remove",
    products: [{
        id: "b55da",
        name: "Flexigen T-Shirt",
        price: "16.00",
        brand: "Flexigen",
        category: "T-Shirts",
    }]
})
```


- **Checkout**
追踪 Enhance Ecommerce Checkout 需要定义参数 pa 和对应的 products 以及 cos (checkout step)
```js
GA.post({
    dp: "/cart",
    pa: "checkout",
	cos:"1", //checkout step
    products: [{
        id: "b55da",
        name: "Flexigen T-Shirt",
        price: "16.00",
        brand: "Flexigen",
        category: "T-Shirts",
    }]
})
```

- **Checkout option**
追踪 Enhance Ecommerce Checkout option 需要定义参数 pa 和对应的 cos 值
```js
GA.post({
     t: "event",
	 ec: "Checkout options",
	 ea: "shipping"
    dp: "/cart",
    pa: "checkout_option",
	cos:"顺丰",
})
```


- **Transaction**
追踪 Enhance Ecommerce Checkout option 需要定义参数 ti ,tt, 以及对应的结账 products
```js
GA.post({
    dp: "/thankyou",
    pa: "purchase",
	ti: "cd2ad00b-acc9-45ab-b1e0-f4720375d2f0",
	ta: "Online Store",
	tr: 118,
	tt: 5.00,
	ts: 5.00,
    products: [{
        id: "b55da",
        name: "Flexigen T-Shirt",
        price: "16.00",
        brand: "Flexigen",
        category: "T-Shirts",
    }]
})
```

- **Refund**
追踪 Enhance Ecommerce Checkout option 需要定义参数 ti ,tt, 以及对应的结账 products
```js
GA.post({
    dp: "/refund",
    pa: "refund",
	ti: "cd2ad00b-acc9-45ab-b1e0-f4720375d2f0",
	ta: "Online Store",
	tr: 118,
	tt: 5.00,
	ts: 5.00,
})
```


- **Impression**

追踪 Enhance Ecommerce Checkout option 需要传入对应的的展示商品
```js
GA.post({
    dp: "/top10Tshirt",
    impresstions: [{
            "id": "b55da",
            "name": "Flexigen T-Shirt",
            "price": "16.00",
            "brand": "Flexigen",
            "category": "T-Shirts",
            "position": 0,
            "list": "top10"
        },
        {
            "id": "f6be8",
            "name": "Comverges T-Shirt",
            "price": "33.00",
            "brand": "Comverges",
            "category": "T-Shirts",
            "position": 1,
            "list": "top10"
        }
    ]
})
```


- **Impression click**

追踪 Enhance Ecommerce Checkout 需要定义参数 pa 和对应的 products
```js
GA.post({
    dp: "/top10Tshirt",
    pa: "click",
	pal:"top10", // 对应 impressions 中 的list
	products: [{
      "id": "b55da",
      "name": "Flexigen T-Shirt",
      "price": "16.00",
      "brand": "Flexigen",
      "category": "T-Shirts",
      "position": 1,
    }]
})
```

- **Promotion**
追踪 Enhance Ecommerce Checkout 需要定义对应的 promotions
```js
GA.post({
    dp: "/top10Tshirt",
     promotions: [{
        "id": "bts",
        "name": "Back To School",
        "creative": "PRODUCT banner",
        "position": "right sidebar"
      }]
})
```

- **Promotion click**

追踪 Enhance Ecommerce Checkout 需要定义对应的被点击的 promotions 和参数 promoa
```js
GA.post({
    dp: "/top10Tshirt",
	promoa: "click",
     promotions: [{
        "id": "bts",
        "name": "Back To School",
        "creative": "PRODUCT banner",
        "position": "right sidebar"
      }]
})
```

请注意, SDK 只对 products/impressions/promotions 相关进行了相应的简化处理, 其余参数依旧遵循了 Mearseurement protocol 的规范. 参数对应的值,请参阅 Mearseurement protocol 的规范. 当然你可以直接不使用以上语法糖进行products 参数的转换,手动将自行转换好的参数,传入并发送. 例如

```js
GA.post({
    dp: "/top10Tshirt",
	promoa: "click",
   promo1id: "bts",
   promo1nm: "Back To School",
   promo1cr: "PRODUCT banner",
   promo1ps: "right sidebar",
   promoa: "click"
})
```
impression 和 promo 同样也可以跟着其他类型一起发送
```js
GA.post({
    dp: "/pdp",
    pa: "detail",
    products: [{
        id: "b55da",
        name: "Flexigen T-Shirt",
        price: "16.00",
        brand: "Flexigen",
        category: "T-Shirts",
    }],
    promotions: [{
        "id": "bts",
        "name": "Back To School",
        "creative": "PRODUCT banner",
        "position": "right sidebar"
    }],
    impresstions: [{
            "id": "b55da",
            "name": "Flexigen T-Shirt",
            "price": "16.00",
            "brand": "Flexigen",
            "category": "T-Shirts",
            "position": 0,
            "list": "top10"
        },
        {
            "id": "f6be8",
            "name": "Comverges T-Shirt",
            "price": "33.00",
            "brand": "Comverges",
            "category": "T-Shirts",
            "position": 1,
            "list": "top10"
        }
    ]
})
```



## Media Tracking
对于 GA UTM tracking, 同样需要提前定义相关参数,例如以下示例.
```js
var config = {
    data: { //common request payload
        v: 1,
        cid: 1234556,
        tid: "UA-71412438-1",
        dp: "/not_set",
        ds: "wechat",
        t: "pageview",
    },
    debug: true,
    validateHit: true, // will send to the vvalidation endpoint(optional)
    maxLogLength: 10,
    enableLogger: true,
}

App({
    onShow: function(options) {
        let utm = {
            cs: "wechat",  // utm_source
            cm: options.scene, // utm_medium
            cn: "Campaign Name", // utm_campaign
            cc: "content", // utm_campaign
        }
        config.data = {
            ...config.data,
            ...utm
        }
        var GA = new GA(config)
        GA.post({
            dp: "/App_launch"
        })
    },
})
```

[场景值 (Scene Value) ](htthttps://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.htmlp:// "场景值 (Scene Value) ") 是 微信小程序提供用来描述用户进入小程序的路径. 场景值通常可用于展现不同的入口带来的流量. 以上示例 将场景值放在 medium 中来区别从不同入口进入小程序的流量

对于扫描二维码进去小程序的场景,则需要将相应的 UTM 参数加入到 二维码中,当用户扫描二维码进入的时候读取相应的 source/medium/campaign/content 相应值, 并发送到 GA



## Best Practice

* #### Regex Table 转换对应的参数
在真正的 tracking 项目中, 经常会需要根据条件来判断和处理对应的值. 通过 SDK 提供的 interceptor 和 regex table, 我们可以轻松完成这种处理,并使代码保持整洁
示例: 根据 regex 来给对应的 dp 进行分组设置, 并设置 Content Grouping
```js
const m = [{
        inputRegex: "index",
        outputName: "'home'"
    },
    {
        inputRegex: "T-shirt|dress|shoes",
        outputName: "'pdp'"
    },
    {
        inputRegex: "myAccount|login|signup",
        outputName: "'account'"
    },
    {
        default: "others"
    }
]
GA.interceptors.request.use(function(config) { // push a handler function before send request
    config.data.cg1 = GA.weUtils.map(m, config.data.dp) // process data before send to GA, set content gronping 1
    return config;
});
```
* #### 利用 logger 来重新发送失败请求
通过 SDK 提供的 interceptor 和 Logger , 也可以轻易的实现错误重试的功能. 以下示例会在每次发送请求前检查存在本地的请求是否失败,并重新发送. 请注意, 如果要加上错误重试功能,请务必加上重试次数,否则有可能造成死循环.

```js
let conf = {
    LoggerName: "retry",
    maxLogLength: 10,
    debug: true,
    data: {
        'ua': "UA-1-1",
        "v": 1
    }
}
var retry = new GA(conf)
GA.interceptors.request.use(function(config) { // push a handler function before send request
    let t = GA.log.find(n => n.type = 'error')
    //console.log(t)
    retry.post(t.data)
    return config;
});

```

* #### 页面劫持自动发送 pageView

小程序有[生命周期](http://https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html "生命周期")的概念,在启动过程中有不同的阶段用于不同的处理. pageview应该在 onShow 触发最为合适.

小程序的开发构架是每个页面都有独立的启动阶段,那么对应 pageview 埋点而言, 就要在手动的在每个页面的 onShow 里调用相应的 pageview 代码. 这在页面很多的时候会显得不易维护且相对麻烦.  小程序的 Page 对象 是可以在每个页面共享的, 所以理论上我们可以通过劫持 Page 来实现自动埋点.

```js
const originPage = Page;

Page = (page) => {
  const originMethod = page['onShow'];
  page['onShow'] = function () {
    GA.post({
      dp: this.route,
    })
    return originMethod();
  }
  return originPage(page);
};
```

以上代码会劫持每个页面的 page 函数,并在之间先执行 pageview 上报,再继续执行原来每个页面的定义的 onShow 函数. 每当每个页面的 Page 渲染的时候便可以实现自动的上报.

但是这个做法也会造成一些问题. 例如, 假设我需要在一些特殊的页面多发几个 CD 呢? 自动上报的并不包含这些 cd. 一个好的解决方案是, 在 config 里定义所需全部变量, 在不同页面,如果有值返回 true, 没有则返回 false. 请求在发送前会将所有为 false 的参数 filter out
```js

var config = {
    data: { //common request payload
        v: 1,
        cid: 1234556,
        tid: "UA-71412438-1",
        dp: getPage(),
        ds: "wechat",
        t: "pageview",
		cd1: getCD1(),
		cd2: getCD2()
    },
    debug: true,
    validateHit: true, // will send to the vvalidation endpoint(optional)
    maxLogLength: 10,
    enableLogger: true,
}
```

另一种方案是在 onShow 函数传递相应的参数
```js


const originPage = Page;

Page = (page) => {
  const originMethod = page['onShow'];
  page['onShow'] = function (data) {
    GA.post({
      dp: this.route,
	  cd1: data.cd1,
	  cd2: data.cd2,
    })
    return originMethod();
  }
  return originPage(page);
};

```

如果在页面不多的情况下, 手动埋点依旧是最佳的方式.



## API Usage

### [GA].post / [GA].get
用于指定发送数据的方式. 我们在这里强烈推荐使用 post 发送数据.

| Require Args | Expected Value |  Return Value | Comment |
|:----:  | :----: |:----: |:----: |
| object | object | undefined | 传递的参数必须是对象,传递的参数会被统一处理成序列发送 |

```js
GA.post({
    ua: "UA-1-234567",
    v: "1",
    cid: "123456",
    dp: "/home"
})
```
如果出于特殊的原因,也可以使用 get 发送请求

```js
GA.get({
    ua: "UA-1-234567",
    v: "1",
    cid: "123456",
    dp: "/home"
})
```



### [GA].validation

SDK 内置实现了一个简易的用于验证参数的对象. 可用于自定义检验参数的规则. Mearsurement Protocol 本身不对参数进行校验, 此模块默认不开启. 需要开启此模块,则需要在 config 设置 validateParams 为 true. 通常建议在开发调试阶段使用此模块检验请求参数,在生产环境关闭此模块.

内置默认了以下几个简单检查规则
- 检查 cid ua cid 是否存在
- 检查 ua 的格式
- 检查请求的长度是否超出 GA 限制的 8012KB

提供以下 API 用于自定义检验规则

- **[GA].validation.addRequirelist**

| Require Args | Expected Value |  Return Value | Comment |
|:----:  | :----: |:----: |:----: |
| String | "dp", "ua"... | object | 检验通过则返回检验对象,否则报错|

使用以上方法可以增加需要检查的必须参数. 以下例子用于定义了对 dp 是否存在的检查

```js
GA.validation.addRequirelist("dp")
```

- **[GA].validation.addRegexList**

| Require Args | Expected Value |  Return Value | Comment |
|:----:  | :----: |:----: |:----: |
| Object |object | object | 检验通过则返回检验对象,否则报错. 检验规则必须以对象的方式传入|

使用以上方法可以自定义regex 用于检查相应的参数. 以下例子定义了对 regex 对 dh 和 dl 进行检查

```js
GA.validation.addRegexList({
    "dh":"uat|dev|qa.gatest.com",
	"dp" : "[^\/]$"
})
```

- **[GA].validation.add**

| Require Args | Expected Value |  Return Value | Comment |
|:----:  | :----: |:----: |:----: |
| function | function | object | 检验通过则返回检验对象,否则报错. 检验规则必须以函数的方式传入. 检验通过必须返回检验对象|

自定义检验函数, 传入函数会保存在 array 中按顺序执行.可以多次使用此 API 传入多个自定义检验函数. 以下示例用于检查请求参数中是否dp 和 dh 都存在

```js
GA.validation.add((obj) =>{
    if(obj.hasOwnProperty("dp") && obj.hasOwnProperty("dh") ){
	    return obj
	}
	return throw new Error("dp and dh is mandotory!")
	})
```


### [GA].interceptor.request.use

| Require Args | Expected Value |  Return Value | Comment |
|:----:  | :----: |:----: |:----: |
| function | function | object | 拦截函数必须以函数的方式传入. 必须返回拦截对象|

interceptor 用于在请求发出去前拦截对象并做相应处理. interceptor 与 config 中的  transferReponse 的不同是 interceptor 可以设置多个拦截函数.  以下示例展现每次拦截对象并对 dp 进行相应的处理.


```js
GA.interceptors.request.use(function(res) { // push a handler function before send request
      res.data.dp = res.data.dp == 'index'? "home": res.data.dp // process data before send to GA
      return res;
});
```
### [GA].weUtils
内置的小程序工具函数.

-**[GA].weUtils.map**

内置的 regex table, 可用于对数据进行额外的 regex table 的处理

| Require Args | Expected Value |  Return Value | Comment |
|:----:  | :----: |:----: |:----: |
| table :  object   <br> field : String| table :  object   <br> field : "dp"| String  | 返回对应的输出|

以下是一个示例, 用于输出对应的 GA property
```js
let m = [{
        inputRegex: "au|en|fr.gatest.com",
        outputName: "UA-7689450-6"
    },
	{
	    inputRegex: "cn.gatest.com",
        outputName: "UA-7689450-6"
	},
    {
        default: "UA-1-1"
    }
]

let tid = GA.weUtils.map(m,"dl")
console.log(tid)
```

-**[GA].weUtils.mappingSceneToCN**

内置工具将场景值转换成中文

| Require Args | Expected Value |  Return Value | Comment |
|:----:  | :----: |:----: |:----: |
| num :  number  <br> table : Object| 1089, Object  String  | num 必须, table 如果没有指定将使用内置转换表 |

以下是一个示例, 用于输出对应的 GA property
```js

App({
    onLaunch: function() {
        console.log('App Launch')
    },
    onShow: function(options) {
        let cm = GA.weUtils.mappingSceneToCN(options.scene)
        console.log(cm)
    }
})

```

### [GA].getLog

| Require Args | Expected Value |  Return Value | Comment |
|:----:  | :----: |:----: |:----: |
| null | null | array | 返回存在本地的 log|

```js
let log = GA.getLog()
console.log(log)
```

### [GA].setLog

| Require Args | Expected Value |  Return Value | Comment |
|:----:  | :----: |:----: |:----: |
| array | array | undefined | 设置相应的log, 会覆盖当前存在本地的log|

以下实例展现了增加一个 log 到本地

```js
let log = GA.getLog()
log.push({
    type:"inset a log",
	data: "test log",
})
GA.setLog(log)
console.log(log)
```


### config
config 用于管理实例的配置, 需要在实例化时传入,不允许为空. 默认有以下配置

- **data**:  需要在默认配置中发送到 GA 的数据.需要以对象的格式传入

| Params | Type |defalut  Value | Expected Value | Comment |
|:----: |:----:  | :----: |:----: |:----: |
| data | Object | empty |  object | 比如以对象按照键值传入|

- **proxyURL**:  微信小程序不能直接发数据到 GA 的 endpoint, 因为需要一个转发服务器用于转发相应的请求到 GA 的服务器. 这个参数在生产环境的时候是必须要设置的

| Params | Type |defalut  Value | Expected Value | Comment |
|:----: |:----:  | :----: |:----: |:----: |
| ProxyURL | String | empty |  https://www.yourProxyURL.com/collect | 需要替换成自己实际的转发域名|



- **debug**: 参数用与决定实例是否开启调试模式. 主要用户在开发阶段验证参数是否可以直接被 GA 收到. 当没有 制定 proxyURL 并且 debug 为 true 的时候, 默认发送的 endpoint 为 https://www.google-analytics.com/collect

| Params | Type |defalut  Value | Expected Value | Comment |
|:----: |:----:  | :----: |:----: |:----: |
| debug | boolean | false |  true,false | 主要用于决定发送数据的 endpoint |

- **validateHit **: 此参数设置为true, 则发送数据的endpoint 将会设置成 https://www.google-analytics.com/debug/collect . 可用于检验发送给 GA 参数是否合规, GA 是否能正确的解析参数. 关于此 endpoint 请请参阅 [Measurement Protocol debug](https://developers.google.com/analytics/devguides/collection/protocol/v1/validating-hits "Measurement Protocol debug")

| Params | Type |defalut  Value | Expected Value | Comment |
|:----: |:----:  | :----: |:----: |:----: |
| validateHit | boolean | false |  true,false | 主要用于决定发送数据的 endpoint |


- **enableLogger ** : 此参数用于决定是否开启 Logger 用于记录发送的请求. 发送的请求的会存在 localStorage (web) 或者是 Storage (wechat)

| Params | Type |defalut  Value | Expected Value | Comment |
|:----: |:----:  | :----: |:----: |:----: |
| enableLogger  | boolean | true |  true,false | 是否启用 Logger |


- **LoggerName ** : 此参数用于决定存在 localStorage (web) 或者 Storage (wechat) 的键值.  如果有多个实例, 建议为每个实例设置不同 LoggerName

| Params | Type |defalut  Value | Expected Value | Comment |
|:----: |:----:  | :----: |:----: |:----: |
| LoggerName  | String | gaLog |  "PageViewLog", "EventLog" | 命名存在本地的Logger |

- **wxRequestTimeout** : 此参数用于请求的 微信小程序 timeout 间隔.  

| Params | Type |defalut  Value | Expected Value | Comment |
|:----: |:----:  | :----: |:----: |:----: |
| wxRequestTimeout  | Number | 2000 |  3000,4000 | 单位是毫秒 |

- **transaferRequest** : 在发送 Request 之前进行额外的处理.

| Params | Type |defalut  Value | Expected Value | Comment |
|:----: |:----:  | :----: |:----: |:----: |
| transaferRequest(config:object)  | empty | function |  function | transaferRequest 默认的参数是整个对象的配置<br>发送到 的数据存在 config.data <br>必须返回 config (object) |

- **transferResponse** : 在收到 Response 之后进行额外的处理.

| Params | Type |defalut  Value | Expected Value | Comment |
|:----: |:----:  | :----: |:----: |:----: |
| transferResponse(res:object)  | empty | function |  function | transferResponse 默认的参数是返回的reponse (object)  |


- **onSuccess** : 发送成功之后的回调函数

| Params | Type |defalut  Value | Expected Value | Comment |
|:----: |:----:  | :----: |:----: |:----: |
| onSuccess(options:object,res:object)  | empty | function |  function | onSuccess 默认的参数 <br>options请求的对象<br>res:返回的请求 |


- **onError** : 发送失败之后的回调函数.  

| Params | Type |defalut  Value | Expected Value | Comment |
|:----: |:----:  | :----: |:----: |:----: |
| onError(options:object,res:object)  | empty | function |  function | onError 默认的参数 <br>options: 请求的对象<br>res:返回的请求 |

Config 必须在创建实例时传入,以下是一个示例

```js
const config = {
    transferRequest(config) {
        console.log('do something before sending the hit')
        //config.data.dp = "/test"
        return config
    },
    transferResponse(res) {
        console.log("do something for the response")
        return res
    },
    data: { //common request payload
        v: 1,
        cid: 1234556, //clientId
        tid: env == 'dev': "UA-5465464-2": "UA-78546532-1",
        ds: "wechat", //  data source
        t: "pageview", //  track type
        debug: true,
        validateHit: true,
    },
    maxLogLength: 10,
    enableLogger: true,
    LoggerName: 'WechatLog',
    onSuccess(config, res) {
        console.log("success") //your custom success function (options)
    },
    onError(config, res) {
        console.log("Error")
    },
}
const GA = new GA(config)
```


## TODO
- 移除 web 相关功能
	- 未来将在下一版本中逐渐移除 web 相关的支持, 如果需要在 web 端有相应的场景, 请直接使用 官方 GA SDK 和 GTM. 这里增加 web 的支持只是为了方便调试.
- 整合微信小程序相关API
	-  将进一步整合微信小程序内置 API, 简化部署方式
-  UTM 参数的自动读取
	- 下一版本会支持自动从 route 中读取 UTM 参数
- 提高代码健壮程度, 重构代码
	- 移除无用代码, 增加错误验证, 优化报错信息, 重新组织代码

## Authors

**LRENZ**- *simple is less* - [Linkedin](https://www.linkedin.com/in/renzhong-liu-668006169/)


 ## Reference
  此 SDK 只是从代码层面提供了一个 API 友好并且功能完善的的解决方案. 对于一个完整的微信的小程序 tracking, 更多的时间也要花在定义需要追踪 KPI 并将这些 KPI 转化到需要发送到 GA 的参数. 因为, 非常建议在使用此 SDK 前先了解 GA 和 Measurement Protocol
 * [Measurement Protocol](https://developers.google.com/analytics/devguides/collection/protocol/v1/devguide "Measurement Protocol")
 * [Measurement Protocol paramters](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters "Measurement Protocol paramters")

## License
 This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
