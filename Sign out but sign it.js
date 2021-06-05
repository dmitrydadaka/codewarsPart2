function sign(number){
    return ((number > 0) - (number < 0)) || +number;
  }
  
  function sign(n) {
    return isNaN(n) ? NaN : !+n ? 0 : n < 0 ? -1 : 1;
  }
  
  function sign(n){
    return n > 0 ? 1 : n == 0 ? 0 : n < 0 ? -1 : NaN;
  }
  
  function sign(n){
    return n*1>0?1:n*1==0?0:isNaN(n*1)?NaN:-1
  }