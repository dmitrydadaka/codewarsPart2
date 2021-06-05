function solve(s){
    return [/[A-Z]/,/[a-z]/,/\d/,/\W/].map(x=>s.split(x).length-1)
   }
   
   function solve(s){
    return [s.replace(/[^A-Z]/g,'').length,s.replace(/[^a-z]/g,'').length,
            s.replace(/\D/g,'').length, s.replace(/[a-z0-9]/gi,'').length]
   }