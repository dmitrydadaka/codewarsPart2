function count(array){
    let o={}
    array.map(x=>o[x]?o[x]++:o[x]=1)
    return o
  }
  
  function count(array){
  return array.reduce((x,y)=>{ return x[y]?x[y]++:x[y]=1, x},{})
  }