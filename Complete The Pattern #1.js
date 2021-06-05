function pattern(n){
    if (n < 1) return '';
    if (n === 1) return '1';
    return pattern(n - 1) + "\n" + `${n}`.repeat(n);
  }
  
  function pattern(n){
   var output="";
     for (var i=1;i<=n;i++){
         for (var j=0;j<i;j++){
           output += i;
         }
         if (i === n) break;
         output += "\n";
     }
   return output;
  }
  
  function pattern(n){
   return Array.from({length:n},(_,i)=>`${i+1}`.repeat(i+1)).join`\n`
  }