
# Wechat Mini Program GA SDK 

基于mearsurement protocol 封装的微信小程序 SDK. 支持以下特性
 - Axios-like API, 支持config, transferRequest, transferReponse, Interceptor, API 灵活简单
 - 内置 Logger 功能, 方便调试和检查数据发送状态
 - 内置 validation 功能
 - 基于 webpack 开发,易于拓展
 - 同时支持小程序和浏览器

## Install

安装 SDK 最简单的方式是直接下载对应的js文件并在小程序引入,例如

### 手动编译

安装以下library

```javascript
yarn add 
```

执行 build

``` javascript
yarn build
```

特别注意, 小程序和浏览器的打包规范是不一样的.小程序需要打包成commonjs, 浏览器则需要打包成umd. 手动打包需要特别修改webpack.config.js 文件

```javascript
yarn build
```

## Getting Start

引入后追踪对象挂载在在default 下.  设置config 并 声明对象并挂载在APP 下方便后续使用. config 会在每个实例共享. 最佳做法是 只在 config 中加入所有公用的数据和配置项, 需要不用页面单独发送的数据,则在后续手动发送. 分割配置有利于清晰定义追踪项目

```
Give the example
```

**Track Pageview**

```
until finished
```

**Track Event**

```
until finished
```

也可以同时声明两个对象, 一个实例专门用于追踪Pageview, 另外一个用于追踪 Event. 每个实例互不干扰

```
until finished
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
1/ 页面绑定
2/ 开发流. SIT - DEV- UAT - Prod


## Todo

1/ 移除 web 相关功能
2/ 整合微信小程序相关API
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
