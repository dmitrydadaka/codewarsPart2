function findSum(n) {
    if (n < 3) return 0
    return (n % 3 === 0 || n % 5 === 0) ? n + findSum(n-1) : findSum(n-1)
   }
   
   function findSum(n) {
     return Array.from(Array(n),(_,i)=>i+1).reduce((a,c)=>a+(c%3==0||c%5==0?c:0),0)
   }