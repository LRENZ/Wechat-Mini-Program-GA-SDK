class Store{
  constructor(){
    this.init()
  }

init(){
  if(this.env() == "WEB"){
    window.GAlog = window.GAlog || []
    return window.GAlog
  }

  if(this.env() ==WECHAT){

  }
}

  env(){
    if (typeof window == "object"){
      console.log("on Web")
      return "WEB"
    }
    if(typeof wx == "object"){
      console.log("on wechat")
      return "WECHAT"
    }
  }



  add(val){
    if(this.env() == "WEB"){
      window.GAlog.push(val)
      window.localStorage.setItem("gaLog",JSON.stringify(window.GAlog));
      return window.GAlog
    }

    if(this.env() ==WECHAT){

    }

  }

  remove(){
    if(this.env() == "WEB"){
      window.GAlog = []
      window.localStorage.clear()
      return window.GAlog
    }
    //wechat
  }

  shift(){
    if(this.env() == "WEB"){
      window.GAlog.shift()
      window.localStorage.setItem("gaLog",JSON.stringify(window.GAlog));
      return window.GAlog
    }

    //wechat
  }

  size(){
    if(this.env() == "WEB"){
      return window.GAlog.length
    }
    //wechat
  }




}

export default Store
