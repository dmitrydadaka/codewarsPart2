function pattern(n){
    let output=''
    let numb=""
    while(n>0){
      numb=n+numb
      output=numb+(output?'\n':'')+output
    n--}
      // Happy Coding ^_^
    return output;
   }
   
   function pattern(n){
   return n<1?'':Array.from(Array(n),(_,i)=>[...Array(n).keys()].map(e=>e+1).slice(i).join``).join`\n`
      // Happy Coding ^_^ 
   }