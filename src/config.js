const _default = {
  debug:true,
  proxyURL:'',
  GAdebugURL:"https://www.google-analytics.com/debug/collect",
  KeepTransferRequest:false,
  KeepTransferReponse:false,
  validateHit:false,
  GAURL:"https://www.google-analytics.com/collect",
  method: 'get',
  headers: {
    common: {
      'X-Request-By': 'XMLHttpRequest',
    },
  },
  data:{

  },
  rest:'',
};

export default _default
