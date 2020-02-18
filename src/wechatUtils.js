
const SceneMapping = {
    1001: "发现栏小程序主入口",
    1005: "顶部搜索框的搜索结果页",
    1006: "发现栏小程序主入口搜索框的搜索结果页",
    1007: "单人聊天会话中的小程序消息卡片",
    1008: "群聊会话中的小程序消息卡片",
    1011: "扫描二维码",
    1012: "长按图片识别二维码",
    1013: "手机相册选取二维码",
    1014: "小程序模版消息",
    1017: "前往体验版的入口页",
    1019: "微信钱包",
    1020: "公众号profile页相关小程序列表",
    1022: "聊天顶部置顶小程序入口",
    1023: "安卓系统桌面图标",
    1024: "小程序profile页",
    1025: "扫描一维码",
    1026: "附近小程序列表",
    1027: "顶部搜索框搜索结果页“使用过的小程序”列表",
    1028: "我的卡包",
    1029: "卡券详情页",
    1030: "自动化测试下打开小程序",
    1031: "长按图片识别一维码",
    1032: "手机相册选取一维码",
    1034: "微信支付完成页",
    1035: "公众号自定义菜单",
    1036: "App 分享消息卡片",
    1037: "小程序打开小程序",
    1038: "从另一个小程序返回",
    1039: "摇电视",
    1042: "添加好友搜索框的搜索结果页",
    1043: "公众号模板消息",
    1044: "带shareTicket的小程序消息卡片",
    1045: "朋友圈广告",
    1046: "朋友圈广告详情页",
    1047: "扫描小程序码",
    1048: "长按图片识别小程序码",
    1049: "手机相册选取小程序码",
    1052: "卡券的适用门店列表",
    1053: "搜一搜的结果页",
    1054: "顶部搜索框小程序快捷入口",
    1056: "音乐播放器菜单",
    1057: "钱包中的银行卡详情页",
    1058: "公众号文章",
    1059: "体验版小程序绑定邀请页",
    1064: "微信连Wifi状态栏",
    1067: "公众号文章广告",
    1068: "附近小程序列表广告",
    1069: "移动应用",
    1071: "钱包中的银行卡列表页",
    1072: "二维码收款页面",
    1073: "客服消息列表下发的小程序消息卡片",
    1074: "公众号会话下发的小程序消息卡片",
    1077: "摇周边",
    1078: "连Wi-Fi成功页",
    1079: "微信游戏中心",
    1081: "客服消息下发的文字链",
    1082: "公众号会话下发的文字链",
    1084: "朋友圈广告原生页",
    1089: "微信聊天主界面下拉",
    1090: "长按小程序右上角菜单唤出最近使用历史",
    1091: "公众号文章商品卡片",
    1092: "城市服务入口",
    1095: "小程序广告组件",
    1096: "聊天记录",
    1097: "微信支付签约页",
    1099: "页面内嵌插件",
    1102: "公众号 profile 页服务预览",
    default:"unknow scene value"
  };


  class Mapping {
      constructor() {
          this.currentMap = {}
          this.currentOutput = ""
      }

      getMap() {
          return this.map
      }
      Mapping(map,input){
        const current = map.find(item => input.match(new RegExp(item.inputRegex,"i"))) || {}
        this.currentMap = current
        this.currentOutput =  current.outputName
        return current.outputName
      }

      getOutput() {
          return this.currentOutput
      }
  }

  var m = new Mapping()


class wechatUtils{
  construct(sMapping){
    this.onWechat = this.isOnwechat()
    this.SMapping = sMapping || SceneMapping
  }

  map(table,field){
    return m.Mapping(table,field)
  }

  isOnwechat(){
    if(typeof wx == 'object'){
      return true
    }
    return false
  }

  mappingSceneToCN(num){
    if(this.onWechat){
      return this.SMapping[num] || this.SMapping['default']
    }
    return ''
  }

  generateUA(){
    if(typeof wx == 'object'){
    let res = wx.getSystemInfoSync();
    let isAndroid = res.system.toLowerCase().indexOf('android') > -1;
    let iresPad = !isAndroid && res.model.toLowerCase().indexOf('iphone') == -1;
      if (isAndroid) {
        return "Mozilla/5.0 (Linux; U; " + res.system + "; " + res.model + " Build/000000) AppleWebKit/537.36 (KHTML, like Gecko)Verreson/4.0 Chrome/49.0.0.0 Mobile Safari/537.36 MicroMessenger/" + res.version;
      } else if (!iresPad) {

    let v = res.system.replace(/^.*?([0-9.]+).*?$/, function (x, y) { return y; }).replace(/\./g, '_');
      return "Mozilla/5.0 (iPhone; CPU iPhone OS " + v + " like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C92 MicroMessenger/" + res.version;
    } else {
      let v = res.system.replace(/^.*?([0-9.]+).*?$/, function (x, y) { return y; }).replace(/\./g, '_');
      return "Mozilla/5.0 (iPad; CPU OS " + v + " like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/10A406 MicroMessenger/" + res.version;
        }
    }
    if(typeof navigator == 'object'){
      return navigator.userAgent
    }
    return ''
  }

  getCurrentPageUrlWithArgs() {
  var pages = getCurrentPages()
  var currentPage = pages[pages.length - 1]
  var url = currentPage.route
  var options = currentPage.options

  //拼接url的参数
  var urlWithArgs = url + '?'
  for (var key in options) {
    var value = options[key]
    urlWithArgs += key + '=' + value + '&'
  }
  urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1)

  return urlWithArgs
}

 getCurrentPageUrl() {
  var pages = getCurrentPages()
  var currentPage = pages[pages.length - 1]
  var url = currentPage.route
  return url
}

}






export default wechatUtils
