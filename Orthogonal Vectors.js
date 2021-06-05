function isOrthogonal(u,v) {
    return !u.reduce((a,c,i)=>a+c*v[i], 0)
  }
  
  function isOrthogonal(u,v) {
    return u.map((x,i)=>x*v[i]).reduce((a,b)=>a+b,0)==0
  }