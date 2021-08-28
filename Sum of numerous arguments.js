function findSum(...a){
    return a.reduce((a,c)=>a<0||c<0?-1:a+c,0)
  }
  
  function findSum(...a){
    return a.every(x=>x>-1)?a.reduce((a,c)=>a+c,0):!a?0:-1
  }