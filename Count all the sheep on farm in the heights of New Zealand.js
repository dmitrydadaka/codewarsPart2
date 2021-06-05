function lostSheep(f,s,t){
    return f.concat(s).reduce((a,b)=>a-b,t)
  }
  
  function lostSheep(f,y,total){
    return total - [].concat(f,y).reduce((a,c)=>a+c,0)
  }