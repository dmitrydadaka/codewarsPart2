function predictAge(...l){
    return Math.hypot(...l)>>1
  }
  
  function predictAge(...a){
    return Math.floor(Math.sqrt(a.reduce((a,c)=>a+c**2,0))/2)
  }