class Interceptor {
  constructor() {
    this._list = [];
    this.use = this.u
    this.list = this.l
    this.remove = this.clear
  }

  u(fn) {
    this._list.push(fn);
  }

  l() {
    return this._list;
  }
  clear(){
    this._list = []
  }
}


export default Interceptor;
