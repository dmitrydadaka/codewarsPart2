function factorial (n) {
    return n<0?null:n==0?1:n*factorial(n-1)
    }
    
    function factorial (n) {
    return n<0?null:
    Array.from(Array(n),(_,i)=>i+1).reduce((a,b)=>a*b,1)
    }