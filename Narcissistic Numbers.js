function isNarcissistic(n){
    return (n+'').split('').reduce((a,c,i,_)=>a+Math.pow(c,_.length),0)==n
  }
  
  function isNarcissistic(n){
    return n === +n.toString().split('').reduce((s, v, i, arr) => s + Math.pow(v, arr.length),0)
  }
  
  function isNarcissistic(n){
    return (n+'').split('').reduce((a,c)=>a+c**(n+'').length,0)==n
  }