import Logger from './log'
import _default from './config'

class Request {
  constructor(option){
     this.Log = new Logger(option)
  }


  webRequest(option){
    //let {url,method,data} = option
    // object to params?
      let that = this
      if (String(option) !== '[object Object]') return undefined
      option.method = option.method ? option.method.toUpperCase() : 'POST'
      option.data =that.removeEmptyObjKey(option.data) || {}
      var formData = []
      for (var key in option.data) {
        formData.push(''.concat(key, '=', option.data[key]))
      }
      option.data = formData.join('&')

      if (option.method === 'GET') {
        option.getUrl= option.url + "?" + option.data
      }
      let {transferResponse} = option

      //console.log(option)
      var xhr = new XMLHttpRequest()
      xhr.responseType = option.responseType || 'json'
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            if(transferResponse)
            {
              //console.log(xhr.response)
              that.Log.enqueue({
				         type:"success",
                url:option.url?option.url:option.getUrl,
                data:option.data,
                res:option.validateHit ? transferResponse(xhr.response): xhr.status,
                hitID:option.hitID,
                //transferResponse(xhr.response)
              })
              if(!!option.onSuccess){
                option.onSuccess(option)
              }

                //delete option.transferRespons
                //transferResponse = (res)=> res


            }else{
              that.Log.enqueue({
			        	type:"success",
                url:option.url?option.url:option.getUrl,
                data:option.data,
                res:option.validateHit ? xhr.response : xhr.status,
                hitID:option.hitID,
              })
              if(!!option.onSuccess){
                option.onSuccess(option)
              }

            }
          } else {
              //this.fail()
              that.Log.enqueue({
                type:"error",
                data:option.data,
                url:option.url?option.url:option.getUrl,
                res:option.validateHit ? xhr.response : "Error",
                hitID:option.hitID,
                //data:option.data,
                //transferResponse(xhr.response)
              })
              if(!!option.onError){
              option.onError(option)
              }

              return "Request Fail"

          }
        }
      }
      if(option.method == "GET"){
        xhr.open(option.method, option.getUrl, true)
        xhr.send()
      }

      if (option.method === 'POST') {
        xhr.open(option.method, option.url, true)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(option.data)
      }
      //console.loh(t)
    }


weRequest(options){
  let that = this
   let {transferResponse} = options
   options.data = this.removeEmptyObjKey(options.data)
   wx.request({
     url:options.url,
     method:options.method,
     data:options.data,
     header:options.headers,
     timeout:options.wxRequestTimeout,
     success(res){
       //console.log(res)
       if(transferResponse){
       that.Log.enqueue({
		  type:"success",
         url:options.url?options.url:options.getUrl,
         data:options.data,
         res:options.transferResponse(res),
         hitID:options.hitID,
       })
     }else{
      that.Log.enqueue({
		  type:"success",
         url:options.url?options.url:options.getUrl,
         data:options.data,
         res:res,
         hitID:options.hitID,
       })
     }
       if(!!options.onSuccess){
         options.onSuccess(options,res)
       }
     },
     fail(res){
       //console.log(res)
       if(transferResponse){
       that.Log.enqueue({
		   type:"error",
         url:options.url?options.url:options.getUrl,
         data:options.data,
         res:options.transferResponse(res),
         hitID:options.hitID,
       })
     }else{
       that.Log.enqueue({
         url:options.url?options.url:options.getUrl,
         data:options.data,
         res:res,
         hitID:options.hitID,
       })
     }
       if(!!options.onError){
         options.onError(options,res)
       }

     }
   })
}
isonWechat(){
  return typeof wx == 'object'? true : false
}

removeEmptyObjKey(obj){
    Object.keys(obj).forEach(key => {
     if (obj[key] === undefined || !obj[key]) {
      delete obj[key];
     }
    });
     return obj
   }

send(options){

  if(this.isonWechat()){
    return this.weRequest(options)
  }
  return this.webRequest(options)

}

}

export default Request
