function orderWord(s){
    return s?[...s].sort().join``:'Invalid String!'
  }
  
  function orderWord(s){
    return s?[...s].sort((a,b)=>a.charCodeAt()-b.charCodeAt()).join``:'Invalid String!'
  }