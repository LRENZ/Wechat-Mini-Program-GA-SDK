class helpers {
  constructor() {

  }

  objectToParams(obj){
    Object.keys(obj).map(function(key) {
  return key + '=' + obj[key];
}).join('&');
  }
  
}


export default helpers;
