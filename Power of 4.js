function powerOf4(n) {
    if (n < 4 || n % 4 !== 0) {
      return false;
    }
    
    return true;
  }
  
  function powerOf4(n) {
    if(n !== (n | 0)) return false;
    return /^10+$/.test(n.toString(4));
  }
  
  function powerOf4(n) {
      if (n < 4) return false;
      while ( n >= 4) n /= 4;
      return n === 1;  
  }
  function powerOf4(n) {
    return Number.isInteger(n**1/4)&&n>1
  }
  