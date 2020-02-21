import GA from './ga'

/*
let UA=()=> "UA-71412438-1"

let config = {
  transferRequest(config){
    console.log('do something before sending the hit')
    //config.data.dp = "/test"
    return config
  },
  data:{  //common request payload
    v:1,
    cid:1234556,
    tid:UA(),
    dp:"placeholder",
    ds:"wechat",
    cd1:"custom dimension1",
    pal:'search result'
  },
  transferResponse(res){
    console.log("do something for the response")
    return res
  },
  validateHit:false, // will send to the vvalidation endpoint(optional)
  //proxyURL:"YOUR_PROXY_URL"
  onSuccess(config){
    console.log("success") //your custom success function (options)
  },
  onError(config){
    console.log("Error")
  },
  //maxLogLength:10,
  enableLogger:true,
  LoggerName:"we"
}
var t = [{
     inputRegex:"/wechat",
     outputName:"/map"
}]
let G = new GA(config)
//window.GA= GA
G.interceptors.request.use(function(config) { // push a handler function before send request
  config.data.dp  = G.weUtils.map(t, config.data.dp) // process data before send to GA
  return config;
});

G.post({
  dp:"/wechat",
  t:'event',
  ec:"test",
  ea:"wechatSDK",
  pa:"detail",
  "products": [
    {
      "id": "bc823",
      "name": "Fuelworks T-Shirt",
      "price": "92.00",
      "brand": "Fuelworks",
      "category": "T-Shirts",
      "position": "4"
    },

    {
      "id": "bc843",
      "name": " T-Shirt",
      "price": "92.00",
      "brand": "Fuelworks",
      "category": "T-Shirts",
      "position": "4"
    },
  ],
    "promotions": [{
  "id": "bts",
  "name": "Back To School",
  "creative": "HOME banner",
  "position": "right sidebar"
}],
productScopeCD:{
  '3':'cd3',
  '6' : "cd6"
},

productScopeCM:{
  '4':100,
}

})

G.post({
	dp:"test"
})

G.post({
	dp:"1"
})

*/
export default GA
