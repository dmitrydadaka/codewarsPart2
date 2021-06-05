function sumTriangularNumbers(n) {
    return n>0?(n+1)*n/2+sumTriangularNumbers(n-1):0
  }
  
  function sumTriangularNumbers(n) {
    return n>0|0&&n++*n++*n/6
  }
  
  function sumTriangularNumbers(n) {
    return n<0?0:n*(n+1)*(n+2)/6
  }
  
  function sumTriangularNumbers(n) {
    return n<0?0:[...Array(n).keys()].reduce((a,c,i)=>a+[...Array(i+1).keys()].reduce((a,c)=>a+c+1,0),0)
  }
  
  function sumTriangularNumbers(n) {
    let s=0
    for(let i=1;i<=n;i++){
   s+= [...Array(i).keys()]
      .reduce((a,c)=>a+c+1,0)
      }
    return s
  }