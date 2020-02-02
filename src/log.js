import Store from './common'
import helper from './helper'

class Logger {
  constructor(config){
    this.log = new Store()
    this.maxLogLength = config.maxLogLength
    this.debug = config.debug
  }
    enqueue(val) {
      if(!this.debug){
        console.log("debug mode paused, won't record any log right now")
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
