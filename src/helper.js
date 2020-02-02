class helpers {
  constructor() {

  }

  objectToParams(obj){
    Object.keys(obj).map(function(key) {
  return key + '=' + obj[key];
}).join('&');
  }

  Error(msg){
    if(msg){
      throw new Error(msg);
    }
  }

  merge(dest, src) {
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



}

const helper = new helpers()


export default helper;
