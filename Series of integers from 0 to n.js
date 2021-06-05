function generateIntegers(n) {
    return [...Array(n+1).keys()] 
   }
   
   function generateIntegers(n) {
    return Array.from({length:n+1},(_,i)=>i)
   }