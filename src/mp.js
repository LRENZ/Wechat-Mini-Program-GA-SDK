import _default from './config'
import Interceptor from './Interceptor';
import Request from './request'
function request(){

}

class MP{
  constructor(options = {} ){
    this.default = this.create(options)
   this.interceptors = {
  request: new Interceptor(),
  response: new Interceptor(),
};
  }

  get(...args){
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
    return config;
  }




  _preprocessArgs(method, ...args) {
  let options;
  //
  let arg = args.flat()
  //console.log(arg)
  if (arg.length == 1 && typeof arg[0] == 'string') {
    options = { method, url: arg[0] };
  } else if (arg.length != 1 && arg[1].constructor == Object) {
    options = {
      ...arg[1],
      method,
      url:arg[0],
    };
  } else {
    return undefined;
  }
  return options;
}
preSent(fn){

}
onSuccess(fn){
  console.log('res')
}

onError(fn){
  console.log("error")
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
  window.res= res
  cog.success = this.onSuccess
  cog.fail = this.onError
  // 正式请求
  return res.send(cog)
}


}

export default MP
