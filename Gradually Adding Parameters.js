function add(...a) {
    return a.reduce((a,c,i)=>a+c*++i,0)
   }
   
   function add(...a) {
    return a.reduce((a,c,i)=>a+c*(i+1),0)
   }
   
   function add(...a) {
    return [...a].reduce((a,c,i)=>a+c*(i+1),0)
   }