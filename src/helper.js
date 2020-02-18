class helpers {
  constructor() {
  }



  objectToParams(obj){
let queryString = Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
return queryString
  }

  Error(msg){
    if(msg){
      throw new Error(msg);
    }
  }

  merge(dest, src) {
  if(JSON.stringify(src) === '{}') return dest
  for (let name in src) {
    if (typeof src[name] == 'object') {
      if (!dest[name]) {
        dest[name] = {};
      }

      this.merge(dest[name], src[name]);
    } else {
      dest[name] = src[name];
    }
  }
  return dest
}

formatTime(date){
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(this.formatNumber).join('/') + ' ' + [hour, minute, second].map(this.formatNumber).join(':')
}

formatNumber(n){
  n = n.toString()
  return n[1] ? n : '0' + n
}

generateUUID(){
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x7|0x8)).toString(16);
    });
    return uuid;
}

  deepClone(obj) {
    var copy;

    // Handle number, boolean, string, null and undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = this.deepClone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = this.deepClone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}



}





const helper = new helpers()


export default helper;
