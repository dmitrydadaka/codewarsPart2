Array.prototype.remove_ = function(i, v){
    return i.filter(x=>v.indexOf(x)<0) 
   }

   Array.prototype.remove_ = function(i, v){
    return i.filter(x=>!v.includes(x)) 
   }
   
   Array.prototype.remove_ = function(i, v){
    return i.filter(x=>!v.some(y=>y==x)) 
   }