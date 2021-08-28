function alternateSqSum(arr){
    return arr.reduce((a,c,i)=>a+((i+1)%2?c:c**2),0)
  }