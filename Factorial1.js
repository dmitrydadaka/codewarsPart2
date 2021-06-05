function factorial(n){
    return n?factorial(n-1)*n:1
  }
  
  function factorial(n){
    return Array.from(Array(n),(_,i)=>i+1).reduce((a,c)=>a*c,1)
  }