function largestPower(n){
    return --n?Math.log10(n)/Math.log10(3)^0:-1
  }
  
  function largestPower(n){
    return Math.ceil(Math.log10(n)/Math.log10(3))-1
  }
  
  function largestPower(n){
    for(i=0;i<n;i++){
     if(3**i>=n)return i-1 }
  }