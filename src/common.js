class Store{
  constructor(name){
    this.GAlog = this.GAlog || this.getLog() || []
    if(typeof name != "string"){
      throw new Error("Logger Name must be string")
    }

    this.loggerName = name ||  "gaLog"

  }
  env(){
    if(typeof wx == "object"){

      return "WECHAT"
    }

    if (!!document.URL){

      return "WEB"
    }
  }

  add(val){
    if(this.env() == "WEB"){
      this.GAlog.push(val)
      this.GAlog = this.GAlog.reverse()
      window.localStorage.setItem(this.loggerName,JSON.stringify(this.GAlog));
      return this.getLog()
    }

    if(this.env() == "WECHAT"){
      this.GAlog.push(val)
      this.GAlog = this.GAlog.reverse()
      wx.setStorage({key:this.loggerName,data:this.GAlog})
      return this.getLog()
    }

  }

  remove(){
    if(this.env() == "WEB"){
      this.GAlog = []
      window.localStorage.clear()
      return this.getLog()
    }

    if(this.env() == 'WECHAT'){
      this.GAlog = []
      wx.removeStorage({key: this.loggerName})
      return this.getLog()
    }
    //wechat
  }

  shift(){
    if(this.env() == "WEB"){
      this.GAlog.shift()
      this.GAlog = this.GAlog.reverse()
      window.localStorage.setItem(this.loggerName,JSON.stringify(this.GAlog));
      return this.getLog()
    }

    if(this.env() == "WECHAT"){
      this.GAlog.shift()
      this.GAlog = this.GAlog
      wx.setStorage({key:this.loggerName,data:this.GAlog})
      return this.getLog()
    }

    //wechat
  }

  size(){
     let galog = this.getLog() || 0
     //console.log(galog)
     return galog.length || 0
    //wechat
  }

  sortByTime(a,b){
  return new Date(a.time) - new Date(b.time)
}

   getLog(){
     if(this.env() == "WECHAT"){
       var t =wx.getStorageSync(this.loggerName)
     }
     //console.log(t)

     return t

     if(this.env() == "WEB"){
       try{
         return JSON.parse(window.localStorage.getItem(this.loggerName))
       }catch(e){
         return window.localStorage.getItem(this.loggerName)
       };
     }
   }

}

export default Store
