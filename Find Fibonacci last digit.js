
function getLastDigit(n) {
    const fib = new Array(61).fill(0)
    
    fib[0] = 0
    fib[1] = 1 
  
    for (let i = 2; i < 61; i++) 
      fib[i] = (fib[i - 1] + fib[i - 2]) % 10
      
    return fib[n % 60]
  }