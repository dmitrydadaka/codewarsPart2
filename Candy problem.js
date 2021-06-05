function candies(kids){
    return kids.length>1?kids.sort(function(a,b){return b-a}).reduce(function(a,b,i,arr){
      return a+(arr[0]-b)
    },0):-1;
 }
 
 function candies(kids){
   if(kids.every(x=>x==Math.max(...kids))&&kids.length>1) return 0
   return kids.reduce((a,c)=>a+Math.max(...kids)-c,0)>0?kids.reduce((a,c)=>a+Math.max(...kids)-c,0):-1
 }