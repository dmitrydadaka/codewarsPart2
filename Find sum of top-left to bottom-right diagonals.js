function diagonalSum(x){
    return x.reduce((a,c,i)=>a+c[i],0)
  }