
const _default = {
  debug:true,
  proxyURL:'',
  GAdebugURL:"https://www.google-analytics.com/debug/collect",
  KeepTransferRequest:false,
  KeepTransferReponse:false,
  validateHit:false,
  maxLogLength:20,
  GAURL:"https://www.google-analytics.com/collect",
  method: 'POST',
  headers: {
      'X-Request-By': 'XMLHttpRequest',
      'Content-Type':'application/x-www-form-urlencoded'
  },
  rest:'',
  wxRequestTimeout:2000,
};


export default _default
