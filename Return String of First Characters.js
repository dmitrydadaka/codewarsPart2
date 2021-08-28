function makeString(s){
    return s.match(/\b\w/g).join``
  }
  
  function makeString(s){
  return s.replace(/(\w+ )|(\w+$)/g, e=>e[0])
  }