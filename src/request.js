

class Request{
  constructor(){
  }

  ajax(options){
    this.request(options)
  }

  request(option){
    //let {url,method,data} = option
    // object to params?
      if (String(option) !== '[object Object]') return undefined
      option.method = option.method ? option.method.toUpperCase() : 'GET'
      option.data = option.data || {}
      var formData = []
      for (var key in option.data) {
        formData.push(''.concat(key, '=', option.data[key]))
      }
      option.data = formData.join('&')

      if (option.method === 'GET') {
        option.getUrl= option.url
      }
      const {transferResponse} = option
      if(!option.KeepTransferReponse) delete option.transferRespons
      console.log(option)
      var xhr = new XMLHttpRequest()
      xhr.responseType = option.responseType || 'json'
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            if(transferResponse)
            {
              option.success(transferResponse(xhr.response))
            }else{
              option.success(xhr.response)
            }
          } else {
              //this.fail()
              option.fail()
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
  if(!!wx){

  }
}
isonWechat(){
  return false
}

send(options){
  if(this.isonWechat()){
    return this.weRequest(options)
  }
  return this.ajax(options)

}

}

export default Request
