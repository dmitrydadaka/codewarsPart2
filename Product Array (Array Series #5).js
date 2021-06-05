function productArray(n){
    return n.map((x,i)=>n.reduce((a,b)=>a*b,1)/x)
  }