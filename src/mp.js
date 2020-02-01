import _default from './config';
import Interceptor from './Interceptor';
import Request from './request';
import schema from './validation'
import helper from './helper'

class MP{
  constructor(options = {} ){
    this.default = this.create(options)
   this.interceptors = {
    request: new Interceptor(),
  response: new Interceptor(),
};


  }

  preSent(data){
    //this.PreSentLogger.enqueue(data)
  }

  onSuccess(res){
    console.log('res')
    console.log(this)
    //this.ResponseLogger.enqueue(res)
  }

  onError(e){
    console.log("error")
  //  this.errorLogger.enqueue(e)
  }

  get(...args){
    console.log(this)
   let op = this._preprocessArgs("GET",args)
   if(!op){

   }
   return this.request(op)
  }

  post(...args) {
    let op = this._preprocessArgs('POST', args);
     console.log(op)
    if (!op) {
      return op
    }
    return this.request(op)
  }


  create(options = {}){

    let config = {
    ...JSON.parse(JSON.stringify(_default)),
    ...options
  };
  config.url = this.getEnvURL(config)

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
      url:this.getEnvURL(this.default),
    ...arg[0]}
  }

  let { error, value } = schema.validate(options.data);
  console.log(error)
  helper.Error(error)
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
  console.log(config)
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
  var cog = {
    ...this.default,
    ...options
  }

  console.log(cog)
  // 检验参数

  //替换 baseURL
  cog.url = this.getEnvURL(cog)
  //console.log(cog)

  // 变换下请求
  const {transferRequest} = cog
  if(!cog.KeepTransferRequest) delete cog.transferRequest
  if(transferRequest) cog = transferRequest(cog)
  console.log(cog)
  let list = this.interceptors.request.list();
  list.forEach(fn => {
  cog = fn(cog);
});

  console.log(cog)
  window.cog = cog
  //window.cog = cog
  //window.res= res
  //cog.success = this.onSuccess
  //cog.fail = this.onError
  // 正式请求
  return res.send(cog,this.onSuccess,this.onError)
}


}

export default MP
