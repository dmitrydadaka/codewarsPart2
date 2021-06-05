var circleArea = function(r) {
    return  r>0&& +(r**2*Math.PI).toFixed(2)
   };
   
   var circleArea = function(radius) {
     return isNaN(radius) || radius <= 0?false:Math.round(Math.PI * Math.pow(radius, 2) * 100) / 100;
   };;
   
   var circleArea = function(radius) {
     return radius > 0 ? +(radius**2*Math.PI).toFixed(2) : false;
   };
   
   var circleArea = function(r) {
     return Number(r)>0?(Math.PI*(r**2)).toFixed(2)*1:false
   };