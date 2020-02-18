import Store from './common'
import helper from './helper'

class Logger {
  constructor(config){
    this.log = new Store(config.LoggerName)
    this.maxLogLength = config.maxLogLength
    this.enableLogger = config.enableLogger
    this.init()
  }

  init(){

    if(this.size() == 0){


    this.log.add(
      {
         time:helper.formatTime(new Date),
         Launch:"Logger Init"
      }
    )
  }
  }

    enqueue(val) {
      if(!this.enableLogger){
        console.log("debug mode paused, won't record any log right now")
        return false
      }

      if(this.size() < this.maxLogLength){
        this.log.add({
          time : helper.formatTime(new Date),
          ...val,
        });
      }
      if(this.size() >= this.maxLogLength){
        this.log.shift()
        this.log.add({
          time:helper.formatTime(new Date),
          ...val})
      }
      console.log(this.log)
      return this.log
    }

    dequeue() {
        let de = this.log.shift();
        return de
    }


    isEmpty() {
        return this.log.length === 0;
    }

    clear(){
      this.log.remove()
      return this.log
    }

    size(){
      return this.log.size()
    }
    getlog(){
      return this.log
    }
}


export default Logger
