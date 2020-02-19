
# Wechat Mini Program GA SDK 
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

一个基于 Mearsurement Protocol 封装的微信小程序 SDK. 支持以下特性
 - Axios-like API, 支持config, transferRequest, transferReponse, Interceptor, API 灵活简单
 - 内置 Logger 功能, 方便调试和检查数据发送状态
 - 内置有用的工具函数, 例如 参数检验, regex table
 - 基于 webpack 开发,易于拓展
 - 同时支持小程序和浏览器

## Install

安装 SDK 最简单的方式是直接下载对应的js文件并在小程序引入,例如
```js
var GA = require('./GA/ga.js').default;
var GAtracker = new GA()
```

### 手动编译

安装以下library

```sh
yarn add webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env
```

执行 build

``` sh
yarn build
```

特别注意, 小程序和浏览器的打包规范是不一样的.小程序需要打包成commonjs, 浏览器则需要打包成umd. 手动打包需要特别修改webpack.config.js 文件的 libraryTarget. 手动编译后再重新在项目中引入

如需在浏览器中调试,请将 webpack.config.js 文件的 libraryTarget 改写成umd后 执行

``` sh
yarn start
```


## Getting Start

引入后追踪对象挂载在在default 下.  设置config 并 声明对象并挂载在APP 下方便后续使用. config 会在每个实例共享. 最佳做法是 只在 config 中加入所有公用的数据和配置项, 需要不用页面单独发送的数据,则在后续手动添加

```js
var GA = require('./GA/ga.js').default;

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
}

const GA = new GA()
```

为了方便在小程序中使用,可以把对象挂载到 APP 对象中

```js
App({
        ...,
        GA,
        ...,
    })
```
**Track Pageview**

```js
    app.GA.post({
      dp: '/home'
    })
```

**Track Event**

```js
    app.GA.post({
       t:'event',
      dp: '/pdp',
      ec:'action",
      ea;'add to cart"
    })
```

如果在之后 post 或者 get 中添加的参数与 config 中有重合,则config 中的相应字段会被覆盖,但是这个覆盖是一次性的.如果之后没有手动传这个字段则会从 config 中继续读取默认字段.

另外一种方式是声明两个对象, 一个实例专门用于追踪Pageview, 另外一个用于追踪 Event. 每个实例互不干扰

```
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

const GAPvTracker = new GA()

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
  LoggerName: 'EventLog',  // Logger Name to store the log locally
  proxyURL : "YOUR_PROXY_URL" // Wechat mini program is not allowed to send to GA server directly, you will require a middle server to forward the hits
}

const GAEventTracker = new GA()
```


Explain how to run the automated tests for this system

## API Usage
### config

config 配置对象

```
Give an example
```

### Post & Get

Explain what these tests test and why

```
Give an example
```

### validation

Explain what these tests test and why

```
Give an example
```

### Logger

Explain what these tests test and why

```
Give an example
```

### Interceptor

Explain what these tests test and why

```
Give an example
```

## Enhance Ecommerce Tracking

Add additional notes about how to deploy this on a live system

## Advance usage

* Regex Table to convert page or scene value
* 利用 logger 来重新发送失败请求
* 防止重复 transaction. persist UTM source

## Best Practice

1/发流. SIT - DEV- UAT - Prod
2/页面绑定
3/ 小程序的生命周期 (UTM 参数场景值)



## Todo

1/ 移除 web 相关功能
2/ 整合微信小程序相关API
3/ UTM 参数的自动读取
3/ 提高代码健壮程度, 重构代码

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
```
