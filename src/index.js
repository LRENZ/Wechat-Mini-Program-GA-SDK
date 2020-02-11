import MP from './mp'

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
  enableLogger:false,
}

let GA = new MP(config)
//window.GA= GA
GA.interceptors.request.use(function(config) { // push a handler function before send request
  console.log('check if the data was valid') // process data before send to GA
  return config;
});

GA.get({
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

*/

//let s = {
  //debug:true,
  //validateHit:true,
  //proxyURL:"https://linpiner.com/",
//}
//let b = new MP(s)
//window.test = new MP()
//a.get("/debug/collect",{data:{test:1}})
//a.post("/debug/collect",{data:{test:2}})
//a.post({data:{tid:"UA-987654"}})
//b.post({data:{'test':1}})
//console.log(a.Interceptor)
//window.a = a
export default MP
