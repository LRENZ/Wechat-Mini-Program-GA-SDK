
const _default = {
  debug:false,
  proxyURL:'',
  GAdebugURL:"https://www.google-analytics.com/debug/collect",
  validateHit:false,
  maxLogLength:10,
  GAURL:"https://www.google-analytics.com/collect",
  method: 'POST',
  headers: {
      'X-Request-By': 'XMLHttpRequest',
      'Content-Type':'application/x-www-form-urlencoded'
  },
  rest:'',
  wxRequestTimeout:2000,
  enableLogger:true,
  validateParams:true,
  LoggerName:"gaLog",
};


export default _default
