import MP from './mp'
let t = {
  transferRequest(config){
    config.data.dp = "/test"
    return config
  },
  data:{
    'cid':"1",
  },

  transferResponse(res){
    res.test = "test"
    console.log(res)
    return res
  },
  validateHit:false,

  onSuccess(config){
    console.log("success")
  },
  onError(config){
    console.log("Error")
  }
}


let a = new MP(t)

a.interceptors.request.use(function(config) {
  config.rest = 'true';
  //alert('tt')
  return config;
});


//let s = {
  //debug:true,
  //validateHit:true,
  //proxyURL:"https://linpiner.com/",
//}
//let b = new MP(s)
//window.test = new MP()
//a.get("/debug/collect",{data:{test:1}})
//a.post("/debug/collect",{data:{test:2}})
a.post({data:{tid:"UA-123456",v:"1"}})
a.get({data:{"cd1":"test"}})
//a.post({data:{tid:"UA-987654"}})
//b.post({data:{'test':1}})
//console.log(a.Interceptor)

window.a = a
export default MP
