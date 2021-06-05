function factorial(n) {
    if (n < 0 || n > 12)
      throw new RangeError();
    return n <= 1 ? 1 : n * factorial(n - 1);
  }
  
  function factorial(n)
  {
    return n<0||n>12?function(){throw RangeError()}(): Array.from({length:n}, (_,i)=>i+1).reduce((a,c)=>a*c,1)
  }