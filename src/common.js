class Store{
  constructor(){
    this.init()
    this.GAlog = []
  }

init(){
  if(this.env() == "WEB"){
    this.GAlog = this.GAlog || []
    return this.GAlog
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
      this.GAlog.push(val)
      this.GAlog = this.GAlog.reverse()
      window.localStorage.setItem("gaLog",JSON.stringify(this.GAlog));
      return this.GAlog
    }

    if(this.env() ==WECHAT){

    }

  }

  remove(){
    if(this.env() == "WEB"){
      this.GAlog = []
      window.localStorage.clear()
      return this.GAlog
    }
    //wechat
  }

  shift(){
    if(this.env() == "WEB"){
      this.GAlog.shift()
      this.GAlog = this.GAlog.reverse()
      window.localStorage.setItem("gaLog",JSON.stringify(this.GAlog));
      return this.GAlog
    }

    //wechat
  }

  size(){
    if(this.env() == "WEB"){
      return this.GAlog.length
    }
    //wechat
  }

  sortByTime(a,b){
  return new Date(a.time) - new Date(b.time)
}





}

export default Store
