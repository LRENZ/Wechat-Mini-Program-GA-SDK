
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
    common: {
      'X-Request-By': 'XMLHttpRequest',
    },
  },
  rest:'',
};


export default _default
