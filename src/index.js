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


window.test = new MP()
a.get("/debug/collect",{data:{test:1}})
a.post("/debug/collect",{data:{test:2}})

//console.log(a.Interceptor)
console.log(a)
