
class validation{
  constructor(){
   this.v = this.init()
   this.requireList = ['tid','v','cid']
   //this.anyList = [['dp','dl','dh']]
   this.regexL = {
     "tid":"UA-[0-9]*-[0-9]*"
   }

  }

  add(fn){
    this.v.push(fn)
  }

  use(obj){
    var that = this
    for(let fn of this.v){
      obj = fn.call(that, obj)
    }
    return obj
  }

  checkRequire(obj){
    var that = this
    for(let x of this.requireList){
        if(!obj.hasOwnProperty(x)){
          throw new Error(`${x} is required`)
        }
    }
    return obj

  }


  addRequirelist(params){
     return this.requireList.push(params)
  }

  /*addAnyList(params){
    return this.anyList.push(params)
  }*/

  addRegexList(obj){
    this.regexL =  {
      ...this.regexL,
      ...obj
    }
    return this.regexL
  }


  regex(obj){
    let that = this
    for(let x in this.regexL){
      if(!obj.hasOwnProperty(x)){
        throw new Error(`No ${that.x} on object`)
      }
      let re = new RegExp(this.regexL[x],'ig')
      if(this.isString(x)){
      if(!String(obj[x]).match(re)){
        throw new Error(`${x} do not match ${that.regexL[x]}`)
      }
    }
  }
    return obj

  }


  length(obj){

    function objectToParams(obj){
  let queryString = Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
  return queryString
    }

    let objString = this.objectToParams(obj)
    if(objString.length > 8012){
      throw new Error("Hit was too long, hit length must under 8012")
    }
    return obj
  }

  /*anyone(obj){
    var that = this
    for(let l of this.anyList){
      if(Object.keys(obj).filter((val)=>l.includes(val)).length == 0){
        throw new Error(`must contains anyone of ${JSON.stringify(l)}`)
      }
    }

    return obj
  }*/

  pa(obj,rule,target){

  }

  checkValidateParamater(obj){

    for(let x in obj){
      //if(typeof x == 'object'{continue}
      if(this.isString(x)){
      if(String(obj[x]).match(/@?&=/i)){
        throw new Error("Can not contains '@?&=' in the params");
      }
    }
  }
    return obj
  }

  objectToParams(obj){
let queryString = Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
return queryString
  }

  init(obj){
    let t = []
    t.push(this.checkRequire)
    t.push(this.regex)
    //t.push(this.anyone)
    t.push(this.checkValidateParamater)
    t.push(this.length)
    return t
  }

  resetTodefault(){
    this.requireList = ['tid','v']
    //this.anyList = [['dp','dl','dh']]
    this.regexL = {
      "tid":"UA-[0-9]*-[0-9]*"
    }
  }

  isString(s){
    if (typeof s === 'string' || s instanceof String){
      return true
    }
    return false
  }


}

//check hit payload lengtg
//check required paramters
//check if there is any unvalid paramters ? &
//check if mobile or web
//check EEC object
//check pa for EEC


export default validation
