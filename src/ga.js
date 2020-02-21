import _default from './config';
import Interceptor from './Interceptor';
import Request from './request';
import schema from './validation'
import helper from './helper'
import Store from './common'
import eec from './EecUtils.js'
import wechatUtils from './wechatUtils'
import validation from './validation.js'
class GA{
  constructor(options = {} ){
    this.weUtils = new wechatUtils()
    this.default = this.create(options)
   this.interceptors = {
    request: new Interceptor(),
  response: new Interceptor(),
}

    this.validation = new validation()
    this.res = new Request(this.default)
  }

  getLog(){
    if( typeof wx == "object"){
      let t =wx.getStorageSync(this.default.LoggerName)
      return t
    }
    if(!!document.URL){
      try{
        return JSON.parse(window.localStorage.getItem(this.default.LoggerName))
      }catch(e){
        return window.localStorage.getItem(this.default.LoggerName)
      };
    }
  }

  getLogByHitId(id){
    let l = this.getLog()
    let lobj = l.filter(n => n['hitID'] == id)
    return lobj[0] || undefined
  }

  removeLogByHitId(id){
    let l = this.getLog()
    let lobj = l.filter(n => n['hitID'] != id)
    this.setLog(lobj)
    return lobj
  }

  setLog(log){
    if( typeof wx == "object"){
      let t =wx.setStorage({key:this.default.LoggerName,data:log})
      return t
    }
    console.log("test")
    if(!!document.URL){
      try{
        return  window.localStorage.setItem(this.default.LoggerName,JSON.stringify(log));
      }catch(e){
        console.log(e)
      };

    }

  }

  get(...args){
   let op = this._preprocessArgs("GET",args)
   if(!op){

   }
   return this.request(op)
  }

  post(...args) {
    let op = this._preprocessArgs('POST', args);
    if (!op) {
      return op
    }
    return this.request(op)
  }


  create(options = {}){

    if(JSON.stringify(options) === '{}') throw new Error("Error : config could not empty!")
    let config = {
    ...JSON.parse(JSON.stringify(_default)),
    ...options
  };
  config.url = this.getEnvURL(config)
  if(typeof wx == "object"){
    config.data.ua = this.weUtils.generateUA()
  }
  helper.merge(config.data,config.defaultGaData)

    return config;
  }

  _preprocessArgs(method, ...args) {



  let options;
  let arg = args.flat()
  if(arg.length == 0){
    options ={
      method,
      url:this.default.url,
    }
  }
  if(typeof arg[0] == "object"){
    options = {
      method,
      url:this.default.url,
    data:arg[0]}
  }

  return options;
}


getEnvURL(config){
  if(!!config.proxyURL){
    return config.proxyURL
  }

  if(config.debug){
    return config.GAURL
  }

  if(config.debug && config.validateHit){
    return config.GAdebugURL
  }

  if(!config.debug && !config.proxyURL){
    throw new Error("if you are on the prod env, then Proxy URL require")
  }
}

request(options){

  const optionCopy = helper.deepClone(options)

  options.hitID = helper.generateUUID()
  // 合并
  let cog = options
  const mh = optionCopy.method
  const opData = optionCopy.data

  cog= helper.merge(cog,this.default)
  //helper.merge(cog,options)
  cog.method = mh
  cog.data = helper.merge(cog.data,opData)

  var cc = helper.deepClone(cog)
  if(cc.data.hasOwnProperty("productScopeCD")){
    var cogCd = cc.data.productScopeCD || {}
    delete cc.data.productScopeCD
  }

    if(cog.data.hasOwnProperty("productScopeCM")){
      var cogCm = cc.data.productScopeCM || {}
      delete cc.data.productScopeCM
    }
  let eecobj = eec.checkEEC(cc.data,cogCd,cogCm)

  cc.data = Object.assign(cc.data,eecobj)
  if(cc.data.hasOwnProperty("products")){
    delete cc.data.products
  }

  if(cc.data.hasOwnProperty("promotions")){
    delete cc.data.promotions
  }

  if(cc.data.hasOwnProperty("impresstion")){
    delete cc.data.impresstion
  }

   if(cc.validateParams){
     this.validation.use(cc.data)
   }
  let {transferRequest} = cc

  if(transferRequest) cc = transferRequest(cc)
    //delete cog.transferRequest
    //delete this.default.transferRequest
    //transferRequest = (cog) => cog;

  let list = this.interceptors.request.list();
  list.forEach(fn => {
  cc = fn(cc);
});

  return this.res.send(cc)
}


}

export default GA
