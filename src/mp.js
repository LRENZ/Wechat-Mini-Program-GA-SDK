import _default from './config';
import Interceptor from './Interceptor';
import Request from './request';
import schema from './validation'
import helper from './helper'
import Store from './common'

class MP{
  constructor(options = {} ){
    this.default = this.create(options)
   this.interceptors = {
    request: new Interceptor(),
  response: new Interceptor(),
};
  }

   getLog(){
     let log = new Store();
     return log.getLog();
   }

  get(...args){
   let op = this._preprocessArgs("GET",args)
   if(!op){

   }
   return this.request(op)
  }

  post(...args) {
    console.log(args)
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
  if(config.debug && config.validateHit){
    return config.GAdebugURL
  }
  if(config.debug){
    return config.GAURL
  }
  if(!config.debug){
    return config.proxyURL
  }
}

request(options){
  const optionCopy = helper.deepClone(options)
  const res = new Request()
  options.hitID = helper.generateUUID()
  // 合并
  let cog = options
  const mh = optionCopy.method
  const opData = optionCopy.data

  cog= helper.merge(cog,this.default)
  //helper.merge(cog,options)
  cog.method = mh
  cog.data = helper.merge(cog.data,opData)
  // 检验参数
  //替换 baseURL
  //cog.url = this.getEnvURL(cog)
  //console.log(cog)

  // 变换下请求
  let {transferRequest} = cog

  if(transferRequest) cog = transferRequest(cog)
    //delete cog.transferRequest
    //delete this.default.transferRequest
    //transferRequest = (cog) => cog;

  let list = this.interceptors.request.list();
  list.forEach(fn => {
  cog = fn(cog);
});
  //window.cog = cog
  //window.cog = cog
  //window.res= res
  //cog.success = this.onSuccess
  //cog.fail = this.onError
  // 正式请求
  return res.send(cog)
}


}

export default MP
