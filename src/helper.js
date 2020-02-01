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
}

const helper = new helpers()


export default helper;
