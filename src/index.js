import MP from './mp'
let t = {
  transferRequest(config){
    config.test = "new tt"
    return config
  },

  transferResponse(res){
    res.test = "test"
    console.log(res)
    return res
  },
  validateHit:true,
}
let a = new MP(t)

a.interceptors.request.use(function(config) {
  config.rest = 'true';
  //alert('tt')
  return config;
});


let s = {
  debug:true,
  validateHit:true,
  proxyURL:"https://linpiner.com/",
}
let b = new MP(s)
//window.test = new MP()
//a.get("/debug/collect",{data:{test:1}})
//a.post("/debug/collect",{data:{test:2}})
b.post({data:{tid:"UA-123456"}})

//console.log(a.Interceptor)

window.a = a
export default MP
