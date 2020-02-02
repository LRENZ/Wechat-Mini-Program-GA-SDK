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
    let op = this._preprocessArgs('POST', args);
     //console.log(op)
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
  console.log(config)
    return config;
  }




  _preprocessArgs(method, ...args) {
  let options;
  //
  let arg = args.flat()
  //window.arg = arg
  if(typeof arg[0] == "object"){
    options = {
      method,
      url:this.default.url,
    ...arg[0]}
  }

  console.log('aeg')

  //let { error, value } = schema.validate(options.data);
  //console.log(error)
  //helper.Error(error)
  console.log(options)
  //console.log(arg)
  /*if (arg.length == 1 && typeof arg[0] == 'string') {
    options = { method, url: arg[0] };
  } else if (arg.length != 1 && arg[1].constructor == Object) {
    options = {
      ...arg[1],
      method,
      url:arg[0],
    };
  } else if(arg[0].constructor == Object) {
    options = {method, url:this.getEnvURL()}
    return options;
  }else{
    return undefined;
  }*/
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

  const res = new Request()
  // 合并
  let cog = options
  let mh = options.method
  //delete options.data
  //let cog = {
    //...this.default,
    //...options
  //}
  //console.log(this.default)
  helper.merge(cog,this.default)
  cog.method = mh
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
