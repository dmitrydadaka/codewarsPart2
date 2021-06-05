const divisions = (n, d) => {
    var c=0;
    while (n>=Math.pow(d,c+1))
      c++;
    return c;
  };
  
  const divisions = (n, divisor) => Math.floor(Math.log(n) / Math.log(divisor));
  
  const divisions = (n, divisor) => {
    let i=0
    while(n>=divisor){
      n=Math.floor(n/divisor)
      i++
    }
    return i
  };