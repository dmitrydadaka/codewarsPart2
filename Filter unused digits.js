function unusedDigits(...args){
    return "0123456789".replace(new RegExp('['+args.join('')+']','g'), '')
  }
  
  function unusedDigits(...a){
    return [...'0123456789'].filter(x=>!(a.join``).includes(x)).join``
  }